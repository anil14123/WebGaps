/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define(["require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    var isBorderReady = false;
    var borderFirstTime = 0;
    var Margin;
    (function (Margin) {
        var MarginJQ = (function () {
            function MarginJQ() {
            }
            MarginJQ.prototype.Init = function () {
                MarginJQ.AttachMargin();
            };
            MarginJQ.AttachMargin = function () {
                jQuery(document).ready(function () {
                    if (isBorderReady == false) {
                        isBorderReady = true;
                        jQuery(".margin-advanced-show").click(function () {
                            jQuery(".jq-margin-advanced").fadeToggle(1);
                        });
                        jQuery(".control-margin-margin").spinner({
                            min: -1500,
                            max: 1500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (MarginJQ.isSelectProcessing == false) {
                                    MarginJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (MarginJQ.isSelectProcessing == false) {
                                    MarginJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (MarginJQ.isSelectProcessing == false) {
                                    MarginJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            MarginJQ.OnChange = function ($this) {
                MarginJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (!selectedElement.hasClass("column")) {
                            if (jQuery($this).hasClass("control-margin-all")) {
                                $($this).closest(".control-margin-controls").find(".control-margin-margin").not(".control-margin-all").spinner("value", jQuery($this).val());
                            }
                            var common = new impCommon.Common.CommonMethodsJQ();
                            var left = $($this).closest(".control-margin-controls").find(".control-margin-left").spinner("value");
                            var top = $($this).closest(".control-margin-controls").find(".control-margin-top").spinner("value");
                            var right = $($this).closest(".control-margin-controls").find(".control-margin-right").spinner("value");
                            var bottom = $($this).closest(".control-margin-controls").find(".control-margin-bottom").spinner("value");
                            if (left != undefined) {
                                selectedElement.css("margin-left", left + "px");
                            }
                            if (top != undefined) {
                                selectedElement.css("margin-top", top + "px");
                            }
                            if (right != undefined) {
                                selectedElement.css("margin-right", right + "px");
                            }
                            if (bottom != undefined) {
                                selectedElement.css("margin-bottom", bottom + "px");
                            }
                            if (left == 0 && top == 0 && right == 0 && bottom == 0) {
                                common.RemoveStyle(selectedElement, "margin-left");
                                common.RemoveStyle(selectedElement, "margin-top");
                                common.RemoveStyle(selectedElement, "margin-bottom");
                                common.RemoveStyle(selectedElement, "margin-right");
                                common.RemoveStyle(selectedElement, "margin");
                            }
                        }
                        else {
                            errorHandler.ActionHelp("Cannot change margin for [Column] blocks");
                        }
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                MarginJQ.isSelectProcessing = false;
            };
            MarginJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                MarginJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    var left = selectedElement.css("margin-left");
                    var top = selectedElement.css("margin-top");
                    var right = selectedElement.css("margin-right");
                    var bottom = selectedElement.css("margin-bottom");
                    if (left != undefined) {
                        left = left.replace("px", "");
                        jQuery(".control-margin-left").spinner("value", left);
                    }
                    if (top != undefined) {
                        top = top.replace("px", "");
                        jQuery(".control-margin-top").spinner("value", top);
                    }
                    if (right != undefined) {
                        right = right.replace("px", "");
                        jQuery(".control-margin-right").spinner("value", right);
                    }
                    if (bottom != undefined) {
                        bottom = bottom.replace("px", "");
                        jQuery(".control-margin-bottom").spinner("value", bottom);
                    }
                    if (left == top && left == right && left == bottom) {
                        jQuery(".control-margin-all").spinner("value", left);
                    }
                }
                MarginJQ.isSelectProcessing = false;
            };
            MarginJQ.ProcessSelectNotify = function () {
                MarginJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            MarginJQ.controlId = ".control-margin";
            MarginJQ.isSelectProcessing = false;
            return MarginJQ;
        })();
        Margin.MarginJQ = MarginJQ;
    })(Margin = exports.Margin || (exports.Margin = {}));
});
//# sourceMappingURL=MarginJQ.js.map