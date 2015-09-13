
export module Menu {

    export class AllMenuJQ {

        menuId: number;

        constructor(menuid: number) {

            this.menuId = menuid;
        }

        public Init() {

            jQuery(".menu").find(".li").mouseenter(function (e) {

                // adjustment based on window.
                var left = 147;
                if (e.pageX > ($(document).width() - 200)) {
                    left = -150;
                }

                jQuery(this).parent().find("ul").first().css("left", left + "px");
                jQuery(this).parent().find("ul").first().css("display", "block");


            });

            jQuery(".menu").find("li").mouseleave(function (e) {


                jQuery(this).find("ul").first().css("display", "none");


            });

        }

        public static AttachEvents() {

            jQuery(".menu").each(function () {

                var menuId = jQuery(this).attr("menu-id");

                var menu = new AllMenuJQ(Number(menuId));
                menu.Init();

            });
        }

    }

}