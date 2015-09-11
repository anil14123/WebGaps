/// <reference path="../library/jqueryui.d.ts" />


import impProcess = require("./ProcessTemplate/ProcessTemplateJQ");

var isMainReady = false;

function Help() {
    jQuery("#firstTimeHelp").show();

    jQuery("#firstTimeHelp").click(function () {
        jQuery(this).hide();
    });

}


jQuery(document).ready(function () {

    if (isMainReady == false) {
        isMainReady = true;

        var processTemplate = new impProcess.Process.TemplateJQ();

        processTemplate.Init();

        //// attach resizable...
        //impCommonControls.ControlCommon.Code.Execute();       

        ///// unknow code...
        //jQuery(".row").removeClass("design-row");
        //jQuery(".column").removeClass("design-column");

        //////////////////// smart //////////////////////////
        //var smart = new impCommon.Common.CommonEvents();

        //smart.Init();

        //////////////////// preview ////////////////////////
        //var preview = new impPreview.Preview.PreviewJQ();

        //preview.Init();
        //////////////////////////////////////////////////////

        ////////////// help //////////////////////////////////
        //Help();
        //////////////////////////////////////////////////////

        ///////////////////// jqte ///////////////////////////

        //var jqteObj = new impJqte.JQte.JQteJQ();

        //jqteObj.Init();
        ///////////////////////////////////////////////////////

        //////////////////// add row control ///////////////////

        //var addRow = new impControls.Page.AddRowJQ();

        //addRow.Init();
        /////////////////////////////////////////////////////////

        /////////////////// context menu /////////////////////////

        //var contextmenu = new impCtxMenu.ContextMenu.ContextMenuJQ();

        //contextmenu.Init();
        ///////////////////////////////////////////////////////////

        ///////////////////// watch ////////////////////////////////

        //var watch = new impWatch.Watch.MouseJQ();

        //watch.WatchPage();
        ////////////////////////////////////////////////////////////

        ///////////////////////// Control move code /////////////////

        //var controlMove = new impControlMove.Control.ControlMoveJQ();

        //controlMove.Init();
        /////////////////////////////////////////////////////////////

        ////////////////////////// templating ///////////////////////
        //var templating = new impTemplate.Template.TemplateJQ();
        //templating.Init();

        /////////////////////////////////////////////////////////////

        //////////////// templating mech ////////////////////////////
        //var Auth = new impAuth.Auth.AuthJQ();

        //Auth.Call();
        /////////////////////////////////////////////////////////////

       
    }
});

