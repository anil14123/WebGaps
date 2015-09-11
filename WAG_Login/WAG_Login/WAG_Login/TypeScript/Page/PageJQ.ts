
import impHeader = require("./HeaderJQ")
import impMenuBar = require("./MenuBarJQ")
import impContent = require("./ContentJQ")
import impFooter = require("./FooterJQ")
import impAny = require("./AnyJQ")
import impMenuTemplate = require("../Menu/MenuTemplateJQ");

export module Page {

    export class PageJQ {

        pageConfiguration: JSON;

        Header: impHeader.Page.HeaderJQ;
        MenuBar: impMenuBar.Page.MenuBarJQ;
        MenuTemplate: impMenuTemplate.Page.Menu.MenuTemplateJQ;
        Content: impContent.Page.ContentJQ;
        Footer: impFooter.Page.FooterJQ;
        Any: impAny.Page.AnyJQ;

        constructor(configuration: JSON) {

            this.pageConfiguration = configuration;

            this.Header = new impHeader.Page.HeaderJQ(null);
            this.MenuBar = new impMenuBar.Page.MenuBarJQ(null);
            this.MenuTemplate = new impMenuTemplate.Page.Menu.MenuTemplateJQ();
            this.Content = new impContent.Page.ContentJQ(null);
            this.Footer = new impFooter.Page.FooterJQ(null);
            this.Any = new impAny.Page.AnyJQ(null);

        }

    }

}