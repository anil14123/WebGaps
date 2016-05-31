define(["require", "exports", "jquery"], function (require, exports, jQuery) {
    "use strict";
    var isInsertToolReady = false;
    var InsertTool;
    (function (InsertTool) {
        var InsertToolJQ = (function () {
            function InsertToolJQ() {
            }
            InsertToolJQ.prototype.Init = function () {
                this.Process();
            };
            InsertToolJQ.ShowInsertTool = function () {
                //jQuery(".column").each(function () {
                //    $(this).append("<div class='plus-insert-tool'>+</div>");
                //});
            };
            InsertToolJQ.prototype.Process = function () {
                jQuery(document).ready(function () {
                    if (isInsertToolReady == false) {
                        isInsertToolReady = true;
                        InsertToolJQ.ShowInsertTool();
                    }
                });
            };
            return InsertToolJQ;
        }());
        InsertTool.InsertToolJQ = InsertToolJQ;
    })(InsertTool = exports.InsertTool || (exports.InsertTool = {}));
});
//# sourceMappingURL=InsertToolJQ.js.map