import impError = require("../Error/ErrorJQ");

export module Save {

    export class SaveJQ {

        scripts: string;
        styles: string;
        page: string;

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

            if (data.Error != "") {
                errorHandler.ActionSuccess("Page saved");
            }
            
        }

        public static OnSaveError(request, status, error) {
            alert(error);
        }


    }


}