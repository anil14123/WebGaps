﻿/// <reference path="../../../third-party/colpick-jquery-color-picker-master/js/colpick-jquery.d.ts" />

import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");


import * as jQuery from "jquery";
import * as jQueryUI from "jqueryui";
jQueryUI;


var isBorderReady = false;
var borderFirstTime = 0;
export module Padding {

    export class PaddingJQ {


        public static controlId = ".control-padding";

        constructor() {

        }

        public Init() {
           PaddingJQ.AttachPadding();
        }

        public static AttachPadding() {


            jQuery(document).ready(function () {
                if (isBorderReady == false) {
                    isBorderReady = true;

                    jQuery(".padding-advanced-show").on("click" ,function () {

                        jQuery(".jq-padding-advanced").fadeToggle(1);
                    });


                    jQuery(".control-padding-padding").spinner(
                        {
                            min: 1,
                            max: 1500,
                            step: 1,
                            value: 0,
                            change: function (event, ui) {

                                if (PaddingJQ.isSelectProcessing == false) {
                                   PaddingJQ.OnChange(this);
                                }
                            },


                            spin: function (event, ui) {

                                if (PaddingJQ.isSelectProcessing == false) {
                                   PaddingJQ.OnChange(this);
                                }
                            },

                            stop: function (event, ui) {

                                if (PaddingJQ.isSelectProcessing == false) {
                                   PaddingJQ.OnChange(this);
                                }

                                var undo = new impUndoManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }


                        }
                        );

                }
            });

        }

        public static isSelectProcessing = false;

        public static OnChange($this) {

           PaddingJQ.isSelectProcessing = true;

            try {
                if (borderFirstTime != 0) {
                    borderFirstTime = 1;
                    impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                }
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text");
                }

                if (selectedElement != undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                  

                        if (jQuery($this).hasClass("control-padding-all")) {

                            jQuery(".control-padding-padding").not(".control-padding-all").spinner("value", jQuery($this).val());
                        }

                        var common = new impCommon.Common.CommonMethodsJQ();

                        var left = jQuery(".control-padding-left").spinner("value");
                        var top = jQuery(".control-padding-top").spinner("value");
                        var right = jQuery(".control-padding-right").spinner("value");
                        var bottom = jQuery(".control-padding-bottom").spinner("value");

                        if (left != undefined) {
                            selectedElement.css("padding-left", left + "px");

                        }

                        if (top != undefined) {
                            selectedElement.css("padding-top", top + "px");

                        }

                        if (right != undefined) {
                            selectedElement.css("padding-right", right + "px");


                        }

                        if (bottom != undefined) {
                            selectedElement.css("padding-bottom", bottom + "px");

                        }

                        if (left == 0 && top == 0 && right == 0 && bottom == 0) {

                            common.RemoveStyle(selectedElement, "padding-left");
                            common.RemoveStyle(selectedElement, "padding-top");
                            common.RemoveStyle(selectedElement, "padding-bottom");
                            common.RemoveStyle(selectedElement, "padding-right");

                            common.RemoveStyle(selectedElement, "padding");


                        }
                   

                }
                else {

                }
            }
            catch (ex) {

            }

           PaddingJQ.isSelectProcessing = false;
        }

        public static ProcessSelectedValues() {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement.hasClass("empty-container-text")) {
                selectedElement = selectedElement.find(".jq-plus-container-text");
            }

            PaddingJQ.isSelectProcessing = true;

            if (selectedElement != undefined) {



                var left = selectedElement.css("padding-left");
                var top = selectedElement.css("padding-top");
                var right = selectedElement.css("padding-right");
                var bottom = selectedElement.css("padding-bottom");

                if (left != undefined) {

                    left = left.replace("px", "");
                    jQuery(".control-padding-left").spinner("value", left);
                }

                if (top != undefined) {

                    top = top.replace("px", "");
                    jQuery(".control-padding-top").spinner("value", top);
                }

                if (right != undefined) {

                    right = right.replace("px", "");
                    jQuery(".control-padding-right").spinner("value", right);
                }

                if (bottom != undefined) {

                    bottom = bottom.replace("px", "");
                    jQuery(".control-padding-bottom").spinner("value", bottom);
                }

                if (left == top && left == right && left == bottom) {
                    jQuery(".control-padding-all").spinner("value", left);

                }



            }

            PaddingJQ.isSelectProcessing = false;

        }

        public static ProcessSelectNotify() {

           PaddingJQ.ProcessSelectedValues();

            //var errorHandler = new impError.ErrorHandle.ErrorJQ();

            //errorHandler.ActionHelp("Help: You can change [Border] here", "changecolor");
        }

    }
}