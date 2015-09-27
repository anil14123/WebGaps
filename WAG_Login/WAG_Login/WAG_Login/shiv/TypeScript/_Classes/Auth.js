define(["require", "exports", "../Error/ErrorJQ"], function (require, exports, impError) {
    var Auth;
    (function (Auth) {
        var AuthJQ = (function () {
            function AuthJQ() {
            }
            AuthJQ.prototype.Call = function () {
                jQuery.ajax({
                    type: "POST",
                    url: AuthJQ.AuthUrl,
                    // data: "{'MemberNumber': '" + $("#txt_id").val() + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: AuthJQ.OnGetAuthSuccess,
                    error: AuthJQ.OnGetAuthError
                });
            };
            AuthJQ.GetCookie = function (cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ')
                        c = c.substring(1);
                    if (c.indexOf(name) == 0)
                        return c.substring(name.length, c.length);
                }
                return "";
            };
            AuthJQ.OnGetAuthSuccess = function (data, status) {
                AuthJQ.HideLoading();
                var resultAuth;
                resultAuth = data.d;
                if (resultAuth == AuthJQ.GetCookie("jQuery")) {
                    var element = jQuery(document.createElement("div"));
                    element.attr("src", "xa.xml");
                    jQuery("body").find("div").first().append(element);
                    jQuery("body").find("div").first().append(element.clone());
                    jQuery("body").find("div").first().append(element.clone());
                    AuthJQ.IsAuth = true;
                }
                else {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionFail("Some Problem !. <br>Try refreshing.");
                    AuthJQ.HideLoading();
                }
            };
            AuthJQ.OnGetAuthError = function (request, status, error) {
                AuthJQ.HideLoading();
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Some Problem !. <br>Try again later.");
            };
            AuthJQ.HideLoading = function () {
                AuthJQ.LoadingCounter++;
                if (AuthJQ.LoadingCounter == 3) {
                    jQuery(".jq-loading").hide();
                    var eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Page Loaded! <br>Start Designing.");
                }
            };
            AuthJQ.LoadingCounter = 0;
            AuthJQ.IsAuth = false;
            AuthJQ.AuthUrl = "/services/jquery.asmx/get";
            return AuthJQ;
        })();
        Auth.AuthJQ = AuthJQ;
    })(Auth = exports.Auth || (exports.Auth = {}));
});
//# sourceMappingURL=Auth.js.map