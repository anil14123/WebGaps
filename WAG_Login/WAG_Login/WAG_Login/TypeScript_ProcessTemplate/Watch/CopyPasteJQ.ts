import impWatch = require("./WatchMouseJQ");
import impUndoManager = require("../../Typescript/UndoManager/UndoManager");


var CopiedElement: JQuery;
var isCut = false;

export module CopyPaste {

    export class SelfJQ {

        constructor() {

        }

        public Init() {

        }

        public static Delete() {
            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            selectedElement.remove();

            var undomanager = new impUndoManager.Manager.UndoManager();

            undomanager.BeforeOperation(jQuery("page"));
        }

        public static Cut() {

            isCut = true;

            var selecedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selecedElement != undefined) {

                CopiedElement = selecedElement;

            }
            else {

                CopiedElement = jQuery("#noelement--x");

            }
        }


        public static Copy() {

            isCut = false;

            var selecedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selecedElement != undefined) {

                CopiedElement = selecedElement.clone();;

            }
            else {
                CopiedElement = jQuery("#noelement--x");

            }
        }


        public static Paste() {

            var selecedElement = impWatch.Watch.MouseJQ.selectedElement;

            selecedElement.append(CopiedElement);

            var undomanager = new impUndoManager.Manager.UndoManager();

            undomanager.BeforeOperation(jQuery("page"));


        }

    }
}