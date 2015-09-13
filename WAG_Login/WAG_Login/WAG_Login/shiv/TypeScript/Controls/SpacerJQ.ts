
/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: impCommon.Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonEvents");
import impPageCtx = require("../Page/Context/ContextJQ");

export module Spacer {

    export class SpacerJQ {

        public static InsertSpacer() {

            var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedRowOrColumn.hasClass("column") == true || selectedRowOrColumn.hasClass("empty-container") || window.smartObj != null) {

                var ctx = new impPageCtx.Page.ContextJQ();

                var emptyc = document.createElement("span");
                jQuery(emptyc).addClass("empty-container empty-container-spacer key image-text-other design-css design-empty-css");

                jQuery(emptyc).css("font-size", "14px");

                var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
               
                plusContainer.removeClass("jq-plus-container-not-used");

                var spacer = jQuery( document.createElement("div"));

                spacer.addClass("empty-spacer");

                spacer.html("<center>Space</center>");

                plusContainer.find(".jq-plus-content").append(spacer);

                jQuery(emptyc).append(plusContainer);

                if (window.smartObj == null || window.smartObj.command == "") {
                    ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, undefined, undefined);
                }
                else {
                    ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined, true, undefined);
                }

            }
        }
         
    }

}