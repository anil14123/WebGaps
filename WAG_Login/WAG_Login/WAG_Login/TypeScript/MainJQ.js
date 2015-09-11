define(["require", "exports", "./Page/Context/ContextJQ", "./Controls/ControlsJQ", "./ContextMenu/ContextMenuJQ", "./Watch/WatchMouseJQ", "./Error/ErrorJQ", "./_Classes/Auth", "./Common/CommonEvents", "./Preview/Preview", "./jqte/jqtejq", "./Controls/ControlMoveJQ", "./Template/TemplateJQ", "./Controls/controlcommonjq"], function (require, exports, impPageCtx, impControls, impCtxMenu, impWatch, impError, impAuth, impCommon, impPreview, impJqte, impControlMove, impTemplate, impCommonControls) {
    var ctx = new impPageCtx.Page.ContextJQ();
    var isMainReady = false;
    function DesignerPadding() {
        jQuery(".jq-text-block-container").addClass("jq-text-block-container-padding");
        jQuery(".column").addClass("column-padding");
    }
    function Help() {
        jQuery("#firstTimeHelp").show().delay(5000).hide();
        jQuery("#firstTimeHelp").click(function () {
            jQuery(this).hide();
        });
        /////////////////// empty container //////
        jQuery(".empty-container").on("click", function () {
            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
            if (selectedElement.hasClass("empty-container")) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionHelp("Help: You can add [Text] [Image] [Columns] here.");
            }
        });
    }
    jQuery(document).ready(function () {
        if (isMainReady == false) {
            isMainReady = true;
            // attach resizable...
            impCommonControls.ControlCommon.Code.Execute();
            /// unknow code...
            jQuery(".row").removeClass("design-row");
            jQuery(".column").removeClass("design-column");
            ////////////////// smart //////////////////////////
            var smart = new impCommon.Common.CommonEvents();
            smart.Init();
            ////////////////// preview ////////////////////////
            var preview = new impPreview.Preview.PreviewJQ();
            preview.Init();
            ////////////////////////////////////////////////////
            ///// designer padding /////////////////////////////
            DesignerPadding();
            ////////////////////////////////////////////////////
            /////////////////// jqte ///////////////////////////
            var jqteObj = new impJqte.JQte.JQteJQ();
            jqteObj.Init();
            /////////////////////////////////////////////////////
            ////////////////// add row control ///////////////////
            var addRow = new impControls.Page.AddRowJQ();
            addRow.Init();
            ///////////////////////////////////////////////////////
            ///////////////// context menu /////////////////////////
            var contextmenu = new impCtxMenu.ContextMenu.ContextMenuJQ();
            contextmenu.Init();
            /////////////////////////////////////////////////////////
            /////////////////// watch ////////////////////////////////
            var watch = new impWatch.Watch.MouseJQ();
            watch.WatchPage();
            //////////////////////////////////////////////////////////
            /////////////////////// Control move code /////////////////
            var controlMove = new impControlMove.Control.ControlMoveJQ();
            controlMove.Init();
            ///////////////////////////////////////////////////////////
            //////////////////////// templating ///////////////////////
            var templating = new impTemplate.Template.TemplateJQ();
            templating.Init();
            ///////////////////////////////////////////////////////////
            ////////////// templating mech ////////////////////////////
            var Auth = new impAuth.Auth.AuthJQ();
            Auth.Call();
            ///////////////////////////////////////////////////////////
            //////////// help //////////////////////////////////
            window.setTimeout(Help, 5000);
        }
    });
});
//# sourceMappingURL=MainJQ.js.map