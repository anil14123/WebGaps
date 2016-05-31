
var isInsertToolReady = false;
import * as jQuery from "jquery";
export module InsertTool {

    export class InsertToolJQ {

        public Init() {
            this.Process();
        }

        public static ShowInsertTool() {
            //jQuery(".column").each(function () {
            //    $(this).append("<div class='plus-insert-tool'>+</div>");
            //});
        }

        Process() {
            jQuery(document).ready(function () {

                if (isInsertToolReady == false) {
                    isInsertToolReady = true;
                    InsertToolJQ.ShowInsertTool();
                }
            });
        }
    }
}