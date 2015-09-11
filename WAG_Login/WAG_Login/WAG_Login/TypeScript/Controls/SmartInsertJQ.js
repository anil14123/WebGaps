/// <reference path="textjq.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "TextJQ"], function (require, exports, impText) {
    var Smart;
    (function (Smart) {
        var SmartInsertJQ = (function (_super) {
            __extends(SmartInsertJQ, _super);
            function SmartInsertJQ() {
                _super.apply(this, arguments);
            }
            return SmartInsertJQ;
        })(impText.Text.TextJQ);
        Smart.SmartInsertJQ = SmartInsertJQ;
    })(Smart = exports.Smart || (exports.Smart = {}));
});
//# sourceMappingURL=SmartInsertJQ.js.map