import impPage = require("./PageElementBaseJQ");
import impConsts = require("../Constants/ConstantsJQ");

export module Page {

    export class FooterJQ extends impPage.Page.PageElementBaseJQ {

        constructor(extra, typeName?: string) {

            if (typeName != undefined) {
            }
            else {
                typeName = "Footer";
            }
            super(null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
        }
    }
}