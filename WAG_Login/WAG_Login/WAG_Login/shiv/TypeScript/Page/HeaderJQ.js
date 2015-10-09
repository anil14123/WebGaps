var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    var Page;
    (function (Page) {
        var HeaderJQ = (function (_super) {
            __extends(HeaderJQ, _super);
            function HeaderJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "Header";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return HeaderJQ;
        })(impPage.Page.PageElementBaseJQ);
        Page.HeaderJQ = HeaderJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=HeaderJQ.js.map