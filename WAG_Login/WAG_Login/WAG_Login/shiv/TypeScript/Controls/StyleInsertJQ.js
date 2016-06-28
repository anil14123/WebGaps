define(["require", "exports", "./ImageJQ", "./TextJQ"], function (require, exports, impImage, impText) {
    "use strict";
    var StyleInsert;
    (function (StyleInsert) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        StyleInsert.SmartObj = SmartObj;
        var InsertJQ = (function () {
            function InsertJQ() {
            }
            InsertJQ.InsertImage = function (selectedElement) {
                window.smartObj = null;
                impImage.Image.SelfJQ.InsertImage("iimages/temp.jpg", selectedElement);
            };
            InsertJQ.InsertText = function (selectedElement) {
                window.smartObj = null;
                impText.Text.TextJQ.InsertTextBlock("text Block");
            };
            return InsertJQ;
        }());
        StyleInsert.InsertJQ = InsertJQ;
    })(StyleInsert = exports.StyleInsert || (exports.StyleInsert = {}));
});
//# sourceMappingURL=StyleInsertJQ.js.map