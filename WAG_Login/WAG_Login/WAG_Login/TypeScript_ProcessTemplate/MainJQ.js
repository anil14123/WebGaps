/// <reference path="../library/jqueryui.d.ts" />
define(["require", "exports", "./ProcessTemplate/ProcessTemplateJQ"], function (require, exports, impProcess) {
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
            var processTemplate = new impProcess.Process.TemplateJQ();
            processTemplate.Init();
        }
    });
});
//# sourceMappingURL=MainJQ.js.map