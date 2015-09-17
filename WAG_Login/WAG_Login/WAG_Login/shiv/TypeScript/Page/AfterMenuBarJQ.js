var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    var Page;
    (function (Page) {
        var AfterMenuBarJQ = (function (_super) {
            __extends(AfterMenuBarJQ, _super);
            function AfterMenuBarJQ(extra) {
                _super.call(this, null, "AfterMenuBar", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return AfterMenuBarJQ;
        })(impPage.Page.PageElementBaseJQ);
        Page.AfterMenuBarJQ = AfterMenuBarJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=AfterMenuBarJQ.js.map