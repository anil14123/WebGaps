/// <reference path="nestable.d.ts" />
define(["require", "exports"], function (require, exports) {
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
                jQuery('#nestable3').nestable();
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
//# sourceMappingURL=SiteJQ.js.map