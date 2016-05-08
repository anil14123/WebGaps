/// <reference path="../../../library/jqueryui.d.ts" />

interface MyWindow extends Window { smartObj: JQueryUI.SmartObj }
declare var window: MyWindow;


import impWatch = require("../Watch/WatchMouseJQ");
import impCommonMethods = require("../Common/CommonMethodsJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impText = require("../Controls/TextJQ");

export module JQueryUI {

    export class SmartObj {
        currentObj: JQuery;
        command = "";
        isDirty = false;
    }

    export class UIHelper {

        public helper;
    }

    export class CommonCode {

        public static droppableCount = 2; //old 0
        public static currentTarget: JQuery;

        public static Draggable(element, cancelableCss) {
            jQuery(element).draggable({
                cancel: cancelableCss,
                revert: 'invalid',
                helper: 'clone',
                appendTo: 'body',
                distance: 5,
                start: function (event, ui) {
                    jQuery("#interface_bottom").hide();



                    CommonCode.droppableCount++;

                    //if (ui.helper.hasClass("empty-container-text")) {
                    //    ui.helper.css("width", "250px");
                    //}

                    ui.helper.css("z-index", "9999999999");
                    ui.helper.css("opacity", "0.8");

                },
                stop: function (event, ui) {
                    jQuery("#interface_bottom").show();


                    CommonCode.droppableCount = 2; //old 0

                    //if (ui.helper.hasClass("empty-container-text")) {
                    //    ui.helper.css("width", "auto");
                    //}

                    jQuery(".image-selection-drag").removeClass("image-selection-drag");

                    ui.helper.css("opacity", "1");
                    ui.helper.css("z-index", "0");
                },
                drag: function (event: JQueryMouseEventObject, ui) {

                    //ui.helper.offset({
                    //    top: event.clientY,
                    //    left: event.clientX
                    //});

                    var element = !jQuery(event.target).hasClass("key") ? jQuery(event.target).closest(".key") : jQuery(event.target);

                    element.addClass("image-selection-drag");

                }

            });
        }


        public static ResizableImage() {

            var handleDefault = "e,se,s";

            $(".image-element").resizable({
                handles: handleDefault,
                autoHide: true,
                delay: 0,
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
                ,
                resize: function (event, ui) {

                    JQueryUI.CommonCode.ResizeCommon(ui.element);

                    var uiHelper = new UIHelper();

                    uiHelper.helper = $(this).closest(".column");

                    CommonCode.commonHeight(100, uiHelper);

                }
            });
        }

        public static commonHeight(height, ui) {

            //try {

            //    var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
            //    var originalHeightStr = (CommonCode.originalHeightBeforeDragStartStr == null || CommonCode.originalHeightBeforeDragStartStr == "") ? $(ui.helper).css("min-height") : CommonCode.originalHeightBeforeDragStartStr;


            //    originalHeightStr = originalHeightStr.replace("px", "");

            //    var originalHeight = parseInt(originalHeightStr);

            //    commonMethods.RemoveSingleStyle(ui.helper, "min-height");
            //    commonMethods.RemoveSingleStyle(ui.helper, "height");

            //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).nextAll(".column"), "min-height");
            //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).nextAll(".column"), "height");

            //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).prevAll(".column"), "min-height");
            //    commonMethods.RemoveSingleStyle(jQuery(ui.helper).prevAll(".column"), "height");

            //    var minHeights = [];

            //    minHeights.push(height);

            //    var heights = [];

            //    heights.push(height);

            //    jQuery(ui.helper).nextAll(".column").each(function () {
            //        minHeights.push(parseInt($(this).css("min-height").replace("px", "")));
            //        heights.push(parseInt($(this).css("height").replace("px", "")))
            //    });
            //    jQuery(ui.helper).prevAll(".column").each(function () {
            //        minHeights.push(parseInt($(this).css("min-height").replace("px", "")))
            //        heights.push(parseInt($(this).css("height").replace("px", "")))
            //    });

            //    var maxOfMinHeight = Math.max.apply(Math, minHeights);
            //    var maxOfHeight = Math.max.apply(Math, heights);


            //    if (height > maxOfHeight) {

            //    }
            //    else {
            //        height = maxOfHeight;
            //    }

            //    jQuery(ui.helper).css("min-height", height + "px");
            //    jQuery(ui.helper).nextAll(".column").css("min-height", height + "px");
            //    jQuery(ui.helper).prevAll(".column").css("min-height", height + "px");

            //    var phase2Height = parseInt(jQuery(ui.helper).css("height").replace("px", ""));

            //    if (phase2Height > height && phase2Height > originalHeight || CommonCode.originalHeightBeforeDragStartStr != "") {
            //        jQuery(ui.helper).css("min-height", phase2Height + "px");
            //        jQuery(ui.helper).nextAll(".column").css("min-height", phase2Height + "px");
            //        jQuery(ui.helper).prevAll(".column").css("min-height", phase2Height + "px");
            //    }
            //    else {
            //        jQuery(ui.helper).css("min-height", originalHeight + "px");
            //        jQuery(ui.helper).nextAll(".column").css("min-height", originalHeight + "px");
            //        jQuery(ui.helper).prevAll(".column").css("min-height", originalHeight + "px");
            //    }

            //    CommonCode.originalHeightBeforeDragStartStr = "";
            //}
            //catch (ex) {

            //    return "error";
            //}

            return "error";

        }

        public static originalHeightBeforeDragStartStr = "";
        //public static scrollElement: JQuery;

        public static ResizableColumn() {

            var handleDefault = "e,s";//"e,se,s";

            $(".column").resizable({
                handles: handleDefault,
                autoHide: true,
                distance: 0,
                start: function (event, ui) {

                    var axis = jQuery(ui.element).data('ui-resizable').axis;

                    jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");

                    // $(ui.helper).append("<div class='height-dummy-column dummy-div'></div>")

                    //  jQuery(".dummy-div").height(ui.helper.height() + 2);

                    if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") {
                        //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                        //    ||
                        //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                        //    ) {

                        ui.element.height(ui.element.height());
                        CommonCode.originalHeightBeforeDragStartStr = $(ui.helper).css("min-height");
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper, "min-height");

                    }


                    var nextElements = jQuery(ui.helper).nextAll(".column");

                    nextElements.hide();


                    var axis = jQuery(ui.element).data('ui-resizable').axis;

                    //CommonCode.scrollElement = jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");

                },
                stop: function (event: JQueryMouseEventObject, ui) {



                    //jQuery(".dummy-div").remove();

                    jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");


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

                        var result = CommonCode.commonHeight(height, ui);

                        commonMethods.RemoveSingleStyle(ui.helper, "height");
                        jQuery(ui.helper).css("min-height", height);

                        //var clientscrolly = 0;
                        //if (height > originalHeight) {
                        //    clientscrolly =  event.clientY - height - originalHeight;
                        //}
                        //else {
                        //    clientscrolly = event.clientY + (originalHeight - height);
                        //}
                        //try {
                        //    var axis = jQuery(ui.element).data('ui-resizable').axis;

                        //    if (axis == "s") {
                        //        $('html, body').animate({
                        //            scrollTop: clientscrolly
                        //        }, 10);
                        //    }
                        //} catch (ex) {

                        //}


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

                            // modified
                            var newXsSize = xsSize + colXs - colXsTemp;// + emptyXsCount;

                            // added
                            if (colXs == colXsTemp) {
                                newXsSize = newXsSize + colXsTemp;
                            }


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



                }

            });

        }

        public static OnResize(event, ui) {

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

        public static JustResizable(elementCss, handle?) {

            var handleDefault = "e,se,s";

            if (handle != undefined && handle != "") {
                handleDefault = handle;
            }

            $(elementCss).resizable({
                handles: handleDefault,
                minHeight: 0,
                minWidth: 0,

                delay: 0,
                start: function (event, ui) {
                    var axis = jQuery(ui.element).data('ui-resizable').axis;

                    jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");

                },
                stop: function (event, ui) {

                    jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");

                    var height = ui.size.height;

                    var width = ui.size.width;


                    JQueryUI.CommonCode.ResizeCommon(ui.element);

                    var uiHelper = new UIHelper();

                    uiHelper.helper = $(this).closest(".column");

                    CommonCode.commonHeight(100, uiHelper);


                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();



                },
                resize: function (event, ui) {



                }

            });

        }

        public static ResizableRootElements(elementCss, handle?) {

            var handleDefault = "e,se,s";

            if (handle != undefined && handle != "") {
                handleDefault = handle;
            }

            $(elementCss).resizable({
                handles: handleDefault,
                autoHide: true,
                delay: 0,
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
                },
                resize: function (event, ui) {

                    JQueryUI.CommonCode.ResizeCommon(ui.element);
                }

            });

        }

        public static ResizeCommon(selectedElement) {
            try {
                var box = jQuery(selectedElement)[0].getBoundingClientRect();

                var circleLeftTopElement = jQuery("<div class='circle-deg' style='width:12px; border-radius:50%; height:12px; position:absolute; background-color:#00A1FF;'></div>");
                var circleRightTopElement = jQuery(circleLeftTopElement).clone();
                var circleLeftBottomElement = jQuery(circleLeftTopElement).clone();
                var circleRightBottomElement = jQuery(circleLeftTopElement).clone();

                circleRightBottomElement.addClass("z-index-back");

                var body = document.body

                var docElem = document.documentElement

                var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop

                var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

                var clientTop = docElem.clientTop || body.clientTop || 0

                var clientLeft = docElem.clientLeft || body.clientLeft || 0

                var top = box.top + scrollTop - clientTop

                var left = box.left + scrollLeft - clientLeft

                var width = jQuery(selectedElement).css("width");
                var height = jQuery(selectedElement).css("height");

                var widthf = parseFloat(width.replace("px", ""));
                var heightf = parseFloat(height.replace("px", ""));

                circleLeftTopElement.css("left", left - 5);
                circleLeftTopElement.css("top", top - 5);

                circleLeftBottomElement.css("left", left - 5);
                circleLeftBottomElement.css("top", top + heightf - 5);

                circleRightTopElement.css("left", left + widthf - 5);
                circleRightTopElement.css("top", top - 5);

                circleRightBottomElement.css("left", left + widthf - 5);
                circleRightBottomElement.css("top", top + heightf - 5);

                jQuery(".circle-deg").remove();
                jQuery("body").append(circleLeftTopElement);
                jQuery("body").append(circleLeftBottomElement);
                jQuery("body").append(circleRightTopElement);
                jQuery("body").append(circleRightBottomElement);
            }
            catch (ex) {

            }
        }

        public static Resizable(elementCss, handle?) {

            var handleDefault = "e,se,s";

            if (handle != undefined && handle != "") {
                handleDefault = handle;
            }

            $(elementCss).resizable({
                handles: handleDefault,
                autoHide: true,
                distance: 0,
                start: function (event, ui) {
                    var axis = jQuery(ui.element).data('ui-resizable').axis;

                    jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");

                    $(ui.helper).closest(".key").after("<div class='height float-right dummy-div'></div>")

                    jQuery(".dummy-div").height(ui.helper.height() + 2);

                    if (jQuery(ui.element).data('ui-resizable').axis == "se" || $(ui.element).data('ui-resizable').axis == "s") {
                        //if (jQuery(event.target).children(".ui-resizable-se").hasClass("selected-resizable")
                        //    ||
                        //    jQuery(event.target).children(".ui-resizable-s").hasClass("selected-resizable")
                        //    ) {
                        ui.helper.css("height", ui.helper.css("min-height"));

                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper, "min-height");

                    }
                },
                stop: function (event, ui) {

                    jQuery(".dummy-div").remove();

                    var height = ui.size.height;

                    var width = ui.size.width;

                    if (
                        jQuery(this).hasClass("empty-container-text")
                        || jQuery(this).hasClass("empty-container-image")
                        || jQuery(this).hasClass("empty-container")
                        || jQuery(this).hasClass("jq-plus-container-text")
                        || jQuery(this).hasClass("jq-plus-container-image")
                        || jQuery(this).hasClass("jq-text-block-container")
                        || jQuery(this).hasClass("root-elements")) {
                        //var common = new impCommonMethods.Common.CommonMethodsJQ();

                        //common.RemoveStyle(jQuery(this), "min-height");
                        //common.RemoveStyle(jQuery(this), "height");

                        if (jQuery(this).hasClass("jq-plus-container-image") || jQuery(this).hasClass("empty-container-spacer")) {
                            jQuery(this).css("height", height);
                            jQuery(this).css("min-height", height);
                        }
                        else {
                            jQuery(this).css("height", height);
                            jQuery(this).css("min-height", height);
                        }
                    }
                    //UndoRedoManager.Push();
                    //alert(height + " x " + width);

                    JQueryUI.CommonCode.ResizeCommon(ui.element);

                    var uiHelper = new UIHelper();

                    uiHelper.helper = $(this).closest(".column");

                    CommonCode.commonHeight(100, uiHelper);

                    jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }
                ,

                resize: function (event, ui) {

                    window.setTimeout(function () {
                        if (jQuery(".dummy-div").height() < ui.helper.height()) {
                            jQuery(".dummy-div").height(jQuery(".dummy-div").height() + 2);
                        }
                    }, 10);




                }

            });

        }

        public static Droppable(elementCss) {

            $(elementCss).droppable({
                greedy: true,
                tolerance: "pointer",
                drop: function (event: JQueryMouseEventObject, ui) {

                    try {


                        window.smartObj = new JQueryUI.SmartObj();
                        window.smartObj.currentObj = undefined;
                        window.smartObj.command = "";

                        impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");

                        var x = event.clientX;
                        var y = event.clientY + $(document).scrollTop();

                        jQuery(".nearest-element").removeClass("nearest-element");

                        if (impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other")) {
                            impWatch.Watch.MouseJQ.selectedElement = impWatch.Watch.MouseJQ.selectedElement.closest(".column");
                        }

                        if (impWatch.Watch.MouseJQ.selectedElement.hasClass("column")) {

                            var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other");

                            var nearestLeftArray = [];
                            var nearestTopArray = [];

                            if ($elements.length > 0) {

                                $elements.each(function (index, _this) {
                                    var $this = $(_this);

                                    var top = parseFloat($this.attr("top"));
                                    var bottom = parseFloat($this.attr("bottom"));
                                    var left = parseFloat($this.attr("left"));

                                    if (y >= top && y <= bottom && x >= left) {
                                        nearestLeftArray.push(left);
                                        nearestTopArray.push(top);
                                    }

                                });
                                var nearestLeft = 0;
                                var nearestTop = 0;
                                if (nearestLeftArray.length > 0) {
                                    nearestLeft = Math.max.apply(Math, nearestLeftArray);
                                }
                                if (nearestTopArray.length > 0) {
                                    nearestTop = Math.max.apply(Math, nearestTopArray);
                                }

                                impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");

                                impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();

                                if (impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                    window.smartObj.currentObj = impWatch.Watch.MouseJQ.nearestElement;
                                    window.smartObj.command = "n";
                                }

                            }

                        }
                    }
                    catch (ex) {

                    }


                    impWatch.Watch.MouseJQ.selectedElement = jQuery(".image-selection-drag");

                    if (
                        CommonCode.droppableCount >= 2 && CommonCode.currentTarget != undefined && !ui.draggable.hasClass("control-drag-anywhere")
                        && !ui.draggable.hasClass("bldr-draggable")
                    ) {
                        CommonCode.droppableCount++;

                        ui.draggable.css("opacity", "1");

                        if (ui.draggable.find(".jq-image-block-image").length > 0) {
                            ui.draggable.css("position", "relative").css("left", "").css("top", "")

                            if (impWatch.Watch.MouseJQ.nearestElement != undefined && impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.closest(".empty-container-image"));
                            }
                            else {

                                if (CommonCode.currentTarget.closest(".key").hasClass("column")) {
                                    CommonCode.currentTarget.closest(".key").append(ui.draggable.closest(".empty-container-image"));
                                }
                                else {
                                    CommonCode.currentTarget.closest(".key").after(ui.draggable.closest(".empty-container-image"));
                                }
                            }
                        }
                        else {

                            if (impWatch.Watch.MouseJQ.nearestElement != undefined && impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                            }
                            else {
                                if (CommonCode.currentTarget.closest(".key").hasClass("column")) {
                                    CommonCode.currentTarget.closest(".key").append(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                }
                                else {
                                    CommonCode.currentTarget.closest(".key").after(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                }
                            }
                        }

                        jQuery(".image-selection").removeClass("image-selection");

                        event.stopPropagation();

                        CommonCode.currentTarget = null;

                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();

                    } else {



                        if (!ui.draggable.hasClass("control-drag-anywhere")) {
                            ui.draggable.css("position", "relative").css("left", "").css("top", "");

                            if (ui.draggable.hasClass("bldr-draggable")) {

                                var id = ui.draggable.attr("id");

                                switch (id) {
                                    case 'bldr-drgb-text':
                                        impText.Text.TextJQ.InsertTextBlock("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
                                        break;
                                    case 'bldr-drgb-title':
                                        impText.Text.TextJQ.InsertTextBlock("<h2>Title Here.</h2>");
                                        break;

                                }

                            }

                        }

                    }

                    jQuery(".image-text-other").each(function (index, _this) {
                        var $this = jQuery(_this);

                        var bottom = $this.offset().top + $this.height();
                        var top = $this.offset().top;
                        var left = $this.offset().left;

                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);

                    });

                    jQuery(".image-selection-drag").removeClass("image-selection-drag");

                    jQuery(".empty").removeClass("empty");

                    jQuery("#control-common-execute").click();

                },
                out: function (event, ui) {
                    CommonCode.droppableCount++;
                },
                over: function (event, ui) {
                    jQuery(".image-selection-drag").removeClass("image-selection-drag");

                    CommonCode.currentTarget = jQuery(event.target);

                    if (jQuery(event.target).hasClass("key")) {
                        if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {
                            jQuery(event.target).addClass("image-selection-drag");
                            impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target);
                        }
                    }
                    else {
                        if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {
                            jQuery(event.target).closest(".key").addClass("image-selection-drag");
                            impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target).closest(".key");
                        }
                    }

                }
            });

        }

        public static DraggableDestroy(element) {

            jQuery(element).each(function (index, _this) {
                try {
                    var $this = $(_this);
                    $this.draggable("destroy");
                }
                catch (ex) {
                }
            });

        }

        public static DroppableDestroy(elementCss) {

            jQuery(elementCss).each(function (index, _this) {
                try {
                    var $this = $(_this);
                    $this.droppable("destroy");
                }
                catch (ex) {
                }

            });
        }

        public static ResizableDestroy(elementCss) {

            jQuery(elementCss).each(function (index, _this) {
                try {
                    var $this = $(_this);
                    $this.resizable("destroy");
                    jQuery($this).find("div").remove(".ui-resizable-handle");
                }
                catch (ex) {
                    jQuery($this).find("div").remove(".ui-resizable-handle");
                }

            });
        }

    }

}