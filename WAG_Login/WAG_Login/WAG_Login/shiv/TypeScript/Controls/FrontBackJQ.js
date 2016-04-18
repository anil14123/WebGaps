define(["require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager"], function (require, exports, impError, impWatch, impUndoManager) {
    "use strict";
    var isFrontBackReady = false;
    var borderFirstTime = 0;
    var FrontBack;
    (function (FrontBack) {
        var FrontBackJQ = (function () {
            function FrontBackJQ() {
            }
            FrontBackJQ.prototype.Init = function () {
                FrontBackJQ.AttachFrontBack();
            };
            FrontBackJQ.AttachFrontBack = function () {
                jQuery(document).ready(function () {
                    if (isFrontBackReady == false) {
                        isFrontBackReady = true;
                        jQuery(".control-z-zindex").slider({
                            min: 1,
                            max: 500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            FrontBackJQ.OnChange = function ($this) {
                FrontBackJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (selectedElement.hasClass("image-text-other")) {
                            var zIndex = jQuery(".control-z-zindex").slider("value");
                            selectedElement.css("z-index", zIndex);
                        }
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                FrontBackJQ.isSelectProcessing = false;
            };
            FrontBackJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                FrontBackJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("image-text-other")) {
                        var zindex = selectedElement.css("z-index");
                        jQuery(".control-z-zindex").slider("value", zindex);
                    }
                }
                FrontBackJQ.isSelectProcessing = false;
            };
            FrontBackJQ.ProcessSelectNotify = function () {
                FrontBackJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            FrontBackJQ.isSelectProcessing = false;
            return FrontBackJQ;
        }());
        FrontBack.FrontBackJQ = FrontBackJQ;
    })(FrontBack = exports.FrontBack || (exports.FrontBack = {}));
});
//# sourceMappingURL=FrontBackJQ.js.map