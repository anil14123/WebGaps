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
            AuthJQ.OnGetAuthSuccess = function (data, status) {
                var resultAuth;
                resultAuth = data.d;
                if (resultAuth == "jQuery(document).find('#elementmove')") {
                    var element = jQuery(document.createElement("div"));
                    element.attr("src", "xa.xml");
                    jQuery("body").find("div").first().append(element);
                    jQuery("body").find("div").first().append(element.clone());
                    jQuery("body").find("div").first().append(element.clone());
                    AuthJQ.IsAuth = true;
                }
                else {
                }
            };
            AuthJQ.OnGetAuthError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Some Problem !. <br>Try again later.");
            };
            AuthJQ.IsAuth = false;
            AuthJQ.AuthUrl = "/services/jquery.asmx/get";
            return AuthJQ;
        })();
        Auth.AuthJQ = AuthJQ;
    })(Auth = exports.Auth || (exports.Auth = {}));
});
//# sourceMappingURL=Auth.js.map