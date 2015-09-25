
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

        public static CommonUpDown() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


            if (selectedElement != undefined) {

                return selectedElement;
            }

            return jQuery("#nononoelement");
        }

        public static Left() {

            var selectedElement = MoveJQ.Common();

            if (selectedElement.css("float") == "none") {

                if (selectedElement.prevAll(".key").first().length > 0 &&
                    (selectedElement.prevAll(".key").first().css("float") == "right"
                        ||
                    selectedElement.prevAll(".key").first().css("float") == "left")
                    || selectedElement.prevAll(".key").first().length == 0) {
                    var eh = new impError.ErrorHandle.ErrorJQ();

                    eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                }

                selectedElement.insertBefore(selectedElement.prevAll(".key").first());
            }
            else
                if (selectedElement.css("float") == "left") {

                    if (selectedElement.prevAll(".key").first().length > 0 &&
                        (selectedElement.prevAll(".key").first().css("float") == "right"
                        || selectedElement.prevAll(".key").first().css("float") == "none")
                        || selectedElement.prevAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }

                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                }
                else {

                    if (selectedElement.nextAll(".key").first().length > 0 &&
                        (selectedElement.nextAll(".key").first().css("float") == "left"
                        || selectedElement.nextAll(".key").first().css("float") == "none")
                        || selectedElement.nextAll(".key").first().length == 0) {

                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }


                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());

                }

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }

        }

        public static Right() {

            var selectedElement = MoveJQ.Common();

            if (selectedElement.css("float") == "none") {

                if (selectedElement.nextAll(".key").first().length > 0 &&
                    (selectedElement.nextAll(".key").first().css("float") == "right"
                        ||
                    selectedElement.nextAll(".key").first().css("float") == "left")
                    || selectedElement.nextAll(".key").first().length == 0) {
                    var eh = new impError.ErrorHandle.ErrorJQ();

                    eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                }

                selectedElement.insertAfter(selectedElement.nextAll(".key").first());
            }
            else
                if (selectedElement.css("float") == "left") {

                    if (selectedElement.nextAll(".key").first().length > 0 &&
                        (selectedElement.nextAll(".key").first().css("float") == "right"
                        || selectedElement.nextAll(".key").first().css("float") == "none")
                        || selectedElement.nextAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }

                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                }
                else {

                    if (selectedElement.prevAll(".key").first().length > 0 &&
                        (selectedElement.prevAll(".key").first().css("float") == "left"
                        || selectedElement.prevAll(".key").first().css("float") == "none")

                        || selectedElement.prevAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();

                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }


                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                }

            if (selectedElement.length > 0) {
                var undo = new impUndoManager.Manager.UndoManager();

                undo.BeforeOperation();
            }
        }


        public static Up() {

            var selectedElement = MoveJQ.CommonUpDown();

            var isboundaryHit = false;
            var isboundaryHitHasNoelements = false;

                selectedElement = selectedElement.closest(".row");

                var lastElement = selectedElement.prevAll(".row").first();

                if (lastElement.length == 0) {
                    lastElement = selectedElement.prevAll(".key").last();
                }


                if (lastElement.length == 0) {
                    isboundaryHit = true;
                    lastElement = selectedElement.closest(".root-elements").prevAll(".root-elements").first().find(".key").last();
                }

                if (isboundaryHit == true) {

                    if (lastElement.length == 0) {

                        isboundaryHitHasNoelements == true;

                        lastElement = selectedElement.closest(".root-elements").prevAll(".root-elements").first();
                    }
                }

                if (isboundaryHitHasNoelements == true) {


                    if (lastElement.length > 0) {

                        lastElement.append(selectedElement);
                    }
                }
                else
                if (isboundaryHit == false) {
                    selectedElement.insertBefore(lastElement);
                }
                else {
                    selectedElement.insertAfter(lastElement);
                }
           

        }

        public static Down() {

            var selectedElement = MoveJQ.CommonUpDown();

            var isboundaryHit = false;
            var isboundaryHitHasNoelements = false;

                selectedElement = selectedElement.closest(".row");

                var lastElement = selectedElement.nextAll(".row").first();

                if (lastElement.length == 0) {
                    lastElement = selectedElement.nextAll(".key").last();
                }

                if (lastElement.length == 0) {

                    isboundaryHit = true;
                    lastElement = selectedElement.closest(".root-elements").nextAll(".root-elements").first().find(".key").first();
                }

                if (isboundaryHit == true) {

                    if (lastElement.length == 0) {

                        isboundaryHitHasNoelements == true;

                        lastElement = selectedElement.closest(".root-elements").nextAll(".root-elements").first();
                    }
                }


                if (isboundaryHitHasNoelements == true) {

                    if (lastElement.length > 0) {

                        lastElement.append(selectedElement);
                    }
                }
                else
                if (isboundaryHit == false) {
                    selectedElement.insertAfter(lastElement);
                }
                else {
                    selectedElement.insertBefore(lastElement);
                }
         
        }

    }

}