define(["require", "exports", "../UndoManager/UndoManager", "../Watch/WatchMouseJQ", "../Error/ErrorJQ"], function (require, exports, impUndoManager, impWatch, impError) {
    "use strict";
    var NoUI;
    (function (NoUI) {
        var AlignJQ = (function () {
            function AlignJQ() {
            }
            AlignJQ.Common = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("column") || selectedElement.hasClass("row") || selectedElement.hasClass("root-elements")) {
                        return jQuery("#nononoelement");
                    }
                    return selectedElement;
                }
                return jQuery("#nononoelement");
            };
            AlignJQ.Center = function () {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "none");
                selectedElement.closest(".column").css("text-align", "center");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            AlignJQ.Left = function () {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "left");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            AlignJQ.Right = function () {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "right");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            return AlignJQ;
        }());
        NoUI.AlignJQ = AlignJQ;
        var MoveJQ = (function () {
            function MoveJQ() {
            }
            MoveJQ.Common = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("root-elements")) {
                        return jQuery("#nononoelement");
                    }
                    return selectedElement;
                }
                return jQuery("#nononoelement");
            };
            MoveJQ.CommonUpDown = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    return selectedElement;
                }
                return jQuery("#nononoelement");
            };
            MoveJQ.Left = function () {
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
                else if (selectedElement.css("float") == "left") {
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
            };
            MoveJQ.Right = function () {
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
                else if (selectedElement.css("float") == "left") {
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
            };
            MoveJQ.Up = function () {
                var selectedElement = MoveJQ.CommonUpDown();
                if (!selectedElement.hasClass("row")) {
                    selectedElement = selectedElement.closest(".row");
                }
                var lastElement = selectedElement.prevAll(".row").first();
                if (lastElement.length == 0) {
                    lastElement = selectedElement.prevAll(".key").last();
                }
                selectedElement.insertBefore(lastElement);
            };
            MoveJQ.Down = function () {
                var selectedElement = MoveJQ.CommonUpDown();
                if (!selectedElement.hasClass("row")) {
                    selectedElement = selectedElement.closest(".row");
                }
                var lastElement = selectedElement.nextAll(".row").first();
                if (lastElement.length == 0) {
                    lastElement = selectedElement.nextAll(".key").last();
                }
                selectedElement.insertAfter(lastElement);
            };
            return MoveJQ;
        }());
        NoUI.MoveJQ = MoveJQ;
    })(NoUI = exports.NoUI || (exports.NoUI = {}));
});
//# sourceMappingURL=NoUI.js.map