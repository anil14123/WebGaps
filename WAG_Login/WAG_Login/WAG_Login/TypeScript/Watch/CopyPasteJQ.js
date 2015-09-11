define(["require", "exports", "./WatchMouseJQ", "../Error/ErrorJQ", "../Controls/ControlCommonJQ", "../UndoManager/UndoManager"], function (require, exports, impWatch, impError, impCommonCode, impUndoManager) {
    var CopiedElement;
    var isCut = false;
    var CopyPaste;
    (function (CopyPaste) {
        var SelfJQ = (function () {
            function SelfJQ() {
            }
            SelfJQ.prototype.Init = function () {
            };
            SelfJQ.Delete = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (!(selectedElement.hasClass("jq-Header")
                    ||
                        selectedElement.hasClass("jq-MenuBar")
                    ||
                        selectedElement.hasClass("jq-Content")
                    ||
                        selectedElement.hasClass("jq-Footer"))) {
                    if (selectedElement.hasClass("jq-image-block-image")) {
                        selectedElement.closest(".jq-plus-container").remove();
                    }
                    else if (selectedElement.hasClass("jq-text-block")) {
                        selectedElement.closest(".jq-plus-container").remove();
                    }
                    else {
                        selectedElement.remove();
                    }
                }
                else {
                    selectedElement.hide();
                }
                var undomanager = new impUndoManager.Manager.UndoManager();
                undomanager.BeforeOperation();
            };
            SelfJQ.Cut = function () {
                isCut = true;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selecedElement != undefined) {
                    selecedElement.removeClass("image-selection");
                    if (!selecedElement.hasClass("root-elements")) {
                        if (selecedElement.hasClass("jq-image-block-image")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container");
                        }
                        else if (selecedElement.hasClass("jqte")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container");
                        }
                        else {
                            CopiedElement = selecedElement;
                        }
                    }
                    else {
                        CopiedElement = jQuery("#noelement--x");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("You can only cut Text , Image.");
                    }
                }
            };
            SelfJQ.Copy = function () {
                isCut = false;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selecedElement != undefined) {
                    if (!selecedElement.hasClass("root-elements")) {
                        //compulsary.. retain previous height
                        selecedElement.removeClass("image-selection");
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        if (selecedElement.hasClass("jq-image-block-image")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container").clone();
                        }
                        else if (selecedElement.hasClass("jqte")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container").clone();
                        }
                        else {
                            CopiedElement = selecedElement.clone();
                            ;
                        }
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    else {
                        CopiedElement = jQuery("#noelement--x");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("You can only copy Text , Image.");
                    }
                }
            };
            SelfJQ.Paste = function () {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (jQuery(CopiedElement).length == 0) {
                    errorHandler.ActionFail("Please select and copy/cut a element.");
                    return;
                }
                if (selecedElement.hasClass("empty-container") || selecedElement.hasClass("column")) {
                    if (!jQuery.contains(CopiedElement[0], selecedElement[0])) {
                        CopiedElement.children(".ui-resizable-handle").css("margin", 0 + "px");
                        if (isCut == true) {
                            impCommonCode.ControlCommon.Code.DestroyResizable();
                        }
                        selecedElement.append(CopiedElement);
                    }
                    else {
                        errorHandler.ActionFail("You can only cut and paste element in to same element.");
                    }
                    if (isCut == true) {
                        CopiedElement = jQuery("#noelement--x");
                    }
                    impCommonCode.ControlCommon.Code.Execute();
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                    isCut = false;
                }
                else {
                    errorHandler.ActionFail("You can only paste element to a column and empty blocks.");
                }
            };
            return SelfJQ;
        })();
        CopyPaste.SelfJQ = SelfJQ;
    })(CopyPaste = exports.CopyPaste || (exports.CopyPaste = {}));
});
//# sourceMappingURL=CopyPasteJQ.js.map