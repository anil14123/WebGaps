var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    var Page;
    (function (Page) {
        var ContentJQ = (function (_super) {
            __extends(ContentJQ, _super);
            function ContentJQ(extra, typeName) {
                if (typeName != undefined) {
                }
                else {
                    typeName = "Content";
                }
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return ContentJQ;
        })(impPage.Page.PageElementBaseJQ);
        Page.ContentJQ = ContentJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=ContentJQ.js.map