﻿/// <reference path="iwindow.ts" />

import impCopy = require("../Watch/CopyPasteJQ");

var isDocumentReady = false;
import * as jQuery from "jquery";
export module Document {

    export class DocumentJQ {

        public Init() {

            this.Attach();
        }

        public Attach() {

            jQuery(document).ready(function () {

                if (isDocumentReady == false) {
                    isDocumentReady = true;

                    //// working but other functionality failing.... for cntrl + v and paste in textbox.
                    //var $clipboard;
                    //jQuery(document).on('paste', function (e) {

                    //    var currentElement = jQuery(e.target);

                    //    if (currentElement.hasClass("jq-clipboard")) {
                    //        var pastedText = undefined;
                    //        if (window.clipboardData != undefined && window.clipboardData.getData != undefined) { // IE
                    //            try {
                    //                pastedText = window.clipboardData.getData('Text');
                    //            }
                    //            catch (ex) {
                    //            }
                    //        }
                    //        else
                    //            if (event.clipboardData) {
                    //                if (event.clipboardData.items) {
                    //                    var items = event.clipboardData.items;
                    //                    if (items.length > 0) {
                    //                        try {
                    //                            event.clipboardData.items[0].getAsString(function (str) {

                    //                                impCopy.CopyPaste.CopyPasteJQ.SetClipBoard(str);
                    //                                impCopy.CopyPaste.CopyPasteJQ.PasteClipBoard();

                    //                                jQuery("#control-insert-clipboard").hide();
                    //                            });

                    //                            return;
                    //                        }
                    //                        catch (ex) {
                    //                        }
                    //                    }
                    //                }
                    //                if (event.clipboardData.getData != undefined) {
                    //                    try {
                    //                        pastedText = e.clipboardData.getData('text/plain');
                    //                    }
                    //                    catch (ex) {
                    //                    }
                    //                }
                    //            }

                    //        impCopy.CopyPaste.CopyPasteJQ.SetClipBoard(pastedText);
                    //        impCopy.CopyPaste.CopyPasteJQ.PasteClipBoard();

                    //    }

                    //    jQuery("#control-insert-clipboard").hide();

                    //});

                }

            });


        }
    }
}