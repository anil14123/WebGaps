import impPage = require("./PageElementBaseJQ");
import impConsts = require("../Constants/ConstantsJQ");

export module Page {

    export class HeaderJQ extends impPage.Page.PageElementBaseJQ {

        constructor(extra, typeName?: string) {
            if (typeName != undefined) {
            }
            else {
                typeName = "Header";
            }
            super(null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
        }

    }
}