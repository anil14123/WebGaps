
import impError = require("../../typescript/error/errorjq");

export module Site {

    export class SiteJQ {

        public Init() {


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
        }

        public static OnCreateSiteError(request, status, error) {
            // alert(error);
        }


        public GetPages(siteName: string) {

            var data = { siteName: siteName }

            var pageData = JSON.stringify(data);

            jQuery.ajax({
                type: "POST",
                url: "/services/pageService.asmx/getPages",
                data: pageData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: SiteJQ.OnGetPagesSuccess,
                error: SiteJQ.OnGetPagesError
            });
        }

        public static OnGetPagesSuccess(data, status) {

            var result = data.d;

            for (var i = 0; i < result.length; i++) {
                var sitedata = jQuery(".page-data.hide").clone();

                sitedata.removeClass("hide");

                sitedata.find(".page-name").html(result[i].name);

                jQuery(".page-manager-data").append(sitedata);
            }
        }

        public static OnGetPagesError(request, status, error) {
            // alert(error);
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

            var result = data.d;

            for (var i = 0; i < result.length; i++) {
                var sitedata = jQuery(".site-data.hide").clone();

                sitedata.removeClass("hide");

                sitedata.find(".site-name").html(result[i].Name);

                var a = jQuery(document.createElement("a"));

                a.attr("href", "PageManager.aspx?SiteName=" + result[i].Name);
                a.addClass("white-link");
                a.append("Open");

                sitedata.find(".open-site").append(a);

                jQuery(".site-manager-data").append(sitedata);
                
            }
        }

        public static OnGetSitesError(request, status, error) {
            // alert(error);
        }



        public AttachOpenEvent() {

        }

        public AttachCreateEvent() {

        }

        public AttachEditEvent() {


        }
    }
}