
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");

import impUndoManager = require("../UndoManager/UndoManager");

var changed = false;

export module JQte {

    export class JQteJQ {

        public Init() {
            this.KeyUp();
            this.Click();
            this.FocusOut();
        }

        public FocusOut() {

            jQuery("page .jqte_editor").unbind("keyup");
            jQuery("page .jqte_editor").on("keyup",function () {

                changed = true;
            })

            jQuery(".jqte_toolbar a").unbind("click");
            jQuery(".jqte_toolbar a").on("click", function () {
                changed = true;
            });

            jQuery("page .jqte_editor").unbind("focusout");
            jQuery("page .jqte_editor").on("focusout", function () {

                if (changed == true) {
                    changed = false;

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

            })

        }

        public KeyUp() {

            // adjusting toolbar...
            jQuery(".jqte").unbind("keyup");
            jQuery(".jqte").on("keyup", function (e) {

                var left = jQuery(this).find(".jqte_toolbar").css("left")

                if (left != undefined) {
                    left = left.replace("px", "");

                    if (Number(left) > 15) { // 15 px is for safety

                        jQuery(this).trigger("click");
                    }
                }
            });

        }

        public Click() {

            // double click editable ...
            jQuery("page .jqte_editor").unbind("click");
            jQuery("page .jqte_editor").on("click", function () {

                var errorHandler = new impError.ErrorHandle.ErrorJQ();

                errorHandler.ActionHelp("Help: Double click to edit.");

            });

            jQuery(".empty-container-text").unbind("dblclick");
            jQuery(".empty-container-text").on("dblclick", 
                    function () {

                        if (jQuery(this).find(".jqte").length > 0) {
                            $(this).draggable({ disabled: true });
                            jQuery(this).find(".jqte_editor").focus();
                            jQuery(this).find(".jqte_editor").css("cursor", "pointer");
                        }

                    });

            // toolbar positioning ...
            jQuery(".jqte").unbind("click");
            jQuery(".jqte").on("click", function (e) {

                jQuery(".jqte_toolbar").hide();

                var editor = jQuery(this).find(".jqte_editor");

                var rect;
                if (editor.length > 0) {
                    rect = editor[0].getBoundingClientRect();
                }

                if (rect == undefined) {
                    return;
                }

                var isTopFlag = false;
                var isLefFlag = false;

                if ((rect.top) < 150) {
                    isTopFlag = true;
                }

                if (rect.right + 200 > jQuery(window).width()) {
                    isLefFlag = true;
                }

                if (isTopFlag == true) {
                    if (jQuery(this).closest("#text_edtor_as_is").length >= 1 || true == true) {
                        jQuery(this).find(".jqte_toolbar").css("top", 0 + "px");

                        jQuery(this).find(".jqte_toolbar").css("left", (jQuery(this).width()) + "px");
                    }
                }
                else {
                    if (jQuery(this).closest("#text_edtor_as_is").length >= 1 || true == true) {
                        jQuery(this).find(".jqte_toolbar").css("top", -100 + "px");
                    }
                }

                if (isLefFlag == true) {

                    if (jQuery(this).closest("#text_edtor_as_is").length >= 1 || true == true) {
                        if (isTopFlag == false) {
                            jQuery(this).find(".jqte_toolbar").css("top", 0 + "px");
                        }

                        jQuery(this).find(".jqte_toolbar").css("left", -250 + "px");
                    }
                }
                else {
                    if (isTopFlag == false) {
                        if (jQuery(this).closest("#text_edtor_as_is").length >= 1 || true == true) {
                            jQuery(this).find(".jqte_toolbar").css("left", 0);
                        }

                    }
                }


                //if ((rect.left) + 200 > jQuery(window).width()) {
                //    jQuery(this).find(".jqte_toolbar").css("left", "-50px");
                //}

                jQuery(this).find(".jqte_toolbar").height(100);
                jQuery(this).find(".jqte_toolbar").width(250);

                jQuery(this).find(".jqte_toolbar").show();

                e.stopPropagation();
            });

            // draggable   ...

            jQuery("page").unbind("click");
            jQuery("page").on("click", function (e) {

                impWatch.Watch.MouseJQ.ProcessClick(e);

                /////// context menu hide //////
                jQuery("#contextMenu").hide(500);              // To hide the context menu
                jQuery("#smInsertNextPrev").hide(500);

                /////////////////

                jQuery(".jqte_toolbar").hide();

                jQuery("page .jqte_editor").css("cursor", "move");

                if (jQuery(e.target).closest(".jqte").length > 0) {
                    $(".empty-container-text").draggable({ disabled: true });
                }
                else {
                    $(".empty-container-text").draggable({ disabled: false });
                }

            });

        }
    }

}