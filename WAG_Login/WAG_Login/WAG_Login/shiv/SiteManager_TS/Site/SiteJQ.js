define(["require", "exports"], function (require, exports) {
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
                var result = data.d;
                jQuery(".page-manager-data").html("");
                for (var i = 0; i < result.length; i++) {
                    var sitedata = jQuery(".page-data.hide").clone();
                    sitedata.removeClass("hide");
                    var name = result[i].Name.replace(".html", "");
                    sitedata.find(".page-name").html(name);
                    var a = jQuery(document.createElement("a"));
                    var link = result[i].Link;
                    link = link.replace("?", "&");
                    a.attr("href", "/shiv/designer.aspx?PageName=" + link + "&" + "SiteName=" + jQuery(".input-site-name-primary").val());
                    a.addClass("white-link");
                    a.append("Edit");
                    sitedata.find(".edit-page").append(a);
                    jQuery(".page-manager-data").append(sitedata);
                }
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
        })();
        Site.SiteJQ = SiteJQ;
    })(Site = exports.Site || (exports.Site = {}));
});
//# sourceMappingURL=sitejq.js.map