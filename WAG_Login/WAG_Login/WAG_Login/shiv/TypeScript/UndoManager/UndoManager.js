define(["require", "exports", "../Controls/ControlCommonJQ", "../Preview/Preview", "../Watch/WatchMouseJQ"], function (require, exports, impControlsCommon, impPreview, impWatch) {
    window.undoActivityIndex = 999999;
    var Manager;
    (function (Manager) {
        var UndoManager = (function () {
            function UndoManager() {
                this.isEnabled = true;
                this.isUndoHit = false;
                this.isRedoHit = false;
            }
            UndoManager.prototype.EnableUndoManager = function (isEnable) {
                this.isEnabled = isEnable;
            };
            UndoManager.prototype.SetSelectElement = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    var scopeId = selectedElement.attr("scopeId");
                    impWatch.Watch.MouseJQ.selectedElement = jQuery("div[scopeId='" + scopeId + "'").first();
                }
            };
            UndoManager.prototype.Undo = function () {
                if (jQuery(".close-preview").css("display") != "none") {
                    impPreview.Preview.PreviewJQ.ClosePreview();
                }
                var undoObj;
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
                    var parent;
                    parent = jQuery(undoObj.parent);
                    jQuery("page").html(undoObj.html);
                    impControlsCommon.ControlCommon.Code.DestroyResizable();
                    impControlsCommon.ControlCommon.Code.Execute();
                    jQuery(".jq-text-block").each(function () {
                        var html = jQuery(this).find(".jqte_editor").html();
                        if (html != undefined) {
                            jQuery(this).html("");
                            var content = jQuery(document.createElement("div"));
                            content.addClass("jq-text-block-content");
                            content.html(html);
                            jQuery(this).append(content);
                        }
                    });
                    jQuery(".jq-text-block-content").jqte({});
                    jQuery(".jqte_editor").addClass("padding-5");
                    this.SetSelectElement();
                }
            };
            UndoManager.prototype.Redo = function () {
                if (jQuery(".close-preview").css("display") != "none") {
                    impPreview.Preview.PreviewJQ.ClosePreview();
                }
                var undoObj;
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
                        jQuery(".jq-text-block").each(function () {
                            var html = jQuery(this).find(".jqte_editor").html();
                            if (html != undefined) {
                                jQuery(this).html("");
                                var content = jQuery(document.createElement("div"));
                                content.addClass("jq-text-block-content");
                                content.html(html);
                                jQuery(this).append(content);
                            }
                        });
                        jQuery(".jq-text-block-content").jqte({});
                        jQuery(".jqte_editor").addClass("padding-5");
                        this.SetSelectElement();
                    }
                }
            };
            UndoManager.prototype.PushUndo = function (undo) {
                if (window.undoObjArray == undefined) {
                    window.undoObjArray = [];
                }
                if (undo != undefined) {
                    window.undoObjArray.push(undo);
                }
            };
            UndoManager.prototype.PopUndo = function () {
                var undo = window.undoObjArray.pop();
            };
            UndoManager.prototype.ClearRedoOnChange = function () {
            };
            UndoManager.prototype.Clear = function () {
            };
            UndoManager.prototype.BeforeOperation = function (selectedParent) {
                if (window.layoutCreating == false) {
                    try {
                        window.undoObjArray.splice(window.undoActivityIndex + 1);
                        window.undoActivityIndex = 999999;
                    }
                    catch (ex) {
                    }
                    selectedParent = jQuery("page");
                    var rootTemp;
                    rootTemp = selectedParent;
                    var undo = new UndoJQ();
                    undo.parent = rootTemp;
                    undo.html = rootTemp.html();
                    undo.Push();
                }
            };
            return UndoManager;
        })();
        Manager.UndoManager = UndoManager;
        var UndoJQ = (function () {
            function UndoJQ() {
            }
            UndoJQ.prototype.Push = function () {
                var um = new UndoManager();
                um.PushUndo(this);
            };
            return UndoJQ;
        })();
        Manager.UndoJQ = UndoJQ;
    })(Manager = exports.Manager || (exports.Manager = {}));
});
//# sourceMappingURL=UndoManager.js.map