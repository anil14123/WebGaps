/// <reference path="../../../library/jqueryui.d.ts" />
define(["require", "exports", "./site/Sitejq"], function (require, exports, impSite) {
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
//# sourceMappingURL=MainJQ.js.map