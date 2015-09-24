
import impError = require("../../typescript/error/errorjq");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impCommonCode = require("../Controls/ControlCommonJQ");

var initOnceFlag = false;

export module Html {

    export class HtmlJQ {

        public Init() {

            if (initOnceFlag == false) {
                initOnceFlag = true;
                this.AttachEvents();
            }
        }

     
        public static IsExternalUrl: boolean;

        public AttachEvents() {

            jQuery(".action-button-insert-html-clear").click(function () {

                jQuery(".input-html").val("");

            });

            jQuery(".action-button-insert-html").click(function () {

                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;  

                if (selectedElement != undefined) {

                    var html = jQuery(".input-html").val()

                    var htmlObj = jQuery(document.createElement("div"));

                    htmlObj.css("float", "left");
                    htmlObj.addClass("key");

                    htmlObj.append(jQuery.parseHTML(html, document, true));

                    var innerHtml = jQuery(htmlObj).html();

                    selectedElement.append(htmlObj);
                }

                jQuery("#control-insert-html").hide();

            });
        }

        public static Show() {

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-insert-html").addClass("control-active");

            jQuery("#control-insert-html").show();
            jQuery(".input-html").val("");
        }

        public static Close() {

        }      

        public static ProcessSelectNotify() {

        }
    }
}