﻿
/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////


import impUndoManager = require("../UndoManager/UndoManager");
import impLayout = require("../Themes/EmptyLayout/EmptyLayoutJQ");
import impAuth = require("../_Classes/Auth");
import impError = require("../Error/ErrorJQ");
import impAny = require("../page/anyjq");
import impOn = require("../Common/on");
import impSaveClass = require("../_Classes/SaveJq");

var themeHandle;

export module Common {

    export class SmartObj {
        currentObj: JQuery;
        command = "";
        isDirty = false;
    }

    export class CommonEvents {

        isCommonEventsAdded = false;

        public Init() {


            jQuery("#notify").click(function () {
                jQuery(this).hide();
            });

            themeHandle = window.setInterval(
                function () {
                    if (impAuth.Auth.AuthJQ.IsAuth == true) {
                        window.clearInterval(themeHandle);

                        var layout = new impLayout.Themes.Empty.LayoutJQ();

                        layout.Init();

                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Hide()
                        }
                    }
                    else {
                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Show()
                        }
                    }

                }, 1000);
           
            /// save ///////

            jQuery(".jq-save").click(function () {

                var scripts = jQuery(document.createElement("scripts"));
                var styles = jQuery(document.createElement("styles"));
                var page = jQuery(document.createElement("page"))

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

                var data = { Obj: save, site: "site1", pageName: "page1" }

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
        }


        public static ResizableClickCode($this) {


            jQuery(".ui-resizable-se").removeClass("selected-resizable");
            jQuery(".ui-resizable-s").removeClass("selected-resizable");

            jQuery($this).addClass("selected-resizable");
        }


    }


}