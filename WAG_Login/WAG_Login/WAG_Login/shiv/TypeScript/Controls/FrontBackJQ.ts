
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");


var isFrontBackReady = false;
var borderFirstTime = 0;
export module FrontBack {

    export class FrontBackJQ {

        public Init() {
            FrontBackJQ.AttachMargin();
        }

        public static AttachMargin() {


            jQuery(document).ready(function () {
                if (isFrontBackReady == false) {
                    isFrontBackReady = true;

                    jQuery(".control-z-zindex").spinner(
                        {
                            min: 1,
                            max: 500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {

                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                            },


                            spin: function (event, ui) {

                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }
                            },

                            stop: function (event, ui) {

                                if (FrontBackJQ.isSelectProcessing == false) {
                                    FrontBackJQ.OnChange(this);
                                }

                                var undo = new impUndoManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }


                        });
                }
            });

        }

        public static isSelectProcessing = false;

        public static OnChange($this) {

            FrontBackJQ.isSelectProcessing = true;

            try {
                if (borderFirstTime != 0) {
                    borderFirstTime = 1;
                    impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                }
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                    if (selectedElement.hasClass("image-text-other")) {

                        var zIndex = jQuery(".control-z-zindex").spinner("value");

                        selectedElement.css("z-index", zIndex);
                    }

                }
                else {

                }
            }
            catch (ex) {

            }

            FrontBackJQ.isSelectProcessing = false;
        }

        public static ProcessSelectedValues() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {


                if (selectedElement.hasClass("image-text-other")) {
                    var zindex = selectedElement.css("z-index");

                    jQuery(".control-z-zindex").spinner("value", zindex);

                }


            }

        }

        public static ProcessSelectNotify() {

            FrontBackJQ.ProcessSelectedValues();

            //var errorHandler = new impError.ErrorHandle.ErrorJQ();

            //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
        }
    }
}