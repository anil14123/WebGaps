var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Page/Context/ContextJQ", "../_Classes/CssClass", "../Constants/ConstantsJQ", "../ControlNames/PageControlNamesJQ", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "./FontJQ", "./TextJQ", "../SmartMenu/SmartMenuJQ", "../Common/OperationJQ"], function (require, exports, impPageCtx, impCss, impConsts, impPageControlNames, impError, impWatch, impFontList, impText, impSmartMenu, impOperaction) {
    var Page;
    (function (Page) {
        var RequiredJQ = (function () {
            function RequiredJQ() {
            }
            RequiredJQ.prototype.Prepare = function (pageId) {
                jQuery(pageId).find(".required-symbol").remove();
                jQuery(pageId).find(".required").after("<span class='required-symbol'>*</span");
            };
            return RequiredJQ;
        })();
        Page.RequiredJQ = RequiredJQ;
        var AddRowJQ = (function (_super) {
            __extends(AddRowJQ, _super);
            function AddRowJQ() {
                _super.call(this);
            }
            AddRowJQ.prototype.Init = function () {
                this.AttachPageAddRowJQ();
                this.AttachFontJQ();
                this.AttachInsertTextJQ();
                this.AttachSmartMenu();
                this.AttachReset();
            };
            AddRowJQ.prototype.AttachReset = function () {
                jQuery("#btnResetAddRowControls").click(function () {
                    var ar = new AddRowJQ();
                    ar.ResetAddRowsControls();
                });
            };
            AddRowJQ.prototype.AttachSmartMenu = function () {
                new impSmartMenu.Smart.SmartMenuJQ().Init();
            };
            AddRowJQ.prototype.AttachFontJQ = function () {
                new impFontList.Font.FontJQ().Init();
            };
            AddRowJQ.prototype.AttachInsertTextJQ = function () {
                new impText.Text.TextJQ().Init();
            };
            AddRowJQ.prototype.AttachPageAddRowJQ = function () {
                this.LoadEvent();
                /////// button addRow
                this.AddRow(this.ResetAddRowsControls);
                /////// row column ddn
                this.RowColumnNamesDDN();
                /////// conlumn Control
                this.ControlColumns();
                /////// row height control
                this.ControlRowHeight();
                /////// column height control
                this.ControlColumnHeight();
                new RequiredJQ().Prepare(AddRowJQ.pageId);
            };
            //////////////////////////////////////////////////// Page Add row
            AddRowJQ.prototype.LoadEvent = function () {
                jQuery(AddRowJQ.pageId).on('cust_loaded', function () {
                    // alert("customLoad");
                    if (impWatch.Watch.MouseJQ.selectedElement.hasClass("jq-Content")) {
                        AddRowJQ.SetRowHeightControl("400");
                        AddRowJQ.SetColumnHeightControl("400");
                    }
                    else {
                        AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                        AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                    }
                    // eg:  ...   jQuery(this.pageId).trigger('load');
                });
            };
            AddRowJQ.SetRowHeightControl = function (val) {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).val(val);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(AddRowJQ.ROW_HEIGHT_CONTROL).val() + ' pixels');
            };
            AddRowJQ.SetColumnHeightControl = function (val) {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).val(val);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_VALUE_CONTROL).text(jQuery(AddRowJQ.COLUMN_HEIGHT_CONTROL).val() + ' pixels');
            };
            AddRowJQ.prototype.RowColumnNamesDDN = function () {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).change(function () {
                    //not done [mark]
                    var selectedRowOrColumn = jQuery("#rows-columns option:selected").val();
                    if (selectedRowOrColumn == ".jq-Content") {
                        AddRowJQ.SetColumnHeightControl("400");
                        AddRowJQ.SetRowHeightControl("400");
                    }
                });
            };
            AddRowJQ.prototype.ResetAddRowsControls = function () {
                var tempControl = new AddRowJQ();
                tempControl.LoadRowsAndColumnsNames();
                tempControl.ResetColumnControl();
                tempControl.ResetRowHeightControl();
                tempControl.ResetColumnHeightControl();
            };
            AddRowJQ.prototype.ResetColumnControl = function () {
                jQuery(AddRowJQ.CONTROL_COLUMNS).each(function () {
                    jQuery(this).attr("data-set", "0");
                    jQuery(this).removeClass("highlight-column");
                });
            };
            AddRowJQ.prototype.ResetRowHeightControl = function () {
                AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
            };
            AddRowJQ.prototype.ResetColumnHeightControl = function () {
                AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
            };
            AddRowJQ.prototype.LoadRowsAndColumnsNames = function () {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).empty();
                var rows = jQuery(".debug-row-css");
                var columns = jQuery(".debug-column-css");
                var selectOption = "<option value='select'>-- Select --</option>";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(selectOption);
                var defaultOption = "<option value='.jq-Header'>Header</option>";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                var defaultOption = "<option value='.jq-MenuBar'>MenuBar</option>";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                defaultOption = "<option value='.jq-Content'>Body</option";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                defaultOption = "<option value='.jq-Footer'>Footer</option";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var rowOption = "<option value='" + jQuery(rows[i]).text() + "'>" + jQuery(rows[i]).text() + "</option>";
                        jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(rowOption);
                    }
                }
                if (columns.length > 0) {
                    for (var i = 0; i < columns.length; i++) {
                        var columnOption = "<option value='" + jQuery(columns[i]).text() + "'>" + jQuery(columns[i]).text() + "</option>";
                        jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(columnOption);
                    }
                }
            };
            AddRowJQ.prototype.AddRow = function (callBackLoadRowAndColumnNames) {
                jQuery(".control-columns").click(function () {
                    var columnSet = jQuery(this).attr("data-set");
                    if (columnSet == "1") {
                        jQuery(this).attr("data-set", "0");
                        jQuery(this).removeClass("highlight-column");
                    }
                    else {
                        jQuery(this).attr("data-set", "1");
                        jQuery(this).addClass("highlight-column");
                    }
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.SetErrorClassName("page-add-row");
                    //if (jQuery(AddRowJQ.DDN_ROWS_COLUMNS).length > 0 && jQuery(AddRowJQ.DDN_ROWS_COLUMNS).val() == 'select') {
                    //    errorHandler.AddErrorControl(AddRowJQ.DDN_ROWS_COLUMNS);
                    //    errorHandler.ActionFail("Please select a row.");
                    //    return;
                    //}
                    var cols = jQuery(".control-columns[data-set=1]");
                    var colsClasses = '';
                    var colPrevNumber = 0;
                    var columnNumber = 0;
                    for (var i = 0; i < cols.length; i++) {
                        columnNumber = Number(jQuery(cols[i]).attr("data-number"));
                        if (i > 0) {
                            columnNumber = columnNumber - colPrevNumber;
                        }
                        colPrevNumber = columnNumber + colPrevNumber;
                        if (i == 0) {
                            colsClasses += 'col-xs-' + columnNumber;
                        }
                        else {
                            colsClasses += ' col-xs-' + columnNumber;
                        }
                    }
                    var lastColClassNumber = 48 - colPrevNumber;
                    // if two spaces are give : code is braking because of split with space.
                    if (lastColClassNumber > 0) {
                        colsClasses += ' col-xs-' + lastColClassNumber;
                    }
                    //alert(colsClasses);
                    var ctx = new impPageCtx.Page.ContextJQ();
                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                    if (selectedRowOrColumn != undefined) {
                        var adjustRow = new impCss.CssClass.AdjustJQ();
                        var adjustColumn = new impCss.CssClass.AdjustJQ();
                        //adjustRow.height = jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).val();
                        adjustColumn.height = jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).val();
                        if (selectedRowOrColumn.hasClass("empty-container")) {
                            adjustColumn.height = adjustRow.height;
                        }
                        var rowOrColumnWithScopeId = selectedRowOrColumn.attr("scopeId");
                        jQuery(".removable-row").remove();
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        AddRowJQ.addedRow = ctx.Page.Any.AddRow(selectedRowOrColumn, colsClasses, '', adjustRow, adjustColumn);
                        if (AddRowJQ.addedRow != undefined) {
                            AddRowJQ.addedRow.addClass("removable-row");
                            AddRowJQ.addedRow.children(".column").addClass("columns-pending");
                        }
                        // debug-row-ss
                        //selectedRowOrColumn.find(".debug-row-css[scopeId=" + rowOrColumnWithScopeId + "]").remove();
                        //if (rowOrColumnWithScopeId != undefined) {
                        //    selectedRowOrColumn.append('<span class="debug-row-css debug-css" scopeId="' + rowOrColumnWithScopeId + '" > ' + rowOrColumnWithScopeId + '</span>');
                        //}
                        errorHandler.ActionSuccess();
                        //if (callBackLoadRowAndColumnNames != undefined) {
                        //    callBackLoadRowAndColumnNames();
                        //}
                        if (jQuery(".jq-show-plus").css("display") != "none") {
                            jQuery(".jq-row-plus-container").hide();
                        }
                    }
                });
                jQuery(AddRowJQ.pageId).find(AddRowJQ.BTN_ADD_ROW).click(function (e, s) {
                    jQuery(".removable-row").removeClass("removable-row");
                    if (callBackLoadRowAndColumnNames != undefined) {
                        callBackLoadRowAndColumnNames();
                    }
                });
            };
            AddRowJQ.prototype.ControlColumns = function () {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.CONTROL_COLUMNS).click(function (e, s) {
                    //var columnSet = jQuery(this).attr("data-set");
                    //if (columnSet == "1") {
                    //    jQuery(this).attr("data-set", "0");
                    //    jQuery(this).removeClass("highlight-column");
                    //}
                    //else {
                    //    jQuery(this).attr("data-set", "1");
                    //    jQuery(this).addClass("highlight-column");
                    //}
                });
            };
            AddRowJQ.prototype.ControlRowHeight = function () {
                AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).change(function () {
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + ' pixels');
                });
            };
            AddRowJQ.prototype.ControlColumnHeight = function () {
                AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).change(function () {
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + ' pixels');
                });
            };
            AddRowJQ.ProcessSelectNotify = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                jQuery(".removable-row").removeClass("removable-row");
                jQuery(".columns-pending").removeClass("columns-pending");
                var ar = new AddRowJQ();
                ar.ResetColumnControl();
            };
            AddRowJQ.pageId = "#control-add-row";
            return AddRowJQ;
        })(impPageControlNames.PageControlNamesJQ.Page.AddRow.Controls);
        Page.AddRowJQ = AddRowJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=ControlsJQ.js.map