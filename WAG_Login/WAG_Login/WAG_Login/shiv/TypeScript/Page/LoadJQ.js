define(["require", "exports", "../Controls/ControlCommonJQ", "../UndoManager/UndoManager", "../Error/ErrorJQ", "../_Classes/Auth"], function (require, exports, impCommonCode, impUndoManager, impError, impAuth) {
    var Page;
    (function (Page) {
        var LoadJQ = (function () {
            function LoadJQ() {
            }
            LoadJQ.LoadPage = function (siteId, siteName, pageName) {
                var url = "/services/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
                $.ajax({
                    url: url,
                    type: "GET",
                    cache: false,
                    success: function (data) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        //console.log("isloadhit");
                        var e = jQuery(document.createElement("div"));
                        var pg = jQuery(document.createElement("div"));
                        e.html(data); //.find("page").remove(".ui-resizable-handle");
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
            };
            return LoadJQ;
        })();
        Page.LoadJQ = LoadJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=LoadJQ.js.map