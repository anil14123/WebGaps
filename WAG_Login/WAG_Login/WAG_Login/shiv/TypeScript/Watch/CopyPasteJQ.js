define(["require", "exports", "./WatchMouseJQ", "../Error/ErrorJQ", "../Controls/ControlCommonJQ", "../UndoManager/UndoManager", "./ClipBoardJQ", "../Common/OperationJQ"], function (require, exports, impWatch, impError, impCommonCode, impUndoManager, impClipboard, impOperaction) {
    "use strict";
    var CopiedElement;
    var isCut = false;
    var ClipBorad = (function () {
        function ClipBorad() {
        }
        return ClipBorad;
    }());
    var CopyPaste;
    (function (CopyPaste) {
        var CopyPasteJQ = (function () {
            function CopyPasteJQ() {
            }
            CopyPasteJQ.Const = function () {
                CopyPasteJQ.ClipBoardData = new ClipBorad();
            };
            CopyPasteJQ.prototype.Init = function () {
            };
            CopyPasteJQ.SetClipBoard = function (clipText) {
                CopyPasteJQ.ClipBoardData.data = clipText;
            };
            CopyPasteJQ.IsImageUrl = function (s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (regexp.test(s) == true) {
                    if (s.length >= 5) {
                        var lowerUrl = s.toLowerCase();
                        var types = ["jpeg", "jpg", "png", "gif"];
                        for (var i = 0; i < types.length; i++) {
                            var _type = lowerUrl.substr(lowerUrl.length - 5, 5);
                            var ts = _type.split(".");
                            if (ts.length >= 2) {
                                if (ts[1] == types[i]) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
            // method need to be moved some where else
            CopyPasteJQ.CreateLinkContainer = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement == undefined) {
                    selectedElement = jQuery("#nononoelement");
                }
                var container = jQuery(document.createElement("div"));
                impOperaction.Operation.AfterOperationJQ.Execute();
                container.addClass("key empty-container links-container image-text-other");
                selectedElement.append(container);
                var undo = new impUndoManager.Manager.UndoManager();
                undo.BeforeOperation();
                impCommonCode.ControlCommon.Code.DestroyResizable();
                impCommonCode.ControlCommon.Code.Execute();
            };
            CopyPasteJQ.Delete = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (selectedElement != undefined) {
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
                            if (selectedElement.hasClass("column")) {
                                var columnsCount = selectedElement.closest(".row").children(".column").length;
                                var columnSize = "";
                                var columnClass = "";
                                if (columnsCount == 2) {
                                    columnClass = "col-xs-48";
                                    columnSize = "48";
                                }
                                if (columnsCount == 3) {
                                    columnClass = "col-xs-24";
                                    columnSize = "24";
                                }
                                if (columnsCount == 4) {
                                    columnClass = "col-xs-16";
                                    columnSize = "16";
                                }
                                var lastColumn;
                                /// then calculate...
                                selectedElement.closest(".row").children(".column").each(function () {
                                    lastColumn = jQuery(this);
                                    var prevSize = jQuery(this).attr("xs-column-size");
                                    var cssClass = "col-xs-" + prevSize;
                                    if (cssClass == columnClass) {
                                        return;
                                    }
                                    jQuery(this).addClass(columnClass);
                                    jQuery(this).attr("xs-column-size", columnSize);
                                    jQuery(this).removeClass(cssClass);
                                });
                                /// remove here.....
                                selectedElement.remove();
                            }
                            else {
                                selectedElement.remove();
                            }
                        }
                    }
                    else {
                        selectedElement.hide();
                    }
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                }
            };
            CopyPasteJQ.Cut = function () {
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
            CopyPasteJQ.Copy = function () {
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
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    else {
                        CopiedElement = jQuery("#noelement--x");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("You can only copy Text , Image.");
                    }
                }
            };
            CopyPasteJQ.Paste = function () {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (jQuery(CopiedElement).length == 0) {
                    errorHandler.ActionFail("Please copy/cut a element.");
                    return;
                }
                if (selecedElement != undefined) {
                    if (selecedElement.hasClass("column") || selecedElement.hasClass("image-text-other")) {
                        if (!jQuery.contains(CopiedElement[0], selecedElement[0])) {
                            CopiedElement.children(".ui-resizable-handle").css("margin", 0 + "px");
                            if (isCut == true) {
                                impCommonCode.ControlCommon.Code.DestroyResizable();
                            }
                            impOperaction.Operation.AfterOperationJQ.Execute();
                            if (selecedElement.hasClass("column")) {
                                if (impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                    impWatch.Watch.MouseJQ.nearestElement.after(CopiedElement);
                                }
                                else {
                                    selecedElement.append(CopiedElement);
                                }
                            }
                            else {
                                selecedElement.after(CopiedElement);
                            }
                        }
                        else {
                            errorHandler.ActionFail("You can only cut and paste element in to same element.");
                        }
                        if (isCut == true) {
                            CopiedElement = jQuery("#noelement--x");
                        }
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        isCut = false;
                    }
                    else {
                        errorHandler.ActionFail("Please select a [Column] to paste.");
                    }
                }
            };
            CopyPasteJQ.PasteClipBoard = function () {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (selecedElement != undefined) {
                    if (selecedElement.hasClass("empty-container") || selecedElement.hasClass("column")) {
                        if (CopyPasteJQ.ClipBoardData.data != undefined
                            &&
                                CopyPasteJQ.ClipBoardData.data != "") {
                            if (CopyPasteJQ.IsImageUrl(CopyPasteJQ.ClipBoardData.data)) {
                                var clp = new impClipboard.ClipBoard.ClipBoardJQ();
                                clp.InsertImage(CopyPasteJQ.ClipBoardData.data);
                            }
                            else {
                                var clp = new impClipboard.ClipBoard.ClipBoardJQ();
                                clp.InsertText(CopyPasteJQ.ClipBoardData.data);
                            }
                        }
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                }
                else {
                    errorHandler.ActionFail("You can only paste element to a column and empty blocks.");
                }
            };
            CopyPasteJQ.staticRun = CopyPasteJQ.Const();
            return CopyPasteJQ;
        }());
        CopyPaste.CopyPasteJQ = CopyPasteJQ;
    })(CopyPaste = exports.CopyPaste || (exports.CopyPaste = {}));
});
//# sourceMappingURL=CopyPasteJQ.js.map