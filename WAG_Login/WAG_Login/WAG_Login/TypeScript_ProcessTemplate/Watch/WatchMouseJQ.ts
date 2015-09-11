/// <reference path="../../library/jquery.d.ts" />

import impCommon = require("../../TypeScript/Common/CommonMethodsJQ");
import impProcess = require("../ProcessTemplate/ProcessTemplateJQ");

//import impAddRow = require("../Controls/ControlsJQ");
//import impText = require("../Controls/TextJQ");
//import impImage = require("../Controls/ImageJQ");
//import impBorder = require("../Controls/BorderJQ");
//import impColor = require("../Controls/ColorJQ");
//import impHeightWidth = require("../SmartMenu/SmartMenuJQ");

var G_isAttachedWatch = false;

var isWatchReady = false;

export module Watch {

    export class MouseJQ {

        public static selectedElement: JQuery;

        public static ProcessClick(e) {

            var common = new impCommon.Common.CommonMethodsJQ();

            MouseJQ.selectedElement = jQuery(e.target);

            alert(MouseJQ.selectedElement.attr("class"));
        }


        public WatchPage() {

            if (G_isAttachedWatch == false) {
                G_isAttachedWatch = true;

                jQuery("div", impProcess.Process.TemplateJQ.template).click(function (e: JQueryMouseEventObject) {

                    MouseJQ.ProcessClick(e);
                })

                jQuery(document).keyup(function (e) {

                    var ESC = 27;
                    var ENTER = 13;

                    if (e.which === ESC) {
                        jQuery(".control-page").hide();
                        e.preventDefault();
                    }
                });

            }


        }

    }
}