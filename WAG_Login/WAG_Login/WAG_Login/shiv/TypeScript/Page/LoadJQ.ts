
import impCommonCode = require("../Controls/ControlCommonJQ");
import impCommonSmart = require("../Common/CommonEvents");
import impUndoManager = require("../UndoManager/UndoManager");
import impError = require("../Error/ErrorJQ");

export module Page {

    export class LoadJQ {

        public static LoadPage(siteId: string, siteName: string, pageName: string) {

            var url = "/services/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
            $.ajax
                ({
                    url: url,
                    type: "GET",
                    cache: false,

                    success: function (data) {

                        jQuery(".jq-loading").hide();

                        var e = jQuery(document.createElement("div"));
                        var pg = jQuery(document.createElement("div"));
                        e.html(data);//.find("page").remove(".ui-resizable-handle");
                        pg.append(e.html());

                        var pgResizableRemoved = pg;

                        if (pgResizableRemoved.find("page").length > 0) {
                            jQuery("page").html(pgResizableRemoved.find("page").html());

                            impCommonCode.ControlCommon.Code.DestroyResizable();
                            impCommonCode.ControlCommon.Code.Execute();

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            jQuery("#control-templates").hide();
                        }
                        else {
                            jQuery("#control-templates").show();
                        }

                        var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        errorHandler.ActionSuccess("Your page has loaded. <br>Start designing.");
                    },

                    error: function (e) {

                        jQuery(".jq-loading").hide();

                        var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        errorHandler.ActionFail("Page Loading Failed ! <br> Try again latter");
                    }
                });
        }

    }

}