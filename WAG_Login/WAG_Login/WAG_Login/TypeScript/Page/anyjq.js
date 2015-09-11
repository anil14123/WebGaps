var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    var Page;
    (function (Page) {
        var AnyJQ = (function (_super) {
            __extends(AnyJQ, _super);
            function AnyJQ(extra) {
                _super.call(this, null, "Any", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return AnyJQ;
        })(impPage.Page.PageElementBaseJQ);
        Page.AnyJQ = AnyJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=anyjq.js.map