/// <reference path="../../../library/jquery.d.ts" />


/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: impCommonSmart.Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

// ................PageElementBaseJQ class .......

import impCss = require("../_Classes/CssClass");
import impElements = require("../PageElements/ElementJQ");
import impError = require("../Error/ErrorJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUrl = require("../_Classes/UrlJQ");
import impAuth = require("../_Classes/Auth");
import impConstants = require("../Constants/ConstantsJQ");
import impCommonCode = require("../Controls/ControlCommonJQ");
import impCommonSmart = require("../Common/CommonEvents");
import impUndoManager = require("../UndoManager/UndoManager");
import impmal = require("../MalFormed/MalFormedJQ");

var uniqureId = 5;

export module Page {

    var debug: boolean;
    var globalColumnId: number;
    var globalRowId: number;
    globalColumnId = 0;
    globalRowId = 0;
    debug = true;


    export class PageElementBaseJQ {

        scopeId: string;
        typeName: string;
        rootWrapper: string;
        cssClassName: string;
        cssAdditionalStylingClassName: string;
        cssBackClassName: string;
        templatePath: string;
        templateVersion: number;
        templateName: string;
        qualifiedTemplatePath: string;
   

        // constructor.....
        constructor(page, typeName: string, paramRootWrapper: string, extra) {

            this.scopeId = 'body';
            this.typeName = typeName;
            this.rootWrapper = paramRootWrapper;
            this.cssClassName = "jq-" + this.typeName;
            this.cssBackClassName = "jq-back-" + this.typeName;
            this.cssAdditionalStylingClassName = "jq-additional-" + this.typeName;
            this.templatePath = this.typeName;
            this.templateName = this.typeName + ".html";
            this.qualifiedTemplatePath = this.templatePath + "/" + this.templateName;
        }

        // generate page scope id
        GenerateColumnScopeId() {
            return "Column_" + ++globalColumnId;
        }

        GenerateRowScopeId() {
            return "Row_" + ++globalRowId;
        }
    
        // Log Method....
        Log(msg: string) {
            new impError.ErrorHandle.ErrorJQ().LogMessage(this.typeName + "JQ" + ' : ' + msg);
        }

        //GetClassName....
        GetClassName() {
            return this.cssClassName;
        }

        //GetDotClassName...
        GetDotClassName() {
            return '.' + this.GetClassName();
        }

        //GetScope....
        GetScope() {
            if (this.scopeId == undefined || this.scopeId == '') {

                this.scopeId = 'body';

                return jQuery(this.scopeId);
            }

            return jQuery(this.scopeId);
        }

        // Set Scope....
        SetScope(scopeid: string) {
            this.scopeId = scopeid;

            return this;
        }

        // Get....
        Get() {
            return jQuery(this.GetScope()).find(this.GetDotClassName());
        }

        // Remove ...
        Remove() {
            jQuery(this.Get()).remove();
        }

        // getting root wrapper....
        GetWrapper() {

            if (this.ProcessKey() != true) {
                return;
            }

            if (this.rootWrapper.toString().toLowerCase() == 'body') {
                return jQuery(this.rootWrapper);
            }
            return jQuery(this.GetScope()).find(this.rootWrapper);

        }

        // create  root element...
        Create(className: string) {

            if (this.ProcessKey() != true) {
                return;
            }

            if (className == undefined || className == '') {
                // className = this.cssAdditionalStylingClassName;
            }

            if (this.Get().length == 0) {
                var elements = new impElements.Page.Elements.ElementJQ();
                this.Add(
                    this.GetWrapper(),
                    elements.CreateDiv('', this.GetClassName() + " " + this.cssBackClassName + " " + this.cssAdditionalStylingClassName + " " + ' key design-row row root-elements page-element jqMargin-0 '),
                    undefined, undefined, undefined, undefined, undefined
                    );
            }

            return this;
        }

        // create the root wrapper if it does not exists...
        CreateNotExist() {
            if (this.Get().length == 0) {

                this.Create(undefined);
            }
        }

        // adds a row to the page....
        AddRow(root: JQuery, colClassNames: string, className: string, adjustRow?: impCss.CssClass.AdjustJQ, adjustColumn?: impCss.CssClass.AdjustJQ, beforeAfter?: boolean) {

            if (this.ProcessKey() != true) {
                return;
            }

            var row: JQuery;

            if (this.Get().length == 0) {

                this.Create(undefined);
            }

            if (colClassNames != undefined && colClassNames.length > 0) {

                var cols: String[];

                cols = colClassNames.toString().split(' ');

                var elements = new impElements.Page.Elements.ElementJQ();

                row = elements.CreateDiv('', 'row key jqRootRow design-row');

                var commonMethods = new impCommon.Common.CommonMethodsJQ();

                // debugger;
                for (var i = 0; i < cols.length; i++) {

                    var colClassName = '';
                    var columnSize = '';
                    if (cols[i] != undefined && commonMethods.Trim(cols[i]) != "") {
                        colClassName = cols[i].toString().replace(/,/g, ' ');
                        columnSize = colClassName.toString().replace("col-xs-", "");
                    }
                    else {
                        continue;
                    }

                    var column: JQuery;
                    var elements2 = new impElements.Page.Elements.ElementJQ();

                    var columnCss = colClassName + " " + className + " " + "column key design-column column-number-" + i;


                    ////////////////// only for ContentJQ type
                    var contentClassName = "";
                    var contentCssClass = '';

                    if (this.typeName == "Content" || jQuery(root).hasClass("jq-Content")) {

                        contentCssClass = "";
                        if (i == 0) {
                            contentCssClass = "SideBarLeft";
                        }
                        else
                            if (i == 1) {
                                contentCssClass = "MiddleContent";
                            }
                            else
                                if (i == 2) {
                                    contentCssClass = "SideBarRight";
                                }

                        contentClassName = "jq-" + contentCssClass + " jq-back-" + contentCssClass + " jq-additional-" + contentCssClass;
                    }
                    //////////////////////////////////

                    //contentClassName only for content type
                    column = elements2.CreateDiv('', columnCss + " " + contentClassName);

                    ///////////////column scope id for debugging and designer //////
                    var columnScopeId = this.GenerateColumnScopeId();

                    if (debug == true && column != undefined) {
                        column.append("<span class='debug-column-css debug-css' scopeId='" + columnScopeId + "'> " + columnScopeId + " </span> ");
                    }

                    column.attr("scopeId", columnScopeId);
                    column.attr("column-number", i);
                    column.attr("xs-column-size", columnSize);
                    column.css("min-height", "100px");
                    column.addClass("column-padding");
                   
                    /////////////////////////////////////////////////////////////////

                    if (contentClassName != "") {
                        column.attr("key-css", ".jq-" + contentClassName);
                    }
                    else {

                        if (root != undefined) {
                            column.attr("key-css", jQuery(root).attr("key-css") + " " + "column");
                        }
                        else {
                            column.attr("key-css", this.GetDotClassName() + " " + "column");
                        }
                    }

                    //column.addClass("hidden-xs").addClass("hidden-sm");

                    if (root != undefined) {
                        row.attr("key-css", jQuery(root).attr("key-css") + " " + "row");
                    }
                    else {
                        row.attr("key-css", this.GetDotClassName() + " " + "row");
                    }

                    jQuery(row).append(column);
                  

                    if (adjustColumn != undefined) {
                        this.AdjustElement(column, adjustColumn);
                    }

                }
            }

            /////////////// row scope id for debugging and designer //////
            var rowScopeId = this.GenerateRowScopeId();

            // debug row css
            //if (debug == true) {
            //    row.append(" <span class='debug-row-css debug-css' scopeId='" + rowScopeId + "'> " + rowScopeId + " </span> ");
            //}

            row.attr("scopeId", rowScopeId);
            //////////////////////////////////////////////////////////////

            var nextPlus = "<div class='jq-row-plus-container jq-next-row-container'> <span class='jq-row-plus jq-next-row'> + </span> </div>";
            var prevPlus = "<div class='jq-row-plus-container jq-prev-row-container'> <span class='jq-row-plus jq-prev-row'> + </span> </div>";

            if (row != undefined) {
                row.prepend(prevPlus);
                row.append(nextPlus);
            }

            if (adjustRow != undefined) {
                this.AdjustElement(row, adjustRow);
            }

            if (root == undefined) {
                root = this.Get();
            }

            jQuery(row).prepend("<span title='Row' class=\"design-page-row \"> <span class='design-square-row'>Row</span> <span class='columns-add-text'>Columns <button class='jq-add-column btn btn-xs btn-danger'>+</button></span> </span>");

            this.Add(root, row, undefined, undefined, undefined, undefined, beforeAfter);

            if (root.hasClass("empty-container-image") || root.hasClass("empty-container-text")) {
                row.wrap("<div class='table-row'></div>");
                row.before("<div class='table-cell'></div>");
                row.addClass("table-cell");

                return row.parent();
            }

            return row;

        }

        // Adjust element

        AdjustElement(element, adjust: impCss.CssClass.AdjustJQ) {

            if (this.ProcessKey() != true) {
                return;
            }

            if (element != undefined && adjust != undefined) {

                if (adjust.height != undefined) {
                    jQuery(element).css("min-height", adjust.height + 'px');
                }

                if (adjust.width != undefined) {
                    jQuery(element).css("width", adjust.width + "px");
                }

                if (adjust.padding != undefined) {

                    var padding = adjust.padding;

                    if (padding.all != undefined) {
                        jQuery(element).css("padding", padding.all + "px");
                    }
                    else {
                        if (padding.left != undefined) {
                            jQuery(element).css("padding-left", padding.left + "px");
                        }

                        if (padding.top != undefined) {
                            jQuery(element).css("padding-top", padding.top + "px");
                        }

                        if (padding.right != undefined) {
                            jQuery(element).css("padding-right", padding.right + "px");
                        }

                        if (padding.bottom != undefined) {
                            jQuery(element).css("padding-bottom", padding.bottom + "px");
                        }
                    }
                }

                if (adjust.margin != undefined) {

                    var margin = adjust.margin;

                    if (margin.all != undefined) {
                        jQuery(element).css("margin", margin.all + "px");
                    }
                    else {
                        if (margin.left != undefined) {
                            jQuery(element).css("margin-left", margin.left + "px");
                        }

                        if (margin.top != undefined) {
                            jQuery(element).css("margin-top", margin.top + "px");
                        }

                        if (margin.right != undefined) {
                            jQuery(element).css("margin-right", margin.right + "px");
                        }

                        if (margin.bottom != undefined) {
                            jQuery(element).css("margin-bottom", margin.bottom + "px");
                        }
                    }
                }

            }

        }

        // Adding element to page.....
        Add(root: JQuery, element: JQuery, className: string, rowcolumn: string, front: boolean, useSmartObj: boolean, beforeAfter: boolean) {

            if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                return;
            }

            if (this.ProcessKey() != true) {
                return;
            }

            if (element != undefined) {
                element.find(".debug-css").html("");
            }

            var row = 0;
            var column = 0;

            if (root == undefined) {
                root = this.Get();
            }

            if (rowcolumn != undefined) {

                if (rowcolumn != '') {

                    var rowcolumNumber = rowcolumn.toString().split(' ');
                    try {
                        var tempForTry = Number(rowcolumNumber[0]);
                        tempForTry = Number(rowcolumNumber[1]);
                    }
                    catch (ex) {
                        this.Log("Add(): Row or Column is not a number : provided values (" + rowcolumn + ")");
                        return;
                    }


                    if (rowcolumNumber != undefined && rowcolumNumber.length > 1) {
                        row = Number(rowcolumNumber[0]) + 1;

                        column = Number(rowcolumNumber[1]);
                    }
                }

                if (jQuery(root).find('.jqRootRow:nth-child(' + row + ')').children().eq(column).length > 0) {
                    root = jQuery(root).find('.jqRootRow:nth-child(' + row + ')').children().eq(column);
                }
                else {
                    this.Log(' Add() : [' + jQuery(root).attr('class') + '] do not have row column ' + '[' + row + ',' + column + ']' + ' to add element');
                    return;
                }
            }
            else {
                this.Log('Warning : Please Add Row to  [' + jQuery(root).attr('class') + '] ' + '');
            }

            if (element != undefined) {

                if (typeof (element) != "object") {
                    var tempElement = document.createElement('span');
                    jQuery(tempElement).append(element);
                    element = jQuery(tempElement);
                }

                jQuery(element).addClass(className);
            }

            var elementCss = element.attr("class");

            //if (debug == true && element != undefined) {
            //    element.append("class='debugCss'>" + elementCss + "");
            //}

            if (useSmartObj == true && window.smartObj != null && window.smartObj.currentObj != null && window.smartObj.command != "") {

                if (window.smartObj.command == "n" || window.smartObj.command == "") {
                    $(window.smartObj.currentObj).after(element);

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }
                else {
                    $(window.smartObj.currentObj).before(element);

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

            }
            else {
                if (front == true) {

                    if (jQuery("div[src='xa.xml']").length > 2 && impAuth.Auth.AuthJQ.IsAuth == true) {
                        $(root).prepend(element);
                    }
                }
                else
                   {
                        if (jQuery("div[src='xa.xml']").length > 2 && impAuth.Auth.AuthJQ.IsAuth == true) {

                            if (jQuery(root).attr("unique-id") == undefined) {
                                uniqureId++;
                                jQuery(root).attr("unique-id", uniqureId);
                            }

                            if (beforeAfter == undefined) // before
                            {
                                $(root).append(element);
                            }
                            else
                                if (beforeAfter == true) {
                                    $(root).before(element);
                                }
                                else {
                                    $(root).after(element);
                                }


                            if (!jQuery(element).hasClass("jq-Any")) {

                                var undomanager = new impUndoManager.Manager.UndoManager();

                                //var rootTemp: JQuery;
                                //rootTemp = jQuery(root);
                                //undomanager.BeforeOperation(rootTemp);

                                undomanager.BeforeOperation();

                            }
                            else {
                                var undomanager = new impUndoManager.Manager.UndoManager();

                                undomanager.BeforeOperation();
                            }


                        }
                    }
            }
        }

        AddContent(content, className, rowcolumn, front) {
            this.CreateNotExist();

            if (content != undefined && content != '') {
                this.Add(this.Get(), content, className, rowcolumn, front, undefined, undefined);
            }
        }

        // Adding template to page....
        AddTemplate(root, template, className, rowcolumn) {

            if (root == undefined) {
                new impError.ErrorHandle.ErrorJQ().LogMessage(' AddTemlate() > root is undefined')
                return;
            }

            if (template == undefined || template == '') {
                template = this.qualifiedTemplatePath;
            }

            if (template.indexOf('.html') > 0) {

                //for static pages

                this.Add(jQuery(root), jQuery('<div class="' + className + '" ng-include="\'/static/' + template + '\'"></div>'), className, rowcolumn, false, undefined, undefined);
            }
            else {

                this.Add(jQuery(root), jQuery('<div class="' + className + '" ng-include="\'' + template + '\'"></div>'), className, rowcolumn, false, undefined, undefined);

                /* ng-include also working..
                // added staticInclude Directive in Modules.js & handled newScope Object
                // page.Add(jQuery(root), '<div class="' + className + '" static-include="' + template + '"></div>', 0);
                */
            }

        }


        // removes column from page....
        RemoveColumn(rowNumber: number, columnNumber: number) {

            var row = jQuery(this.Get()).find('.jqRootRow:nth-child(' + rowNumber + ')');

            if (jQuery(row).length > 0) {

                jQuery(jQuery(row).children().eq(columnNumber)).remove();
            }
            else {
                this.Log('[' + rowNumber + ',' + columnNumber + ']' + ' column not found');
            }

        }


        // get the row based on row number
        GetRow(rowNumber: number) {

            var row = jQuery(this.Get()).find('.jqRootRow:nth-child(' + rowNumber + ')');

            if (jQuery(row).length > 0) {

                return jQuery(row);
            }
            else {
                this.Log('[' + rowNumber + ']' + ' row not found');
            }

        }

        // gets the column from the row number and column number
        GetColumn(rowNumber: number, columnNumber: number) {

            rowNumber = rowNumber + 1;
            var row = jQuery(this.Get()).find('.jqRootRow:nth-child(' + rowNumber + ')');

            if (jQuery(row).length > 0) {

                return jQuery(row).children().eq(columnNumber);
            }
            else {
                this.Log('[' + rowNumber + ',' + columnNumber + ']' + ' column not found');
            }

        }

        //GetInnerColumnLevel2(level: number, rowNumber: number, columnNumber: number, searchingColumn: number) {
        //    jQuery(pageBase.GetColumn(0, 1)).children().children().eq(0)
        //}

        /*********************** key processing *********************/

        ProcessKey() {

            try {
                var str = this.GetKey();

                if (this.IsInIframe() == true) {
                    return false;
                }

                if (impConstants.Constants.ConstantsJQ.SecureStrLength != 7) {
                    return false;
                }
                else {

                    var j = 0;
                    for (var i = 6; i >= 0; i--) {
                        if (this.NextChar(str[j]) != impConstants.Constants.ConstantsJQ.Str[i]) {
                            return false;
                        }
                        j++;
                    }
                    return true;
                }

            }
            catch (ex) {

                return false;
            }
        }

        GetKey() {

            return new impUrl.Common.UrlJQ().GetDocumentLocation()
        }

        IsInIframe() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }

        NextChar(c) {
            return String.fromCharCode(c.charCodeAt(0) + 1);
        }

        /*********************** key processing *********************/

    }

}