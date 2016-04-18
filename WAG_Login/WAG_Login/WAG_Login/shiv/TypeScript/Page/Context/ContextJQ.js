define(["require", "exports", "../PageJQ", "../../Constants/ConstantsJQ"], function (require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    (function (Page) {
        var ContextJQ = (function () {
            function ContextJQ() {
                this.Page = new impPage.Page.PageJQ(null);
                this.Constants = new impConsts.Constants.ConstantsJQ();
            }
            return ContextJQ;
        }());
        Page.ContextJQ = ContextJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=ContextJQ.js.map