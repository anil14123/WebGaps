
import impWatch = require("../watch/watchMousejq");
var templateLoaded = false;

export module Process {

    export class TemplateJQ {

        public Init() {

            this.AttachGet();
        }

        public static template;

        public AttachGet() {

            jQuery(".search-button").click(function () {

                templateLoaded = false;
                
                jQuery(".website-template").attr("src", jQuery(".search").val());

                jQuery(".website-template").on("load", function () {
                    TemplateJQ.template = jQuery(this).contents();

                    templateLoaded = true;

                    var watch = new impWatch.Watch.MouseJQ();

                    watch.WatchPage();
                });

               
               
            });
        }
    }
}