define(["require", "exports", "./Page/Context/ContextJQ", "./Controls/ControlsJQ", "./ContextMenu/ContextMenuJQ", "./Watch/WatchMouseJQ", "./_Classes/Auth", "./Common/CommonEvents", "./Preview/Preview", "./jqte/MyJQte", "./Controls/ControlMoveJQ", "./Template/TemplateJQ", "./Document/DocumentJQ", "./Page/LoadJQ"], function (require, exports, impPageCtx, impControls, impCtxMenu, impWatch, impAuth, impCommon, impPreview, impJqte, impControlMove, impTemplate, impDocument, impPageLoad) {
    "use strict";
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
            if (selectedElement != undefined) {
                if (selectedElement.hasClass("empty-container")) {
                }
            }
        });
    }
    jQuery(document).ready(function () {
        if (isMainReady == false) {
            isMainReady = true;
            var element = jQuery(document.createElement("div"));
            element.attr("src", "xa.xml");
            jQuery("body").find("div").first().append(element);
            jQuery("body").find("div").first().append(element.clone());
            jQuery("body").find("div").first().append(element.clone());
            // attach resizable...
            //impCommonControls.ControlCommon.Code.DestroyResizable();
            //impCommonControls.ControlCommon.Code.Execute();      
            /// unknow code...
            jQuery(".row").removeClass("design-row");
            jQuery(".column").removeClass("design-column");
            ///////
            jQuery(".jq-loading").show();
            ///// page load /////
            if (jQuery("inpu-page-name").val() != "" && jQuery("inpu-site-name").val() != "") {
                impPageLoad.Page.LoadJQ.LoadPage("site", "site1", "page1");
            }
            // attach documment ...
            var doc = new impDocument.Document.DocumentJQ();
            doc.Init();
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
            var jqteObj = new impJqte.MyJQte.jqte("");
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
        }
    });
});
//# sourceMappingURL=MainJQ.js.map