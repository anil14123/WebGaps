/// <reference path="../../library/jqueryui.d.ts" />
/// <reference path="common/commonevents.ts" />
import impPageCtx = require("./Page/Context/ContextJQ");
import impControls = require("./Controls/ControlsJQ");
import impCtxMenu = require("./ContextMenu/ContextMenuJQ");
import impWatch = require("./Watch/WatchMouseJQ");
import impConsts = require("./Constants/ConstantsJQ");
import impError = require("./Error/ErrorJQ");
import impAuth = require("./_Classes/Auth");
import impJqueryUi = require("./Controls/jqueryUI");
import impCommon = require("./Common/CommonEvents");
import impPreview = require("./Preview/Preview");
import impJqte = require("./jqte/jqtejq");
import impControlMove = require("./Controls/ControlMoveJQ");
import impTemplate = require("./Template/TemplateJQ");
import impCommonControls = require("./Controls/controlcommonjq");


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
        ////////////////////////////////////////////////////

       
    }
});

