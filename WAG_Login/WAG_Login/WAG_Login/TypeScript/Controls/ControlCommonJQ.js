define(["require", "exports", "./JQueryUI", "../common/on", "../Jqte/JqteJQ"], function (require, exports, impJQueryUI, impOn, impJqte) {
    var ControlCommon;
    (function (ControlCommon) {
        var Code = (function () {
            function Code() {
            }
            Code.Execute = function () {
                impOn.On.Code.Execute();
                new impJqte.JQte.JQteJQ().Init();
                impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container");
                impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container-image");
                impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container-text");
                impJQueryUI.JQueryUI.CommonCode.ResizableRootElements(".root-elements", "s");
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
            };
            Code.DestroyResizable = function () {
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container-text");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".column");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container-image");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".root-elements");
            };
            return Code;
        })();
        ControlCommon.Code = Code;
    })(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});
//# sourceMappingURL=ControlCommonJQ.js.map