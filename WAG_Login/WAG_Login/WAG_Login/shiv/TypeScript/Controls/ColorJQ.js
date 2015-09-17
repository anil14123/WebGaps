/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define(["require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../common/commonmethodsjq"], function (require, exports, impWatch, impUndoManager, impCommon) {
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
                        jQuery(".remove-gradient").click(function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background");
                            }
                        });
                        jQuery('.fb-color-picker-gradient').colpick({
                            layout: 'hex',
                            submit: 0,
                            colorScheme: 'dark',
                            onChange: function (hsb, hex, rgb, el, bySetColor) {
                                jQuery(el).css('border-color', '#' + hex);
                                // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                                if (!bySetColor)
                                    jQuery(el).val(hex).change();
                            },
                            onHide: function () {
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        }).keyup(function () {
                            $(this).colpickSetColor(this.value);
                        });
                        jQuery('.fb-color-picker').colpick({
                            layout: 'hex',
                            submit: 0,
                            colorScheme: 'dark',
                            onChange: function (hsb, hex, rgb, el, bySetColor) {
                                jQuery(el).css('border-color', '#' + hex);
                                // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                                if (!bySetColor)
                                    jQuery(el).val(hex).change();
                            },
                            onHide: function () {
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        }).keyup(function () {
                            $(this).colpickSetColor(this.value);
                        });
                        jQuery('.fb-color-picker').trigger("keyup");
                        jQuery(".fb-color-picker").on("change", function () {
                            impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
                                selectedElement.css("color", "#" + colorForeground);
                                var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                selectedElement.css("background-color", "#" + colorBackground);
                            }
                            else {
                            }
                        });
                        jQuery(".fb-color-picker-gradient").on("change", function () {
                            impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var colorOne = $(this).closest(".control-color-controls").find(".control-color-gradient-color-1").val();
                                var colorTwo = $(this).closest(".control-color-controls").find(".control-color-gradient-color-2").val();
                                var browserSpecificGradient = ["-webkit-linear-gradient", "-o-linear-gradient", "-moz-linear-gradient", "linear-gradient"];
                                for (var i = 0; i < browserSpecificGradient.length; i++) {
                                    selectedElement.css("background", "" + browserSpecificGradient[i] + "(" + "#" + colorOne + "," + "#" + colorTwo + ")");
                                }
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
            };
            ColorJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    var str = selectedElement.css("color");
                    if (str != undefined) {
                        str = ColorJQ.RgbToHex(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-foreground-color").val(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-foreground-color").trigger("keyup");
                        jQuery(".control-color-foreground-color").val(str);
                        jQuery(".control-color-foreground-color").trigger("keyup");
                    }
                    var str = selectedElement.css("background-color");
                    if (str != undefined) {
                        str = ColorJQ.RgbToHex(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-background-color").val(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-background-color").trigger("keyup");
                        jQuery(".control-color-background-color").val(str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    }
                }
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
            return ColorJQ;
        })();
        Color.ColorJQ = ColorJQ;
    })(Color = exports.Color || (exports.Color = {}));
});
//# sourceMappingURL=ColorJQ.js.map