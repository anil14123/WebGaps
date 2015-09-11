define(["require", "exports", "./HeaderJQ", "./MenuBarJQ", "./ContentJQ", "./FooterJQ", "./AnyJQ", "../Menu/MenuTemplateJQ"], function (require, exports, impHeader, impMenuBar, impContent, impFooter, impAny, impMenuTemplate) {
    var Page;
    (function (Page) {
        var PageJQ = (function () {
            function PageJQ(configuration) {
                this.pageConfiguration = configuration;
                this.Header = new impHeader.Page.HeaderJQ(null);
                this.MenuBar = new impMenuBar.Page.MenuBarJQ(null);
                this.MenuTemplate = new impMenuTemplate.Page.Menu.MenuTemplateJQ();
                this.Content = new impContent.Page.ContentJQ(null);
                this.Footer = new impFooter.Page.FooterJQ(null);
                this.Any = new impAny.Page.AnyJQ(null);
            }
            return PageJQ;
        })();
        Page.PageJQ = PageJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=PageJQ.js.map