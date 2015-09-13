
import impPage = require("./PageElementBaseJQ");
import impConsts = require("../Constants/ConstantsJQ");

export module Page {

    export class BeforeFooterJQ extends impPage.Page.PageElementBaseJQ {

        constructor(extra) {

            super(null, "BeforeFooter", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
        }

    }
}
