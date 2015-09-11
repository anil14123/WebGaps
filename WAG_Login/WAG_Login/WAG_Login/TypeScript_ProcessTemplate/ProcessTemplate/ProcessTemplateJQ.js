define(["require", "exports", "../watch/watchMousejq"], function (require, exports, impWatch) {
    var templateLoaded = false;
    var Process;
    (function (Process) {
        var TemplateJQ = (function () {
            function TemplateJQ() {
            }
            TemplateJQ.prototype.Init = function () {
                this.AttachGet();
            };
            TemplateJQ.prototype.AttachGet = function () {
                jQuery(".search-button").click(function () {
                    templateLoaded = false;
                    jQuery(".website-template").attr("src", jQuery(".search").val());
                    jQuery(".website-template").on("load", function () {
                        TemplateJQ.template = jQuery(this).contents();
                        templateLoaded = true;
                        var watch = new impWatch.Watch.MouseJQ();
                        watch.WatchPage();
                    });
                });
            };
            return TemplateJQ;
        })();
        Process.TemplateJQ = TemplateJQ;
    })(Process = exports.Process || (exports.Process = {}));
});
//# sourceMappingURL=ProcessTemplateJQ.js.map