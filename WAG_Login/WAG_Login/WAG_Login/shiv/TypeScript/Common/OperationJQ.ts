
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");

export module Operation {

    export class AfterOperationJQ {

        public static Execute() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {
                if (!selectedElement.closest("column").hasClass("jq-forced-hidden-mobile")) {
                    selectedElement.removeClass("hidden-xs").removeClass("hidden-sm");
                }
            }

        }
    }

    export class BeforeOperationJQ {

        public static Execute() {

        }
    }
}