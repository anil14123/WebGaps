/// <reference path="nestable.d.ts" />

import impError = require("../../typescript/error/errorjq");

export module Site {

    export class SiteJQ {

        public Init() {

          
        }

        public CreatePage(siteName, pageName) {

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

        }

        public static OnCreatePageSuccess(data, status) {
            // alert("success");

            var site = new SiteJQ();

            site.GetPages(jQuery(".input-site-name-primary").val());

            jQuery(".control-page").hide();

            jQuery(".loading").hide();
        }

        public static OnCreatePageError(request, status, error) {
            // alert(error);
            jQuery(".loading").hide();
        }


        public CreateSite(siteName) {

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

        }

        public static OnCreateSiteSuccess(data, status) {
            // alert("success");

            var site = new SiteJQ();

            site.GetSites();

            jQuery(".control-page").hide();

            jQuery(".loading").hide();

        }

        public static OnCreateSiteError(request, status, error) {
            // alert(error);

            jQuery(".loading").hide();

        }


        public GetPages(siteName: string, success?, error?) {

            if (success == undefined) {
                success = SiteJQ.OnGetPagesSuccess;
            }

            if (error == undefined) {
                error = SiteJQ.OnGetPagesError;
            }

            var data = { siteName: siteName }

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
        }

        public static OnGetPagesSuccess(data, status) {

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
        }

        public static OnGetPagesError(request, status, error) {
            // alert(error);

            jQuery(".loading").hide();
        }



        public GetSites() {
            jQuery.ajax({
                type: "POST",
                url: "/services/pageService.asmx/getSites",
                //data: saveData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: SiteJQ.OnGetSitesSuccess,
                error: SiteJQ.OnGetSitesError
            });
        }

        public static OnGetSitesSuccess(data, status) {

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
        }

        public static OnGetSitesError(request, status, error) {
            // alert(error);
            jQuery(".loading").hide();
        }



        public AttachOpenEvent() {

        }

        public AttachCreateEvent() {

        }

        public AttachEditEvent() {


        }
    }
}