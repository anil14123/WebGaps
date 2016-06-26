
import impPageCtx = require("../Page/Context/ContextJQ");
import impCss = require("../_Classes/CssClass");
import Common = require("../Common/CommonMethodsJQ");
import impConsts = require("../Constants/ConstantsJQ");
import impPageControlNames = require("../ControlNames/PageControlNamesJQ");
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impFontList = require("./FontJQ");
import impText = require("./TextJQ");
import impSmartMenu = require("../SmartMenu/SmartMenuJQ");
import impJqueryUI = require("./JqueryUI");

import impOperaction = require("../Common/OperationJQ");

import * as jQuery from "jquery";

export module Page {


    export class RequiredJQ {

        Prepare(pageId) {

            jQuery(pageId).find(".required-symbol").remove();
            jQuery(pageId).find(".required").after("<span class='required-symbol'>*</span");
        }
    }

    export class AddRowJQ extends impPageControlNames.PageControlNamesJQ.Page.AddRow.Controls {

        public static pageId= "#control-add-row";

        constructor() {

            super();
        }

        public static addedRow: JQuery;

        Init() {

            this.AttachPageAddRowJQ();
            this.AttachFontJQ();
            this.AttachInsertTextJQ();
            this.AttachSmartMenu();
            this.AttachReset();
        }

        AttachReset() {
            jQuery("#btnResetAddRowControls").on("click",function () {
                var ar = new AddRowJQ();
                ar.ResetAddRowsControls();
            });
        }

        AttachSmartMenu() {
            new impSmartMenu.Smart.SmartMenuJQ().Init();
        }

        AttachFontJQ() {
            new impFontList.Font.FontJQ().Init();
        }

        AttachInsertTextJQ() {
            new impText.Text.TextJQ().Init();
        }
        
        AttachPageAddRowJQ() {

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

        }

        //////////////////////////////////////////////////// Page Add row

        public LoadEvent() {

           

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

        }

        public static SetRowHeightControl(val: string) {
            jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).val(val);
            jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(AddRowJQ.ROW_HEIGHT_CONTROL).val() + ' pixels');
        }

        public static SetColumnHeightControl(val: string) {
            jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).val(val);
            jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_VALUE_CONTROL).text(jQuery(AddRowJQ.COLUMN_HEIGHT_CONTROL).val() + ' pixels');

        }


        RowColumnNamesDDN() {
            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).on("change" ,function () {

                //not done [mark]
                var selectedRowOrColumn = jQuery("#rows-columns option:selected").val();

                if (selectedRowOrColumn == ".jq-Content") {
                    AddRowJQ.SetColumnHeightControl("400");
                    AddRowJQ.SetRowHeightControl("400");
                }
            });
        }

        ResetAddRowsControls() {

            var tempControl = new AddRowJQ();
            tempControl.LoadRowsAndColumnsNames();
            tempControl.ResetColumnControl();
            tempControl.ResetRowHeightControl();
            tempControl.ResetColumnHeightControl();
        }

        ResetColumnControl() {
            jQuery(AddRowJQ.CONTROL_COLUMNS).each(function () {

                jQuery(this).attr("data-set", "0");
                jQuery(this).removeClass("highlight-column");
            });
        }

        ResetRowHeightControl() {
            AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
        }

        ResetColumnHeightControl() {
            AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
        }

        LoadRowsAndColumnsNames() {

            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).empty();

            var rows = jQuery(".debug-row-css");
            var columns = jQuery(".debug-column-css");

            var selectOption = "<option value='select'>-- Select --</option>";
            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(selectOption)

            var defaultOption = "<option value='.jq-Header'>Header</option>";
            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption)
            var defaultOption = "<option value='.jq-MenuBar'>MenuBar</option>";
            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption)
            defaultOption = "<option value='.jq-Content'>Body</option";
            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption)
            defaultOption = "<option value='.jq-Footer'>Footer</option";
            jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption)


            if (rows.length > 0) {
                for (var i = 0; i < rows.length; i++) {
                    var rowOption = "<option value='" + jQuery(rows[i]).text() + "'>" + jQuery(rows[i]).text() + "</option>";
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(rowOption)
                }
            }

            if (columns.length > 0) {
                for (var i = 0; i < columns.length; i++) {
                    var columnOption = "<option value='" + jQuery(columns[i]).text() + "'>" + jQuery(columns[i]).text() + "</option>";
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(columnOption)
                }
            }

        }

        public static AddRowImmedietely() {

            jQuery("#control-add-row").find(".default-size").attr("data-set", "0");

            jQuery("#control-add-row").find(".default-size").trigger("click");
        }

        AddRow(callBackLoadRowAndColumnNames) {

            jQuery(".control-columns").on("click" ,function () {
            
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
                    else { //with a space
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

                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;  //  jQuery("#rows-columns option:selected").val();

                if (impWatch.Watch.MouseJQ.nearestElement.length > 0 && selectedRowOrColumn.hasClass("column")) {
                    selectedRowOrColumn = impWatch.Watch.MouseJQ.nearestElement;
                }

                if (selectedRowOrColumn != undefined) {
                    var adjustRow = new impCss.CssClass.AdjustJQ();
                    var adjustColumn = new impCss.CssClass.AdjustJQ();

                    //adjustRow.height = jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).val();
                    adjustColumn.height = jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).val();

                    if (selectedRowOrColumn.hasClass("empty-container")) {

                        adjustColumn.height = adjustRow.height;
                    }

                    if (selectedRowOrColumn.hasClass("empty-drop-element")) {

                        if (selectedRowOrColumn.height() <= 100) {
                            adjustColumn.height = selectedRowOrColumn.first().height();
                        }
                        else {
                            adjustColumn.height = 100;
                        }
                    }

                    var rowOrColumnWithScopeId = selectedRowOrColumn.attr("scopeId");

                    jQuery(".removable-row").remove();
 
                    impOperaction.Operation.AfterOperationJQ.Execute(); 

                    selectedRowOrColumn.children(".debug-column-css").hide();
                    selectedRowOrColumn.css("padding", "0");

                    var beforeAfter = undefined;
                    if (selectedRowOrColumn.hasClass("row")) {
                        beforeAfter = true;
                    }

                    if (selectedRowOrColumn.hasClass("image-text-other")) {
                        beforeAfter = false;
                    }

                    AddRowJQ.addedRow = ctx.Page.Any.AddRow(selectedRowOrColumn, colsClasses, '', adjustRow, adjustColumn, beforeAfter);


                    if (AddRowJQ.addedRow != undefined) {
                        AddRowJQ.addedRow.addClass("removable-row");

                        AddRowJQ.addedRow.children(".column").addClass("columns-pending");
                    }

                    if (AddRowJQ.addedRow != undefined && AddRowJQ.addedRow.length > 0) {
                        AddRowJQ.addedRow.find(".column").addClass("newly-added-column newly-add-column-for-row-color");
                    }


                    // debug-row-ss
                    //selectedRowOrColumn.find(".debug-row-css[scopeId=" + rowOrColumnWithScopeId + "]").remove();
                               
                    //if (rowOrColumnWithScopeId != undefined) {
                    //    selectedRowOrColumn.append('<span class="debug-row-css debug-css" scopeId="' + rowOrColumnWithScopeId + '" > ' + rowOrColumnWithScopeId + '</span>');
                    //}

                    //errorHandler.ActionSuccess();

                    //if (callBackLoadRowAndColumnNames != undefined) {
                    //    callBackLoadRowAndColumnNames();
                    //}

                    if (jQuery(".jq-show-plus").css("display") != "none") {
                        jQuery(".jq-row-plus-container").hide();
                    }

                    jQuery("#control-common-execute").trigger("click");


                }

                return false;
            });


            jQuery(AddRowJQ.pageId).find(AddRowJQ.BTN_ADD_ROW).on("click",function (e, s) {

                jQuery(".removable-row").removeClass("removable-row");
                

                if (callBackLoadRowAndColumnNames != undefined) {
                    callBackLoadRowAndColumnNames();
                }
            });

        }

        ControlColumns() {

            jQuery(AddRowJQ.pageId).find(AddRowJQ.CONTROL_COLUMNS).on("click",function (e, s) {

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
        }

        ControlRowHeight() {

            AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);

            jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).on("change" ,function () {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + ' pixels');
            });
        }

        ControlColumnHeight() {

            AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);

            jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).on("change" ,function () {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + ' pixels');
            });
        }

        public static ProcessSelectNotify() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            jQuery(".removable-row").removeClass("removable-row");
            jQuery(".columns-pending").removeClass("columns-pending");

            var ar = new AddRowJQ();

            ar.ResetColumnControl();

        }


        ///////////////////////////////////////////////////////////////////// Page Add Row
    }
}