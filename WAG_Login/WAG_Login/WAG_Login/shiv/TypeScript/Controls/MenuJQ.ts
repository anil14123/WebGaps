
import impError = require("../Error/ErrorJQ");
import impPageControlNames = require("../ControlNames/PageControlNamesJQ");
import impPageCtx = require("../Page/Context/ContextJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impJQueryUI = require("./JQueryUI");
import impCommonCode = require("./ControlCommonJQ");

import impCssManager = require("../cssManager/cssManagerJQ");
import impMenuTemplate = require("../Menu/MenuTemplateJQ");

import impCommon = require("../Common/CommonEvents");

var debug = true;

var globalMenuontainerId = 0;

var isMenuJQReady = false;
var isTextInit = false;

var nextId = 0;

export module Menu {

    export class MenuJQ {

        constructor() {

        }


        public InitInsert() {
        }


        GenerateContainerScopeId() {
            return "Menu_Container_" + ++globalMenuontainerId;
        }

        public Init() {

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

        }

        public static AttachNextMenu() {

            jQuery(".control-menu-next").click(function () {
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
        }

        public static AttachPrevMenu() {

            jQuery(".control-menu-prev").click(function () {
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
        }

        public static AttachClose() {
            jQuery(".control-menu").find(".close-button").on("click", function () {
                jQuery(this).closest('.control-page').hide();
                jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html('');
            });
        }

        public static AttachInsertMenu() {
            jQuery(".control-menu").find(".control-menu-insert").click(function (e, s) {

                var cssMan = new impCssManager.CssManager.CssManagerJQ();

                if (nextId >= 0 && nextId < cssMan.Menus.length) {

                    var menuDesignId = cssMan.Menus[nextId].MenuId;

                    var mt = new impMenuTemplate.Page.Menu.MenuTemplateJQ();

                    var menu = mt.CreateMenuTemplate(1, "", undefined, menuDesignId);

                    var menuObj = new MenuJQ();
                    var ctx = new impPageCtx.Page.ContextJQ();

                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;  //  jQuery("#rows-columns option:selected").val();

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

                        impCommonCode.ControlCommon.Code.Execute();
                    }

                    cssMan.Add(nextId);
                }

            });
        }

        public static ProcessShow() {

            var cssman = new impCssManager.CssManager.CssManagerJQ();

            nextId = 0;

            var src = cssman.GetHtml(nextId);

            var iframe = jQuery(document.createElement("iframe"));

            iframe.attr("src", src);

            iframe.addClass("menu-iframe");

            jQuery(".control-menu-styles").html("");
            jQuery(".control-menu-styles").append(iframe);

        }

        public static ProcessSelectNotify() {

            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {

                errorHandler.ActionHelp("Help : You cannot [Text] insert here.");
            }

        }


    }

}