define(["require", "exports"], function (require, exports) {
    "use strict";
    var isTemplateReady = false;
    var Template;
    (function (Template) {
        var TemplateJQ = (function () {
            function TemplateJQ() {
            }
            TemplateJQ.prototype.Init = function () {
                this.Process();
            };
            TemplateJQ.ProcessImmediate = function () {
                jQuery(".jq-template").each(function () {
                    var templateId = jQuery(this).attr("template-id");
                    jQuery(this).append(jQuery(jQuery("#" + templateId).html()).clone());
                });
            };
            TemplateJQ.prototype.Process = function () {
                jQuery(document).ready(function () {
                    if (isTemplateReady == false) {
                        isTemplateReady = true;
                        TemplateJQ.ProcessImmediate();
                    }
                });
            };
            return TemplateJQ;
        }());
        Template.TemplateJQ = TemplateJQ;
    })(Template = exports.Template || (exports.Template = {}));
});
//# sourceMappingURL=TemplateJQ.js.map