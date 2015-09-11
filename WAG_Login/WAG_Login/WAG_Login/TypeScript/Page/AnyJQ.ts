
import impPage = require("./PageElementBaseJQ");
import impConsts = require("../Constants/ConstantsJQ");

export module Page {

    export class AnyJQ extends impPage.Page.PageElementBaseJQ {
        
        constructor(extra) {

            super(null, "Any", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
        }

    }
}
