var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    var Page;
    (function (Page) {
        var BeforeFooterJQ = (function (_super) {
            __extends(BeforeFooterJQ, _super);
            function BeforeFooterJQ(extra) {
                _super.call(this, null, "BeforeFooter", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return BeforeFooterJQ;
        })(impPage.Page.PageElementBaseJQ);
        Page.BeforeFooterJQ = BeforeFooterJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=BeforeFooterJQ.js.map