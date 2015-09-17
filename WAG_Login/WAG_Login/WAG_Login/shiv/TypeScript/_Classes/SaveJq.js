define(["require", "exports", "../Error/ErrorJQ"], function (require, exports, impError) {
    var Save;
    (function (Save) {
        var SaveJQ = (function () {
            function SaveJQ() {
            }
            SaveJQ.prototype.SavePage = function (saveData) {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/savepage",
                    data: saveData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SaveJQ.OnSaveSuccess,
                    error: SaveJQ.OnSaveError
                });
            };
            SaveJQ.OnSaveSuccess = function (data, status) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (data.Error != "") {
                    errorHandler.ActionSuccess("Page saved");
                }
            };
            SaveJQ.OnSaveError = function (request, status, error) {
                alert(error);
            };
            return SaveJQ;
        })();
        Save.SaveJQ = SaveJQ;
    })(Save = exports.Save || (exports.Save = {}));
});
//# sourceMappingURL=SaveJq.js.map