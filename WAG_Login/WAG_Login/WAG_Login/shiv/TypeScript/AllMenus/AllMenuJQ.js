define(["require", "exports"], function (require, exports) {
    "use strict";
    var Menu;
    (function (Menu) {
        var AllMenuJQ = (function () {
            function AllMenuJQ(menuid) {
                this.menuId = menuid;
            }
            AllMenuJQ.prototype.Init = function () {
                jQuery(".menu").find(".li").mouseenter(function (e) {
                    // adjustment based on window.
                    var left = 147;
                    if (e.pageX > (jQuery(document).width() - 200)) {
                        left = -150;
                    }
                    jQuery(this).parent().find("ul").first().css("left", left + "px");
                    jQuery(this).parent().find("ul").first().css("display", "block");
                });
                jQuery(".menu").find("li").mouseleave(function (e) {
                    jQuery(this).find("ul").first().css("display", "none");
                });
            };
            AllMenuJQ.AttachEvents = function () {
                jQuery(".menu").each(function () {
                    var menuId = jQuery(this).attr("menu-id");
                    var menu = new AllMenuJQ(Number(menuId));
                    menu.Init();
                });
            };
            return AllMenuJQ;
        }());
        Menu.AllMenuJQ = AllMenuJQ;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
//# sourceMappingURL=AllMenuJQ.js.map