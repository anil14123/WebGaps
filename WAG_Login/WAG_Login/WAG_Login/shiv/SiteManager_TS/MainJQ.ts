/// <reference path="../../library/jqueryui.d.ts" />

import impError = require("../typescript/error/errorjq");
import impSite = require("./site/Sitejq");

var isMainReady = false;

jQuery(document).ready(function () {

    if (isMainReady == false) {
        isMainReady = true;

        var site =new impSite.Site.SiteJQ();
        
        site.GetSites();
    }
});

