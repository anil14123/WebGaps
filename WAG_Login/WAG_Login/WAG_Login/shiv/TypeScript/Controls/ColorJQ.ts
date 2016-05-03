/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />

import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impCommon = require("../common/commonmethodsjq");

var isColorReady = false;

export module Color {

    export class ColorJQ {


        public static controlId = "#control-color";
        public static controlBtnApply = ".action-button-color-apply";

        constructor() {

        }

        public Init() {
            ColorJQ.AttachColor();
        }

        public static AttachColor() {


            jQuery(document).ready(function () {
                if (isColorReady == false) {
                    isColorReady = true;
                    
                    //// all remove methods are in color

                    jQuery(".remove-bi").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var comm = new impCommon.Common.CommonMethodsJQ();

                            comm.RemoveSingleStyle(selectedElement, "background-image");

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            impWatch.Watch.MouseJQ.ResetAfterClear();
                        }
                    });

                    jQuery(".remove-border").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var comm = new impCommon.Common.CommonMethodsJQ();

                            comm.RemoveStyle(selectedElement, "border");

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            impWatch.Watch.MouseJQ.ResetAfterClear();
                        }
                    });

                    jQuery(".remove-opacity").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var comm = new impCommon.Common.CommonMethodsJQ();

                            comm.RemoveStyle(selectedElement, "opacity");

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            impWatch.Watch.MouseJQ.ResetAfterClear();
                        }
                    });

                    jQuery(".remove-padding").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var comm = new impCommon.Common.CommonMethodsJQ();

                            comm.RemoveStyle(selectedElement, "padding");

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            impWatch.Watch.MouseJQ.ResetAfterClear();
                        }
                    });

                    jQuery(".remove-margin").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var comm = new impCommon.Common.CommonMethodsJQ();

                            comm.RemoveStyle(selectedElement, "margin");

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            impWatch.Watch.MouseJQ.ResetAfterClear();
                        }
                    });

                    jQuery(".remove-gradient").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var comm = new impCommon.Common.CommonMethodsJQ();

                            comm.RemoveSingleStyle(selectedElement, "background");
                            comm.RemoveSingleStyle(selectedElement, "background-color");
                            comm.RemoveSingleStyle(selectedElement, "color");

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            impWatch.Watch.MouseJQ.ResetAfterClear();

                            //jQuery(".control-color-foreground-color").val("#000000");
                            //jQuery(".control-color-foreground-color").trigger("keyup");

                            //jQuery(".control-color-background-color").val("#ffffff");
                            //jQuery(".control-color-background-color").trigger("keyup");

                            //jQuery(".control-color-gradient-color-1").val("#ffffff");
                            //jQuery(".control-color-gradient-color-1").trigger("keyup");

                            //jQuery(".control-color-gradient-color-2").val("#ffffff");
                            //jQuery(".control-color-gradient-color-2").trigger("keyup");

                        }
                    });

                    jQuery('.fb-color-picker-gradient').colorpicker({ defaultPalette:'web'});
                     
                    //jQuery('.fb-color-picker-gradient').colpick({
                    //    layout: 'hex',
                    //    submit: 0,
                    //    colorScheme: 'dark',
                    //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                    //        jQuery(el).css('border-color', '#' + hex);
                    //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                    //        if (!bySetColor) jQuery(el).val(hex).change();
                    //    },
                    //    onHide: function () {
                    //        var undo = new impUndoManager.Manager.UndoManager();

                    //        undo.BeforeOperation();
                    //    }
                    //}).keyup(function () {
                    //    $(this).colpickSetColor(this.value);
                    //});
                    
                    jQuery('.fb-color-picker').colorpicker({ defaultPalette:'web'}); 
                    //jQuery('.fb-color-picker').colpick({
                    //    layout: 'hex',
                    //    submit: 0,  
                    //    colorScheme: 'dark',
                    //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                    //        jQuery(el).css('border-color', '#' + hex);
                    //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                    //        if (!bySetColor) jQuery(el).val(hex).change();
                    //    },
                    //    onHide: function () {
                    //        var undo = new impUndoManager.Manager.UndoManager();

                    //        undo.BeforeOperation(); 
                    //    }
                    //}).keyup(function () {
                    //    $(this).colpickSetColor(this.value);
                    //});

                    jQuery('.fb-color-picker').trigger("keyup");

                    jQuery(".fb-color-picker").on("change", function () {

                        if (ColorJQ.isSelectProcessing == false) {

                            impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();

                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                            if (selectedElement != undefined) {

                                if (jQuery(this).hasClass("control-color-foreground-color")) {
                                    var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();

                                    colorForeground = colorForeground.replace("#", "");
                                    selectedElement.css("color", "#" + colorForeground);

                                    if (colorForeground != "") {

                                        selectedElement.each(function (index, $this) {

                                            var $$this = jQuery($this);

                                            if ($$this.hasClass("jq-editor-link") || $$this.hasClass("jq-normal-link")) {
                                                if (jQuery("page").find("." + $$this.find("a").first().attr("id")).length > 0) {
                                                    jQuery("page").find("." + $$this.find("a").first().attr("id")).html("");
                                                }
                                                else {
                                                    var style = "<style class='" + $$this.find("a").first().attr("id") + "'> </span>";
                                                    jQuery("page").append(style);
                                                }

                                                var linkId = "#" + $$this.find("a").first().attr("id");
                                                var linkColor = "#" + colorForeground;

                                                var style = " " +
                                                    linkId + ":link {" +
                                                    " color:" + linkColor + ";}" +
                                                    linkId + ":visited {" +
                                                    " color:" + linkColor + ";}" +
                                                    linkId + ":hover {" +
                                                    " color:" + linkColor + ";}" +
                                                    linkId + ":active {" +
                                                    " color:" + linkColor + ";}";

                                                jQuery("page").find("." + $$this.find("a").first().attr("id")).html(style);
                                            }
                                        });
                                    }
                                }
                                else
                                    if (jQuery(this).hasClass("control-color-background-color")) {

                                        var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();


                                        if (selectedElement.hasClass("empty-container-text")) {

                                            //selectedElement = selectedElement.find(".jq-text-block");
                                        }

                                        colorBackground = colorBackground.replace("#", "");
                                        selectedElement.css("background-color", "#" + colorBackground);
                                    }

                                var undo = new impUndoManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }
                            else {

                            }
                        }
                    });

                    jQuery(".fb-color-picker-gradient").on("change", function () {

                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var colorOne = $(this).closest(".control-color-controls").find(".control-color-gradient-color-1").val();

                            var colorTwo = $(this).closest(".control-color-controls").find(".control-color-gradient-color-2").val();

                            colorOne = colorOne.replace("#", "");
                            colorTwo = colorTwo.replace("#", "");

                            var browserSpecificGradient = ["-webkit-linear-gradient", "-o-linear-gradient", "-moz-linear-gradient", "linear-gradient"];

                            for (var i = 0; i < browserSpecificGradient.length; i++) {

                                selectedElement.css("background", "" + browserSpecificGradient[i] + "(" + "#" + colorOne + "," + "#" + colorTwo + ")");
                            }

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                        else {

                        }
                    });


                    jQuery(ColorJQ.controlBtnApply).on("click", function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();

                            selectedElement.css("color", "#" + colorForeground);

                            var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();

                            selectedElement.css("background-color", "#" + colorBackground);

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                        }
                        else {


                        }
                    });
                }
            });

        }

        public static isSelectProcessing = false;

        public static ProcessSelectedValues() {

            ColorJQ.isSelectProcessing = true;

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {

                var str = selectedElement.css("color");

                if (str != undefined) {

                    str = ColorJQ.RgbToHex(str);
                    //jQuery(ColorJQ.controlId).find(".control-color-foreground-color").val(str);
                    //jQuery(ColorJQ.controlId).find(".control-color-foreground-color").trigger("keyup");

                    jQuery(".control-color-foreground-color").val("#" + str);
                    jQuery(".control-color-foreground-color").trigger("keyup");
                }

                var str = selectedElement.css("background-color");

                if (str != undefined) {

                    str = ColorJQ.RgbToHex(str);
                    //jQuery(ColorJQ.controlId).find(".control-color-background-color").val(str);
                    //jQuery(ColorJQ.controlId).find(".control-color-background-color").trigger("keyup");

                    jQuery(".control-color-background-color").val("#" + str);
                    jQuery(".control-color-background-color").trigger("keyup");
                }

            }

            ColorJQ.isSelectProcessing = false;

        }

        public static RgbToHex(str) {

            try {
                var rgb = str.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');

                var r; var g; var b;

                r = Number(rgb[0]);

                g = Number(rgb[1]);

                b = Number(rgb[2]);

                return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            }
            catch (ex) {
                return "";
            }
        }

        public static ProcessSelectNotify() {

            ColorJQ.ProcessSelectedValues();

            //var errorHandler = new impError.ErrorHandle.ErrorJQ();

            //errorHandler.ActionHelp("Help: You can change [Color] here", "changecolor");
        }

    }
}