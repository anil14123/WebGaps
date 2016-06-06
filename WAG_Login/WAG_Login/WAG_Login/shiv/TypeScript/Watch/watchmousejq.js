/// <reference path="../../../library/jquery.d.ts" />
/// <reference path="../../../library/jqueryui.d.ts" />
define(["require", "exports", "../Common/CommonMethodsJQ", "../Controls/ControlsJQ", "../Controls/TextJQ", "../Controls/ImageJQ", "../Controls/FontJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../SmartMenu/SmartMenuJQ", "../Error/ErrorJQ", "../ContextMenu/Contextmenujq", "../controls/bijq", "../JQte/OnInsert", "../MalFormed/MalFormedJQ", "../Controls/ControlCommonJQ", "../Controls/MarginJQ", "../Controls/PaddingJQ", "../Controls/FrontBackJQ", "../Watch/CopyPasteJQ", "../Controls/OpacityJQ", "jquery"], function (require, exports, impCommon, impAddRow, impText, impImage, impFont, impBorder, impColor, impHeightWidth, impError, impCtxMenu, impBi, impOnInsert, impmal, impCommonCode, impMargin, impPadding, impFrontBack, impCopy, impOpacity, jQuery) {
    "use strict";
    //jQueryUI;
    var G_isAttachedWatch = false;
    var isWatchReady = false;
    var Watch;
    (function (Watch) {
        var MouseJQ = (function () {
            function MouseJQ() {
            }
            MouseJQ.RemoveAndResetRemovableRow = function () {
                if (jQuery(".removable-row").length > 0) {
                    jQuery(".removable-row").removeClass("removable-row");
                    jQuery(".columns-pending").removeClass("columns-pending");
                    MouseJQ.selectedElement = jQuery("#nononoelement");
                }
                if (MouseJQ.selectedElement == undefined) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Please select a element.");
                }
            };
            MouseJQ.ProcessMove = function (e) {
                if (jQuery("page").hasClass("dragging") || jQuery("page").hasClass("resizing")) {
                    //$(".key").removeClass("control-focused");
                    return;
                }
                var $target = jQuery(event.target);
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
            };
            MouseJQ.ProcessClick = function (e) {
                var common = new impCommon.Common.CommonMethodsJQ();
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
                if (MouseJQ.selectedElement != undefined && e.ctrlKey == false) {
                    // this is the previous element...
                    MouseJQ.selectedElement.removeClass("image-selection");
                    MouseJQ.selectedElement.removeClass("design-select-element-just-mark");
                }
                // safety
                if (e.ctrlKey == false) {
                    jQuery(".image-selection").removeClass("image-selection");
                }
                MouseJQ.selectedElement = jQuery(e.target);
                MouseJQ.selectedElement = MouseJQ.selectedElement.closest(".key");
                if (MouseJQ.selectedElement.hasClass("key") == false) {
                    MouseJQ.selectedElement = jQuery("#noelement");
                }
                ////////// detecting selected object///////
                if (MouseJQ.selectedElement.hasClass("column")) {
                    jQuery(".selected-display-element").text("Column");
                }
                else if (MouseJQ.selectedElement.hasClass("row")) {
                    jQuery(".selected-display-element").text("Row");
                }
                else if (MouseJQ.selectedElement.hasClass("empty-container-text") || MouseJQ.selectedElement.hasClass("jq-plus-container-text")) {
                    jQuery(".selected-display-element").text("Text Block");
                }
                else if (MouseJQ.selectedElement.hasClass("empty-container-image")) {
                    jQuery(".selected-display-element").text("Image");
                }
                else if (MouseJQ.selectedElement.hasClass("jq-normal-link")) {
                    jQuery(".selected-display-element").text("Link");
                }
                else if (MouseJQ.selectedElement.hasClass("page")) {
                    jQuery(".selected-display-element").text("Page");
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
                    pageRowControl.find(".row-controls").hide();
                    pageRowControl.find(".column-controls").show();
                    pageRowControl.find(".image-text-other-controls").hide();
                    pageRowControl.show();
                    pageRowControl.find(".selected-object").text("Column Selected");
                    pageRowControl.css("left", "0");
                    pageRowControl.css("top", "0");
                    var imgTextLeft = MouseJQ.selectedElement.offset().left;
                    pageRowControl.offset({ top: MouseJQ.selectedElement.offset().top - 25, left: imgTextLeft });
                    //var pageLeft = jQuery("page").offset().left;
                    var pageWidth = jQuery("page").outerWidth(true);
                    pageRowControl.removeClass("rc-back-white");
                    var pageRowControlLeft = pageRowControl.offset().left;
                    var columni = 0;
                    if (pageRowControlLeft + rowControlWidth > pageWidth) {
                        pageRowControl.addClass("rc-back-white");
                    }
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
                else if (MouseJQ.selectedElement.hasClass("row") == true) {
                    jQuery("#design-page-row").hide();
                    var rowControlWidth = 300;
                    var rowControliMax = 100;
                    var pageRowControl = jQuery("#design-page-row");
                    pageRowControl.find(".row-controls").show();
                    pageRowControl.find(".column-controls").hide();
                    pageRowControl.find(".image-text-other-controls").hide();
                    pageRowControl.show();
                    pageRowControl.css("left", "0");
                    pageRowControl.css("top", "0");
                    pageRowControl.find(".selected-object").text("Row Selected");
                    var imgTextLeft = MouseJQ.selectedElement.offset().left;
                    pageRowControl.offset({ top: MouseJQ.selectedElement.offset().top - 25, left: imgTextLeft });
                    //var pageLeft = jQuery("page").offset().left;
                    var pageWidth = jQuery("page").outerWidth(true);
                    pageRowControl.removeClass("rc-back-white");
                    var pageRowControlLeft = pageRowControl.offset().left;
                    var rowi = 0;
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
                else {
                    if (MouseJQ.selectedElement.hasClass("image-text-other") == true) {
                        jQuery("#design-page-row").hide();
                        var rowControlWidth = 260;
                        var rowControliMax = 100;
                        var pageRowControl = jQuery("#design-page-row");
                        pageRowControl.find(".row-controls").hide();
                        pageRowControl.find(".column-controls").hide();
                        pageRowControl.find(".image-text-other-controls").show();
                        pageRowControl.show();
                        if (MouseJQ.selectedElement.hasClass("empty-container-text")) {
                            pageRowControl.find(".selected-object").text("Text Block Selected");
                        }
                        else if (MouseJQ.selectedElement.hasClass("empty-container-image")) {
                            pageRowControl.find(".selected-object").text("[Image] Selected");
                        }
                        pageRowControl.css("left", "0");
                        var imgTextTop = MouseJQ.selectedElement.offset().top - 25;
                        var imgTextLeft = MouseJQ.selectedElement.offset().left;
                        pageRowControl.offset({ top: imgTextTop, left: imgTextLeft });
                        pageRowControl.removeClass("rc-back-white");
                        //var pageLeft = jQuery("page").offset().left;
                        var pageWidth = jQuery("page").outerWidth(true);
                        var pageRowControlLeft = pageRowControl.offset().left;
                        var imageTextOtheri = 0;
                        if (pageRowControlLeft + rowControlWidth > pageWidth) {
                            pageRowControl.addClass("rc-back-white");
                        }
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
                }
                catch (ex) {
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
                    var body = document.body;
                    var docElem = document.documentElement;
                    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
                    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
                    var clientTop = docElem.clientTop || body.clientTop || 0;
                    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
                    var top = box.top + scrollTop - clientTop;
                    var left = box.left + scrollLeft - clientLeft;
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
            };
            MouseJQ.GetActiveControl = function () {
                var activeControl = "";
                var controls = jQuery(".control-page");
                for (var i = 0; i < controls.length; i++) {
                    if (jQuery(controls[i]).css("display") == "block") {
                        activeControl = jQuery(controls[i]).attr("name");
                        break;
                    }
                }
                return activeControl;
            };
            MouseJQ.ResetAfterClear = function () {
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
            };
            MouseJQ.GetActiveSidebarControl = function () {
                var activeControl = "";
                var activeControl = jQuery(".prop-sb.ui-accordion-header-active").first().attr("name");
                // console.log(activeControl);
                return activeControl;
            };
            MouseJQ.WatchHeight = function () {
                try {
                    $(".row").each(function (index, _this) {
                        var heights = jQuery(_this).children(".column").map(function () {
                            return $(this).outerHeight(true);
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
            };
            MouseJQ.prototype.WatchPage = function () {
                jQuery(document).ready(function () {
                    if (G_isAttachedWatch == false) {
                        G_isAttachedWatch = true;
                        window.setInterval(MouseJQ.WatchHeight, 3000);
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
                        jQuery(document).mousemove(function (e) {
                            MouseJQ.ProcessMove(e);
                        });
                        jQuery("page").on("click", function (e) {
                            MouseJQ.ProcessClick(e);
                            if (impCommonCode.ControlCommon.Code.AnchorClicked == true) {
                                impCommonCode.ControlCommon.Code.AnchorClicked = false;
                                if (e.cancelBubble != null)
                                    e.cancelBubble = true;
                                if (e.stopPropagation)
                                    e.stopPropagation(); //e.stopPropagation works in Firefox.
                                if (e.preventDefault)
                                    e.preventDefault();
                                if (e.returnValue != null)
                                    e.returnValue = false; // http://blog.patricktresp.de/2012/02/
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
                                    if (e.cancelBubble != null)
                                        e.cancelBubble = true;
                                    if (e.stopPropagation)
                                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                                    if (e.preventDefault)
                                        e.preventDefault();
                                    if (e.returnValue != null)
                                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
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
                                        event.preventDefault();
                                        jQuery(".jq-save").click();
                                        return false;
                                    case 'z':
                                        if (!((MouseJQ.selectedElement.hasClass("empty-container-text") || MouseJQ.selectedElement.hasClass("jq-plus-container-text"))
                                            && MouseJQ.selectedElement.length == 1
                                            && MouseJQ.selectedElement.find(".jq-text-block-content").css("cursor") == "text")) {
                                            try {
                                                console.log("ctrl + z pressed");
                                            }
                                            catch (ex) {
                                            }
                                            event.preventDefault();
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
                                        event.preventDefault();
                                        jQuery(".jq-redo").click();
                                        return false;
                                }
                            }
                        });
                        jQuery("page").bind('copy', function () {
                            impCopy.CopyPaste.CopyPasteJQ.Copy();
                        });
                        jQuery("page").bind('paste', function () {
                            if (MouseJQ.selectedElement.hasClass("column")) {
                                impCopy.CopyPaste.CopyPasteJQ.Paste(true);
                            }
                            else {
                                var eh = new impError.ErrorHandle.ErrorJQ();
                                eh.ActionHelp("Please select a [Column] to paste.");
                            }
                        });
                        jQuery("#refresh-image-text-controls-position").on("click", function () {
                            if (MouseJQ.selectedElement.hasClass("column") == true) {
                                jQuery("#design-page-row").hide();
                                var rowControlWidth = 350;
                                var rowControliMax = 100;
                                var pageRowControl = jQuery("#design-page-row");
                                pageRowControl.find(".row-controls").hide();
                                pageRowControl.find(".column-controls").show();
                                pageRowControl.find(".image-text-other-controls").hide();
                                pageRowControl.show();
                                pageRowControl.css("left", "0");
                                pageRowControl.css("top", "0");
                                var imgTextLeft = MouseJQ.selectedElement.offset().left;
                                pageRowControl.offset({ top: MouseJQ.selectedElement.offset().top - 25, left: imgTextLeft });
                                //var pageLeft = jQuery("page").offset().left;
                                var pageWidth = jQuery("page").outerWidth(true);
                                pageRowControl.removeClass("rc-back-white");
                                var pageRowControlLeft = pageRowControl.offset().left;
                                var columni = 0;
                                if (pageRowControlLeft + rowControlWidth > pageWidth) {
                                    pageRowControl.addClass("rc-back-white");
                                }
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
                            else if (MouseJQ.selectedElement.hasClass("image-text-other") == true) {
                                jQuery("#design-page-row").hide();
                                var rowControlWidth = 260;
                                var rowControliMax = 100;
                                var pageRowControl = jQuery("#design-page-row");
                                pageRowControl.find(".row-controls").hide();
                                pageRowControl.find(".column-controls").hide();
                                pageRowControl.find(".image-text-other-controls").show();
                                pageRowControl.show();
                                pageRowControl.css("left", "0");
                                var imgTextTop = MouseJQ.selectedElement.offset().top - 25;
                                var imgTextLeft = MouseJQ.selectedElement.offset().left;
                                pageRowControl.offset({ top: imgTextTop, left: imgTextLeft });
                                pageRowControl.removeClass("rc-back-white");
                                //var pageLeft = jQuery("page").offset().left;
                                var pageWidth = jQuery("page").outerWidth(true);
                                var pageRowControlLeft = pageRowControl.offset().left;
                                var imageTextOtheri = 0;
                                if (pageRowControlLeft + rowControlWidth > pageWidth) {
                                    pageRowControl.addClass("rc-back-white");
                                }
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
                            else if (MouseJQ.selectedElement.hasClass("row") == true) {
                                jQuery("#design-page-row").hide();
                                var rowControlWidth = 300;
                                var rowControliMax = 100;
                                var pageRowControl = jQuery("#design-page-row");
                                pageRowControl.find(".row-controls").show();
                                pageRowControl.find(".column-controls").hide();
                                pageRowControl.find(".image-text-other-controls").hide();
                                pageRowControl.show();
                                pageRowControl.css("left", "0");
                                pageRowControl.css("top", "0");
                                var imgTextLeft = MouseJQ.selectedElement.offset().left;
                                pageRowControl.offset({ top: MouseJQ.selectedElement.offset().top - 25, left: imgTextLeft });
                                //var pageLeft = jQuery("page").offset().left;
                                var pageWidth = jQuery("page").outerWidth(true);
                                pageRowControl.removeClass("rc-back-white");
                                var pageRowControlLeft = pageRowControl.offset().left;
                                var rowi = 0;
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
                                impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
                                if (e.cancelBubble != null)
                                    e.cancelBubble = true;
                                if (e.stopPropagation)
                                    e.stopPropagation(); //e.stopPropagation works in Firefox.
                                if (e.preventDefault)
                                    e.preventDefault();
                                if (e.returnValue != null)
                                    e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                                return false;
                            }
                        });
                    }
                });
            };
            return MouseJQ;
        }());
        Watch.MouseJQ = MouseJQ;
    })(Watch = exports.Watch || (exports.Watch = {}));
});
//# sourceMappingURL=WatchMouseJQ.js.map