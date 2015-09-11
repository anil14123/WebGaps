
var isTemplateReady = false;

export module Template {

    export class TemplateJQ {

        public Init() {
            this.Process();
        }

        public static ProcessImmediate() {
            jQuery(".jq-template").each(function () {
                var templateId = $(this).attr("template-id");

                $(this).append(jQuery(jQuery("#" + templateId).html()).clone());
            });
        }

        Process() {
            jQuery(document).ready(function () {

                if (isTemplateReady == false) {
                    isTemplateReady = true;
                    TemplateJQ.ProcessImmediate();
                }
            });
        }
    }
}