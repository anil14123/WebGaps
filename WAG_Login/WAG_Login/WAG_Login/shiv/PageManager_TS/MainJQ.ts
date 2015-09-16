/// <reference path="../../library/jqueryui.d.ts" />

import impError = require("../typescript/error/errorjq");
import impSite = require("../sitemanager_ts/site/sitejq");

var isMainReady = false;

jQuery(document).ready(function () {

    if (isMainReady == false) {
        isMainReady = true;

        jQuery(".loading").show();

        var site =new impSite.Site.SiteJQ();
      
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

