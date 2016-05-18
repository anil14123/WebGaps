var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//console.debug("line:", /\(file:[\w\d/.-]+:([\d]+)/.exec(new Error().stack)[1]);
define("shiv/typescript/error/errorjq", ["require", "exports"], function (require, exports) {
    "use strict";
    var ErrorHandle;
    (function (ErrorHandle) {
        var ErrorJQ = (function () {
            function ErrorJQ() {
            }
            ErrorJQ.prototype.HandleError = function (handle) {
                if (handle === true) {
                    window.onerror = this.WindowHandleError;
                }
            };
            ErrorJQ.prototype.WindowHandleError = function (err, url, line) {
                alert(err + '\n on page: ' + url + '\n on line: ' + line);
            };
            ErrorJQ.prototype.SetErrorClassName = function (errorClassName) {
                this.errorClassName = errorClassName;
            };
            ErrorJQ.prototype.NotifyHelp = function (helpmsg) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html("");
                jQuery("#notify").append(helpmsg);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.Notify = function (error) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html(error);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.TriggerHideNotify = function () {
                window.clearTimeout(ErrorJQ.interval);
                ErrorJQ.interval = window.setTimeout(this.TimeOutHandler, 10000);
            };
            ErrorJQ.prototype.TimeOutHandler = function () {
                jQuery("#notify").css("display", "none");
                window.clearTimeout(ErrorJQ.interval);
            };
            ErrorJQ.prototype.AddErrorControl = function (element) {
                jQuery(element).addClass("error-" + this.errorClassName);
            };
            ErrorJQ.prototype.ActionFail = function (errorMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "2px solid red");
                // trim method should be added to == ""
                if (errorMessage == undefined || errorMessage == "") {
                    errorMessage = "Action Failed";
                }
                else {
                    errorMessage = "<div class='error-notify-block'>Action Failed </div><br/>" + errorMessage;
                }
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                jQuery(this.GetNotifyElement()).addClass("error-notify-background");
                this.Notify(errorMessage);
            };
            ErrorJQ.prototype.ActionHelp = function (helpMessage, changeColor) {
                if (helpMessage != undefined) {
                    var index = helpMessage.toLowerCase().indexOf("page loaded");
                    if (index != -1) {
                        jQuery(".jq-loading").hide();
                    }
                }
                var helpContainer = jQuery(document.createElement("div"));
                if (changeColor != undefined) {
                    helpContainer.addClass("yellow-green-notify-background");
                }
                else {
                    helpContainer.addClass("yellow-notify-background");
                }
                helpContainer.html("");
                helpContainer.append(helpMessage);
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                this.NotifyHelp(helpContainer);
            };
            ErrorJQ.prototype.ActionSuccess = function (successMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "1px solid green");
                jQuery(".error-" + this.errorClassName).removeClass("error-" + this.errorClassName);
                // trim method should be added to == ""
                if (successMessage == undefined || successMessage == "") {
                    successMessage = "Action Success";
                }
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).addClass("success-notify-background");
                this.Notify(successMessage);
            };
            ErrorJQ.prototype.GetNotifyElement = function () {
                return jQuery("#notify");
            };
            ErrorJQ.prototype.LogMessage = function (message) {
                try {
                }
                catch (e) {
                }
            };
            ErrorJQ.prototype.Try = function (callback) {
                if (typeof (callback) != 'function') {
                    this.LogMessage('method is not a function');
                    return;
                }
                try {
                    callback();
                }
                catch (ex) {
                    alert(ex);
                    this.LogMessage(ex);
                }
            };
            ErrorJQ.notifyId = "#notify";
            return ErrorJQ;
        }());
        ErrorHandle.ErrorJQ = ErrorJQ;
    })(ErrorHandle = exports.ErrorHandle || (exports.ErrorHandle = {}));
});
/// <reference path="nestable.d.ts" />
define("shiv/sitemanager_ts/site/sitejq", ["require", "exports"], function (require, exports) {
    "use strict";
    var Site;
    (function (Site) {
        var SiteJQ = (function () {
            function SiteJQ() {
            }
            SiteJQ.prototype.Init = function () {
            };
            SiteJQ.prototype.CreatePage = function (siteName, pageName) {
                var obj = { siteName: siteName, pageName: pageName };
                var createData = JSON.stringify(obj);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/createPage",
                    data: createData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SiteJQ.OnCreatePageSuccess,
                    error: SiteJQ.OnCreatePageError
                });
            };
            SiteJQ.OnCreatePageSuccess = function (data, status) {
                // alert("success");
                var site = new SiteJQ();
                site.GetPages(jQuery(".input-site-name-primary").val());
                jQuery(".control-page").hide();
                jQuery(".loading").hide();
            };
            SiteJQ.OnCreatePageError = function (request, status, error) {
                // alert(error);
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.CreateSite = function (siteName) {
                var obj = { siteName: siteName };
                var createData = JSON.stringify(obj);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/createSite",
                    data: createData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SiteJQ.OnCreateSiteSuccess,
                    error: SiteJQ.OnCreateSiteError
                });
            };
            SiteJQ.OnCreateSiteSuccess = function (data, status) {
                // alert("success");
                var site = new SiteJQ();
                site.GetSites();
                jQuery(".control-page").hide();
                jQuery(".loading").hide();
            };
            SiteJQ.OnCreateSiteError = function (request, status, error) {
                // alert(error);
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.GetPages = function (siteName, success, error) {
                if (success == undefined) {
                    success = SiteJQ.OnGetPagesSuccess;
                }
                if (error == undefined) {
                    error = SiteJQ.OnGetPagesError;
                }
                var data = { siteName: siteName };
                var pageData = JSON.stringify(data);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/getPages",
                    data: pageData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: success,
                    error: error
                });
            };
            SiteJQ.OnGetPagesSuccess = function (data, status) {
                jQuery(".loading").hide();
                jQuery("#nestable3").html("");
                var result = data.d;
                var list = jQuery(".jq-pages-list.hide").clone();
                var item = jQuery(".jq-page-item.hide").clone();
                var rootlist = list.clone();
                rootlist.removeClass("hide");
                jQuery("#nestable3").append(rootlist);
                for (var i = 0; i < result.length; i++) {
                    var newitem = item.clone();
                    newitem.removeClass("hide");
                    newitem.attr("data-id", result[i].Id);
                    newitem.find(".jq-page-item-name").text(result[i].Name);
                    var a = jQuery(document.createElement("a"));
                    var link = result[i].Link;
                    link = link.replace("?", "&");
                    a.attr("href", "/shiv/designer.aspx?PageName=" + link + "&" + "SiteName=" + jQuery(".input-site-name-primary").val());
                    a.addClass("white-link");
                    a.append("Open");
                    a.css("float", "right");
                    a.addClass("btn btn-primary btn-xs");
                    newitem.find('.jq-page-item-name').append(a);
                    rootlist.append(newitem);
                }
                for (var i = 0; i < result.length; i++) {
                    if (result[i].Extra != "") {
                        if (jQuery(".jq-page-item[data-id='" + result[i].Extra + "']").children("ol").length == 0) {
                            var childrenList = list.clone();
                            childrenList.removeClass("hide");
                            jQuery(".jq-page-item[data-id='" + result[i].Extra + "']").append(childrenList);
                        }
                        jQuery(".jq-page-item[data-id='" + result[i].Extra + "']").children("ol").append(jQuery(".jq-page-item[data-id='" + result[i].Id + "']"));
                    }
                }
                $('#nestable3').nestable();
            };
            SiteJQ.OnGetPagesError = function (request, status, error) {
                // alert(error);
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.GetSites = function () {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/getSites",
                    //data: saveData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SiteJQ.OnGetSitesSuccess,
                    error: SiteJQ.OnGetSitesError
                });
            };
            SiteJQ.OnGetSitesSuccess = function (data, status) {
                jQuery(".loading").hide();
                var result = data.d;
                jQuery(".site-manager-data").html("");
                for (var i = 0; i < result.length; i++) {
                    var sitedata = jQuery(".site-data.hide").clone();
                    sitedata.removeClass("hide");
                    sitedata.find(".site-name").html(result[i].Name);
                    var a = jQuery(document.createElement("a"));
                    a.attr("href", "/shiv/PageManager.aspx?SiteName=" + result[i].Name);
                    a.addClass("white-link");
                    a.append("Open");
                    sitedata.find(".open-site").append(a);
                    jQuery(".site-manager-data").append(sitedata);
                }
            };
            SiteJQ.OnGetSitesError = function (request, status, error) {
                // alert(error);
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.AttachOpenEvent = function () {
            };
            SiteJQ.prototype.AttachCreateEvent = function () {
            };
            SiteJQ.prototype.AttachEditEvent = function () {
            };
            return SiteJQ;
        }());
        Site.SiteJQ = SiteJQ;
    })(Site = exports.Site || (exports.Site = {}));
});
/// <reference path="../../library/jqueryui.d.ts" />
define("shiv/PageManager_TS/MainJQ", ["require", "exports", "shiv/sitemanager_ts/site/sitejq"], function (require, exports, impSite) {
    "use strict";
    var isMainReady = false;
    jQuery(document).ready(function () {
        if (isMainReady == false) {
            isMainReady = true;
            jQuery(".loading").show();
            var site = new impSite.Site.SiteJQ();
            site.GetPages(jQuery(".input-site-name-primary").val());
            jQuery(document).ready(function () {
                jQuery(".create-page").click(function () {
                    jQuery("#control-create-page").show();
                    return false;
                });
                jQuery(".create-page-button").click(function () {
                    var site = new impSite.Site.SiteJQ();
                    site.CreatePage(jQuery(".input-site-name-primary").val(), jQuery(".input-page-name").val());
                    return false;
                });
            });
        }
    });
});
/// <reference path="../../library/jqueryui.d.ts" />
define("shiv/SiteManager_TS/MainJQ", ["require", "exports", "shiv/sitemanager_ts/site/sitejq"], function (require, exports, impSite) {
    "use strict";
    var isMainReady = false;
    jQuery(document).ready(function () {
        if (isMainReady == false) {
            isMainReady = true;
            jQuery(".loading").show();
            var site = new impSite.Site.SiteJQ();
            site.Init();
            site.GetSites();
            jQuery(document).ready(function () {
                jQuery(".create-site").click(function () {
                    jQuery("#control-create-site").show();
                    return false;
                });
                jQuery(".create-site-button").click(function () {
                    var site = new impSite.Site.SiteJQ();
                    site.CreateSite(jQuery(".input-site-name").val());
                    jQuery(".loading").show();
                    return false;
                });
            });
        }
    });
});
//var ctx = new ContextJQ();
//ctx.Page.Header.AddRow(undefined, "col-xs-3 col-xs-9", "");
//ctx.Page.Header.AddRow(ctx.Page.Header.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
//ctx.Page.Header.AddRow(ctx.Page.Header.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
//ctx.Page.MenuBar.AddRow(ctx.Page.MenuBar.GetColumn(0, 0), "col-xs-12", "");
////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////// Back Up code /////////////////////////////////
// var pageBase: PageElementBaseJQ;
// pageBase = new PageElementBaseJQ(null, "Header", "pageX", null);
// // undefined means jq_Header is the root element passed from constructor.
// pageBase.AddRow(undefined, "col-xs-4 col-xs-4 col-xs-4", "");
// pageBase.AddRow(pageBase.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
// pageBase.AddRow(pageBase.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
//// pageBase.AddRow(jQuery(pageBase.GetColumn(0, 1)).find("[scopeId=scopeId_4]"), "col-xs-4 col-xs-4 col-xs-4", "");
////var headerContent = jQuery(document.createElement("div")).text("Ajit");
////pageBase.Add(pageBase.GetColumn(0, 0), headerContent, "", "0 2", false);
//////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    /////////////////////////////// Back Up code /////////////////////////////////
    //var ctx = new ContextJQ();
    //ctx.Page.Header.AddRow(undefined, "col-xs-3 col-xs-9", "");
    //ctx.Page.Header.AddRow(ctx.Page.Header.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    //ctx.Page.Header.AddRow(ctx.Page.Header.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    //ctx.Page.MenuBar.AddRow(ctx.Page.MenuBar.GetColumn(0, 0), "col-xs-12", "");
    ////////////////////////////////////////////////////////////////////////////////
    // /////////////////////////////// Back Up code /////////////////////////////////
    // var pageBase: PageElementBaseJQ;
    // pageBase = new PageElementBaseJQ(null, "Header", "pageX", null);
    // // undefined means jq_Header is the root element passed from constructor.
    // pageBase.AddRow(undefined, "col-xs-4 col-xs-4 col-xs-4", "");
    // pageBase.AddRow(pageBase.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    // pageBase.AddRow(pageBase.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    //// pageBase.AddRow(jQuery(pageBase.GetColumn(0, 1)).find("[scopeId=scopeId_4]"), "col-xs-4 col-xs-4 col-xs-4", "");
    ////var headerContent = jQuery(document.createElement("div")).text("Ajit");
    ////pageBase.Add(pageBase.GetColumn(0, 0), headerContent, "", "0 2", false);
    //////////////////////////////////////////////////////////////////////////////////
});
define("shiv/TypeScript/AllMenus/AllMenuJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Menu;
    (function (Menu) {
        var AllMenuJQ = (function () {
            function AllMenuJQ(menuid) {
                this.menuId = menuid;
            }
            AllMenuJQ.prototype.Init = function () {
                jQuery(".menu").find(".li").mouseenter(function (e) {
                    // adjustment based on window.
                    var left = 147;
                    if (e.pageX > ($(document).width() - 200)) {
                        left = -150;
                    }
                    jQuery(this).parent().find("ul").first().css("left", left + "px");
                    jQuery(this).parent().find("ul").first().css("display", "block");
                });
                jQuery(".menu").find("li").mouseleave(function (e) {
                    jQuery(this).find("ul").first().css("display", "none");
                });
            };
            AllMenuJQ.AttachEvents = function () {
                jQuery(".menu").each(function () {
                    var menuId = jQuery(this).attr("menu-id");
                    var menu = new AllMenuJQ(Number(menuId));
                    menu.Init();
                });
            };
            return AllMenuJQ;
        }());
        Menu.AllMenuJQ = AllMenuJQ;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
define("shiv/TypeScript/Common/CommonMethodsJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Common;
    (function (Common) {
        var CommonMethodsJQ = (function () {
            function CommonMethodsJQ() {
            }
            CommonMethodsJQ.prototype.Trim = function (str) {
                if (str != undefined && typeof (str).toLowerCase() == "string") {
                    return this.TrimRight(this.TrimLeft(str));
                }
            };
            CommonMethodsJQ.prototype.RemoveStyle = function (element, style) {
                if (style != undefined) {
                    style = style.toLowerCase();
                }
                else {
                    return;
                }
                var search = new RegExp(style + '[^;]+;?', 'g');
                jQuery(element).each(function () {
                    $(this).attr('style', function (i, style) {
                        if (style != undefined) {
                            var result = style.replace(search, '');
                            return result;
                        }
                    });
                });
            };
            ;
            CommonMethodsJQ.prototype.RemoveSingleStyle = function (element, style) {
                if (style != undefined) {
                    style = style.toLowerCase();
                }
                else {
                    return;
                }
                var search = new RegExp(style + "\s*:.*?;", 'g');
                jQuery(element).each(function () {
                    $(this).attr('style', function (i, style) {
                        if (style != undefined) {
                            var result = style.replace(search, '');
                            return result;
                        }
                    });
                });
            };
            ;
            //RemoveSingleStyle(element: JQuery, style: string) {
            //    if (style != undefined) {
            //        style = style.toLowerCase();
            //    }
            //    else {
            //        return;
            //    }
            //    var search = new RegExp(style + '[^;]', 'g');
            //    jQuery(element).each(function () {
            //        $(this).attr('style', function (i, style) {
            //            if (style != undefined) {
            //                return style.replace(search, '');
            //            }
            //        })
            //    });
            //};
            CommonMethodsJQ.prototype.TrimLeft = function (str) {
                if (str != undefined && typeof (str).toLowerCase() == "string") {
                    var trimmedIndex = 0;
                    for (var i = 0; i < str.length; i++) {
                        if (str[i] == ' ') {
                            trimmedIndex = i + 1;
                        }
                        if ((i + 1) < str.length) {
                            if (str[i + 1] != ' ') {
                                break;
                            }
                        }
                    }
                    if (trimmedIndex < str.length) {
                        str = str.toString().slice(trimmedIndex); // result
                    }
                }
                return str;
            };
            CommonMethodsJQ.prototype.TrimRight = function (str) {
                if (str != undefined && typeof (str).toLowerCase() == "string") {
                    var trimmedIndex = str.length;
                    for (var i = str.length - 1; i > -1; i--) {
                        if (str[i] == ' ') {
                            trimmedIndex = i;
                        }
                        if ((i - 1) > -1) {
                            if (str[i - 1] != ' ') {
                                break;
                            }
                        }
                    }
                    if (trimmedIndex > -1) {
                        str = str.toString().slice(0, trimmedIndex); // result
                    }
                    return str;
                }
            };
            CommonMethodsJQ.prototype.RemoveSpaces = function (str) {
                if (str != undefined) {
                    if (typeof (str).toLowerCase() == 'string') {
                        str = str.replace(/ /g, "");
                    }
                }
                return str;
            };
            CommonMethodsJQ.prototype.Insert = function (index, sourceString, insertString) {
                if (sourceString != undefined && insertString != undefined) {
                    if (typeof (sourceString).toLowerCase() == 'string' && typeof (insertString).toLowerCase() == 'string') {
                        if (index > 0 && index < sourceString.length) {
                            return sourceString.substring(0, index) + insertString + sourceString.substring(index, sourceString.length);
                        }
                        else {
                            return sourceString;
                        }
                    }
                }
            };
            return CommonMethodsJQ;
        }());
        Common.CommonMethodsJQ = CommonMethodsJQ;
    })(Common = exports.Common || (exports.Common = {}));
});
define("shiv/TypeScript/_Classes/CssClass", ["require", "exports"], function (require, exports) {
    "use strict";
    var CssClass;
    (function (CssClass) {
        var AdjustJQ = (function () {
            function AdjustJQ() {
            }
            return AdjustJQ;
        }());
        CssClass.AdjustJQ = AdjustJQ;
        var AnyAdjustmentJQ = (function () {
            function AnyAdjustmentJQ() {
            }
            return AnyAdjustmentJQ;
        }());
        CssClass.AnyAdjustmentJQ = AnyAdjustmentJQ;
    })(CssClass = exports.CssClass || (exports.CssClass = {}));
});
/// <reference path="../../../library/jquery.d.ts" />
define("shiv/TypeScript/PageElements/ElementJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Page;
    (function (Page) {
        var Elements;
        (function (Elements) {
            var ElementJQ = (function () {
                function ElementJQ() {
                    this.CreateImage = function (src, className) {
                        var additionalStyle = ''; // ScaffoldClassName(className);
                        return jQuery(this.image).attr('class', '').addClass(className).attr('style', additionalStyle).attr('src', src);
                    };
                    this.GetDotClass = function (className) {
                        return '.' + this.classKey + '_' + className + '';
                    };
                    this.div = document.createElement('div');
                    this.span = document.createElement('span');
                    this.p = document.createElement('p');
                    this.a = document.createElement('a');
                    this.style = document.createElement('style');
                    this.image = document.createElement('img');
                    this.classKey = '';
                }
                ElementJQ.prototype.CreateStyle = function (classes) {
                    return jQuery(this.style).html(classes);
                };
                ElementJQ.prototype.CreateDiv = function (content, className) {
                    var additionalStyle = ''; //ScaffoldClassName(className);
                    return jQuery(this.div).html(content).attr('class', '').addClass(className).attr('style', additionalStyle);
                };
                ElementJQ.prototype.GetClass = function (className, dot) {
                    return this.classKey + '_' + className;
                };
                return ElementJQ;
            }());
            Elements.ElementJQ = ElementJQ;
            // needs review for TypeScript
            function ScaffoldClassName(className) {
                if (className != undefined) {
                    var classes = className.split(' ');
                    var additionalStyle = '';
                    var additionalKey = '';
                    var additionalValue = '';
                    var styleCollection = ['height', 'width', 'margintop', 'marginleft', 'marginright', 'marginbottom', 'marginallsides'];
                    if (classes != undefined && classes.length > 0) {
                        var n;
                        var i;
                        for (n = 0; n < styleCollection.length; n++) {
                            for (i = 0; i < classes.length; i++) {
                                var jqHeightIndex = classes[i].toLowerCase().indexOf(styleCollection[n]);
                                if (jqHeightIndex > 0) {
                                    jqHeightIndex = classes[i].indexOf('-');
                                }
                                if (jqHeightIndex > 0) {
                                    jqHeightIndex += 1;
                                    var extractedNumber = classes[i].substring(jqHeightIndex);
                                    if (extractedNumber != undefined && extractedNumber.toString().length > 0 && !isNaN(extractedNumber)) {
                                        if (styleCollection[n] == 'height' || styleCollection[n] == 'width') {
                                            additionalKey = styleCollection[n];
                                        }
                                        else {
                                            if (styleCollection[n] == 'marginleft') {
                                                additionalKey = 'margin-left';
                                            }
                                            else if (styleCollection[n] == 'margintop') {
                                                additionalKey = 'margin-top';
                                            }
                                            else if (styleCollection[n] == 'marginlright') {
                                                additionalKey = 'margin-right';
                                            }
                                            else if (styleCollection[n] == 'marginbottom') {
                                                additionalKey = 'margin-bottom';
                                            }
                                            else if (styleCollection[n] == 'marginallsides') {
                                                additionalKey = 'margin';
                                            }
                                        }
                                        additionalValue = extractedNumber + 'px';
                                        additionalStyle += ' ' + additionalKey + ':' + additionalValue + ';';
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    return additionalStyle;
                }
            }
        })(Elements = Page.Elements || (Page.Elements = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/_Classes/UrlJQ", ["require", "exports", "shiv/TypeScript/Common/CommonMethodsJQ"], function (require, exports, impCommon) {
    "use strict";
    var Common;
    (function (Common) {
        var UrlJQ = (function () {
            function UrlJQ() {
                this.NgRoutePrefix = "/#";
            }
            UrlJQ.prototype.GetDocumentLocation = function () {
                var hn = document.location.hostname;
                if (hn != undefined && hn != "") {
                    hn = hn.toLowerCase();
                    hn = hn.replace("www.", "");
                }
                return hn;
            };
            UrlJQ.prototype.PreparePageHref = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    var urlMethods = new UrlJQ;
                    if (commonMethods.Trim(url) == '#') {
                    }
                    else {
                        url = urlMethods.PrepareForHTTP(url);
                        url = urlMethods.PrepareForLocal(url);
                        url = urlMethods.PrepareForAngularJS(url, this.NgRoutePrefix);
                    }
                }
                if (url == undefined) {
                    url = '/#';
                }
                return url;
            };
            UrlJQ.prototype.PrepareForAngularJS = function (url, ngRoutePrefix) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('http://') != 0 && url.indexOf('https://') != 0 && url.indexOf('//') != 0 && url.indexOf('www.') != 0) {
                        url = ngRoutePrefix + url;
                    }
                }
                return url;
            };
            UrlJQ.prototype.PrepareForLocal = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('/') == 0 || url.indexOf('http://') == 0 || url.indexOf('https://') == 0 || url.indexOf('//') == 0 ||
                        url.indexOf('www.') == 0) {
                    }
                    else {
                        url = '/' + url;
                    }
                }
                return url;
            };
            UrlJQ.prototype.PrepareForHTTP = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('/') == 0 || url.indexOf('http:') == 0 || url.indexOf('https:') == 0 || url.indexOf('//') == 0 ||
                        url.indexOf('www.') == 0) {
                        if (url.indexOf('http:/') == 0 || (url.indexOf('https:/') == 0)) {
                            var protocolLength;
                            if (url.indexOf('http:/') == 0) {
                                protocolLength = 'http:/'.length;
                            }
                            else if (url.indexOf('https:/') == 0) {
                                protocolLength = 'https:/'.length;
                            }
                            url = commonMethods.Insert(protocolLength - 1, url, '/');
                        }
                        else if (url.indexOf('http:') == 0 || (url.indexOf('https:') == 0)) {
                            var protocolLength;
                            if (url.indexOf('http:') == 0) {
                                protocolLength = 'http:'.length;
                            }
                            else if (url.indexOf('https:') == 0) {
                                protocolLength = 'https:'.length;
                            }
                            url = commonMethods.Insert(protocolLength, url, '//');
                        }
                        if (url.indexOf('www.') == 0) {
                            url = '//' + url;
                        }
                        url = this.RemoveExtraHTTPSlashes(url);
                    }
                    else {
                    }
                }
                return url;
            };
            UrlJQ.prototype.RemoveExtraHTTPSlashes = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('/') == 0 || url.indexOf('http://') == 0 || url.indexOf('https://') == 0 || url.indexOf('//') == 0 ||
                        url.indexOf('www.') == 0) {
                        if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0 || url.indexOf('//') == 0) {
                            var http = '';
                            if (url.indexOf('http:') == 0) {
                                http = 'http://';
                                url = url.slice(5);
                            }
                            else if (url.indexOf('https:') == 0) {
                                http = 'https://';
                                url = url.slice(6);
                            }
                            else if (url.indexOf('//') == 0) {
                                http = "//";
                            }
                            var httpIndex = 0;
                            for (var i = 0; i < url.length; i++) {
                                if (url[i] == '/') {
                                    httpIndex++;
                                }
                                else {
                                    break;
                                }
                            }
                            url = url.slice(httpIndex);
                            url = http + url;
                        }
                        else {
                        }
                    }
                }
                return url;
            };
            return UrlJQ;
        }());
        Common.UrlJQ = UrlJQ;
    })(Common = exports.Common || (exports.Common = {}));
});
define("shiv/TypeScript/_Classes/Auth", ["require", "exports", "shiv/typescript/error/errorjq"], function (require, exports, impError) {
    "use strict";
    var Auth;
    (function (Auth) {
        var AuthJQ = (function () {
            function AuthJQ() {
            }
            AuthJQ.prototype.Call = function () {
                jQuery.ajax({
                    type: "POST",
                    url: AuthJQ.AuthUrl,
                    // data: "{'MemberNumber': '" + $("#txt_id").val() + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: AuthJQ.OnGetAuthSuccess,
                    error: AuthJQ.OnGetAuthError
                });
            };
            AuthJQ.GetCookie = function (cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ')
                        c = c.substring(1);
                    if (c.indexOf(name) == 0)
                        return c.substring(name.length, c.length);
                }
                return "";
            };
            AuthJQ.OnGetAuthSuccess = function (data, status) {
                AuthJQ.HideLoading();
                var resultAuth;
                resultAuth = data.d;
                if (resultAuth == AuthJQ.GetCookie("jQuery")) {
                    var element = jQuery(document.createElement("div"));
                    element.attr("src", "xa.xml");
                    jQuery("body").find("div").first().append(element);
                    jQuery("body").find("div").first().append(element.clone());
                    jQuery("body").find("div").first().append(element.clone());
                    AuthJQ.IsAuth = true;
                }
                else {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionFail("Some Problem !. <br>Try refreshing.");
                    AuthJQ.HideLoading();
                }
            };
            AuthJQ.OnGetAuthError = function (request, status, error) {
                AuthJQ.HideLoading();
                var element = jQuery(document.createElement("div"));
                element.attr("src", "xa.xml");
                jQuery("body").find("div").first().append(element);
                jQuery("body").find("div").first().append(element.clone());
                jQuery("body").find("div").first().append(element.clone());
                AuthJQ.IsAuth = true;
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionFail("Some Problem !. <br>Try again later.");
            };
            AuthJQ.HideLoading = function () {
                AuthJQ.LoadingCounter++;
                if (AuthJQ.LoadingCounter == 3) {
                    jQuery(".jq-loading").hide();
                    var eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Page Loaded! <br>Start Designing.");
                }
            };
            AuthJQ.LoadingCounter = 0;
            AuthJQ.IsAuth = true;
            AuthJQ.AuthUrl = "/services/jquery.asmx/get";
            return AuthJQ;
        }());
        Auth.AuthJQ = AuthJQ;
    })(Auth = exports.Auth || (exports.Auth = {}));
});
define("shiv/TypeScript/Constants/ConstantsJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Constants;
    (function (Constants) {
        var ConstantsJQ = (function () {
            function ConstantsJQ() {
            }
            ConstantsJQ.LOGO = "logo.png";
            ConstantsJQ.HEIGHTCONTROLRESETVALUE = "100";
            ConstantsJQ.PAGEROOT = "Page";
            // public static Str = ["t", "q", "b", "h", "c", "f", "x"];
            // public static Str = ["t", "q", "b", "h", "c", "f", "x"];
            ConstantsJQ.Str = ["p", "i", "m", "b", "d", "p", "m"];
            ConstantsJQ.SecureStrLength = 7;
            return ConstantsJQ;
        }());
        Constants.ConstantsJQ = ConstantsJQ;
        var StaticJQ = (function () {
            function StaticJQ() {
            }
            StaticJQ.normalLinkId = 0;
            StaticJQ.editorLinkId = 0;
            return StaticJQ;
        }());
        Constants.StaticJQ = StaticJQ;
    })(Constants = exports.Constants || (exports.Constants = {}));
});
define("shiv/TypeScript/Preview/Preview", ["require", "exports"], function (require, exports) {
    "use strict";
    var isPreviewReady = false;
    var Preview;
    (function (Preview) {
        var PreviewJQ = (function () {
            function PreviewJQ() {
            }
            PreviewJQ.prototype.Init = function () {
                jQuery(document).ready(function () {
                    if (isPreviewReady == false) {
                        isPreviewReady = true;
                        jQuery(".close-preview").on("click", function () {
                            jQuery(".editor").css("display", "block");
                            PreviewJQ.ClosePreview();
                        });
                        jQuery(".show-preview").on("click", function () {
                            if (jQuery(".control-templates").css("display") == "none") {
                                jQuery(".editor").attr("style", " display: none !important;");
                                jQuery(".circle-deg").remove(); // remove selected object 4 corner circles.
                                PreviewJQ.ShowPreview();
                            }
                        });
                    }
                });
            };
            PreviewJQ.ShowPreview = function () {
                jQuery(".jq-row-plus-container").hide();
                jQuery("#notify").clearQueue();
                jQuery("#notify").fadeOut();
                jQuery(".page-static-element").hide();
                jQuery("page").find(".image-selection").removeClass("image-selection");
                jQuery("page").find(".jqte-editor").removeAttr("contenteditable");
                jQuery("page").find(".jq-text-block-container").removeClass("jq-text-block-container-padding");
                jQuery("page").find(".jq-plus").hide();
                // jQuery("page").find(".jqte-editor").removeClass("padding-5");
                //jQuery("page").find(".jq-image-block-image-wrapper").removeClass("padding-5");
                //jQuery("RootX").css("width", "100%");
                // jQuery("controls").hide();
                // debug-css
                jQuery("page").find(".debug-css").hide();
                //jQuery(".root-elements").removeClass("padding-root-elements");
                // jQuery(".root-elements").css("padding-bottom", "0");
                jQuery("page").find(".column").removeClass("column-padding");
                jQuery("page").find(".ui-resizable-handle").hide();
                //jQuery(".debug-row-css").hide();
                //jQuery(".debug-column-css").hide();
                //jQuery(".debug-text-block-css").hide();
                //jQuery(".debug-text-block-container-css").hide();
                jQuery(".show-preview").hide();
                jQuery(".close-preview").show();
                jQuery("page").find(".row").removeClass("design-row");
                jQuery("page").find(".column").removeClass("design-column");
                jQuery("page").find(".jq-text-block").removeClass("design-text-block");
                jQuery("page").find(".jq-plus-container-image").removeClass("design-empty-text-css");
                jQuery("page").find(".empty-container-image").removeClass("design-empty-text-css");
                jQuery("page").find(".jq-plus-container-text").removeClass("design-empty-text-css");
                jQuery("page").find(".empty-container-text").removeClass("design-empty-text-css");
                jQuery("page").find(".jq-text-block-container").removeClass("design-text-block");
                jQuery("page").find(".empty-container").removeClass("design-empty-css");
                jQuery("page").find(".jqte-editor").removeClass("design-jqte_editor");
                //jQuery(".row").css("padding", "0px");
                //jQuery("rootx").css("padding", "0px");
                jQuery("page").find(".page-static-element").hide();
                jQuery("page").find(".design-square-row").hide();
                jQuery("page").find(".design-root-elements-static").removeClass("page-static-element-circle");
                //jQuery(".root-elements").removeClass("padding-root-elements");
                jQuery("page").find(".root-elements").removeClass("design-root-elements");
                jQuery(".page-marker").hide();
            };
            PreviewJQ.ClosePreview = function () {
                //jQuery("RootX").css("width", "60%");
                //jQuery("controls").show();
                if (jQuery(".jq-show-plus").css("display") == "none") {
                    jQuery(".jq-row-plus-container").show();
                }
                jQuery("page").find(".image-selection").removeClass("image-selection");
                //jQuery("page").find(".jqte-editor").attr("contentEditable", "true");
                jQuery("page").find(".jq-text-block-container").addClass("jq-text-block-container-padding");
                jQuery("page").find(".jq-plus").show();
                //jQuery("page").find(".jqte-editor").addClass("padding-5");
                //jQuery("page").find(".jq-image-block-image-wrapper").addClass("padding-5");
                //debug-css
                jQuery("page").find(".debug-css").show();
                // jQuery(".root-elements").addClass("padding-root-elements");
                // jQuery(".root-elements").css("padding-bottom", "10");
                jQuery("page").find(".column").addClass("column-padding");
                jQuery("page").find(".ui-resizable-handle").show();
                jQuery("page").find(".debug-text-block-container-css").hide();
                jQuery("page").find(".debug-image-block-container-css").hide();
                //jQuery(".debug-row-css").show();
                //jQuery(".debug-column-css").show();
                //jQuery(".debug-text-block-css").show();
                //jQuery(".debug-text-block-container-css").show();
                jQuery(".show-preview").show();
                jQuery(".close-preview").hide();
                jQuery("page").find(".row").addClass("design-row");
                jQuery("page").find(".column").addClass("design-column");
                jQuery("page").find(".jq-text-block").addClass("design-text-block");
                jQuery("page").find(".jq-text-block-container").addClass("design-text-block");
                jQuery("page").find(".empty-container").addClass("design-empty-css");
                jQuery("page").find(".jq-plus-container-image").addClass("design-empty-text-css");
                jQuery("page").find(".empty-container-image").addClass("design-empty-text-css");
                jQuery("page").find(".jq-plus-container-text").addClass("design-empty-text-css");
                jQuery("page").find(".empty-container-text").addClass("design-empty-text-css");
                jQuery("page").find(".jqte-editor").addClass("design-jqte_editor");
                //jQuery(".row").css("padding", "15px");
                //jQuery("rootx").css("padding", "10px");
                jQuery("page").find(".page-static-element").show();
                jQuery("page").find(".design-square-row").show();
                jQuery("page").find(".design-root-elements-static").addClass("page-static-element-circle");
                // jQuery(".root-elements").addClass("padding-root-elements");
                jQuery("page").find(".root-elements").addClass("design-root-elements");
                jQuery(".page-marker").show();
            };
            return PreviewJQ;
        }());
        Preview.PreviewJQ = PreviewJQ;
    })(Preview = exports.Preview || (exports.Preview = {}));
});
define("shiv/TypeScript/MalFormed/MalFormedJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var MalFormed;
    (function (MalFormed) {
        var MalFormedJQ = (function () {
            function MalFormedJQ() {
            }
            MalFormedJQ.IsMalFormed = false;
            return MalFormedJQ;
        }());
        MalFormed.MalFormedJQ = MalFormedJQ;
    })(MalFormed = exports.MalFormed || (exports.MalFormed = {}));
});
/// <reference path="document.d.ts" />
define("shiv/TypeScript/jqte/MyJQte", ["require", "exports", "shiv/TypeScript/Constants/ConstantsJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impStatic, impUndoManager) {
    "use strict";
    var initOnce = false;
    var MyJQte;
    (function (MyJQte) {
        var JqteParams = (function () {
            function JqteParams() {
            }
            return JqteParams;
        }());
        MyJQte.JqteParams = JqteParams;
        var jqte = (function () {
            function jqte(params) {
                this.Init();
            }
            jqte.prototype.Init = function () {
                if (initOnce == false) {
                    initOnce = true;
                    jQuery(".jqte-editor-tool").on("click", function () {
                        return false;
                    });
                    $(".jqte-editor-tool-p").off('click');
                    $(".jqte-editor-tool").off('click');
                    $(".jqte-editor-tool-c").off('click');
                    $(".jq-color").off('click');
                    this.AttachEvents();
                    jQuery(".font-name-list li").each(function () {
                        jQuery(this).children().css("font-family", jQuery(this).text());
                    });
                }
            };
            jqte.GenerateId = function () {
                return "EditorLink" + ++impStatic.Constants.StaticJQ.editorLinkId;
            };
            // insertion function for parameters to toolbar
            jqte.addParams = function (name, command, key, tag, emphasis) {
                var thisCssNo = jqte.buttons.length + 1;
                return jqte.buttons.push({ name: name, cls: thisCssNo, command: command, key: key, tag: tag, emphasis: emphasis });
            };
            jqte.detectElement = function (tags) {
                var resultdetect = false, $node = jqte.getSelectedNode(), parentsTag;
                if ($node) {
                    $.each(tags, function (i, val) {
                        parentsTag = $node.prop('tagName').toLowerCase();
                        if (parentsTag == val)
                            resultdetect = true;
                        else {
                            $node.parents().each(function () {
                                parentsTag = $(this).prop('tagName').toLowerCase();
                                if (parentsTag == val)
                                    resultdetect = true;
                            });
                        }
                    });
                    return resultdetect;
                }
                else
                    return false;
            };
            ;
            jqte.buttonEmphasize = function (e) {
                for (var n = 0; n < jqte.buttons.length; n++) {
                    if (jqte.buttons[n].emphasis && jqte.buttons[n].tag != '')
                        if (jqte.detectElement(jqte.buttons[n].tag)) {
                            $(".jqte-editor-tool[name=" + jqte.buttons[n].command + "]").addClass("active");
                            $(".jqte-editor-tool-p[name=" + jqte.buttons[n].command + "]").addClass("active");
                        }
                        else {
                            $(".jqte-editor-tool[name=" + jqte.buttons[n].command + "]").removeClass("active");
                            $(".jqte-editor-tool-p[name=" + jqte.buttons[n].command + "]").removeClass("active");
                        }
                }
            };
            jqte.getSelectedNode = function () {
                var node, selection;
                if (window.getSelection) {
                    selection = getSelection();
                    node = selection.anchorNode;
                }
                if (!node && document.selection && document.selection.createRange && document.selection.type != "None") {
                    selection = document.selection;
                    var range = selection.getRangeAt ? selection.getRangeAt(0) : selection.createRange();
                    node = range.commonAncestorContainer ? range.commonAncestorContainer :
                        range.parentElement ? range.parentElement() : range.item(0);
                }
                if (node) {
                    return (node.nodeName == "#text" ? $(node.parentNode) : $(node));
                }
                else
                    return node;
            };
            jqte.prototype.AttachEvents = function () {
                jqte.addParams('format', 'formats', '', '', false); // text format button  --> no hotkey
                jqte.addParams('fsize', 'fSize', '', '', false); // font size button --> no hotkey
                jqte.addParams('color', 'colors', '', '', false); // text color button  --> no hotkey
                jqte.addParams('b', 'bold', 'B', ["b", "strong"], true); // bold --> ctrl + b
                jqte.addParams('i', 'italic', 'I', ["i", "em"], true); // italic --> ctrl + i
                jqte.addParams('u', 'underline', 'U', ["u"], true); // underline --> ctrl + u
                jqte.addParams('ol', 'number', '¾', ["ol"], true); // ordered list --> ctrl + .(dot)
                jqte.addParams('ul', 'bullet', '¼', ["ul"], true); // unordered list --> ctrl + ,(comma)
                jqte.addParams('sub', 'subscript', '(', ["sub"], true); // sub script --> ctrl + down arrow
                jqte.addParams('sup', 'superscript', '&', ["sup"], true); // super script --> ctrl + up arrow
                jqte.addParams('outdent', 'outdent', '%', ["blockquote"], true); // outdent --> ctrl + left arrow
                jqte.addParams('indent', 'indent', '\'', ["blockquote"], true); // indent --> ctrl + right arrow
                jqte.addParams('left', 'left', '', '', true); // justify Left --> no hotkey
                jqte.addParams('center', 'center', '', '', true); // justify center --> no hotkey
                jqte.addParams('right', 'right', '', '', true); // justify right --> no hotkey
                jqte.addParams('strike', 'strike', 'K', ["strike"], true); // strike through --> ctrl + K
                jqte.addParams('link', 'link', 'L', ["a"], false); // insertion link  --> ctrl + L
                jqte.addParams('unlink', 'unlink', '', ["a"], true); // remove link --> ctrl + N 
                jqte.addParams('remove', 'removeformat', '.', '', false); // remove all styles --> ctrl + delete
                jqte.addParams('rule', 'inserthorizontalrule', 'H', ["hr"], false); // insertion horizontal rule --> ctrl + H
                jqte.addParams('source', 'displaysource', '', '', false); // feature of displaying source
                jQuery(document).not(".editor").on("click", function (e) {
                    if (!jQuery(e.target).hasClass("jqte-editor-tool-p")) {
                        jQuery(".jqte-editor-tool-list").hide();
                    }
                });
                $(".jqte-editor-tool,.jqte-editor-tool-p").on("mouseup", function (e) {
                    jQuery(this).removeClass("highlight-tool");
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jqte-editor-tool,.jqte-editor-tool-p").on("mousedown", function (e) {
                    // jQuery(this).addClass("highlight-tool");
                    jQuery(".jqte-color-palette").css("display", "none");
                    var name = jQuery(this).attr("name");
                    switch (name) {
                        case "font":
                            jQuery(".jqte-editor-tool-list").not(".font-name-list").hide();
                            if (jQuery(".font-name-list").css("display") == "none") {
                                jQuery(".font-name-list").css("display", "block");
                            }
                            else {
                                jQuery(".font-name-list").css("display", "none");
                            }
                            break;
                        case "font-size":
                            jQuery(".jqte-editor-tool-list").not(".font-size-list").hide();
                            if (jQuery(".font-size-list ").css("display") == "none") {
                                jQuery(".font-size-list ").css("display", "block");
                            }
                            else {
                                jQuery(".font-size-list ").css("display", "none");
                            }
                            break;
                        case 'fore-color':
                        case 'back-color':
                            if (name == "back-color") {
                                jQuery(".jqte-color-palette").find(".color-type").text("Background Color");
                                jQuery(".jqte-color-palette").addClass("jqte-color-palette-background");
                            }
                            else {
                                jQuery(".jqte-color-palette").find(".color-type").text("Text Color");
                                jQuery(".jqte-color-palette").removeClass("jqte-color-palette-background");
                            }
                            jQuery(".jqte-editor-tool-list").not(".jqte-color-palette").hide();
                            if (jQuery(this).hasClass("current-color-tool")) {
                                if (jQuery(".jqte-color-palette").css("display") == "none") {
                                    jQuery(".jqte-color-palette").css("display", "block");
                                }
                                else {
                                    jQuery(".jqte-color-palette").css("display", "none");
                                }
                            }
                            else {
                                jQuery(".jqte-color-palette").css("display", "block");
                            }
                            jQuery(".color-tool").removeClass("current-color-tool");
                            jQuery(this).addClass("current-color-tool");
                            break;
                        case 'bold':
                            jqte.SelectionSet("bold", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'italic':
                            jqte.SelectionSet("italic", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'underline':
                            jqte.SelectionSet('underline', null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'strike':
                            jqte.SelectionSet("strikeThrough", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'bullet':
                            jqte.SelectionSet("insertUnorderedList", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'number':
                            jqte.SelectionSet("insertOrderedList", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'left':
                            jqte.SelectionSet("justifyLeft", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'right':
                            jqte.SelectionSet("justifyRight", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'center':
                            jqte.SelectionSet("justifyCenter", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'full':
                            jqte.SelectionSet("justifyFull", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'outdent':
                            jqte.SelectionSet("outdent", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'indent':
                            jqte.SelectionSet("indent", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'clear':
                            jqte.SelectionSet("removeFormat", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case "unlink":
                            jqte.SelectionSet("unlink", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case "link":
                            jQuery(".jqte-editor-tool-list").not(".jqte-link").hide();
                            if (jQuery(".jqte-link").css("display") == "none") {
                                jQuery(".jqte-link").css("display", "block");
                            }
                            else {
                                jQuery(".jqte-link").css("display", "none");
                            }
                            jQuery(".link-window-url").val("http://");
                            jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#003399");
                            jQuery(".current-editor-scope").find("font[color='#003399']").addClass("key jq-editor-link");
                            jqte.SelectionSet("createLink", "#");
                            jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("id", MyJQte.jqte.GenerateId());
                            break;
                    }
                    jqte.buttonEmphasize(e);
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                jQuery(".editor-create-link").on("click", function (e) {
                    jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("href", jQuery(".link-window-url").val());
                    jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                    jQuery(".jqte-editor-tool-list").hide();
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jqte-font-name").on("change", function (e) {
                    if (jQuery(this).val() != 0) {
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if (selectedtext == "") {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.find(".jq-text-block").css("font-family", jQuery(this).attr("value"));
                        }
                        if (selectedtext != "") {
                            jqte.SelectionSet("fontName", jQuery(this).val());
                        }
                        jQuery(this).val("0");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jqte-font-size").on("change", function (e) {
                    if (jQuery(this).val() != 0) {
                        jqte.SelectionSet("fontSize", 7);
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        var res = parseInt(jQuery(this).val());
                        if (selectedtext == "") {
                            var selectedElement = jQuery(".image-selection").last();
                            if (isNaN(res)) {
                                selectedElement.css("font-size", jQuery(this).val());
                            }
                            else {
                                selectedElement.css("font-size", jQuery(this).val() + "px");
                            }
                        }
                        if (selectedtext != "") {
                            if (isNaN(res)) {
                                jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).val()).removeAttr("size");
                            }
                            else {
                                jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).val() + "px").removeAttr("size");
                            }
                        }
                        jQuery(this).val("0");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jqte-editor-tool-c").on("mousedown", function (e) {
                    debugger;
                    if (jQuery(this).parent().hasClass("font-name")) {
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if (selectedtext == "") {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.find(".jq-text-block").css("font-family", jQuery(this).attr("value"));
                        }
                        if (selectedtext != "") {
                            jqte.SelectionSet("fontName", jQuery(this).attr("value"));
                        }
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    if (jQuery(this).parent().parent().hasClass("font-size")) {
                        jqte.SelectionSet("fontSize", 7);
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if (selectedtext == "") {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.css("font-size", jQuery(this).attr("value") + "px");
                        }
                        if (selectedtext != "") {
                            jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).attr("value") + "px").removeAttr("size");
                        }
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    jQuery(".jqte-editor-tool-list").hide();
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jq-color").on("mousedown", function (e) {
                    if (jQuery(".current-color-tool").length > 0) {
                        var name = jQuery(".current-color-tool").attr("name");
                        if (name == "back-color") {
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#afafaf");
                            var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            if (selectedtext == "") {
                                var selectedElement = jQuery(".image-selection").last();
                                if (selectedElement.hasClass("empty-container-text")) {
                                    selectedElement = selectedElement.find(".jq-text-block");
                                }
                                selectedElement.css("background-color", jQuery(this).css("background-color"));
                            }
                            if (selectedtext != "") {
                                jqte.SelectionSet("backColor", jQuery(this).css("background-color"));
                            }
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                        else if (name = "fore-color") {
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#afafaf");
                            var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            if (selectedtext == "") {
                                var selectedElement = jQuery(".image-selection").last();
                                if (selectedElement != undefined) {
                                    selectedElement.css("color", jQuery(this).css("background-color"));
                                    if (selectedElement.hasClass("jq-editor-link") || selectedElement.hasClass("jq-normal-link")) {
                                        if (jQuery("page").find("." + selectedElement.find("a").first().attr("id")).length > 0) {
                                            jQuery("page").find("." + selectedElement.find("a").first().attr("id")).html("");
                                        }
                                        else {
                                            var style = "<style class='" + selectedElement.find("a").first().attr("id") + "'> </span>";
                                            jQuery("page").append(style);
                                        }
                                        var linkId = "#" + selectedElement.find("a").first().attr("id");
                                        var linkColor = jQuery(this).css("background-color");
                                        var style = " " +
                                            linkId + ":link {" +
                                            " color:" + linkColor + ";}" +
                                            linkId + ":visited {" +
                                            " color:" + linkColor + ";}" +
                                            linkId + ":hover {" +
                                            " color:" + linkColor + ";}" +
                                            linkId + ":active {" +
                                            " color:" + linkColor + ";}";
                                        jQuery("page").find("." + selectedElement.find("a").first().attr("id")).html(style);
                                    }
                                }
                            }
                            if (selectedtext != "") {
                                jqte.SelectionSet("foreColor", jQuery(this).css("background-color"));
                            }
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                    }
                    jQuery(".jqte-editor-tool-list").hide();
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                //jQuery(".jqte-editor").focus(function () {
                //    jQuery(this).addClass("focused");
                //});
                //for testing
                // this.AttachGetSelection();
            };
            //for testing
            //public AttachGetSelection() {
            //    jQuery(".get-selection").click(function () {
            //        jqte.GetSelectetdText();
            //        jQuery(this).closest(".editor").find(".jqte-editor").find("font[size=1]").attr("size", 50);
            //    });
            //}
            jqte.GetSelectetdText = function () {
                return jqte.SelectionSet("fontSize", "1");
            };
            jqte.SelectionGet = function () {
                // for webkit, mozilla, opera
                if (window.getSelection)
                    return window.getSelection();
                else if (document.selection && document.selection.createRange && document.selection.type != "None")
                    return document.selection.createRange();
            };
            jqte.SelectionSet = function (addCommand, thirdParam) {
                var range, sel = jqte.SelectionGet();
                // for webkit, mozilla, opera
                if (window.getSelection) {
                    if (sel.anchorNode && sel.getRangeAt)
                        range = sel.getRangeAt(0);
                    if (range) {
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                    if (!jqte.ThisBrowser.match(/msie/))
                        document.execCommand('StyleWithCSS', false, false);
                    document.execCommand(addCommand, false, thirdParam);
                }
                else if (document.selection && document.selection.createRange && document.selection.type != "None") {
                    range = document.selection.createRange();
                    range.execCommand(addCommand, false, thirdParam);
                }
            };
            jqte.SelectText = function (element) {
                if (element) {
                    var element = element[0];
                    var range;
                    if (document.body.createTextRange) {
                        range = document.body.createTextRange();
                        range.moveToElementText(element);
                        range.select();
                    }
                    else if (window.getSelection) {
                        var selection = window.getSelection();
                        range = document.createRange();
                        if (element != "undefined" && element != null) {
                            range.selectNodeContents(element);
                            selection.removeAllRanges();
                            selection.addRange(range);
                            if ($(element).is(":empty")) {
                                $(element).append("&nbsp;");
                                jqte.SelectText($(element));
                            }
                        }
                    }
                }
            };
            jqte.ThisBrowser = navigator.userAgent.toLowerCase();
            jqte.buttons = [];
            jqte.formats = [["p", "Normal"], ["h1", "Header 1"], ["h2", "Header 2"], ["h3", "Header 3"], ["h4", "Header 4"], ["h5", "Header 5"], ["h6", "Header 6"], ["pre", "Preformatted"]];
            return jqte;
        }());
        MyJQte.jqte = jqte;
    })(MyJQte = exports.MyJQte || (exports.MyJQte = {}));
});
define("shiv/TypeScript/jqte/OnInsert", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/jqte/MyJQte", "shiv/TypeScript/PageElements/ElementJQ"], function (require, exports, impError, impWatch, impUndoManager, impCommonCode, impJQte, impElements) {
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
define("shiv/TypeScript/UndoManager/UndoManager", ["require", "exports", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/Preview/Preview", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/MalFormed/MalFormedJQ", "shiv/TypeScript/jqte/OnInsert"], function (require, exports, impControlsCommon, impPreview, impWatch, impmal, impOnInsert) {
    "use strict";
    window.undoActivityIndex = 999999;
    var Manager;
    (function (Manager) {
        var UndoManager = (function () {
            function UndoManager() {
                this.isEnabled = true;
                this.isUndoHit = false;
                this.isRedoHit = false;
            }
            UndoManager.prototype.EnableUndoManager = function (isEnable) {
                this.isEnabled = isEnable;
            };
            UndoManager.prototype.SetSelectElement = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    var scopeId = selectedElement.attr("scopeId");
                    impWatch.Watch.MouseJQ.selectedElement = jQuery("div[scopeId='" + scopeId + "'").first();
                }
            };
            UndoManager.prototype.Undo = function () {
                if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                    return;
                }
                if (jQuery(".close-preview").css("display") != "none") {
                    impPreview.Preview.PreviewJQ.ClosePreview();
                }
                var undoObj;
                if (window.undoActivityIndex <= 0) {
                    return;
                }
                if (window.undoActivityIndex == 999999) {
                    if (window.undoObjArray != undefined) {
                        window.undoActivityIndex = window.undoObjArray.length - 2;
                        undoObj = window.undoObjArray[window.undoActivityIndex];
                    }
                }
                else {
                    window.undoActivityIndex--;
                    if (window.undoActivityIndex <= 0) {
                        this.isUndoHit = true;
                    }
                    undoObj = window.undoObjArray[window.undoActivityIndex];
                }
                if (undoObj != null) {
                    var parent;
                    parent = jQuery(undoObj.parent);
                    jQuery("page").html(undoObj.html);
                    impControlsCommon.ControlCommon.Code.DestroyResizable();
                    impControlsCommon.ControlCommon.Code.Execute();
                    var c = new impOnInsert.OnInsert.Code();
                    c.Init();
                    this.SetSelectElement();
                }
            };
            UndoManager.prototype.Redo = function () {
                if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                    return;
                }
                if (jQuery(".close-preview").css("display") != "none") {
                    impPreview.Preview.PreviewJQ.ClosePreview();
                }
                var undoObj;
                if (window.undoActivityIndex == -1) {
                    window.undoActivityIndex = 0;
                }
                if (window.undoObjArray != undefined) {
                    if ((window.undoActivityIndex + 1) >= window.undoObjArray.length) {
                        return;
                    }
                    window.undoActivityIndex++;
                    undoObj = window.undoObjArray[window.undoActivityIndex];
                    if (undoObj != null) {
                        jQuery("page").html(undoObj.html);
                        impControlsCommon.ControlCommon.Code.DestroyResizable();
                        impControlsCommon.ControlCommon.Code.Execute();
                        var c = new impOnInsert.OnInsert.Code();
                        c.Init();
                        this.SetSelectElement();
                    }
                }
            };
            UndoManager.prototype.PushUndo = function (undo) {
                if (window.undoObjArray == undefined) {
                    window.undoObjArray = [];
                }
                if (undo != undefined) {
                    window.undoObjArray.push(undo);
                }
            };
            UndoManager.prototype.PopUndo = function () {
                var undo = window.undoObjArray.pop();
            };
            UndoManager.prototype.ClearRedoOnChange = function () {
            };
            UndoManager.prototype.Clear = function () {
            };
            UndoManager.prototype.BeforeOperation = function (selectedParent) {
                if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                    return;
                }
                if (window.layoutCreating == false) {
                    try {
                        window.undoObjArray.splice(window.undoActivityIndex + 1);
                        window.undoActivityIndex = 999999;
                    }
                    catch (ex) {
                    }
                    selectedParent = jQuery("page");
                    var rootTemp;
                    rootTemp = selectedParent;
                    var undo = new UndoJQ();
                    undo.parent = rootTemp;
                    undo.html = rootTemp.html();
                    undo.Push();
                }
            };
            return UndoManager;
        }());
        Manager.UndoManager = UndoManager;
        var UndoJQ = (function () {
            function UndoJQ() {
            }
            UndoJQ.prototype.Push = function () {
                var um = new UndoManager();
                um.PushUndo(this);
            };
            return UndoJQ;
        }());
        Manager.UndoJQ = UndoJQ;
    })(Manager = exports.Manager || (exports.Manager = {}));
});
define("shiv/TypeScript/Controls/FontJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impWatch, impUndoManager) {
    "use strict";
    var isFontReady = false;
    var Font;
    (function (Font) {
        var FontJQ = (function () {
            function FontJQ() {
            }
            FontJQ.LoadFontSize = function () {
                for (var i = 8; i <= 200; i++) {
                    jQuery(".ddn-font-size").append("<option class='font-size-option selected' value='"
                        + i + "px" +
                        "'>"
                        + i +
                        "</option>");
                }
                jQuery(".ddn-font-size").val("14px");
            };
            FontJQ.LoadFonts = function (ddnid) {
                if (ddnid == undefined) {
                    ddnid = FontJQ.ddnId;
                }
                for (var i = 0; i < FontJQ.FontList.length; i++) {
                    if (i == 0) {
                        jQuery(ddnid).append("<option class='font-list-option selected' value='"
                            + FontJQ.FontList[i] +
                            "'>"
                            + "<span style='" + FontJQ.FontList[i] + "'>" + FontJQ.FontList[i] + "</span>" +
                            "</option>");
                    }
                    else {
                        jQuery(ddnid).append("<option class='font-list-option' value='"
                            + FontJQ.FontList[i] +
                            "'>"
                            + "<span style='" + FontJQ.FontList[i] + "'>" + FontJQ.FontList[i] + "</span>" +
                            "</option>");
                    }
                }
            };
            FontJQ.prototype.Init = function () {
                jQuery(document).ready(function () {
                    if (isFontReady == false) {
                        isFontReady = true;
                        FontJQ.LoadFonts();
                        FontJQ.LoadFontSize();
                        jQuery(FontJQ.ddnId).on("custom_load", function () {
                            FontJQ.LoadFonts();
                        });
                        jQuery(".ddn-font-size-pinned").on("change", function () {
                            // jQuery(FontJQ.ddnId + "-sample-pinned").html("<span style='font-family:" + $(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            if (impWatch.Watch.MouseJQ.selectedElement != undefined) {
                                impWatch.Watch.MouseJQ.selectedElement.css("font-size", jQuery(this).val());
                                impWatch.Watch.MouseJQ.selectedElement.find(".jq-text-block").first().css("font-size", "");
                            }
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.BeforeOperation();
                            //jQuery(".jqte_editor").css("font-family", jQuery(this).find("option:selected").val());
                        });
                        jQuery(".ddn-font-pinned").on("change", function () {
                            // jQuery(FontJQ.ddnId + "-sample-pinned").html("<span style='font-family:" + $(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            if (impWatch.Watch.MouseJQ.selectedElement != undefined) {
                                impWatch.Watch.MouseJQ.selectedElement.css("font-family", jQuery(this).val());
                                impWatch.Watch.MouseJQ.selectedElement.find(".jq-text-block").first().css("font-family", "");
                            }
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.BeforeOperation();
                            //jQuery(".jqte_editor").css("font-family", jQuery(this).find("option:selected").val());
                        });
                        jQuery(FontJQ.ddnId).on("change", function () {
                            jQuery(FontJQ.ddnId + "-sample").html("<span style='font-family:" + $(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            //jQuery(".jqte_editor").css("font-family", jQuery(this).find("option:selected").val());
                            FontJQ.PreviewInsertText();
                        });
                    }
                });
            };
            FontJQ.PreviewInsertText = function () {
                var output = document.createElement("div");
                var innerOutput = document.createElement("div");
                jQuery(innerOutput).css("font-family", jQuery(".ddn-font-lists").find("option:selected").val());
                jQuery(innerOutput).append(jQuery(".insert-text-jte").val());
                jQuery(output).append(innerOutput);
                jQuery(".insert-text-out-put").html(jQuery(output).html());
            };
            FontJQ.ProcessSelectNotify = function () {
                jQuery(".ddn-font-size").val("14px");
            };
            FontJQ.ddnId = ".ddn-font-lists";
            FontJQ.FontList = [
                'Arial, Arial, Helvetica, sans-serif',
                'Arial Black, Arial Black, Gadget, sans-serif',
                'Comic Sans MS, Comic Sans MS, cursive',
                'Courier New, Courier New, Courier, monospace',
                'Georgia, Georgia, serif',
                'Impact, Charcoal, sans-serif',
                'Lucida Console, Monaco, monospace',
                'Lucida Sans Unicode, Lucida Grande, sans-serif',
                'Palatino Linotype, Book Antiqua, Palatino,serif',
                'Tahoma, Geneva, sans-serif',
                'Times New Roman, Times,serif',
                'Trebuchet MS, Helvetica, sans-serif',
                'Verdana, Geneva, sans-serif',
                'Gill Sans, Geneva, sans-serif'
            ];
            return FontJQ;
        }());
        Font.FontJQ = FontJQ;
    })(Font = exports.Font || (exports.Font = {}));
});
define("shiv/TypeScript/ControlNames/PageControlNamesJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var PageControlNamesJQ;
    (function (PageControlNamesJQ) {
        var Page;
        (function (Page) {
            var AddRow;
            (function (AddRow) {
                var Controls = (function () {
                    function Controls() {
                    }
                    Controls.CONTROL_COLUMNS = ".control-columns";
                    Controls.ROW_HEIGHT_CONTROL = "#heightControl";
                    Controls.ROW_HEIGHT_VALUE_CONTROL = "#heightControlValue";
                    Controls.COLUMN_HEIGHT_CONTROL = "#colHeightControl";
                    Controls.COLUMN_HEIGHT_VALUE_CONTROL = "#colHeightControlValue";
                    Controls.DDN_ROWS_COLUMNS = "#rows-columns";
                    Controls.BTN_ADD_ROW = ".action-button-add-row";
                    return Controls;
                }());
                AddRow.Controls = Controls;
            })(AddRow = Page.AddRow || (Page.AddRow = {}));
            var Text;
            (function (Text) {
                var Controls = (function () {
                    function Controls() {
                    }
                    Controls.BTN_INSERT_TEXT = ".action-button-insert-text";
                    Controls.BTN_CLEAR_TEXT = ".action-button-insert-text-clear";
                    return Controls;
                }());
                Text.Controls = Controls;
            })(Text = Page.Text || (Page.Text = {}));
            var Image;
            (function (Image) {
                var Controls = (function () {
                    function Controls() {
                    }
                    Controls.BTN_INSERT_IMAGE = ".action-button-insert-image";
                    return Controls;
                }());
                Image.Controls = Controls;
            })(Image = Page.Image || (Page.Image = {}));
        })(Page = PageControlNamesJQ.Page || (PageControlNamesJQ.Page = {}));
    })(PageControlNamesJQ = exports.PageControlNamesJQ || (exports.PageControlNamesJQ = {}));
});
define("shiv/TypeScript/Controls/TextJQ", ["require", "exports", "shiv/TypeScript/Controls/FontJQ", "shiv/typescript/error/errorjq", "shiv/TypeScript/ControlNames/PageControlNamesJQ", "shiv/TypeScript/Page/Context/ContextJQ", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/Common/OperationJQ"], function (require, exports, impText, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impOperaction) {
    "use strict";
    //import impOnInsert = require("../jqte/OnInsert");
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
                        }
                    });
                }
            };
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
                    var tbContainer = document.createElement("div");
                    var tbContent = document.createElement("div");
                    var tbContentWrapper = document.createElement("div");
                    jQuery(tbContentWrapper).addClass("jq-text-block-content jqte-editor");
                    jQuery(tbContent).css("font-family", jQuery(impText.Font.FontJQ.ddnId).find("option:selected").val());
                    jQuery(tbContentWrapper).attr("tabindex", "1");
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
            return TextJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Text.Controls));
        Text.TextJQ = TextJQ;
    })(Text = exports.Text || (exports.Text = {}));
});
/// <reference path="../../../library/jqueryui.d.ts" />
define("shiv/TypeScript/Controls/JQueryUI", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Controls/TextJQ"], function (require, exports, impWatch, impCommonMethods, impUndoManager, impText) {
    "use strict";
    var JQueryUI;
    (function (JQueryUI) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        JQueryUI.SmartObj = SmartObj;
        var UIHelper = (function () {
            function UIHelper() {
            }
            return UIHelper;
        }());
        JQueryUI.UIHelper = UIHelper;
        var CommonCode = (function () {
            function CommonCode() {
            }
            CommonCode.Draggable = function (element, cancelableCss) {
                jQuery(element).draggable({
                    cancel: cancelableCss,
                    revert: 'invalid',
                    helper: 'clone',
                    appendTo: 'body',
                    distance: 5,
                    start: function (event, ui) {
                        CommonCode.DragStopped = false;
                        jQuery("#interface_bottom").hide();
                        jQuery(ui.helper).addClass("jq-dragging");
                        jQuery("page").addClass("dragging");
                        CommonCode.DroppableEventCount = 0;
                        CommonCode.droppableCount++;
                        //if (ui.helper.hasClass("empty-container-text")) {
                        //    ui.helper.css("width", "250px");
                        //}
                        ui.helper.css("z-index", "9999999999");
                        ui.helper.css("opacity", "0.8");
                    },
                    stop: function (event, ui) {
                        CommonCode.DragStopped = true;
                        jQuery("#interface_bottom").show();
                        jQuery(ui.helper).removeClass("jq-dragging");
                        jQuery("page").removeClass("dragging");
                        CommonCode.droppableCount = 2; //old 0
                        //if (ui.helper.hasClass("empty-container-text")) {
                        //    ui.helper.css("width", "auto");
                        //}
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        ui.helper.css("opacity", "1");
                        ui.helper.css("z-index", "0");
                    },
                    drag: function (event, ui) {
                        //ui.helper.offset({
                        //    top: event.clientY,
                        //    left: event.clientX
                        //});
                        var element = !jQuery(event.target).hasClass("key") ? jQuery(event.target).closest(".key") : jQuery(event.target);
                        element.addClass("image-selection-drag");
                    }
                });
            };
            CommonCode.ResizableImage = function () {
                var handleDefault = "e,se,s";
                $(".image-element").resizable({
                    handles: handleDefault,
                    autoHide: true,
                    delay: 0,
                    start: function (event, ui) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                    },
                    stop: function (event, ui) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                    },
                    resize: function (event, ui) {
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                    }
                });
            };
            CommonCode.commonHeight = function (height, ui) {
                //try {
                //    var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                //    var originalHeightStr = (CommonCode.originalHeightBeforeDragStartStr == null || CommonCode.originalHeightBeforeDragStartStr == "") ? $(ui.helper).css("min-height") : CommonCode.originalHeightBeforeDragStartStr;
                //    originalHeightStr = originalHeightStr.replace("px", "");
                //    var originalHeight = parseInt(originalHeightStr);
                //    commonMethods.RemoveSingleStyle(ui.helper, "min-height");
                //    commonMethods.RemoveSingleStyle(ui.helper, "height");
                //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).nextAll(".column"), "min-height");
                //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).nextAll(".column"), "height");
                //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).prevAll(".column"), "min-height");
                //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).prevAll(".column"), "height");
                //    var minHeights = [];
                //    minHeights.push(height);
                //    var heights = [];
                //    heights.push(height);
                //    jQuery(ui.helper).nextAll(".column").each(function () {
                //        minHeights.push(parseInt($(this).css("min-height").replace("px", "")));
                //        heights.push(parseInt($(this).css("height").replace("px", "")))
                //    });
                //    jQuery(ui.helper).prevAll(".column").each(function () {
                //        minHeights.push(parseInt($(this).css("min-height").replace("px", "")))
                //        heights.push(parseInt($(this).css("height").replace("px", "")))
                //    });
                //    var maxOfMinHeight = Math.max.apply(Math, minHeights);
                //    var maxOfHeight = Math.max.apply(Math, heights);
                //    if (height > maxOfHeight) {
                //    }
                //    else {
                //        height = maxOfHeight;
                //    }
                //    jQuery(ui.helper).css("min-height", height + "px");
                //    jQuery(ui.helper).nextAll(".column").css("min-height", height + "px");
                //    jQuery(ui.helper).prevAll(".column").css("min-height", height + "px");
                //    var phase2Height = parseInt(jQuery(ui.helper).css("height").replace("px", ""));
                //    if (phase2Height > height && phase2Height > originalHeight || CommonCode.originalHeightBeforeDragStartStr != "") {
                //        jQuery(ui.helper).css("min-height", phase2Height + "px");
                //        jQuery(ui.helper).nextAll(".column").css("min-height", phase2Height + "px");
                //        jQuery(ui.helper).prevAll(".column").css("min-height", phase2Height + "px");
                //    }
                //    else {
                //        jQuery(ui.helper).css("min-height", originalHeight + "px");
                //        jQuery(ui.helper).nextAll(".column").css("min-height", originalHeight + "px");
                //        jQuery(ui.helper).prevAll(".column").css("min-height", originalHeight + "px");
                //    }
                //    CommonCode.originalHeightBeforeDragStartStr = "";
                //}
                //catch (ex) {
                //    return "error";
                //}
                return "error";
            };
            //public static scrollElement: JQuery;
            CommonCode.ResizableColumn = function () {
                var handleDefault = "e,s"; //"e,se,s";
                $(".column").resizable({
                    handles: handleDefault,
                    autoHide: true,
                    distance: 0,
                    start: function (event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data('ui-resizable').axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                        // $(ui.helper).append("<div class='height-dummy-column dummy-div'></div>")
                        //  jQuery(".dummy-div").height(ui.helper.height() + 2);
                        if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") {
                            //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                            //    ||
                            //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                            //    ) {
                            ui.element.height(ui.element.height());
                            CommonCode.originalHeightBeforeDragStartStr = $(ui.helper).css("min-height");
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                        }
                        var nextElements = jQuery(ui.helper).nextAll(".column");
                        nextElements.hide();
                        var axis = jQuery(ui.element).data('ui-resizable').axis;
                        //CommonCode.scrollElement = jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                    },
                    stop: function (event, ui) {
                        jQuery("page").removeClass("resizing");
                        //jQuery(".dummy-div").remove();
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        jQuery(".ui-resizable-se").removeClass("selected-resizable");
                        var height = ui.size.height;
                        var width = ui.size.width;
                        var originalHeight = ui.originalSize.height;
                        var originalWidth = ui.originalSize.width;
                        var rowWidth = jQuery(ui.helper).parent().width();
                        var onePercentPixels = Math.floor((1 * rowWidth) / 100);
                        var colXsOnePercentage = 2;
                        var colXsOnePixels = colXsOnePercentage * onePercentPixels;
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        var style = jQuery(ui.helper).attr("style");
                        if (height != originalHeight) {
                            var result = CommonCode.commonHeight(height, ui);
                            commonMethods.RemoveSingleStyle(ui.helper, "height");
                            jQuery(ui.helper).css("min-height", height);
                        }
                        commonMethods.RemoveStyle(ui.helper, "min-width");
                        commonMethods.RemoveStyle(ui.helper, "width");
                        var twoFour = 48;
                        if (width > originalWidth) {
                            var emptyXsCount = 0;
                            var nextElements = jQuery(ui.helper).nextAll(".column");
                            try {
                                var columns = ui.helper.parent().children(".column");
                                var count = 0;
                                for (var j = 0; j < columns.length; j++) {
                                    var size = jQuery(columns[j]).attr("xs-column-size");
                                    if (size != undefined && size != "") {
                                        var num = Number(size);
                                        count += num;
                                    }
                                }
                                if (count < twoFour) {
                                    emptyXsCount = twoFour - count;
                                }
                                var extenedWidth = width - originalWidth;
                                var colXs = Math.floor(extenedWidth / colXsOnePixels);
                                // alert(colXs);
                                if (colXs == 0) {
                                    colXs = 1;
                                }
                                var nextElementsCount = jQuery(ui.helper).nextAll(".column").length;
                                var eachXs = Math.floor(colXs / nextElementsCount);
                                if (eachXs == 0) {
                                    eachXs = 1;
                                }
                                var colXsTemp = colXs;
                                for (var i = 0; i < nextElements.length; i++) {
                                    if (colXsTemp > 0) {
                                        var nextXsSize = Number(jQuery(nextElements[i]).attr("xs-column-size"));
                                        if (nextXsSize == 1) {
                                            continue;
                                        }
                                        var newNextXsSize = nextXsSize - eachXs;
                                        if (newNextXsSize < 1) {
                                            colXsTemp = colXsTemp - eachXs + 1;
                                            newNextXsSize = 1;
                                        }
                                        else {
                                            colXsTemp = colXsTemp - eachXs;
                                        }
                                        jQuery(nextElements[i]).removeClass("col-xs-" + nextXsSize);
                                        jQuery(nextElements[i]).addClass("col-xs-" + newNextXsSize);
                                        jQuery(nextElements[i]).attr("xs-column-size", newNextXsSize);
                                    }
                                    else {
                                        break;
                                    }
                                }
                                var xsSize = Number(ui.helper.attr("xs-column-size"));
                                // modified
                                var newXsSize = xsSize + colXs - colXsTemp; // + emptyXsCount;
                                // added
                                if (colXs == colXsTemp) {
                                    newXsSize = newXsSize + colXsTemp;
                                }
                                var allXs = 0;
                                ui.helper.parent().children(".column").each(function () {
                                    allXs += Number(jQuery(this).attr("xs-column-size"));
                                });
                                var overallMinusCurrent = allXs - xsSize;
                                var g = overallMinusCurrent + newXsSize;
                                while (g > twoFour) {
                                    newXsSize--;
                                    g--;
                                }
                                jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                ui.helper.attr("xs-column-size", newXsSize);
                            }
                            catch (ex) {
                            }
                            nextElements.show();
                        }
                        else if (width < originalWidth) {
                            var nextElements = jQuery(ui.helper).nextAll(".column");
                            try {
                                var extenedWidth = originalWidth - width;
                                var colXs = Math.floor(extenedWidth / colXsOnePixels);
                                // alert(colXs);
                                if (colXs == 0) {
                                    colXs = 1;
                                }
                                var eachXs = Math.floor(colXs / 1);
                                if (eachXs == 0) {
                                    eachXs = 1;
                                }
                                var xsSize = Number(ui.helper.attr("xs-column-size"));
                                if (xsSize > 1) {
                                    var eachXsTemp = eachXs;
                                    var newXsSize = xsSize - eachXs;
                                    if (newXsSize < 0) {
                                        eachXsTemp = eachXs + newXsSize;
                                        newXsSize = 1;
                                    }
                                    if (newXsSize == 0) {
                                        eachXsTemp = eachXs - 1;
                                        newXsSize = 1;
                                    }
                                    jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                    jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                    ui.helper.attr("xs-column-size", newXsSize);
                                    var colXsTemp = colXs;
                                    if (colXsTemp > 0) {
                                        var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size"));
                                        var newNextXsSize = nextXsSize + eachXsTemp;
                                        /////////////// over all compresser
                                        var allXs = 0;
                                        ui.helper.parent().children(".column").each(function () {
                                            allXs += Number(jQuery(this).attr("xs-column-size"));
                                        });
                                        var overallMinusNext = allXs - Number(jQuery(nextElements[0]).attr("xs-column-size"));
                                        ;
                                        var g = overallMinusNext + newNextXsSize;
                                        while (g > twoFour) {
                                            newNextXsSize--;
                                            g--;
                                        }
                                        //////////////////////////////////////
                                        jQuery(nextElements[0]).removeClass("col-xs-" + nextXsSize);
                                        jQuery(nextElements[0]).addClass("col-xs-" + newNextXsSize);
                                        jQuery(nextElements[0]).attr("xs-column-size", newNextXsSize);
                                    }
                                }
                            }
                            catch (ex) {
                            }
                            nextElements.show();
                        }
                        var nextElementsToShow = jQuery(ui.helper).nextAll(".column");
                        nextElementsToShow.show();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function (event, ui) {
                    }
                });
            };
            CommonCode.OnResize = function (event, ui) {
                if (jQuery(ui.element).data('ui-resizable').axis == "se") {
                }
                else if ($(ui.element).data('ui-resizable').axis == "s") {
                    ui.helper.height(ui.helper.height() + 20);
                }
                else if ($(ui.element).data('ui-resizable').axis == "s") {
                }
            };
            CommonCode.JustResizable = function (elementCss, handle) {
                var handleDefault = "e,se,s";
                if (handle != undefined && handle != "") {
                    handleDefault = handle;
                }
                $(elementCss).resizable({
                    handles: handleDefault,
                    minHeight: 0,
                    minWidth: 0,
                    delay: 0,
                    start: function (event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data('ui-resizable').axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                    },
                    stop: function (event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        var height = ui.size.height;
                        var width = ui.size.width;
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function (event, ui) {
                    }
                });
            };
            CommonCode.ResizableRootElements = function (elementCss, handle) {
                var handleDefault = "e,se,s";
                if (handle != undefined && handle != "") {
                    handleDefault = handle;
                }
                $(elementCss).resizable({
                    handles: handleDefault,
                    autoHide: true,
                    delay: 0,
                    start: function (event, ui) {
                        if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") {
                            //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                            //    ||
                            //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                            //    ) {
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                            commonMethods.RemoveStyle(ui.helper, "height");
                        }
                    },
                    stop: function (event, ui) {
                        var height = ui.size.height;
                        var width = ui.size.width;
                        if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("root-elements")) {
                            var common = new impCommonMethods.Common.CommonMethodsJQ();
                            common.RemoveStyle(jQuery(this), "min-height");
                            common.RemoveStyle(jQuery(this), "height");
                            jQuery(this).css("min-height", height);
                        }
                        //UndoRedoManager.Push();
                        //alert(height + " x " + width);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function (event, ui) {
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                    }
                });
            };
            CommonCode.ResizeCommon = function (selectedElement) {
                try {
                    var box = jQuery(selectedElement)[0].getBoundingClientRect();
                    var circleLeftTopElement = jQuery("<div class='circle-deg' style='width:12px; border-radius:50%; height:12px; position:absolute; background-color:#00A1FF;'></div>");
                    var circleRightTopElement = jQuery(circleLeftTopElement).clone();
                    var circleLeftBottomElement = jQuery(circleLeftTopElement).clone();
                    var circleRightBottomElement = jQuery(circleLeftTopElement).clone();
                    circleRightBottomElement.addClass("z-index-back");
                    var body = document.body;
                    var docElem = document.documentElement;
                    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
                    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
                    var clientTop = docElem.clientTop || body.clientTop || 0;
                    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
                    var top = box.top + scrollTop - clientTop;
                    var left = box.left + scrollLeft - clientLeft;
                    var width = jQuery(selectedElement).css("width");
                    var height = jQuery(selectedElement).css("height");
                    var widthf = parseFloat(width.replace("px", ""));
                    var heightf = parseFloat(height.replace("px", ""));
                    circleLeftTopElement.css("left", left - 5);
                    circleLeftTopElement.css("top", top - 5);
                    circleLeftBottomElement.css("left", left - 5);
                    circleLeftBottomElement.css("top", top + heightf - 5);
                    circleRightTopElement.css("left", left + widthf - 5);
                    circleRightTopElement.css("top", top - 5);
                    circleRightBottomElement.css("left", left + widthf - 5);
                    circleRightBottomElement.css("top", top + heightf - 5);
                    jQuery(".circle-deg").remove();
                    jQuery("body").append(circleLeftTopElement);
                    jQuery("body").append(circleLeftBottomElement);
                    jQuery("body").append(circleRightTopElement);
                    jQuery("body").append(circleRightBottomElement);
                }
                catch (ex) {
                }
            };
            CommonCode.Resizable = function (elementCss, handle) {
                var handleDefault = "e,se,s";
                if (handle != undefined && handle != "") {
                    handleDefault = handle;
                }
                $(elementCss).resizable({
                    handles: handleDefault,
                    autoHide: true,
                    distance: 0,
                    start: function (event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data('ui-resizable').axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                        $(ui.helper).closest(".key").after("<div class='height float-right dummy-div'></div>");
                        jQuery(".dummy-div").height(ui.helper.height() + 2);
                        if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") {
                            //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                            //    ||
                            //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                            //    ) {
                            ui.helper.css("height", ui.helper.css("min-height"));
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                        }
                    },
                    stop: function (event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(".dummy-div").remove();
                        var height = ui.size.height;
                        var width = ui.size.width;
                        if (jQuery(this).hasClass("empty-container-text")
                            || jQuery(this).hasClass("empty-container-image")
                            || jQuery(this).hasClass("empty-container")
                            || jQuery(this).hasClass("jq-plus-container-text")
                            || jQuery(this).hasClass("jq-plus-container-image")
                            || jQuery(this).hasClass("jq-text-block-container")
                            || jQuery(this).hasClass("root-elements")) {
                            //var common = new impCommonMethods.Common.CommonMethodsJQ();
                            //common.RemoveStyle(jQuery(this), "min-height");
                            //common.RemoveStyle(jQuery(this), "height");
                            if (jQuery(this).hasClass("jq-plus-container-image") || jQuery(this).hasClass("empty-container-spacer")) {
                                jQuery(this).css("height", height);
                                jQuery(this).css("min-height", height);
                            }
                            else {
                                jQuery(this).css("height", height);
                                jQuery(this).css("min-height", height);
                            }
                        }
                        //UndoRedoManager.Push();
                        //alert(height + " x " + width);
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function (event, ui) {
                        window.setTimeout(function () {
                            if (jQuery(".dummy-div").height() < ui.helper.height()) {
                                jQuery(".dummy-div").height(jQuery(".dummy-div").height() + 2);
                            }
                        }, 10);
                    }
                });
            };
            CommonCode.Droppable = function (elementCss) {
                $(elementCss).droppable({
                    greedy: true,
                    tolerance: "pointer",
                    accept: '.bldr-draggable, .image-text-other',
                    drop: function (event, ui) {
                        if (CommonCode.DroppableEventCount == 1) {
                            return;
                        }
                        CommonCode.DroppableEventCount = 1;
                        try {
                            window.smartObj = new JQueryUI.SmartObj();
                            window.smartObj.currentObj = undefined;
                            window.smartObj.command = "";
                            impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");
                            var x = event.clientX;
                            var y = event.clientY + $(document).scrollTop();
                            jQuery(".nearest-element").removeClass("nearest-element");
                            if (impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other")) {
                                impWatch.Watch.MouseJQ.selectedElement = impWatch.Watch.MouseJQ.selectedElement.closest(".column");
                            }
                            if (impWatch.Watch.MouseJQ.selectedElement.hasClass("column")) {
                                var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other");
                                var nearestLeftArray = [];
                                var nearestTopArray = [];
                                if ($elements.length > 0) {
                                    $elements.each(function (index, _this) {
                                        var $this = $(_this);
                                        var top = parseFloat($this.attr("top"));
                                        var bottom = parseFloat($this.attr("bottom"));
                                        var left = parseFloat($this.attr("left"));
                                        if (y >= top && y <= bottom && x >= left) {
                                            nearestLeftArray.push(left);
                                            nearestTopArray.push(top);
                                        }
                                    });
                                    var nearestLeft = 0;
                                    var nearestTop = 0;
                                    if (nearestLeftArray.length > 0) {
                                        nearestLeft = Math.max.apply(Math, nearestLeftArray);
                                    }
                                    if (nearestTopArray.length > 0) {
                                        nearestTop = Math.max.apply(Math, nearestTopArray);
                                    }
                                    impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");
                                    impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();
                                    if (impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                        window.smartObj.currentObj = impWatch.Watch.MouseJQ.nearestElement;
                                        window.smartObj.command = "n";
                                    }
                                }
                            }
                        }
                        catch (ex) {
                        }
                        impWatch.Watch.MouseJQ.selectedElement = jQuery(".image-selection-drag");
                        if (CommonCode.droppableCount >= 2 && CommonCode.currentTarget != undefined && !ui.draggable.hasClass("control-drag-anywhere")
                            && !ui.draggable.hasClass("bldr-draggable")) {
                            CommonCode.droppableCount++;
                            ui.draggable.css("opacity", "1");
                            if (ui.draggable.find(".jq-image-block-image").length > 0) {
                                ui.draggable.css("position", "relative").css("left", "").css("top", "");
                                if (impWatch.Watch.MouseJQ.nearestElement != undefined && impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                    impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.closest(".empty-container-image"));
                                }
                                else {
                                    if (CommonCode.currentTarget.closest(".key").hasClass("column")) {
                                        CommonCode.currentTarget.closest(".key").append(ui.draggable.closest(".empty-container-image"));
                                    }
                                    else {
                                        CommonCode.currentTarget.closest(".key").after(ui.draggable.closest(".empty-container-image"));
                                    }
                                }
                            }
                            else {
                                if (impWatch.Watch.MouseJQ.nearestElement != undefined && impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                    impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                }
                                else {
                                    if (CommonCode.currentTarget.closest(".key").hasClass("column")) {
                                        CommonCode.currentTarget.closest(".key").append(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                    }
                                    else {
                                        CommonCode.currentTarget.closest(".key").after(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                    }
                                }
                            }
                            jQuery(".image-selection").removeClass("image-selection");
                            event.stopPropagation();
                            CommonCode.currentTarget = null;
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                        else {
                            if (!ui.draggable.hasClass("control-drag-anywhere")) {
                                ui.draggable.css("position", "relative").css("left", "").css("top", "");
                                if (ui.draggable.hasClass("bldr-draggable")) {
                                    var id = ui.draggable.attr("id");
                                    switch (id) {
                                        case 'bldr-drgb-text':
                                            impText.Text.TextJQ.InsertTextBlock("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
                                            break;
                                        case 'bldr-drgb-title':
                                            impText.Text.TextJQ.InsertTextBlock("<h2>Title Here.</h2>");
                                            break;
                                    }
                                }
                            }
                        }
                        jQuery(".image-text-other").each(function (index, _this) {
                            var $this = jQuery(_this);
                            var bottom = $this.offset().top + $this.height();
                            var top = $this.offset().top;
                            var left = $this.offset().left;
                            $this.attr("top", top);
                            $this.attr("bottom", bottom);
                            $this.attr("left", left);
                        });
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        jQuery(".empty").removeClass("empty");
                        jQuery("#control-common-execute").trigger("click");
                    },
                    out: function (event, ui) {
                        CommonCode.droppableCount++;
                    },
                    over: function (event, ui) {
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        CommonCode.currentTarget = jQuery(event.target);
                        if (jQuery(event.target).hasClass("key")) {
                            if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {
                                jQuery(event.target).addClass("image-selection-drag");
                                impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target);
                            }
                        }
                        else {
                            if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {
                                jQuery(event.target).closest(".key").addClass("image-selection-drag");
                                impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target).closest(".key");
                            }
                        }
                    }
                });
            };
            CommonCode.DraggableDestroy = function (element) {
                jQuery(element).each(function (index, _this) {
                    try {
                        var $this = $(_this);
                        $this.draggable("destroy");
                    }
                    catch (ex) {
                    }
                });
            };
            CommonCode.DroppableDestroy = function (elementCss) {
                jQuery(elementCss).each(function (index, _this) {
                    try {
                        var $this = $(_this);
                        $this.droppable("destroy");
                        $this.removeClass("ui-droppable");
                    }
                    catch (ex) {
                    }
                });
            };
            CommonCode.ResizableDestroy = function (elementCss) {
                jQuery(elementCss).each(function (index, _this) {
                    try {
                        var $this = $(_this);
                        $this.resizable("destroy");
                        jQuery($this).find("div").remove(".ui-resizable-handle");
                    }
                    catch (ex) {
                        jQuery($this).find("div").remove(".ui-resizable-handle");
                    }
                });
            };
            CommonCode.droppableCount = 2; //old 0
            CommonCode.DroppableEventCount = 0;
            CommonCode.DragStopped = true;
            CommonCode.originalHeightBeforeDragStartStr = "";
            return CommonCode;
        }());
        JQueryUI.CommonCode = CommonCode;
    })(JQueryUI = exports.JQueryUI || (exports.JQueryUI = {}));
});
define("shiv/TypeScript/page/anyjq", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var AnyJQ = (function (_super) {
            __extends(AnyJQ, _super);
            function AnyJQ(extra) {
                _super.call(this, null, "Any", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return AnyJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.AnyJQ = AnyJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/common/on", ["require", "exports", "shiv/TypeScript/page/anyjq", "shiv/TypeScript/Watch/WatchMouseJQ"], function (require, exports, impAny, impWatch) {
    "use strict";
    var On;
    (function (On) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        On.SmartObj = SmartObj;
        var Code = (function () {
            function Code() {
            }
            Code.Execute = function () {
                Code.BindPlus();
                Code.BindEC();
            };
            Code.BindEC = function () {
                jQuery(".empty-container").unbind("click");
                jQuery(".empty-container").on("click", function () {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        if (selectedElement.hasClass("empty-container")) {
                        }
                    }
                });
            };
            Code.BindPlus = function () {
                //// plus for row /////////
                jQuery(".jq-prev-row").unbind("click");
                jQuery(".jq-prev-row").on("click", function () {
                    var currentRow = jQuery(this).parentsUntil(".row");
                    var anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-48", "", undefined, undefined, true);
                });
                jQuery(".jq-next-row").unbind("click");
                jQuery(".jq-next-row").on("click", function () {
                    var currentRow = jQuery(this).parentsUntil(".row");
                    var anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-48", "", undefined, undefined, false);
                });
                //// plus for image-text-other
                jQuery(".jq-plus-prev").unbind("click");
                jQuery(".jq-plus-prev").on("click", function (e) {
                    window.smartObj = new SmartObj();
                    if (jQuery(this).hasClass("image-text-other")) {
                        window.smartObj.currentObj = jQuery(this);
                    }
                    else {
                        window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                    }
                    window.smartObj.command = "p";
                    window.smartObj.isDirty = false;
                    e.stopPropagation();
                    // adjustment based on windows
                    var pageY = e.pageY;
                    if ((jQuery(window).scrollTop() + pageY) >= (jQuery(window).height() - 250)) {
                        pageY = e.pageY - 250;
                    }
                    var pageX = e.pageX;
                    if (e.pageX > ($(document).width() - 200)) {
                        pageX = e.pageX - 150;
                    }
                    /////////////////
                    jQuery("#smInsertNextPrev").css("left", pageX + "px"); // For updating the menu position.
                    jQuery("#smInsertNextPrev").css("top", pageY + "px"); // 
                    jQuery("#smInsertNextPrev").fadeIn(500); //  For bringing the context menu in picture.
                });
                jQuery(".jq-plus-next").unbind("click");
                jQuery(".jq-plus-next").on("click", function (e) {
                    window.smartObj = new SmartObj();
                    if (jQuery(this).hasClass("image-text-other")) {
                        window.smartObj.currentObj = jQuery(this);
                    }
                    else {
                        window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                    }
                    window.smartObj.command = "n";
                    window.smartObj.isDirty = false;
                    e.stopPropagation();
                    // adjustment based on windows
                    var pageY = e.pageY;
                    if ((jQuery(window).scrollTop() + pageY) >= (jQuery(window).height() - 250)) {
                        pageY = e.pageY - 180;
                    }
                    var pageX = e.pageX;
                    if (e.pageX > ($(document).width() - 200)) {
                        pageX = e.pageX - 150;
                    }
                    /////////////////
                    jQuery("#smInsertNextPrev").css("left", pageX + "px"); // For updating the menu position.
                    jQuery("#smInsertNextPrev").css("top", pageY + "px"); // 
                    jQuery("#smInsertNextPrev").fadeIn(500); //  For bringing the context menu in picture.
                });
            };
            return Code;
        }());
        On.Code = Code;
    })(On = exports.On || (exports.On = {}));
});
define("shiv/TypeScript/Controls/ControlCommonJQ", ["require", "exports", "shiv/TypeScript/Controls/JQueryUI", "shiv/TypeScript/common/on", "shiv/TypeScript/jqte/OnInsert"], function (require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    (function (ControlCommon) {
        var Code = (function () {
            function Code() {
            }
            Code.AttachClick = function () {
                jQuery("#control-common-execute").on("click", function () {
                    Code.DestroyResizable();
                    Code.Execute();
                });
            };
            Code.Execute = function () {
                window.setTimeout(function () {
                    impOn.On.Code.Execute();
                    new impJqteOnInsert.OnInsert.Code().Init();
                    impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                    impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                    jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                    jQuery(".column").each(function () {
                        if (jQuery(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length == 0) {
                            jQuery(this).addClass("empty");
                            if (jQuery(this).find(".empty-drop-element").length == 0) {
                                jQuery(this).append("<div class='image-text-other empty-drop-element' ></div>");
                            }
                        }
                        else {
                            jQuery(this).removeClass("empty");
                            jQuery(this).find(".empty-drop-element").remove();
                        }
                    });
                    //should be optimized....
                    jQuery(".image-text-other, .empty-container-empty").each(function (index, _this) {
                        var $this = jQuery(_this);
                        var bottom = $this.offset().top + $this.height();
                        var top = $this.offset().top;
                        var left = $this.offset().left;
                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);
                    });
                    impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
                    jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                    jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                    jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                }, 10);
            };
            Code.DestroyResizable = function () {
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left");
            };
            Code.AnchorClicked = false;
            return Code;
        }());
        ControlCommon.Code = Code;
    })(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});
define("shiv/TypeScript/Page/MenuBarJQ", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var MenuBarJQ = (function (_super) {
            __extends(MenuBarJQ, _super);
            function MenuBarJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "MenuBar";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return MenuBarJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.MenuBarJQ = MenuBarJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Page/ContentJQ", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var ContentJQ = (function (_super) {
            __extends(ContentJQ, _super);
            function ContentJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "Content";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return ContentJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.ContentJQ = ContentJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Page/FooterJQ", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var FooterJQ = (function (_super) {
            __extends(FooterJQ, _super);
            function FooterJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "Footer";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return FooterJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.FooterJQ = FooterJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/_Classes/LoadingJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Loading;
    (function (Loading) {
        var LoadingJQ = (function () {
            function LoadingJQ(controlId) {
                this.src = "/content/loading/colors.gif";
                this.controlId = controlId;
                this.Create();
            }
            LoadingJQ.prototype.Create = function () {
                var loading = jQuery(".loading.clonable").clone();
                loading.removeClass("clonable");
                loading.addClass("new");
                loading.removeClass("hide");
                loading.find("img").first().attr("src", this.src);
                jQuery(this.controlId).find(".loading.new").remove();
                jQuery(this.controlId).append(loading);
            };
            LoadingJQ.prototype.Init = function () {
                this.Show();
            };
            LoadingJQ.prototype.IsExist = function () {
                if (jQuery(this.controlId).find(".loading.new").length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            };
            LoadingJQ.prototype.Show = function () {
                if (this.IsExist()) {
                    jQuery(this.controlId).find(".loading.new").first().show();
                }
                else {
                    this.Create();
                    jQuery(this.controlId).find(".loading.new").first().show();
                }
            };
            LoadingJQ.prototype.Hide = function () {
                jQuery(this.controlId).find(".loading.new").first().hide();
            };
            return LoadingJQ;
        }());
        Loading.LoadingJQ = LoadingJQ;
    })(Loading = exports.Loading || (exports.Loading = {}));
});
define("shiv/TypeScript/Controls/ImageJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/ControlNames/PageControlNamesJQ", "shiv/TypeScript/Page/Context/ContextJQ", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/Common/OperationJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impOperaction, impUndoManager) {
    "use strict";
    var debug = true;
    var globalImageBlockId = 0;
    var globalImageBlockContainerId = 0;
    var Image;
    (function (Image) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        Image.SmartObj = SmartObj;
        var SelfJQ = (function (_super) {
            __extends(SelfJQ, _super);
            function SelfJQ() {
                _super.apply(this, arguments);
            }
            SelfJQ.prototype.Init = function () {
                this.AttachUserImages();
                this.AttachSelectImage();
                this.AttachInsertImage();
            };
            // generate scope id
            SelfJQ.prototype.GenerateTextBlockScopeId = function () {
                return "Image_Block_" + ++globalImageBlockId;
            };
            SelfJQ.prototype.GenerateContainerScopeId = function () {
                return "Image_Block_Container_" + ++globalImageBlockContainerId;
            };
            SelfJQ.prototype.AttachSelectImage = function () {
                jQuery("#control-image-bi-library").on("click", ".image-library-image", function () {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(".image-library-image").removeClass("image-library-bi-select");
                    jQuery(this).addClass("image-library-select");
                    jQuery(this).addClass("image-library-bi-select");
                });
                jQuery(SelfJQ.controlId).on("click", ".image-library-image", function () {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(this).addClass("image-library-select");
                });
            };
            SelfJQ.IsImageUrl = function (s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (regexp.test(s) == true) {
                    if (s.length >= 5) {
                        var lowerUrl = s.toLowerCase();
                        var types = ["jpeg", "jpg", "png", "gif"];
                        for (var i = 0; i < types.length; i++) {
                            var _type = lowerUrl.substr(lowerUrl.length - 5, 5);
                            var ts = _type.split(".");
                            if (ts.length >= 2) {
                                if (ts[1] == types[i]) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
            SelfJQ.prototype.AttachInsertImage = function () {
                jQuery(SelfJQ.controlId).find(".action-button-insert-image").on("click", function () {
                    if (jQuery(".internet-image-url").val() != "") {
                        SelfJQ.InsertImage(jQuery(".internet-image-url").val());
                    }
                    else {
                        SelfJQ.InsertImage(undefined);
                    }
                });
                jQuery(".action-button-change-image").on("click", function () {
                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedRowOrColumn != undefined
                        &&
                            selectedRowOrColumn.hasClass("empty-container-image")) {
                        var imgSrc = jQuery(".image-library-select").attr("src");
                        if (imgSrc != "") {
                            selectedRowOrColumn.find(".jq-plus-container-image").find("img").attr("src", imgSrc);
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        }
                    }
                    else {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("please select a image change.");
                    }
                    jQuery("#control-image-library").hide();
                });
            };
            SelfJQ.ChangeImage = function () {
                jQuery(".action-button-insert-image").hide();
                jQuery(".action-button-change-image").show();
                jQuery("#control-image-library").show();
                jQuery("#control-image-library").trigger('custom_loaded');
            };
            SelfJQ.InsertImage = function (url) {
                var imageObj = new SelfJQ();
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.SetErrorClassName("page-insert-image");
                var ctx = new impPageCtx.Page.ContextJQ();
                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                if (!selectedRowOrColumn.hasClass("column") && (window.smartObj == null || window.smartObj.currentObj == null)) {
                    window.smartObj = new SmartObj();
                    window.smartObj.currentObj = selectedRowOrColumn;
                    window.smartObj.command = "n";
                }
                if (selectedRowOrColumn == undefined) {
                    selectedRowOrColumn = jQuery("#nnnoelement");
                }
                if (selectedRowOrColumn != undefined) {
                    var tbImageContainer = document.createElement("div");
                    var tbImage = document.createElement("div");
                    var tbImageWrapper = document.createElement("div");
                    var tbImg = document.createElement("img");
                    jQuery(tbImg).addClass("jq-image-block-image ");
                    jQuery(tbImg).addClass("normal-element image-element");
                    jQuery(tbImageWrapper).addClass("jq-image-block-image-wrapper ");
                    var imgSrc;
                    if (url == undefined) {
                        imgSrc = jQuery(".image-library-select").attr("src");
                    }
                    else {
                        imgSrc = url;
                    }
                    jQuery(tbImg).attr("src", imgSrc);
                    jQuery(tbImageWrapper).append(tbImg);
                    jQuery(tbImage).append(tbImageWrapper);
                    jQuery(tbImage).addClass(SelfJQ.CSSCLASS);
                    ///////////////column scope id for debugging and designer //////
                    var tbScopeId = imageObj.GenerateTextBlockScopeId();
                    if (debug == true && tbImage != undefined) {
                        jQuery(tbImage).prepend("<span class='debug-image-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                    }
                    jQuery(tbImage).attr("scopeId", tbScopeId);
                    jQuery(tbImageContainer).append(tbImage);
                    /////////////// row scope id for debugging and designer //////
                    var tbcScopeId = imageObj.GenerateContainerScopeId();
                    if (debug == true) {
                        jQuery(tbImageContainer).append(" <span class='debug-image-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                    }
                    jQuery(tbImageContainer).addClass(SelfJQ.CONTAINER_CSS_CLASS);
                    jQuery(tbImageContainer).attr("scopeId", tbcScopeId);
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
                        || window.smartObj != null) {
                        //var emptyc = document.createElement("span");
                        //jQuery(emptyc).addClass("empty-container key design-css design-empty-css");
                        //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined);
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container-not-used");
                        plusContainer.addClass("jq-plus-container-image");
                        plusContainer.addClass("design-css");
                        plusContainer.addClass("design-empty-text-css");
                        plusContainer.removeClass("jq-plus-container");
                        plusContainer.find(".jq-plus-element-content").addClass("jq-plus-element-content-image");
                        var emptycontainer = document.createElement("div");
                        plusContainer.find(".adjust-image-text-other").remove();
                        plusContainer.css("height", "200px");
                        plusContainer.css("width", "200px");
                        var jEc = jQuery(emptycontainer);
                        jEc.prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>");
                        jEc.prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>");
                        jEc.addClass("empty-container-image image-text-other key design-css design-empty-text-css");
                        //padding-10 
                        jEc.append(plusContainer);
                        //jQuery(tbImg).load(function () {
                        //});
                        plusContainer.find(".jq-plus-content").append(tbImageContainer);
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        if (window.smartObj == null || window.smartObj.command == "") {
                            ctx.Page.Any.Add(selectedRowOrColumn, jEc, '', undefined, undefined, undefined, undefined);
                        }
                        else {
                            ctx.Page.Any.Add(selectedRowOrColumn, jEc, '', undefined, undefined, true, undefined);
                        }
                        //var empty = document.createElement("span");
                        //jQuery(empty).addClass("empty-container key design-css design-empty-css");
                        //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(empty), '', undefined, undefined);
                        //// rearrange debug css ....
                        if (selectedRowOrColumn.hasClass("jq-image-block-container")) {
                            var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");
                            selectedRowOrColumn.find(".debug-image-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();
                            if (tbOrTbcWithScopeId != undefined) {
                                selectedRowOrColumn.append('<span class="debug-image-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + '</span>');
                            }
                        }
                        ///// rearrange debug css completed...
                        jQuery(tbImageContainer).find(".debug-css").remove();
                        errorHandler.ActionSuccess("");
                        jQuery(SelfJQ.controlId).hide();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    else {
                        errorHandler.ActionFail("You can only insert in a column block.");
                    }
                }
                jQuery(".image-library-image").removeClass("image-library-select");
                jQuery(".internet-image-url").val("");
            };
            SelfJQ.prototype.AttachUserImages = function () {
                jQuery(".load-more-images").on("click", function () {
                    SelfJQ.GetImages();
                });
                jQuery(SelfJQ.controlId).on("custom_loaded", function () {
                    SelfJQ.ClearImageGalaryPagingValue();
                    SelfJQ.GetImages();
                });
            };
            SelfJQ.SetImageGalaryPagingValue = function () {
                jQuery(".imges-get-start").val((Number(jQuery(".imges-get-start").val()) + 20).toString());
            };
            SelfJQ.GetImageGalaryPagingValue = function () {
                if (jQuery(".imges-get-start").length == 0) {
                    var pagingElement = jQuery(document.createElement("input"));
                    pagingElement.addClass("imges-get-start hide");
                    jQuery("body").append(pagingElement);
                    jQuery(".imges-get-start").val('0');
                }
                return jQuery(".imges-get-start").val();
            };
            SelfJQ.GetImages = function () {
                var data = { start: SelfJQ.GetImageGalaryPagingValue(), pageSize: 20 };
                var dataStrfy = JSON.stringify(data);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/ImageService.asmx/GetImages",
                    data: dataStrfy,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SelfJQ.OnGetImagesSuccess,
                    error: SelfJQ.OnGetImagesError
                });
            };
            SelfJQ.ClearImageGalaryPagingValue = function () {
                jQuery(".imges-get-start").val("0");
            };
            SelfJQ.OnGetImagesSuccess = function (data, status) {
                var resultImages;
                resultImages = data.d;
                if (resultImages.length > 0) {
                    if (SelfJQ.GetImageGalaryPagingValue() == "0") {
                        jQuery(".image-library").html("");
                    }
                    SelfJQ.SetImageGalaryPagingValue();
                }
                for (var i = 0; i < resultImages.length; i++) {
                    var imageContainer = document.createElement("div");
                    jQuery(imageContainer).addClass("image-lib-container");
                    var image = document.createElement("img");
                    jQuery(image).attr("src", resultImages[i].Path);
                    jQuery(image).addClass("image-library-image");
                    jQuery(image).addClass("img-thumbnail");
                    jQuery(imageContainer).append(image);
                    jQuery(".image-library").append(imageContainer);
                }
            };
            SelfJQ.OnGetImagesError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Some Problem !. <br>Try again latter.");
            };
            SelfJQ.ProcessSelectNotify = function () {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {
                    }
                    else {
                    }
                }
            };
            SelfJQ.controlId = "#control-image-library";
            SelfJQ.CSSCLASS = 'jq-image-block design-image-block normal-element';
            SelfJQ.CONTAINER_CSS_CLASS = "jq-image-block-container design-image-block normal-element jq-container";
            return SelfJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Image.Controls));
        Image.SelfJQ = SelfJQ;
    })(Image = exports.Image || (exports.Image = {}));
});
define("shiv/TypeScript/Watch/ClipBoardJQ", ["require", "exports", "shiv/TypeScript/Controls/ImageJQ"], function (require, exports, impImage) {
    "use strict";
    var ClipBoard;
    (function (ClipBoard) {
        var ClipBoardJQ = (function () {
            function ClipBoardJQ() {
            }
            ClipBoardJQ.prototype.InsertImage = function (url) {
                impImage.Image.SelfJQ.InsertImage(url);
            };
            ClipBoardJQ.prototype.InsertText = function (text) {
            };
            return ClipBoardJQ;
        }());
        ClipBoard.ClipBoardJQ = ClipBoardJQ;
    })(ClipBoard = exports.ClipBoard || (exports.ClipBoard = {}));
});
define("shiv/TypeScript/Watch/CopyPasteJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/typescript/error/errorjq", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Watch/ClipBoardJQ", "shiv/TypeScript/Common/OperationJQ"], function (require, exports, impWatch, impError, impCommonCode, impUndoManager, impClipboard, impOperaction) {
    "use strict";
    var CopiedElement;
    var isCut = false;
    var ClipBorad = (function () {
        function ClipBorad() {
        }
        return ClipBorad;
    }());
    var CopyPaste;
    (function (CopyPaste) {
        var CopyPasteJQ = (function () {
            function CopyPasteJQ() {
            }
            CopyPasteJQ.Const = function () {
                CopyPasteJQ.ClipBoardData = new ClipBorad();
            };
            CopyPasteJQ.prototype.Init = function () {
            };
            CopyPasteJQ.SetClipBoard = function (clipText) {
                CopyPasteJQ.ClipBoardData.data = clipText;
            };
            CopyPasteJQ.IsImageUrl = function (s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (regexp.test(s) == true) {
                    if (s.length >= 5) {
                        var lowerUrl = s.toLowerCase();
                        var types = ["jpeg", "jpg", "png", "gif"];
                        for (var i = 0; i < types.length; i++) {
                            var _type = lowerUrl.substr(lowerUrl.length - 5, 5);
                            var ts = _type.split(".");
                            if (ts.length >= 2) {
                                if (ts[1] == types[i]) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
            // method need to be moved some where else
            CopyPasteJQ.CreateLinkContainer = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement == undefined) {
                    selectedElement = jQuery("#nononoelement");
                }
                var container = jQuery(document.createElement("div"));
                impOperaction.Operation.AfterOperationJQ.Execute();
                container.addClass("key empty-container links-container image-text-other");
                selectedElement.append(container);
                var undo = new impUndoManager.Manager.UndoManager();
                undo.BeforeOperation();
                impCommonCode.ControlCommon.Code.DestroyResizable();
                impCommonCode.ControlCommon.Code.Execute();
            };
            CopyPasteJQ.Delete = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (selectedElement != undefined) {
                    if (!(selectedElement.hasClass("jq-Header")
                        ||
                            selectedElement.hasClass("jq-MenuBar")
                        ||
                            selectedElement.hasClass("jq-Content")
                        ||
                            selectedElement.hasClass("jq-Footer"))) {
                        if (selectedElement.hasClass("jq-image-block-image")) {
                            selectedElement.closest(".jq-plus-container").remove();
                        }
                        else if (selectedElement.hasClass("jq-text-block")) {
                            selectedElement.closest(".jq-plus-container").remove();
                        }
                        else {
                            if (selectedElement.hasClass("column")) {
                                var columnsCount = selectedElement.closest(".row").children(".column").length;
                                var columnSize = "";
                                var columnClass = "";
                                if (columnsCount == 2) {
                                    columnClass = "col-xs-48";
                                    columnSize = "48";
                                }
                                if (columnsCount == 3) {
                                    columnClass = "col-xs-24";
                                    columnSize = "24";
                                }
                                if (columnsCount == 4) {
                                    columnClass = "col-xs-16";
                                    columnSize = "16";
                                }
                                var lastColumn;
                                /// then calculate...
                                selectedElement.closest(".row").children(".column").each(function () {
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
                                /// remove here.....
                                selectedElement.remove();
                            }
                            else {
                                selectedElement.remove();
                            }
                        }
                    }
                    else {
                        selectedElement.hide();
                    }
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                }
            };
            CopyPasteJQ.Cut = function () {
                isCut = true;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selecedElement != undefined) {
                    selecedElement.removeClass("image-selection");
                    if (!selecedElement.hasClass("root-elements")) {
                        if (selecedElement.hasClass("jq-image-block-image")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container");
                        }
                        else if (selecedElement.hasClass("jqte")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container");
                        }
                        else {
                            CopiedElement = selecedElement;
                        }
                    }
                    else {
                        CopiedElement = jQuery("#noelement--x");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("You can only cut Text , Image.");
                    }
                }
            };
            CopyPasteJQ.Copy = function () {
                isCut = false;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selecedElement != undefined) {
                    if (!selecedElement.hasClass("root-elements")) {
                        //compulsary.. retain previous height
                        selecedElement.removeClass("image-selection");
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        if (selecedElement.hasClass("jq-image-block-image")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container").clone();
                        }
                        else if (selecedElement.hasClass("jqte")) {
                            CopiedElement = selecedElement.closest(".jq-plus-container").clone();
                        }
                        else {
                            CopiedElement = selecedElement.clone();
                            ;
                        }
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    else {
                        CopiedElement = jQuery("#noelement--x");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("You can only copy Text , Image.");
                    }
                }
            };
            CopyPasteJQ.Paste = function () {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (jQuery(CopiedElement).length == 0) {
                    errorHandler.ActionFail("Please copy/cut a element.");
                    return;
                }
                if (selecedElement != undefined) {
                    if (selecedElement.hasClass("column") || selecedElement.hasClass("image-text-other")) {
                        if (!jQuery.contains(CopiedElement[0], selecedElement[0])) {
                            CopiedElement.children(".ui-resizable-handle").css("margin", 0 + "px");
                            if (isCut == true) {
                                impCommonCode.ControlCommon.Code.DestroyResizable();
                            }
                            impOperaction.Operation.AfterOperationJQ.Execute();
                            if (selecedElement.hasClass("column")) {
                                if (impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                    impWatch.Watch.MouseJQ.nearestElement.after(CopiedElement);
                                }
                                else {
                                    selecedElement.append(CopiedElement);
                                }
                            }
                            else {
                                selecedElement.after(CopiedElement);
                            }
                        }
                        else {
                            errorHandler.ActionFail("You can only cut and paste element in to same element.");
                        }
                        if (isCut == true) {
                            CopiedElement = jQuery("#noelement--x");
                        }
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        isCut = false;
                    }
                    else {
                        errorHandler.ActionFail("Please select a [Column] to paste.");
                    }
                }
            };
            CopyPasteJQ.PasteClipBoard = function () {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (selecedElement != undefined) {
                    if (selecedElement.hasClass("empty-container") || selecedElement.hasClass("column")) {
                        if (CopyPasteJQ.ClipBoardData.data != undefined
                            &&
                                CopyPasteJQ.ClipBoardData.data != "") {
                            if (CopyPasteJQ.IsImageUrl(CopyPasteJQ.ClipBoardData.data)) {
                                var clp = new impClipboard.ClipBoard.ClipBoardJQ();
                                clp.InsertImage(CopyPasteJQ.ClipBoardData.data);
                            }
                            else {
                                var clp = new impClipboard.ClipBoard.ClipBoardJQ();
                                clp.InsertText(CopyPasteJQ.ClipBoardData.data);
                            }
                        }
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                }
                else {
                    errorHandler.ActionFail("You can only paste element to a column and empty blocks.");
                }
            };
            CopyPasteJQ.staticRun = CopyPasteJQ.Const();
            return CopyPasteJQ;
        }());
        CopyPaste.CopyPasteJQ = CopyPasteJQ;
    })(CopyPaste = exports.CopyPaste || (exports.CopyPaste = {}));
});
/// <reference path="../../../scripts/evoluteur.colorpicker/colorpicker-master/js/colorpicker.d.ts" />
/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define("shiv/TypeScript/Controls/BorderJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var isBorderReady = false;
    var borderFirstTime = 0;
    var Border;
    (function (Border) {
        var BorderJQ = (function () {
            function BorderJQ() {
            }
            BorderJQ.prototype.Init = function () {
                BorderJQ.AttachBorder();
            };
            BorderJQ.AttachBorder = function () {
                jQuery(document).ready(function () {
                    if (isBorderReady == false) {
                        isBorderReady = true;
                        jQuery(".border-style").on("click", function () {
                            jQuery(".border-style").parent().removeClass("border-style-selected");
                            jQuery(this).parent().addClass("border-style-selected");
                            BorderJQ.OnChange(this);
                        });
                        jQuery(".border-advanced-show").on("click", function () {
                            jQuery(".jq-border-advanced").fadeToggle(1);
                        });
                        jQuery(".control-border-thickness-radius").spinner({
                            min: 0,
                            max: 5000,
                            step: 1,
                            change: function (event, ui) {
                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-border-thickness").spinner({
                            min: 0,
                            max: 50,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (BorderJQ.isSelectProcessing == false) {
                                    BorderJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        //jQuery(".color-picker").colorpicker({ defaultPalette: 'web'});
                        jQuery(".color-picker").colorpicker();
                        //jQuery('.color-picker').colpick({
                        //    layout: 'hex',
                        //    submit: 0,
                        //    colorScheme: 'dark',
                        //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                        //        $(el).css('border-color', '#' + hex);
                        //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                        //        if (!bySetColor) jQuery(el).val(hex);
                        //        if (jQuery(el).hasClass("color-picker-all")) {
                        //            jQuery(".color-picker").not(".color-picker-all").val(jQuery(el).val() + "");
                        //            jQuery(".color-picker").not(".color-picker-all").colpickSetColor(jQuery(el).val() + "");
                        //        }
                        //        jQuery(el).change();
                        //    },
                        //     onHide: function () {
                        //        var undo = new impUndoManager.Manager.UndoManager();
                        //        undo.BeforeOperation();
                        //    }
                        //}).keyup(function () {
                        //    $(this).colpickSetColor(this.value);
                        //});
                        //jQuery('.color-picker').trigger("keyup");
                        jQuery('.color-picker').on("change", function () {
                            if (BorderJQ.isSelectProcessing == false) {
                                BorderJQ.OnChange(this);
                            }
                        });
                        //jQuery(".border-style").on("click", function () {
                        //    jQuery(".border-style").removeClass("control-border-style-selected");
                        //    jQuery(this).addClass("control-border-style-selected");
                        //});
                        jQuery(BorderJQ.controlBtnApply).on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                                var common = new impCommon.Common.CommonMethodsJQ();
                                var borderLeft = $(this).closest(".control-border-controls").find(".control-border-thickness-left").spinner("value");
                                var borderTop = $(this).closest(".control-border-controls").find(".control-border-thickness-top").spinner("value");
                                var borderRight = $(this).closest(".control-border-controls").find(".control-border-thickness-right").spinner("value");
                                var borderBottom = $(this).closest(".control-border-controls").find(".control-border-thickness-bottom").spinner("value");
                                var borderRadius = $(this).closest(".control-border-controls").find(".control-border-thickness-radius").spinner("value");
                                if (borderRadius != undefined) {
                                    selectedElement.css("border-radius", borderRadius + "px");
                                }
                                if (borderLeft != undefined) {
                                    selectedElement.css("border-left-width", borderLeft + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-left").val();
                                    selectedElement.css("border-left-color", "#" + color);
                                }
                                if (borderTop != undefined) {
                                    selectedElement.css("border-top-width", borderTop + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-top").val();
                                    selectedElement.css("border-top-color", "#" + color);
                                }
                                if (borderRight != undefined) {
                                    selectedElement.css("border-right-width", borderRight + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-right").val();
                                    selectedElement.css("border-right-color", "#" + color);
                                }
                                if (borderBottom != undefined) {
                                    selectedElement.css("border-bottom-width", borderBottom + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-bottom").val();
                                    selectedElement.css("border-bottom-color", "#" + color);
                                }
                                selectedElement.css("border-style", "solid");
                                if (borderLeft == 0 && borderTop == 0 && borderRight == 0 && borderBottom == 0) {
                                    common.RemoveStyle(selectedElement, "border-left-width");
                                    common.RemoveStyle(selectedElement, "border-top-width");
                                    common.RemoveStyle(selectedElement, "border-bottom-width");
                                    common.RemoveStyle(selectedElement, "border-right-width");
                                    common.RemoveStyle(selectedElement, "border-color");
                                    common.RemoveStyle(selectedElement, "border");
                                }
                            }
                            else {
                            }
                        });
                    }
                });
            };
            BorderJQ.OnChange = function ($this) {
                BorderJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (jQuery($this).hasClass("control-border-thickness-all")) {
                            jQuery(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").spinner("value", jQuery($this).val());
                        }
                        if ($($this).hasClass("color-picker-left")) {
                            if ($(".control-border-thickness-left").spinner("value") == 0) {
                                $(".control-border-thickness-left").spinner("value", 1);
                            }
                        }
                        if ($($this).hasClass("color-picker-top")) {
                            if ($(".control-border-thickness-top").spinner("value") == 0) {
                                $(".control-border-thickness-top").spinner("value", 1);
                            }
                        }
                        if ($($this).hasClass("color-picker-right")) {
                            if ($(".control-border-thickness-right").spinner("value") == 0) {
                                $(".control-border-thickness-right").spinner("value", 1);
                            }
                        }
                        if ($($this).hasClass("color-picker-bottom")) {
                            if ($(".control-border-thickness-bottom").spinner("value") == 0) {
                                $(".control-border-thickness-bottom").spinner("value", 1);
                            }
                        }
                        if ($($this).hasClass("color-picker-all")) {
                            if ($(".control-border-thickness-all").spinner("value") == 0) {
                                $(".control-border-thickness-left").spinner("value", 1);
                                $(".control-border-thickness-top").spinner("value", 1);
                                $(".control-border-thickness-right").spinner("value", 1);
                                $(".control-border-thickness-bottom").spinner("value", 1);
                                $(".control-border-thickness-all").spinner("value", 1);
                            }
                        }
                        var common = new impCommon.Common.CommonMethodsJQ();
                        var borderLeft = $(".control-border-thickness-left").spinner("value");
                        var borderTop = $(".control-border-thickness-top").spinner("value");
                        var borderRight = $(".control-border-thickness-right").spinner("value");
                        var borderBottom = $(".control-border-thickness-bottom").spinner("value");
                        var borderRadius = $(".control-border-thickness-radius").spinner("value");
                        if (borderRadius != undefined) {
                            selectedElement.css("border-radius", borderRadius + "px");
                        }
                        if (jQuery($this).hasClass("color-picker-all")) {
                            jQuery(".color-picker").val(jQuery($this).val());
                            jQuery(".color-picker").keyup();
                        }
                        if (borderLeft != undefined) {
                            selectedElement.css("border-left-width", borderLeft + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-left").val();
                            selectedElement.css("border-left-color", "#" + color);
                        }
                        if (borderTop != undefined) {
                            selectedElement.css("border-top-width", borderTop + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-top").val();
                            selectedElement.css("border-top-color", "#" + color);
                        }
                        if (borderRight != undefined) {
                            selectedElement.css("border-right-width", borderRight + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-right").val();
                            selectedElement.css("border-right-color", "#" + color);
                        }
                        if (borderBottom != undefined) {
                            selectedElement.css("border-bottom-width", borderBottom + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-bottom").val();
                            selectedElement.css("border-bottom-color", "#" + color);
                        }
                        if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-solid")) {
                            selectedElement.css("border-style", "solid");
                        }
                        else if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-dotted")) {
                            selectedElement.css("border-style", "dotted");
                        }
                        else if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-dashed")) {
                            selectedElement.css("border-style", "dashed");
                        }
                        else if (jQuery(".border-style-selected").find(".border-style").hasClass("border-style-groove")) {
                            selectedElement.css("border-style", "groove");
                        }
                        if (borderLeft == 0 && borderTop == 0 && borderRight == 0 && borderBottom == 0) {
                            common.RemoveStyle(selectedElement, "border-left-width");
                            common.RemoveStyle(selectedElement, "border-top-width");
                            common.RemoveStyle(selectedElement, "border-bottom-width");
                            common.RemoveStyle(selectedElement, "border-right-width");
                            common.RemoveStyle(selectedElement, "border-color");
                            common.RemoveStyle(selectedElement, "border");
                        }
                        selectedElement.removeClass("image-selection");
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                BorderJQ.isSelectProcessing = false;
            };
            BorderJQ.ProcessSelectedValues = function () {
                BorderJQ.isSelectProcessing = true;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    selectedElement.removeClass("image-selection");
                    var borderLeft = selectedElement.css("border-left-width");
                    var borderTop = selectedElement.css("border-top-width");
                    var borderRight = selectedElement.css("border-right-width");
                    var borderBottom = selectedElement.css("border-bottom-width");
                    var borderRadius = selectedElement.css("border-top-left-radius");
                    var colorLeft = selectedElement.css("border-left-color");
                    var colorTop = selectedElement.css("border-top-color");
                    var colorRight = selectedElement.css("border-right-color");
                    var colorBottom = selectedElement.css("border-bottom-color");
                    if (borderRadius != undefined) {
                        borderRadius = borderRadius.replace("px", "");
                        jQuery(".control-border-thickness-radius").spinner("value", borderRadius);
                    }
                    if (borderLeft != undefined) {
                        borderLeft = borderLeft.replace("px", "");
                        jQuery(".control-border-thickness-left").spinner("value", borderLeft);
                    }
                    if (borderTop != undefined) {
                        borderTop = borderTop.replace("px", "");
                        jQuery(".control-border-thickness-top").spinner("value", borderTop);
                    }
                    if (borderRight != undefined) {
                        borderRight = borderRight.replace("px", "");
                        jQuery(".control-border-thickness-right").spinner("value", borderRight);
                    }
                    if (borderBottom != undefined) {
                        borderBottom = borderBottom.replace("px", "");
                        jQuery(".control-border-thickness-bottom").spinner("value", borderBottom);
                    }
                    if (borderLeft == borderTop && borderLeft == borderRight && borderLeft == borderBottom) {
                        jQuery(".control-border-thickness-all").spinner("value", borderLeft);
                    }
                    if (colorLeft != undefined) {
                        colorLeft = BorderJQ.RgbToHex(colorLeft);
                        jQuery(".color-picker-left").val("#" + colorLeft + "");
                    }
                    if (colorTop != undefined) {
                        colorTop = BorderJQ.RgbToHex(colorTop);
                        jQuery(".color-picker-top").val("#" + colorTop + "");
                    }
                    if (colorRight != undefined) {
                        colorRight = BorderJQ.RgbToHex(colorRight);
                        jQuery(".color-picker-right").val("#" + colorRight + "");
                    }
                    if (colorBottom != undefined) {
                        colorBottom = BorderJQ.RgbToHex(colorBottom);
                        jQuery(".color-picker-bottom").val("#" + colorBottom + "");
                    }
                    if (colorLeft == colorTop && colorLeft == colorRight && colorLeft == colorBottom) {
                        jQuery(".color-picker-all").val("#" + colorLeft + "");
                    }
                    jQuery(".color-picker").keyup();
                    if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {
                        selectedElement.addClass("image-selection");
                    }
                }
                BorderJQ.isSelectProcessing = false;
            };
            BorderJQ.RgbToHex = function (str) {
                try {
                    var rgb = str.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
                    var r;
                    var g;
                    var b;
                    r = Number(rgb[0]);
                    g = Number(rgb[1]);
                    b = Number(rgb[2]);
                    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                }
                catch (ex) {
                    return "";
                }
            };
            BorderJQ.ProcessSelectNotify = function () {
                BorderJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            BorderJQ.controlId = ".control-border";
            BorderJQ.controlBtnApply = ".action-button-border-apply";
            BorderJQ.isSelectProcessing = false;
            return BorderJQ;
        }());
        Border.BorderJQ = BorderJQ;
    })(Border = exports.Border || (exports.Border = {}));
});
/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define("shiv/TypeScript/Controls/ColorJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Common/CommonMethodsJQ"], function (require, exports, impWatch, impUndoManager, impCommon) {
    "use strict";
    var isColorReady = false;
    var Color;
    (function (Color) {
        var ColorJQ = (function () {
            function ColorJQ() {
            }
            ColorJQ.prototype.Init = function () {
                ColorJQ.AttachColor();
            };
            ColorJQ.AttachColor = function () {
                jQuery(document).ready(function () {
                    if (isColorReady == false) {
                        isColorReady = true;
                        //// all remove methods are in color
                        jQuery(".remove-bi").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background-image");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-border").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "border");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-opacity").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "opacity");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-padding").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "padding");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-margin").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "margin");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-gradient").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            else if (selectedElement.hasClass("empty-container-image")) {
                                selectedElement = selectedElement.find(".jq-plus-container-image");
                            }
                            if (selectedElement != undefined) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background");
                                comm.RemoveSingleStyle(selectedElement, "background-color");
                                comm.RemoveSingleStyle(selectedElement, "color");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        // jQuery('.fb-color-picker-gradient').colorpicker({ defaultPalette:'web'});
                        jQuery('.fb-color-picker-gradient').colorpicker();
                        //jQuery('.fb-color-picker-gradient').colpick({
                        //    layout: 'hex',
                        //    submit: 0,
                        //    colorScheme: 'dark',
                        //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                        //        jQuery(el).css('border-color', '#' + hex);
                        //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                        //        if (!bySetColor) jQuery(el).val(hex).change();
                        //    },
                        //    onHide: function () {
                        //        var undo = new impUndoManager.Manager.UndoManager();
                        //        undo.BeforeOperation();
                        //    }
                        //}).keyup(function () {
                        //    $(this).colpickSetColor(this.value);
                        //});
                        //jQuery('.fb-color-picker').colorpicker({ defaultPalette: 'web' }); 
                        jQuery('.fb-color-picker').colorpicker();
                        //jQuery('.fb-color-picker').colpick({
                        //    layout: 'hex',
                        //    submit: 0,  
                        //    colorScheme: 'dark',
                        //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                        //        jQuery(el).css('border-color', '#' + hex);
                        //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                        //        if (!bySetColor) jQuery(el).val(hex).change();
                        //    },
                        //    onHide: function () {
                        //        var undo = new impUndoManager.Manager.UndoManager();
                        //        undo.BeforeOperation(); 
                        //    }
                        //}).keyup(function () {
                        //    $(this).colpickSetColor(this.value);
                        //});
                        jQuery('.fb-color-picker').trigger("keyup");
                        jQuery(".fb-color-picker").on("change", function () {
                            if (ColorJQ.isSelectProcessing == false) {
                                impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (selectedElement.hasClass("empty-container-text")) {
                                    selectedElement = selectedElement.find(".jq-plus-container-text");
                                }
                                else if (selectedElement.hasClass("empty-container-image")) {
                                    selectedElement = selectedElement.find(".jq-plus-container-image");
                                }
                                if (selectedElement != undefined) {
                                    if (jQuery(this).hasClass("control-color-foreground-color")) {
                                        var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
                                        colorForeground = colorForeground.replace("#", "");
                                        selectedElement.css("color", "#" + colorForeground);
                                        if (colorForeground != "") {
                                            selectedElement.each(function (index, $this) {
                                                var $$this = jQuery($this);
                                                if ($$this.hasClass("jq-editor-link") || $$this.hasClass("jq-normal-link")) {
                                                    if (jQuery("page").find("." + $$this.find("a").first().attr("id")).length > 0) {
                                                        jQuery("page").find("." + $$this.find("a").first().attr("id")).html("");
                                                    }
                                                    else {
                                                        var style = "<style class='" + $$this.find("a").first().attr("id") + "'> </span>";
                                                        jQuery("page").append(style);
                                                    }
                                                    var linkId = "#" + $$this.find("a").first().attr("id");
                                                    var linkColor = "#" + colorForeground;
                                                    var style = " " +
                                                        linkId + ":link {" +
                                                        " color:" + linkColor + ";}" +
                                                        linkId + ":visited {" +
                                                        " color:" + linkColor + ";}" +
                                                        linkId + ":hover {" +
                                                        " color:" + linkColor + ";}" +
                                                        linkId + ":active {" +
                                                        " color:" + linkColor + ";}";
                                                    jQuery("page").find("." + $$this.find("a").first().attr("id")).html(style);
                                                }
                                            });
                                        }
                                    }
                                    else if (jQuery(this).hasClass("control-color-background-color")) {
                                        var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                        if (selectedElement.hasClass("empty-container-text")) {
                                        }
                                        colorBackground = colorBackground.replace("#", "");
                                        selectedElement.css("background-color", "#" + colorBackground);
                                    }
                                    var undo = new impUndoManager.Manager.UndoManager();
                                    undo.BeforeOperation();
                                }
                                else {
                                }
                            }
                        });
                        jQuery(".fb-color-picker-gradient").on("change", function () {
                            impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            else if (selectedElement.hasClass("empty-container-image")) {
                                selectedElement = selectedElement.find(".jq-plus-container-image");
                            }
                            if (selectedElement != undefined) {
                                var colorOne = $(this).closest(".control-color-controls").find(".control-color-gradient-color-1").val();
                                var colorTwo = $(this).closest(".control-color-controls").find(".control-color-gradient-color-2").val();
                                colorOne = colorOne.replace("#", "");
                                colorTwo = colorTwo.replace("#", "");
                                var browserSpecificGradient = ["-webkit-linear-gradient", "-o-linear-gradient", "-moz-linear-gradient", "linear-gradient"];
                                for (var i = 0; i < browserSpecificGradient.length; i++) {
                                    selectedElement.css("background", "" + browserSpecificGradient[i] + "(" + "#" + colorOne + "," + "#" + colorTwo + ")");
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                            else {
                            }
                        });
                        jQuery(ColorJQ.controlBtnApply).on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }
                            else if (selectedElement.hasClass("empty-container-image")) {
                                selectedElement = selectedElement.find(".jq-plus-container-image");
                            }
                            if (selectedElement != undefined) {
                                var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
                                selectedElement.css("color", "#" + colorForeground);
                                var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                selectedElement.css("background-color", "#" + colorBackground);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                            else {
                            }
                        });
                    }
                });
            };
            ColorJQ.ProcessSelectedValues = function () {
                ColorJQ.isSelectProcessing = true;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text");
                }
                else if (selectedElement.hasClass("empty-container-image")) {
                    selectedElement = selectedElement.find(".jq-plus-container-image");
                }
                if (selectedElement != undefined) {
                    var str = selectedElement.css("color");
                    if (str != undefined) {
                        str = ColorJQ.RgbToHex(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-foreground-color").val(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-foreground-color").trigger("keyup");
                        jQuery(".control-color-foreground-color").val("#" + str);
                        jQuery(".control-color-foreground-color").trigger("keyup");
                    }
                    var str = selectedElement.css("background-color");
                    if (str != undefined && str != "transparent" && str != "rgba(0, 0, 0, 0)") {
                        str = ColorJQ.RgbToHex(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-background-color").val(str);
                        //jQuery(ColorJQ.controlId).find(".control-color-background-color").trigger("keyup");
                        jQuery(".control-color-background-color").val("#" + str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    }
                    else {
                        str = "transparent";
                        jQuery(".control-color-background-color").val(str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    }
                }
                ColorJQ.isSelectProcessing = false;
            };
            ColorJQ.RgbToHex = function (str) {
                try {
                    var rgb = str.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
                    var r;
                    var g;
                    var b;
                    r = Number(rgb[0]);
                    g = Number(rgb[1]);
                    b = Number(rgb[2]);
                    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                }
                catch (ex) {
                    return "";
                }
            };
            ColorJQ.ProcessSelectNotify = function () {
                ColorJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Color] here", "changecolor");
            };
            ColorJQ.controlId = "#control-color";
            ColorJQ.controlBtnApply = ".action-button-color-apply";
            ColorJQ.isSelectProcessing = false;
            return ColorJQ;
        }());
        Color.ColorJQ = ColorJQ;
    })(Color = exports.Color || (exports.Color = {}));
});
define("shiv/TypeScript/SmartMenu/SmartMenuJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var isSmartMenuReady = false;
    var isChangedWidth = false;
    var prevWidthValue = 0;
    var Smart;
    (function (Smart) {
        var SmartMenuJQ = (function () {
            function SmartMenuJQ() {
            }
            SmartMenuJQ.prototype.Init = function () {
                SmartMenuJQ.AttachSmartMenu();
            };
            SmartMenuJQ.ImageHeightProcessing = function (selectedElement, heightVal, widthVal) {
                if (selectedElement.hasClass("jq-image-block-image")) {
                    if (heightVal != '') {
                        var htv = (Number(heightVal) + 55);
                        selectedElement.parent().closest(".key").css("height", htv + "px");
                        selectedElement.parent().closest(".jq-image-block").css("height", (Number(heightVal) + 20) + "px");
                    }
                    if (widthVal != '') {
                        var wtv = (Number(widthVal) + 35);
                        selectedElement.parent().closest(".key").css("width", wtv + "px");
                        selectedElement.parent().closest(".jq-image-block").css("width", (Number(widthVal) + 20) + "px");
                    }
                }
                if (selectedElement.hasClass("jq-image-block-container")) {
                    if (heightVal != '') {
                        var htv = (Number(heightVal) - 60);
                        selectedElement.find(".key").css("height", htv + "px");
                        selectedElement.find(".jq-image-block").css("height", (Number(heightVal) - 30) + "px");
                    }
                    if (widthVal != '') {
                        var wtv = (Number(widthVal) - 35);
                        selectedElement.find(".key").css("width", wtv + "px");
                        selectedElement.find(".jq-image-block").css("width", (Number(widthVal) - 15) + "px");
                    }
                }
            };
            SmartMenuJQ.TextBlockProcessing = function (selectedElement, heightVal, widthVal) {
                if (selectedElement.hasClass("jq-text-block")) {
                    if (heightVal != '') {
                        var htv = (Number(heightVal));
                        selectedElement.parent().closest(".key").css("height", htv + "px");
                    }
                    if (widthVal != '') {
                        var wtv = (Number(widthVal));
                        selectedElement.parent().closest(".key").css("width", wtv + "px");
                    }
                }
                if (selectedElement.hasClass("jq-text-block-container")) {
                    if (heightVal != '') {
                        var htv = (Number(heightVal));
                        selectedElement.find(".key").css("height", htv + "px");
                    }
                    if (widthVal != '') {
                        var wtv = (Number(widthVal));
                        selectedElement.find(".key").css("width", wtv + "px");
                    }
                }
            };
            SmartMenuJQ.AttachSmartMenu = function () {
                jQuery(document).ready(function () {
                    if (isSmartMenuReady == false) {
                        isSmartMenuReady = true;
                        jQuery("#sm").on("click", function () {
                        });
                        jQuery(".smart-menu-width").spinner({
                            min: 0,
                            max: 2000,
                            step: 1,
                            change: function (event, ui) {
                                //if (SmartMenuJQ.isSelectProcessing == false) {
                                //    SmartMenuJQ.OnChange(this, "width");
                                //}
                            },
                            spin: function (event, ui) {
                                //if (SmartMenuJQ.isSelectProcessing == false) {
                                //    SmartMenuJQ.OnChange(this, "width");
                                //}
                            },
                            stop: function (event, ui) {
                                if (prevWidthValue != jQuery(this).val()) {
                                    isChangedWidth = true;
                                }
                                var flag = "-";
                                if (prevWidthValue > jQuery(this).val()) {
                                    flag = "+";
                                }
                                else {
                                    flag = "-";
                                }
                                prevWidthValue = jQuery(this).val();
                                if (isChangedWidth == true) {
                                    isChangedWidth = false;
                                    if (SmartMenuJQ.isSelectProcessing == false) {
                                        SmartMenuJQ.OnChange(this, "width");
                                    }
                                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                    if (selectedElement != undefined && !selectedElement.hasClass("row") && !selectedElement.hasClass("root-elements")) {
                                        var undo = new impUndoManager.Manager.UndoManager();
                                        undo.BeforeOperation();
                                    }
                                }
                            }
                        });
                        jQuery(".smart-menu-height").spinner({
                            min: 0,
                            max: 5000,
                            step: 1,
                            change: function (event, ui) {
                                if (SmartMenuJQ.isSelectProcessing == false) {
                                    SmartMenuJQ.OnChange(this, "height");
                                }
                            },
                            slide: function (event, ui) {
                                if (SmartMenuJQ.isSelectProcessing == false) {
                                    SmartMenuJQ.OnChange(this, "height");
                                }
                            },
                            stop: function (event, ui) {
                                if (SmartMenuJQ.isSelectProcessing == false) {
                                    SmartMenuJQ.OnChange(this, "height");
                                }
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".smart-menu-collapse-close").on("click", function () {
                            jQuery("#sm").find(".smart-menu-controls").slideUp();
                            jQuery("#sm").find(".smart-menu-collapse-show").removeClass("hide");
                            jQuery(this).addClass("hide");
                        });
                        jQuery(".smart-menu-collapse-show").on("click", function () {
                            jQuery("#sm").find(".smart-menu-controls").slideDown();
                            jQuery("#sm").find(".smart-menu-collapse-close").removeClass("hide");
                            jQuery(this).addClass("hide");
                        });
                        jQuery(".smart-menu-controls").on("mouseenter", function () {
                            ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).removeClass("success-notify-background");
                            ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).removeClass("error-notify-background");
                            ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("<div class='yellow-notify-background'> Select any control and change [Height], [Width]." +
                            ////    "<br>You cannot change width for column blocks.<br>You cannot change width for Header, MenuBar, Body, Footer.</div>");
                            ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "block");
                            //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                            //errorHandler.ActionHelp("Select any control and change [Height], [Width].");
                        });
                        jQuery(".smart-menu-controls").on("mouseleave", function () {
                            jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("");
                            jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                        });
                        jQuery(".smart-menu-button-apply").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            var errorHandler = new impError.ErrorHandle.ErrorJQ();
                            var widthVal = $(this).closest(".smart-menu-controls-table").find(".smart-menu-width").spinner("value");
                            var heightVal = $(this).closest(".smart-menu-controls-table").find(".smart-menu-height").spinner("value");
                            if (selectedElement != undefined) {
                                if (selectedElement.hasClass("column")) {
                                    SmartMenuJQ.ProcessColumnWidth(widthVal);
                                    selectedElement.css("min-height", heightVal + "px");
                                }
                                else {
                                    selectedElement.css("width", widthVal + "px");
                                    if (selectedElement.hasClass("row") || selectedElement.hasClass("column")) {
                                        selectedElement.css("min-height", heightVal + "px");
                                    }
                                    else {
                                        selectedElement.css("height", heightVal + "px");
                                    }
                                }
                            }
                        });
                    }
                });
            };
            SmartMenuJQ.OnChange = function ($this, whclass) {
                impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-text-block-container").first();
                }
                else if (selectedElement.hasClass("empty-container-image")) {
                    selectedElement = selectedElement.find(".jq-plus-container-image").first();
                }
                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    var widthVal = $($this).closest(".smart-menu-controls-table").find(".smart-menu-width").spinner("value");
                    var heightVal = $($this).closest(".smart-menu-controls-table").find(".smart-menu-height").spinner("value");
                    if (selectedElement.hasClass("column")) {
                        if (whclass == "width") {
                            SmartMenuJQ.ProcessColumnWidth(widthVal);
                        }
                        if (whclass == "height") {
                            selectedElement.css("min-height", heightVal + "px");
                        }
                    }
                    else {
                        if (whclass == "width") {
                            if (!selectedElement.hasClass("root-elements") && !selectedElement.hasClass("row")) {
                                selectedElement.css("width", widthVal + "px");
                            }
                        }
                        if (whclass == "height") {
                            if (selectedElement.hasClass("row") || selectedElement.hasClass("column") || selectedElement.hasClass("root-elements")) {
                                selectedElement.css("min-height", heightVal + "px");
                            }
                            else {
                                selectedElement.css("min-height", heightVal + "px");
                                selectedElement.css("height", heightVal + "px");
                            }
                        }
                    }
                }
                else {
                }
            };
            SmartMenuJQ.ProcessColumnWidth = function (width) {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text").first();
                }
                else if (selectedElement.hasClass("empty-container-image")) {
                    selectedElement = selectedElement.find(".jq-plus-container-image").first();
                }
                if (selectedElement != undefined) {
                    var width = width;
                    var originalWidth = selectedElement.width();
                    var rowWidth = jQuery(selectedElement).parent().width();
                    var onePercentPixels = Math.floor((1 * rowWidth) / 100);
                    var colXsOnePercentage = 2;
                    var colXsOnePixels = colXsOnePercentage * onePercentPixels;
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    var style = jQuery(selectedElement).attr("style");
                    commonMethods.RemoveStyle(selectedElement, "min-width");
                    commonMethods.RemoveStyle(selectedElement, "width");
                    var twoFour = 48;
                    if (width > originalWidth) {
                        var emptyXsCount = 0;
                        var nextElements = jQuery(selectedElement).nextAll(".column");
                        try {
                            var columns = selectedElement.parent().children(".column");
                            var count = 0;
                            for (var j = 0; j < columns.length; j++) {
                                var size = jQuery(columns[j]).attr("xs-column-size");
                                if (size != undefined && size != "") {
                                    var num = Number(size);
                                    count += num;
                                }
                            }
                            if (count < twoFour) {
                                emptyXsCount = twoFour - count;
                            }
                            var extenedWidth = width - originalWidth;
                            var colXs = Math.floor(extenedWidth / colXsOnePixels);
                            // alert(colXs);
                            if (colXs == 0) {
                                colXs = 1;
                            }
                            var nextElementsCount = jQuery(selectedElement).nextAll(".column").length;
                            var eachXs = Math.floor(colXs / nextElementsCount);
                            if (eachXs == 0) {
                                eachXs = 1;
                            }
                            var colXsTemp = colXs;
                            for (var i = 0; i < nextElements.length; i++) {
                                if (colXsTemp > 0) {
                                    var nextXsSize = Number(jQuery(nextElements[i]).attr("xs-column-size"));
                                    if (nextXsSize == 1) {
                                        continue;
                                    }
                                    var newNextXsSize = nextXsSize - eachXs;
                                    if (newNextXsSize < 1) {
                                        colXsTemp = colXsTemp - eachXs + 1;
                                        newNextXsSize = 1;
                                    }
                                    else {
                                        colXsTemp = colXsTemp - eachXs;
                                    }
                                    jQuery(nextElements[i]).removeClass("col-xs-" + nextXsSize);
                                    jQuery(nextElements[i]).addClass("col-xs-" + newNextXsSize);
                                    jQuery(nextElements[i]).attr("xs-column-size", newNextXsSize);
                                }
                                else {
                                    break;
                                }
                            }
                            var xsSize = Number(selectedElement.attr("xs-column-size"));
                            // modified
                            var newXsSize = xsSize + colXs - colXsTemp; // + emptyXsCount;
                            // added
                            if (colXs == colXsTemp) {
                                newXsSize = newXsSize + colXsTemp;
                            }
                            var allXs = 0;
                            selectedElement.parent().children(".column").each(function () {
                                allXs += Number(jQuery(this).attr("xs-column-size"));
                            });
                            var overallMinusCurrent = allXs - xsSize;
                            var g = overallMinusCurrent + newXsSize;
                            while (g > twoFour) {
                                newXsSize--;
                                g--;
                            }
                            jQuery(selectedElement).removeClass("col-xs-" + xsSize);
                            jQuery(selectedElement).addClass("col-xs-" + newXsSize);
                            selectedElement.attr("xs-column-size", newXsSize);
                        }
                        catch (ex) {
                        }
                        nextElements.show();
                    }
                    else if (width < originalWidth) {
                        var nextElements = jQuery(selectedElement).nextAll(".column");
                        try {
                            var extenedWidth = originalWidth - width;
                            var colXs = Math.floor(extenedWidth / colXsOnePixels);
                            // alert(colXs);
                            if (colXs == 0) {
                                colXs = 1;
                            }
                            var eachXs = Math.floor(colXs / 1);
                            if (eachXs == 0) {
                                eachXs = 1;
                            }
                            var xsSize = Number(selectedElement.attr("xs-column-size"));
                            if (xsSize > 1) {
                                var eachXsTemp = eachXs;
                                var newXsSize = xsSize - eachXs;
                                if (newXsSize < 0) {
                                    eachXsTemp = eachXs + newXsSize;
                                    newXsSize = 1;
                                }
                                if (newXsSize == 0) {
                                    eachXsTemp = eachXs - 1;
                                    newXsSize = 1;
                                }
                                jQuery(selectedElement).removeClass("col-xs-" + xsSize);
                                jQuery(selectedElement).addClass("col-xs-" + newXsSize);
                                selectedElement.attr("xs-column-size", newXsSize);
                                var colXsTemp = colXs;
                                if (colXsTemp > 0) {
                                    var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size"));
                                    var newNextXsSize = nextXsSize + eachXsTemp;
                                    /////////////// over all compresser
                                    var allXs = 0;
                                    selectedElement.parent().children(".column").each(function () {
                                        allXs += Number(jQuery(this).attr("xs-column-size"));
                                    });
                                    var overallMinusNext = allXs - Number(jQuery(nextElements[0]).attr("xs-column-size"));
                                    ;
                                    var g = overallMinusNext + newNextXsSize;
                                    while (g > twoFour) {
                                        newNextXsSize--;
                                        g--;
                                    }
                                    //////////////////////////////////////
                                    jQuery(nextElements[0]).removeClass("col-xs-" + nextXsSize);
                                    jQuery(nextElements[0]).addClass("col-xs-" + newNextXsSize);
                                    jQuery(nextElements[0]).attr("xs-column-size", newNextXsSize);
                                }
                            }
                        }
                        catch (ex) {
                        }
                        nextElements.show();
                    }
                    var nextElementsToShow = jQuery(selectedElement).nextAll(".column");
                    nextElementsToShow.show();
                }
            };
            SmartMenuJQ.ProcessSelectedValues = function () {
                SmartMenuJQ.isSelectProcessing = true;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text").first();
                }
                else if (selectedElement.hasClass("empty-container-image")) {
                    selectedElement = selectedElement.find(".jq-plus-container-image").first();
                }
                if (selectedElement != undefined) {
                    var heightstr = selectedElement.css("height");
                    if (heightstr != undefined) {
                        heightstr.replace("%", "");
                        if (heightstr.indexOf("%") > -1) {
                        }
                        else {
                            heightstr = heightstr.replace("px", "");
                        }
                    }
                    var widthstr = selectedElement.css("width");
                    if (widthstr != undefined) {
                        widthstr.replace("%", "");
                        if (widthstr.indexOf("%") > -1) {
                        }
                        else {
                            widthstr = widthstr.replace("px", "");
                        }
                    }
                    //jQuery("#control-height-width").find(".smart-menu-height").spinner("value", heightstr);
                    //jQuery("#control-height-width").find(".smart-menu-width").spinner("value", widthstr);
                    jQuery(".smart-menu-height").spinner("value", heightstr);
                    jQuery(".smart-menu-width").spinner("value", widthstr);
                    SmartMenuJQ.isSelectProcessing = false;
                }
            };
            SmartMenuJQ.ProcessSelectNotify = function () {
                SmartMenuJQ.ProcessSelectedValues();
            };
            SmartMenuJQ.smartMenuIconId = ".smart-menu-icon";
            SmartMenuJQ.smartMenuId = ".smart-menu";
            SmartMenuJQ.isSelectProcessing = false;
            return SmartMenuJQ;
        }());
        Smart.SmartMenuJQ = SmartMenuJQ;
    })(Smart = exports.Smart || (exports.Smart = {}));
});
define("shiv/TypeScript/cssManager/cssManagerJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var CssManager;
    (function (CssManager) {
        var Menu = (function () {
            function Menu() {
            }
            return Menu;
        }());
        CssManager.Menu = Menu;
        var CssManagerJQ = (function () {
            function CssManagerJQ() {
                this.cssPath = "/Content/Menus/[MenuName]/[Color]/menu.css";
                this.jsPath = "/Content/Menus/[MenuName]/[Color]/menu.js";
                this.htmlPath = "/Content/Menus/[MenuName]/[Color]/index.html";
                this.Menus = [
                    {
                        Id: 1,
                        MenuName: "2",
                        Color: "green",
                        HtmlPath: "",
                        MenuId: 2
                    },
                    {
                        Id: 2,
                        MenuName: "2",
                        Color: "blue",
                        HtmlPath: "",
                        MenuId: 3
                    }
                ];
            }
            CssManagerJQ.prototype.GetHtml = function (fileId) {
                try {
                    this.Menus[fileId];
                    var m;
                    m = this.Menus[fileId];
                    var html = this.htmlPath.replace("[MenuName]", m.MenuName);
                    html = html.replace("[Color]", m.Color);
                    return html;
                }
                catch (ex) {
                }
            };
            CssManagerJQ.prototype.Add = function (fileId) {
                try {
                    this.Menus[fileId];
                    var m;
                    m = this.Menus[fileId];
                    var css = this.cssPath.replace("[MenuName]", m.MenuName);
                    css = css.replace("[Color]", m.Color);
                    var js = this.jsPath.replace("[MenuName]", m.MenuName);
                    js = js.replace("[Color]", m.Color);
                    jQuery("head").append("<link menu-id='" + m.Id + "' rel='stylesheet' href='" + css + "'/>");
                    jQuery("head").append("<script menu-id='" + m.Id + "' type='text/javascript' src='" + js + "'> </script>");
                }
                catch (ex) {
                }
            };
            CssManagerJQ.prototype.Remove = function (fileId) {
                try {
                    this.Menus[fileId];
                    jQuery("link[menu-id=' " + fileId + "']").remove();
                    jQuery("script[menu-id='" + fileId + "']").remove();
                }
                catch (ex) {
                }
            };
            return CssManagerJQ;
        }());
        CssManager.CssManagerJQ = CssManagerJQ;
    })(CssManager = exports.CssManager || (exports.CssManager = {}));
});
define("shiv/TypeScript/Menu/MenuLinksJQ", ["require", "exports", "shiv/typescript/error/errorjq"], function (require, exports, impError) {
    "use strict";
    var Page;
    (function (Page) {
        var Menu;
        (function (Menu) {
            var MenuLinksJQ = (function () {
                function MenuLinksJQ() {
                }
                MenuLinksJQ.prototype.Get = function (id) {
                    var MenuLinks;
                    if (id == 1) {
                        return MenuLinks = [
                            {
                                name: 'home',
                                pageLocation: '#',
                                text: 'Home',
                                subLinks: [
                                    {
                                        name: 'SubLink Home 1',
                                        pageLocation: '/x2',
                                        text: 'SubLink Home 1',
                                        subLinks: [
                                            {
                                                name: 'SubLink Home 1.1',
                                                pageLocation: '/x1',
                                                text: 'SubLink Home 1.1   ',
                                                subLinks: [
                                                    {
                                                        name: 'SubLink Home 1.1.1',
                                                        pageLocation: 'x2',
                                                        text: 'SubLink Home 1.1.1',
                                                        subLinks: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "Contact",
                                pageLocation: '/eventvideos',
                                text: 'Contact Us',
                                subLinks: []
                            },
                            {
                                name: "About",
                                pageLocation: '#',
                                text: 'About Us',
                                subLinks: [
                                    {
                                        name: 'SubLink Home 1',
                                        pageLocation: '/x2',
                                        text: 'SubLink Home 1',
                                        subLinks: [
                                            {
                                                name: 'SubLink Home 1.1',
                                                pageLocation: '/x1',
                                                text: 'SubLink Home 1.1   ',
                                                subLinks: [
                                                    {
                                                        name: 'SubLink Home 1.1.1',
                                                        pageLocation: 'x2',
                                                        text: 'SubLink Home 1.1.1',
                                                        subLinks: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ];
                    }
                    else if (id == 2) {
                        return [
                            {
                                name: 'Home',
                                pageLocation: '/x1',
                                text: 'Home',
                                subLinks: [
                                    {
                                        name: 'SubLink Home 1',
                                        pageLocation: '/x2',
                                        text: 'SubLink Home 1',
                                        subLinks: [
                                            {
                                                name: 'SubLink Home 1.1',
                                                pageLocation: '/x1',
                                                text: 'SubLink Home 1.1   ',
                                                subLinks: [
                                                    {
                                                        name: 'SubLink Home 1.1.1',
                                                        pageLocation: 'x2',
                                                        text: 'SubLink Home 1.1.1',
                                                        subLinks: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'About',
                                pageLocation: 'x1',
                                text: 'About',
                                externalLocation: true,
                                subLinks: [
                                    {
                                        name: 'SubLink About 1',
                                        pageLocation: '/x2',
                                        text: 'SubLink About 1',
                                        subLinks: [
                                            {
                                                name: 'SubLink About 1.1',
                                                pageLocation: '/x1',
                                                text: 'SubLink About 1.1',
                                                subLinks: [
                                                    {
                                                        name: 'SubLink About 1.1.1',
                                                        pageLocation: 'x2',
                                                        text: 'SubLink About 1.1.1',
                                                        subLinks: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ];
                    }
                    else if (id == 3) {
                        return [
                            {
                                name: 'Home',
                                pageLocation: '/nopage',
                                text: 'Home',
                                subLinks: [
                                    {
                                        name: 'SubLink Home 1',
                                        pageLocation: 'x1',
                                        text: 'SubLink Home 1',
                                        subLinks: []
                                    }
                                ]
                            },
                            {
                                name: 'About',
                                pageLocation: 'x2',
                                text: 'About',
                                externalLocation: true,
                                subLinks: []
                            },
                            {
                                name: 'Video Samples',
                                pageLocation: 'http://www.http.com',
                                text: 'Video Samples',
                                subLinks: []
                            },
                            {
                                name: "Event",
                                pageLocation: '/eventvideos',
                                text: 'Event',
                                subLinks: [
                                    {
                                        name: "Videos",
                                        pageLocation: '/eventvideos',
                                        text: 'Videos',
                                        subLinks: []
                                    }
                                ]
                            }
                        ];
                    }
                    else {
                        new impError.ErrorHandle.ErrorJQ().LogMessage("menu not found");
                    }
                };
                return MenuLinksJQ;
            }());
            Menu.MenuLinksJQ = MenuLinksJQ;
        })(Menu = Page.Menu || (Page.Menu = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Menu/MenuTemplateJQ", ["require", "exports", "shiv/TypeScript/_Classes/UrlJQ", "shiv/TypeScript/Menu/MenuLinksJQ"], function (require, exports, impCommonUrl, impMenuLinks) {
    "use strict";
    var firstElementActive = false;
    var Page;
    (function (Page) {
        var Menu;
        (function (Menu) {
            var MenuTemplateJQ = (function () {
                function MenuTemplateJQ() {
                    this.menuOneId = 1;
                    this.menuTwoId = 2;
                    this.menuThreeId = 3;
                    this.menuFourId = 4;
                    this.menuFiveId = 5;
                }
                MenuTemplateJQ.prototype.CreateMenuTemplate = function (id, className, menuLinks, menuDesignId) {
                    if (menuLinks == undefined) {
                        menuLinks = new impMenuLinks.Page.Menu.MenuLinksJQ().Get(id);
                        this.currentMenuLinks = menuLinks;
                    }
                    var menuContainer;
                    if (menuLinks != undefined && menuLinks.length > 0) {
                        menuContainer = jQuery("<div  id='menu-" + (menuDesignId) + "' class='jqMenuContainer" + className + "'> </div>");
                        var menuUl = this.CreateUL('menu', menuLinks);
                        menuContainer.append(menuUl);
                        menuContainer.prepend("<div class='rotator'></div>");
                    }
                    //alert(menuContainer.html());
                    return menuContainer;
                };
                MenuTemplateJQ.prototype.CreateUL = function (ulName, menuLinks, level) {
                    if (level === void 0) { level = 1; }
                    var menuUl = jQuery("<ul class='" + ulName + "'> </ul>");
                    var urlJQ = new impCommonUrl.Common.UrlJQ();
                    for (var i = 0; i < menuLinks.length; i++) {
                        var pageLocation = menuLinks[i].pageLocation;
                        var href = urlJQ.PreparePageHref(pageLocation);
                        var parent = "";
                        if (menuLinks[i].subLinks != undefined && menuLinks[i].subLinks.length > 0) {
                            parent = "has-children";
                        }
                        var menuitemLink = ' <a class="li ' + parent + '" href="' + href + '"> ' + menuLinks[i].text + '</a> ';
                        if (menuitemLink == undefined) {
                            menuitemLink = '';
                        }
                        var idName = menuLinks[i].name;
                        if (idName != undefined) {
                            idName = idName.toString().replace(/\s+/g, '');
                            idName = idName.toUpperCase();
                            idName = "jqPrimaryMenu-" + idName;
                        }
                        var menuitem = jQuery("<li> " + menuitemLink + "</li> ");
                        menuUl.append(menuitem);
                        var subMenuUl;
                        if (menuLinks[i].subLinks != undefined && menuLinks[i].subLinks.length > 0) {
                            level++;
                            subMenuUl = this.CreateUL('jqSubMenuUl', menuLinks[i].subLinks, level);
                            level--;
                        }
                        if (subMenuUl != undefined) {
                            jQuery(menuitem).append(subMenuUl);
                        }
                        if (level == 1 && firstElementActive == false) {
                            firstElementActive = true;
                            menuitem.addClass("active");
                            menuitem.find(".li").first().addClass("active-link");
                        }
                        menuitem.addClass("level-" + level);
                    }
                    return menuUl;
                };
                return MenuTemplateJQ;
            }());
            Menu.MenuTemplateJQ = MenuTemplateJQ;
        })(Menu = Page.Menu || (Page.Menu = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Controls/Menujq", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Page/Context/ContextJQ", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/cssManager/cssManagerJQ", "shiv/TypeScript/Menu/MenuTemplateJQ"], function (require, exports, impError, impPageCtx, impWatch, impCommonCode, impCssManager, impMenuTemplate) {
    "use strict";
    var debug = true;
    var globalMenuontainerId = 0;
    var isMenuJQReady = false;
    var isTextInit = false;
    var nextId = 0;
    var Menu;
    (function (Menu) {
        var MenuJQ = (function () {
            function MenuJQ() {
            }
            MenuJQ.prototype.InitInsert = function () {
            };
            MenuJQ.prototype.GenerateContainerScopeId = function () {
                return "Menu_Container_" + ++globalMenuontainerId;
            };
            MenuJQ.prototype.Init = function () {
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
            };
            MenuJQ.AttachNextMenu = function () {
                jQuery(".control-menu-next").on("click", function () {
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
            };
            MenuJQ.AttachPrevMenu = function () {
                jQuery(".control-menu-prev").on("click", function () {
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
            };
            MenuJQ.AttachClose = function () {
                jQuery(".control-menu").find(".close-button").on("click", function () {
                    jQuery(this).closest('.control-page').hide();
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html('');
                });
            };
            MenuJQ.AttachInsertMenu = function () {
                jQuery(".control-menu").find(".control-menu-insert").on("click", function (e, s) {
                    var cssMan = new impCssManager.CssManager.CssManagerJQ();
                    if (nextId >= 0 && nextId < cssMan.Menus.length) {
                        var menuDesignId = cssMan.Menus[nextId].MenuId;
                        var mt = new impMenuTemplate.Page.Menu.MenuTemplateJQ();
                        var menu = mt.CreateMenuTemplate(1, "", undefined, menuDesignId);
                        var menuObj = new MenuJQ();
                        var ctx = new impPageCtx.Page.ContextJQ();
                        var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                        if (selectedRowOrColumn != undefined) {
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
                                impCommonCode.ControlCommon.Code.DestroyResizable();
                                impCommonCode.ControlCommon.Code.Execute();
                            }
                            cssMan.Add(nextId);
                        }
                    }
                });
            };
            MenuJQ.ProcessShow = function () {
                var cssman = new impCssManager.CssManager.CssManagerJQ();
                nextId = 0;
                var src = cssman.GetHtml(nextId);
                var iframe = jQuery(document.createElement("iframe"));
                iframe.attr("src", src);
                iframe.addClass("menu-iframe");
                jQuery(".control-menu-styles").html("");
                jQuery(".control-menu-styles").append(iframe);
            };
            MenuJQ.ProcessSelectNotify = function () {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {
                        errorHandler.ActionHelp("Help : You cannot [Text] insert here.");
                    }
                }
            };
            return MenuJQ;
        }());
        Menu.MenuJQ = MenuJQ;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
define("shiv/TypeScript/Controls/BIjq", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Controls/ImageJQ"], function (require, exports, impWatch, impUnodManager, impImage) {
    "use strict";
    var debug = true;
    var isBIJQReady = false;
    var nextId = 0;
    var BI;
    (function (BI) {
        var BIJQ = (function () {
            function BIJQ() {
            }
            BIJQ.prototype.Init = function () {
                jQuery(document).ready(function () {
                    if (isBIJQReady == false) {
                        isBIJQReady = true;
                        jQuery(".smart-menu-bi-control").spinner({
                            min: 0,
                            max: 2000,
                            step: 1,
                            change: function (event, ui) {
                            },
                            spin: function (event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (selectedElement != undefined) {
                                    var height = jQuery(".smart-menu-bi-height").spinner("value");
                                    var width = jQuery(".smart-menu-bi-width").spinner("value");
                                    selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                }
                            },
                            stop: function (event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (selectedElement != undefined) {
                                    var height = jQuery(".smart-menu-bi-height").spinner("value");
                                    var width = jQuery(".smart-menu-bi-width").spinner("value");
                                    selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                    var undo = new impUnodManager.Manager.UndoManager();
                                    undo.BeforeOperation();
                                }
                            }
                        });
                        jQuery(".bi-browse").on("click", function () {
                            impImage.Image.SelfJQ.GetImages();
                            jQuery("#control-image-bi-library").show();
                        });
                        jQuery(".make-100").on("click", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                jQuery(".ddn-bi-pixel-type").val("%");
                                var height = 100;
                                jQuery(".smart-menu-bi-height").spinner("value", height);
                                var width = 100;
                                jQuery(".smart-menu-bi-width").spinner("value", width);
                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".ddn-bi-pixel-type").on("change", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                var height = jQuery(".smart-menu-bi-height").spinner("value");
                                var width = jQuery(".smart-menu-bi-width").spinner("value");
                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".action-button-insert-bi-image").on("click", function () {
                            var src = jQuery(".image-library-bi-select").first().attr("src");
                            jQuery(".bi-selected-image").val(src).change();
                            jQuery(".image-library-image").removeClass("image-library-bi-select");
                            jQuery("#control-image-bi-library").hide();
                        });
                        jQuery(".control-bi-controls .bi-selected-image").on("change", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            var applyToBody = jQuery(".bi-body").is(':checked');
                            if (applyToBody == true) {
                                jQuery("page").css("background-image", "url('" + jQuery(this).val() + "')");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                            else if (selectedElement != undefined) {
                                selectedElement.css("background-image", "url('" + jQuery(this).val() + "')");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .internet-bi-image-url").on("change", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-repeat").on("change", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-repeat", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-attachment").on("change", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-attachment", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-position").on("change", function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-position", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            BIJQ.ProcessSelectNotify = function () {
                BIJQ.isSelectProcessing = true;
                try {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var bi = selectedElement.css("background-image").replace('url(', '').replace(')', '');
                        jQuery(".bi-selected-image").val(bi);
                        var repeat = selectedElement.css("background-repeat");
                        jQuery(".ddn-bi-repeat").val(repeat);
                        var attachment = selectedElement.css("background-attachment");
                        jQuery(".ddn-bi-attachment").val(attachment);
                        var position = selectedElement.css("background-position");
                        jQuery(".ddn-bi-position").val(position);
                        var backgroundSize = selectedElement.css("background-size");
                        if (backgroundSize != undefined) {
                            var wh = backgroundSize.split(" ");
                            if (wh.length >= 2) {
                                var width = wh[0];
                                var heigth = wh[1];
                                jQuery(".ddn-bi-pixel-type").val("px");
                                width = width.replace("px", "");
                                heigth = heigth.replace("px", "");
                                jQuery(".smart-menu-bi-height").spinner("value", heigth);
                                jQuery(".smart-menu-bi-width").spinner("value", width);
                            }
                            else {
                                jQuery(".smart-menu-bi-height").spinner("value", 0);
                                jQuery(".smart-menu-bi-width").spinner("value", 0);
                            }
                        }
                    }
                }
                catch (ex) {
                }
                BIJQ.isSelectProcessing = false;
            };
            BIJQ.isSelectProcessing = false;
            return BIJQ;
        }());
        BI.BIJQ = BIJQ;
    })(BI = exports.BI || (exports.BI = {}));
});
define("shiv/TypeScript/Controls/SpacerJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Page/Context/ContextJQ"], function (require, exports, impWatch, impPageCtx) {
    "use strict";
    var Spacer;
    (function (Spacer) {
        var SpacerJQ = (function () {
            function SpacerJQ() {
            }
            SpacerJQ.InsertSpacer = function () {
                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedRowOrColumn != undefined) {
                    if (selectedRowOrColumn.hasClass("column") == true
                        || selectedRowOrColumn.hasClass("empty-container-text")
                        || selectedRowOrColumn.hasClass("empty-container-image")
                        || selectedRowOrColumn.hasClass("empty-container") || window.smartObj != null) {
                        var ctx = new impPageCtx.Page.ContextJQ();
                        var emptyc = document.createElement("span");
                        jQuery(emptyc).addClass("empty-container empty-container-spacer key image-text-other design-css design-empty-css");
                        jQuery(emptyc).css("font-size", "14px");
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container-not-used");
                        var spacer = jQuery(document.createElement("div"));
                        spacer.addClass("empty-spacer");
                        spacer.html("<center></center>");
                        plusContainer.find(".jq-plus-content").append(spacer);
                        jQuery(emptyc).append(plusContainer);
                        if (window.smartObj == null || window.smartObj.command == "") {
                            ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, undefined, undefined);
                        }
                        else {
                            ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, true, undefined);
                        }
                    }
                }
            };
            return SpacerJQ;
        }());
        Spacer.SpacerJQ = SpacerJQ;
    })(Spacer = exports.Spacer || (exports.Spacer = {}));
});
/// <reference path="../../sitemanager_ts/site/sitejq.ts" />
define("shiv/TypeScript/Controls/LinkJQ", ["require", "exports", "shiv/sitemanager_ts/site/sitejq", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/Common/OperationJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impError, impWatch, impUndoManager, impCommonCode, impOperaction, impStatic) {
    "use strict";
    var initOnceFlag = false;
    var Link;
    (function (Link) {
        var LinkJQ = (function () {
            function LinkJQ() {
            }
            LinkJQ.prototype.Init = function () {
                if (initOnceFlag == false) {
                    initOnceFlag = true;
                    this.AttachEvents();
                }
            };
            LinkJQ.LoadLinks = function () {
                var site = new impPage.Site.SiteJQ();
                site.GetPages(jQuery(".input-site-name").val(), LinkJQ.OnGetPagesSuccess, LinkJQ.OnGetPagesError);
            };
            LinkJQ.OnGetPagesSuccess = function (data, status) {
                jQuery(".jq-loading").hide();
                var result = data.d;
                jQuery(".insert-link-links").html("");
                for (var i = 0; i < result.length; i++) {
                    var select;
                    if (i == 0) {
                        select = "<option selected value='" + result[i].Name + "'>" + result[i].Name.replace(".html", "") + "</option>";
                    }
                    else {
                        select = "<option value='" + result[i].Name + "'>" + result[i].Name.replace(".html", "") + "</option>";
                    }
                    jQuery(".insert-link-links").append(select);
                }
                jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());
                var previewlink = LinkJQ.CreateCurrentLink(true);
                jQuery(".insert-link-preview").html(previewlink);
            };
            LinkJQ.OnGetPagesError = function (request, status, error) {
                jQuery(".jq-loading").hide();
                jQuery(".insert-link-links").html("");
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Something went wrong<br>Try again later!");
            };
            LinkJQ.GenerateId = function () {
                return "NormalLink" + ++impStatic.Constants.StaticJQ.normalLinkId;
            };
            LinkJQ.prototype.AttachEvents = function () {
                jQuery("#insert-internet-link-url").on("change", function () {
                    LinkJQ.IsExternalUrl = true;
                    jQuery("#insert-internet-link-name").val("Give Name");
                    var value;
                    value = jQuery("#insert-internet-link-url").val();
                    if (value.length > 0) {
                        while (value.charAt(0) == ' ')
                            value = value.substring(1);
                    }
                    if (value != "") {
                        var i = value.indexOf("http://");
                        var j = value.indexOf("https://");
                        var k = value.indexOf("//");
                        if (i != 0 && j != 0 && k != 0) {
                            jQuery(this).val("//" + jQuery(this).val());
                        }
                    }
                    else {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionHelp("Please provide External Link Url.");
                    }
                    var previewlink = LinkJQ.CreateCurrentLink(true, jQuery(this).val(), jQuery("#insert-internet-link-name").val());
                    jQuery(".insert-link-preview").html(previewlink);
                });
                jQuery("#insert-internet-link-name").on("change", function () {
                    LinkJQ.IsExternalUrl = true;
                    if (jQuery(this).val() != "Give Name") {
                        var previewlink = LinkJQ.CreateCurrentLink(true, jQuery("#insert-internet-link-url").val(), jQuery(this).val());
                        jQuery(".insert-link-preview").html(previewlink);
                        var value = jQuery("#insert-internet-link-url").val();
                        if (value.length > 0) {
                            while (value.charAt(0) == ' ')
                                value = value.substring(1);
                        }
                        if (value == "") {
                            var errorHandler = new impError.ErrorHandle.ErrorJQ();
                            errorHandler.ActionHelp("Please provide External Link Url.");
                        }
                    }
                });
                jQuery(".btn-style").on("click", function () {
                    jQuery(".btn-style").removeClass("btn-style-selected");
                    jQuery(this).addClass("btn-style-selected");
                    var previewlink;
                    if (LinkJQ.IsExternalUrl == true) {
                        previewlink = LinkJQ.CreateCurrentLink(true, jQuery("#insert-internet-link-url").val(), jQuery("#insert-internet-link-name").val());
                    }
                    else {
                        previewlink = LinkJQ.CreateCurrentLink(true);
                    }
                    jQuery(".insert-link-preview").html(previewlink);
                });
                jQuery(".action-button-insert-link").on("click", function () {
                    var linkToInsert;
                    if (LinkJQ.IsExternalUrl == true) {
                        linkToInsert = LinkJQ.CreateCurrentLink(false, jQuery("#insert-internet-link-url").val(), jQuery("#insert-internet-link-name").val());
                    }
                    else {
                        linkToInsert = LinkJQ.CreateCurrentLink(false);
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        selectedElement.append(linkToInsert);
                        var undo = new impUndoManager.Manager.UndoManager();
                        undo.BeforeOperation();
                        jQuery("page a").not(".jq-logout").unbind("click");
                        jQuery("page a").not(".jq-logout").on("click", function () {
                            impCommonCode.ControlCommon.Code.AnchorClicked = true;
                        });
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    jQuery("#control-insert-link").hide();
                });
                jQuery(".insert-link-name").on("change", function () {
                    LinkJQ.IsExternalUrl = false;
                    var previewlink = LinkJQ.CreateCurrentLink(true);
                    jQuery(".insert-link-preview").find("a").text(jQuery(this).val());
                });
                jQuery("#control-insert-link").on("change", ".insert-link-links", function () {
                    LinkJQ.IsExternalUrl = false;
                    jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());
                    var previewlink = LinkJQ.CreateCurrentLink(true);
                    jQuery(".insert-link-preview").html(previewlink);
                    jQuery("#insert-internet-link-name").val("");
                    jQuery("#insert-internet-link-url").val("");
                });
            };
            LinkJQ.CreateCurrentLink = function (blankTarget, url, name) {
                var link;
                var id;
                if (blankTarget == false) {
                    id = LinkJQ.GenerateId();
                }
                if (url == undefined) {
                    //url = jQuery(".input-current-location").val() + "/"
                    //+ jQuery(".input-site-id").val() + "/"
                    //+ jQuery(".input-site-name").val() + "/" +
                    url = jQuery(".insert-link-links").find('option:selected').val();
                }
                var btnStyle = jQuery(".btn-style-selected").attr("btn-style");
                if (btnStyle == undefined) {
                    btnStyle = " btn-default ";
                }
                if (name == undefined) {
                    name = jQuery(".insert-link-name").val();
                }
                if (blankTarget == true) {
                    link = "<span style='display:inline-block;;float:none;' class='key jq-normal-link jq-site-link-container  btn " + btnStyle + "'><a contentEditable='true' target='_blank' class='jq-site-link jqte-editor" + "' href='"
                        + url
                        + "?nocache=true'>" + name + "</a></span>";
                }
                else {
                    link = "<span style='display:inline-block' class='key jq-normal-link jq-site-link-container  btn " + btnStyle + "'><a contentEditable='true' id='" + id + "' class='jq-site-link jqte-editor " + "' href='"
                        + url
                        + "?nocache=true'>" + name + "</a></span>";
                }
                return link;
            };
            LinkJQ.Show = function () {
                jQuery("#control-insert-link").show();
                jQuery(".jq-loading").show();
                LinkJQ.LoadLinks();
            };
            LinkJQ.Close = function () {
            };
            LinkJQ.ProcessSelectNotify = function () {
            };
            return LinkJQ;
        }());
        Link.LinkJQ = LinkJQ;
    })(Link = exports.Link || (exports.Link = {}));
});
define("shiv/TypeScript/Controls/HtmlJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Controls/ControlCommonJQ"], function (require, exports, impWatch, impUndoManager, impCommonCode) {
    "use strict";
    var initOnceFlag = false;
    var Html;
    (function (Html) {
        var HtmlJQ = (function () {
            function HtmlJQ() {
            }
            HtmlJQ.prototype.Init = function () {
                if (initOnceFlag == false) {
                    initOnceFlag = true;
                    this.AttachEvents();
                }
            };
            HtmlJQ.prototype.AttachEvents = function () {
                jQuery(".action-button-insert-html-clear").on("click", function () {
                    jQuery(".input-html").val("");
                });
                jQuery(".action-button-insert-html").on("click", function () {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var html = jQuery(".input-html").val();
                        var htmlObj = jQuery(document.createElement("div"));
                        htmlObj.css("float", "left");
                        htmlObj.addClass("key empty-container design-empty-css");
                        htmlObj.css("height", "100px");
                        htmlObj.append(jQuery.parseHTML(html, document, true));
                        var innerHtml = jQuery(htmlObj).html();
                        selectedElement.append(htmlObj);
                        var undo = new impUndoManager.Manager.UndoManager();
                        undo.BeforeOperation();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    jQuery("#control-insert-html").hide();
                });
            };
            HtmlJQ.Show = function () {
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-html").addClass("control-active");
                jQuery("#control-insert-html").show();
                jQuery(".input-html").val("");
            };
            HtmlJQ.Close = function () {
            };
            HtmlJQ.ProcessSelectNotify = function () {
            };
            return HtmlJQ;
        }());
        Html.HtmlJQ = HtmlJQ;
    })(Html = exports.Html || (exports.Html = {}));
});
/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define("shiv/TypeScript/Controls/MarginJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var isBorderReady = false;
    var borderFirstTime = 0;
    var Margin;
    (function (Margin) {
        var MarginJQ = (function () {
            function MarginJQ() {
            }
            MarginJQ.prototype.Init = function () {
                MarginJQ.AttachMargin();
            };
            MarginJQ.AttachMargin = function () {
                jQuery(document).ready(function () {
                    if (isBorderReady == false) {
                        isBorderReady = true;
                        jQuery(".margin-advanced-show").on("click", function () {
                            jQuery(".jq-margin-advanced").fadeToggle(1);
                        });
                        jQuery(".control-margin-margin").spinner({
                            min: -1500,
                            max: 1500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (MarginJQ.isSelectProcessing == false) {
                                    MarginJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (MarginJQ.isSelectProcessing == false) {
                                    MarginJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (MarginJQ.isSelectProcessing == false) {
                                    MarginJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            MarginJQ.OnChange = function ($this) {
                MarginJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (!selectedElement.hasClass("column")) {
                            if (jQuery($this).hasClass("control-margin-all")) {
                                $($this).closest(".control-margin-controls").find(".control-margin-margin").not(".control-margin-all").spinner("value", jQuery($this).val());
                            }
                            var common = new impCommon.Common.CommonMethodsJQ();
                            var left = $($this).closest(".control-margin-controls").find(".control-margin-left").spinner("value");
                            var top = $($this).closest(".control-margin-controls").find(".control-margin-top").spinner("value");
                            var right = $($this).closest(".control-margin-controls").find(".control-margin-right").spinner("value");
                            var bottom = $($this).closest(".control-margin-controls").find(".control-margin-bottom").spinner("value");
                            if (left != undefined) {
                                selectedElement.css("margin-left", left + "px");
                            }
                            if (top != undefined) {
                                selectedElement.css("margin-top", top + "px");
                            }
                            if (right != undefined) {
                                selectedElement.css("margin-right", right + "px");
                            }
                            if (bottom != undefined) {
                                selectedElement.css("margin-bottom", bottom + "px");
                            }
                            if (left == 0 && top == 0 && right == 0 && bottom == 0) {
                                common.RemoveStyle(selectedElement, "margin-left");
                                common.RemoveStyle(selectedElement, "margin-top");
                                common.RemoveStyle(selectedElement, "margin-bottom");
                                common.RemoveStyle(selectedElement, "margin-right");
                                common.RemoveStyle(selectedElement, "margin");
                            }
                        }
                        else {
                            errorHandler.ActionHelp("Cannot change margin for [Column] blocks");
                        }
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                MarginJQ.isSelectProcessing = false;
            };
            MarginJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                MarginJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    var left = selectedElement.css("margin-left");
                    var top = selectedElement.css("margin-top");
                    var right = selectedElement.css("margin-right");
                    var bottom = selectedElement.css("margin-bottom");
                    if (left != undefined) {
                        left = left.replace("px", "");
                        jQuery(".control-margin-left").spinner("value", left);
                    }
                    if (top != undefined) {
                        top = top.replace("px", "");
                        jQuery(".control-margin-top").spinner("value", top);
                    }
                    if (right != undefined) {
                        right = right.replace("px", "");
                        jQuery(".control-margin-right").spinner("value", right);
                    }
                    if (bottom != undefined) {
                        bottom = bottom.replace("px", "");
                        jQuery(".control-margin-bottom").spinner("value", bottom);
                    }
                    if (left == top && left == right && left == bottom) {
                        jQuery(".control-margin-all").spinner("value", left);
                    }
                }
                MarginJQ.isSelectProcessing = false;
            };
            MarginJQ.ProcessSelectNotify = function () {
                MarginJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            MarginJQ.controlId = ".control-margin";
            MarginJQ.isSelectProcessing = false;
            return MarginJQ;
        }());
        Margin.MarginJQ = MarginJQ;
    })(Margin = exports.Margin || (exports.Margin = {}));
});
/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />
define("shiv/TypeScript/Controls/PaddingJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var isBorderReady = false;
    var borderFirstTime = 0;
    var Padding;
    (function (Padding) {
        var PaddingJQ = (function () {
            function PaddingJQ() {
            }
            PaddingJQ.prototype.Init = function () {
                PaddingJQ.AttachPadding();
            };
            PaddingJQ.AttachPadding = function () {
                jQuery(document).ready(function () {
                    if (isBorderReady == false) {
                        isBorderReady = true;
                        jQuery(".padding-advanced-show").on("click", function () {
                            jQuery(".jq-padding-advanced").fadeToggle(1);
                        });
                        jQuery(".control-padding-padding").spinner({
                            min: 1,
                            max: 1500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (PaddingJQ.isSelectProcessing == false) {
                                    PaddingJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (PaddingJQ.isSelectProcessing == false) {
                                    PaddingJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (PaddingJQ.isSelectProcessing == false) {
                                    PaddingJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            PaddingJQ.OnChange = function ($this) {
                PaddingJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (jQuery($this).hasClass("control-padding-all")) {
                            jQuery(".control-padding-padding").not(".control-padding-all").spinner("value", jQuery($this).val());
                        }
                        var common = new impCommon.Common.CommonMethodsJQ();
                        var left = $(".control-padding-left").spinner("value");
                        var top = $(".control-padding-top").spinner("value");
                        var right = $(".control-padding-right").spinner("value");
                        var bottom = $(".control-padding-bottom").spinner("value");
                        if (left != undefined) {
                            selectedElement.css("padding-left", left + "px");
                        }
                        if (top != undefined) {
                            selectedElement.css("padding-top", top + "px");
                        }
                        if (right != undefined) {
                            selectedElement.css("padding-right", right + "px");
                        }
                        if (bottom != undefined) {
                            selectedElement.css("padding-bottom", bottom + "px");
                        }
                        if (left == 0 && top == 0 && right == 0 && bottom == 0) {
                            common.RemoveStyle(selectedElement, "padding-left");
                            common.RemoveStyle(selectedElement, "padding-top");
                            common.RemoveStyle(selectedElement, "padding-bottom");
                            common.RemoveStyle(selectedElement, "padding-right");
                            common.RemoveStyle(selectedElement, "padding");
                        }
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                PaddingJQ.isSelectProcessing = false;
            };
            PaddingJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                PaddingJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    var left = selectedElement.css("padding-left");
                    var top = selectedElement.css("padding-top");
                    var right = selectedElement.css("padding-right");
                    var bottom = selectedElement.css("padding-bottom");
                    if (left != undefined) {
                        left = left.replace("px", "");
                        jQuery(".control-padding-left").spinner("value", left);
                    }
                    if (top != undefined) {
                        top = top.replace("px", "");
                        jQuery(".control-padding-top").spinner("value", top);
                    }
                    if (right != undefined) {
                        right = right.replace("px", "");
                        jQuery(".control-padding-right").spinner("value", right);
                    }
                    if (bottom != undefined) {
                        bottom = bottom.replace("px", "");
                        jQuery(".control-padding-bottom").spinner("value", bottom);
                    }
                    if (left == top && left == right && left == bottom) {
                        jQuery(".control-padding-all").spinner("value", left);
                    }
                }
                PaddingJQ.isSelectProcessing = false;
            };
            PaddingJQ.ProcessSelectNotify = function () {
                PaddingJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            PaddingJQ.controlId = ".control-padding";
            PaddingJQ.isSelectProcessing = false;
            return PaddingJQ;
        }());
        Padding.PaddingJQ = PaddingJQ;
    })(Padding = exports.Padding || (exports.Padding = {}));
});
define("shiv/TypeScript/Controls/FrontBackJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impUndoManager) {
    "use strict";
    var isFrontBackReady = false;
    var borderFirstTime = 0;
    var FrontBack;
    (function (FrontBack) {
        var FrontBackJQ = (function () {
            function FrontBackJQ() {
            }
            FrontBackJQ.prototype.Init = function () {
                FrontBackJQ.AttachFrontBack();
            };
            FrontBackJQ.AttachFrontBack = function () {
                jQuery(document).ready(function () {
                    if (isFrontBackReady == false) {
                        isFrontBackReady = true;
                        jQuery(".control-z-zindex").slider({
                            min: 1,
                            max: 500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {
                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            FrontBackJQ.OnChange = function ($this) {
                FrontBackJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (selectedElement.hasClass("image-text-other")) {
                            var zIndex = jQuery(".control-z-zindex").slider("value");
                            selectedElement.css("z-index", zIndex);
                        }
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                FrontBackJQ.isSelectProcessing = false;
            };
            FrontBackJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                FrontBackJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("image-text-other")) {
                        var zindex = selectedElement.css("z-index");
                        jQuery(".control-z-zindex").slider("value", zindex);
                    }
                }
                FrontBackJQ.isSelectProcessing = false;
            };
            FrontBackJQ.ProcessSelectNotify = function () {
                FrontBackJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            FrontBackJQ.isSelectProcessing = false;
            return FrontBackJQ;
        }());
        FrontBack.FrontBackJQ = FrontBackJQ;
    })(FrontBack = exports.FrontBack || (exports.FrontBack = {}));
});
define("shiv/TypeScript/Controls/OpacityJQ", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impUndoManager) {
    "use strict";
    var isOpacityReady = false;
    var borderFirstTime = 0;
    var Opacity;
    (function (Opacity) {
        var OpacityJQ = (function () {
            function OpacityJQ() {
            }
            OpacityJQ.prototype.Init = function () {
                OpacityJQ.AttachOpacity();
            };
            OpacityJQ.AttachOpacity = function () {
                jQuery(document).ready(function () {
                    if (isOpacityReady == false) {
                        isOpacityReady = true;
                        jQuery(".control-o-opacity").slider({
                            min: 0,
                            max: 1,
                            step: 0.1,
                            value: 1,
                            change: function (event, ui) {
                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                            },
                            slide: function (event, ui) {
                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            OpacityJQ.OnChange = function ($this) {
                OpacityJQ.isSelectProcessing = true;
                try {
                    if (borderFirstTime != 0) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        var opacity = jQuery(".control-o-opacity").slider("value");
                        selectedElement.css("opacity", opacity);
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                OpacityJQ.isSelectProcessing = false;
            };
            OpacityJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                OpacityJQ.isSelectProcessing = true;
                if (selectedElement != undefined) {
                    var opacity = selectedElement.css("opacity");
                    jQuery(".control-o-opacity").slider("value", opacity);
                }
                OpacityJQ.isSelectProcessing = false;
            };
            OpacityJQ.ProcessSelectNotify = function () {
                OpacityJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            OpacityJQ.isSelectProcessing = false;
            return OpacityJQ;
        }());
        Opacity.OpacityJQ = OpacityJQ;
    })(Opacity = exports.Opacity || (exports.Opacity = {}));
});
var Datad = (function () {
    function Datad() {
    }
    return Datad;
}());
/// <reference path="spinner.ts" />
define("shiv/TypeScript/Controls/BorderShadow", ["require", "exports", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/UndoManager/UndoManager"], function (require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var isBorderReady = false;
    var BorderShadow;
    (function (BorderShadow) {
        var BorderShadowJQ = (function () {
            function BorderShadowJQ() {
            }
            BorderShadowJQ.prototype.Init = function () {
                BorderShadowJQ.AttachBorder();
            };
            BorderShadowJQ.AttachBorder = function () {
                jQuery(document).ready(function () {
                    if (isBorderReady == false) {
                        isBorderReady = true;
                        jQuery(".b-s-remove").on("click", function () {
                            var cm = new impCommon.Common.CommonMethodsJQ();
                            jQuery(".control-b-s").spinner("value", 0);
                            jQuery(".b-s-color").val("000000").keyup();
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            cm.RemoveStyle(selectedElement, "box-shadow");
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        });
                        jQuery(".b-s-glow").on("click", function () {
                            jQuery(".control-b-s").spinner("value", 0);
                            jQuery(".control-b-s-blur").spinner("value", 35);
                            jQuery(".b-s-color").val("0000FF").keyup();
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        });
                        //jQuery('.b-s-color').colorpicker({ defaultPalette: 'web' }); 
                        jQuery('.b-s-color').colorpicker();
                        //jQuery('.b-s-color').colpick({
                        //    layout: 'hex',
                        //    submit: 0,
                        //    colorScheme: 'dark',
                        //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                        //        jQuery(el).css('border-color', '#' + hex);
                        //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                        //        if (!bySetColor) jQuery(el).val(hex).change();
                        //    },
                        //    onHide: function () {
                        //        var undo = new impUndoManager.Manager.UndoManager();
                        //        undo.BeforeOperation();
                        //    }
                        //}).keyup(function () {
                        //    $(this).colpickSetColor(this.value);
                        //});
                        jQuery('.b-s-colorr').trigger("keyup");
                        jQuery(".b-s-color").on("change", function () {
                            BorderShadowJQ.OnChange(this);
                        });
                        jQuery(".control-b-s").spinner({
                            min: -800,
                            max: 800,
                            step: 1,
                            value: 1,
                            change: function (event, ui) {
                                if (BorderShadowJQ.isSelectProcessing == false) {
                                    BorderShadowJQ.OnChange(this);
                                }
                            },
                            spin: function (event, ui) {
                                if (BorderShadowJQ.isSelectProcessing == false) {
                                    BorderShadowJQ.OnChange(this);
                                }
                            },
                            stop: function (event, ui) {
                                if (BorderShadowJQ.isSelectProcessing == false) {
                                    BorderShadowJQ.OnChange(this);
                                }
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            BorderShadowJQ.OnChange = function ($this) {
                BorderShadowJQ.isSelectProcessing = true;
                try {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        //BorderShadowJQ.i++;
                        //errorHandler.ActionHelp("box shadow : " + selectedElement.css("box-shadow"));
                        var h = jQuery(".control-b-s-h").spinner("value");
                        var v = jQuery(".control-b-s-v").spinner("value");
                        var blur = jQuery(".control-b-s-blur").spinner("value");
                        var color = jQuery('.b-s-color').val();
                        if (color == "") {
                            color = "#000000";
                        }
                        else {
                            color = color.replace("#", "");
                            color = "#" + color;
                        }
                        var borderShadow = h + "px" + " " + v + "px" + " "
                            + blur + "px" + " " + color;
                        selectedElement.css("box-shadow", borderShadow);
                    }
                    else {
                    }
                }
                catch (ex) {
                }
                BorderShadowJQ.isSelectProcessing = false;
            };
            BorderShadowJQ.ProcessSelectedValues = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                }
            };
            BorderShadowJQ.ProcessSelectNotify = function () {
                BorderShadowJQ.ProcessSelectedValues();
                //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
            };
            BorderShadowJQ.i = 0;
            BorderShadowJQ.isSelectProcessing = false;
            return BorderShadowJQ;
        }());
        BorderShadow.BorderShadowJQ = BorderShadowJQ;
    })(BorderShadow = exports.BorderShadow || (exports.BorderShadow = {}));
});
/// <reference path="../../../library/jquery.d.ts" />
define("shiv/TypeScript/ContextMenu/ContextMenuJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Controls/ControlsJQ", "shiv/TypeScript/Watch/CopyPasteJQ", "shiv/TypeScript/Controls/ImageJQ", "shiv/TypeScript/Controls/BorderJQ", "shiv/TypeScript/Controls/ColorJQ", "shiv/TypeScript/Controls/TextJQ", "shiv/TypeScript/SmartMenu/SmartMenuJQ", "shiv/TypeScript/Controls/Menujq", "shiv/TypeScript/Controls/BIjq", "shiv/TypeScript/Controls/SpacerJQ", "shiv/TypeScript/Controls/LinkJQ", "shiv/TypeScript/Controls/HtmlJQ", "shiv/TypeScript/Controls/MarginJQ", "shiv/TypeScript/Controls/PaddingJQ", "shiv/TypeScript/Controls/FrontBackJQ", "shiv/TypeScript/Controls/OpacityJQ", "shiv/TypeScript/Controls/BorderShadow"], function (require, exports, impWatch, impAddRowControl, impCopy, impInsertImage, impBorder, impColor, impText, impHeightWidth, impMenuControl, impBi, impSpacer, impLink, impHtml, impMargin, impPadding, impFrontBack, impOpacity, impBorderShadow) {
    "use strict";
    var G_isAttachedContextMenu = false;
    var CTX_MENU_DISABLED_CLASS = "ctx-menu-disabled";
    var ctxMenuIsReady = false;
    var isBreak = false;
    var ContextMenu;
    (function (ContextMenu) {
        var ContextMenuJQ = (function () {
            function ContextMenuJQ(extra) {
                this.controlId = "#contextMenu";
            }
            ContextMenuJQ.prototype.Init = function () {
                this.MainEvents();
            };
            ContextMenuJQ.ContextMenuBinding = function () {
                // context menu event ...
                jQuery(document).on("click", function (e) {
                    var contextMenu = new ContextMenuJQ();
                    contextMenu.DetectContextMenu();
                });
                jQuery(document).bind("contextmenu", function (e) {
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    window.setTimeout(function () {
                        try {
                            impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");
                            var x = e.clientX;
                            var y = e.clientY + $(document).scrollTop();
                            jQuery(".nearest-element").removeClass("nearest-element");
                            var column = impWatch.Watch.MouseJQ.selectedElement;
                            if (impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other")) {
                                column = impWatch.Watch.MouseJQ.selectedElement.closest(".column");
                            }
                            if (column.hasClass("column")) {
                                var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other");
                                var nearestLeftArray = [];
                                var nearestTopArray = [];
                                if ($elements.length > 0) {
                                    $elements.each(function (index, _this) {
                                        var $this = $(_this);
                                        var top = parseFloat($this.attr("top"));
                                        var bottom = parseFloat($this.attr("bottom"));
                                        var left = parseFloat($this.attr("left"));
                                        if (y >= top && y <= bottom && x >= left) {
                                            nearestLeftArray.push(left);
                                            nearestTopArray.push(top);
                                        }
                                    });
                                    var nearestLeft = 0;
                                    var nearestTop = 0;
                                    if (nearestLeftArray.length > 0) {
                                        nearestLeft = Math.max.apply(Math, nearestLeftArray);
                                    }
                                    if (nearestTopArray.length > 0) {
                                        nearestTop = Math.max.apply(Math, nearestTopArray);
                                    }
                                    column.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");
                                    impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();
                                }
                            }
                        }
                        catch (ex) {
                        }
                    }, 5);
                    e.preventDefault();
                    //var x = e.clientX;
                    //var y = e.clientY;
                    //jQuery(".nearest-element").removeClass(".nearest-element");
                    //if (impWatch.Watch.MouseJQ.selectedElement.hasClass("column")) {
                    //    var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other");
                    //    var nearestArray = [];
                    //    if ($elements.length > 0) {
                    //        $elements.each(function (index, _this) {
                    //            var $this = $(_this);
                    //            var top = parseFloat($this.attr("top"));
                    //            var bottom = parseFloat($this.attr("bottom"));
                    //            var left = parseFloat($this.attr("left"));
                    //            if (y >= top && y <= bottom && x >= left) {
                    //                nearestArray.push(left);
                    //            }
                    //        });
                    //        var nearest = Math.max.apply(Math, nearestArray);
                    //        impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other[left='" + nearest + "']").addClass("nearest-element");
                    //        impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element");
                    //    }
                    //}
                    var contextMenu = new ContextMenuJQ();
                    contextMenu.DetectContextMenu();
                    // adjustment based on windows
                    var pageY = e.clientY;
                    if ((pageY) >= 350) {
                        pageY = pageY - jQuery("#contextMenu").height();
                    }
                    //var eh = new impError.ErrorHandle.ErrorJQ();
                    //eh.ActionHelp(pageY.toString());
                    var pageX = e.clientX;
                    if (pageX > (jQuery(document).width() - 200)) {
                        pageX = pageX - 150;
                    }
                    /////////////////
                    jQuery(contextMenu.controlId).css("left", pageX + "px"); // For updating the menu position.
                    jQuery(contextMenu.controlId).css("top", pageY + "px"); // 
                    jQuery(contextMenu.controlId).fadeIn(500); //  For bringing the context menu in picture.
                    // To prevent the default context menu.
                    e.cancelBubble = false;
                });
            };
            ContextMenuJQ.prototype.DetectContextMenu = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    jQuery(".ctx-menu-add-row").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-cut").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-text").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-image").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-youtube").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-html").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-css").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-menu").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-empty-space").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-link").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-object").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-delete-element").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    if (selectedElement.hasClass("root-elements")) {
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("jqRootRow")) {
                        jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("column")) {
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("image-text-other")) {
                        jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("page")) {
                        jQuery(".ctx-menu-add-row").parent().addClass(CTX_MENU_DISABLED_CLASS); /// exceptional case..
                        jQuery(".ctx-menu-height-width").parent().addClass(CTX_MENU_DISABLED_CLASS); /// exceptional case..
                    }
                }
            };
            ContextMenuJQ.AttachDeleteElement = function () {
                jQuery(".li.ctx-menu-delete-element").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.DeleteElement();
                });
            };
            ContextMenuJQ.AttachInsertLinkContainer = function () {
                jQuery(".li.ctx-menu-insert-link-container").on("click", function () {
                    window.smartObj = null;
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    //to be moved to other class
                    impCopy.CopyPaste.CopyPasteJQ.CreateLinkContainer();
                });
            };
            ContextMenuJQ.AttachInsertLink = function () {
                new impLink.Link.LinkJQ().Init();
                jQuery(".ctx-menu-insert-link").on("click", function () {
                    window.smartObj = null;
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowControlInsertLink();
                    impLink.Link.LinkJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachInsertHTML = function () {
                new impHtml.Html.HtmlJQ().Init();
                jQuery(".ctx-menu-insert-html").on("click", function () {
                    window.smartObj = null;
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowControlInsertHTML();
                });
            };
            ContextMenuJQ.AttachInsertText = function () {
                jQuery(".li.smart-menu-insert-text").on("click", function () {
                    //if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    //    return;
                    //}
                    //ContextMenuJQ.ShowControlInsertText();
                    impText.Text.TextJQ.InsertTextBlock("Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".li.ctx-menu-insert-text").on("click", function () {
                    window.smartObj = null;
                    //if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    //    return;
                    //}
                    //ContextMenuJQ.ShowControlInsertText();
                    impText.Text.TextJQ.InsertTextBlock("Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-normal-text").on("click", function () {
                    impText.Text.TextJQ.InsertTextBlock(" Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-1").on("click", function () {
                    impText.Text.TextJQ.InsertTextBlock("<h1> Heading1 to edit</h1>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-2").on("click", function () {
                    impText.Text.TextJQ.InsertTextBlock("<h2> Heading2 to edit</h2>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-3").on("click", function () {
                    impText.Text.TextJQ.InsertTextBlock("<h3> Heading3 to edit</h3>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-4").on("click", function () {
                    impText.Text.TextJQ.InsertTextBlock("<h4> Heading4 to edit</h4>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-5").on("click", function () {
                    impText.Text.TextJQ.InsertTextBlock("<h5> Heading5 to edit</h5>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachControlPageClose = function () {
                jQuery(".control-templates").find(".close-button").on("click", function () {
                    jQuery(".control-page").removeClass("control-active");
                    ContextMenuJQ.ShowProperties();
                });
                jQuery(".control-page").find(".close-button").on("click", function () {
                    jQuery(".control-page").removeClass("control-active");
                    ContextMenuJQ.ShowProperties();
                    jQuery(".internet-bi-image-url").val("");
                    jQuery(".internet-image-url").val("");
                });
            };
            ContextMenuJQ.ShowProperties = function () {
                if (!jQuery(".jq-properties-all").hasClass("forced-hide")) {
                    jQuery(".jq-properties-all").show();
                }
            };
            ContextMenuJQ.ControlPageHide = function () {
                jQuery(".control-page").hide();
                jQuery(".control-page").attr("style", "");
                jQuery(".control-page").css("display", "none");
                jQuery(".control-page").removeClass("control-active");
                if (jQuery(".jq-properties-all").css("display") == "block") {
                    jQuery(".jq-properties-all").addClass("normal-hide");
                    jQuery(".jq-properties-all").hide();
                }
                else {
                    if (!jQuery(".jq-properties-all").hasClass("forced-hide")) {
                        jQuery(".jq-properties-all").show();
                    }
                }
            };
            ContextMenuJQ.ShowControlInsertLink = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-link").addClass("control-active");
                impLink.Link.LinkJQ.Show();
            };
            ContextMenuJQ.ShowControlInsertHTML = function () {
                ContextMenuJQ.ControlPageHide();
                impHtml.Html.HtmlJQ.Show();
            };
            ContextMenuJQ.ShowControlInsertText = function () {
                ContextMenuJQ.ControlPageHide();
                ////////////////////////// show editor
                //var topRowPx = "180px";
                //var topNotifyPx = "105px";
                //jQuery("rootx").css("top", topRowPx);
                //jQuery(".designer-top-row").css("height", topRowPx);
                //jQuery("#notify").css("top", topNotifyPx);
                jQuery(".editor").show();
                /////////////////////////////////
                jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                jQuery(this).find(".jqte-editor").addClass("current-editor-scope");
                //////////////////////////
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-text").addClass("control-active");
                jQuery("#control-insert-text").show();
                jQuery("#control-insert-text").trigger("cust_loaded");
            };
            ContextMenuJQ.ShowControlAddRow = function () {
                ContextMenuJQ.ControlPageHide();
                var controlId = impAddRowControl.Page.AddRowJQ.pageId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(controlId).show();
                jQuery(controlId).trigger('cust_loaded');
            };
            ContextMenuJQ.ShowMenu = function () {
                new impMenuControl.Menu.MenuJQ().Init();
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery(".control-menu").addClass("control-active");
                jQuery(".control-menu").show();
                impMenuControl.Menu.MenuJQ.ProcessShow();
                //jQuery("control-menu").trigger('cust_loaded');
            };
            ContextMenuJQ.InsertImage = function () {
                ContextMenuJQ.ControlPageHide();
                var controlId = impInsertImage.Image.SelfJQ.controlId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(".action-button-insert-image").show();
                jQuery(".action-button-change-image").hide();
                jQuery(controlId).show();
                jQuery(controlId).trigger('custom_loaded');
            };
            ContextMenuJQ.CopyElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Copy();
            };
            ContextMenuJQ.DeleteElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Delete();
            };
            ContextMenuJQ.CutElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Cut();
            };
            ContextMenuJQ.PasteElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Paste();
            };
            ContextMenuJQ.PasteClipBorad = function () {
                jQuery(".jq-clipboard").html("");
                jQuery("#control-insert-clipboard").show();
                //impCopy.CopyPaste.CopyPasteJQ.PasteClipBoard(); // no need to call. it will be called in paste event.
            };
            ContextMenuJQ.ShowControlHeightWidth = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-height-width").addClass("control-active");
                jQuery("#control-height-width").show();
            };
            ContextMenuJQ.ShowBorderControl = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border").addClass("control-active");
                jQuery("#control-border").show();
            };
            ContextMenuJQ.ShowMarginControl = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-margin").addClass("control-active");
                jQuery("#control-margin").show();
            };
            ContextMenuJQ.ShowPaddingControl = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-padding").addClass("control-active");
                jQuery("#control-padding").show();
            };
            ContextMenuJQ.ShowOpacity = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-opacity").addClass("control-active");
                jQuery("#control-opacity").show();
            };
            ContextMenuJQ.ShowZindex = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-zindex").addClass("control-active");
                jQuery("#control-zindex").show();
            };
            ContextMenuJQ.ShowBS = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border-shadow").addClass("control-active");
                jQuery("#control-border-shadow").show();
            };
            ContextMenuJQ.ShowColor = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-color").addClass("control-active");
                jQuery("#control-color").show();
            };
            ContextMenuJQ.ShowBackgroundImage = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-bi").addClass("control-active");
                jQuery("#control-bi").show();
            };
            ContextMenuJQ.AttachAddRow = function () {
                jQuery(".li.ctx-menu-add-row").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowControlAddRow();
                    impAddRowControl.Page.AddRowJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachHeightWidth = function () {
                jQuery(".li.ctx-menu-height-width").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowControlHeightWidth();
                    impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachBorder = function () {
                new impBorder.Border.BorderJQ().Init();
                jQuery(".li.ctx-menu-border").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowBorderControl();
                    impBorder.Border.BorderJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachMargin = function () {
                new impMargin.Margin.MarginJQ().Init();
                jQuery(".li.ctx-menu-margin").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowMarginControl();
                    impMargin.Margin.MarginJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachPadding = function () {
                new impPadding.Padding.PaddingJQ().Init();
                jQuery(".li.ctx-menu-padding").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowPaddingControl();
                    impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachOpacity = function () {
                new impOpacity.Opacity.OpacityJQ().Init();
                jQuery(".li.ctx-menu-opacity").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowOpacity();
                    impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachZindex = function () {
                new impFrontBack.FrontBack.FrontBackJQ().Init();
                jQuery(".li.ctx-menu-z-index").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowZindex();
                    impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachBorderShadow = function () {
                new impBorderShadow.BorderShadow.BorderShadowJQ().Init();
                jQuery(".li.ctx-menu-border-shadow").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowBS();
                    impBorderShadow.BorderShadow.BorderShadowJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachCopy = function () {
                jQuery(".li.ctx-menu-copy").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.CopyElement();
                });
            };
            ContextMenuJQ.AttachCut = function () {
                jQuery(".li.ctx-menu-cut").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.CutElement();
                });
            };
            ContextMenuJQ.AttachPaste = function () {
                jQuery(".li.ctx-menu-paste").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.PasteElement();
                });
            };
            ContextMenuJQ.AttachPasteClipBorad = function () {
                jQuery(".li.ctx-menu-paste-clipborad").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.PasteClipBorad();
                });
            };
            ContextMenuJQ.AttachSpacer = function () {
                jQuery(".smart-menu-insert-empty-space").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
                jQuery(".ctx-menu-insert-empty-space").on("click", function () {
                    window.smartObj = null;
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
            };
            ContextMenuJQ.AttachInsertImage = function () {
                new impInsertImage.Image.SelfJQ().Init();
                jQuery(".li.smart-menu-insert-image").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.InsertImage();
                    impInsertImage.Image.SelfJQ.ProcessSelectNotify();
                });
                jQuery(".li.ctx-menu-insert-image").on("click", function () {
                    window.smartObj = null;
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.InsertImage();
                    impInsertImage.Image.SelfJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachBackgroundImage = function () {
                new impBi.BI.BIJQ().Init();
                jQuery(".li.ctx-menu-background-image").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowBackgroundImage();
                    impBi.BI.BIJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachInsertMenu = function () {
                jQuery(".li.ctx-menu-insert-menu").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowMenu();
                    impMenuControl.Menu.MenuJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachColor = function () {
                new impColor.Color.ColorJQ().Init();
                jQuery(".li.ctx-menu-color").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowColor();
                    impColor.Color.ColorJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.ContextInnerMenuShowHide = function () {
                jQuery("#contextMenuitems").find(".li").on("mouseenter", function (e) {
                    // adjustment based on window.
                    var left = 147;
                    if (e.pageX > ($(document).width() - 200)) {
                        left = -150;
                    }
                    jQuery(this).parent().find(".innerListContainer").first().css("left", left + "px");
                    jQuery(this).parent().find(".innerListContainer").first().css("display", "block");
                });
                jQuery("#contextMenuitems").find("li").on("mouseleave", function (e) {
                    jQuery(this).find(".innerListContainer").first().css("display", "none");
                });
            };
            ContextMenuJQ.LiClick = function () {
                // selected item ...
                jQuery("#contextMenuitems > li").on("click", function () {
                    // alert($(this).text());  // Performing the selected function.
                });
            };
            ContextMenuJQ.prototype.MainEvents = function () {
                jQuery(document).ready(function () {
                    if (ctxMenuIsReady == false) {
                        ctxMenuIsReady = true;
                        jQuery(document).on("click", function () {
                            jQuery("#contextMenu").hide(500); // To hide the context menu
                            jQuery("#smInsertNextPrev").hide(500);
                        });
                        if (G_isAttachedContextMenu == false) {
                            G_isAttachedContextMenu = true;
                            ContextMenuJQ.ContextMenuBinding();
                            ContextMenuJQ.LiClick();
                            ContextMenuJQ.ContextInnerMenuShowHide();
                            ContextMenuJQ.AttachInsertLinkContainer();
                            ContextMenuJQ.AttachInsertLink();
                            ContextMenuJQ.AttachInsertHTML();
                            ContextMenuJQ.AttachInsertText();
                            ContextMenuJQ.AttachAddRow();
                            ContextMenuJQ.AttachDeleteElement();
                            ContextMenuJQ.AttachHeightWidth();
                            ContextMenuJQ.AttachCopy();
                            ContextMenuJQ.AttachPaste();
                            ContextMenuJQ.AttachPasteClipBorad();
                            ContextMenuJQ.AttachCut();
                            ContextMenuJQ.AttachInsertImage();
                            ContextMenuJQ.AttachSpacer();
                            ContextMenuJQ.AttachBorder();
                            ContextMenuJQ.AttachMargin();
                            ContextMenuJQ.AttachZindex();
                            ContextMenuJQ.AttachBorderShadow();
                            ContextMenuJQ.AttachOpacity();
                            ContextMenuJQ.AttachPadding();
                            ContextMenuJQ.AttachColor();
                            ContextMenuJQ.AttachInsertMenu();
                            ContextMenuJQ.AttachBackgroundImage();
                            ContextMenuJQ.AttachControlPageClose();
                        }
                    }
                });
            };
            return ContextMenuJQ;
        }());
        ContextMenu.ContextMenuJQ = ContextMenuJQ;
    })(ContextMenu = exports.ContextMenu || (exports.ContextMenu = {}));
});
define("shiv/TypeScript/Themes/EmptyLayout/EmptyLayoutJQ", ["require", "exports", "shiv/TypeScript/Page/HeaderJQ", "shiv/TypeScript/Page/MenuBarJQ", "shiv/TypeScript/Page/ContentJQ", "shiv/TypeScript/Page/FooterJQ", "shiv/TypeScript/_Classes/CssClass", "shiv/TypeScript/_Classes/LoadingJQ", "shiv/TypeScript/page/anyjq", "shiv/typescript/error/errorjq", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Preview/Preview", "shiv/TypeScript/ContextMenu/ContextMenuJQ", "shiv/TypeScript/Controls/ControlCommonJQ"], function (require, exports, impHeader, impMenuBar, impBody, impFooter, impCss, impLoading, impAny, impError, impUndoManager, impPreview, impCtxMenu, impControlCommon) {
    "use strict";
    window.layoutCreating = true;
    var colorToChange = 0;
    var Themes;
    (function (Themes) {
        var Empty;
        (function (Empty) {
            var LayoutJQ = (function () {
                function LayoutJQ() {
                    this.controlId = "#control-templates";
                    window.layoutCreating = true;
                    // loading created...
                    LayoutJQ.loading = new impLoading.Loading.LoadingJQ(this.controlId);
                    LayoutJQ.loading.Init();
                }
                LayoutJQ.prototype.Init = function () {
                    try {
                        this.Layout(LayoutJQ.layout);
                        this.Layout(LayoutJQ.layout3);
                        this.Layout(LayoutJQ.layout6);
                        this.Layout(LayoutJQ.layout1);
                        this.Layout(LayoutJQ.layout4);
                        this.Layout(LayoutJQ.layout7);
                        this.Layout(LayoutJQ.layout2);
                        this.Layout(LayoutJQ.layout5);
                        this.Layout(LayoutJQ.layout8);
                        jQuery(".empty-layout-templates").find(".ui-resizable-handle").hide();
                        jQuery(".empty-layout-templates .row").removeClass("design-row");
                        jQuery(".empty-layout-templates .column").css("outline", "1px solid #282424");
                        jQuery(".empty-layout-templates .root-elements").css("padding", "0");
                        this.Attach();
                    }
                    catch (ex) {
                    }
                    window.layoutCreating = false;
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                };
                LayoutJQ.prototype.Attach = function () {
                    jQuery(".empty-layout").on("click", function () {
                        jQuery(".empty-layout").removeClass("empty-layout-select");
                        jQuery(this).addClass("empty-layout-select");
                    });
                    jQuery(".create-layout-show-button").on("click", function () {
                        impPreview.Preview.PreviewJQ.ClosePreview();
                        jQuery(".jq-row-plus-container").hide();
                        impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
                        jQuery(".control-templates").show();
                        jQuery(".control-templates").addClass("control-active");
                        jQuery(".empty-layout-templates .row").removeClass("padding-root-elements");
                        jQuery(".empty-layout-templates").find(".ui-resizable-handle").hide();
                        jQuery(".empty-layout-templates .row").removeClass("design-row");
                        jQuery(".empty-layout-templates .column").addClass("design-column");
                        jQuery(".empty-layout-templates .root-elements").css("padding", "0");
                    });
                    jQuery(".control-templates .close-button").click(function () {
                        if (jQuery(".empty-layout-select").attr("layout-id") == undefined || jQuery(".empty-layout-select").attr("layout-id") == "") {
                            LayoutJQ.CreateLayout("0", this);
                        }
                        jQuery(".column").removeClass("column-layout-border-yellow");
                        jQuery(".column").removeClass("column-layout-border-brown");
                    });
                    jQuery(".action-button-layout-create").on("click", function () {
                        LayoutJQ.CreateLayout(undefined, this);
                    });
                };
                LayoutJQ.CreateLayout = function (layoutId, $this) {
                    if (layoutId == undefined) {
                        layoutId = jQuery(".empty-layout-select").attr("layout-id");
                    }
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    if (layoutId != undefined) {
                        var layout = undefined;
                        switch (layoutId) {
                            case "0":
                                layout = LayoutJQ.layout;
                                break;
                            case "1":
                                layout = LayoutJQ.layout1;
                                break;
                            case "2":
                                layout = LayoutJQ.layout2;
                                break;
                            case "3":
                                layout = LayoutJQ.layout3;
                                break;
                            case "4":
                                layout = LayoutJQ.layout4;
                                break;
                            case "5":
                                layout = LayoutJQ.layout5;
                                break;
                            case "6":
                                layout = LayoutJQ.layout6;
                                break;
                            case "7":
                                layout = LayoutJQ.layout7;
                                break;
                            case "8":
                                layout = LayoutJQ.layout8;
                                break;
                        }
                        if (layout != undefined) {
                            var anyJQ = new impAny.Page.AnyJQ("");
                            //jQuery(".column").removeClass("column-layout-border-yellow");
                            //jQuery(".column").removeClass("column-layout-border-brown");
                            var staticElement = "<span title class=\"page-static-element-circle design-root-elements-static\"> </span>";
                            jQuery("page .root-elements").html("");
                            anyJQ.AddRow(jQuery(".jq-Header"), layout.header.cols, "layout-column", undefined, undefined);
                            var newStaticElementWithTitle = staticElement.replace("title", "title='Header'");
                            jQuery(".jq-Header").prepend(newStaticElementWithTitle);
                            var adjustColumnHeightMB = new impCss.CssClass.AdjustJQ();
                            adjustColumnHeightMB.height = 50;
                            anyJQ.AddRow(jQuery(".jq-MenuBar"), layout.menuBar.cols, "layout-column", undefined, adjustColumnHeightMB);
                            newStaticElementWithTitle = staticElement.replace("title", "title='Menu Bar'");
                            jQuery(".jq-MenuBar").prepend(newStaticElementWithTitle);
                            var adjustColumnHeight = new impCss.CssClass.AdjustJQ();
                            adjustColumnHeight.height = 500;
                            anyJQ.AddRow(jQuery(".jq-Content"), layout.body.cols, "layout-column", undefined, adjustColumnHeight);
                            newStaticElementWithTitle = staticElement.replace("title", "title='Body'");
                            jQuery(".jq-Content").prepend(newStaticElementWithTitle);
                            anyJQ.AddRow(jQuery(".jq-Footer"), layout.footer.cols, "layout-column", undefined, undefined);
                            newStaticElementWithTitle = staticElement.replace("title", "title='Footer'");
                            jQuery(".jq-Footer").prepend(newStaticElementWithTitle);
                            // escape key issue
                            //if (colorToChange % 2 == 0) {
                            //    jQuery("page .root-elements .column").addClass("column-layout-border-yellow");
                            //}
                            //else {
                            //    jQuery("page .root-elements .column").addClass("column-layout-border-brown");
                            //}
                            //colorToChange++;
                            errorHandler.ActionSuccess("Layout Created");
                            jQuery($this).closest(".control-page").hide();
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.PopUndo();
                            undoManager.PopUndo();
                            undoManager.PopUndo();
                            undoManager.PopUndo();
                            jQuery(".page").show();
                            impControlCommon.ControlCommon.Code.DestroyResizable();
                            impControlCommon.ControlCommon.Code.Execute();
                            undoManager.BeforeOperation();
                        }
                        else {
                            errorHandler.ActionFail("Please try after some time.");
                        }
                    }
                    else {
                        errorHandler.ActionFail("Please select a layout.!");
                    }
                    jQuery(".jq-row-plus-container").hide();
                };
                LayoutJQ.prototype.Layout = function (layout) {
                    var templateNumber = 1;
                    var templateId = "template-" + layout.templateNumber;
                    var templateWrapper = jQuery(document.createElement("div"));
                    templateWrapper.addClass("empty-template-wrapper");
                    var template = jQuery(document.createElement("div"));
                    var dotTemplateId = ".template-" + layout.templateNumber;
                    ;
                    template.addClass("float-left");
                    template.addClass("empty-layout");
                    template.addClass(templateId);
                    template.attr("layout-id", layout.templateNumber + "");
                    templateWrapper.append(template);
                    jQuery(".empty-layout-templates").append(templateWrapper);
                    var commonId = "T" + layout.templateNumber;
                    var headerId = commonId + "Header";
                    var header = new impHeader.Page.HeaderJQ("", headerId);
                    header.rootWrapper = dotTemplateId;
                    header.scopeId = ".empty-layout-templates";
                    var menuBarId = commonId + "MenuBar";
                    var menuBar = new impMenuBar.Page.MenuBarJQ("", menuBarId);
                    menuBar.rootWrapper = dotTemplateId;
                    menuBar.scopeId = ".empty-layout-templates";
                    var bodyId = commonId + "Body";
                    var body = new impBody.Page.ContentJQ("", bodyId);
                    body.rootWrapper = dotTemplateId;
                    body.scopeId = ".empty-layout-templates";
                    var footerId = commonId + "Footer";
                    var footer = new impFooter.Page.FooterJQ("", footerId);
                    footer.rootWrapper = dotTemplateId;
                    footer.scopeId = ".empty-layout-templates";
                    var adjustRow = new impCss.CssClass.AdjustJQ();
                    var adjustColumn = new impCss.CssClass.AdjustJQ();
                    adjustRow.height = layout.header.height;
                    adjustColumn.height = layout.header.height;
                    header.AddRow(undefined, layout.header.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        header.GetColumn(1, 0).text("H");
                    }
                    catch (ex) {
                    }
                    adjustRow.height = layout.menuBar.height;
                    adjustColumn.height = layout.menuBar.height;
                    menuBar.AddRow(undefined, layout.menuBar.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        menuBar.GetColumn(1, 0).text("M");
                    }
                    catch (ex) {
                    }
                    adjustRow.height = layout.body.height;
                    adjustColumn.height = layout.body.height;
                    body.AddRow(undefined, layout.body.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        var column = body.GetColumn(1, 0);
                        column.text("B");
                    }
                    catch (ex) {
                    }
                    adjustRow.height = layout.footer.height;
                    adjustColumn.height = layout.footer.height;
                    footer.AddRow(undefined, layout.footer.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        var column = footer.GetColumn(1, 0);
                        column.text("F");
                    }
                    catch (ex) {
                    }
                };
                LayoutJQ.layout = {
                    templateNumber: 0,
                    header: {
                        height: 41,
                        cols: "col-xs-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout1 = {
                    templateNumber: 1,
                    header: {
                        height: 41,
                        cols: "col-xs-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout2 = {
                    templateNumber: 2,
                    header: {
                        height: 41,
                        cols: "col-xs-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-24 col-xs-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout3 = {
                    templateNumber: 3,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout4 = {
                    templateNumber: 4,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout5 = {
                    templateNumber: 5,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-24 col-xs-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout6 = {
                    templateNumber: 6,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-20 col-xs-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout7 = {
                    templateNumber: 7,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-20 col-xs-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout8 = {
                    templateNumber: 8,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-20 col-xs-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-24 col-xs-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                return LayoutJQ;
            }());
            Empty.LayoutJQ = LayoutJQ;
        })(Empty = Themes.Empty || (Themes.Empty = {}));
    })(Themes = exports.Themes || (exports.Themes = {}));
});
define("shiv/TypeScript/_Classes/SaveJq", ["require", "exports", "shiv/typescript/error/errorjq"], function (require, exports, impError) {
    "use strict";
    var Save;
    (function (Save) {
        var SaveJQ = (function () {
            function SaveJQ() {
            }
            SaveJQ.prototype.Download = function (downloadData) {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/download",
                    data: downloadData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SaveJQ.OnDownloadSuccess,
                    error: SaveJQ.OnDownloadError
                });
            };
            SaveJQ.OnDownloadSuccess = function (data, status) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if ((data.d.Error == "" || data.d.Error == null) && data.d.Success == true) {
                    errorHandler.ActionSuccess("Click on the download link below  <br> <a target='_blank' class='download-site-link' href='" + data.d.Link + "' > click here </a>");
                }
                else {
                    errorHandler.ActionFail("Unable to generate download link...");
                }
            };
            SaveJQ.OnDownloadError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Unable to generate download link...");
            };
            SaveJQ.prototype.SavePage = function (saveData) {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/savepage",
                    data: saveData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SaveJQ.OnSaveSuccess,
                    error: SaveJQ.OnSaveError
                });
            };
            SaveJQ.OnSaveSuccess = function (data, status) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (data.d.Error != "") {
                    errorHandler.ActionSuccess("Page saved");
                }
                else {
                    errorHandler.ActionFail("Save Failed! <br> Try again later.");
                }
            };
            SaveJQ.OnSaveError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Save Failed! <br> Try again later.");
            };
            SaveJQ.IsDownloadStarted = false;
            return SaveJQ;
        }());
        Save.SaveJQ = SaveJQ;
    })(Save = exports.Save || (exports.Save = {}));
});
define("shiv/TypeScript/Controls/NoUi", ["require", "exports", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/typescript/error/errorjq"], function (require, exports, impUndoManager, impWatch, impError) {
    "use strict";
    var NoUI;
    (function (NoUI) {
        var AlignJQ = (function () {
            function AlignJQ() {
            }
            AlignJQ.Common = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("column") || selectedElement.hasClass("row") || selectedElement.hasClass("root-elements")) {
                        return jQuery("#nononoelement");
                    }
                    return selectedElement;
                }
                return jQuery("#nononoelement");
            };
            AlignJQ.Center = function () {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "none");
                selectedElement.closest(".column").css("text-align", "center");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            AlignJQ.Left = function () {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "left");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            AlignJQ.Right = function () {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "right");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            return AlignJQ;
        }());
        NoUI.AlignJQ = AlignJQ;
        var MoveJQ = (function () {
            function MoveJQ() {
            }
            MoveJQ.Common = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("root-elements")) {
                        return jQuery("#nononoelement");
                    }
                    return selectedElement;
                }
                return jQuery("#nononoelement");
            };
            MoveJQ.CommonUpDown = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    return selectedElement;
                }
                return jQuery("#nononoelement");
            };
            MoveJQ.Left = function () {
                var selectedElement = MoveJQ.Common();
                if (selectedElement.css("float") == "none") {
                    if (selectedElement.prevAll(".key").first().length > 0 &&
                        (selectedElement.prevAll(".key").first().css("float") == "right"
                            ||
                                selectedElement.prevAll(".key").first().css("float") == "left")
                        || selectedElement.prevAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                    }
                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                }
                else if (selectedElement.css("float") == "left") {
                    if (selectedElement.prevAll(".key").first().length > 0 &&
                        (selectedElement.prevAll(".key").first().css("float") == "right"
                            || selectedElement.prevAll(".key").first().css("float") == "none")
                        || selectedElement.prevAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }
                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                }
                else {
                    if (selectedElement.nextAll(".key").first().length > 0 &&
                        (selectedElement.nextAll(".key").first().css("float") == "left"
                            || selectedElement.nextAll(".key").first().css("float") == "none")
                        || selectedElement.nextAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }
                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                }
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            MoveJQ.Right = function () {
                var selectedElement = MoveJQ.Common();
                if (selectedElement.css("float") == "none") {
                    if (selectedElement.nextAll(".key").first().length > 0 &&
                        (selectedElement.nextAll(".key").first().css("float") == "right"
                            ||
                                selectedElement.nextAll(".key").first().css("float") == "left")
                        || selectedElement.nextAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                    }
                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                }
                else if (selectedElement.css("float") == "left") {
                    if (selectedElement.nextAll(".key").first().length > 0 &&
                        (selectedElement.nextAll(".key").first().css("float") == "right"
                            || selectedElement.nextAll(".key").first().css("float") == "none")
                        || selectedElement.nextAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }
                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                }
                else {
                    if (selectedElement.prevAll(".key").first().length > 0 &&
                        (selectedElement.prevAll(".key").first().css("float") == "left"
                            || selectedElement.prevAll(".key").first().css("float") == "none")
                        || selectedElement.prevAll(".key").first().length == 0) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }
                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                }
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            MoveJQ.Up = function () {
                var selectedElement = MoveJQ.CommonUpDown();
                if (!selectedElement.hasClass("row")) {
                    selectedElement = selectedElement.closest(".row");
                }
                var lastElement = selectedElement.prevAll(".row").first();
                if (lastElement.length == 0) {
                    lastElement = selectedElement.prevAll(".key").last();
                }
                selectedElement.insertBefore(lastElement);
            };
            MoveJQ.Down = function () {
                var selectedElement = MoveJQ.CommonUpDown();
                if (!selectedElement.hasClass("row")) {
                    selectedElement = selectedElement.closest(".row");
                }
                var lastElement = selectedElement.nextAll(".row").first();
                if (lastElement.length == 0) {
                    lastElement = selectedElement.nextAll(".key").last();
                }
                selectedElement.insertAfter(lastElement);
            };
            return MoveJQ;
        }());
        NoUI.MoveJQ = MoveJQ;
    })(NoUI = exports.NoUI || (exports.NoUI = {}));
});
define("shiv/TypeScript/Common/CommonEvents", ["require", "exports", "shiv/TypeScript/Controls/JQueryUI", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/Themes/EmptyLayout/EmptyLayoutJQ", "shiv/TypeScript/_Classes/Auth", "shiv/typescript/error/errorjq", "shiv/TypeScript/common/on", "shiv/TypeScript/_Classes/SaveJq", "shiv/TypeScript/MalFormed/MalFormedJQ", "shiv/TypeScript/Controls/NoUi", "shiv/TypeScript/Controls/ImageJQ"], function (require, exports, impJQueryUI, impUndoManager, impLayout, impAuth, impError, impOn, impSaveClass, impmal, impNoUi, impImage) {
    "use strict";
    var themeHandle;
    var downloadInterval;
    var imageFiles;
    var showHideMenuHandle;
    var Common;
    (function (Common) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        Common.SmartObj = SmartObj;
        var CommonEvents = (function () {
            function CommonEvents() {
                this.isCommonEventsAdded = false;
            }
            CommonEvents.GetCookie = function (cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ')
                        c = c.substring(1);
                    if (c.indexOf(name) == 0)
                        return c.substring(name.length, c.length);
                }
                return "";
            };
            CommonEvents.CheckMal = function () {
                if (CommonEvents.GetCookie("jQuery") == jQuery("#viewstate").val()) {
                    return true;
                }
                else {
                    return false;
                }
            };
            CommonEvents.UploadImages = function () {
                var files = imageFiles;
                //// Add the uploaded image content to the form data collection
                //if (files.length > 0) {
                //    data.append("UploadedImage", files[0]);
                //}
                var data = new FormData();
                for (var i = 0; i < files.length; i++) {
                    data.append(files[i].name, files[i]);
                }
                // Make Ajax request with the contentType = false, and procesDate = false
                $.ajax({
                    type: "POST",
                    url: "/Services/PageService.asmx/UploadImages",
                    contentType: false,
                    processData: false,
                    data: data,
                    success: function () {
                        impImage.Image.SelfJQ.ClearImageGalaryPagingValue();
                        impImage.Image.SelfJQ.GetImages();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("Images Uploaded Sucessfully.");
                    },
                    error: function (request, status, error) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("Images Uploaded Failed.(Please check file type or file size.)");
                    }
                });
            };
            // Grab the files and set them to our variable
            CommonEvents.PrepareUpload = function (event) {
                imageFiles = event.target.files;
                CommonEvents.UploadImages();
            };
            CommonEvents.prototype.Init = function () {
                if (CommonEvents.CheckMal() == false) {
                    impmal.MalFormed.MalFormedJQ.IsMalFormed = true;
                }
                ///////////// change image ////////////////
                jQuery(".button-change-image").on("click", function () {
                    impImage.Image.SelfJQ.ChangeImage();
                });
                if (!jQuery(".bldr-draggable").hasClass("event-added")) {
                    jQuery(".bldr-draggable").addClass("event-added");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".bldr-draggable", "");
                }
                jQuery(".jq-full-page").on("click", function () {
                    jQuery(".page-margin").css("width", "auto");
                });
                jQuery(".jq-small-page").on("click", function () {
                    jQuery(".page-margin").css("width", "980px");
                });
                ///////////////show hide menu//////////////
                jQuery(".show-hide-menu-btn").hide();
                jQuery(".hide-menu").show();
                jQuery(".show-menu, .hide-menu").on("click", function () {
                    jQuery("#hideMenuHelpTop").hide();
                    if (!(jQuery(".hide-menu").css("display") == "none")) {
                        jQuery(".hide-menu").hide();
                        jQuery(".show-menu").show();
                        jQuery(".top-row-container").hide();
                        jQuery("rootx").css("top", "0");
                        jQuery(".editor").css("top", "0");
                        jQuery(".properties-sidebar-container").css("top", "0");
                    }
                    else {
                        jQuery(".hide-menu").show();
                        jQuery(".show-menu").hide();
                        jQuery("rootx").css("top", "56px");
                        jQuery(".editor").css("top", "56px");
                        jQuery(".properties-sidebar-container").css("top", "56px");
                        jQuery(".top-row-container").show();
                    }
                });
                jQuery(".hide-left-menu").show();
                jQuery(".hide-left-menu, .show-left-menu").on("click", function () {
                    jQuery("#hideLeftMenuHelp").hide();
                    if (!(jQuery(".hide-left-menu").css("display") == "none")) {
                        jQuery(".hide-left-menu").hide();
                        jQuery(".show-left-menu").show();
                        jQuery("#property-sidebar-page-column").hide();
                        jQuery("#main-page-column").addClass("col-xs-48").removeClass("col-xs-36");
                    }
                    else {
                        jQuery(".hide-left-menu").show();
                        jQuery(".show-left-menu").hide();
                        jQuery("#main-page-column").addClass("col-xs-36").removeClass("col-xs-48");
                        jQuery("#property-sidebar-page-column").show();
                    }
                });
                //////////// images upload ////////////////
                // Add events
                $('.image-file-upload').on('change', CommonEvents.PrepareUpload);
                ////////////// Flating or aligning...
                jQuery(".button-align-left").on("click", function () {
                    impNoUi.NoUI.AlignJQ.Left();
                });
                jQuery(".button-align-right").on("click", function () {
                    impNoUi.NoUI.AlignJQ.Right();
                });
                jQuery(".button-align-center").on("click", function () {
                    impNoUi.NoUI.AlignJQ.Center();
                });
                ///////////// Moving Object....
                jQuery(".button-move-left").on("click", function () {
                    impNoUi.NoUI.MoveJQ.Left();
                });
                jQuery(".button-move-right").on("click", function () {
                    impNoUi.NoUI.MoveJQ.Right();
                });
                jQuery(".button-move-up").on("click", function () {
                    impNoUi.NoUI.MoveJQ.Up();
                });
                jQuery(".button-move-down").on("click", function () {
                    impNoUi.NoUI.MoveJQ.Down();
                });
                ///////////////////////////////////////////////////////////////
                jQuery("#control-align").draggable({ revert: false });
                jQuery("#control-object-move").draggable({ revert: false });
                var liveUrl = jQuery(".input-current-location").val() + "/"
                    + jQuery(".input-site-id").val() + "/"
                    + jQuery(".input-site-name").val() + "/"
                    + jQuery(".input-page-name").val();
                jQuery(".anchor-show-live-preview").attr("href", liveUrl);
                jQuery("#notify").on("click", function () {
                    jQuery(this).hide();
                });
                jQuery(".btn-help").on("click", function () {
                    jQuery("#site-help").slideToggle();
                });
                jQuery("#site-help").on("click", function () {
                    jQuery(this).slideUp();
                });
                themeHandle = window.setInterval(function () {
                    if (impAuth.Auth.AuthJQ.IsAuth == true) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        window.clearInterval(themeHandle);
                        var layout = new impLayout.Themes.Empty.LayoutJQ();
                        layout.Init();
                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Hide();
                        }
                    }
                    else {
                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Show();
                        }
                    }
                }, 1000);
                ////////////////
                jQuery(".jq-show-plus").on("click", function () {
                    jQuery(".jq-row-plus-container").show();
                    jQuery(".jq-show-plus").hide();
                    jQuery(".jq-hide-plus").show();
                });
                jQuery(".jq-hide-plus").on("click", function () {
                    jQuery(".jq-row-plus-container").hide();
                    jQuery(".jq-hide-plus").hide();
                    jQuery(".jq-show-plus").show();
                });
                //// download /////////////////
                jQuery(".button-download-site").on("click", function () {
                    var save = new impSaveClass.Save.SaveJQ();
                    var data = {
                        siteName: jQuery(".input-site-name").val()
                    };
                    var downloadData = JSON.stringify(data);
                    var eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Download will start in few seconds...");
                    save.Download(downloadData);
                });
                /// save ///////
                jQuery(".jq-save").on("click", function () {
                    var eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Please Wait...");
                    var scripts = jQuery(document.createElement("scripts"));
                    var styles = jQuery(document.createElement("styles"));
                    var page = jQuery(document.createElement("page"));
                    var fullbody = "<html><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" /> </head><body>";
                    var fullbodyEnd = "</body></html>";
                    var styleSheetExtra = "<script type=\" text/javascript\" class=\"add-to-page jquery\" src= \"jquery/jquery-1.11.2.min.js\" > </script>" +
                        "<link rel=\"stylesheet\" type= \"text/css\" class=\"add-to-page\" href= \"bootstrap/bootstrap-customzed-48.min.css\" />" +
                        "<link class=\"add-to-page\" type= \"text/css\" href= \"theme/theme.css\" rel= \"stylesheet\" type= \"text/css\" />" +
                        "<link class=\"add-to-page\"  href= \"theme/jqplus.css\" rel= \"stylesheet\" />" +
                        " <style> " +
                        " @media (max-width: 980px) { .page-margin { width: auto !important; } .empty-container-text {display:inline-block; } .jq-text-block-container{max-width:100%;} .jq-text-block-container {height:auto !important;} .jq-plus-container-text{display:inline-block; height:auto !important; } }  " +
                        " .jq-plus-element { display:none !important; } " +
                        " .jq-row-plus-container { display:none !important; } " +
                        " .row { margin:0; padding:2px; clear:both; } .root-elements{ padding:0;} " +
                        " .column { margin:0; padding:0; } " +
                        ".page-static-element { display:none !important;} .page-static-element-circle{display:none !important;} .design-adjust-image-text-other{margin:1px;}" +
                        " .image-text-other .adjust-image-text-other-left{ float: left; } .page-marker{display:none !important;} .design-page-row{display:none !important;}" +
                        "</style>";
                    jQuery(".image-selection").removeClass("image-selection");
                    jQuery(".add-to-page").each(function () {
                        if (jQuery(this).prop("tagName") == "SCRIPT") {
                            scripts.append($(this).clone());
                        }
                        if (jQuery(this).prop("tagName") == "LINK") {
                            styles.append($(this).clone());
                        }
                        if (jQuery(this).prop("tagName") == "PAGE") {
                            page.append($(this).clone());
                            page.find(".jqte-editor").removeAttr("contentEditable").removeAttr("tabindex").css("cursor", "initial");
                            page.prepend(styleSheetExtra);
                        }
                    });
                    var save = new impSaveClass.Save.SaveJQ();
                    save.scripts = scripts.html();
                    save.styles = styles.html();
                    save.page = fullbody + page.html() + fullbodyEnd;
                    var data = {
                        Obj: save, siteName: jQuery(".input-site-name").val(), pageName: jQuery(".input-page-name").val()
                    };
                    var saveData = JSON.stringify(data);
                    save.SavePage(saveData);
                });
                //// undo manager ////
                jQuery(".jq-undo").on("click", function () {
                    var undoManager = new impUndoManager.Manager.UndoManager();
                    undoManager.Undo();
                });
                jQuery(".jq-redo").on("click", function () {
                    var undoManager = new impUndoManager.Manager.UndoManager();
                    undoManager.Redo();
                });
                jQuery(".properties-button").on("click", function () {
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
            };
            CommonEvents.ResizableClickCode = function ($this) {
                jQuery(".ui-resizable-se").removeClass("selected-resizable");
                jQuery(".ui-resizable-s").removeClass("selected-resizable");
                jQuery($this).addClass("selected-resizable");
            };
            return CommonEvents;
        }());
        Common.CommonEvents = CommonEvents;
    })(Common = exports.Common || (exports.Common = {}));
});
/// <reference path="../../../library/jquery.d.ts" />
define("shiv/TypeScript/Page/PageElementBaseJQ", ["require", "exports", "shiv/TypeScript/PageElements/ElementJQ", "shiv/typescript/error/errorjq", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/_Classes/UrlJQ", "shiv/TypeScript/_Classes/Auth", "shiv/TypeScript/Constants/ConstantsJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/TypeScript/MalFormed/MalFormedJQ"], function (require, exports, impElements, impError, impCommon, impUrl, impAuth, impConstants, impUndoManager, impmal) {
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
                    else {
                        if (jQuery("div[src='xa.xml']").length > 2 && impAuth.Auth.AuthJQ.IsAuth == true) {
                            if (jQuery(root).attr("unique-id") == undefined) {
                                uniqureId++;
                                jQuery(root).attr("unique-id", uniqureId);
                            }
                            if (beforeAfter == undefined) {
                                $(root).append(element);
                            }
                            else if (beforeAfter == true) {
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
define("shiv/TypeScript/Page/HeaderJQ", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var HeaderJQ = (function (_super) {
            __extends(HeaderJQ, _super);
            function HeaderJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "Header";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return HeaderJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.HeaderJQ = HeaderJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Page/PageJQ", ["require", "exports", "shiv/TypeScript/Page/HeaderJQ", "shiv/TypeScript/Page/MenuBarJQ", "shiv/TypeScript/Page/ContentJQ", "shiv/TypeScript/Page/FooterJQ", "shiv/TypeScript/page/anyjq", "shiv/TypeScript/Menu/MenuTemplateJQ"], function (require, exports, impHeader, impMenuBar, impContent, impFooter, impAny, impMenuTemplate) {
    "use strict";
    var Page;
    (function (Page) {
        var PageJQ = (function () {
            function PageJQ(configuration) {
                this.pageConfiguration = configuration;
                this.Header = new impHeader.Page.HeaderJQ(null);
                this.MenuBar = new impMenuBar.Page.MenuBarJQ(null);
                this.MenuTemplate = new impMenuTemplate.Page.Menu.MenuTemplateJQ();
                this.Content = new impContent.Page.ContentJQ(null);
                this.Footer = new impFooter.Page.FooterJQ(null);
                this.Any = new impAny.Page.AnyJQ(null);
            }
            return PageJQ;
        }());
        Page.PageJQ = PageJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Page/Context/ContextJQ", ["require", "exports", "shiv/TypeScript/Page/PageJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var ContextJQ = (function () {
            function ContextJQ() {
                this.Page = new impPage.Page.PageJQ(null);
                this.Constants = new impConsts.Constants.ConstantsJQ();
            }
            return ContextJQ;
        }());
        Page.ContextJQ = ContextJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Controls/ControlsJQ", ["require", "exports", "shiv/TypeScript/Page/Context/ContextJQ", "shiv/TypeScript/_Classes/CssClass", "shiv/TypeScript/Constants/ConstantsJQ", "shiv/TypeScript/ControlNames/PageControlNamesJQ", "shiv/typescript/error/errorjq", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/Controls/FontJQ", "shiv/TypeScript/Controls/TextJQ", "shiv/TypeScript/SmartMenu/SmartMenuJQ", "shiv/TypeScript/Common/OperationJQ"], function (require, exports, impPageCtx, impCss, impConsts, impPageControlNames, impError, impWatch, impFontList, impText, impSmartMenu, impOperaction) {
    "use strict";
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
        }());
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
                jQuery("#btnResetAddRowControls").on("click", function () {
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
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).on("change", function () {
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
                jQuery(".control-columns").on("click", function () {
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
                        selectedRowOrColumn.children(".debug-column-css").hide();
                        selectedRowOrColumn.css("padding", "0");
                        var beforeAfter = undefined;
                        if (selectedRowOrColumn.hasClass("row")) {
                            beforeAfter = false;
                        }
                        if (selectedRowOrColumn.hasClass("image-text-other")) {
                            beforeAfter = false;
                        }
                        AddRowJQ.addedRow = ctx.Page.Any.AddRow(selectedRowOrColumn, colsClasses, '', adjustRow, adjustColumn, beforeAfter);
                        if (AddRowJQ.addedRow != undefined) {
                            AddRowJQ.addedRow.addClass("removable-row");
                            AddRowJQ.addedRow.children(".column").addClass("columns-pending");
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
                });
                jQuery(AddRowJQ.pageId).find(AddRowJQ.BTN_ADD_ROW).on("click", function (e, s) {
                    jQuery(".removable-row").removeClass("removable-row");
                    if (callBackLoadRowAndColumnNames != undefined) {
                        callBackLoadRowAndColumnNames();
                    }
                });
            };
            AddRowJQ.prototype.ControlColumns = function () {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.CONTROL_COLUMNS).on("click", function (e, s) {
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
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).on("change", function () {
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + ' pixels');
                });
            };
            AddRowJQ.prototype.ControlColumnHeight = function () {
                AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).on("change", function () {
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
        }(impPageControlNames.PageControlNamesJQ.Page.AddRow.Controls));
        Page.AddRowJQ = AddRowJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
/// <reference path="../../../library/jquery.d.ts" />
define("shiv/TypeScript/Watch/WatchMouseJQ", ["require", "exports", "shiv/TypeScript/Common/CommonMethodsJQ", "shiv/TypeScript/Controls/ControlsJQ", "shiv/TypeScript/Controls/TextJQ", "shiv/TypeScript/Controls/ImageJQ", "shiv/TypeScript/Controls/FontJQ", "shiv/TypeScript/Controls/BorderJQ", "shiv/TypeScript/Controls/ColorJQ", "shiv/TypeScript/SmartMenu/SmartMenuJQ", "shiv/typescript/error/errorjq", "shiv/TypeScript/ContextMenu/ContextMenuJQ", "shiv/TypeScript/Controls/BIjq", "shiv/TypeScript/jqte/OnInsert", "shiv/TypeScript/MalFormed/MalFormedJQ", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/Controls/MarginJQ", "shiv/TypeScript/Controls/PaddingJQ", "shiv/TypeScript/Controls/FrontBackJQ", "shiv/TypeScript/Watch/CopyPasteJQ", "shiv/TypeScript/Controls/OpacityJQ"], function (require, exports, impCommon, impAddRow, impText, impImage, impFont, impBorder, impColor, impHeightWidth, impError, impCtxMenu, impBi, impOnInsert, impmal, impCommonCode, impMargin, impPadding, impFrontBack, impCopy, impOpacity) {
    "use strict";
    var G_isAttachedWatch = false;
    var isWatchReady = false;
    var Watch;
    (function (Watch) {
        var MouseJQ = (function () {
            function MouseJQ() {
            }
            MouseJQ.RemoveAndResetRemovableRow = function () {
                if (jQuery(".removable-row").length > 0) {
                    jQuery(".removable-row").removeClass("removable-row");
                    jQuery(".columns-pending").removeClass("columns-pending");
                    MouseJQ.selectedElement = jQuery("#nononoelement");
                }
                if (MouseJQ.selectedElement == undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Please select a element.");
                }
            };
            MouseJQ.ProcessMove = function (e) {
                if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
                    return;
                }
                var $target = jQuery(event.target);
                if (!$target.hasClass("key")) {
                    $target = $target.closest(".key");
                }
                if ($target.hasClass("key")) {
                    jQuery(".design-page-row").hide();
                }
                else {
                    return;
                }
                if ($target.hasClass("row")) {
                    $target.children(".design-page-row").show();
                }
                else {
                    $target.closest(".row").children(".design-page-row").show();
                }
                //if ($target.hasClass("column") == true) {
                //    jQuery(".design-page-row").hide();
                //    $target.closest(".row").children(".design-page-row").show();
                //}
                //else
                //    if ($target.hasClass("row") == true) {
                //        jQuery(".design-page-row").hide();
                //        $target.children(".design-page-row").show();
                //    }
                //    else {
                //        if ($target.hasClass("image-text-other") == true) {
                //            jQuery(".design-page-row").hide();
                //            $target.parent().parent().children(".design-page-row").show();
                //        }
                //        else {
                //            jQuery(".design-page-row").hide();
                //        }
                //    }
            };
            MouseJQ.ProcessClick = function (e) {
                var common = new impCommon.Common.CommonMethodsJQ();
                if (jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block") {
                    return;
                }
                if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                    return;
                }
                // for cursor...
                //$(document).mousemove(function (e) {
                //    if (e.target != undefined) {
                //        if ((e.pageX >= e.target.clientLeft + e.target.clientWidth - 2)
                //            && (jQuery(e.target).closest("#contextMenu").length == 0
                //                && jQuery(e.target).closest(".control-page").length == 0))
                //             {
                //            //var rect = e.target.getBoundingClientRect();
                //            jQuery(".cursor-right").show();
                //        }
                //        else {
                //            jQuery(e.target).removeClass("jq-cursor");
                //        }
                //        jQuery(".cursor-right").css("left", e.pageX -10 + "px");
                //        jQuery(".cursor-right").css("top", e.pageY -10 + "px");
                //    }
                //});
                if (MouseJQ.selectedElement != undefined && e.ctrlKey == false) {
                    // this is the previous element...
                    MouseJQ.selectedElement.removeClass("image-selection");
                    MouseJQ.selectedElement.removeClass("design-select-element-just-mark");
                }
                // safety
                if (e.ctrlKey == false) {
                    jQuery(".image-selection").removeClass("image-selection");
                }
                MouseJQ.selectedElement = jQuery(e.target);
                MouseJQ.selectedElement = MouseJQ.selectedElement.closest(".key");
                if (MouseJQ.selectedElement.hasClass("key") == false) {
                    MouseJQ.selectedElement = jQuery("#noelement");
                }
                ////////// detecting selected object///////
                if (MouseJQ.selectedElement.hasClass("column")) {
                    jQuery(".selected-display-element").text("Column");
                }
                else if (MouseJQ.selectedElement.hasClass("row")) {
                    jQuery(".selected-display-element").text("Row");
                }
                else if (MouseJQ.selectedElement.hasClass("empty-container-text")) {
                    jQuery(".selected-display-element").text("Text Block");
                }
                else if (MouseJQ.selectedElement.hasClass("empty-container-image")) {
                    jQuery(".selected-display-element").text("Image");
                }
                else if (MouseJQ.selectedElement.hasClass("jq-normal-link")) {
                    jQuery(".selected-display-element").text("Link");
                }
                else if (MouseJQ.selectedElement.hasClass("page")) {
                    jQuery(".selected-display-element").text("Page");
                }
                ///////////////////////
                if (!MouseJQ.selectedElement.hasClass("empty-container-text")) {
                    $(".empty-container-text").draggable({ disabled: false });
                    jQuery(".editor").hide();
                    jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                }
                if (MouseJQ.selectedElement.hasClass("column") == true) {
                    jQuery(".design-page-row").hide();
                    MouseJQ.selectedElement.parent().children(".design-page-row").show();
                }
                else if (MouseJQ.selectedElement.hasClass("row") == true) {
                    jQuery(".design-page-row").hide();
                    MouseJQ.selectedElement.children(".design-page-row").show();
                }
                else {
                    if (MouseJQ.selectedElement.hasClass("image-text-other") == true) {
                        jQuery(".design-page-row").hide();
                        MouseJQ.selectedElement.parent().parent().children(".design-page-row").show();
                    }
                    else {
                        jQuery(".design-page-row").hide();
                    }
                }
                MouseJQ.selectedElement.addClass("design-select-element-just-mark");
                //MouseJQ.selectedElement.css("outline", "dashed 5px black");
                impAddRow.Page.AddRowJQ.ProcessSelectNotify(); // order here is important... because border is applying before removable row border property is removed.
                var activeControl = MouseJQ.GetActiveControl();
                var activeSBControl = MouseJQ.GetActiveSidebarControl();
                if (activeControl != undefined && activeControl != "") {
                    switch (activeControl.toLowerCase()) {
                        case 'add-row':
                            break;
                        case 'height-width':
                            impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                            break;
                        case 'image-library':
                            impImage.Image.SelfJQ.ProcessSelectNotify();
                            break;
                        case 'color':
                            impColor.Color.ColorJQ.ProcessSelectNotify();
                            break;
                        case 'border':
                            impBorder.Border.BorderJQ.ProcessSelectNotify();
                            break;
                        case 'insert-text':
                            impText.Text.TextJQ.ProcessSelectNotify();
                            break;
                        case 'bi':
                            impBi.BI.BIJQ.ProcessSelectNotify();
                            break;
                        case 'margin':
                            impMargin.Margin.MarginJQ.ProcessSelectNotify();
                            break;
                        case 'padding':
                            impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                            break;
                        case 'zindex':
                            impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                            break;
                        case 'opacity':
                            impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                            break;
                        default:
                            break;
                    }
                }
                if (activeSBControl != undefined && activeSBControl != "") {
                    switch (activeSBControl.toLowerCase()) {
                        case 'add-row':
                            break;
                        case 'height-width':
                            impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                            break;
                        case 'image-library':
                            impImage.Image.SelfJQ.ProcessSelectNotify();
                            break;
                        case 'color':
                            impColor.Color.ColorJQ.ProcessSelectNotify();
                            break;
                        case 'border':
                            impBorder.Border.BorderJQ.ProcessSelectNotify();
                            break;
                        case 'insert-text':
                            impText.Text.TextJQ.ProcessSelectNotify();
                            break;
                        case 'bi':
                            impBi.BI.BIJQ.ProcessSelectNotify();
                            break;
                        case 'margin':
                            impMargin.Margin.MarginJQ.ProcessSelectNotify();
                            break;
                        case 'padding':
                            impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                            break;
                        case 'zindex':
                            impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                            break;
                        case 'opacity':
                            impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                            break;
                        default:
                            break;
                    }
                }
                try {
                    if (jQuery(".jq-properties-all").css("display").toLowerCase() != "none") {
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                        impFont.Font.FontJQ.ProcessSelectNotify();
                        impBi.BI.BIJQ.ProcessSelectNotify();
                    }
                }
                catch (ex) {
                }
                if (MouseJQ.selectedElement != undefined) {
                    if (!MouseJQ.selectedElement.hasClass("jqte")) {
                        if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {
                            if (e.ctrlKey == true) {
                                if (MouseJQ.selectedElement.hasClass("image-selection")) {
                                    MouseJQ.selectedElement.removeClass("image-selection");
                                }
                                else {
                                    MouseJQ.selectedElement.addClass("image-selection");
                                }
                            }
                            else {
                                MouseJQ.selectedElement.addClass("image-selection");
                            }
                            if (e.ctrlKey == true) {
                                MouseJQ.selectedElement = jQuery(".image-selection");
                            }
                        }
                    }
                }
                try {
                    var box = jQuery(MouseJQ.selectedElement)[0].getBoundingClientRect();
                    var circleLeftTopElement = jQuery("<div class='circle-deg' style='width:14px; border-radius:50%; height:14px; border:2px solid white; position:absolute; background-color:#00A1FF;'></div>");
                    var circleRightTopElement = jQuery(circleLeftTopElement).clone();
                    var circleLeftBottomElement = jQuery(circleLeftTopElement).clone();
                    var circleRightBottomElement = jQuery(circleLeftTopElement).clone();
                    circleRightBottomElement.addClass("z-index-back");
                    var body = document.body;
                    var docElem = document.documentElement;
                    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
                    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
                    var clientTop = docElem.clientTop || body.clientTop || 0;
                    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
                    var top = box.top + scrollTop - clientTop;
                    var left = box.left + scrollLeft - clientLeft;
                    var width = jQuery(MouseJQ.selectedElement).css("width");
                    var height = jQuery(MouseJQ.selectedElement).css("height");
                    var widthf = parseFloat(width.replace("px", ""));
                    var heightf = parseFloat(height.replace("px", ""));
                    circleLeftTopElement.css("left", left - 5);
                    circleLeftTopElement.css("top", top - 5);
                    circleLeftBottomElement.css("left", left - 5);
                    circleLeftBottomElement.css("top", top + heightf - 5);
                    circleRightTopElement.css("left", left + widthf - 7);
                    circleRightTopElement.css("top", top - 5);
                    circleRightBottomElement.css("left", left + widthf - 7);
                    circleRightBottomElement.css("top", top + heightf - 5);
                    jQuery(".circle-deg").remove();
                    jQuery("body").append(circleLeftTopElement);
                    jQuery("body").append(circleLeftBottomElement);
                    jQuery("body").append(circleRightTopElement);
                    jQuery("body").append(circleRightBottomElement);
                }
                catch (ex) {
                }
                //}
            };
            MouseJQ.GetActiveControl = function () {
                var activeControl = "";
                var controls = jQuery(".control-page");
                for (var i = 0; i < controls.length; i++) {
                    if (jQuery(controls[i]).css("display") == "block") {
                        activeControl = jQuery(controls[i]).attr("name");
                        break;
                    }
                }
                return activeControl;
            };
            MouseJQ.ResetAfterClear = function () {
                var activeSBControl = MouseJQ.GetActiveSidebarControl();
                if (activeSBControl != undefined && activeSBControl != "") {
                    switch (activeSBControl.toLowerCase()) {
                        case 'add-row':
                            break;
                        case 'height-width':
                            impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                            break;
                        case 'image-library':
                            impImage.Image.SelfJQ.ProcessSelectNotify();
                            break;
                        case 'color':
                            impColor.Color.ColorJQ.ProcessSelectNotify();
                            break;
                        case 'border':
                            impBorder.Border.BorderJQ.ProcessSelectNotify();
                            break;
                        case 'insert-text':
                            impText.Text.TextJQ.ProcessSelectNotify();
                            break;
                        case 'bi':
                            impBi.BI.BIJQ.ProcessSelectNotify();
                            break;
                        case 'margin':
                            impMargin.Margin.MarginJQ.ProcessSelectNotify();
                            break;
                        case 'padding':
                            impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                            break;
                        case 'zindex':
                            impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                            break;
                        case 'opacity':
                            impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                            break;
                        default:
                            break;
                    }
                }
            };
            MouseJQ.GetActiveSidebarControl = function () {
                var activeControl = "";
                var activeControl = jQuery(".prop-sb.ui-accordion-header-active").first().attr("name");
                // console.log(activeControl);
                return activeControl;
            };
            MouseJQ.prototype.WatchPage = function () {
                jQuery(document).ready(function () {
                    if (G_isAttachedWatch == false) {
                        G_isAttachedWatch = true;
                        jQuery(".prop-sb").click(function () {
                            impAddRow.Page.AddRowJQ.ProcessSelectNotify();
                            var activeSBControl = MouseJQ.GetActiveSidebarControl();
                            if (activeSBControl != undefined && activeSBControl != "") {
                                switch (activeSBControl.toLowerCase()) {
                                    case 'add-row':
                                        break;
                                    case 'height-width':
                                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                                        break;
                                    case 'image-library':
                                        impImage.Image.SelfJQ.ProcessSelectNotify();
                                        break;
                                    case 'color':
                                        impColor.Color.ColorJQ.ProcessSelectNotify();
                                        break;
                                    case 'border':
                                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                                        break;
                                    case 'insert-text':
                                        impText.Text.TextJQ.ProcessSelectNotify();
                                        break;
                                    case 'bi':
                                        impBi.BI.BIJQ.ProcessSelectNotify();
                                        break;
                                    case 'margin':
                                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                                        break;
                                    case 'padding':
                                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                                        break;
                                    case 'zindex':
                                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                                        break;
                                    case 'opacity':
                                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                                        break;
                                    default:
                                        break;
                                }
                            }
                        });
                        //jQuery(".ui-resizable-handle").hide();
                        //jQuery(document).mousemove(function (e: JQueryMouseEventObject) {
                        //    MouseJQ.ProcessMove(e);
                        //})
                        jQuery("page").on("click", function (e) {
                            MouseJQ.ProcessClick(e);
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
                        jQuery("input").on("keydown", function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                impOnInsert.OnInsert.Code.BackPassed = true;
                            }
                        });
                        jQuery("textarea").on("keydown", function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                impOnInsert.OnInsert.Code.BackPassed = true;
                            }
                        });
                        jQuery(".jqte-editor").on("keydown", function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                impOnInsert.OnInsert.Code.BackPassed = true;
                            }
                        });
                        jQuery(document).on("keydown", function (e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                if (impOnInsert.OnInsert.Code.BackPassed == false && impOnInsert.OnInsert.Code.BackPassedEdit == false) {
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
                                impOnInsert.OnInsert.Code.BackPassed = false;
                            }
                            if (e.ctrlKey || e.metaKey) {
                                switch (String.fromCharCode(e.which).toLowerCase()) {
                                    case 's':
                                        try {
                                            console.log("ctrl + s pressed");
                                        }
                                        catch (ex) {
                                        }
                                        event.preventDefault();
                                        jQuery(".jq-save").click();
                                        return false;
                                    case 'z':
                                        if (!(MouseJQ.selectedElement.hasClass("empty-container-text")
                                            && MouseJQ.selectedElement.length == 1
                                            && MouseJQ.selectedElement.find(".jq-text-block-content").css("cursor") == "text")) {
                                            try {
                                                console.log("ctrl + z pressed");
                                            }
                                            catch (ex) {
                                            }
                                            event.preventDefault();
                                            jQuery(".jq-undo").click();
                                            return false;
                                        }
                                        break;
                                    case 'y':
                                        try {
                                            console.log("ctrl + y pressed");
                                        }
                                        catch (ex) {
                                        }
                                        event.preventDefault();
                                        jQuery(".jq-redo").click();
                                        return false;
                                }
                            }
                        });
                        $("page").bind('copy', function () {
                            impCopy.CopyPaste.CopyPasteJQ.Copy();
                        });
                        $("page").bind('paste', function () {
                            if (MouseJQ.selectedElement.hasClass("column")) {
                                impCopy.CopyPaste.CopyPasteJQ.Paste();
                            }
                            else {
                                var eh = new impError.ErrorHandle.ErrorJQ();
                                eh.ActionHelp("Please select a [Column] to paste.");
                            }
                        });
                        jQuery("page").bind('cut', function () {
                            impCopy.CopyPaste.CopyPasteJQ.Cut();
                        });
                        $(window).on('beforeunload', function () {
                            jQuery(".control-page").hide();
                            jQuery(".control-page").removeClass("control-active");
                            jQuery("#control-save").addClass("control-active");
                            jQuery("#control-save").show();
                            return "Note: Unsaved changes will be lost!";
                        });
                        jQuery(document).keyup(function (e) {
                            var ESC = 27;
                            var ENTER = 13;
                            if (e.which === ESC) {
                                /// for moving
                                //Resetting Code Text Editor..
                                $(".empty-container-text").draggable({ disabled: false });
                                $(".empty-container-image").draggable({ disabled: false });
                                $("page .jq-text-block-content").removeAttr("contentEditable");
                                jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                                ////////////////////
                                //var topRowPx = "180px";
                                //var topNotifyPx = "105px";
                                //jQuery("rootx").css("top", topRowPx);
                                //jQuery(".designer-top-row").css("height", topRowPx);
                                jQuery(".editor").hide();
                                //jQuery("#notify").css("top", topNotifyPx);
                                ////////////////////
                                impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
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
                    }
                });
            };
            return MouseJQ;
        }());
        Watch.MouseJQ = MouseJQ;
    })(Watch = exports.Watch || (exports.Watch = {}));
});
define("shiv/TypeScript/Common/OperationJQ", ["require", "exports", "shiv/TypeScript/Watch/WatchMouseJQ"], function (require, exports, impWatch) {
    "use strict";
    var Operation;
    (function (Operation) {
        var AfterOperationJQ = (function () {
            function AfterOperationJQ() {
            }
            AfterOperationJQ.Execute = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (!selectedElement.closest("column").hasClass("jq-forced-hidden-mobile")) {
                        selectedElement.removeClass("hidden-xs").removeClass("hidden-sm");
                    }
                }
            };
            return AfterOperationJQ;
        }());
        Operation.AfterOperationJQ = AfterOperationJQ;
        var BeforeOperationJQ = (function () {
            function BeforeOperationJQ() {
            }
            BeforeOperationJQ.Execute = function () {
            };
            return BeforeOperationJQ;
        }());
        Operation.BeforeOperationJQ = BeforeOperationJQ;
    })(Operation = exports.Operation || (exports.Operation = {}));
});
define("shiv/TypeScript/Controls/ControlMoveJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var clicking = false;
    var control;
    var Control;
    (function (Control) {
        var ControlMoveJQ = (function () {
            function ControlMoveJQ() {
            }
            ControlMoveJQ.prototype.Init = function () {
                this.MouseDown();
                this.MouseUp();
                this.MouseMove();
            };
            ControlMoveJQ.prototype.MouseDown = function () {
                jQuery('.control-move-area').on("mousedown", function (e) {
                    control = jQuery(this).closest(".control-page");
                    if (control.length == 0) {
                        control = jQuery(this).closest(".control-properties");
                    }
                    clicking = true;
                    //$('.clickstatus').text('mousedown');
                });
            };
            ControlMoveJQ.prototype.MouseUp = function () {
                jQuery(document).on("mouseup", function (e) {
                    clicking = false;
                    //$('.clickstatus').text('mouseup');
                    //$('.movestatus').text('click released, no more move event');
                });
            };
            ControlMoveJQ.prototype.MouseMove = function () {
                jQuery(document).on("mousemove", function (e) {
                    if (clicking == false)
                        return;
                    if ((e.clientX + 20) > jQuery(window).width() || (e.clientY + 20) > jQuery(window).height()) {
                        return;
                    }
                    if ((e.clientY) < 0) {
                        return;
                    }
                    var width = jQuery(control).css("width");
                    if (width != undefined) {
                        width = width.replace("px", "");
                        var center = Number(width) / 2;
                        var x = e.clientX - (center - 10);
                        var y = e.clientY - 10;
                        jQuery(control).css("left", x);
                        jQuery(control).css("top", y + "px");
                        jQuery(control).css("outline", "0");
                    }
                });
            };
            return ControlMoveJQ;
        }());
        Control.ControlMoveJQ = ControlMoveJQ;
    })(Control = exports.Control || (exports.Control = {}));
});
define("shiv/TypeScript/Controls/PageProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    var PageProperties;
    (function (PageProperties) {
        var PagePropertiesJQ = (function () {
            function PagePropertiesJQ() {
            }
            return PagePropertiesJQ;
        }());
        PageProperties.PagePropertiesJQ = PagePropertiesJQ;
    })(PageProperties = exports.PageProperties || (exports.PageProperties = {}));
});
/// <reference path="iwindow.ts" />
define("shiv/TypeScript/Document/DocumentJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var isDocumentReady = false;
    var Document;
    (function (Document) {
        var DocumentJQ = (function () {
            function DocumentJQ() {
            }
            DocumentJQ.prototype.Init = function () {
                this.Attach();
            };
            DocumentJQ.prototype.Attach = function () {
                jQuery(document).ready(function () {
                    if (isDocumentReady == false) {
                        isDocumentReady = true;
                    }
                });
            };
            return DocumentJQ;
        }());
        Document.DocumentJQ = DocumentJQ;
    })(Document = exports.Document || (exports.Document = {}));
});
define("shiv/TypeScript/InsertTool/InsertToolJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var isInsertToolReady = false;
    var InsertTool;
    (function (InsertTool) {
        var InsertToolJQ = (function () {
            function InsertToolJQ() {
            }
            InsertToolJQ.prototype.Init = function () {
                this.Process();
            };
            InsertToolJQ.ShowInsertTool = function () {
                //jQuery(".column").each(function () {
                //    $(this).append("<div class='plus-insert-tool'>+</div>");
                //});
            };
            InsertToolJQ.prototype.Process = function () {
                jQuery(document).ready(function () {
                    if (isInsertToolReady == false) {
                        isInsertToolReady = true;
                        InsertToolJQ.ShowInsertTool();
                    }
                });
            };
            return InsertToolJQ;
        }());
        InsertTool.InsertToolJQ = InsertToolJQ;
    })(InsertTool = exports.InsertTool || (exports.InsertTool = {}));
});
define("shiv/TypeScript/Template/TemplateJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var isTemplateReady = false;
    var Template;
    (function (Template) {
        var TemplateJQ = (function () {
            function TemplateJQ() {
            }
            TemplateJQ.prototype.Init = function () {
                this.Process();
            };
            TemplateJQ.ProcessImmediate = function () {
                jQuery(".jq-template").each(function () {
                    var templateId = $(this).attr("template-id");
                    $(this).append(jQuery(jQuery("#" + templateId).html()).clone());
                });
            };
            TemplateJQ.prototype.Process = function () {
                jQuery(document).ready(function () {
                    if (isTemplateReady == false) {
                        isTemplateReady = true;
                        TemplateJQ.ProcessImmediate();
                    }
                });
            };
            return TemplateJQ;
        }());
        Template.TemplateJQ = TemplateJQ;
    })(Template = exports.Template || (exports.Template = {}));
});
define("shiv/TypeScript/Page/LoadJQ", ["require", "exports", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/UndoManager/UndoManager", "shiv/typescript/error/errorjq", "shiv/TypeScript/_Classes/Auth", "shiv/TypeScript/Preview/Preview", "shiv/TypeScript/Constants/ConstantsJQ", "shiv/TypeScript/InsertTool/InsertToolJQ", "shiv/TypeScript/jqte/OnInsert"], function (require, exports, impCommonCode, impUndoManager, impError, impAuth, impPreview, impStatic, impInsertTool, impOnInsert) {
    "use strict";
    var Page;
    (function (Page) {
        var LoadJQ = (function () {
            function LoadJQ() {
            }
            LoadJQ.LoadPage = function (siteId, siteName, pageName) {
                var url = "/services/sites/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
                $.ajax({
                    url: url,
                    type: "GET",
                    cache: false,
                    success: function (data) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        //console.log("isloadhit");
                        var e = jQuery(document.createElement("div"));
                        var pg = jQuery(document.createElement("div"));
                        e.html(data); //.find("page").remove(".ui-resizable-handle");
                        pg.append(e.html());
                        var pgResizableRemoved = pg;
                        if (pgResizableRemoved.find("page").length > 0) {
                            jQuery("page").html(pgResizableRemoved.find("page").html());
                            try {
                                jQuery("page").attr("style", pgResizableRemoved.find("page").attr("style"));
                            }
                            catch (ex) {
                            }
                            //jQuery("page .jqte-editor").attr("contentEditable", "true");
                            jQuery(".main-page-column").css("border", "1px solid #29adef");
                            jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                            jQuery("page .jqte-editor").attr("tabindex", "1");
                            impStatic.Constants.StaticJQ.normalLinkId = jQuery("page .jq-normal-link").length + 10;
                            impStatic.Constants.StaticJQ.editorLinkId = jQuery("page .jq-editor-link").length + 10;
                            //jQuery("page .design-page-row").hide();
                            jQuery(".page").show();
                            impPreview.Preview.PreviewJQ.ClosePreview();
                            jQuery("#control-templates").hide();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            impCommonCode.ControlCommon.Code.DestroyResizable();
                            impCommonCode.ControlCommon.Code.Execute();
                            var insert = new impInsertTool.InsertTool.InsertToolJQ();
                            insert.Process();
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                            $(window).scrollTop();
                        }
                        else {
                            jQuery("#control-templates").show();
                        }
                        jQuery(".jq-row-plus-container").hide();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("Your page is loading. <br>Please wait...");
                    },
                    error: function (e) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("Page Loading Failed ! <br> Try again latter");
                    }
                });
            };
            return LoadJQ;
        }());
        Page.LoadJQ = LoadJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/MainJQ", ["require", "exports", "shiv/TypeScript/Page/Context/ContextJQ", "shiv/TypeScript/Controls/ControlsJQ", "shiv/TypeScript/ContextMenu/ContextMenuJQ", "shiv/TypeScript/Watch/WatchMouseJQ", "shiv/TypeScript/_Classes/Auth", "shiv/TypeScript/Common/CommonEvents", "shiv/TypeScript/Preview/Preview", "shiv/TypeScript/jqte/MyJQte", "shiv/TypeScript/Controls/ControlMoveJQ", "shiv/TypeScript/Template/TemplateJQ", "shiv/TypeScript/Controls/ControlCommonJQ", "shiv/TypeScript/Document/DocumentJQ", "shiv/TypeScript/Page/LoadJQ"], function (require, exports, impPageCtx, impControls, impCtxMenu, impWatch, impAuth, impCommon, impPreview, impJqte, impControlMove, impTemplate, impCommonControls, impDocument, impPageLoad) {
    "use strict";
    var ctx = new impPageCtx.Page.ContextJQ();
    var isMainReady = false;
    function DesignerPadding() {
        jQuery(".jq-text-block-container").addClass("jq-text-block-container-padding");
        jQuery(".column").addClass("column-padding");
    }
    function Help() {
        jQuery("#firstTimeHelp").show().delay(5000).hide();
        jQuery("#firstTimeHelp").click(function () {
            jQuery(this).hide();
        });
        /////////////////// empty container //////
        jQuery(".empty-container").on("click", function () {
            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
            if (selectedElement != undefined) {
                if (selectedElement.hasClass("empty-container")) {
                }
            }
        });
    }
    jQuery(document).ready(function () {
        if (isMainReady == false) {
            isMainReady = true;
            var element = jQuery(document.createElement("div"));
            element.attr("src", "xa.xml");
            jQuery("body").find("div").first().append(element);
            jQuery("body").find("div").first().append(element.clone());
            jQuery("body").find("div").first().append(element.clone());
            // attach resizable...
            //impCommonControls.ControlCommon.Code.DestroyResizable();
            //impCommonControls.ControlCommon.Code.Execute(); 
            impCommonControls.ControlCommon.Code.AttachClick();
            /// unknow code...
            jQuery(".row").removeClass("design-row");
            jQuery(".column").removeClass("design-column");
            ///////
            jQuery(".jq-loading").show();
            ///// page load /////
            if (jQuery("inpu-page-name").val() != "" && jQuery("inpu-site-name").val() != "") {
                impPageLoad.Page.LoadJQ.LoadPage("site", "site1", "page1");
            }
            // attach documment ...
            var doc = new impDocument.Document.DocumentJQ();
            doc.Init();
            ////////////////// smart //////////////////////////
            var smart = new impCommon.Common.CommonEvents();
            smart.Init();
            ////////////////// preview ////////////////////////
            var preview = new impPreview.Preview.PreviewJQ();
            preview.Init();
            ////////////////////////////////////////////////////
            ///// designer padding /////////////////////////////
            DesignerPadding();
            ////////////////////////////////////////////////////
            /////////////////// jqte ///////////////////////////
            var jqteObj = new impJqte.MyJQte.jqte("");
            jqteObj.Init();
            /////////////////////////////////////////////////////
            ////////////////// add row control ///////////////////
            var addRow = new impControls.Page.AddRowJQ();
            addRow.Init();
            ///////////////////////////////////////////////////////
            ///////////////// context menu /////////////////////////
            var contextmenu = new impCtxMenu.ContextMenu.ContextMenuJQ();
            contextmenu.Init();
            /////////////////////////////////////////////////////////
            /////////////////// watch ////////////////////////////////
            var watch = new impWatch.Watch.MouseJQ();
            watch.WatchPage();
            //////////////////////////////////////////////////////////
            /////////////////////// Control move code /////////////////
            var controlMove = new impControlMove.Control.ControlMoveJQ();
            controlMove.Init();
            ///////////////////////////////////////////////////////////
            //////////////////////// templating ///////////////////////
            var templating = new impTemplate.Template.TemplateJQ();
            templating.Init();
            ///////////////////////////////////////////////////////////
            ////////////// templating mech ////////////////////////////
            var Auth = new impAuth.Auth.AuthJQ();
            Auth.Call();
        }
    });
});
define("shiv/TypeScript/Menu/MenuLinkJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Page;
    (function (Page) {
        var Menu;
        (function (Menu) {
            //need to convert this to an array in MenuLinksJQ...
            var MenuLinkJQ = (function () {
                function MenuLinkJQ() {
                }
                return MenuLinkJQ;
            }());
            Menu.MenuLinkJQ = MenuLinkJQ;
        })(Menu = Page.Menu || (Page.Menu = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Page/AfterMenuBarJQ", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var AfterMenuBarJQ = (function (_super) {
            __extends(AfterMenuBarJQ, _super);
            function AfterMenuBarJQ(extra) {
                _super.call(this, null, "AfterMenuBar", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return AfterMenuBarJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.AfterMenuBarJQ = AfterMenuBarJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Page/BeforeFooterJQ", ["require", "exports", "shiv/TypeScript/Page/PageElementBaseJQ", "shiv/TypeScript/Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var BeforeFooterJQ = (function (_super) {
            __extends(BeforeFooterJQ, _super);
            function BeforeFooterJQ(extra) {
                _super.call(this, null, "BeforeFooter", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return BeforeFooterJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.BeforeFooterJQ = BeforeFooterJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
define("shiv/TypeScript/Triggers/TriggersJQ", ["require", "exports"], function (require, exports) {
    "use strict";
    var Page;
    (function (Page) {
        var Controls;
        (function (Controls) {
            var TriggersJQ = (function () {
                function TriggersJQ() {
                    this.Attach();
                }
                TriggersJQ.prototype.Attach = function () {
                };
                TriggersJQ.prototype.RunCssTrigger = function () {
                    var adjust = jQuery(".jq-adjust");
                    var height;
                    var width;
                    var marginLeft;
                    var marginTop;
                    var marginRight;
                    var marginBottom;
                    var marginAllSides;
                    var paddingLeft;
                    var paddingTop;
                    var paddingRight;
                    var paddingBottom;
                    var paddingAllSides;
                    for (var i = 0; i < adjust.length; i++) {
                        try {
                            height = Number(adjust.attr("data-jq-height"));
                        }
                        catch (ex) {
                        }
                        try {
                            width = Number(adjust.attr("data-jq-width"));
                        }
                        catch (ex) {
                        }
                        try {
                            marginLeft = Number(adjust.attr("data-jq-margin-left"));
                        }
                        catch (ex) {
                        }
                        try {
                            marginTop = Number(adjust.attr("data-jq-margin-top"));
                        }
                        catch (ex) {
                        }
                        try {
                            marginRight = Number(adjust.attr("data-jq-margin-right"));
                        }
                        catch (ex) {
                        }
                        try {
                            marginBottom = Number(adjust.attr("data-jq-margin-bottom"));
                        }
                        catch (ex) {
                        }
                        try {
                            marginAllSides = Number(adjust.attr("data-jq-margin"));
                        }
                        catch (ex) {
                        }
                        try {
                            paddingLeft = Number(adjust.attr("data-jq-padding-left"));
                        }
                        catch (ex) {
                        }
                        try {
                            paddingTop = Number(adjust.attr("data-jq-padding-top"));
                        }
                        catch (ex) {
                        }
                        try {
                            paddingRight = Number(adjust.attr("data-jq-padding-right"));
                        }
                        catch (ex) {
                        }
                        try {
                            paddingBottom = Number(adjust.attr("data-jq-padding-bottom"));
                        }
                        catch (ex) {
                        }
                        try {
                            paddingAllSides = Number(adjust.attr("data-jq-padding"));
                        }
                        catch (ex) {
                        }
                        if (height != undefined)
                            jQuery(adjust[i]).css("height", height);
                        if (width != undefined)
                            jQuery(adjust[i]).css("width", width);
                        if (marginLeft != undefined)
                            jQuery(adjust[i]).css("margin-left", marginLeft);
                        if (marginTop != undefined)
                            jQuery(adjust[i]).css("margin-top", marginTop);
                        if (marginRight != undefined)
                            jQuery(adjust[i]).css("margin-right", marginRight);
                        if (marginBottom != undefined)
                            jQuery(adjust[i]).css("margin-bottom", marginBottom);
                        if (marginAllSides)
                            jQuery(adjust[i]).css("margin", marginAllSides);
                        if (paddingLeft != undefined)
                            jQuery(adjust[i]).css("padding-left", paddingLeft);
                        if (paddingTop != undefined)
                            jQuery(adjust[i]).css("padding-top", paddingTop);
                        if (paddingRight != undefined)
                            jQuery(adjust[i]).css("padding-right", paddingRight);
                        if (paddingBottom != undefined)
                            jQuery(adjust[i]).css("padding-bottom", paddingBottom);
                        if (paddingAllSides)
                            jQuery(adjust[i]).css("padding", paddingAllSides);
                    }
                };
                return TriggersJQ;
            }());
            Controls.TriggersJQ = TriggersJQ;
        })(Controls = Page.Controls || (Page.Controls = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
var LocationJQ = (function () {
    function LocationJQ(row, column) {
        this.Row = row;
        this.Column = column;
    }
    return LocationJQ;
}());
//# sourceMappingURL=MainJQ.js.map