

/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: Text.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

import impText = require("./FontJQ");
import impError = require("../Error/ErrorJQ");
import impPageControlNames = require("../ControlNames/PageControlNamesJQ");
import impPageCtx = require("../Page/Context/ContextJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impJQueryUI = require("./JQueryUI");
import impCommonCode = require("./ControlCommonJQ");

import impOperaction = require("../Common/OperationJQ");
//import impOnInsert = require("../jqte/OnInsert");
import * as jQuery from "jquery";
var debug = true;
var globalTextBlockId = 0;
var globalTextBoxContainerId = 0;

var isTextJQReady = false;
var isTextInit = false;


export module Text {

    export class SmartObj {
        currentObj: JQuery;
        command = "";
        isDirty = false;
    }


    export class TextJQ extends impPageControlNames.PageControlNamesJQ.Page.Text.Controls {

        public static pageId = "#control-insert-text";
        public static insertTextId = "";
        public static insertTextPreviewId = ".insert-text-out-put";
        public static insertTextJTE = ".insert-text-jte";
        public static CSSCLASS = 'jq-text-block design-text-block normal-element';
        public static CONTAINER_CSS_CLASS = "jq-text-block-container design-text-block normal-element jq-container";
        public static JTEEditorClass = ".jqte-editor";

        constructor() {
            super();
        }


        public InitInsert() {
        }

        // generate scope id
        GenerateTextBlockScopeId() {
            return "Text_Block_" + ++globalTextBlockId;
        }

        GenerateContainerScopeId() {
            return "Text_Block_Container_" + ++globalTextBoxContainerId;
        }

        public Init() {

            if (isTextInit == false) {

                isTextInit = true;

                TextJQ.AttachClose();
                TextJQ.AttachPreviewButton();
                TextJQ.AttachInsertText();
                TextJQ.AttachClearText();

                jQuery(document).ready(function () {
                    if (isTextJQReady == false) {
                        isTextJQReady = true;

                      


                    }
                });
            }

        }

        public static AttachClose() {
            jQuery(TextJQ.pageId).find(".close-button").on("click", function () {
                jQuery(this).closest('.control-page').hide();
                jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html('');

                //var topRowPx = "180px";

                //var topNotifyPx = "105px";

                //jQuery("rootx").css("top", topRowPx);
                //jQuery(".designer-top-row").css("height", topRowPx);
                jQuery(".editor").show();
                //jQuery("#notify").css("top", topNotifyPx);


            });
        }

        public static AttachPreviewButton() {
            jQuery(TextJQ.pageId).find(".preview-text-insert").on("click", function () {

                var text = new TextJQ();
                text.PreviewInsertText("notify help");
            });

        }

        public static AttachClearText() {
            jQuery(TextJQ.pageId).find(TextJQ.BTN_CLEAR_TEXT).on("click",function (e, s) {
                jQuery(TextJQ.JTEEditorClass).html('');

                var text = new TextJQ();
                text.PreviewInsertText('notify help');
            });
        }

        public static AttachInsertText() {
            jQuery(TextJQ.pageId).find(TextJQ.BTN_INSERT_TEXT).on("click",function (e, s) {

                TextJQ.InsertTextBlock("Sample text to edit");
            });
        }

        public static InsertTextBlock(sampleText) {

            var textObj = new TextJQ();

            var errorHandler = new impError.ErrorHandle.ErrorJQ();
            errorHandler.SetErrorClassName("page-insert-text");

            var ctx = new impPageCtx.Page.ContextJQ();

            var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;  //  jQuery("#rows-columns option:selected").val();

            if (selectedRowOrColumn == undefined) {
                selectedRowOrColumn = jQuery("#nonononelement");
            }

            if (!selectedRowOrColumn.hasClass("column") && (window.smartObj == null || window.smartObj.currentObj == null)) {
                window.smartObj = new SmartObj();
                window.smartObj.currentObj = selectedRowOrColumn;
                window.smartObj.command = "n";
            }

            if (selectedRowOrColumn != undefined) {
                var tbContainer = document.createElement("div");
                var tbContent = document.createElement("div");
                var tbContentWrapper = document.createElement("div");

                jQuery(tbContentWrapper).addClass("jq-text-block-content jqte-editor");

                jQuery(tbContent).css("font-family", jQuery(impText.Font.FontJQ.ddnId).find("option:selected").val());

                jQuery(tbContentWrapper).attr("tabindex", "1")
                //jQuery(tbContentWrapper).attr("contenteditable", "true");
                //jQuery(tbContentWrapper).append(jQuery(TextJQ.pageId).find(TextJQ.JTEEditorClass).html());
                jQuery(tbContentWrapper).append(sampleText);
                //jQuery(tbContentWrapper).addClass("padding-5");

                jQuery(tbContent).append(tbContentWrapper);

                jQuery(tbContent).addClass(TextJQ.CSSCLASS);

                ///////////////column scope id for debugging and designer //////
                var tbScopeId = textObj.GenerateTextBlockScopeId();

                if (debug == true && tbContent != undefined) {
                    jQuery(tbContent).prepend("<span class='debug-text-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                }

                jQuery(tbContent).attr("scopeId", tbScopeId);

                jQuery(tbContainer).append(tbContent);

                /////////////// row scope id for debugging and designer //////
                var tbcScopeId = textObj.GenerateContainerScopeId();

                if (debug == true) {
                    jQuery(tbContainer).append(" <span class='debug-text-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                }

                jQuery(tbContainer).addClass(TextJQ.CONTAINER_CSS_CLASS);

                jQuery(tbContainer).attr("scopeId", tbcScopeId);

                //var smartMenu = "<div class='smart-menu-icon'></div>" +
                //    "<div class='smart-menu'> " +
                //    "<div class='smart-menu-controls  smart-menu-height-width' > " +
                //    "<table style='smart-menu-controls-table'>" +
                //    " <tr> <td>Height </td> <td> : </td> <td><input maxlength='3' type='text' class='smart-menu-height'> </input> px </td> </tr> " +
                //    "<tr> <td>Width </td> <td> : </td> <td> <input maxlength='3' type='text' class='smart-menu-width'> px </input> </td> " +
                //    "</table" +
                //    "</div>" +
                //    "</div>";

                //jQuery(tbContainer).append(smartMenu);


                if (selectedRowOrColumn.hasClass("column") == true
                    //|| selectedRowOrColumn.hasClass("empty-container-text")
                    //|| selectedRowOrColumn.hasClass("empty-container-image")
                    //|| selectedRowOrColumn.hasClass("empty-container")
                    || (window.smartObj != null && window.smartObj.currentObj != null)) {

                    var emptyc = document.createElement("span");
                    jQuery(emptyc).addClass("empty-container-text  key image-text-other design-css design-empty-text-css");
                    //padding-10

                    jQuery(emptyc).prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>");
                    jQuery(emptyc).prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>");


                    jQuery(emptyc).css("font-size", "14px");

                    //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined);
                   
                    var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                    plusContainer.removeClass("jq-plus-container");
                    plusContainer.addClass("jq-plus-container-text");
                    plusContainer.addClass("design-css");
                    plusContainer.addClass("design-empty-text-css");
                    plusContainer.removeClass("jq-plus-container-not-used");

                    plusContainer.find(".jq-plus-content").append(tbContainer);

                    jQuery(emptyc).append(plusContainer);


                    impOperaction.Operation.AfterOperationJQ.Execute();

                    if (window.smartObj == null || window.smartObj.command == "") {
                        ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, undefined, undefined);
                    }
                    else {
                        ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, true, undefined);
                    }
                    //var empty = document.createElement("span");
                    //jQuery(empty).addClass("empty-container key design-css design-empty-css ");

                    //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(empty), '', undefined, undefined);


                    //// rearrange debug css ....

                    if (selectedRowOrColumn.hasClass("jq-text-block-container")) {

                        var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");

                        selectedRowOrColumn.find(".debug-text-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();

                        if (tbOrTbcWithScopeId != undefined) {
                            selectedRowOrColumn.append('<span class="debug-text-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + '</span>');
                        }
                    }
                    ///// rearrange debug css completed...

                    //errorHandler.ActionSuccess("");

                    jQuery(this).closest(".control-page").hide();

                    jQuery(tbContainer).find(".jqte_editor").addClass("padding-5");

                    // jQuery(tbContent).find(".jqte").addClass("key normal-element design-css design-jqte_editor text-element");

                    jQuery(tbContainer).find(".debug-css").remove();

                    jQuery(TextJQ.pageId).find(TextJQ.JTEEditorClass).html("");

                    
                    impCommonCode.ControlCommon.Code.DestroyResizable();
                    impCommonCode.ControlCommon.Code.Execute();
                }
                else {
                    errorHandler.ActionFail("You can only insert in a column block.");
                }
            }
        }

        PreviewInsertText(notifyHelp) {

            jQuery(TextJQ.insertTextPreviewId).html("");

            var tbContainer = document.createElement("div");
            var tbContent = document.createElement("div");

            jQuery(tbContent).css("font-family", jQuery(impText.Font.FontJQ.ddnId).find("option:selected").val());

            jQuery(tbContent).append(jQuery(TextJQ.JTEEditorClass).html());

            jQuery(tbContainer).append(tbContent);

            jQuery(TextJQ.insertTextPreviewId).html(jQuery(tbContainer).html());

            if (notifyHelp != undefined) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionHelp("Note :Copied formatted text from outside will not apply selected font");
            }
        }

        public static ProcessSelectNotify() {

            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {
                if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {

                    //errorHandler.ActionHelp("Help : You cannot [Text] insert here.");
                }
                else {
                    // errorHandler.ActionHelp("Help : You can insert [Text] here ", "altercolor");
                }
            }

        }


    }

}