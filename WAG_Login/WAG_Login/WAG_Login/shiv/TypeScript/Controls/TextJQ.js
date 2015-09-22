/// <reference path="../../../third-party/jte/uncompressed/jquery-te-1.4.0.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./FontJQ", "../Error/ErrorJQ", "../ControlNames/PageControlNamesJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ"], function (require, exports, impText, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode) {
    var debug = true;
    var globalTextBlockId = 0;
    var globalTextBoxContainerId = 0;
    var isTextJQReady = false;
    var isTextInit = false;
    var Text;
    (function (Text) {
        var TextJQ = (function (_super) {
            __extends(TextJQ, _super);
            function TextJQ() {
                _super.call(this);
            }
            TextJQ.prototype.InitInsert = function () {
            };
            // generate scope id
            TextJQ.prototype.GenerateTextBlockScopeId = function () {
                return "Text_Block_" + ++globalTextBlockId;
            };
            TextJQ.prototype.GenerateContainerScopeId = function () {
                return "Text_Block_Container_" + ++globalTextBoxContainerId;
            };
            TextJQ.prototype.Init = function () {
                if (isTextInit == false) {
                    isTextInit = true;
                    TextJQ.AttachClose();
                    TextJQ.AttachPreviewButton();
                    TextJQ.AttachInsertText();
                    TextJQ.AttachClearText();
                    jQuery(document).ready(function () {
                        if (isTextJQReady == false) {
                            isTextJQReady = true;
                            jQuery(TextJQ.pageId).find(TextJQ.insertTextJTE).jqte({
                                change: function () {
                                    var text = new TextJQ();
                                    // text.PreviewInsertText('notify help');
                                }
                            });
                        }
                    });
                }
            };
            TextJQ.AttachClose = function () {
                jQuery(TextJQ.pageId).find(".close-button").on("click", function () {
                    jQuery(this).closest('.control-page').hide();
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html('');
                });
            };
            TextJQ.AttachPreviewButton = function () {
                jQuery(TextJQ.pageId).find(".preview-text-insert").on("click", function () {
                    var text = new TextJQ();
                    text.PreviewInsertText("notify help");
                });
            };
            TextJQ.AttachClearText = function () {
                jQuery(TextJQ.pageId).find(TextJQ.BTN_CLEAR_TEXT).click(function (e, s) {
                    jQuery(TextJQ.JTEEditorClass).html('');
                    var text = new TextJQ();
                    text.PreviewInsertText('notify help');
                });
            };
            TextJQ.AttachInsertText = function () {
                jQuery(TextJQ.pageId).find(TextJQ.BTN_INSERT_TEXT).click(function (e, s) {
                    var textObj = new TextJQ();
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.SetErrorClassName("page-insert-text");
                    var ctx = new impPageCtx.Page.ContextJQ();
                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                    var tbContainer = document.createElement("div");
                    var tbContent = document.createElement("div");
                    var tbContentWrapper = document.createElement("div");
                    jQuery(tbContentWrapper).addClass("jq-text-block-content key");
                    jQuery(tbContent).css("font-family", jQuery(impText.Font.FontJQ.ddnId).find("option:selected").val());
                    jQuery(tbContentWrapper).append(jQuery(TextJQ.pageId).find(TextJQ.JTEEditorClass).html());
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
                    if (selectedRowOrColumn.hasClass("column") == true || selectedRowOrColumn.hasClass("empty-container") || window.smartObj != null) {
                        var emptyc = document.createElement("span");
                        jQuery(emptyc).addClass("empty-container-text key image-text-other design-css design-empty-text-css");
                        jQuery(emptyc).css("font-size", "14px");
                        //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined);
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container");
                        plusContainer.addClass("jq-plus-container-text");
                        plusContainer.removeClass("jq-plus-container-not-used");
                        plusContainer.find(".jq-plus-content").append(tbContainer);
                        jQuery(emptyc).append(plusContainer);
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
                        errorHandler.ActionSuccess("");
                        jQuery(this).closest(".control-page").hide();
                        jQuery(tbContainer).find(".jq-text-block-content").jqte({});
                        jQuery(tbContainer).find(".jqte_editor").addClass("padding-5");
                        // jQuery(tbContent).find(".jqte").addClass("key normal-element design-css design-jqte_editor text-element");
                        jQuery(tbContainer).find(".debug-css").remove();
                        jQuery(TextJQ.pageId).find(TextJQ.JTEEditorClass).html("");
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    else {
                        errorHandler.ActionFail("You can only insert in a column or a empty container [].");
                    }
                });
            };
            TextJQ.prototype.PreviewInsertText = function (notifyHelp) {
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
            };
            TextJQ.ProcessSelectNotify = function () {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {
                    errorHandler.ActionHelp("Help : You cannot [Text] insert here.");
                }
                else {
                    errorHandler.ActionHelp("Help : You can insert [Text] here ", "altercolor");
                }
            };
            TextJQ.pageId = "#control-insert-text";
            TextJQ.insertTextId = "";
            TextJQ.insertTextPreviewId = ".insert-text-out-put";
            TextJQ.insertTextJTE = ".insert-text-jte";
            TextJQ.CSSCLASS = 'jq-text-block design-text-block normal-element';
            TextJQ.CONTAINER_CSS_CLASS = "jq-text-block-container design-text-block normal-element jq-container";
            TextJQ.JTEEditorClass = ".jqte_editor";
            return TextJQ;
        })(impPageControlNames.PageControlNamesJQ.Page.Text.Controls);
        Text.TextJQ = TextJQ;
    })(Text = exports.Text || (exports.Text = {}));
});
//# sourceMappingURL=TextJQ.js.map