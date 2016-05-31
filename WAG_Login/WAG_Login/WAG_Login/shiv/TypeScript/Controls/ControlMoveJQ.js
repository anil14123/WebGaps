define(["require", "exports", "jquery"], function (require, exports, jQuery) {
    "use strict";
    var clicking = false;
    var control;
    var Control;
    (function (Control) {
        var ControlMoveJQ = (function () {
            function ControlMoveJQ() {
            }
            ControlMoveJQ.prototype.Init = function () {
                this.MouseDown();
                this.MouseUp();
                this.MouseMove();
            };
            ControlMoveJQ.prototype.MouseDown = function () {
                jQuery('.control-move-area').on("mousedown", function (e) {
                    control = jQuery(this).closest(".control-page");
                    if (control.length == 0) {
                        control = jQuery(this).closest(".control-properties");
                    }
                    clicking = true;
                    //$('.clickstatus').text('mousedown');
                });
            };
            ControlMoveJQ.prototype.MouseUp = function () {
                jQuery(document).on("mouseup", function (e) {
                    clicking = false;
                    //$('.clickstatus').text('mouseup');
                    //$('.movestatus').text('click released, no more move event');
                });
            };
            ControlMoveJQ.prototype.MouseMove = function () {
                jQuery(document).on("mousemove", function (e) {
                    if (clicking == false)
                        return;
                    if ((e.clientX + 20) > jQuery(window).width() || (e.clientY + 20) > jQuery(window).height()) {
                        return;
                    }
                    if ((e.clientY) < 0) {
                        return;
                    }
                    var width = jQuery(control).css("width");
                    if (width != undefined) {
                        width = width.replace("px", "");
                        var center = Number(width) / 2;
                        var x = e.clientX - (center - 10);
                        var y = e.clientY - 10;
                        jQuery(control).css("left", x);
                        jQuery(control).css("top", y + "px");
                        jQuery(control).css("outline", "0");
                    }
                });
            };
            return ControlMoveJQ;
        }());
        Control.ControlMoveJQ = ControlMoveJQ;
    })(Control = exports.Control || (exports.Control = {}));
});
//# sourceMappingURL=ControlMoveJQ.js.map