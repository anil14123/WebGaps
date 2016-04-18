var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
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
        }(impPage.Page.PageElementBaseJQ));
        Page.FooterJQ = FooterJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=FooterJQ.js.map