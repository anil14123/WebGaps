/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { undoObjArray: Manager.UndoJQ[]; undoActivityIndex; layoutCreating: Boolean }

declare var window: MyWindow;

window.undoActivityIndex = 999999;
////////////////////////////////////////////////////////////////////////

import impControlsCommon = require("../Controls/ControlCommonJQ");
//import impMain = require("./../MainJQ");
import impPreview = require("../Preview/Preview");
import impWatch = require("../Watch/WatchMouseJQ");


export module Manager {

    export class UndoManager {

        private isEnabled = true;

        private isUndoHit = false;
        private isRedoHit = false;

        public EnableUndoManager(isEnable: boolean) {

            this.isEnabled = isEnable;
        }

        public SetSelectElement() {
            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {
                var scopeId = selectedElement.attr("scopeId");

                impWatch.Watch.MouseJQ.selectedElement = jQuery("div[scopeId='" + scopeId + "'").first();
            }
        }

        public Undo() {

            if (jQuery(".close-preview").css("display") != "none") {
                impPreview.Preview.PreviewJQ.ClosePreview();
            }

            var undoObj: UndoJQ;

            if (window.undoActivityIndex <= 0) {

                return;
            }

            if (window.undoActivityIndex == 999999) {

                if (window.undoObjArray != undefined) {
                    window.undoActivityIndex = window.undoObjArray.length - 2;
                    undoObj = window.undoObjArray[window.undoActivityIndex];
                }
            }
            else {


                window.undoActivityIndex--;


                if (window.undoActivityIndex <= 0) {
                    this.isUndoHit = true;
                }

                undoObj = window.undoObjArray[window.undoActivityIndex];

            }

            if (undoObj != null) {

                var parent: JQuery;

                parent = jQuery(undoObj.parent);

                jQuery("page").html(undoObj.html);
                
                impControlsCommon.ControlCommon.Code.DestroyResizable();
                impControlsCommon.ControlCommon.Code.Execute();

                this.SetSelectElement();
            }


        }


        public Redo() {

            if (jQuery(".close-preview").css("display") != "none") {
                impPreview.Preview.PreviewJQ.ClosePreview();
            }

            var undoObj: UndoJQ;

            if (window.undoActivityIndex == -1) {
                window.undoActivityIndex = 0;
            }

            if (window.undoObjArray != undefined) {
                if ((window.undoActivityIndex + 1) >= window.undoObjArray.length) {

                    return;
                }


                window.undoActivityIndex++;


                undoObj = window.undoObjArray[window.undoActivityIndex];

                if (undoObj != null) {

                    jQuery("page").html(undoObj.html);
                    
                    impControlsCommon.ControlCommon.Code.DestroyResizable();
                    impControlsCommon.ControlCommon.Code.Execute();

                    this.SetSelectElement();
                }
            }


        }

        public PushUndo(undo: UndoJQ) {

            if (window.undoObjArray == undefined) {
                window.undoObjArray = [];
            }

            if (undo != undefined) {
                window.undoObjArray.push(undo);

            }

        }

        public PopUndo() {
            var undo = window.undoObjArray.pop();

        }

        public ClearRedoOnChange() {

        }

        public Clear() {
        }

        public BeforeOperation(selectedParent?: JQuery) {

            if (window.layoutCreating == false) {
                try {
                    window.undoObjArray.splice(window.undoActivityIndex + 1);
                    window.undoActivityIndex = 999999;
                }
                catch (ex) {
                }

                selectedParent = jQuery("page");

                var rootTemp: JQuery;

                rootTemp = selectedParent;

                var undo = new UndoJQ();
                undo.parent = rootTemp;
                undo.html = rootTemp.html();
                undo.Push();
            }


        }
    }

    export class UndoJQ {
        public undoCommand: string;       // go backward...
        public mainObject: JQuery;        // element which is added or deleted...
        public placeHolderObject: JQuery; // elements container...
        public redoCommand: string;       // go forward...
        public prevElement: JQuery;
        public UndoSequence: UndoJQ[];

        public parent: JQuery;
        public html: string;

        public Push() {

            var um = new UndoManager();
            um.PushUndo(this);

        }
    }

}

