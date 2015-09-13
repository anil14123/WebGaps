import impPage = require("./PageElementBaseJQ");
import impConsts = require("../Constants/ConstantsJQ");

export module Page {

    export class MenuBarJQ extends impPage.Page.PageElementBaseJQ {

        constructor(extra, typeName?: string) {

            if (typeName != undefined) {
            }
            else {
                typeName = "MenuBar";
            }

            super(null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
        }
    }
}