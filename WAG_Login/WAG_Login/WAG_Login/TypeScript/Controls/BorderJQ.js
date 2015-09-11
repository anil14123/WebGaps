/// <reference path="../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define(["require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    var isBorderReady = false;
    var borderFirstTime = 0;
    var Border;
    (function (Border) {
        var BorderJQ = (function () {
            function BorderJQ() {
            }
            BorderJQ.prototype.Init = function () {
                BorderJQ.AttachBorder();
            };
            BorderJQ.AttachBorder = function () {
                jQuery(document).ready(function () {
                    if (isBorderReady == false) {
                        isBorderReady = true;
                        jQuery(BorderJQ.controlId).on("click", function () {
                        });
                        jQuery(".border-advanced-show").click(function () {
                            jQuery(".jq-border-advanced").fadeToggle(1);
                        });
                        jQuery(".control-border-thickness-radius ").slider({
                            min: 0,
                            max: 5000,
                            step: 1,
                            change: function (event, ui) {
                                if (jQuery(this).next(".border-px").length == 0) {
                                    var spanResult = jQuery(document.createElement("div"));
                                    spanResult.addClass("border-px");
                                    jQuery(this).after(spanResult);
                                }
                                jQuery(this).next(".border-px").text(ui.value + "px");
                                BorderJQ.OnChange(this);
                            },
                            slide: function (event, ui) {
                                if (jQuery(this).next(".border-px").length == 0) {
                                    var spanResult = jQuery(document.createElement("div"));
                                    spanResult.addClass("border-px");
                                    jQuery(this).after(spanResult);
                                }
                                jQuery(this).next(".border-px").text(ui.value + "px");
                                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                                errorHandler.ActionHelp("Help: You can also use <- and -> arrow key on keyboard.");
                                BorderJQ.OnChange(this);
                            },
                            stop: function (event, ui) {
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-border-thickness").slider({
                            min: 0,
                            max: 50,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (jQuery(this).next(".border-px").length == 0) {
                                    var spanResult = jQuery(document.createElement("div"));
                                    spanResult.addClass("border-px");
                                    jQuery(this).after(spanResult);
                                }
                                jQuery(this).next(".border-px").text(ui.value + "px");
                                if (jQuery(this).hasClass("control-border-thickness-all")) {
                                    jQuery(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").slider("value", ui.value);
                                }
                                BorderJQ.OnChange(this);
                            },
                            slide: function (event, ui) {
                                if (jQuery(this).next(".border-px").length == 0) {
                                    var spanResult = jQuery(document.createElement("div"));
                                    spanResult.addClass("border-px");
                                    jQuery(this).after(spanResult);
                                }
                                jQuery(this).next(".border-px").text(ui.value + "px");
                                if (jQuery(this).hasClass("control-border-thickness-all")) {
                                    jQuery(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").slider("value", ui.value);
                                }
                                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                                errorHandler.ActionHelp("Help: You can also use <- and -> arrow key on keyboard.");
                                BorderJQ.OnChange(this);
                            },
                            stop: function (event, ui) {
                                BorderJQ.OnChange(this);
                                if (jQuery(this).hasClass("control-border-thickness-all")) {
                                    jQuery(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").slider("value", jQuery(this).slider("value"));
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-border-thickness").slider("value", 3);
                        jQuery('.color-picker').colpick({
                            layout: 'hex',
                            submit: 0,
                            colorScheme: 'dark',
                            onChange: function (hsb, hex, rgb, el, bySetColor) {
                                $(el).css('border-color', '#' + hex);
                                // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                                if (!bySetColor)
                                    jQuery(el).val(hex);
                                if (jQuery(el).hasClass("color-picker-all")) {
                                    jQuery(".color-picker").not(".color-picker-all").val(jQuery(el).val() + "");
                                    jQuery(".color-picker").not(".color-picker-all").colpickSetColor(jQuery(el).val() + "");
                                }
                                jQuery(el).change();
                            },
                            onHide: function () {
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        }).keyup(function () {
                            $(this).colpickSetColor(this.value);
                        });
                        jQuery('.color-picker').trigger("keyup");
                        jQuery('.color-picker').on("change", function () {
                            BorderJQ.OnChange(this);
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
                                var borderLeft = $(this).closest(".control-border-controls").find(".control-border-thickness-left").slider("value");
                                var borderTop = $(this).closest(".control-border-controls").find(".control-border-thickness-top").slider("value");
                                var borderRight = $(this).closest(".control-border-controls").find(".control-border-thickness-right").slider("value");
                                var borderBottom = $(this).closest(".control-border-controls").find(".control-border-thickness-bottom").slider("value");
                                var borderRadius = $(this).closest(".control-border-controls").find(".control-border-thickness-radius").slider("value");
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
                            }
                        });
                    }
                });
            };
            BorderJQ.OnChange = function ($this) {
                if (borderFirstTime != 0) {
                    borderFirstTime = 1;
                    impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                }
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    var common = new impCommon.Common.CommonMethodsJQ();
                    var borderLeft = $(".control-border-thickness-left").slider("value");
                    var borderTop = $(".control-border-thickness-top").slider("value");
                    var borderRight = $(".control-border-thickness-right").slider("value");
                    var borderBottom = $(".control-border-thickness-bottom").slider("value");
                    var borderRadius = $(".control-border-thickness-radius").slider("value");
                    if (borderRadius != undefined) {
                        selectedElement.css("border-radius", borderRadius + "px");
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
                    selectedElement.css("border-style", "solid");
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
            };
            BorderJQ.ProcessSelectedValues = function () {
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
                        jQuery(".control-border-thickness-radius").slider("value", borderRadius);
                    }
                    if (borderLeft != undefined) {
                        borderLeft = borderLeft.replace("px", "");
                        jQuery(".control-border-thickness-left").slider("value", borderLeft);
                    }
                    if (borderTop != undefined) {
                        borderTop = borderTop.replace("px", "");
                        jQuery(".control-border-thickness-top").slider("value", borderTop);
                    }
                    if (borderRight != undefined) {
                        borderRight = borderRight.replace("px", "");
                        jQuery(".control-border-thickness-right").slider("value", borderRight);
                    }
                    if (borderBottom != undefined) {
                        borderBottom = borderBottom.replace("px", "");
                        jQuery(".control-border-thickness-bottom").slider("value", borderBottom);
                    }
                    if (borderLeft == borderTop && borderLeft == borderRight && borderLeft == borderBottom) {
                        jQuery(".control-border-thickness-all").slider("value", borderLeft);
                    }
                    if (colorLeft != undefined) {
                        colorLeft = BorderJQ.RgbToHex(colorLeft);
                        jQuery(".color-picker-left").val(colorLeft + "");
                        jQuery(".color-picker-left").colpickSetColor(colorLeft + "");
                    }
                    if (colorTop != undefined) {
                        colorTop = BorderJQ.RgbToHex(colorTop);
                        jQuery(".color-picker-top").val(colorTop + "");
                        jQuery(".color-picker-top").colpickSetColor(colorTop + "");
                    }
                    if (colorRight != undefined) {
                        colorRight = BorderJQ.RgbToHex(colorRight);
                        jQuery(".color-picker-right").val(colorRight + "");
                        jQuery(".color-picker-right").colpickSetColor(colorRight + "");
                    }
                    if (colorBottom != undefined) {
                        colorBottom = BorderJQ.RgbToHex(colorBottom);
                        jQuery(".color-picker-bottom").val(colorBottom + "");
                        jQuery(".color-picker-bottom").colpickSetColor(colorBottom + "");
                    }
                    if (colorLeft == colorTop && colorLeft == colorRight && colorLeft == colorBottom) {
                        jQuery(".color-picker-all").val(colorLeft + "");
                        jQuery(".color-picker-all").colpickSetColor(colorLeft + "");
                    }
                    selectedElement.addClass("image-selection");
                }
            };
            BorderJQ.RgbToHex = function (str) {
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
            BorderJQ.ProcessSelectNotify = function () {
                BorderJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            BorderJQ.controlId = ".control-border";
            BorderJQ.controlBtnApply = ".action-button-border-apply";
            return BorderJQ;
        })();
        Border.BorderJQ = BorderJQ;
    })(Border = exports.Border || (exports.Border = {}));
});
//# sourceMappingURL=BorderJQ.js.map