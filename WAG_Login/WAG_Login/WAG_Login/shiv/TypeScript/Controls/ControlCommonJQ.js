define(["require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert"], function (require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    (function (ControlCommon) {
        var Code = (function () {
            function Code() {
            }
            Code.AttachClick = function () {
                jQuery("#control-common-execute").on("click", function () {
                    Code.DestroyResizable();
                    Code.Execute();
                });
            };
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
                impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-plus-container-text");
                // impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-text-block-container");
                impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-plus-container-image");
                //impJQueryUI.JQueryUI.CommonCode.ResizableRootElements(".root-elements", "s");
                impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                jQuery(".image-text-other").each(function (index, _this) {
                    var $this = jQuery(_this);
                    var bottom = $this.offset().top + $this.height();
                    var top = $this.offset().top;
                    var left = $this.offset().left;
                    $this.attr("top", top);
                    $this.attr("bottom", bottom);
                    $this.attr("left", left);
                });
                //impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-plus-container", "");
                impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
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
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
            };
            Code.AnchorClicked = false;
            return Code;
        }());
        ControlCommon.Code = Code;
    })(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});
//# sourceMappingURL=ControlCommonJQ.js.map