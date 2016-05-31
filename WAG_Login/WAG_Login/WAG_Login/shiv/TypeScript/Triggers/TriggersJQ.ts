import * as jQuery from "jquery";
export module Page.Controls {
    export class TriggersJQ {

        constructor() {
            this.Attach();
        }

        Attach() {

        }

        RunCssTrigger() {

            var adjust = jQuery(".jq-adjust");

            var height;
            var width;
            var marginLeft;
            var marginTop;
            var marginRight;
            var marginBottom;
            var marginAllSides;
            var paddingLeft;
            var paddingTop;
            var paddingRight;
            var paddingBottom;
            var paddingAllSides;

            for (var i = 0; i < adjust.length; i++) {

                try {
                    height = Number(adjust.attr("data-jq-height"));
                }
                catch (ex) {
                }

                try {
                    width = Number(adjust.attr("data-jq-width"));
                }
                catch (ex) {
                }

                try {
                    marginLeft = Number(adjust.attr("data-jq-margin-left"));
                }
                catch (ex) {
                }


                try {
                    marginTop = Number(adjust.attr("data-jq-margin-top"));
                }
                catch (ex) {
                }


                try {
                    marginRight = Number(adjust.attr("data-jq-margin-right"));
                }
                catch (ex) {
                }


                try {
                    marginBottom = Number(adjust.attr("data-jq-margin-bottom"));
                }
                catch (ex) {
                }


                try {
                    marginAllSides = Number(adjust.attr("data-jq-margin"));
                }
                catch (ex) {
                }


                try {
                    paddingLeft = Number(adjust.attr("data-jq-padding-left"));

                }
                catch (ex) {
                }

                try {
                    paddingTop = Number(adjust.attr("data-jq-padding-top"));
                }
                catch (ex) {
                }


                try {
                    paddingRight = Number(adjust.attr("data-jq-padding-right"));
                }
                catch (ex) {
                }


                try {
                    paddingBottom = Number(adjust.attr("data-jq-padding-bottom"));
                }
                catch (ex) {
                }


                try {
                    paddingAllSides = Number(adjust.attr("data-jq-padding"));
                }
                catch (ex) {
                }


                if (height != undefined)
                    jQuery(adjust[i]).css("height", height);

                if (width != undefined)
                    jQuery(adjust[i]).css("width", width);

                if (marginLeft != undefined)
                    jQuery(adjust[i]).css("margin-left", marginLeft);

                if (marginTop != undefined)
                    jQuery(adjust[i]).css("margin-top", marginTop);

                if (marginRight != undefined)
                    jQuery(adjust[i]).css("margin-right", marginRight);

                if (marginBottom != undefined)
                    jQuery(adjust[i]).css("margin-bottom", marginBottom);

                if (marginAllSides)
                    jQuery(adjust[i]).css("margin", marginAllSides);

                if (paddingLeft != undefined)
                    jQuery(adjust[i]).css("padding-left", paddingLeft);

                if (paddingTop != undefined)
                    jQuery(adjust[i]).css("padding-top", paddingTop);

                if (paddingRight != undefined)
                    jQuery(adjust[i]).css("padding-right", paddingRight);

                if (paddingBottom != undefined)
                    jQuery(adjust[i]).css("padding-bottom", paddingBottom);

                if (paddingAllSides)
                    jQuery(adjust[i]).css("padding", paddingAllSides);

            }
        }
    }
}