
var isDocumentReady = false;

export module Document {

    export class DocumentJQ {

        public Init() {
        }

        public Attach() {

            jQuery(document).ready(function () {

                if (isDocumentReady == false) {
                    isDocumentReady = true;



                }

            });
        }
    }
}