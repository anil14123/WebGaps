
import impCommonCode = require("../Controls/ControlCommonJQ");
import impCommonSmart = require("../Common/CommonEvents");
import impUndoManager = require("../UndoManager/UndoManager");
import impError = require("../Error/ErrorJQ");
import impAuth = require("../_Classes/Auth");
import impPreview = require("../Preview/Preview");
import impStatic = require("../Constants/ConstantsJQ");

export module Page {

    export class LoadJQ {

        public static LoadPage(siteId: string, siteName: string, pageName: string) {

            var url = "/services/sites/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
            $.ajax
                ({
                    url: url,
                    type: "GET",
                    cache: false,

                    success: function (data) {

                        impAuth.Auth.AuthJQ.HideLoading();
                        
                        //console.log("isloadhit");

                        var e = jQuery(document.createElement("div"));
                        var pg = jQuery(document.createElement("div"));
                        e.html(data);//.find("page").remove(".ui-resizable-handle");
                        pg.append(e.html());

                        var pgResizableRemoved = pg;

                        if (pgResizableRemoved.find("page").length > 0) {
                            jQuery("page").html(pgResizableRemoved.find("page").html());

                            try {
                                jQuery("page").attr("style", pgResizableRemoved.find("page").attr("style"));
                            }
                            catch (ex) {
                            }

                            jQuery("page .jqte-editor").attr("contentEditable", "true");
                            jQuery("page .jqte-editor").css("cursor", "move");
                            jQuery("page .jqte-editor").attr("tabindex", "1");

                            impStatic.Constants.StaticJQ.normalLinkId = jQuery("page .jq-normal-link").length + 10;
                            impStatic.Constants.StaticJQ.editorLinkId = jQuery("page .jq-editor-link").length + 10;

                            jQuery("page .design-page-row").hide();

                            impPreview.Preview.PreviewJQ.ClosePreview();

                            impCommonCode.ControlCommon.Code.DestroyResizable();
                            impCommonCode.ControlCommon.Code.Execute();

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            jQuery("#control-templates").hide();
                        }
                        else {
                            jQuery("#control-templates").show();
                        }

                        jQuery(".jq-row-plus-container").hide();

                        var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        errorHandler.ActionSuccess("Your page is loading. <br>Please wait...");
                    },

                    error: function (e) {

                        impAuth.Auth.AuthJQ.HideLoading();

                        var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        errorHandler.ActionFail("Page Loading Failed ! <br> Try again latter");
                    }
                });
        }

    }

}