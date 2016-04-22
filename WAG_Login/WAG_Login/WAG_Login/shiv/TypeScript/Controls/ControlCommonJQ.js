define(["require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert"], function (require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    (function (ControlCommon) {
        var Code = (function () {
            function Code() {
            }
            Code.Execute = function () {
                impOn.On.Code.Execute();
                //new impJqte.JQte.JQteJQ().Init();
                new impJqteOnInsert.OnInsert.Code().Init();
                impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container");
                //working great both
                //impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container-image");
                //impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container-text");
                //impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-site-link-container");
                //impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-plus-container");
                impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link");
                // impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-plus-container-text");
                impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-text-block-container");
                impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-plus-container-image");
                //impJQueryUI.JQueryUI.CommonCode.ResizableRootElements(".root-elements", "s");
                impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link", "");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container", "");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-menu", "");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-text", "");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-image", "");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-spacer", "");
                //impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-plus-container", "");
                impJQueryUI.JQueryUI.CommonCode.Droppable(".column");
                impJQueryUI.JQueryUI.CommonCode.Droppable(".empty-container");
                jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                //jQuery(".ui-resizable-handle").hide();
            };
            Code.DestroyResizable = function () {
                //working great both
                //impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container-image");
                //impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container-text");
                //impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-plus-container");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link");
                // impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-plus-container-text");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-text-block-container");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-plus-container-image");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".column");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".root-elements");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".adjust-image-text-other");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".adjust-image-text-other-left");
                //impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-site-link-container");
            };
            Code.AnchorClicked = false;
            return Code;
        }());
        ControlCommon.Code = Code;
    })(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});
//# sourceMappingURL=ControlCommonJQ.js.map