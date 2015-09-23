
var isPreviewReady = false;

export module Preview {

    export class PreviewJQ {

        public Init() {

            jQuery(document).ready(function () {

                if (isPreviewReady == false) {

                    isPreviewReady = true;

                    jQuery(".close-preview").click(function () {
                        PreviewJQ.ClosePreview();
                    });

                    jQuery(".show-preview").click(function () {

                        if (jQuery(".control-templates").css("display") =="none") {

                            PreviewJQ.ShowPreview();
                        }
                    });
                }

            });
        }

        public static ShowPreview() {

            jQuery(".jq-row-plus-container").hide();

            jQuery("#notify").clearQueue();
            jQuery("#notify").fadeOut();

            jQuery("page").find(".image-selection").removeClass("image-selection");

            jQuery("page").find(".jqte-editor").removeAttr("contenteditable");

            jQuery("page").find(".jq-text-block-container").removeClass("jq-text-block-container-padding");

            jQuery("page").find(".jq-plus").hide();

            jQuery("page").find(".jqte-editor").removeClass("padding-5");
            //jQuery("page").find(".jq-image-block-image-wrapper").removeClass("padding-5");

            //jQuery("RootX").css("width", "100%");
            // jQuery("controls").hide();

            // debug-css
            jQuery("page").find(".debug-css").hide();
            //jQuery(".root-elements").removeClass("padding-root-elements");
            // jQuery(".root-elements").css("padding-bottom", "0");

            jQuery("page").find(".column").removeClass("column-padding");

            jQuery("page").find(".ui-resizable-handle").hide();
            //jQuery(".debug-row-css").hide();
            //jQuery(".debug-column-css").hide();
            //jQuery(".debug-text-block-css").hide();
            //jQuery(".debug-text-block-container-css").hide();

            jQuery(".show-preview").hide();
            jQuery(".close-preview").show();

            jQuery("page").find(".row").removeClass("design-row");
            jQuery("page").find(".column").removeClass("design-column");
            jQuery("page").find(".jq-text-block").removeClass("design-text-block");
            jQuery("page").find(".empty-container-text").removeClass("design-empty-text-css");
            jQuery("page").find(".jq-text-block-container").removeClass("design-text-block");
            jQuery("page").find(".empty-container").removeClass("design-empty-css");
            jQuery("page").find(".jqte-editor").removeClass("design-jqte_editor");
            //jQuery(".row").css("padding", "0px");
            //jQuery("rootx").css("padding", "0px");
            jQuery("page").find(".page-static-element").hide();

            //jQuery(".root-elements").removeClass("padding-root-elements");

        }

        public static ClosePreview() {
            //jQuery("RootX").css("width", "60%");
            //jQuery("controls").show();

            if (jQuery(".jq-show-plus").css("display") != "none") {
                jQuery(".jq-row-plus-container").show();
            }

            jQuery("page").find(".image-selection").removeClass("image-selection");



            jQuery("page").find(".jqte-editor").attr("contentEditable", "true");
            jQuery("page").find(".jq-text-block-container").addClass("jq-text-block-container-padding");

            jQuery("page").find(".jq-plus").show();

            jQuery("page").find(".jqte-editor").addClass("padding-5");
            //jQuery("page").find(".jq-image-block-image-wrapper").addClass("padding-5");

            //debug-css
            jQuery("page").find(".debug-css").show();
           // jQuery(".root-elements").addClass("padding-root-elements");
            // jQuery(".root-elements").css("padding-bottom", "10");

            jQuery("page").find(".column").addClass("column-padding");

            jQuery("page").find(".ui-resizable-handle").show();

            jQuery("page").find(".debug-text-block-container-css").hide();
            jQuery("page").find(".debug-image-block-container-css").hide();
            //jQuery(".debug-row-css").show();
            //jQuery(".debug-column-css").show();
            //jQuery(".debug-text-block-css").show();
            //jQuery(".debug-text-block-container-css").show();

            jQuery(".show-preview").show();
            jQuery(".close-preview").hide();

            jQuery("page").find(".row").addClass("design-row");
            jQuery("page").find(".column").addClass("design-column");
            jQuery("page").find(".jq-text-block").addClass("design-text-block");
            jQuery("page").find(".jq-text-block-container").addClass("design-text-block");
            jQuery("page").find(".empty-container").addClass("design-empty-css");
            jQuery("page").find(".empty-container-text").addClass("design-empty-text-css");
            jQuery("page").find(".jqte-editor").addClass("design-jqte_editor");
            //jQuery(".row").css("padding", "15px");
            //jQuery("rootx").css("padding", "10px");
            jQuery("page").find(".page-static-element").show();

           // jQuery(".root-elements").addClass("padding-root-elements");

        }

    }
}