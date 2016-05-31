
/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: On.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////
import impAny = require("../page/anyjq");
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
export module On {

    export class SmartObj {
        currentObj: JQuery;
        command = "";
        isDirty = false;
    }


    export class Code {

        public static Execute() {
            Code.BindPlus();
            Code.BindEC();
        }

        public static BindEC() {

            jQuery(".empty-container").unbind("click");
            jQuery(".empty-container").on("click", function () {

                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("empty-container")) {
                        //var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        //errorHandler.ActionHelp("Help: You can add [Text] [Image] [Columns] here.");
                    }
                }
            });
        }


        public static BindPlus() {

            //// plus for row /////////

            jQuery(".jq-prev-row").unbind("click");
            jQuery(".jq-prev-row").on("click", function () {

                var currentRow = jQuery(this).closest(".row");

                var anyjq = new impAny.Page.AnyJQ("");

                anyjq.AddRow(currentRow, "col-xs-48", "", undefined, undefined, true);

                jQuery("#control-common-execute").trigger("click");
               
            });

            jQuery(".jq-next-row").unbind("click");
            jQuery(".jq-next-row").on("click", function () {

                var currentRow = jQuery(this).closest(".row");

                var anyjq = new impAny.Page.AnyJQ("");

                anyjq.AddRow(currentRow, "col-xs-48", "", undefined, undefined, false);
                jQuery("#control-common-execute").trigger("click");
               
            });


            //// plus for image-text-other
            
            jQuery(".jq-plus-prev").unbind("click");
            jQuery(".jq-plus-prev").on("click", function (e) {
                window.smartObj = new SmartObj();

                if (jQuery(this).hasClass("image-text-other")) {
                    window.smartObj.currentObj = jQuery(this);
                }
                else {
                    window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                }

                window.smartObj.command = "p";
                window.smartObj.isDirty = false;

                e.stopPropagation();

                // adjustment based on windows
                var pageY = e.pageY;

                if ((jQuery(window).scrollTop() + pageY) >= (jQuery(window).height() - 250)) {

                    pageY = e.pageY - 250;
                }

                var pageX = e.pageX;
                if (e.pageX > (jQuery(document).width() - 200)) {
                    pageX = e.pageX - 150;
                }
                /////////////////

                jQuery("#smInsertNextPrev").css("left", pageX + "px");   // For updating the menu position.
                jQuery("#smInsertNextPrev").css("top", pageY + "px");    // 
                jQuery("#smInsertNextPrev").fadeIn(500); //  For bringing the context menu in picture.

            });

            jQuery(".jq-plus-next").unbind("click");
            jQuery(".jq-plus-next").on("click", function (e) {
                window.smartObj = new SmartObj();

                if (jQuery(this).hasClass("image-text-other")) {
                    window.smartObj.currentObj = jQuery(this);
                }
                else {
                    window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                }
                window.smartObj.command = "n";
                window.smartObj.isDirty = false;

                e.stopPropagation();

                // adjustment based on windows
                var pageY = e.pageY;

                if ((jQuery(window).scrollTop() + pageY) >= (jQuery(window).height() - 250)) {

                    pageY = e.pageY - 180;
                }

                var pageX = e.pageX;
                if (e.pageX > (jQuery(document).width() - 200)) {
                    pageX = e.pageX - 150;
                }
                /////////////////

                jQuery("#smInsertNextPrev").css("left", pageX + "px");   // For updating the menu position.
                jQuery("#smInsertNextPrev").css("top", pageY + "px");    // 
                jQuery("#smInsertNextPrev").fadeIn(500); //  For bringing the context menu in picture.

            });

        }

    }

}