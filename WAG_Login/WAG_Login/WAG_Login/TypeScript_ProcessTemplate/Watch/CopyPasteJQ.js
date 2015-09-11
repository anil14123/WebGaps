define(["require", "exports", "./WatchMouseJQ", "../../Typescript/UndoManager/UndoManager"], function (require, exports, impWatch, impUndoManager) {
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
                selectedElement.remove();
                var undomanager = new impUndoManager.Manager.UndoManager();
                undomanager.BeforeOperation(jQuery("page"));
            };
            SelfJQ.Cut = function () {
                isCut = true;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selecedElement != undefined) {
                    CopiedElement = selecedElement;
                }
                else {
                    CopiedElement = jQuery("#noelement--x");
                }
            };
            SelfJQ.Copy = function () {
                isCut = false;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selecedElement != undefined) {
                    CopiedElement = selecedElement.clone();
                    ;
                }
                else {
                    CopiedElement = jQuery("#noelement--x");
                }
            };
            SelfJQ.Paste = function () {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                selecedElement.append(CopiedElement);
                var undomanager = new impUndoManager.Manager.UndoManager();
                undomanager.BeforeOperation(jQuery("page"));
            };
            return SelfJQ;
        })();
        CopyPaste.SelfJQ = SelfJQ;
    })(CopyPaste = exports.CopyPaste || (exports.CopyPaste = {}));
});
//# sourceMappingURL=CopyPasteJQ.js.map