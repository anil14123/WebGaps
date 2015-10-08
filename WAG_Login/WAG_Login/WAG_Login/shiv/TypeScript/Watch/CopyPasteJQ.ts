import impWatch = require("./WatchMouseJQ");
import impError = require("../Error/ErrorJQ");
import impCommonCode = require("../Controls/ControlCommonJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impClipboard = require("./ClipBoardJQ");
import impOperaction = require("../Common/OperationJQ");

var CopiedElement: JQuery;
var isCut = false;

class ClipBorad {
   public data: string;
}

export module CopyPaste {

    export class CopyPasteJQ {

        static ClipBoardData: ClipBorad;

        static staticRun = CopyPasteJQ.Const();

        static Const() {
            CopyPasteJQ.ClipBoardData = new ClipBorad();
        }

        public Init() {

        }

        public static SetClipBoard(clipText: string) {
            CopyPasteJQ.ClipBoardData.data = clipText;
        }

        public static IsImageUrl(s: string) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
            if (regexp.test(s) == true) {
                if (s.length >= 5) {

                    var lowerUrl = s.toLowerCase();

                    var types = ["jpeg", "jpg", "png", "gif"]

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
        }

        // method need to be moved some where else
        public static CreateLinkContainer() {
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

            impCommonCode.ControlCommon.Code.Execute();
        }
       

        public static Delete() {
            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            if (selectedElement != undefined) {
                if (
                    !(
                        selectedElement.hasClass("jq-Header")
                        ||
                        selectedElement.hasClass("jq-MenuBar")
                        ||
                        selectedElement.hasClass("jq-Content")
                        ||
                        selectedElement.hasClass("jq-Footer")
                        )
                    ) {
                    if (selectedElement.hasClass("jq-image-block-image")) {
                        selectedElement.closest(".jq-plus-container").remove();
                    }
                    else
                        if (selectedElement.hasClass("jq-text-block")) {
                            selectedElement.closest(".jq-plus-container").remove();
                        }
                        else {
                            selectedElement.remove();
                        }
                }
                else {

                    selectedElement.hide();
                
                    //errorHandler.ActionFail("Cannot delete Header or MenuBar or Body or Footer.");
                }

                var undomanager = new impUndoManager.Manager.UndoManager();

                undomanager.BeforeOperation();
            }
        }

        public static Cut() {

            isCut = true;

            var selecedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selecedElement != undefined) {
                selecedElement.removeClass("image-selection");

                if (!selecedElement.hasClass("root-elements")) {

                    if (selecedElement.hasClass("jq-image-block-image")) {
                        CopiedElement = selecedElement.closest(".jq-plus-container");
                    }
                    else
                        if (selecedElement.hasClass("jqte")) {
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
        }

        public static Copy() {

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
                    else
                        if (selecedElement.hasClass("jqte")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container").clone();
                        }
                        else {
                            CopiedElement = selecedElement.clone();;
                        }

                    impCommonCode.ControlCommon.Code.Execute();



                }
                else {
                    CopiedElement = jQuery("#noelement--x");

                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                    errorHandler.ActionSuccess("You can only copy Text , Image.");

                }
            }
        }


        public static Paste() {

            var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
            var errorHandler = new impError.ErrorHandle.ErrorJQ();


            if (jQuery(CopiedElement).length == 0) {
                errorHandler.ActionFail("Please select and copy/cut a element.");
                return;
            }

            if (selecedElement != undefined) {

                if (selecedElement.hasClass("empty-container")
                    || selecedElement.hasClass("empty-container-text")
                    || selecedElement.hasClass("empty-container-image")
                    || selecedElement.hasClass("column")) {

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
            }
        }

        public static PasteClipBoard() {

            var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            if (selecedElement != undefined)
                {
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

                    impCommonCode.ControlCommon.Code.Execute();

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }
            }
            else {

                errorHandler.ActionFail("You can only paste element to a column and empty blocks.");
            }
        }

    }
}