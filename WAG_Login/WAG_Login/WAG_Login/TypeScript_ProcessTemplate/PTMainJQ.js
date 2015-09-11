/// <reference path="../library/jqueryui.d.ts" />
define(["require", "exports", "../TypeScript/Watch/WatchMouseJQ"], function (require, exports, impWatch) {
    //var ctx = new impPageCtx.Page.ContextJQ();
    var isMainReady = false;
    function Help() {
        jQuery("#firstTimeHelp").show();
        jQuery("#firstTimeHelp").click(function () {
            jQuery(this).hide();
        });
    }
    jQuery(document).ready(function () {
        if (isMainReady == false) {
            isMainReady = true;
            var watch = new impWatch.Watch.MouseJQ();
            watch.WatchPage();
        }
    });
});
//# sourceMappingURL=PTMainJQ.js.map