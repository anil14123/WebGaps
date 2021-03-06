/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define(["require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../common/commonmethodsjq", "jquery", 'ColorPicker'], function (require, exports, impWatch, impUndoManager, impCommon, jQuery, ColorPicker) {
    "use strict";
    ColorPicker;
    var isColorReady = false;
    var Color;
    (function (Color) {
        var ColorJQ = (function () {
            function ColorJQ() {
            }
            ColorJQ.prototype.Init = function () {
                ColorJQ.AttachColor();
            };
            ColorJQ.AttachColor = function () {
                jQuery(document).ready(function () {
                    if (isColorReady == false) {
                        isColorReady = true;
                        //// all remove methods are in color
                        jQuery(".remove-bi").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            selectedElement.removeAttr("layout-height");
                            selectedElement.removeClass("bi-image-added");
                            selectedElement.removeClass("layout-column-for-background");
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background-image");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-border").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "border");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-opacity").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "opacity");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-padding").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "padding");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-margin").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            //not needed for this... exceptional case
                            //if (selectedElement.hasClass("empty-container-text")) {
                            //    selectedElement = selectedElement.find(".jq-plus-container-text");
                            //}
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "margin");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-gradient").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            else if (selectedElement.hasClass("empty-container-image")) {
                                selectedElement = selectedElement.find(".jq-plus-container-image");
                            }
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background");
                                comm.RemoveSingleStyle(selectedElement, "background-color");
                                comm.RemoveSingleStyle(selectedElement, "color");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        // jQuery('.fb-color-picker-gradient').colorpicker({ defaultPalette:'web'});
                        jQuery('.fb-color-picker-gradient').colorpicker();
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
                        //jQuery('.fb-color-picker').colorpicker({ defaultPalette: 'web' }); 
                        jQuery('.fb-color-picker').colorpicker();
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
                                if (selectedElement.hasClass("empty-container-text")) {
                                    selectedElement = selectedElement.find(".jq-plus-container-text");
                                }
                                else if (selectedElement.hasClass("empty-container-image")) {
                                    selectedElement = selectedElement.find(".jq-plus-container-image");
                                }
                                if (selectedElement != undefined) {
                                    if (jQuery(this).hasClass("control-color-foreground-color")) {
                                        var colorForeground = jQuery(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
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
                                    else if (jQuery(this).hasClass("control-color-background-color")) {
                                        var colorBackground = jQuery(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                        if (selectedElement.hasClass("empty-container-text")) {
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
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            else if (selectedElement.hasClass("empty-container-image")) {
                                selectedElement = selectedElement.find(".jq-plus-container-image");
                            }
                            if (selectedElement != undefined) {
                                var colorOne = jQuery(this).closest(".control-color-controls").find(".control-color-gradient-color-1").val();
                                var colorTwo = jQuery(this).closest(".control-color-controls").find(".control-color-gradient-color-2").val();
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
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            else if (selectedElement.hasClass("empty-container-image")) {
                                selectedElement = selectedElement.find(".jq-plus-container-image");
                            }
                            if (selectedElement != undefined) {
                                var colorForeground = jQuery(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
                                selectedElement.css("color", "#" + colorForeground);
                                var colorBackground = jQuery(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                selectedElement.css("background-color", "#" + colorBackground);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                            else {
                            }
                        });
                    }
                });
            };
            ColorJQ.ProcessSelectedValues = function () {
                ColorJQ.isSelectProcessing = true;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text");
                }
                else if (selectedElement.hasClass("empty-container-image")) {
                    selectedElement = selectedElement.find(".jq-plus-container-image");
                }
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
                    if (str != undefined && str != "transparent" && str != "rgba(0, 0, 0, 0)") {
                        str = ColorJQ.RgbToHex(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-background-color").val(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-background-color").trigger("keyup");
                        jQuery(".control-color-background-color").val("#" + str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    }
                    else {
                        str = "transparent";
                        jQuery(".control-color-background-color").val(str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    }
                }
                ColorJQ.isSelectProcessing = false;
            };
            ColorJQ.RgbToHex = function (str) {
                try {
                    var rgb = str.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
                    var r;
                    var g;
                    var b;
                    r = Number(rgb[0]);
                    g = Number(rgb[1]);
                    b = Number(rgb[2]);
                    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                }
                catch (ex) {
                    return "";
                }
            };
            ColorJQ.ProcessSelectNotify = function () {
                ColorJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Color] here", "changecolor");
            };
            ColorJQ.controlId = "#control-color";
            ColorJQ.controlBtnApply = ".action-button-color-apply";
            ColorJQ.isSelectProcessing = false;
            return ColorJQ;
        }());
        Color.ColorJQ = ColorJQ;
    })(Color = exports.Color || (exports.Color = {}));
});
//# sourceMappingURL=ColorJQ.js.map