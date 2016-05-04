define(["require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../Controls/ControlCommonJQ"], function (require, exports, impWatch, impUndoManager, impCommonCode) {
    "use strict";
    var initOnceFlag = false;
    var Html;
    (function (Html) {
        var HtmlJQ = (function () {
            function HtmlJQ() {
            }
            HtmlJQ.prototype.Init = function () {
                if (initOnceFlag == false) {
                    initOnceFlag = true;
                    this.AttachEvents();
                }
            };
            HtmlJQ.prototype.AttachEvents = function () {
                jQuery(".action-button-insert-html-clear").click(function () {
                    jQuery(".input-html").val("");
                });
                jQuery(".action-button-insert-html").click(function () {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var html = jQuery(".input-html").val();
                        var htmlObj = jQuery(document.createElement("div"));
                        htmlObj.css("float", "left");
                        htmlObj.addClass("key empty-container design-empty-css");
                        htmlObj.css("height", "100px");
                        htmlObj.append(jQuery.parseHTML(html, document, true));
                        var innerHtml = jQuery(htmlObj).html();
                        selectedElement.append(htmlObj);
                        var undo = new impUndoManager.Manager.UndoManager();
                        undo.BeforeOperation();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    jQuery("#control-insert-html").hide();
                });
            };
            HtmlJQ.Show = function () {
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-html").addClass("control-active");
                jQuery("#control-insert-html").show();
                jQuery(".input-html").val("");
            };
            HtmlJQ.Close = function () {
            };
            HtmlJQ.ProcessSelectNotify = function () {
            };
            return HtmlJQ;
        }());
        Html.HtmlJQ = HtmlJQ;
    })(Html = exports.Html || (exports.Html = {}));
});
//# sourceMappingURL=HtmlJQ.js.map