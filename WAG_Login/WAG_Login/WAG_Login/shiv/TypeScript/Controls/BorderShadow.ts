/// <reference path="spinner.ts" />

import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");

var isBorderReady = false;

export module BorderShadow { 

    export class BorderShadowJQ {
         
        public Init() {
            BorderShadowJQ.AttachBorder();
        }

        public static AttachBorder() {


            jQuery(document).ready(function () {
                if (isBorderReady == false) {
                    isBorderReady = true;

                    jQuery(".b-s-remove").click(function () {

                        var cm = new impCommon.Common.CommonMethodsJQ();

                        jQuery(".control-b-s").spinner("value", 0);
                        jQuery(".b-s-color").val("000000").keyup();

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                        cm.RemoveStyle(selectedElement, "box-shadow");

                        var undo = new impUndoManager.Manager.UndoManager();

                        undo.BeforeOperation();
                    });

                    jQuery(".b-s-glow").click(function () {

                        jQuery(".control-b-s").spinner("value", 0);
                        jQuery(".control-b-s-blur").spinner("value", 35);

                        jQuery(".b-s-color").val("0000FF").keyup();

                        var undo = new impUndoManager.Manager.UndoManager();

                        undo.BeforeOperation();
                    });

                    jQuery('.b-s-color').colorpicker({});
                    //jQuery('.b-s-color').colpick({
                    //    layout: 'hex',
                    //    submit: 0,
                    //    colorScheme: 'dark',
                    //    onChange: function (hsb, hex, rgb, el, bySetColor) {
                    //        jQuery(el).css('border-color', '#' + hex);
                    //        // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                    //        if (!bySetColor) jQuery(el).val(hex).change();
                    //    },
                    //    onHide: function () {
                    //        var undo = new impUndoManager.Manager.UndoManager();

                    //        undo.BeforeOperation();
                    //    }
                    //}).keyup(function () {
                    //    $(this).colpickSetColor(this.value);
                    //});

                    jQuery('.b-s-colorr').trigger("keyup");

                    jQuery(".b-s-color").on("change", function () {

                        BorderShadowJQ.OnChange(this);
                    });

                    jQuery(".control-b-s").spinner(
                        {
                            min: -800,
                            max: 800,
                            step: 1,
                            value: 1,
                            change: function (event, ui) {

                                if (BorderShadowJQ.isSelectProcessing == false) {
                                    BorderShadowJQ.OnChange(this);
                                }
                            },


                            spin: function (event, ui) {

                                if (BorderShadowJQ.isSelectProcessing == false) {
                                    BorderShadowJQ.OnChange(this);
                                }
                            },

                            stop: function (event, ui) {

                                if (BorderShadowJQ.isSelectProcessing == false) {
                                    BorderShadowJQ.OnChange(this);
                                }

                                var undo = new impUndoManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }


                        });
                }
            });

        }

        public static i =0;

        public static isSelectProcessing = false;

        public static OnChange($this) {

            BorderShadowJQ.isSelectProcessing = true;

            try {
            
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    //BorderShadowJQ.i++;
                    //errorHandler.ActionHelp("box shadow : " + selectedElement.css("box-shadow"));

                    var h = jQuery(".control-b-s-h").spinner("value");
                    var v = jQuery(".control-b-s-v").spinner("value");
                    var blur = jQuery(".control-b-s-blur").spinner("value");
                    var color = jQuery('.b-s-color').val();

                    if (color == "") {
                        color = "#000000";
                    }
                    else {
                        color = "#" + color;
                    }

                    var borderShadow = h + "px" + " " + v + "px" + " "
                        + blur + "px" + " " + color;

                    selectedElement.css("box-shadow", borderShadow);

                }
                else {

                }
            }
            catch (ex) {

            }

            BorderShadowJQ.isSelectProcessing = false;
        }

        public static ProcessSelectedValues() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {

                
            }

        }

        public static ProcessSelectNotify() {

            BorderShadowJQ.ProcessSelectedValues();

            //var errorHandler = new impError.ErrorHandle.ErrorJQ();

            //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
        }
    }
}