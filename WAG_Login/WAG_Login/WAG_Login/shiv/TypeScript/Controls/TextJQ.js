var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./FontJQ", "../Error/ErrorJQ", "../ControlNames/PageControlNamesJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../PageElements/ElementJQ", "../Common/OperationJQ", "jquery"], function (require, exports, impText, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impElements, impOperaction, jQuery) {
    "use strict";
    var debug = true;
    var globalTextBlockId = 0;
    var globalTextBoxContainerId = 0;
    var isTextJQReady = false;
    var isTextInit = false;
    var Text;
    (function (Text) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        Text.SmartObj = SmartObj;
        var TextJQ = (function (_super) {
            __extends(TextJQ, _super);
            function TextJQ() {
                _super.call(this);
            }
            TextJQ.prototype.InitInsert = function () {
            };
            // generate scope id
            TextJQ.prototype.GenerateTextBlockScopeId = function () {
                if (jQuery("#all-count").attr("text-block-count") == undefined || jQuery("#all-count").attr("text-block-count") == "undefined" || jQuery("#all-count").attr("text-block-count") == "") {
                    jQuery("#all-count").attr("text-block-count", "0");
                }
                try {
                    globalTextBlockId = parseInt(jQuery("#all-count").attr("text-block-count"));
                    globalTextBlockId++;
                    jQuery("#all-count").attr("text-block-count", globalTextBlockId + "");
                }
                catch (ex) {
                }
                return "Text_Block_" + ++globalTextBlockId;
            };
            TextJQ.prototype.GenerateContainerScopeId = function () {
                //First execute GenerateTextBlockScopeId because it will be incrementing this value.
                return "Text_Block_Container_" + globalTextBlockId;
            };
            TextJQ.prototype.GenerateContainerTextBlockCellScopeId = function () {
                //First execute GenerateTextBlockScopeId because it will be incrementing this value.
                return "Text_Block_Cell_" + globalTextBlockId;
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
                            jQuery(".jq-prev-style-text").on("click", function () {
                            });
                            try {
                                globalTextBlockId = parseInt(jQuery("page").attr("text-block-count"));
                            }
                            catch (ex) {
                            }
                            globalTextBlockId++;
                            jQuery(".jq-left-column, .jq-right-column").on("click", function () {
                                var left = true;
                                if ($(this).hasClass("jq-right-column")) {
                                    left = false;
                                }
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                TextJQ.ChangeStyle(selectedElement, left);
                                jQuery("#refresh-image-text-controls-position").trigger("click");
                                impCommonCode.ControlCommon.Code.DestroyResizable();
                                impCommonCode.ControlCommon.Code.Execute();
                            });
                        }
                    });
                }
            };
            TextJQ.AddColumn = function (selectedElement, left) {
                var templateObj = selectedElement.closest(".style-object");
                var columnsCount = templateObj.children(".column").length;
                if (columnsCount >= 4) {
                    var error = new impError.ErrorHandle.ErrorJQ();
                    error.ActionHelp("Cannot add more than 4 columns");
                    return;
                }
                var columnObj = jQuery("#style-template-column").find(".column").clone();
                var columnSize = "";
                var columnClass = "";
                if (columnsCount == 1) {
                    columnClass = "col-xs-24";
                    columnSize = "24";
                }
                if (columnsCount == 2) {
                    columnClass = "col-xs-16";
                    columnSize = "16";
                }
                if (columnsCount == 3) {
                    columnClass = "col-xs-12";
                    columnSize = "12";
                }
                var lastColumn;
                templateObj.children(".column").each(function () {
                    lastColumn = jQuery(this);
                    var prevSize = jQuery(this).attr("xs-column-size");
                    var cssClass = "col-xs-" + prevSize;
                    if (cssClass == columnClass) {
                        return;
                    }
                    jQuery(this).addClass(columnClass);
                    jQuery(this).attr("xs-column-size", columnSize);
                    jQuery(this).removeClass(cssClass);
                });
                var column;
                var elements2 = new impElements.Page.Elements.ElementJQ();
                var columnCss = columnClass + " " + " from-column-add-click " + "column key design-column column-number-" + (columnsCount + 1);
                column = elements2.CreateDiv('', columnCss);
                column.attr("column-number", columnsCount + 1);
                column.attr("xs-column-size", columnSize);
                if ($(this).hasClass("column")) {
                    if ($(this).height() >= 100) {
                        column.css("min-height", "100px");
                    }
                    else {
                        column.css("min-height", $(this).height() + "px");
                    }
                }
                else {
                    column.css("min-height", "50px");
                }
                column.addClass("column-padding");
                column.addClass("newly-added-column");
                if (!left) {
                    templateObj.children(".column").last().after(column);
                }
                else {
                    templateObj.children(".column").first().before(column);
                }
            };
            TextJQ.ChangeStyle = function (selectedElement, left) {
                var rowTemplate;
                rowTemplate = jQuery("#style-template-left-right").clone();
                var rowTemplateChild = rowTemplate.children().clone().first();
                if (left != true) {
                    if (!selectedElement.hasClass("working-on-column-add-for-object")) {
                        selectedElement.after(rowTemplateChild);
                        selectedElement.appendTo(rowTemplateChild.find(".style-left-object").addClass("design-column"));
                        rowTemplateChild.find(".style-right-object").addClass("newly-added-column newly-add-column-for-row-color design-column");
                    }
                    else {
                        TextJQ.AddColumn(selectedElement, left);
                    }
                }
                else {
                    if (!selectedElement.hasClass("working-on-column-add-for-object")) {
                        selectedElement.after(rowTemplateChild);
                        selectedElement.appendTo(rowTemplateChild.find(".style-right-object").addClass("design-column"));
                        rowTemplateChild.find(".style-left-object").addClass("newly-added-column newly-add-column-for-row-color  design-column");
                    }
                    else {
                        TextJQ.AddColumn(selectedElement, left);
                    }
                }
                selectedElement.addClass("working-on-column-add-for-object");
            };
            //jQuery(document).ready(function () {
            //    if (isTextJQReady == false) {
            //        isTextJQReady = true;
            //        jQuery(".jq-prev-style-text").on("click", function () {
            //        });
            //        jQuery(".jq-next-style-text).on("click", function () {
            //            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
            //            var originalSelected = selectedElement;
            //            var style = selectedElement.attr("style-version");
            //            selectedElement.addClass("style-version-added");
            //            var i = 0;
            //            if (style == "" || style == undefined || style == "undefined") {
            //            }
            //            else {
            //                i = parseInt(style);
            //                i = i + 1;
            //                if (i >= TextJQ.Styles.length) {
            //                    i = 0;
            //                }
            //            }
            //            if (jQuery(".working-on-style").length == 0) {
            //                TextJQ.ChangeStyle(selectedElement, i);
            //            }
            //            else {
            //                if ($(".style-object.working-on-style").length > 0) {
            //                    var styled = selectedElement.closest(".style-object.working-on-style");
            //                    selectedElement.insertBefore(styled);
            //                    styled.remove();
            //                }
            //                TextJQ.ChangeStyle(selectedElement, i);
            //            }
            //            selectedElement.attr("style-version", i);
            //        });
            //    }
            //});
            //public static ChangeStyle(selectedElement, i) {
            //    if (TextJQ.Styles[i].object == "image") {
            //        var rowTemplate
            //        if (TextJQ.Styles[i].position == "bottom" || TextJQ.Styles[i].position == "top") {
            //            rowTemplate = jQuery("#style-template-top-bottom").clone();
            //        }
            //        else {
            //            rowTemplate = jQuery("#style-template-left-right").clone();
            //        }
            //        selectedElement.addClass("original-object");
            //        var rowTemplateChild = rowTemplate.children().clone().first();
            //        switch (TextJQ.Styles[i].position) {
            //            case 'right':
            //                selectedElement.after(rowTemplateChild);
            //                selectedElement.appendTo(rowTemplateChild.find(".style-left-object"));
            //                rowTemplateChild.find(".style-right-object").addClass("newly-added-column newly-add-column-for-row-color");
            //                break;
            //            case 'bottom':
            //                selectedElement.after(rowTemplateChild);
            //                selectedElement.appendTo(rowTemplateChild.find(".style-top-bottom-object"));
            //                rowTemplateChild.find(".style-top-bottom-object").addClass("newly-added-column newly-add-column-for-row-color");
            //                break;
            //            case 'left':
            //                selectedElement.after(rowTemplateChild);
            //                selectedElement.appendTo(rowTemplateChild.find(".style-right-object"));
            //                rowTemplateChild.find(".style-left-object").addClass("newly-added-column newly-add-column-for-row-color");
            //                break;
            //            case 'top':
            //                selectedElement.after(rowTemplateChild);
            //                impInsert.StyleInsert.InsertJQ.InsertImage(rowTemplateChild.find(".style-top-bottom-object"))
            //                rowTemplateChild.find(".style-top-bottom-object").addClass("newly-added-column newly-add-column-for-row-color");
            //                break;
            //        }
            //        selectedElement.closest(".style-object").addClass("working-on-style");
            //    }
            //    else
            //        if (TextJQ.Styles[i].object == "text") {
            //        }
            //}
            TextJQ.AttachClose = function () {
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
            };
            TextJQ.AttachPreviewButton = function () {
                jQuery(TextJQ.pageId).find(".preview-text-insert").on("click", function () {
                    var text = new TextJQ();
                    text.PreviewInsertText("notify help");
                });
            };
            TextJQ.AttachClearText = function () {
                jQuery(TextJQ.pageId).find(TextJQ.BTN_CLEAR_TEXT).on("click", function (e, s) {
                    jQuery(TextJQ.JTEEditorClass).html('');
                    var text = new TextJQ();
                    text.PreviewInsertText('notify help');
                });
            };
            TextJQ.AttachInsertText = function () {
                jQuery(TextJQ.pageId).find(TextJQ.BTN_INSERT_TEXT).on("click", function (e, s) {
                    TextJQ.InsertTextBlock("Sample text to edit");
                });
            };
            TextJQ.InsertTextBlock = function (sampleText) {
                var textObj = new TextJQ();
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.SetErrorClassName("page-insert-text");
                var ctx = new impPageCtx.Page.ContextJQ();
                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                if (selectedRowOrColumn == undefined) {
                    selectedRowOrColumn = jQuery("#nonononelement");
                }
                if (!selectedRowOrColumn.hasClass("column") && (window.smartObj == null || window.smartObj.currentObj == null)) {
                    window.smartObj = new SmartObj();
                    window.smartObj.currentObj = selectedRowOrColumn;
                    window.smartObj.command = "n";
                }
                if (selectedRowOrColumn != undefined) {
                    var clonedTextBlock = jQuery("#empty-container-text-copy").clone();
                    clonedTextBlock.removeClass("hide");
                    clonedTextBlock.attr("id", "");
                    clonedTextBlock.find(".jq-text-block-content").html("");
                    clonedTextBlock.addClass("empty-container-text");
                    clonedTextBlock.find(".jq-text-block-content").attr("tabindex", "1").append(sampleText);
                    if (debug == true) {
                        clonedTextBlock.find(".jq-text-block").prepend("<span class='debug-text-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                    }
                    var tbScopeId = textObj.GenerateTextBlockScopeId();
                    clonedTextBlock.find(".jq-text-block").attr("id", tbScopeId).attr("scopeId", tbScopeId);
                    if (debug == true) {
                        clonedTextBlock.append(" <span class='debug-text-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                    }
                    var tbcScopeId = textObj.GenerateContainerScopeId();
                    clonedTextBlock.find(".jq-text-block-container").attr("id", tbcScopeId).attr("scopeId", tbcScopeId);
                    var tbccellScopeId = textObj.GenerateContainerTextBlockCellScopeId();
                    clonedTextBlock.find(".jq-plus-container-text").attr("id", tbccellScopeId).attr("scopeId", tbccellScopeId);
                    if (selectedRowOrColumn.hasClass("column") == true
                        || (window.smartObj != null && window.smartObj.currentObj != null)) {
                        //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined);
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        if (window.smartObj == null || window.smartObj.command == "") {
                            ctx.Page.Any.Add(selectedRowOrColumn, jQuery(clonedTextBlock), '', undefined, undefined, undefined, undefined);
                        }
                        else {
                            ctx.Page.Any.Add(selectedRowOrColumn, jQuery(clonedTextBlock), '', undefined, undefined, true, undefined);
                        }
                        if (selectedRowOrColumn.hasClass("jq-text-block-container")) {
                            var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");
                            selectedRowOrColumn.find(".debug-text-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();
                            if (tbOrTbcWithScopeId != undefined) {
                                selectedRowOrColumn.append('<span class="debug-text-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + '</span>');
                            }
                        }
                        ///// rearrange debug css completed...
                        jQuery(this).closest(".control-page").hide();
                        jQuery(TextJQ.pageId).find(TextJQ.JTEEditorClass).html("");
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        return jQuery(clonedTextBlock);
                    }
                    else {
                        errorHandler.ActionFail("You can only insert in a column block.");
                    }
                }
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
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {
                    }
                    else {
                    }
                }
            };
            TextJQ.pageId = "#control-insert-text";
            TextJQ.insertTextId = "";
            TextJQ.insertTextPreviewId = ".insert-text-out-put";
            TextJQ.insertTextJTE = ".insert-text-jte";
            TextJQ.CSSCLASS = 'jq-text-block design-text-block normal-element';
            TextJQ.CONTAINER_CSS_CLASS = "jq-text-block-container design-text-block normal-element jq-container";
            TextJQ.JTEEditorClass = ".jqte-editor";
            TextJQ.Styles = [
                {
                    object: "image",
                    position: 'right'
                },
                {
                    object: "image",
                    position: 'bottom'
                },
                {
                    object: "image",
                    position: 'left'
                },
                {
                    object: "image",
                    position: 'top'
                },
                {
                    object: "text",
                    position: 'right'
                },
                {
                    object: "text",
                    position: 'bottom'
                },
                {
                    object: "text",
                    position: 'left'
                },
                {
                    object: "text",
                    position: 'top'
                }
            ];
            return TextJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Text.Controls));
        Text.TextJQ = TextJQ;
    })(Text = exports.Text || (exports.Text = {}));
});
//# sourceMappingURL=TextJQ.js.map