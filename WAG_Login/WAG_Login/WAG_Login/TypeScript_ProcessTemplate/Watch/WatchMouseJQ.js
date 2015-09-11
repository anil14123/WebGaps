/// <reference path="../../library/jquery.d.ts" />
define(["require", "exports", "../../TypeScript/Common/CommonMethodsJQ", "../ProcessTemplate/ProcessTemplateJQ"], function (require, exports, impCommon, impProcess) {
    //import impAddRow = require("../Controls/ControlsJQ");
    //import impText = require("../Controls/TextJQ");
    //import impImage = require("../Controls/ImageJQ");
    //import impBorder = require("../Controls/BorderJQ");
    //import impColor = require("../Controls/ColorJQ");
    //import impHeightWidth = require("../SmartMenu/SmartMenuJQ");
    var G_isAttachedWatch = false;
    var isWatchReady = false;
    var Watch;
    (function (Watch) {
        var MouseJQ = (function () {
            function MouseJQ() {
            }
            MouseJQ.ProcessClick = function (e) {
                var common = new impCommon.Common.CommonMethodsJQ();
                MouseJQ.selectedElement = jQuery(e.target);
                alert(MouseJQ.selectedElement.attr("class"));
            };
            MouseJQ.prototype.WatchPage = function () {
                if (G_isAttachedWatch == false) {
                    G_isAttachedWatch = true;
                    jQuery("div", impProcess.Process.TemplateJQ.template).click(function (e) {
                        MouseJQ.ProcessClick(e);
                    });
                    jQuery(document).keyup(function (e) {
                        var ESC = 27;
                        var ENTER = 13;
                        if (e.which === ESC) {
                            jQuery(".control-page").hide();
                            e.preventDefault();
                        }
                    });
                }
            };
            return MouseJQ;
        })();
        Watch.MouseJQ = MouseJQ;
    })(Watch = exports.Watch || (exports.Watch = {}));
});
//# sourceMappingURL=watchMousejq.js.map