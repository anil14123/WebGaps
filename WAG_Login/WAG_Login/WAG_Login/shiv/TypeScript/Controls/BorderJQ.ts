/// <reference path="../../../scripts/evoluteur.colorpicker/colorpicker-master/js/colorpicker.d.ts" />
/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />

import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");

var isBorderReady = false;
var borderFirstTime = 0;
export module Border {

    export class BorderJQ {


        public static controlId = ".control-border";
        public static controlBtnApply = ".action-button-border-apply";

        constructor() {

        }

        public Init() {
            BorderJQ.AttachBorder();
        }

        public static AttachBorder() {


            jQuery(document).ready(function () {
                if (isBorderReady == false) {
                    isBorderReady = true;

                    jQuery(".border-style").click(function () {

                        jQuery(".border-style").parent().removeClass("border-style-selected");
                        jQuery(this).parent().addClass("border-style-selected");
                        BorderJQ.OnChange(this);
                    });

                    jQuery(".border-advanced-show").click(function () {

                        jQuery(".jq-border-advanced").fadeToggle(1);
                    });

                    jQuery(".control-border-thickness-radius").spinner({

                        min: 0,
                        max: 5000,
                        step: 1,

                        change: function (event, ui) {

                           if (BorderJQ.isSelectProcessing == false) {
                               BorderJQ.OnChange(this);
                           }
                        },
                        spin: function (event, ui) {

                            if (BorderJQ.isSelectProcessing == false) {
                                BorderJQ.OnChange(this);
                            }
                        },
                        stop: function (event, ui) {

                            if (BorderJQ.isSelectProcessing == false) {
                                BorderJQ.OnChange(this);
                            }

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }

                    });

                    jQuery(".control-border-thickness").spinner(
                        {
                            min: 0,
                            max: 50,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {

                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                            },


                            spin: function (event, ui) {

                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                            },

                            stop: function (event, ui) {

                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                               
                                var undo = new impUndoManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }


                        }
                        );

                    jQuery(".color-picker").colorpicker({});

                    //jQuery('.color-picker').colpick({
                    //    layout: 'hex',
                    //    submit: 0,
                    //    colorScheme: 'dark',
                    //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                    //        $(el).css('border-color', '#' + hex);
                    //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                    //        if (!bySetColor) jQuery(el).val(hex);

                    //        if (jQuery(el).hasClass("color-picker-all")) {
                    //            jQuery(".color-picker").not(".color-picker-all").val(jQuery(el).val() + "");

                    //            jQuery(".color-picker").not(".color-picker-all").colpickSetColor(jQuery(el).val() + "");
                    //        }


                    //        jQuery(el).change();
                    //    },
                    //     onHide: function () {
                    //        var undo = new impUndoManager.Manager.UndoManager();

                    //        undo.BeforeOperation();
                    //    }
                    //}).keyup(function () {
                    //    $(this).colpickSetColor(this.value);
                    //});

                    //jQuery('.color-picker').trigger("keyup");

                    jQuery('.color-picker').on("change", function () {

                        if (BorderJQ.isSelectProcessing == false) {
                            BorderJQ.OnChange(this);
                        }
                       
                    });
                              
                    //jQuery(".border-style").on("click", function () {

                    //    jQuery(".border-style").removeClass("control-border-style-selected");

                    //    jQuery(this).addClass("control-border-style-selected");
                    //});
                                     
                    jQuery(BorderJQ.controlBtnApply).on("click", function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {
                            var errorHandler = new impError.ErrorHandle.ErrorJQ();

                            var common = new impCommon.Common.CommonMethodsJQ();

                            var borderLeft = $(this).closest(".control-border-controls").find(".control-border-thickness-left").spinner("value");
                            var borderTop = $(this).closest(".control-border-controls").find(".control-border-thickness-top").spinner("value");
                            var borderRight = $(this).closest(".control-border-controls").find(".control-border-thickness-right").spinner("value");
                            var borderBottom = $(this).closest(".control-border-controls").find(".control-border-thickness-bottom").spinner("value");
                            var borderRadius = $(this).closest(".control-border-controls").find(".control-border-thickness-radius").spinner("value");

                            if (borderRadius != undefined) {
                                selectedElement.css("border-radius", borderRadius + "px");
                            }

                            if (borderLeft != undefined) {
                                selectedElement.css("border-left-width", borderLeft + "px");

                                var color = $(this).closest(".control-border-controls").find(".color-picker-left").val();

                                selectedElement.css("border-left-color", "#" + color);


                            }

                            if (borderTop != undefined) {
                                selectedElement.css("border-top-width", borderTop + "px");

                                var color = $(this).closest(".control-border-controls").find(".color-picker-top").val();

                                selectedElement.css("border-top-color", "#" + color);


                            }

                            if (borderRight != undefined) {
                                selectedElement.css("border-right-width", borderRight + "px");

                                var color = $(this).closest(".control-border-controls").find(".color-picker-right").val();

                                selectedElement.css("border-right-color", "#" + color);

                            }

                            if (borderBottom != undefined) {
                                selectedElement.css("border-bottom-width", borderBottom + "px");

                                var color = $(this).closest(".control-border-controls").find(".color-picker-bottom").val();

                                selectedElement.css("border-bottom-color", "#" + color);


                            }

                            selectedElement.css("border-style", "solid");

                            if (borderLeft == 0 && borderTop == 0 && borderRight == 0 && borderBottom == 0) {

                                common.RemoveStyle(selectedElement, "border-left-width");
                                common.RemoveStyle(selectedElement, "border-top-width");
                                common.RemoveStyle(selectedElement, "border-bottom-width");
                                common.RemoveStyle(selectedElement, "border-right-width");
                                common.RemoveStyle(selectedElement, "border-color");
                                common.RemoveStyle(selectedElement, "border");


                            }

                          

                        }
                        else {

                            //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                            //errorHandler.ActionFail("Please select a element to apply border.");
                        }
                    });
                }
            });

        }

        public static isSelectProcessing = false;

        public static OnChange($this) {

            BorderJQ.isSelectProcessing = true;

            try {
                if (borderFirstTime != 0) {
                    borderFirstTime = 1;
                    impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                }
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();


                    if (jQuery($this).hasClass("control-border-thickness-all")) {

                        jQuery(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").spinner("value", jQuery($this).val());
                    }


                    var common = new impCommon.Common.CommonMethodsJQ();

                    var borderLeft = $(".control-border-thickness-left").spinner("value");
                    var borderTop = $(".control-border-thickness-top").spinner("value");
                    var borderRight = $(".control-border-thickness-right").spinner("value");
                    var borderBottom = $(".control-border-thickness-bottom").spinner("value");
                    var borderRadius = $(".control-border-thickness-radius").spinner("value");

                    if (borderRadius != undefined) {
                        selectedElement.css("border-radius", borderRadius + "px");
                    }

                    if (jQuery($this).hasClass("color-picker-all")) {

                        jQuery(".color-picker").val(jQuery($this).val());
                        jQuery(".color-picker").keyup();
                    }

                    if (borderLeft != undefined) {
                        selectedElement.css("border-left-width", borderLeft + "px");

                        var color = $($this).closest(".control-border-controls").find(".color-picker-left").val();

                        selectedElement.css("border-left-color", "#" + color);


                    }

                    if (borderTop != undefined) {
                        selectedElement.css("border-top-width", borderTop + "px");

                        var color = $($this).closest(".control-border-controls").find(".color-picker-top").val();

                        selectedElement.css("border-top-color", "#" + color);


                    }

                    if (borderRight != undefined) {
                        selectedElement.css("border-right-width", borderRight + "px");

                        var color = $($this).closest(".control-border-controls").find(".color-picker-right").val();

                        selectedElement.css("border-right-color", "#" + color);

                    }

                    if (borderBottom != undefined) {
                        selectedElement.css("border-bottom-width", borderBottom + "px");

                        var color = $($this).closest(".control-border-controls").find(".color-picker-bottom").val();

                        selectedElement.css("border-bottom-color", "#" + color);


                    }

                    if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-solid")) {
                        selectedElement.css("border-style", "solid");
                    }
                    else
                        if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-dotted")) {
                            selectedElement.css("border-style", "dotted");
                        }
                        else
                            if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-dashed")) {
                                selectedElement.css("border-style", "dashed");
                            }
                            else
                                if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-groove")) {
                                    selectedElement.css("border-style", "groove");
                                }

                    if (borderLeft == 0 && borderTop == 0 && borderRight == 0 && borderBottom == 0) {

                        common.RemoveStyle(selectedElement, "border-left-width");
                        common.RemoveStyle(selectedElement, "border-top-width");
                        common.RemoveStyle(selectedElement, "border-bottom-width");
                        common.RemoveStyle(selectedElement, "border-right-width");
                        common.RemoveStyle(selectedElement, "border-color");
                        common.RemoveStyle(selectedElement, "border");


                    }

                    selectedElement.removeClass("image-selection");

                }
                else {

                }
            }
            catch (ex) {

            }

            BorderJQ.isSelectProcessing = false;
        }

        public static ProcessSelectedValues() {

            BorderJQ.isSelectProcessing = true;
            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {

                selectedElement.removeClass("image-selection");

                var borderLeft = selectedElement.css("border-left-width");
                var borderTop = selectedElement.css("border-top-width");
                var borderRight = selectedElement.css("border-right-width");
                var borderBottom = selectedElement.css("border-bottom-width");
                var borderRadius = selectedElement.css("border-top-left-radius");

                var colorLeft = selectedElement.css("border-left-color");
                var colorTop = selectedElement.css("border-top-color");
                var colorRight = selectedElement.css("border-right-color");
                var colorBottom = selectedElement.css("border-bottom-color");

                if (borderRadius != undefined) {
                    borderRadius = borderRadius.replace("px", "");

                    jQuery(".control-border-thickness-radius").spinner("value", borderRadius);
                }

                if (borderLeft != undefined) {

                    borderLeft = borderLeft.replace("px", "");
                    jQuery(".control-border-thickness-left").spinner("value", borderLeft);
                }

                if (borderTop != undefined) {

                    borderTop = borderTop.replace("px", "");
                    jQuery(".control-border-thickness-top").spinner("value", borderTop);
                }

                if (borderRight != undefined) {

                    borderRight = borderRight.replace("px", "");
                    jQuery(".control-border-thickness-right").spinner("value", borderRight);
                }

                if (borderBottom != undefined) {

                    borderBottom = borderBottom.replace("px", "");
                    jQuery(".control-border-thickness-bottom").spinner("value", borderBottom);
                }

                if (borderLeft == borderTop && borderLeft == borderRight && borderLeft == borderBottom) {
                    jQuery(".control-border-thickness-all").spinner("value", borderLeft);

                }


                if (colorLeft != undefined) {

                    colorLeft = BorderJQ.RgbToHex(colorLeft);
                    jQuery(".color-picker-left").val("#" + colorLeft + "");
                   // jQuery(".color-picker-left").colpickSetColor(colorLeft + "");
                }

                if (colorTop != undefined) {

                    colorTop = BorderJQ.RgbToHex(colorTop);
                    jQuery(".color-picker-top").val("#" + colorTop + "");
                   // jQuery(".color-picker-top").colpickSetColor(colorTop + "");
                }

                if (colorRight != undefined) {

                    colorRight = BorderJQ.RgbToHex(colorRight);
                    jQuery(".color-picker-right").val("#" + colorRight + "");
                  //  jQuery(".color-picker-right").colpickSetColor(colorRight + "");
                }

                if (colorBottom != undefined) {

                    colorBottom = BorderJQ.RgbToHex(colorBottom);
                    jQuery(".color-picker-bottom").val("#" + colorBottom + "");
                  //  jQuery(".color-picker-bottom").colpickSetColor(colorBottom + "");
                }

                if (colorLeft == colorTop && colorLeft == colorRight && colorLeft == colorBottom) {
                    jQuery(".color-picker-all").val("#" + colorLeft + "");
                  //  jQuery(".color-picker-all").colpickSetColor(colorLeft + "");
                }


                jQuery(".color-picker").keyup();

                selectedElement.addClass("image-selection");

            }

            BorderJQ.isSelectProcessing = false;

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

            BorderJQ.ProcessSelectedValues();

            //var errorHandler = new impError.ErrorHandle.ErrorJQ();

            //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
        }

    }
}