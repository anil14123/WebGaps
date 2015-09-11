define(["require", "exports", "../page/anyjq", "../Error/ErrorJQ", "../watch/watchmousejq"], function (require, exports, impAny, impError, impWatch) {
    var On;
    (function (On) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        })();
        On.SmartObj = SmartObj;
        var Code = (function () {
            function Code() {
            }
            Code.Execute = function () {
                Code.BindPlus();
                Code.BindEC();
            };
            Code.BindEC = function () {
                jQuery(".empty-container").unbind("click");
                jQuery(".empty-container").on("click", function () {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement.hasClass("empty-container")) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionHelp("Help: You can add [Text] [Image] [Columns] here.");
                    }
                });
            };
            Code.BindPlus = function () {
                //// plus for row /////////
                jQuery(".jq-prev-row").unbind("click");
                jQuery(".jq-prev-row").on("click", function () {
                    var currentRow = jQuery(this).parentsUntil(".row");
                    var anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-12", "", undefined, undefined, true);
                });
                jQuery(".jq-next-row").unbind("click");
                jQuery(".jq-next-row").on("click", function () {
                    var currentRow = jQuery(this).parentsUntil(".row");
                    var anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-12", "", undefined, undefined, false);
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
                    if (e.pageX > ($(document).width() - 200)) {
                        pageX = e.pageX - 150;
                    }
                    /////////////////
                    jQuery("#smInsertNextPrev").css("left", pageX + "px"); // For updating the menu position.
                    jQuery("#smInsertNextPrev").css("top", pageY + "px"); // 
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
                    if (e.pageX > ($(document).width() - 200)) {
                        pageX = e.pageX - 150;
                    }
                    /////////////////
                    jQuery("#smInsertNextPrev").css("left", pageX + "px"); // For updating the menu position.
                    jQuery("#smInsertNextPrev").css("top", pageY + "px"); // 
                    jQuery("#smInsertNextPrev").fadeIn(500); //  For bringing the context menu in picture.
                });
            };
            return Code;
        })();
        On.Code = Code;
    })(On = exports.On || (exports.On = {}));
});
//# sourceMappingURL=on.js.map