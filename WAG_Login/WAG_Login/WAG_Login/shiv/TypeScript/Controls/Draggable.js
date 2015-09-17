define(["require", "exports"], function (require, exports) {
    var Draggable;
    (function (Draggable) {
        var CommonCode = (function () {
            function CommonCode() {
            }
            CommonCode.ControlPage = function () {
                jQuery(".control-page").draggable({ cancel: "div.jq-drag-cancle" });
            };
            return CommonCode;
        })();
        Draggable.CommonCode = CommonCode;
    })(Draggable = exports.Draggable || (exports.Draggable = {}));
});
//# sourceMappingURL=Draggable.js.map