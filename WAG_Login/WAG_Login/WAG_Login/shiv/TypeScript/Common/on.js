define(["require", "exports", "../page/anyjq", "../Watch/WatchMouseJQ", "../Controls/NoUi", "jquery"], function (require, exports, impAny, impWatch, impNoUi, jQuery) {
    "use strict";
    var On;
    (function (On) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
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
                    if (selectedElement != undefined) {
                        if (selectedElement.hasClass("empty-container")) {
                        }
                    }
                });
            };
            Code.BindPlus = function () {
                //// plus for row /////////
                jQuery(".selected-object").unbind("click");
                jQuery(".selected-object").on("click", function () {
                    return false;
                });
                jQuery(".jq-prev-row").unbind("click");
                jQuery(".jq-prev-row").on("click", function () {
                    var currentRow = jQuery(".image-selection:first").closest(".row");
                    var anyjq = new impAny.Page.AnyJQ("");
                    var addedRow = anyjq.AddRow(currentRow, "col-xs-48", "", undefined, undefined, true);
                    if (addedRow != undefined && addedRow.length > 0) {
                        addedRow.find(".column").addClass("newly-added-column");
                    }
                    jQuery("#control-common-execute").trigger("click");
                    jQuery("#refresh-image-text-controls-position").trigger("click");
                    return false;
                });
                jQuery(".jq-next-row").unbind("click");
                jQuery(".jq-next-row").on("click", function () {
                    var currentRow = jQuery(".image-selection:first").closest(".row");
                    var anyjq = new impAny.Page.AnyJQ("");
                    var addedRow = anyjq.AddRow(currentRow, "col-xs-48", "", undefined, undefined, false);
                    if (addedRow != undefined && addedRow.length > 0) {
                        addedRow.find(".column").addClass("newly-added-column");
                    }
                    jQuery("#control-common-execute").trigger("click");
                    jQuery("#refresh-image-text-controls-position").trigger("click");
                    return false;
                });
                jQuery(".jq-select-column").unbind("click");
                jQuery(".jq-select-column").on("click", function () {
                    jQuery(".image-selection:first").closest(".column").trigger("click");
                    return false;
                });
                jQuery(".jq-select-row").unbind("click");
                jQuery(".jq-select-row").on("click", function () {
                    jQuery(".image-selection:first").closest(".row").trigger("click");
                    return false;
                });
                jQuery(".button-move-left").unbind("click");
                jQuery(".button-move-left").on("click", function () {
                    impNoUi.NoUI.MoveJQ.Left();
                    jQuery("#refresh-image-text-controls-position").trigger("click");
                    return false;
                });
                jQuery(".button-move-right").unbind("click");
                jQuery(".button-move-right").on("click", function () {
                    impNoUi.NoUI.MoveJQ.Right();
                    jQuery("#refresh-image-text-controls-position").trigger("click");
                    return false;
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
                    if (e.pageX > (jQuery(document).width() - 200)) {
                        pageX = e.pageX - 150;
                    }
                    /////////////////
                    jQuery("#smInsertNextPrev").css("left", pageX + "px"); // For updating the menu position.
                    jQuery("#smInsertNextPrev").css("top", pageY + "px"); // 
                    jQuery("#smInsertNextPrev").fadeIn(500); //  For bringing the context menu in picture.
                });
            };
            return Code;
        }());
        On.Code = Code;
    })(On = exports.On || (exports.On = {}));
});
//# sourceMappingURL=On.js.map