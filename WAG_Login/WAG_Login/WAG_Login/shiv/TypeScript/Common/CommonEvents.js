define(["require", "exports", "../UndoManager/UndoManager", "../Themes/EmptyLayout/EmptyLayoutJQ", "../_Classes/Auth", "../Common/on", "../_Classes/SaveJq"], function (require, exports, impUndoManager, impLayout, impAuth, impOn, impSaveClass) {
    var themeHandle;
    var Common;
    (function (Common) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        })();
        Common.SmartObj = SmartObj;
        var CommonEvents = (function () {
            function CommonEvents() {
                this.isCommonEventsAdded = false;
            }
            CommonEvents.prototype.Init = function () {
                jQuery("#notify").click(function () {
                    jQuery(this).hide();
                });
                themeHandle = window.setInterval(function () {
                    if (impAuth.Auth.AuthJQ.IsAuth == true) {
                        window.clearInterval(themeHandle);
                        var layout = new impLayout.Themes.Empty.LayoutJQ();
                        layout.Init();
                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Hide();
                        }
                    }
                    else {
                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Show();
                        }
                    }
                }, 1000);
                /// save ///////
                jQuery(".jq-save").click(function () {
                    var scripts = jQuery(document.createElement("scripts"));
                    var styles = jQuery(document.createElement("styles"));
                    var page = jQuery(document.createElement("page"));
                    jQuery(".add-to-page").each(function () {
                        if (jQuery(this).prop("tagName") == "SCRIPT") {
                            scripts.append($(this).clone());
                        }
                        if (jQuery(this).prop("tagName") == "LINK") {
                            styles.append($(this).clone());
                        }
                        if (jQuery(this).prop("tagName") == "PAGE") {
                            styles.append($(this).clone());
                        }
                    });
                    var save = new impSaveClass.Save.SaveJQ();
                    save.scripts = scripts.html();
                    save.styles = styles.html();
                    save.page = page.html();
                    var data = {
                        Obj: save, siteName: jQuery(".input-site-name").val(), pageName: jQuery(".input-page-name").val()
                    };
                    var saveData = JSON.stringify(data);
                    save.SavePage(saveData);
                });
                //// undo manager ////
                jQuery(".jq-undo").click(function () {
                    var undoManager = new impUndoManager.Manager.UndoManager();
                    undoManager.Undo();
                });
                jQuery(".jq-redo").click(function () {
                    var undoManager = new impUndoManager.Manager.UndoManager();
                    undoManager.Redo();
                });
                jQuery(".properties-button").click(function () {
                    if (jQuery(".control-properties").css("display") == "block") {
                        jQuery(".control-properties").addClass("forced-hide");
                    }
                    else {
                        jQuery(".control-properties").removeClass("forced-hide");
                    }
                    jQuery(".control-properties").fadeToggle();
                });
                /////// smar obj /////
                window.smartObj = new SmartObj();
                impOn.On.Code.Execute();
            };
            CommonEvents.ResizableClickCode = function ($this) {
                jQuery(".ui-resizable-se").removeClass("selected-resizable");
                jQuery(".ui-resizable-s").removeClass("selected-resizable");
                jQuery($this).addClass("selected-resizable");
            };
            return CommonEvents;
        })();
        Common.CommonEvents = CommonEvents;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=CommonEvents.js.map