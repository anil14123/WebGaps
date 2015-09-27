//console.debug("line:", /\(file:[\w\d/.-]+:([\d]+)/.exec(new Error().stack)[1]);
define(["require", "exports"], function (require, exports) {
    var ErrorHandle;
    (function (ErrorHandle) {
        var ErrorJQ = (function () {
            function ErrorJQ() {
            }
            ErrorJQ.prototype.HandleError = function (handle) {
                if (handle === true) {
                    window.onerror = this.WindowHandleError;
                }
            };
            ErrorJQ.prototype.WindowHandleError = function (err, url, line) {
                alert(err + '\n on page: ' + url + '\n on line: ' + line);
            };
            ErrorJQ.prototype.SetErrorClassName = function (errorClassName) {
                this.errorClassName = errorClassName;
            };
            ErrorJQ.prototype.NotifyHelp = function (helpmsg) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html("");
                jQuery("#notify").append(helpmsg);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.Notify = function (error) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html(error);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.TriggerHideNotify = function () {
                window.clearTimeout(ErrorJQ.interval);
                ErrorJQ.interval = window.setTimeout(this.TimeOutHandler, 10000);
            };
            ErrorJQ.prototype.TimeOutHandler = function () {
                jQuery("#notify").css("display", "none");
                window.clearTimeout(ErrorJQ.interval);
            };
            ErrorJQ.prototype.AddErrorControl = function (element) {
                jQuery(element).addClass("error-" + this.errorClassName);
            };
            ErrorJQ.prototype.ActionFail = function (errorMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "2px solid red");
                // trim method should be added to == ""
                if (errorMessage == undefined || errorMessage == "") {
                    errorMessage = "Action Failed";
                }
                else {
                    errorMessage = "<div class='error-notify-block'>Action Failed </div><br/>" + errorMessage;
                }
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                jQuery(this.GetNotifyElement()).addClass("error-notify-background");
                this.Notify(errorMessage);
            };
            ErrorJQ.prototype.ActionHelp = function (helpMessage, changeColor) {
                if (helpMessage != undefined) {
                    var index = helpMessage.toLowerCase().indexOf("page loaded");
                    if (index != -1) {
                        jQuery(".jq-loading").hide();
                        console.log("Page Loaded");
                    }
                }
                var helpContainer = jQuery(document.createElement("div"));
                if (changeColor != undefined) {
                    helpContainer.addClass("yellow-green-notify-background");
                }
                else {
                    helpContainer.addClass("yellow-notify-background");
                }
                helpContainer.html("");
                helpContainer.append(helpMessage);
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                this.NotifyHelp(helpContainer);
            };
            ErrorJQ.prototype.ActionSuccess = function (successMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "1px solid green");
                jQuery(".error-" + this.errorClassName).removeClass("error-" + this.errorClassName);
                // trim method should be added to == ""
                if (successMessage == undefined || successMessage == "") {
                    successMessage = "Action Success";
                }
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).addClass("success-notify-background");
                this.Notify(successMessage);
            };
            ErrorJQ.prototype.GetNotifyElement = function () {
                return jQuery("#notify");
            };
            ErrorJQ.prototype.LogMessage = function (message) {
                try {
                }
                catch (e) {
                }
            };
            ErrorJQ.prototype.Try = function (callback) {
                if (typeof (callback) != 'function') {
                    this.LogMessage('method is not a function');
                    return;
                }
                try {
                    callback();
                }
                catch (ex) {
                    alert(ex);
                    this.LogMessage(ex);
                }
            };
            ErrorJQ.notifyId = "#notify";
            return ErrorJQ;
        })();
        ErrorHandle.ErrorJQ = ErrorJQ;
    })(ErrorHandle = exports.ErrorHandle || (exports.ErrorHandle = {}));
});
//# sourceMappingURL=errorjq.js.map