/// <reference path="../../../library/jquery.d.ts" />
define(["require", "exports", "../PageElements/ElementJQ", "../Error/ErrorJQ", "../Common/CommonMethodsJQ", "../_Classes/UrlJQ", "../_Classes/Auth", "../Constants/ConstantsJQ", "../UndoManager/UndoManager", "../MalFormed/MalFormedJQ"], function (require, exports, impElements, impError, impCommon, impUrl, impAuth, impConstants, impUndoManager, impmal) {
    "use strict";
    var uniqureId = 5;
    var Page;
    (function (Page) {
        var debug;
        var globalColumnId;
        var globalRowId;
        globalColumnId = 0;
        globalRowId = 0;
        debug = true;
        var PageElementBaseJQ = (function () {
            // constructor.....
            function PageElementBaseJQ(page, typeName, paramRootWrapper, extra) {
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
            PageElementBaseJQ.prototype.GenerateColumnScopeId = function () {
                return "Column_" + ++globalColumnId;
            };
            PageElementBaseJQ.prototype.GenerateRowScopeId = function () {
                return "Row_" + ++globalRowId;
            };
            // Log Method....
            PageElementBaseJQ.prototype.Log = function (msg) {
                new impError.ErrorHandle.ErrorJQ().LogMessage(this.typeName + "JQ" + ' : ' + msg);
            };
            //GetClassName....
            PageElementBaseJQ.prototype.GetClassName = function () {
                return this.cssClassName;
            };
            //GetDotClassName...
            PageElementBaseJQ.prototype.GetDotClassName = function () {
                return '.' + this.GetClassName();
            };
            //GetScope....
            PageElementBaseJQ.prototype.GetScope = function () {
                if (this.scopeId == undefined || this.scopeId == '') {
                    this.scopeId = 'body';
                    return jQuery(this.scopeId);
                }
                return jQuery(this.scopeId);
            };
            // Set Scope....
            PageElementBaseJQ.prototype.SetScope = function (scopeid) {
                this.scopeId = scopeid;
                return this;
            };
            // Get....
            PageElementBaseJQ.prototype.Get = function () {
                return jQuery(this.GetScope()).find(this.GetDotClassName());
            };
            // Remove ...
            PageElementBaseJQ.prototype.Remove = function () {
                jQuery(this.Get()).remove();
            };
            // getting root wrapper....
            PageElementBaseJQ.prototype.GetWrapper = function () {
                if (this.ProcessKey() != true) {
                    return;
                }
                if (this.rootWrapper.toString().toLowerCase() == 'body') {
                    return jQuery(this.rootWrapper);
                }
                return jQuery(this.GetScope()).find(this.rootWrapper);
            };
            // create  root element...
            PageElementBaseJQ.prototype.Create = function (className) {
                if (this.ProcessKey() != true) {
                    return;
                }
                if (className == undefined || className == '') {
                }
                if (this.Get().length == 0) {
                    var elements = new impElements.Page.Elements.ElementJQ();
                    this.Add(this.GetWrapper(), elements.CreateDiv('', this.GetClassName() + " " + this.cssBackClassName + " " + this.cssAdditionalStylingClassName + " " + ' key design-row row root-elements page-element jqMargin-0 '), undefined, undefined, undefined, undefined, undefined);
                }
                return this;
            };
            // create the root wrapper if it does not exists...
            PageElementBaseJQ.prototype.CreateNotExist = function () {
                if (this.Get().length == 0) {
                    this.Create(undefined);
                }
            };
            // adds a row to the page....
            PageElementBaseJQ.prototype.AddRow = function (root, colClassNames, className, adjustRow, adjustColumn, beforeAfter) {
                if (this.ProcessKey() != true) {
                    return;
                }
                var row;
                if (this.Get().length == 0) {
                    this.Create(undefined);
                }
                if (colClassNames != undefined && colClassNames.length > 0) {
                    var cols;
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
                        var column;
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
                            else if (i == 1) {
                                contentCssClass = "MiddleContent";
                            }
                            else if (i == 2) {
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
                if (adjustRow != undefined) {
                    this.AdjustElement(row, adjustRow);
                }
                if (root == undefined) {
                    root = this.Get();
                }
                jQuery(row).prepend("<span title='Row' class=\"design-page-row \"> <span class='design-square-row'>Row</span> <span class='columns-add-text'>Columns <button class='jq-add-column btn btn-xs btn-danger'>+</button></span> </span>");
                if (row != undefined) {
                    row.prepend(prevPlus);
                    row.append(nextPlus);
                }
                this.Add(root, row, undefined, undefined, undefined, undefined, beforeAfter);
                if (!root.hasClass("key")) {
                    root = root.closest(".key");
                }
                if ((root.hasClass("empty-container-image") || root.hasClass("empty-container-text")) && !row.hasClass("row")) {
                    row.wrap("<div class='table-row'></div>");
                    row.before("<div class='table-cell'></div>");
                    row.addClass("table-cell");
                    return row.parent();
                }
                return row;
            };
            // Adjust element
            PageElementBaseJQ.prototype.AdjustElement = function (element, adjust) {
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
            };
            // Adding element to page.....
            PageElementBaseJQ.prototype.Add = function (root, element, className, rowcolumn, front, useSmartObj, beforeAfter) {
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
                        jQuery(window.smartObj.currentObj).after(element);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    else {
                        jQuery(window.smartObj.currentObj).before(element);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                }
                else {
                    if (front == true) {
                        if (jQuery("div[src='xa.xml']").length > 2 && impAuth.Auth.AuthJQ.IsAuth == true) {
                            jQuery(root).prepend(element);
                        }
                    }
                    else {
                        if (jQuery("div[src='xa.xml']").length > 2 && impAuth.Auth.AuthJQ.IsAuth == true) {
                            if (jQuery(root).attr("unique-id") == undefined) {
                                uniqureId++;
                                jQuery(root).attr("unique-id", uniqureId);
                            }
                            if (beforeAfter == undefined) {
                                jQuery(root).append(element);
                            }
                            else if (beforeAfter == true) {
                                jQuery(root).before(element);
                            }
                            else {
                                jQuery(root).after(element);
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
            };
            PageElementBaseJQ.prototype.AddContent = function (content, className, rowcolumn, front) {
                this.CreateNotExist();
                if (content != undefined && content != '') {
                    this.Add(this.Get(), content, className, rowcolumn, front, undefined, undefined);
                }
            };
            // Adding template to page....
            PageElementBaseJQ.prototype.AddTemplate = function (root, template, className, rowcolumn) {
                if (root == undefined) {
                    new impError.ErrorHandle.ErrorJQ().LogMessage(' AddTemlate() > root is undefined');
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
                }
            };
            // removes column from page....
            PageElementBaseJQ.prototype.RemoveColumn = function (rowNumber, columnNumber) {
                var row = jQuery(this.Get()).find('.jqRootRow:nth-child(' + rowNumber + ')');
                if (jQuery(row).length > 0) {
                    jQuery(jQuery(row).children().eq(columnNumber)).remove();
                }
                else {
                    this.Log('[' + rowNumber + ',' + columnNumber + ']' + ' column not found');
                }
            };
            // get the row based on row number
            PageElementBaseJQ.prototype.GetRow = function (rowNumber) {
                var row = jQuery(this.Get()).find('.jqRootRow:nth-child(' + rowNumber + ')');
                if (jQuery(row).length > 0) {
                    return jQuery(row);
                }
                else {
                    this.Log('[' + rowNumber + ']' + ' row not found');
                }
            };
            // gets the column from the row number and column number
            PageElementBaseJQ.prototype.GetColumn = function (rowNumber, columnNumber) {
                rowNumber = rowNumber + 1;
                var row = jQuery(this.Get()).find('.jqRootRow:nth-child(' + rowNumber + ')');
                if (jQuery(row).length > 0) {
                    return jQuery(row).children().eq(columnNumber);
                }
                else {
                    this.Log('[' + rowNumber + ',' + columnNumber + ']' + ' column not found');
                }
            };
            //GetInnerColumnLevel2(level: number, rowNumber: number, columnNumber: number, searchingColumn: number) {
            //    jQuery(pageBase.GetColumn(0, 1)).children().children().eq(0)
            //}
            /*********************** key processing *********************/
            PageElementBaseJQ.prototype.ProcessKey = function () {
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
            };
            PageElementBaseJQ.prototype.GetKey = function () {
                return new impUrl.Common.UrlJQ().GetDocumentLocation();
            };
            PageElementBaseJQ.prototype.IsInIframe = function () {
                try {
                    return window.self !== window.top;
                }
                catch (e) {
                    return true;
                }
            };
            PageElementBaseJQ.prototype.NextChar = function (c) {
                return String.fromCharCode(c.charCodeAt(0) + 1);
            };
            return PageElementBaseJQ;
        }());
        Page.PageElementBaseJQ = PageElementBaseJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=PageElementBaseJQ.js.map