/// <reference path="../../../library/jquery.d.ts" />
define(["require", "exports", "../Common/CommonMethodsJQ", "../Controls/ControlsJQ", "../Controls/TextJQ", "../Controls/ImageJQ", "../Controls/FontJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../SmartMenu/SmartMenuJQ", "../Error/ErrorJQ", "../ContextMenu/Contextmenujq", "../controls/bijq", "../JQte/OnInsert", "../MalFormed/MalFormedJQ", "../Controls/ControlCommonJQ", "../Controls/MarginJQ", "../Controls/PaddingJQ"], function (require, exports, impCommon, impAddRow, impText, impImage, impFont, impBorder, impColor, impHeightWidth, impError, impCtxMenu, impBi, impOnInsert, impmal, impCommonCode, impMargin, impPadding) {
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
                    MouseJQ.selectedElement = jQuery("#nononoelement");
                }
                if (MouseJQ.selectedElement == undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Please select a element.");
                }
            };
            MouseJQ.ProcessMove = function (e) {
                if (MouseJQ.selectedMoveElement != undefined) {
                    MouseJQ.selectedMoveElement.find(".ui-resizable-handle").hide();
                }
                if (!jQuery(e.target).hasClass(".key")) {
                    MouseJQ.selectedMoveElement = jQuery(e.target).closest(".key");
                }
                else {
                    MouseJQ.selectedMoveElement = jQuery(e.target);
                }
                if (MouseJQ.selectedMoveElement.hasClass("row") || MouseJQ.selectedMoveElement.hasClass("column")) {
                    MouseJQ.selectedMoveElement.children(".ui-resizable-handle").show();
                }
                else {
                    if (MouseJQ.selectedMoveElement.hasClass("ui-resizable")) {
                        MouseJQ.selectedMoveElement.children(".ui-resizable-handle").show();
                    }
                    else {
                        MouseJQ.selectedMoveElement.find(".ui-resizable").first().children(".ui-resizable-handle").show();
                    }
                }
            };
            MouseJQ.ProcessClick = function (e) {
                var common = new impCommon.Common.CommonMethodsJQ();
                if (jQuery(".close-preview").css("display") == "none") {
                    if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                        return;
                    }
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
                    impAddRow.Page.AddRowJQ.ProcessSelectNotify(); // order here is important... because border is applying before removable row border property is removed.
                    var activeControl = MouseJQ.GetActiveControl();
                    if (activeControl != undefined && activeControl != "") {
                        switch (activeControl.toLowerCase()) {
                            case 'add-row':
                                break;
                            case 'height-width':
                                impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                                break;
                            case 'image-library':
                                impImage.Image.SelfJQ.ProcessSelectNotify();
                                break;
                            case 'color':
                                impColor.Color.ColorJQ.ProcessSelectNotify();
                                break;
                            case 'border':
                                impBorder.Border.BorderJQ.ProcessSelectNotify();
                                break;
                            case 'insert-text':
                                impText.Text.TextJQ.ProcessSelectNotify();
                                break;
                            case 'bi':
                                impBi.BI.BIJQ.ProcessSelectNotify();
                                break;
                            case 'margin':
                                impMargin.Margin.MarginJQ.ProcessSelectNotify();
                                break;
                            case 'padding':
                                impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                                break;
                            default:
                                break;
                        }
                    }
                    try {
                        if (jQuery(".jq-properties-all").css("display").toLowerCase() != "none") {
                            impColor.Color.ColorJQ.ProcessSelectNotify();
                            impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                            impBorder.Border.BorderJQ.ProcessSelectNotify();
                            impFont.Font.FontJQ.ProcessSelectNotify();
                            impBi.BI.BIJQ.ProcessSelectNotify();
                        }
                    }
                    catch (ex) {
                    }
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
                        //jQuery(".ui-resizable-handle").hide();
                        //jQuery(document).mousemove(function (e: JQueryMouseEventObject) {
                        //    MouseJQ.ProcessMove(e);
                        //})
                        jQuery("page").click(function (e) {
                            MouseJQ.ProcessClick(e);
                            if (impCommonCode.ControlCommon.Code.AnchorClicked == true) {
                                impCommonCode.ControlCommon.Code.AnchorClicked = false;
                                if (e.cancelBubble != null)
                                    e.cancelBubble = true;
                                if (e.stopPropagation)
                                    e.stopPropagation(); //e.stopPropagation works in Firefox.
                                if (e.preventDefault)
                                    e.preventDefault();
                                if (e.returnValue != null)
                                    e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                                return false;
                            }
                        });
                        jQuery("input").keydown(function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                impOnInsert.OnInsert.Code.BackPassed = true;
                            }
                        });
                        jQuery("textarea").keydown(function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                impOnInsert.OnInsert.Code.BackPassed = true;
                            }
                        });
                        jQuery(document).keydown(function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                if (impOnInsert.OnInsert.Code.BackPassed == false) {
                                    if (e.cancelBubble != null)
                                        e.cancelBubble = true;
                                    if (e.stopPropagation)
                                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                                    if (e.preventDefault)
                                        e.preventDefault();
                                    if (e.returnValue != null)
                                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                                    return false;
                                }
                                impOnInsert.OnInsert.Code.BackPassed = false;
                            }
                        });
                        jQuery(document).keyup(function (e) {
                            var ESC = 27;
                            var ENTER = 13;
                            if (e.which === ESC) {
                                /// for moving
                                $(".empty-container-text").draggable({ disabled: false });
                                $(".empty-container-image").draggable({ disabled: false });
                                var topRowPx = "180px";
                                var topNotifyPx = "105px";
                                jQuery("rootx").css("top", topRowPx);
                                jQuery(".designer-top-row").css("height", topRowPx);
                                jQuery(".editor").hide();
                                jQuery("#notify").css("top", topNotifyPx);
                                jQuery("page .jqte-editor").css("cursor", "move");
                                ////////////////////
                                impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
                                if (e.cancelBubble != null)
                                    e.cancelBubble = true;
                                if (e.stopPropagation)
                                    e.stopPropagation(); //e.stopPropagation works in Firefox.
                                if (e.preventDefault)
                                    e.preventDefault();
                                if (e.returnValue != null)
                                    e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                                return false;
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
//# sourceMappingURL=WatchMouseJQ.js.map