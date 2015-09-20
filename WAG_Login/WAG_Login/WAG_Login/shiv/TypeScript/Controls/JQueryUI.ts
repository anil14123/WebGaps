/// <reference path="../../../library/jqueryui.d.ts" />

import impCommonMethods = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");

export module JQueryUI {

    export class CommonCode {

        public static droppableCount = 0;
        public static currentTarget: JQuery;

        public static Draggable(element, cancelableCss) {
            jQuery(element).draggable({
                cancel: cancelableCss,
                revert: 'invalid',
                start: function (event, ui) {

                    CommonCode.droppableCount++;

                    ui.helper.css("z-index", "9999999999");
                    ui.helper.css("opacity", "0.6");
                },
                stop: function (event, ui) {


                    CommonCode.droppableCount = 0;

                    ui.helper.css("opacity", "1");
                    ui.helper.css("z-index", "1");
                }
            });
        }

        public static DraggableDestroy(element) {
            jQuery(element).draggable("destroy");
        }

        public static ResizableImage() {

            var handleDefault = "e,se,s";

            $(".image-element").resizable({
                handles: handleDefault,
                start: function (event, ui) {
                    var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                },
                stop: function (event, ui) {
                    var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                    commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                }
            });
        }

        public static ResizableColumn() {

            var handleDefault = "e,se,s";

            $(".column").resizable({
                handles: handleDefault,
                start: function (event, ui) {

                    if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") 
                    {
                    //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                    //    ||
                    //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                    //    ) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper, "min-height");
                       
                    }    
                    
                    
                    var nextElements = jQuery(ui.helper).nextAll(".column");

                    nextElements.hide();                                   
                },
                stop: function (event, ui) {

                    jQuery(".ui-resizable-se").removeClass("selected-resizable");

                    var height = ui.size.height
                    var width = ui.size.width;

                    var originalHeight = ui.originalSize.height;
                    var originalWidth = ui.originalSize.width;

                    var rowWidth = jQuery(ui.helper).parent().width();

                    var onePercentPixels = Math.floor((1 * rowWidth) / 100);

                    var colXsOnePercentage = 2;

                    var colXsOnePixels = colXsOnePercentage * onePercentPixels;

                    var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();

                    var style = jQuery(ui.helper).attr("style");

                    if (height != originalHeight) {
                        commonMethods.RemoveStyle(ui.helper, "min-height");
                        commonMethods.RemoveStyle(ui.helper, "height");
                        jQuery(ui.helper).css("min-height", height);
                    }

                    commonMethods.RemoveStyle(ui.helper, "min-width");
                    commonMethods.RemoveStyle(ui.helper, "width");


                    var twoFour = 48;

                    if (width > originalWidth) { // Increasing width of columns...


                        var emptyXsCount = 0;
                        var nextElements = jQuery(ui.helper).nextAll(".column");


                        try {
                            var columns = ui.helper.parent().children(".column");

                            var count = 0;
                            for (var j = 0; j < columns.length; j++) {
                                var size = jQuery(columns[j]).attr("xs-column-size");

                                if (size != undefined && size != "") {

                                    var num = Number(size);
                                    count += num;
                                }
                            }

                            if (count < twoFour) {
                                emptyXsCount = twoFour - count;
                            }




                            var extenedWidth = width - originalWidth;

                            var colXs = Math.floor(extenedWidth / colXsOnePixels);

                            // alert(colXs);

                            if (colXs == 0) {
                                colXs = 1;
                            }

                            var nextElementsCount = jQuery(ui.helper).nextAll(".column").length;

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

                            var xsSize = Number(ui.helper.attr("xs-column-size"));

                            var newXsSize = xsSize + colXs - colXsTemp + emptyXsCount;


                            var allXs = 0;
                            ui.helper.parent().children(".column").each(function () {

                                allXs += Number(jQuery(this).attr("xs-column-size"));
                            });


                            var overallMinusCurrent = allXs - xsSize;

                            var g = overallMinusCurrent + newXsSize;

                            while (g > twoFour) {
                                newXsSize--;
                                g--;
                            }

                            jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                            jQuery(ui.helper).addClass("col-xs-" + newXsSize);

                            ui.helper.attr("xs-column-size", newXsSize);
                        }
                        catch (ex) {
                        }

                        nextElements.show();

                    }
                    else
                        if (width < originalWidth) { // Decreasing the width...

                            var nextElements = jQuery(ui.helper).nextAll(".column");

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

                                var xsSize = Number(ui.helper.attr("xs-column-size"));

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

                                    jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                    jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                    ui.helper.attr("xs-column-size", newXsSize);

                                    var colXsTemp = colXs;

                                    if (colXsTemp > 0) {
                                        var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size"));

                                        var newNextXsSize = nextXsSize + eachXsTemp;


                                        /////////////// over all compresser
                                  
                                        var allXs = 0;
                                        ui.helper.parent().children(".column").each(function () {

                                            allXs += Number(jQuery(this).attr("xs-column-size"));
                                        });

                                        var overallMinusNext = allXs - Number(jQuery(nextElements[0]).attr("xs-column-size"));;

                                        var g = overallMinusNext + newNextXsSize;

                                        while (g > twoFour) {
                                            newNextXsSize--;
                                            g--;
                                        }

                                    //////////////////////////////////////


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

                    var nextElementsToShow = jQuery(ui.helper).nextAll(".column");

                    nextElementsToShow.show();

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                },

                resize: function (event, ui) {

                    //JQueryUI.CommonCode.OnResize(event, ui);


                    
                    //if (jQuery(ui.element).data('ui-resizable').axis == "se") {

                    //}
                    //else
                    //    if ($(ui.element).data('ui-resizable').axis == "s") {

                    //        ui.helper.height(ui.helper.height() + 20);


                    //    }
                    //    else
                    //        if ($(ui.element).data('ui-resizable').axis == "s") {

                    //        }

                   
                }

            });

        }

        public static OnResize(event,ui) {

            if (jQuery(ui.element).data('ui-resizable').axis == "se") {

            }
            else
                if ($(ui.element).data('ui-resizable').axis == "s") {

                    ui.helper.height(ui.helper.height() + 20);
  
                }
                else
                    if ($(ui.element).data('ui-resizable').axis == "s") {

                    }
        }

        public static ResizableRootElements(elementCss, handle?) {

            var handleDefault = "e,se,s";

            if (handle != undefined && handle != "") {
                handleDefault = handle;
            }

            $(elementCss).resizable({
                handles: handleDefault,
                start: function (event, ui) {

                    if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s")
                    {
                    //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                    //    ||
                    //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                    //    ) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper, "min-height");
                        commonMethods.RemoveStyle(ui.helper, "height");
                    }    
                },
                stop: function (event, ui) {
                    var height = ui.size.height;

                    var width = ui.size.width;

                    if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("root-elements")) {
                        var common = new impCommonMethods.Common.CommonMethodsJQ();

                        common.RemoveStyle(jQuery(this), "min-height");
                        common.RemoveStyle(jQuery(this), "height");

                        jQuery(this).css("min-height", height);
                    }
                    //UndoRedoManager.Push();
                    //alert(height + " x " + width);

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

            });

        }


        public static Resizable(elementCss, handle?) {

            var handleDefault = "e,se,s";

            if (handle != undefined && handle != "") {
                handleDefault = handle;
            }

            $(elementCss).resizable({
                handles: handleDefault,
                start: function (event, ui) {
                    if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") {
                        //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                        //    ||
                        //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                        //    ) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper, "min-height");
                        commonMethods.RemoveStyle(ui.helper, "height");
                    }    
                },
                stop: function (event, ui) {
                    var height = ui.size.height;

                    var width = ui.size.width;

                    if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("root-elements")) {
                        var common = new impCommonMethods.Common.CommonMethodsJQ();

                        common.RemoveStyle(jQuery(this), "min-height");
                        common.RemoveStyle(jQuery(this), "height");

                        jQuery(this).css("min-height", height);
                    }
                    //UndoRedoManager.Push();
                    //alert(height + " x " + width);

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

            });

        }

        public static Droppable(elementCss) {

            $(elementCss).droppable({
                drop: function (event, ui) {

                    var h = ui.helper;

                    if (CommonCode.droppableCount >= 2 && CommonCode.currentTarget != undefined) {
                        CommonCode.droppableCount++;

                        ui.draggable.css("opacity", "1");

                        if (ui.draggable.find(".jq-image-block-image").length > 0) {
                            ui.draggable.css("position", "relative").css("left", "").css("top", "")

                            CommonCode.currentTarget.closest(".key").append(ui.draggable.closest(".empty-container-image"));
                        }
                        else {
                            CommonCode.currentTarget.closest(".key").append(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                        }

                        jQuery(".image-selection").removeClass("image-selection");

                        event.stopPropagation();

                        CommonCode.currentTarget = null;

                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();

                    } else {
                        ui.draggable.css("position", "relative").css("left", "").css("top", "");
                    }

                },
                out: function (event, ui) {
                    CommonCode.droppableCount++;
                },
                over: function (event, ui) {
                    jQuery(".image-selection").removeClass("image-selection");

                    CommonCode.currentTarget = jQuery(event.target);

                    if (jQuery(event.target).hasClass("key")) {
                        jQuery(event.target).addClass("image-selection");
                    }
                    else {
                        jQuery(event.target).closest(".key").addClass("image-selection");
                    }
                }

            });

        }

        public static DroppableDestroy(elementCss) {

            $(elementCss).droppable("destroy");

        }

        public static ResizableDestroy(elementCss) {
            try {
                $(elementCss).resizable("destroy");
                jQuery(elementCss).find("div").remove(".ui-resizable-handle");
            }
            catch (ex) {
                jQuery(elementCss).find("div").remove(".ui-resizable-handle");
            }
        }

    }

}