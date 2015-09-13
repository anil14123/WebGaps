

export module CssManager {


    export class Menu {
        Id;
        MenuName;
        Color;
        MenuId;

    }


    export class CssManagerJQ {

        Menus: Menu[];

        constructor() {

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
            ]

        }

        cssPath = "/Content/Menus/[MenuName]/[Color]/menu.css";
        jsPath = "/Content/Menus/[MenuName]/[Color]/menu.js";
        htmlPath = "/Content/Menus/[MenuName]/[Color]/index.html";
        public GetHtml(fileId) {
            try {

                this.Menus[fileId];

                var m: Menu;

                m = this.Menus[fileId];

                var html = this.htmlPath.replace("[MenuName]", m.MenuName);

                html = html.replace("[Color]", m.Color);

                return html;
            }
            catch (ex) {
            }
        }

        public Add(fileId) {
            try {

                this.Menus[fileId];

                var m: Menu;

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
        }

        public Remove(fileId) {
            try {
                this.Menus[fileId];

                jQuery("link[menu-id=' " + fileId + "']").remove();
                jQuery("script[menu-id='" + fileId + "']").remove();

            }
            catch (ex) {
            }

        }
    }

}