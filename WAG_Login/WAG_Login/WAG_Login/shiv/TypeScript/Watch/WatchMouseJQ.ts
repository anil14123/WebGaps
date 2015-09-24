/// <reference path="../../../library/jquery.d.ts" />

import impCommon = require("../Common/CommonMethodsJQ");
import impAddRow = require("../Controls/ControlsJQ");
import impText = require("../Controls/TextJQ");
import impImage = require("../Controls/ImageJQ");
import impFont = require("../Controls/FontJQ");
import impBorder = require("../Controls/BorderJQ");
import impColor = require("../Controls/ColorJQ");
import impHeightWidth = require("../SmartMenu/SmartMenuJQ");
import impError = require("../Error/ErrorJQ");
import impCtxMenu = require("../ContextMenu/Contextmenujq");
import impBi = require("../controls/bijq");
import impOnInsert = require("../JQte/OnInsert");
import impmal = require("../MalFormed/MalFormedJQ");
var G_isAttachedWatch = false;

var isWatchReady = false;

export module Watch {

    export class MouseJQ {

        static selectedElement: JQuery;

        public static RemoveAndResetRemovableRow() {

            if (jQuery(".removable-row").length > 0) {
                jQuery(".removable-row").removeClass("removable-row");
                jQuery(".columns-pending").removeClass("columns-pending");
                MouseJQ.selectedElement = undefined;
            }

            if (MouseJQ.selectedElement == undefined) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionHelp("Please select a element.");
            }
        }

       

        public static ProcessClick(e) {
            var common = new impCommon.Common.CommonMethodsJQ();

            if (jQuery(".close-preview").css("display") == "none" ) {

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
                    //common.RemoveStyle(MouseJQ.selectedElement, "outline");
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
                } catch (ex) {

                }

                if (MouseJQ.selectedElement != undefined) {

                    if (!MouseJQ.selectedElement.hasClass("jqte"))
                        MouseJQ.selectedElement.addClass("image-selection");

                }
            }

        }

        public static GetActiveControl() {
            var activeControl = "";
            var controls = jQuery(".control-page");
            for (var i = 0; i < controls.length; i++) {

                if (jQuery(controls[i]).css("display") == "block") {
                    activeControl = jQuery(controls[i]).attr("name");
                    break;
                }
            }

            return activeControl;
        }

        public WatchPage() {


            jQuery(document).ready(function () {

                if (G_isAttachedWatch == false) {
                    G_isAttachedWatch = true;

                    jQuery("page").click(function (e: JQueryMouseEventObject) {

                        MouseJQ.ProcessClick(e);
                    })

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
                                if (e.cancelBubble != null) e.cancelBubble = true;
                                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                                if (e.preventDefault) e.preventDefault();
                                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
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


                            jQuery("rootx").css("top", "45px");
                            jQuery(".designer-top-row").css("height", "45px");
                            jQuery(".editor").hide();
                            jQuery("#notify").css("top", "45px");

                            jQuery("page .jqte-editor").css("cursor", "move");
                            ////////////////////
                          
                            impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide()

                            if (e.cancelBubble != null) e.cancelBubble = true;
                            if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                            if (e.preventDefault) e.preventDefault();
                            if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                            return false;
                        }
                    });

                }
            });

        }


    }

}