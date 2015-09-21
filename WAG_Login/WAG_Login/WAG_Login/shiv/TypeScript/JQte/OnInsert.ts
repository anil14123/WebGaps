
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");


var changed = false;
export module OnInsert {

    export class Code {

        public static BackPassed = false;


        public Init() {


            jQuery("page .jqte-editor").unbind("keydown");
            jQuery("page .jqte-editor").on("keydown", function () {

                Code.BackPassed = true;

            })

            jQuery("page .jqte-editor").unbind("keyup");
            jQuery("page .jqte-editor").on("keyup", function () {

                changed = true;
            })

            jQuery("page .jqte-editor").unbind("focusout");
            jQuery("page .jqte-editor").on("focusout", function () {

                if (changed == true) {
                    changed = false;

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

            })

            jQuery(".empty-container-text").unbind("click");
            jQuery(".empty-container-text").on("click",
                function () {

                    jQuery(".jqte-editor").removeClass("current-editor-scope");

                    jQuery(this).find(".jqte-editor").addClass("current-editor-scope");

                    jQuery(this).find(".jqte-editor").focus();

                });

            jQuery(".empty-container-text").unbind("dblclick");
            jQuery(".empty-container-text").on("dblclick",
                function () {

                    jQuery("rootx").css("top", "90px");
                    jQuery(".designer-top-row").css("height", "90px");
                    jQuery("#notify").css("top", "90px");
                    jQuery(".editor").show();

                    jQuery(".jqte-editor").removeClass("current-editor-scope");

                    jQuery(this).find(".jqte-editor").addClass("current-editor-scope");

                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Press [Esc] once to stop editing");

                    $(this).draggable({ disabled: true });
                    jQuery(this).find(".jqte-editor").focus();
                    jQuery(this).find(".jqte-editor").css("cursor", "pointer");


                });

            jQuery("page").unbind("click");
            jQuery("page").on("click", function (e) {

                impWatch.Watch.MouseJQ.ProcessClick(e);

                /////// context menu hide //////
                jQuery("#contextMenu").hide(500);              // To hide the context menu
                jQuery("#smInsertNextPrev").hide(500);

                /////////////////

       


            });

        }
    }
}