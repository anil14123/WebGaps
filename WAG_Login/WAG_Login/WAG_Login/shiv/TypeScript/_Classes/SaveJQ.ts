import impError = require("../Error/ErrorJQ");

export module Save {

    export class SaveJQ {

        scripts: string;
        styles: string;
        page: string;

        public static IsDownloadStarted = false;

        public Download(downloadData) {

            jQuery.ajax({
                type: "POST",
                url: "/services/pageService.asmx/download",
                data: downloadData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: SaveJQ.OnDownloadSuccess,
                error: SaveJQ.OnDownloadError
            });
        }

        public static OnDownloadSuccess(data, status) {

            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            if ((data.d.Error == "" || data.d.Error == null) && data.d.Success == true) {
                errorHandler.ActionSuccess("Click on the download link below  <br> <a target='_blank' class='download-site-link' href='" + data.d.Link + "' > click here </a>");

            }
            else {
                errorHandler.ActionFail("Unable to generate download link...");
            }

        }

        public static OnDownloadError(request, status, error) {

          var errorHandler = new impError.ErrorHandle.ErrorJQ();

          errorHandler.ActionFail("Unable to generate download link...");

        }


        public SavePage(saveData) {
        
           
            jQuery.ajax({
                type: "POST",
                url: "/services/pageService.asmx/savepage",
                data: saveData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: SaveJQ.OnSaveSuccess,
                error: SaveJQ.OnSaveError
            });
        }

        public static OnSaveSuccess(data, status) {
            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            if (data.d.Error != "") {
                errorHandler.ActionSuccess("Page saved");
            }
            else {
                errorHandler.ActionFail("Save Failed! <br> Try again later.");
            }
            
        }

        public static OnSaveError(request, status, error) {
            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            errorHandler.ActionFail("Save Failed! <br> Try again later.");
        
        }


    }


}