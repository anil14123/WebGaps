
var clicking = false;
var control : JQuery;
export module Control {

    export class ControlMoveJQ {

        public Init() {
            this.MouseDown();
            this.MouseUp();
            this.MouseMove();
        }

        

        public MouseDown() {

            jQuery('.control-move-area').on("mousedown" ,function (e) {

                control = jQuery(this).closest(".control-page");

                if (control.length == 0) {
                    control = jQuery(this).closest(".control-properties");
                }

               clicking = true;
                //$('.clickstatus').text('mousedown');

            });
        }

        public MouseUp() {
            jQuery(document).on("mouseup" ,function (e) {
                clicking = false;
                   
                //$('.clickstatus').text('mouseup');
                //$('.movestatus').text('click released, no more move event');
            })
        }

        public MouseMove() {

            jQuery(document).on("mousemove",function (e) {
                if (clicking == false) return;

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
                    //// Mouse click + moving logic here
                    //$('.movestatus').text('mouse moving');
                }
            });
        }
    }
}