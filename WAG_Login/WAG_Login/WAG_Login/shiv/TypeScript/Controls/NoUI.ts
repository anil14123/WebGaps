
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

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }
        }

        public static Left() {


            var selectedElement = AlignJQ.Common();

            selectedElement.css("float", "left");

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }
        }

        public static Right() {

            var selectedElement = AlignJQ.Common();

            selectedElement.css("float", "right");

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }
        }


    }

    export class MoveJQ {

        public static Common() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


            if (selectedElement != undefined) {

                if (selectedElement.hasClass("root-elements")) {
                    return jQuery("#nononoelement");
                }

                return selectedElement;
            }

            return jQuery("#nononoelement");
        }

        public static Left() {

            var selectedElement = MoveJQ.Common();

            if (selectedElement.css("float") == "none") {

                if (selectedElement.prev(".key").length > 0 &&
                    (selectedElement.prev(".key").css("float") == "right"
                        ||
                        selectedElement.prev(".key").css("float") == "left")
                    || selectedElement.prev(".key").length == 0) {
                    var eh = new impError.ErrorHandle.ErrorJQ();

                    eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                }

                selectedElement.insertBefore(selectedElement.prev(".key"));
            }
            else
                if (selectedElement.css("float") == "left") {

                    if (selectedElement.prev(".key").length > 0 &&
                        (selectedElement.prev(".key").css("float") == "right"
                            || selectedElement.prev(".key").css("float") == "none")
                        || selectedElement.prev(".key").length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }

                    selectedElement.insertBefore(selectedElement.prev(".key"));
                }
                else {

                    if (selectedElement.next(".key").length > 0 &&
                        (selectedElement.next(".key").css("float") == "left"
                            || selectedElement.next(".key").css("float") == "none")
                        || selectedElement.next(".key").length == 0) {

                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }


                    selectedElement.insertAfter(selectedElement.next(".key"));

                }

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }

        }

        public static Right() {

            var selectedElement = MoveJQ.Common();

            if (selectedElement.css("float") == "none") {

                if (selectedElement.next(".key").length > 0 &&
                    (selectedElement.next(".key").css("float") == "right"
                        ||
                        selectedElement.next(".key").css("float") == "left")
                    || selectedElement.next(".key").length == 0) {
                    var eh = new impError.ErrorHandle.ErrorJQ();

                    eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                }

                selectedElement.insertAfter(selectedElement.next(".key"));
            }
            else
                if (selectedElement.css("float") == "left") {

                    if (selectedElement.next(".key").length > 0 &&
                        (selectedElement.next(".key").css("float") == "right"
                            || selectedElement.next(".key").css("float") == "none")
                        || selectedElement.next(".key").length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }

                    selectedElement.insertAfter(selectedElement.next(".key"));
                }
                else {

                    if (selectedElement.prev(".key").length > 0 &&
                        (selectedElement.prev(".key").css("float") == "left" || selectedElement.prev(".key").css("float") == "none")

                        || selectedElement.prev(".key").length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }


                    selectedElement.insertBefore(selectedElement.prev(".key"));
                }

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }
        }
    }

}