define(["require", "exports", "./ImageJQ", "./TextJQ"], function (require, exports, impImage, impText) {
    "use strict";
    var Insert;
    (function (Insert) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        Insert.SmartObj = SmartObj;
        var InsertJQ = (function () {
            function InsertJQ() {
            }
            InsertJQ.InsertImage = function (selectedElement) {
                impImage.Image.SelfJQ.InsertImage("/iimages/temp.jpg");
            };
            InsertJQ.InsertText = function (selectedElement) {
                impText.Text.TextJQ.InsertTextBlock("text Block");
            };
            return InsertJQ;
        }());
        Insert.InsertJQ = InsertJQ;
    })(Insert = exports.Insert || (exports.Insert = {}));
});
//# sourceMappingURL=InsertJQ.js.map