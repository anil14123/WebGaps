
/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: StyleInsert.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

import impWatch = require("../Watch/WatchMouseJQ");

import impImage = require("./ImageJQ");
import impText = require("./TextJQ");


import * as jQuery from "jquery";
export module StyleInsert {
    export class SmartObj {
        currentObj: JQuery;
        command = "";
        isDirty = false;
    }

    export class InsertJQ {

        public static InsertImage(selectedElement: JQuery) {

            window.smartObj = null;
            impImage.Image.SelfJQ.InsertImage("iimages/temp.jpg", selectedElement);
        }

        public static InsertText(selectedElement: JQuery) {
            window.smartObj = null;
            impText.Text.TextJQ.InsertTextBlock("text Block");
        }


    }

}