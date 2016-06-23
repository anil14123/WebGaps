define(["require", "exports", "../Error/ErrorJQ", "jquery"], function (require, exports, impError, jQuery) {
    "use strict";
    var Save;
    (function (Save) {
        var SaveJQ = (function () {
            function SaveJQ() {
            }
            SaveJQ.prototype.Download = function (downloadData) {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/download",
                    data: downloadData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SaveJQ.OnDownloadSuccess,
                    error: SaveJQ.OnDownloadError
                });
            };
            SaveJQ.OnDownloadSuccess = function (data, status) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                if ((data.d.Error == "" || data.d.Error == null) && data.d.Success == true) {
                    errorHandler.ActionSuccess("Click on the download link below  <br> <a target='_blank' class='download-site-link' href='" + data.d.Link + "' > click here </a>");
                }
                else {
                    errorHandler.ActionFail("Unable to generate download link...");
                }
            };
            SaveJQ.OnDownloadError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Unable to generate download link...");
            };
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
                if (data.d.Error != "") {
                    errorHandler.ActionSuccess("Page saved");
                }
                else {
                    errorHandler.ActionFail("Save Failed! <br> Try again later.");
                }
            };
            SaveJQ.OnSaveError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Save Failed! <br> Try again later.");
            };
            SaveJQ.IsDownloadStarted = false;
            return SaveJQ;
        }());
        Save.SaveJQ = SaveJQ;
    })(Save = exports.Save || (exports.Save = {}));
});
//# sourceMappingURL=SaveJQ.js.map