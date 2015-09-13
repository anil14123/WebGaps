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

var G_isAttachedWatch = false;

var isWatchReady = false;

export module Watch {

    export class MouseJQ {

        public static selectedElement: JQuery;

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
                    //common.RemoveStyle(MouseJQ.selectedElement, "outline");
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

        }

        public static GetActiveControl() {
            var activeControl = "";
            var controls = jQuery(".control-page");
            for (var i = 0; i <controls.length; i++) {

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

                    jQuery(document).keyup(function (e) {

                        var ESC = 27;
                        var ENTER = 13;

                        if (e.which === ESC) {

                          
                            impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide()

                            e.preventDefault();
                        }
                    });

                }
            });

        }


    }

}