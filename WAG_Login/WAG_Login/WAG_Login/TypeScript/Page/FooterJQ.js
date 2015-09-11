var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    var Page;
    (function (Page) {
        var FooterJQ = (function (_super) {
            __extends(FooterJQ, _super);
            function FooterJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "Footer";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return FooterJQ;
        })(impPage.Page.PageElementBaseJQ);
        Page.FooterJQ = FooterJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=FooterJQ.js.map