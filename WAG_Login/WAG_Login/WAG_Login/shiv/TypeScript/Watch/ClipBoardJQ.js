define(["require", "exports", "../Controls/ImageJQ"], function (require, exports, impImage) {
    "use strict";
    var ClipBoard;
    (function (ClipBoard) {
        var ClipBoardJQ = (function () {
            function ClipBoardJQ() {
            }
            ClipBoardJQ.prototype.InsertImage = function (url) {
                impImage.Image.SelfJQ.InsertImage(url);
            };
            ClipBoardJQ.prototype.InsertText = function (text) {
            };
            return ClipBoardJQ;
        }());
        ClipBoard.ClipBoardJQ = ClipBoardJQ;
    })(ClipBoard = exports.ClipBoard || (exports.ClipBoard = {}));
});
//# sourceMappingURL=ClipBoardJQ.js.map