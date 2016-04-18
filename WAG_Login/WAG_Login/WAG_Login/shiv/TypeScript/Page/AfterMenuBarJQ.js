var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var AfterMenuBarJQ = (function (_super) {
            __extends(AfterMenuBarJQ, _super);
            function AfterMenuBarJQ(extra) {
                _super.call(this, null, "AfterMenuBar", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            return AfterMenuBarJQ;
        }(impPage.Page.PageElementBaseJQ));
        Page.AfterMenuBarJQ = AfterMenuBarJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=AfterMenuBarJQ.js.map