define(["require", "exports"], function (require, exports) {
    var CssManager;
    (function (CssManager) {
        var Menu = (function () {
            function Menu() {
            }
            return Menu;
        })();
        CssManager.Menu = Menu;
        var CssManagerJQ = (function () {
            function CssManagerJQ() {
                this.cssPath = "/Content/Menus/[MenuName]/[Color]/menu.css";
                this.jsPath = "/Content/Menus/[MenuName]/[Color]/menu.js";
                this.htmlPath = "/Content/Menus/[MenuName]/[Color]/index.html";
                this.Menus = [
                    {
                        Id: 1,
                        MenuName: "2",
                        Color: "green",
                        HtmlPath: "",
                        MenuId: 2
                    },
                    {
                        Id: 2,
                        MenuName: "2",
                        Color: "blue",
                        HtmlPath: "",
                        MenuId: 3
                    }
                ];
            }
            CssManagerJQ.prototype.GetHtml = function (fileId) {
                try {
                    this.Menus[fileId];
                    var m;
                    m = this.Menus[fileId];
                    var html = this.htmlPath.replace("[MenuName]", m.MenuName);
                    html = html.replace("[Color]", m.Color);
                    return html;
                }
                catch (ex) {
                }
            };
            CssManagerJQ.prototype.Add = function (fileId) {
                try {
                    this.Menus[fileId];
                    var m;
                    m = this.Menus[fileId];
                    var css = this.cssPath.replace("[MenuName]", m.MenuName);
                    css = css.replace("[Color]", m.Color);
                    var js = this.jsPath.replace("[MenuName]", m.MenuName);
                    js = js.replace("[Color]", m.Color);
                    jQuery("head").append("<link menu-id='" + m.Id + "' rel='stylesheet' href='" + css + "'/>");
                    jQuery("head").append("<script menu-id='" + m.Id + "' type='text/javascript' src='" + js + "'> </script>");
                }
                catch (ex) {
                }
            };
            CssManagerJQ.prototype.Remove = function (fileId) {
                try {
                    this.Menus[fileId];
                    jQuery("link[menu-id=' " + fileId + "']").remove();
                    jQuery("script[menu-id='" + fileId + "']").remove();
                }
                catch (ex) {
                }
            };
            return CssManagerJQ;
        })();
        CssManager.CssManagerJQ = CssManagerJQ;
    })(CssManager = exports.CssManager || (exports.CssManager = {}));
});
//# sourceMappingURL=cssManagerJQ.js.map