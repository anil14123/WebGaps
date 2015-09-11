define(["require", "exports"], function (require, exports) {
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
                alert("success");
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