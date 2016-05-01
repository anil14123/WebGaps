
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impCommonCode = require("../Controls/ControlCommonJQ");
import impJQte = require("../jqte/MyJQte");

var changed = false;
export module OnInsert {

    export class Code {

        public static BackPassed = false;
        public static BackPassedEdit = false;
        

        public Init() {

           
                jQuery("page a").not(".jq-logout").unbind("click");
                jQuery("page a").not(".jq-logout").click(function () {
                    impCommonCode.ControlCommon.Code.AnchorClicked = true;
                });

                jQuery("page .jqte-editor").unbind("click");
                jQuery("page .jqte-editor").on("click", function () {

                    jQuery(".jqte-editor, .column").removeClass("current-editor-scope");

                    jQuery(this).addClass("current-editor-scope");

                })

                jQuery("page .column").unbind("click");
                jQuery("page .column").on("click", function () {

                    if (jQuery("#jqte-edit-stop").css("display") == "none") {
                        jQuery(".jqte-editor, .column").removeClass("current-editor-scope");

                        jQuery(this).addClass("current-editor-scope");
                    }

                })




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

                        jQuery(".current-editor-scope").focus();

                    });

                jQuery(".empty-container-image").unbind("dblclick");
                jQuery(".empty-container-image").on("dblclick",
                    function () {

                        $(this).draggable({ disabled: true });

                    });
            
                jQuery(".empty-container-text").unbind("dblclick");
                jQuery(".empty-container-text").on("dblclick",
                    function () {

                        //var topRowPx = "180px";
                        //var topNotifyPx = "105px";

                        //jQuery("rootx").css("top", topRowPx);
                        //jQuery(".designer-top-row").css("height", topRowPx);
                        //jQuery("#notify").css("top", topNotifyPx);
                        jQuery(".editor").show();

                        //dbl click text editor
                        //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        //errorHandler.ActionHelp("Press [Esc] once to stop editing");

                        $(this).draggable({ disabled: true });
                        jQuery(".current-editor-scope").focus();
                        jQuery(".current-editor-scope").css("cursor", "pointer");


                    });


                jQuery("page .jqte-editor").unbind("mouseup");
                jQuery("page .jqte-editor").on("mouseup", function (e) {

                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });

                jQuery("page .column").unbind("mouseup");
                jQuery("page .column").on("mouseup", function (e) {

                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });

                jQuery(".jq-site-link").unbind("dblclick");
                jQuery(".jq-site-link").on("dblclick",
                    function () {

                        //var topRowPx = "180px";
                        //var topNotifyPx = "105px";

                        //jQuery("rootx").css("top", topRowPx);
                        //jQuery(".designer-top-row").css("height", topRowPx);
                        //jQuery("#notify").css("top", topNotifyPx);
                        jQuery(".editor").show();

                        //dbl click text editor
                        //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        //errorHandler.ActionHelp("Press [Esc] once to stop editing");

                        jQuery(".current-editor-scope").focus();
                        jQuery(".current-editor-scope").css("cursor", "pointer");


                    });

                jQuery("page").unbind("click");
                jQuery("page").on("click", function (e) {

                    impWatch.Watch.MouseJQ.ProcessClick(e);

                    /////// context menu hide //////
                    jQuery("#contextMenu").hide(500);              // To hide the context menu
                    jQuery("#smInsertNextPrev").hide(500);

                    /////////////////

                    if (impCommonCode.ControlCommon.Code.AnchorClicked == true) {

                        impCommonCode.ControlCommon.Code.AnchorClicked = false;

                        if (e.cancelBubble != null) e.cancelBubble = true;
                        if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                        if (e.preventDefault) e.preventDefault();
                        if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                        return false;
                    }


                });
            

        }
    }
}