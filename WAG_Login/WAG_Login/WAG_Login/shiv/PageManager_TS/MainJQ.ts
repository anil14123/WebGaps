/// <reference path="../../library/jqueryui.d.ts" />

import impError = require("../typescript/error/errorjq");
import impSite = require("../sitemanager_ts/site/sitejq");

var isMainReady = false;

jQuery(document).ready(function () {

    if (isMainReady == false) {
        isMainReady = true;

        var site =new impSite.Site.SiteJQ();

        site.GetPages(jQuery("site-name-primary").text());
    }
});

