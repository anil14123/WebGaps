﻿
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../Undomanager/undomanager");

var isSmartMenuReady = false;
var isChangedWidth = false;
var prevWidthValue = 0;

export module Smart {

    export class SmartMenuJQ {

        public static smartMenuIconId = ".smart-menu-icon";
        public static smartMenuId = ".smart-menu";

        constructor() {

        }

        public Init() {
            SmartMenuJQ.AttachSmartMenu();
        }

        public static ImageHeightProcessing(selectedElement, heightVal, widthVal) {
            if (selectedElement.hasClass("jq-image-block-image")) {
                if (heightVal != '') {
                    var htv = (Number(heightVal) + 55);
                    selectedElement.parent().closest(".key").css("height", htv + "px");

                    selectedElement.parent().closest(".jq-image-block").css("height", (Number(heightVal) + 20) + "px");
                }
                if (widthVal != '') {
                    var wtv = (Number(widthVal) + 35);
                    selectedElement.parent().closest(".key").css("width", wtv + "px");

                    selectedElement.parent().closest(".jq-image-block").css("width", (Number(widthVal) + 20) + "px");
                }

            }

            if (selectedElement.hasClass("jq-image-block-container")) {
                if (heightVal != '') {
                    var htv = (Number(heightVal) - 60);
                    selectedElement.find(".key").css("height", htv + "px");

                    selectedElement.find(".jq-image-block").css("height", (Number(heightVal) - 30) + "px");
                }
                if (widthVal != '') {
                    var wtv = (Number(widthVal) - 35);
                    selectedElement.find(".key").css("width", wtv + "px");

                    selectedElement.find(".jq-image-block").css("width", (Number(widthVal) - 15) + "px");
                }

            }
        }

        public static TextBlockProcessing(selectedElement, heightVal, widthVal) {
            if (selectedElement.hasClass("jq-text-block")) {
                if (heightVal != '') {
                    var htv = (Number(heightVal));
                    selectedElement.parent().closest(".key").css("height", htv + "px");
                }
                if (widthVal != '') {
                    var wtv = (Number(widthVal));
                    selectedElement.parent().closest(".key").css("width", wtv + "px");
                }

            }

            if (selectedElement.hasClass("jq-text-block-container")) {
                if (heightVal != '') {
                    var htv = (Number(heightVal));
                    selectedElement.find(".key").css("height", htv + "px");
                }
                if (widthVal != '') {
                    var wtv = (Number(widthVal));
                    selectedElement.find(".key").css("width", wtv + "px");
                }

            }
        }


        public static AttachSmartMenu() {


            jQuery(document).ready(function () {
                if (isSmartMenuReady == false) {
                    isSmartMenuReady = true;

                    jQuery("#sm").on("click", function () {

                    });

                    jQuery(".smart-menu-width").slider({

                        min: 0,
                        max: 2000,
                        step: 1,

                        change: function (event, ui) {

                          

                            if (jQuery(this).next(".height-px").length == 0) {
                                var spanResult = jQuery(document.createElement("div"));
                                spanResult.addClass("height-px");
                                jQuery(this).after(spanResult);
                            }

                            jQuery(this).next(".height-px").text(ui.value + "px");

                            //if (SmartMenuJQ.isSelectProcessing == false) {
                            //    SmartMenuJQ.OnChange(this, "width");
                            //}

                        
                        },
                        slide: function (event, ui) {

                            if (jQuery(this).next(".height-px").length == 0) {
                                var spanResult = jQuery(document.createElement("div"));
                                spanResult.addClass("height-px");
                                jQuery(this).after(spanResult);
                            }

                            jQuery(this).next(".height-px").text(ui.value + "px");


                            var errorHandler = new impError.ErrorHandle.ErrorJQ();

                            errorHandler.ActionHelp("Help: You can also use <- and -> arrow key on keyboard.");

                            if (impWatch.Watch.MouseJQ.selectedElement != undefined && impWatch.Watch.MouseJQ.selectedElement.hasClass("column")) {

                                var errorHandler = new impError.ErrorHandle.ErrorJQ();

                                errorHandler.ActionHelp("Help: You can also use <- and -> arrow key on keyboard.");

                            }

                            //if (SmartMenuJQ.isSelectProcessing == false) {
                            //    SmartMenuJQ.OnChange(this, "width");
                            //}
                        },
                        stop: function (event, ui) {



                            if (prevWidthValue != ui.value) {

                                isChangedWidth = true;
                            }

                            var flag = "-";

                            if (prevWidthValue > ui.value) {
                                flag = "+";
                            }
                            else {
                                flag = "-";
                            }

                            prevWidthValue = ui.value;

                            if (isChangedWidth == true) {
                                isChangedWidth = false;

                                if (SmartMenuJQ.isSelectProcessing == false) {
                                    SmartMenuJQ.OnChange(this, "width");
                                }

                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


                                if (selectedElement != undefined && !selectedElement.hasClass("row") && !selectedElement.hasClass("root-elements")) {
                                    var undo = new impUndoManager.Manager.UndoManager();

                                    undo.BeforeOperation();
                                }
                            }
                        }

                    });


                    jQuery(".smart-menu-height").slider({

                        min: 0,
                        max: 5000,
                        step: 1,

                        change: function (event, ui) {

                            if (jQuery(this).next(".height-px").length == 0) {
                                var spanResult = jQuery(document.createElement("div"));
                                spanResult.addClass("height-px");
                                jQuery(this).after(spanResult);
                            }

                            jQuery(this).next(".height-px").text(ui.value + "px");

                            if (SmartMenuJQ.isSelectProcessing == false) {
                                SmartMenuJQ.OnChange(this, "height");
                            }
                        },
                        slide: function (event, ui) {

                            if (jQuery(this).next(".height-px").length == 0) {
                                var spanResult = jQuery(document.createElement("div"));
                                spanResult.addClass("height-px");
                                jQuery(this).after(spanResult);
                            }

                            jQuery(this).next(".height-px").text(ui.value + "px");


                            var errorHandler = new impError.ErrorHandle.ErrorJQ();

                            errorHandler.ActionHelp("Help: You can also use <- and -> arrow key on keyboard.");

                            if (SmartMenuJQ.isSelectProcessing == false) {
                                SmartMenuJQ.OnChange(this , "height");
                            }
                        },
                        stop: function (event, ui) {

                            if (SmartMenuJQ.isSelectProcessing == false) {
                                SmartMenuJQ.OnChange(this , "height");
                            }

                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                            var undo = new impUndoManager.Manager.UndoManager();

                            undo.BeforeOperation();


                        }

                    });


                    jQuery(".smart-menu-collapse-close").on("click", function () {

                        jQuery("#sm").find(".smart-menu-controls").slideUp();
                        jQuery("#sm").find(".smart-menu-collapse-show").removeClass("hide");
                        jQuery(this).addClass("hide");
                    });

                    jQuery(".smart-menu-collapse-show").on("click", function () {

                        jQuery("#sm").find(".smart-menu-controls").slideDown();
                        jQuery("#sm").find(".smart-menu-collapse-close").removeClass("hide");
                        jQuery(this).addClass("hide");
                    });

                    jQuery(".smart-menu-controls").on("mouseenter", function () {

                        ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).removeClass("success-notify-background");
                        ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).removeClass("error-notify-background");
                        ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("<div class='yellow-notify-background'> Select any control and change [Height], [Width]." +
                        ////    "<br>You cannot change width for column blocks.<br>You cannot change width for Header, MenuBar, Body, Footer.</div>");
                        ////jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "block");

                        //var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        //errorHandler.ActionHelp("Select any control and change [Height], [Width].");


                    });

                    jQuery(".smart-menu-controls").on("mouseleave", function () {

                        jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("");
                        jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");

                    });

                    jQuery(".smart-menu-button-apply").on("click", function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        var widthVal = $(this).closest(".smart-menu-controls-table").find(".smart-menu-width").slider("value");
                        var heightVal = $(this).closest(".smart-menu-controls-table").find(".smart-menu-height").slider("value")


                        if (selectedElement.hasClass("column")) {

                            SmartMenuJQ.ProcessColumnWidth(widthVal);
                            selectedElement.css("min-height", heightVal + "px");
                        }

                        else {

                            selectedElement.css("width", widthVal + "px");
                            if (selectedElement.hasClass("row") || selectedElement.hasClass("column")) {
                                selectedElement.css("min-height", heightVal + "px");
                            }
                            else {
                                selectedElement.css("height", heightVal + "px");
                            }
                        }

                    });
                }
            });

        }

        public static OnChange($this, whclass) {

            impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;


            if (selectedElement != undefined) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();

                var widthVal = $($this).closest(".smart-menu-controls-table").find(".smart-menu-width").slider("value");
                var heightVal = $($this).closest(".smart-menu-controls-table").find(".smart-menu-height").slider("value")

                if (selectedElement.hasClass("column")) {

                    if (whclass == "width") {
                        SmartMenuJQ.ProcessColumnWidth(widthVal);
                    }


                    if (whclass == "height") {
                        selectedElement.css("min-height", heightVal + "px");
                    }
                }

                else {

                    if (whclass == "width") {
                        if (!selectedElement.hasClass("root-elements") && !selectedElement.hasClass("row")) {
                            selectedElement.css("width", widthVal + "px");
                        }
                    }

                    if (whclass == "height") {
                        if (selectedElement.hasClass("row") || selectedElement.hasClass("column") || selectedElement.hasClass("root-elements")) {
                            selectedElement.css("min-height", heightVal + "px");
                        }
                        else {
                            selectedElement.css("height", heightVal + "px");
                        }
                    }
                }
            }
            else {
              
            }
        }

        public static ProcessColumnWidth(width) {

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {

                var width = width;

                var originalWidth = selectedElement.width();

                var rowWidth = jQuery(selectedElement).parent().width();

                var onePercentPixels = Math.floor((1 * rowWidth) / 100);

                var colXsOnePercentage = 8;

                var colXsOnePixels = colXsOnePercentage * onePercentPixels;

                var commonMethods = new impCommon.Common.CommonMethodsJQ();

                var style = jQuery(selectedElement).attr("style");



                commonMethods.RemoveStyle(selectedElement, "min-width");
                commonMethods.RemoveStyle(selectedElement, "width");



                if (width > originalWidth) { // Increasing width of columns...


                    var emptyXsCount = 0;
                    var nextElements = jQuery(selectedElement).nextAll(".column");


                    try {
                        var columns = selectedElement.parent().children(".column");

                        var count = 0;
                        for (var j = 0; j < columns.length; j++) {
                            var size = jQuery(columns[j]).attr("xs-column-size");

                            if (size != undefined && size != "") {

                                var num = Number(size);
                                count += num;
                            }
                        }

                        if (count < 12) {
                            emptyXsCount = 12 - count;
                        }




                        var extenedWidth = width - originalWidth;

                        var colXs = Math.floor(extenedWidth / colXsOnePixels);

                        // alert(colXs);

                        if (colXs == 0) {
                            colXs = 1;
                        }

                        var nextElementsCount = jQuery(selectedElement).nextAll(".column").length;

                        var eachXs = Math.floor(colXs / nextElementsCount);

                        if (eachXs == 0) {
                            eachXs = 1;
                        }

                        var colXsTemp = colXs;

                        for (var i = 0; i < nextElements.length; i++) { // -1 for debug-css.

                            if (colXsTemp > 0) {
                                var nextXsSize = Number(jQuery(nextElements[i]).attr("xs-column-size"));

                                if (nextXsSize == 1) {
                                    continue;
                                }

                                var newNextXsSize = nextXsSize - eachXs;

                                if (newNextXsSize < 1) {
                                    colXsTemp = colXsTemp - eachXs + 1;
                                    newNextXsSize = 1;
                                }
                                else {
                                    colXsTemp = colXsTemp - eachXs;
                                }

                                jQuery(nextElements[i]).removeClass("col-xs-" + nextXsSize);
                                jQuery(nextElements[i]).addClass("col-xs-" + newNextXsSize);
                                jQuery(nextElements[i]).attr("xs-column-size", newNextXsSize);



                            }
                            else {
                                break;
                            }
                        }

                        var xsSize = Number(selectedElement.attr("xs-column-size"));

                        var newXsSize = xsSize + colXs - colXsTemp + emptyXsCount;


                        var allXs = 0;
                        selectedElement.parent().children(".column").each(function () {

                            allXs += Number(jQuery(this).attr("xs-column-size"));
                        });


                        var overallMinusCurrent = allXs - xsSize;

                        var g = overallMinusCurrent + newXsSize;

                        while (g > 12) {
                            newXsSize--;
                            g--;
                        }

                        jQuery(selectedElement).removeClass("col-xs-" + xsSize);
                        jQuery(selectedElement).addClass("col-xs-" + newXsSize);

                        selectedElement.attr("xs-column-size", newXsSize);
                    }
                    catch (ex) {
                    }

                    nextElements.show();

                }
                else
                    if (width < originalWidth) { // Decreasing the width...

                        var nextElements = jQuery(selectedElement).nextAll(".column");

                        try {
                            var extenedWidth = originalWidth - width;

                            var colXs = Math.floor(extenedWidth / colXsOnePixels);
                            // alert(colXs);

                            if (colXs == 0) {
                                colXs = 1;
                            }

                            var eachXs = Math.floor(colXs / 1);

                            if (eachXs == 0) {
                                eachXs = 1;
                            }

                            var xsSize = Number(selectedElement.attr("xs-column-size"));

                            if (xsSize > 1) {
                                var eachXsTemp = eachXs;
                                var newXsSize = xsSize - eachXs;

                                if (newXsSize < 0) {
                                    eachXsTemp = eachXs + newXsSize;
                                    newXsSize = 1;
                                }

                                if (newXsSize == 0) {
                                    eachXsTemp = eachXs - 1;
                                    newXsSize = 1;
                                }

                                jQuery(selectedElement).removeClass("col-xs-" + xsSize);
                                jQuery(selectedElement).addClass("col-xs-" + newXsSize);
                                selectedElement.attr("xs-column-size", newXsSize);

                                var colXsTemp = colXs;

                                if (colXsTemp > 0) {
                                    var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size"));

                                    var newNextXsSize = nextXsSize + eachXsTemp;

                                    jQuery(nextElements[0]).removeClass("col-xs-" + nextXsSize);
                                    jQuery(nextElements[0]).addClass("col-xs-" + newNextXsSize);
                                    jQuery(nextElements[0]).attr("xs-column-size", newNextXsSize);
                                }
                            }

                        }
                        catch (ex) {
                        }

                        nextElements.show();

                    }

                var nextElementsToShow = jQuery(selectedElement).nextAll(".column");

                nextElementsToShow.show();

              
            }

        }

        public static isSelectProcessing = false;

        public static ProcessSelectedValues() {

            SmartMenuJQ.isSelectProcessing = true;

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {

                var heightstr = selectedElement.css("height")

                if (heightstr != undefined) {
                    heightstr.replace("%", "");

                    if (heightstr.indexOf("%") > -1) {
                    }
                    else {
                        heightstr = heightstr.replace("px", "");

                    }

                }

                var widthstr = selectedElement.css("width")

                if (widthstr != undefined) {

                    widthstr.replace("%", "");

                    if (widthstr.indexOf("%") > -1) {
                    }
                    else {
                        widthstr = widthstr.replace("px", "");

                    }
                }

                //jQuery("#control-height-width").find(".smart-menu-height").slider("value", heightstr);
                //jQuery("#control-height-width").find(".smart-menu-width").slider("value", widthstr);

                jQuery(".smart-menu-height").slider("value", heightstr);
                jQuery(".smart-menu-width").slider("value", widthstr);

                SmartMenuJQ.isSelectProcessing = false;

            }
        }

        public static ProcessSelectNotify() {
            SmartMenuJQ.ProcessSelectedValues();

          
        }

    }
}