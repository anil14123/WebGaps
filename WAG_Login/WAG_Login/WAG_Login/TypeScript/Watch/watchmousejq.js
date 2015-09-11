/// <reference path="../../library/jquery.d.ts" />
/// <reference path="../controls/controlsjq.ts" />
/// <reference path="../smartmenu/smartmenujq.ts" />
define(["require", "exports", "../Common/CommonMethodsJQ", "../Controls/ControlsJQ", "../Controls/TextJQ", "../Controls/ImageJQ", "../Controls/FontJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../SmartMenu/SmartMenuJQ", "../Error/ErrorJQ", "../ContextMenu/Contextmenujq", "../controls/bijq"], function (require, exports, impCommon, impAddRow, impText, impImage, impFont, impBorder, impColor, impHeightWidth, impError, impCtxMenu, impBi) {
    var G_isAttachedWatch = false;
    var isWatchReady = false;
    var Watch;
    (function (Watch) {
        var MouseJQ = (function () {
            function MouseJQ() {
            }
            MouseJQ.RemoveAndResetRemovableRow = function () {
                if (jQuery(".removable-row").length > 0) {
                    jQuery(".removable-row").removeClass("removable-row");
                    jQuery(".columns-pending").removeClass("columns-pending");
                    MouseJQ.selectedElement = undefined;
                }
                if (MouseJQ.selectedElement == undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Please select a element.");
                }
            };
            MouseJQ.ProcessClick = function (e) {
                var common = new impCommon.Common.CommonMethodsJQ();
                if (jQuery(".close-preview").css("display") == "none") {
                    // for cursor...
                    //$(document).mousemove(function (e) {
                    //    if (e.target != undefined) {
                    //        if ((e.pageX >= e.target.clientLeft + e.target.clientWidth - 2)
                    //            && (jQuery(e.target).closest("#contextMenu").length == 0
                    //                && jQuery(e.target).closest(".control-page").length == 0))
                    //             {
                    //            //var rect = e.target.getBoundingClientRect();
                    //            jQuery(".cursor-right").show();
                    //        }
                    //        else {
                    //            jQuery(e.target).removeClass("jq-cursor");
                    //        }
                    //        jQuery(".cursor-right").css("left", e.pageX -10 + "px");
                    //        jQuery(".cursor-right").css("top", e.pageY -10 + "px");
                    //    }
                    //});
                    if (MouseJQ.selectedElement != undefined && MouseJQ.selectedElement.length > 0) {
                        // this is the previous element...
                        MouseJQ.selectedElement.removeClass("image-selection");
                        MouseJQ.selectedElement.removeClass("design-select-element-just-mark");
                    }
                    MouseJQ.selectedElement = jQuery(e.target);
                    MouseJQ.selectedElement = MouseJQ.selectedElement.closest(".key");
                    if (MouseJQ.selectedElement.hasClass("key") == false) {
                        MouseJQ.selectedElement = jQuery("#noelement");
                    }
                    MouseJQ.selectedElement.addClass("design-select-element-just-mark");
                    //MouseJQ.selectedElement.css("outline", "dashed 5px black");
                    var activeControl = MouseJQ.GetActiveControl();
                    if (activeControl != undefined && activeControl != "") {
                        switch (activeControl.toLowerCase()) {
                            case 'add-row':
                                break;
                            case 'height-width':
                                break;
                            case 'image-library':
                                impImage.Image.SelfJQ.ProcessSelectNotify();
                                break;
                            case 'color':
                                break;
                            case 'border':
                                break;
                            case 'insert-text':
                                impText.Text.TextJQ.ProcessSelectNotify();
                                break;
                            default:
                                break;
                        }
                    }
                    impAddRow.Page.AddRowJQ.ProcessSelectNotify(); // order here is important... because border is applying before removable row border property is removed.
                    impColor.Color.ColorJQ.ProcessSelectNotify();
                    impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                    impBorder.Border.BorderJQ.ProcessSelectNotify();
                    impFont.Font.FontJQ.ProcessSelectNotify();
                    impBi.BI.BIJQ.ProcessSelectNotify();
                    if (MouseJQ.selectedElement != undefined) {
                        if (!MouseJQ.selectedElement.hasClass("jqte"))
                            MouseJQ.selectedElement.addClass("image-selection");
                    }
                }
            };
            MouseJQ.GetActiveControl = function () {
                var activeControl = "";
                var controls = jQuery(".control-page");
                for (var i = 0; i < controls.length; i++) {
                    if (jQuery(controls[i]).css("display") == "block") {
                        activeControl = jQuery(controls[i]).attr("name");
                        break;
                    }
                }
                return activeControl;
            };
            MouseJQ.prototype.WatchPage = function () {
                jQuery(document).ready(function () {
                    if (G_isAttachedWatch == false) {
                        G_isAttachedWatch = true;
                        jQuery("page").click(function (e) {
                            MouseJQ.ProcessClick(e);
                        });
                        jQuery(document).keyup(function (e) {
                            var ESC = 27;
                            var ENTER = 13;
                            if (e.which === ESC) {
                                impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
                                e.preventDefault();
                            }
                        });
                    }
                });
            };
            return MouseJQ;
        })();
        Watch.MouseJQ = MouseJQ;
    })(Watch = exports.Watch || (exports.Watch = {}));
});
//# sourceMappingURL=watchmousejq.js.map