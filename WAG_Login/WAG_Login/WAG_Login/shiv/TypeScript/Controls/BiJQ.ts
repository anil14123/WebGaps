
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommonCode = require("./ControlCommonJQ");
import impUnodManager = require("../UndoManager/UndoManager");

import impImage = require("../controls/imagejq");

import impCommon = require("../Common/CommonEvents");

var debug = true;


var isBIJQReady = false;

var nextId = 0;

export module BI {

    export class BIJQ {

        public Init() {

            jQuery(document).ready(function () {

                if (isBIJQReady == false) {
                    isBIJQReady = true;


                    jQuery(".smart-menu-bi-control").spinner({

                        min: 0,
                        max: 2000,
                        step: 1,
                        

                        change: function (event, ui) {



                        
                        },
                        spin: function (event, ui) {

                           

                           

                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


                            if (selectedElement != undefined) {

                                var height = jQuery(".smart-menu-bi-height").spinner("value");
                                var width = jQuery(".smart-menu-bi-width").spinner("value");

                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                            }
                        },
                        stop: function (event, ui) {

                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


                            if (selectedElement != undefined) {

                                var height = jQuery(".smart-menu-bi-height").spinner("value");
                                var width = jQuery(".smart-menu-bi-width").spinner("value");

                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                                var undo = new impUnodManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }
                        }
                    });                   
            

                    jQuery(".bi-browse").click(function () {

                        impImage.Image.SelfJQ.GetImages();

                        jQuery("#control-image-bi-library").show();
                    });

                    jQuery(".make-100").click(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {
                            
                            jQuery(".ddn-bi-pixel-type").val("%");

                            var height = 100;
                            jQuery(".smart-menu-bi-height").spinner("value", height);

                            var width = 100;
                            jQuery(".smart-menu-bi-width").spinner("value", width);

                            selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }

                    });

                    jQuery(".ddn-bi-pixel-type").change(function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {
                            var height = jQuery(".smart-menu-bi-height").spinner("value");
                            var width = jQuery(".smart-menu-bi-width").spinner("value");

                            selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }

                    });

                    jQuery(".action-button-insert-bi-image").click(function () {

                        var src = jQuery(".image-library-bi-select").first().attr("src");

                       

                        jQuery(".bi-selected-image").val(src).change();

                        jQuery(".image-library-image").removeClass("image-library-bi-select");
                        jQuery("#control-image-bi-library").hide();
                    });

                    jQuery(".control-bi-controls .bi-selected-image").change(function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });

                    jQuery(".control-bi-controls .internet-bi-image-url").change(function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {

                            selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });


                    jQuery(".control-bi-controls .ddn-bi-repeat").change(function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {
                            selectedElement.css("background-repeat", jQuery(this).val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });

                    jQuery(".control-bi-controls .ddn-bi-attachment").change(function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {
                            selectedElement.css("background-attachment", jQuery(this).val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });

                    jQuery(".control-bi-controls .ddn-bi-position").change(function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement != undefined) {
                            selectedElement.css("background-position", jQuery(this).val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });
                }

            });
                        
        }     

        public static isSelectProcessing = false;
        
        public static ProcessSelectNotify() {

            BIJQ.isSelectProcessing = true;

            try {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {

                    var bi = selectedElement.css("background-image").replace('url(', '').replace(')', '');

                    jQuery(".bi-selected-image").val(bi);

                    var repeat = selectedElement.css("background-repeat");

                    jQuery(".ddn-bi-repeat").val(repeat);

                    var attachment = selectedElement.css("background-attachment");

                    jQuery(".ddn-bi-attachment").val(attachment);

                    var position = selectedElement.css("background-position");

                    jQuery(".ddn-bi-position").val(position);

                    var backgroundSize = selectedElement.css("background-size");

                    if (backgroundSize != undefined) {

                        var wh = backgroundSize.split(" ");

                        if (wh.length >= 2) {
                            var width = wh[0];
                            var heigth = wh[1];

                            jQuery(".ddn-bi-pixel-type").val("px")

                            width = width.replace("px", "");
                            heigth = heigth.replace("px", "");

                            jQuery(".smart-menu-bi-height").spinner("value", heigth);
                            jQuery(".smart-menu-bi-width").spinner("value", width);
                        }
                        else {
                            jQuery(".smart-menu-bi-height").spinner("value", 0);
                            jQuery(".smart-menu-bi-width").spinner("value", 0);
                        }

                    }

                }
            }
            catch (ex) {

            }

            BIJQ.isSelectProcessing = false;
        }   

    }
}