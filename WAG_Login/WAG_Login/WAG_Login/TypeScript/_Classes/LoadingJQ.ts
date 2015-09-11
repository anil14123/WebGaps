
export module Loading {

    export class LoadingJQ {

        public src = "/content/loading/colors.gif";

        controlId;

        constructor(controlId) {
           
        this.controlId = controlId;
        this.Create();
                
        }

        Create() {
            var loading = jQuery(".loading.clonable").clone();

            loading.removeClass("clonable");
            loading.addClass("new");
            loading.removeClass("hide");

            loading.find("img").first().attr("src", this.src);

            jQuery(this.controlId ).find(".loading.new").remove();
            jQuery(this.controlId ).append(loading);
        }

        public Init() {

            this.Show();
        }

        IsExist() {
            if (jQuery(this.controlId ).find(".loading.new").length > 0) {
                return true;
            }
            else {
                return false;
            }
        }

        public Show() {

            if (this.IsExist( )) {
                jQuery(this.controlId ).find(".loading.new").first().show();
            }
            else {
                this.Create();
                jQuery(this.controlId ).find(".loading.new").first().show();
            }

          
        }

        public Hide() {
            jQuery(this.controlId ).find(".loading.new").first().hide();
        }

    }
}