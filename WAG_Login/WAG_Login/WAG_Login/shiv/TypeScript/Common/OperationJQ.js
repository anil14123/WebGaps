define(["require", "exports", "../Watch/WatchMouseJQ"], function (require, exports, impWatch) {
    var Operation;
    (function (Operation) {
        var AfterOperationJQ = (function () {
            function AfterOperationJQ() {
            }
            AfterOperationJQ.Execute = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (!selectedElement.closest("column").hasClass("jq-forced-hidden-mobile")) {
                        selectedElement.removeClass("hidden-xs").removeClass("hidden-sm");
                    }
                }
            };
            return AfterOperationJQ;
        })();
        Operation.AfterOperationJQ = AfterOperationJQ;
        var BeforeOperationJQ = (function () {
            function BeforeOperationJQ() {
            }
            BeforeOperationJQ.Execute = function () {
            };
            return BeforeOperationJQ;
        })();
        Operation.BeforeOperationJQ = BeforeOperationJQ;
    })(Operation = exports.Operation || (exports.Operation = {}));
});
//# sourceMappingURL=OperationJQ.js.map