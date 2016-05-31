define(["require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "jquery", "jqueryui"], function (require, exports, impError, impWatch, impUndoManager, jQuery, jQueryUI) {
    "use strict";
    jQueryUI;
    var isOpacityReady = false;
    var borderFirstTime = 0;
    var Opacity;
    (function (Opacity) {
        var OpacityJQ = (function () {
            function OpacityJQ() {
            }
            OpacityJQ.prototype.Init = function () {
                OpacityJQ.AttachOpacity();
            };
            OpacityJQ.AttachOpacity = function () {
                jQuery(document).ready(function () {
                    if (isOpacityReady == false) {
                        isOpacityReady = true;
                        jQuery(".control-o-opacity").slider({
                            min: 0,
                            max: 1,
                            step: 0.1,
                            value: 1,
                            change: function (event, ui) {
                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                            },
                            slide: function (event, ui) {
                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            OpacityJQ.OnChange = function ($this) {
                OpacityJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement.hasClass("empty-container-text")) {
                        selectedElement = selectedElement.find(".jq-plus-container-text");
                    }
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        var opacity = jQuery(".control-o-opacity").slider("value");
                        selectedElement.css("opacity", opacity);
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                OpacityJQ.isSelectProcessing = false;
            };
            OpacityJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text");
                }
                OpacityJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    var opacity = selectedElement.css("opacity");
                    jQuery(".control-o-opacity").slider("value", opacity);
                }
                OpacityJQ.isSelectProcessing = false;
            };
            OpacityJQ.ProcessSelectNotify = function () {
                OpacityJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            OpacityJQ.isSelectProcessing = false;
            return OpacityJQ;
        }());
        Opacity.OpacityJQ = OpacityJQ;
    })(Opacity = exports.Opacity || (exports.Opacity = {}));
});
//# sourceMappingURL=OpacityJQ.js.map