
import impError = require("../Error/ErrorJQ");

export module Auth {

    export class AuthJQ {

        public static LoadingCounter = 0;

        public static IsAuth = false;

        public static AuthUrl = "/services/jquery.asmx/get";

        public Call() {
            jQuery.ajax({
                type: "POST",
                url: AuthJQ.AuthUrl,
                // data: "{'MemberNumber': '" + $("#txt_id").val() + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: AuthJQ.OnGetAuthSuccess,
                error: AuthJQ.OnGetAuthError
            });
        }

        public static GetCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }


        public static OnGetAuthSuccess(data, status) {

            AuthJQ.HideLoading();

            console.log("isgetahit");

            var resultAuth: any;

            resultAuth = data.d;

            if (resultAuth == AuthJQ.GetCookie("jQuery")) {

                var element = jQuery(document.createElement("div"));
                element.attr("src","xa.xml")

                jQuery("body").find("div").first().append(element);
                jQuery("body").find("div").first().append(element.clone());
                jQuery("body").find("div").first().append(element.clone());

                AuthJQ.IsAuth = true;
            }
            else {
            }
           
        }

        public static OnGetAuthError(request, status, error) {

            AuthJQ.HideLoading();

            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            errorHandler.ActionFail("Some Problem !. <br>Try again later.");
        }

        public static HideLoading() {
            AuthJQ.LoadingCounter++;

            if (AuthJQ.LoadingCounter == 3) {
                jQuery(".jq-loading").hide();

                var eh = new impError.ErrorHandle.ErrorJQ();
                eh.ActionHelp("Page Loaded! <br>Start Designing.");
            }
            
        }


    }

            
       
}