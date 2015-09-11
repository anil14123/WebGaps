
import impPage = require("../PageJQ");
import impConsts = require("../../Constants/ConstantsJQ");

export module Page {
    export class ContextJQ {
        Page: impPage.Page.PageJQ;
        Constants: impConsts.Constants.ConstantsJQ;
        constructor() {
            this.Page = new impPage.Page.PageJQ(null);
            this.Constants = new impConsts.Constants.ConstantsJQ();
        }
    }

}