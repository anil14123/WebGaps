
import impPage = require("./PageElementBaseJQ");
import impConsts = require("../Constants/ConstantsJQ");

export module Page {

    export class AfterMenuBarJQ extends impPage.Page.PageElementBaseJQ {

        constructor(extra) {

            super(null, "AfterMenuBar", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
        }

    }
}
