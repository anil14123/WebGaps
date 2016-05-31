
import impImage = require("../Controls/ImageJQ");
import * as jQuery from "jquery";
export module ClipBoard {

    export class ClipBoardJQ {

        public InsertImage(url) {
            impImage.Image.SelfJQ.InsertImage(url);
        }

        public InsertText(text) {

        }
    }
}