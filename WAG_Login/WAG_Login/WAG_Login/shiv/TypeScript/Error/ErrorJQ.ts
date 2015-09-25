//console.debug("line:", /\(file:[\w\d/.-]+:([\d]+)/.exec(new Error().stack)[1]);


export module ErrorHandle {

    export class ErrorJQ {

        public static interval;
        public static notifyId = "#notify";
        private errorClassName: string;

        HandleError(handle: boolean) {

            if (handle === true) {
                window.onerror = this.WindowHandleError;
            }

        }

        WindowHandleError(err, url, line) {
            alert(err + '\n on page: ' + url + '\n on line: ' + line);
        }

        SetErrorClassName(errorClassName: string) {
            this.errorClassName = errorClassName;
        }

        NotifyHelp(helpmsg: JQuery) {
            jQuery("#notify").clearQueue();

            jQuery("#notify").html("");
            jQuery("#notify").append(helpmsg);

            jQuery("#notify").css("display", "block");

            this.TriggerHideNotify();
        }

        Notify(error: string) {

            jQuery("#notify").clearQueue();

            jQuery("#notify").html(error);

            jQuery("#notify").css("display", "block");

            this.TriggerHideNotify();

        }

        TriggerHideNotify() {
            window.clearTimeout(ErrorJQ.interval);
            ErrorJQ.interval = window.setTimeout(this.TimeOutHandler, 10000);
        }

        TimeOutHandler() {
            jQuery("#notify").css("display", "none");
            window.clearTimeout(ErrorJQ.interval);
        }

        AddErrorControl(element: string) {
            jQuery(element).addClass("error-" + this.errorClassName);
        }

        ActionFail(errorMessage?: string) {
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


        }

        ActionHelp(helpMessage: string, changeColor?: string) {

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
        }

        ActionSuccess(successMessage?: string) {

            jQuery(".error-" + this.errorClassName).css("border", "1px solid green");
            jQuery(".error-" + this.errorClassName).removeClass("error-" + this.errorClassName);

            // trim method should be added to == ""
            if (successMessage == undefined || successMessage == "") {
                successMessage = "Action Success";
            }

            jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
            jQuery(this.GetNotifyElement()).addClass("success-notify-background");

            this.Notify(successMessage);

        }

        GetNotifyElement() {
            return jQuery("#notify");
        }

        LogMessage(message: string) {
            try {

               // console.log('Report Enginerr : anil.silverlight@gmail.com : (message) :' + message);
            }
            catch (e) {

            }
        }

        Try(callback: Function) {

            if (typeof (callback) != 'function') {
                this.LogMessage('method is not a function');
                return;
            }

            try {
                callback();
            }
            catch (ex) {
                alert(ex);
                this.LogMessage(ex)
            }
        }

        /* Experimental...
        TryThis(callback, $this, param1, param2, param3, param4, param5) {
    
            if (callback == undefined) {
                return;
            }
    
            try {
    
                if ($this == undefined) {
                    if (param1 == undefined) {
                        callback();
                    }
                    else {
                        callback(param1);
                    }
                }
                else {
                    if (param1 == undefined) {
                        eval(' $this.' + callback + '()');
                    }
                    else {
                        eval(' $this.' + callback + '(' + param1 + ')');
                    }
                }
            }
            catch (ex) {
                this.LogMessage(ex)
                alert(ex);
            }
        }*/
    }

}

