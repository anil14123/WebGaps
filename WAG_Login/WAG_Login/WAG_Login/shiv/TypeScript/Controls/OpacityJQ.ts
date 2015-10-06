
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");

var isOpacityReady = false;
var borderFirstTime = 0;

export module Opacity {

    export class OpacityJQ {

        public Init() {
            OpacityJQ.AttachOpacity();
        }

        public static AttachOpacity() {


            jQuery(document).ready(function () {
                if (isOpacityReady == false) {
                    isOpacityReady = true;

                    jQuery(".control-o-opacity").slider(
                        {
                            min: 0,
                            max: 1,
                            step: 0.1,
                            value: 1,
                            change: function (event, ui) {

                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                            },


                            spin: function (event, ui) {

                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
                                }
                            },

                            stop: function (event, ui) {

                                if (OpacityJQ.isSelectProcessing == false) {
                                    OpacityJQ.OnChange(this);
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

            OpacityJQ.isSelectProcessing = true;

            try {
                if (borderFirstTime != 0) {
                    borderFirstTime = 1;
                    impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                }
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                    var opacity = jQuery(".control-o-opacity").slider("value");

                    selectedElement.css("opacity", opacity);

                }
                else {

                }
            }
            catch (ex) {

            }

            OpacityJQ.isSelectProcessing = false;
        }

        public static ProcessSelectedValues() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {

                var opacity = selectedElement.css("opacity");

                jQuery(".control-o-opacity").slider("value", opacity);

            }

        }

        public static ProcessSelectNotify() {

            OpacityJQ.ProcessSelectedValues();

            //var errorHandler = new impError.ErrorHandle.ErrorJQ();

            //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
        }
    }
}