define(["require", "exports", "../Watch/WatchMouseJQ", "../Page/Context/ContextJQ"], function (require, exports, impWatch, impPageCtx) {
    "use strict";
    var Spacer;
    (function (Spacer) {
        var SpacerJQ = (function () {
            function SpacerJQ() {
            }
            SpacerJQ.InsertSpacer = function () {
                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedRowOrColumn != undefined) {
                    if (selectedRowOrColumn.hasClass("column") == true
                        || selectedRowOrColumn.hasClass("empty-container-text")
                        || selectedRowOrColumn.hasClass("empty-container-image")
                        || selectedRowOrColumn.hasClass("empty-container") || window.smartObj != null) {
                        var ctx = new impPageCtx.Page.ContextJQ();
                        var emptyc = document.createElement("span");
                        jQuery(emptyc).addClass("empty-container empty-container-spacer key image-text-other design-css design-empty-css");
                        jQuery(emptyc).css("font-size", "14px");
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container-not-used");
                        var spacer = jQuery(document.createElement("div"));
                        spacer.addClass("empty-spacer");
                        spacer.html("<center></center>");
                        plusContainer.find(".jq-plus-content").append(spacer);
                        jQuery(emptyc).append(plusContainer);
                        if (window.smartObj == null || window.smartObj.command == "") {
                            ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, undefined, undefined);
                        }
                        else {
                            ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, true, undefined);
                        }
                    }
                }
            };
            return SpacerJQ;
        }());
        Spacer.SpacerJQ = SpacerJQ;
    })(Spacer = exports.Spacer || (exports.Spacer = {}));
});
//# sourceMappingURL=SpacerJQ.js.map