
import impCommonMethods = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impWatch = require("../Watch/WatchMouseJQ");
import impError = require("../Error/ErrorJQ");

export module NoUI {

    export class AlignJQ {

        public static Common() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


            if (selectedElement != undefined) {

                if (selectedElement.hasClass("column") || selectedElement.hasClass("row") || selectedElement.hasClass("root-elements")) {
                    return jQuery("#nononoelement");
                }

                return selectedElement;
            }

            return jQuery("#nononoelement");
        }

        public static Center() {
            var selectedElement = AlignJQ.Common();

            selectedElement.css("float", "none");
            selectedElement.closest(".column").css("text-align", "center");

        }

        public static Left() {


            var selectedElement = AlignJQ.Common();

            selectedElement.css("float", "left");


        }

        public static Right() {

            var selectedElement = AlignJQ.Common();

            selectedElement.css("float", "right");

        }


    }

    export class MoveJQ {

        public static Common() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


            if (selectedElement != undefined) {

                if (selectedElement.hasClass("column") || selectedElement.hasClass("row") || selectedElement.hasClass("root-elements")) {
                    return jQuery("#nononoelement");
                }

                return selectedElement;
            }

            return jQuery("#nononoelement");
        }

        public static Left() {

            var selectedElement = MoveJQ.Common();

            var eh = new impError.ErrorHandle.ErrorJQ();

            eh.ActionHelp("Moving elements are based on Aligned Elements<br>For Eg: Move Left is dependent on Align Left.");

            if (selectedElement.css("float") == "left" || selectedElement.css("float") == "none") {
                selectedElement.insertBefore(selectedElement.prev(".key"));
            }
            else
            {
                selectedElement.insertAfter(selectedElement.next(".key"));
            }

        }

        public static Right() {

            var selectedElement = MoveJQ.Common();

            var eh = new impError.ErrorHandle.ErrorJQ();

            eh.ActionHelp("Moving elements are based on Aligned Elements<br>For Eg: Move Left is dependent on Align Left.");

            if (selectedElement.css("float") == "left" || selectedElement.css("float") == "none") {
                selectedElement.insertAfter(selectedElement.next(".key"));
            }
            else {
                selectedElement.insertBefore(selectedElement.prev(".key"));
            }
        }
    }

}