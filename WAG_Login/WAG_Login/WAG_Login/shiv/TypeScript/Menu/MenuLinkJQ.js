define(["require", "exports"], function (require, exports) {
    "use strict";
    var Page;
    (function (Page) {
        var Menu;
        (function (Menu) {
            //need to convert this to an array in MenuLinksJQ...
            var MenuLinkJQ = (function () {
                function MenuLinkJQ() {
                }
                return MenuLinkJQ;
            }());
            Menu.MenuLinkJQ = MenuLinkJQ;
        })(Menu = Page.Menu || (Page.Menu = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=MenuLinkJQ.js.map