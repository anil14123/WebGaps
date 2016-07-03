

/// <reference path="../../../library/jquery.d.ts" />
/// <reference path="../../../library/jqueryui.d.ts" />

import impCommon = require("../Common/CommonMethodsJQ");
import impAddRow = require("../Controls/ControlsJQ");
import impText = require("../Controls/TextJQ");
import impImage = require("../Controls/ImageJQ");
import impFont = require("../Controls/FontJQ");
import impBorder = require("../Controls/BorderJQ");
import impColor = require("../Controls/ColorJQ");
import impHeightWidth = require("../SmartMenu/SmartMenuJQ");
import impError = require("../Error/ErrorJQ");
import impCtxMenu = require("../ContextMenu/Contextmenujq");
import impBi = require("../controls/bijq");
import impOnInsert = require("../JQte/OnInsert");
import impmal = require("../MalFormed/MalFormedJQ");
import impCommonCode = require("../Controls/ControlCommonJQ");
import impMargin = require("../Controls/MarginJQ");
import impPadding = require("../Controls/PaddingJQ");
import impFrontBack = require("../Controls/FrontBackJQ");
import impCopy = require("../Watch/CopyPasteJQ");
import impOpacity = require("../Controls/OpacityJQ");

import * as jQuery from "jquery";
import * as jQueryUI from "jqueryui";
//jQueryUI;

var G_isAttachedWatch = false;
var isWatchReady = false;

export module Watch {

    export class MouseJQ {

        static selectedElement: JQuery;
        static nearestElement: JQuery;

        public static RemoveAndResetRemovableRow() {



            if (jQuery(".removable-row").length > 0) {
                jQuery(".removable-row").removeClass("removable-row");
                jQuery(".columns-pending").removeClass("columns-pending");
                MouseJQ.selectedElement = jQuery("#nononoelement");
            }

            if (MouseJQ.selectedElement == undefined) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionHelp("Please select a element.");
            }
        }

        public static selectedMoveElement: JQuery;

        public static ProcessMove(e) {

            if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
                //$(".key").removeClass("control-focused");
                return;
            }

            var $target = jQuery(e.target);

            if (!$target.hasClass("key")) {
                $target = $target.closest(".key");
            }

            jQuery(".key").removeClass("control-focused");
            $target.addClass("control-focused");


            //////// do not remove//////////////
            //if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
            //    return;
            //}

            //var $target = jQuery(event.target);

            //if (!$target.hasClass("key")) {
            //    $target = $target.closest(".key");
            //}

            //if ($target.hasClass("key")) {
            //    jQuery("#design-page-row").hide();
            //}
            //else {
            //    return;
            //}

            //if ($target.hasClass("row")) {
            //    $target.children(".design-page-row").show();
            //}
            //else {
            //    $target.closest(".row").children(".design-page-row").show();
            //}
            //////////// donot remove//////

            //if ($target.hasClass("column") == true) {

            //    jQuery("#design-page-row").hide();
            //    $target.closest(".row").children(".design-page-row").show();
            //}
            //else
            //    if ($target.hasClass("row") == true) {
            //        jQuery("#design-page-row").hide();
            //        $target.children(".design-page-row").show();
            //    }
            //    else {
            //        if ($target.hasClass("image-text-other") == true) {
            //            jQuery("#design-page-row").hide();
            //            $target.parent().parent().children(".design-page-row").show();
            //        }
            //        else {
            //            jQuery("#design-page-row").hide();
            //        }
            //    }
        }

        public static ProcessClick(e: JQueryMouseEventObject) {
            var common = new impCommon.Common.CommonMethodsJQ();

            jQuery(".working-on-column-add-for-object").removeClass("working-on-column-add-for-object");

            jQuery(".style-version-added").attr("style-version", "");

            jQuery(".column").removeClass("newly-added-column");

            if (jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block") {
                return;
            }


            if (impmal.MalFormed.MalFormedJQ.IsMalFormed == true) {
                return;
            }

            // for cursor...
            //$(document).mousemove(function (e) {
            //    if (e.target != undefined) {

            //        if ((e.pageX >= e.target.clientLeft + e.target.clientWidth - 2)
            //            && (jQuery(e.target).closest("#contextMenu").length == 0
            //                && jQuery(e.target).closest(".control-page").length == 0))
            //             {
            //            //var rect = e.target.getBoundingClientRect();
            //            jQuery(".cursor-right").show();

            //        }
            //        else {
            //            jQuery(e.target).removeClass("jq-cursor");
            //        }

            //        jQuery(".cursor-right").css("left", e.pageX -10 + "px");
            //        jQuery(".cursor-right").css("top", e.pageY -10 + "px");
            //    }
            //});

            if (MouseJQ.selectedElement != undefined && (e.ctrlKey == false || e.ctrlKey == undefined)) {

                // this is the previous element...

                MouseJQ.selectedElement.removeClass("image-selection");
                MouseJQ.selectedElement.removeClass("design-select-element-just-mark");
                //common.RemoveStyle(MouseJQ.selectedElement, "outline");
            }
            // safety
            if (e.ctrlKey == false || e.ctrlKey == undefined) {
                jQuery(".image-selection").removeClass("image-selection");
            }

            MouseJQ.selectedElement = jQuery(e.target);

            MouseJQ.selectedElement = MouseJQ.selectedElement.closest(".key");

            if (MouseJQ.selectedElement.hasClass("key") == false) {
                MouseJQ.selectedElement = jQuery("#noelement");
            }

            jQuery(".row-selection").removeClass("row-selection");

            
            MouseJQ.selectedElement.closest(".row").addClass("row-selection");

            ////////// detecting selected object///////

            if (MouseJQ.selectedElement.hasClass("column")) {
                jQuery(".selected-display-element").text("Column");
                //jQuery(".selected-display-element").css("background-color", "#ccc");
                //jQuery(".selected-display-element").css("color", "black");
            }
            else
                if (MouseJQ.selectedElement.hasClass("row")) {
                    jQuery(".selected-display-element").text("Row");
                    //jQuery(".selected-display-element").css("background-color", "orange");
                    //jQuery(".selected-display-element").css("color", "white");
                }
                else
                    if (MouseJQ.selectedElement.hasClass("empty-container-text") || MouseJQ.selectedElement.hasClass("jq-plus-container-text")) {
                        jQuery(".selected-display-element").text("Text Block");
                        //jQuery(".selected-display-element").css("background-color", "rgb(29, 154, 29)");
                        //jQuery(".selected-display-element").css("color", "white");
                    }
                    else
                        if (MouseJQ.selectedElement.hasClass("empty-container-image")) {
                            jQuery(".selected-display-element").text("Image");
                            //jQuery(".selected-display-element").css("background-color", "rgb(37, 85, 188)");
                            //jQuery(".selected-display-element").css("color", "white");
                        }
                        else
                            if (MouseJQ.selectedElement.hasClass("jq-normal-link")) {
                                jQuery(".selected-display-element").text("Link");
                                //jQuery(".selected-display-element").css("background-color", "dodgerblue");
                                //jQuery(".selected-display-element").css("color", "white");
                            }
                            else
                                if (MouseJQ.selectedElement.hasClass("page")) {
                                    jQuery(".selected-display-element").text("Page");
                                    //jQuery(".selected-display-element").css("background-color", "black");
                                    //jQuery(".selected-display-element").css("color", "white");
                                }

            ///////////////////////


            if (!MouseJQ.selectedElement.hasClass("empty-container-text") && !MouseJQ.selectedElement.hasClass("jq-plus-container-text")) {
                jQuery(".empty-container-text").draggable({ disabled: false });
                jQuery(".editor").hide();

                jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
            }




            if (MouseJQ.selectedElement.hasClass("column") == true) {
                jQuery("#design-page-row").hide();

                var rowControlWidth = 350;
                var rowControliMax = 100;

                var pageRowControl = jQuery("#design-page-row");

                pageRowControl.find(".inline-controls").hide();
                pageRowControl.find(".column-controls").show();


                pageRowControl.show();

                pageRowControl.find(".selected-object").text("Column Selected");

                pageRowControl.css("left", "0");
                pageRowControl.css("top", "0");

                var imgTextLeft = MouseJQ.selectedElement.offset().left;

                pageRowControl.css("left", imgTextLeft + "px");
                pageRowControl.css("top", (MouseJQ.selectedElement.offset().top - 25) + "px");

                //var pageLeft = jQuery("page").offset().left;
                var pageWidth = jQuery("page").outerWidth(true);

                pageRowControl.removeClass("rc-back-white");

                var pageRowControlLeft = pageRowControl.offset().left;

                var columni = 0;

                if (pageRowControlLeft + rowControlWidth > pageWidth) {
                    pageRowControl.addClass("rc-back-white");
                }

                rowControlWidth = jQuery("#design-page-row").outerWidth(true) -7;

                while (pageRowControlLeft + rowControlWidth > pageWidth) {

                    columni++;

                    if (columni > rowControliMax) {
                        break;
                    }

                    pageRowControl.css("left", (pageRowControl.position().left - 10) + "px");
                    pageRowControlLeft = pageRowControl.offset().left;


                    if (pageRowControlLeft + rowControlWidth > pageWidth) {

                    }
                }



            }
            else
                if (MouseJQ.selectedElement.hasClass("row") == true) {
                    jQuery("#design-page-row").hide();

                    var rowControlWidth = 370;
                    var rowControliMax = 100;


                    var pageRowControl = jQuery("#design-page-row");

                    pageRowControl.find(".inline-controls").hide();
                    pageRowControl.find(".row-controls").show();


                    pageRowControl.show();

                    pageRowControl.css("left", "0");
                    pageRowControl.css("top", "0");

                    pageRowControl.find(".selected-object").text("Row Selected");

                    var imgTextLeft = MouseJQ.selectedElement.offset().left;
                    pageRowControl.css("left", imgTextLeft + "px");
                    pageRowControl.css("top", (MouseJQ.selectedElement.offset().top - 25) + "px");


                    //var pageLeft = jQuery("page").offset().left;
                    var pageWidth = jQuery("page").outerWidth(true);


                    pageRowControl.removeClass("rc-back-white");


                    var pageRowControlLeft = pageRowControl.offset().left;

                    var rowi = 0;

                    if (pageRowControlLeft + rowControlWidth > pageWidth) {
                        pageRowControl.addClass("rc-back-white");
                    }

                    rowControlWidth = jQuery("#design-page-row").outerWidth(true) - 7;

                    while (pageRowControlLeft + rowControlWidth > pageWidth) {

                        rowi++;

                        if (rowi > rowControliMax) {
                            break;
                        }

                        pageRowControl.css("left", (pageRowControl.position().left - 10) + "px");
                        pageRowControlLeft = pageRowControl.offset().left;


                        if (pageRowControlLeft + rowControlWidth > pageWidth) {

                        }
                    }


                }
                else {
                    if (MouseJQ.selectedElement.hasClass("image-text-other") == true) {
                        jQuery("#design-page-row").hide();

                        var rowControlWidth = 420;
                        var rowControliMax = 100;


                        var pageRowControl = jQuery("#design-page-row");

                        pageRowControl.find(".inline-controls").hide();

                        pageRowControl.show();

                        if (MouseJQ.selectedElement.hasClass("empty-container-text")) {

                            pageRowControl.find(".selected-object").text("Text Block Selected");
                            pageRowControl.find(".text-controls").show();
                            rowControlWidth = 460;

                        }
                        else
                            if (MouseJQ.selectedElement.hasClass("empty-container-image")) {

                                pageRowControl.find(".selected-object").text("Image Selected");
                                pageRowControl.find(".image-controls").show();
                                rowControlWidth = 510;
                            }


                        pageRowControl.css("left", "0");
                        var imgTextTop = MouseJQ.selectedElement.offset().top - 25;
                        var imgTextLeft = MouseJQ.selectedElement.offset().left;
                        pageRowControl.css("left", imgTextLeft + "px");
                        pageRowControl.css("top", (MouseJQ.selectedElement.offset().top - 25) + "px");


                        pageRowControl.removeClass("rc-back-white");

                        //var pageLeft = jQuery("page").offset().left;
                        var pageWidth = jQuery("page").outerWidth(true);

                        var pageRowControlLeft = pageRowControl.offset().left;

                        var imageTextOtheri = 0;

                        if (pageRowControlLeft + rowControlWidth > pageWidth) {
                            pageRowControl.addClass("rc-back-white");
                        }

                        rowControlWidth = jQuery("#design-page-row").outerWidth(true) - 7;

                        while (pageRowControlLeft + rowControlWidth > pageWidth) {

                            imageTextOtheri++;

                            if (imageTextOtheri > rowControliMax) {
                                break;
                            }

                            pageRowControl.css("left", (pageRowControl.position().left - 10) + "px");
                            pageRowControlLeft = pageRowControl.offset().left;


                            if (pageRowControlLeft + rowControlWidth > pageWidth) {

                            }
                        }



                    }
                    else {
                        jQuery("#design-page-row").hide();
                    }
                }

            MouseJQ.selectedElement.addClass("design-select-element-just-mark");
            //MouseJQ.selectedElement.css("outline", "dashed 5px black");

            impAddRow.Page.AddRowJQ.ProcessSelectNotify(); // order here is important... because border is applying before removable row border property is removed.

            var activeControl = MouseJQ.GetActiveControl();
            var activeSBControl = MouseJQ.GetActiveSidebarControl();

            if (activeControl != undefined && activeControl != "") {
                switch (activeControl.toLowerCase()) {
                    case 'add-row':

                        break;
                    case 'height-width':
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                        break;
                    case 'image-library':
                        impImage.Image.SelfJQ.ProcessSelectNotify();
                        break;
                    case 'color':
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                        break;
                    case 'border':
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                        break;
                    case 'insert-text':
                        impText.Text.TextJQ.ProcessSelectNotify();
                        break;
                    case 'bi':
                        impBi.BI.BIJQ.ProcessSelectNotify();
                        break;
                    case 'margin':
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                        break;
                    case 'padding':
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                        break;
                    case 'zindex':
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                        break;
                    case 'opacity':
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                        break;
                    default:
                        break;
                }
            }

            if (activeSBControl != undefined && activeSBControl != "") {
                switch (activeSBControl.toLowerCase()) {
                    case 'add-row':

                        break;
                    case 'height-width':
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                        break;
                    case 'image-library':
                        impImage.Image.SelfJQ.ProcessSelectNotify();
                        break;
                    case 'color':
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                        break;
                    case 'border':
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                        break;
                    case 'insert-text':
                        impText.Text.TextJQ.ProcessSelectNotify();
                        break;
                    case 'bi':
                        impBi.BI.BIJQ.ProcessSelectNotify();
                        break;
                    case 'margin':
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                        break;
                    case 'padding':
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                        break;
                    case 'zindex':
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                        break;
                    case 'opacity':
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                        break;
                    default:
                        break;
                }
            }

            try {
                if (jQuery(".jq-properties-all").css("display").toLowerCase() != "none") {
                    impColor.Color.ColorJQ.ProcessSelectNotify();
                    impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                    impBorder.Border.BorderJQ.ProcessSelectNotify();
                    impFont.Font.FontJQ.ProcessSelectNotify();
                    impBi.BI.BIJQ.ProcessSelectNotify();
                }
            } catch (ex) {

            }

            if (MouseJQ.selectedElement != undefined) {

                if (!MouseJQ.selectedElement.hasClass("jqte")) {
                    if (!(jQuery(".close-preview").css("display") == "inline-block" || jQuery(".close-preview").css("display") == "block")) {

                        if (e.ctrlKey == true) {
                            if (MouseJQ.selectedElement.hasClass("image-selection")) {
                                MouseJQ.selectedElement.removeClass("image-selection");
                            }
                            else {
                                MouseJQ.selectedElement.addClass("image-selection");
                            }
                        }
                        else {
                            MouseJQ.selectedElement.addClass("image-selection");
                        }

                        if (e.ctrlKey == true) {
                            MouseJQ.selectedElement = jQuery(".image-selection");
                        }
                    }
                }
            }

            try {
                var box = jQuery(MouseJQ.selectedElement)[0].getBoundingClientRect();

                var circleLeftTopElement = jQuery("<div class='circle-deg' style='width:14px; border-radius:50%; height:14px; border:2px solid white; position:absolute; background-color:#00A1FF;'></div>");
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

                var width = jQuery(MouseJQ.selectedElement).css("width");
                var height = jQuery(MouseJQ.selectedElement).css("height");

                var widthf = parseFloat(width.replace("px", ""));
                var heightf = parseFloat(height.replace("px", ""));

                circleLeftTopElement.css("left", left - 5);
                circleLeftTopElement.css("top", top - 5);

                circleLeftBottomElement.css("left", left - 5);
                circleLeftBottomElement.css("top", top + heightf - 5);

                circleRightTopElement.css("left", left + widthf - 7);
                circleRightTopElement.css("top", top - 5);

                circleRightBottomElement.css("left", left + widthf - 7);
                circleRightBottomElement.css("top", top + heightf - 5);

                jQuery(".circle-deg").remove();
                jQuery("body").append(circleLeftTopElement);
                jQuery("body").append(circleLeftBottomElement);
                jQuery("body").append(circleRightTopElement);
                jQuery("body").append(circleRightBottomElement);
            }
            catch (ex) {

            }

            //}

        }

        public static GetActiveControl() {
            var activeControl = "";
            var controls = jQuery(".control-page");
            for (var i = 0; i < controls.length; i++) {

                if (jQuery(controls[i]).css("display") == "block") {
                    activeControl = jQuery(controls[i]).attr("name");
                    break;
                }
            }

            return activeControl;
        }

        public static ResetAfterClear() {

            var activeSBControl = MouseJQ.GetActiveSidebarControl();

            if (activeSBControl != undefined && activeSBControl != "") {
                switch (activeSBControl.toLowerCase()) {
                    case 'add-row':

                        break;
                    case 'height-width':
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                        break;
                    case 'image-library':
                        impImage.Image.SelfJQ.ProcessSelectNotify();
                        break;
                    case 'color':
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                        break;
                    case 'border':
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                        break;
                    case 'insert-text':
                        impText.Text.TextJQ.ProcessSelectNotify();
                        break;
                    case 'bi':
                        impBi.BI.BIJQ.ProcessSelectNotify();
                        break;
                    case 'margin':
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                        break;
                    case 'padding':
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                        break;
                    case 'zindex':
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                        break;
                    case 'opacity':
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                        break;
                    default:
                        break;
                }
            }
        }

        public static GetActiveSidebarControl() {
            var activeControl = "";
            var activeControl = jQuery(".prop-sb.ui-accordion-header-active").first().attr("name");

            // console.log(activeControl);

            return activeControl;
        }

        //public static WatchHeight() { //working great
        //    try {
        //        $(".row").each(function (index, _this) {
        //            var heights = jQuery(_this).children(".column").map(function () {
        //                return $(this).outerHeight(true);
        //            }).get();

        //            if (heights.length > 0) {
        //                var maxHeight = Math.max.apply(null, heights);
        //                var minHeight = Math.min.apply(null, heights);

        //                if (maxHeight != minHeight) {
        //                    if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
        //                        return false;
        //                    }
        //                    jQuery(_this).children(".column").css("min-height", maxHeight + "px");
        //                }
        //            }

        //        });
        //    }
        //    catch (Ex) {
        //    }
        //}

        public static WatchHeight() {
            try {

                if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
                    return;
                }

                $("page .row").each(function (index, _this) {

                    jQuery(_this).children(".column").each(function () {

                        if ($(this).hasClass("layout-column")) {

                            var layoutHeight = $(this).closest(".row").attr("layout-height");

                            if (layoutHeight == undefined) {
                                layoutHeight = "100px";
                            }
                            return $(this).css("min-height", layoutHeight).outerHeight(true);
                        }
                        else {
                            return $(this).css("min-height", "50px").outerHeight(true);
                        }
                    });
                });

                $("page .row").each(function (index, _this) {

                    var heights = jQuery(_this).children(".column").map(function () {

                        if ($(this).hasClass("layout-column")) {

                            var layoutHeight = $(this).closest(".row").attr("layout-height");

                            if (layoutHeight == undefined) {
                                layoutHeight = "100px";
                            }

                            return $(this).css("min-height", layoutHeight).outerHeight(true);
                        }
                        else {
                            return $(this).css("min-height", "50px").outerHeight(true);
                        }
                    }).get();

                    if (heights.length > 0) {
                        var maxHeight = Math.max.apply(null, heights);
                        var minHeight = Math.min.apply(null, heights);

                        if (maxHeight != minHeight) {
                            if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
                                return false;
                            }

                            jQuery(_this).children(".column").css("min-height", maxHeight + "px");

                        }
                    }
                });


            }
            catch (Ex) {
            }
        }


        public WatchPage() {


            jQuery(document).ready(function () {

                if (G_isAttachedWatch == false) {
                    G_isAttachedWatch = true;

                    $("#watch-height").on("click", function () {
                        MouseJQ.WatchHeight();
                    });

                    window.setInterval(MouseJQ.WatchHeight, 2000);

                    jQuery(".prop-sb").click(function () {

                        impAddRow.Page.AddRowJQ.ProcessSelectNotify();

                        var activeSBControl = MouseJQ.GetActiveSidebarControl();

                        if (activeSBControl != undefined && activeSBControl != "") {
                            switch (activeSBControl.toLowerCase()) {
                                case 'add-row':

                                    break;
                                case 'height-width':
                                    impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                                    break;
                                case 'image-library':
                                    impImage.Image.SelfJQ.ProcessSelectNotify();
                                    break;
                                case 'color':
                                    impColor.Color.ColorJQ.ProcessSelectNotify();
                                    break;
                                case 'border':
                                    impBorder.Border.BorderJQ.ProcessSelectNotify();
                                    break;
                                case 'insert-text':
                                    impText.Text.TextJQ.ProcessSelectNotify();
                                    break;
                                case 'bi':
                                    impBi.BI.BIJQ.ProcessSelectNotify();
                                    break;
                                case 'margin':
                                    impMargin.Margin.MarginJQ.ProcessSelectNotify();
                                    break;
                                case 'padding':
                                    impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                                    break;
                                case 'zindex':
                                    impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                                    break;
                                case 'opacity':
                                    impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                                    break;
                                default:
                                    break;
                            }
                        }

                    });


                    //jQuery(".ui-resizable-handle").hide();

                    jQuery(document).mousemove(function (e: JQueryMouseEventObject) {

                        MouseJQ.ProcessMove(e);
                    })

                    jQuery("page").on("click", function (e: JQueryMouseEventObject) {

                        MouseJQ.ProcessClick(e);


                        if (impCommonCode.ControlCommon.Code.AnchorClicked == true) {

                            impCommonCode.ControlCommon.Code.AnchorClicked = false;

                            if (e.cancelBubble != null) e.cancelBubble = true;
                            if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                            if (e.preventDefault) e.preventDefault();
                            if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                            return false;
                        }
                    });

                    jQuery("input").on("keydown", function (e) {
                        var BACK = 8;

                        if (e.which == BACK) {
                            impOnInsert.OnInsert.Code.BackPassed = true;
                        }
                    });

                    jQuery("textarea").on("keydown", function (e) {
                        var BACK = 8;

                        if (e.which == BACK) {
                            impOnInsert.OnInsert.Code.BackPassed = true;
                        }
                    });

                    jQuery(".jqte-editor").on("keydown", function (e) {
                        var BACK = 8;

                        if (e.which == BACK) {
                            impOnInsert.OnInsert.Code.BackPassed = true;
                        }
                    });

                    jQuery(document).on("keydown", function (e) {

                        var BACK = 8;

                        if (e.which == BACK) {

                            if (impOnInsert.OnInsert.Code.BackPassed == false && impOnInsert.OnInsert.Code.BackPassedEdit == false) {
                                if (e.cancelBubble != null) e.cancelBubble = true;
                                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                                if (e.preventDefault) e.preventDefault();
                                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                                return false;
                            }

                            impOnInsert.OnInsert.Code.BackPassed = false;
                        }

                        if (e.ctrlKey || e.metaKey) {
                            switch (String.fromCharCode(e.which).toLowerCase()) {
                                case 's':

                                    try {
                                        console.log("ctrl + s pressed");
                                    }
                                    catch (ex) {

                                    }
                                    e.preventDefault();
                                    jQuery(".jq-save").click();

                                    return false;
                                case 'z':

                                    if (
                                        !((MouseJQ.selectedElement.hasClass("empty-container-text") || MouseJQ.selectedElement.hasClass("jq-plus-container-text"))
                                            && MouseJQ.selectedElement.length == 1
                                            && MouseJQ.selectedElement.find(".jq-text-block-content").css("cursor") == "text")
                                    ) {
                                        try {
                                            console.log("ctrl + z pressed");
                                        }
                                        catch (ex) {

                                        }
                                        e.preventDefault();
                                        jQuery(".jq-undo").click();
                                        return false;
                                    }
                                    break;

                                case 'y':


                                    try {
                                        console.log("ctrl + y pressed");
                                    }
                                    catch (ex) {

                                    }
                                    e.preventDefault();
                                    jQuery(".jq-redo").click();
                                    return false;
                                   

                                case 'c':

                                    try {
                                        console.log("ctrl + c pressed");
                                    }
                                    catch (ex) {

                                    }

                                    impCopy.CopyPaste.CopyPasteJQ.Copy();

                                    e.preventDefault();
                                    return false;
                                case 'v':
                                    try {
                                    }
                                    catch (Ex) {
                                    }

                                    if (MouseJQ.selectedElement.hasClass("column")) {
                                        impCopy.CopyPaste.CopyPasteJQ.Paste(true);
                                    }
                                    else {
                                        var eh = new impError.ErrorHandle.ErrorJQ();

                                        eh.ActionHelp("Please select a [Column] to paste.");
                                    }

                                    e.preventDefault();
                                    return false;
                                    
                            }
                        }

                    });

                    jQuery("#refresh-image-text-controls-position").on("click", function () {

                        if (MouseJQ.selectedElement.hasClass("column") == true) {
                            jQuery("#design-page-row").hide();

                            var rowControlWidth = 350;
                            var rowControliMax = 100;

                            var pageRowControl = jQuery("#design-page-row");

                            pageRowControl.find(".inline-controls").hide();
                            pageRowControl.find(".column-controls").show();

                            pageRowControl.show();

                            pageRowControl.css("left", "0");
                            pageRowControl.css("top", "0");

                            pageRowControl.find(".selected-object").text("Column Selected");

                            var imgTextLeft = MouseJQ.selectedElement.offset().left;
                            pageRowControl.css("left", imgTextLeft + "px");
                            pageRowControl.css("top", (MouseJQ.selectedElement.offset().top - 25) + "px");


                            //var pageLeft = jQuery("page").offset().left;
                            var pageWidth = jQuery("page").outerWidth(true);

                            pageRowControl.removeClass("rc-back-white");

                            var pageRowControlLeft = pageRowControl.offset().left;

                            var columni = 0;

                            if (pageRowControlLeft + rowControlWidth > pageWidth) {
                                pageRowControl.addClass("rc-back-white");
                            }

                            rowControlWidth = jQuery("#design-page-row").outerWidth(true);

                            while (pageRowControlLeft + rowControlWidth > pageWidth) {

                                columni++;

                                if (columni > rowControliMax) {
                                    break;
                                }

                                pageRowControl.css("left", (pageRowControl.position().left - 10) + "px");
                                pageRowControlLeft = pageRowControl.offset().left;


                                if (pageRowControlLeft + rowControlWidth > pageWidth) {

                                }
                            }

                        }
                        else
                            if (MouseJQ.selectedElement.hasClass("image-text-other") == true) {
                                jQuery("#design-page-row").hide();

                                var rowControlWidth = 420;
                                var rowControliMax = 100;

                                var pageRowControl = jQuery("#design-page-row");

                                pageRowControl.find(".selected-object").text("Object Selected");

                                pageRowControl.find(".inline-controls").hide();

                                pageRowControl.show();

                                if (MouseJQ.selectedElement.hasClass("empty-container-text")) {

                                    pageRowControl.find(".selected-object").text("Text Block Selected");
                                    pageRowControl.find(".text-controls").show();
                                   // rowControlWidth = jQuery("#design-page-row").outerWidth(true);
                                }
                                else
                                    if (MouseJQ.selectedElement.hasClass("empty-container-image")) {

                                        pageRowControl.find(".selected-object").text("Image Selected");
                                        pageRowControl.find(".image-controls").show();
                                      //  rowControlWidth = jQuery("#design-page-row").outerWidth(true);
                                    }

                                pageRowControl.css("left", "0");



                                var imgTextTop = MouseJQ.selectedElement.offset().top - 25;
                                var imgTextLeft = MouseJQ.selectedElement.offset().left;
                                pageRowControl.css("left", imgTextLeft + "px");
                                pageRowControl.css("top", (MouseJQ.selectedElement.offset().top - 25) + "px");


                                pageRowControl.removeClass("rc-back-white");

                                //var pageLeft = jQuery("page").offset().left;
                                var pageWidth = jQuery("page").outerWidth(true);

                                var pageRowControlLeft = pageRowControl.offset().left;

                                var imageTextOtheri = 0;

                                if (pageRowControlLeft + rowControlWidth > pageWidth) {
                                    pageRowControl.addClass("rc-back-white");
                                }

                                rowControlWidth = jQuery("#design-page-row").outerWidth(true);

                                while (pageRowControlLeft + rowControlWidth > pageWidth) {

                                    imageTextOtheri++;

                                    if (imageTextOtheri > rowControliMax) {
                                        break;
                                    }

                                    pageRowControl.css("left", (pageRowControl.position().left - 10) + "px");
                                    pageRowControlLeft = pageRowControl.offset().left;


                                    if (pageRowControlLeft + rowControlWidth > pageWidth) {

                                    }
                                }
                            }
                            else
                                if (MouseJQ.selectedElement.hasClass("row") == true) {
                                    jQuery("#design-page-row").hide();

                                    var rowControlWidth = 370;
                                    var rowControliMax = 100;

                                    var pageRowControl = jQuery("#design-page-row");

                                    pageRowControl.find(".inline-controls").hide();
                                    pageRowControl.find(".row-controls").show();

                                    pageRowControl.show();

                                    pageRowControl.css("left", "0");
                                    pageRowControl.css("top", "0");

                                    pageRowControl.find(".selected-object").text("Row Selected");

                                    var imgTextLeft = MouseJQ.selectedElement.offset().left;
                                    pageRowControl.css("left", imgTextLeft + "px");
                                    pageRowControl.css("top", (MouseJQ.selectedElement.offset().top - 25) + "px");


                                    //var pageLeft = jQuery("page").offset().left;
                                    var pageWidth = jQuery("page").outerWidth(true);


                                    pageRowControl.removeClass("rc-back-white");


                                    var pageRowControlLeft = pageRowControl.offset().left;

                                    var rowi = 0;

                                    rowControlWidth = jQuery("#design-page-row").outerWidth(true);

                                    if (pageRowControlLeft + rowControlWidth > pageWidth) {
                                        pageRowControl.addClass("rc-back-white");
                                    }

                                    while (pageRowControlLeft + rowControlWidth > pageWidth) {

                                        rowi++;

                                        if (rowi > rowControliMax) {
                                            break;
                                        }

                                        pageRowControl.css("left", (pageRowControl.position().left - 10) + "px");
                                        pageRowControlLeft = pageRowControl.offset().left;


                                        if (pageRowControlLeft + rowControlWidth > pageWidth) {

                                        }
                                    }


                                }
                    });


                    jQuery("page").bind('cut', function () {
                        impCopy.CopyPaste.CopyPasteJQ.Cut();
                    });

                    jQuery(window).on('beforeunload', function () {

                        jQuery(".control-page").hide();
                        jQuery(".control-page").removeClass("control-active");
                        jQuery("#control-save").addClass("control-active");
                        jQuery("#control-save").show();

                        return "Note: Unsaved changes will be lost!";

                    });

                    jQuery(document).keyup(function (e) {

                        var ESC = 27;
                        var ENTER = 13;

                        if (e.which === ESC) {

                            /// for moving

                            jQuery("#document-clear-selection").trigger("click");

                            //Resetting Code Text Editor..
                            jQuery(".empty-container-text").draggable({ disabled: false });
                            jQuery(".empty-container-image").draggable({ disabled: false });
                            jQuery("page .jq-text-block-content").removeAttr("contentEditable");
                            jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                            ////////////////////

                            //var topRowPx = "180px";
                            //var topNotifyPx = "105px";

                            //jQuery("rootx").css("top", topRowPx);
                            //jQuery(".designer-top-row").css("height", topRowPx);
                            jQuery(".editor").hide();
                            //jQuery("#notify").css("top", topNotifyPx);


                            ////////////////////

                            impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide()

                            if (e.cancelBubble != null) e.cancelBubble = true;
                            if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                            if (e.preventDefault) e.preventDefault();
                            if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                            return false;
                        }
                    });

                }
            });

        }


    }

}