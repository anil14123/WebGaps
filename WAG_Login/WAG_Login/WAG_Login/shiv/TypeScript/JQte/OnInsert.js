define(["require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../Controls/ControlCommonJQ", "../jqte/MyJQte", "../PageElements/ElementJQ"], function (require, exports, impError, impWatch, impUndoManager, impCommonCode, impJQte, impElements) {
    "use strict";
    var changed = false;
    var OnInsert;
    (function (OnInsert) {
        var Code = (function () {
            function Code() {
            }
            Code.prototype.Init = function () {
                jQuery("page .jq-add-column").unbind("click");
                jQuery("page .jq-add-column").on("click", function () {
                    var columnsCount = jQuery(this).closest(".row").children(".column").length;
                    if (columnsCount >= 4) {
                        var error = new impError.ErrorHandle.ErrorJQ();
                        error.ActionHelp("Cannot add more than 4 columns");
                        return;
                    }
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
                    jQuery(this).closest(".row").children(".column").each(function () {
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
                    column.css("min-height", "100px");
                    column.addClass("column-padding");
                    jQuery(this).closest(".row").append(column);
                    jQuery("#control-common-execute").click();
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                });
                jQuery("page a").not(".jq-logout").unbind("click");
                jQuery("page a").not(".jq-logout").click(function () {
                    impCommonCode.ControlCommon.Code.AnchorClicked = true;
                });
                jQuery("page .jqte-editor").unbind("click");
                jQuery("page .jqte-editor").on("click", function () {
                    jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                    jQuery(this).addClass("current-editor-scope");
                });
                jQuery("page .column").unbind("click");
                jQuery("page .column").on("click", function () {
                    if (jQuery("#jqte-edit-stop").css("display") == "none") {
                        jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                        jQuery(this).addClass("current-editor-scope");
                    }
                });
                jQuery("page .jqte-editor").unbind("keydown");
                jQuery("page .jqte-editor").on("keydown", function () {
                    Code.BackPassed = true;
                });
                jQuery("page .jqte-editor").unbind("keyup");
                jQuery("page .jqte-editor").on("keyup", function () {
                    changed = true;
                });
                jQuery("page .jqte-editor").unbind("focusout");
                jQuery("page .jqte-editor").on("focusout", function () {
                    if (changed == true) {
                        changed = false;
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                });
                //jQuery(".empty-container-text").unbind("click");
                //jQuery(".empty-container-text").on("click",
                //    function () {
                //        //jQuery(".current-editor-scope").removeClass("current-editor-scope");
                //        //jQuery(this).find(".jq-text-block-content").addClass("current-editor-scope");
                //    });
                jQuery(".empty-container-image").unbind("dblclick");
                jQuery(".empty-container-image").on("dblclick", function () {
                    // $(this).draggable({ disabled: true });
                });
                jQuery(".empty-container-text").unbind("dblclick");
                jQuery(".empty-container-text").on("dblclick", function () {
                    //Resetting code
                    $(".empty-container-text").draggable({ disabled: false });
                    jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                    $("page .jq-text-block-content").removeAttr("contentEditable");
                    //////////////////
                    jQuery(".current-editor-scope").removeClass("current-editor-scope");
                    jQuery(this).find(".jq-text-block-content").addClass("current-editor-scope");
                    //var topRowPx = "180px";
                    //var topNotifyPx = "105px";
                    //jQuery("rootx").css("top", topRowPx);
                    //jQuery(".designer-top-row").css("height", topRowPx);
                    //jQuery("#notify").css("top", topNotifyPx);
                    jQuery(".editor").show();
                    $(this).draggable({ disabled: true });
                    jQuery(".current-editor-scope").focus();
                    jQuery(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text");
                    jQuery(".current-editor-scope").attr("contentEditable", "true");
                });
                jQuery("page .jqte-editor").unbind("mouseup");
                jQuery("page .jqte-editor").on("mouseup", function (e) {
                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });
                jQuery("page .column").unbind("mouseup");
                jQuery("page .column").on("mouseup", function (e) {
                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });
                jQuery(".jq-site-link").unbind("dblclick");
                jQuery(".jq-site-link").on("dblclick", function () {
                    //var topRowPx = "180px";
                    //var topNotifyPx = "105px";
                    //jQuery("rootx").css("top", topRowPx);
                    //jQuery(".designer-top-row").css("height", topRowPx);
                    //jQuery("#notify").css("top", topNotifyPx);
                    jQuery(".editor").show();
                    //dbl click text editor
                    //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    //errorHandler.ActionHelp("Press [Esc] once to stop editing");
                    jQuery(".current-editor-scope").focus();
                    jQuery(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text");
                });
                jQuery("page").unbind("click");
                jQuery("page").on("click", function (e) {
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    /////// context menu hide //////
                    jQuery("#contextMenu").hide(500); // To hide the context menu
                    jQuery("#smInsertNextPrev").hide(500);
                    /////////////////
                    if (impCommonCode.ControlCommon.Code.AnchorClicked == true) {
                        impCommonCode.ControlCommon.Code.AnchorClicked = false;
                        if (e.cancelBubble != null)
                            e.cancelBubble = true;
                        if (e.stopPropagation)
                            e.stopPropagation(); //e.stopPropagation works in Firefox.
                        if (e.preventDefault)
                            e.preventDefault();
                        if (e.returnValue != null)
                            e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                        return false;
                    }
                });
            };
            Code.BackPassed = false;
            Code.BackPassedEdit = false;
            return Code;
        }());
        OnInsert.Code = Code;
    })(OnInsert = exports.OnInsert || (exports.OnInsert = {}));
});
//# sourceMappingURL=OnInsert.js.map