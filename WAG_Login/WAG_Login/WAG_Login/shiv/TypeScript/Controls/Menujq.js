define(["require", "exports", "../Error/ErrorJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../cssManager/cssManagerJQ", "../Menu/MenuTemplateJQ", "jquery"], function (require, exports, impError, impPageCtx, impWatch, impCommonCode, impCssManager, impMenuTemplate, jQuery) {
    "use strict";
    var debug = true;
    var globalMenuontainerId = 0;
    var isMenuJQReady = false;
    var isTextInit = false;
    var nextId = 0;
    var Menu;
    (function (Menu) {
        var MenuJQ = (function () {
            function MenuJQ() {
            }
            MenuJQ.prototype.InitInsert = function () {
            };
            MenuJQ.prototype.GenerateContainerScopeId = function () {
                return "Menu_Container_" + ++globalMenuontainerId;
            };
            MenuJQ.prototype.Init = function () {
                if (isTextInit == false) {
                    isTextInit = true;
                    jQuery(document).ready(function () {
                        if (isMenuJQReady == false) {
                            isMenuJQReady = true;
                            MenuJQ.AttachClose();
                            MenuJQ.AttachInsertMenu();
                            MenuJQ.AttachNextMenu();
                            MenuJQ.AttachPrevMenu();
                        }
                    });
                }
            };
            MenuJQ.AttachNextMenu = function () {
                jQuery(".control-menu-next").on("click", function () {
                    var cssman = new impCssManager.CssManager.CssManagerJQ();
                    nextId++;
                    if (nextId < cssman.Menus.length) {
                        var src = cssman.GetHtml(nextId);
                        var iframe = jQuery(document.createElement("iframe"));
                        iframe.attr("src", src);
                        iframe.addClass("menu-iframe");
                        jQuery(".control-menu-styles").html("");
                        jQuery(".control-menu-styles").append(iframe);
                    }
                    else {
                        nextId = cssman.Menus.length - 1;
                    }
                });
            };
            MenuJQ.AttachPrevMenu = function () {
                jQuery(".control-menu-prev").on("click", function () {
                    var cssman = new impCssManager.CssManager.CssManagerJQ();
                    nextId--;
                    if (nextId >= 0) {
                        var src = cssman.GetHtml(nextId);
                        var iframe = jQuery(document.createElement("iframe"));
                        iframe.attr("src", src);
                        iframe.addClass("menu-iframe");
                        jQuery(".control-menu-styles").html("");
                        jQuery(".control-menu-styles").append(iframe);
                    }
                    else {
                        nextId = 0;
                    }
                });
            };
            MenuJQ.AttachClose = function () {
                jQuery(".control-menu").find(".close-button").on("click", function () {
                    jQuery(this).closest('.control-page').hide();
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html('');
                });
            };
            MenuJQ.AttachInsertMenu = function () {
                jQuery(".control-menu").find(".control-menu-insert").on("click", function (e, s) {
                    var cssMan = new impCssManager.CssManager.CssManagerJQ();
                    if (nextId >= 0 && nextId < cssMan.Menus.length) {
                        var menuDesignId = cssMan.Menus[nextId].MenuId;
                        var mt = new impMenuTemplate.Page.Menu.MenuTemplateJQ();
                        var menu = mt.CreateMenuTemplate(1, "", undefined, menuDesignId);
                        var menuObj = new MenuJQ();
                        var ctx = new impPageCtx.Page.ContextJQ();
                        var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                        if (selectedRowOrColumn != undefined) {
                            var tbContainer = document.createElement("div");
                            jQuery(tbContainer).append(menu);
                            var tbcScopeId = menuObj.GenerateContainerScopeId();
                            jQuery(tbContainer).attr("scopeId", tbcScopeId);
                            if (selectedRowOrColumn.hasClass("column") == true || selectedRowOrColumn.hasClass("empty-container")) {
                                var emptyc = document.createElement("span");
                                jQuery(emptyc).addClass("empty-container-menu key image-text-other ");
                                jQuery(emptyc).css("font-size", "14px");
                                //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined);
                                var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                                plusContainer.removeClass("jq-plus-container");
                                plusContainer.addClass("jq-plus-container-text");
                                plusContainer.removeClass("jq-plus-container-not-used");
                                plusContainer.find(".jq-plus-content").append(tbContainer);
                                jQuery(emptyc).append(plusContainer);
                                ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, true, undefined);
                                impCommonCode.ControlCommon.Code.DestroyResizable();
                                impCommonCode.ControlCommon.Code.Execute();
                            }
                            cssMan.Add(nextId);
                        }
                    }
                });
            };
            MenuJQ.ProcessShow = function () {
                var cssman = new impCssManager.CssManager.CssManagerJQ();
                nextId = 0;
                var src = cssman.GetHtml(nextId);
                var iframe = jQuery(document.createElement("iframe"));
                iframe.attr("src", src);
                iframe.addClass("menu-iframe");
                jQuery(".control-menu-styles").html("");
                jQuery(".control-menu-styles").append(iframe);
            };
            MenuJQ.ProcessSelectNotify = function () {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {
                        errorHandler.ActionHelp("Help : You cannot [Text] insert here.");
                    }
                }
            };
            return MenuJQ;
        }());
        Menu.MenuJQ = MenuJQ;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
//# sourceMappingURL=Menujq.js.map