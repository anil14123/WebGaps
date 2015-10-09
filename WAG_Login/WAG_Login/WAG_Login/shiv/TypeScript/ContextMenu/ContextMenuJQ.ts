﻿
/// <reference path="../../../library/jquery.d.ts" />

/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: impCommonSmart.Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

import impWatch = require("../Watch/WatchMouseJQ");
import impError = require("../Error/ErrorJQ");
import impAddRowControl = require("../Controls/ControlsJQ");
import impCopy = require("../Watch/CopyPasteJQ");
import impInsertImage = require("../Controls/ImageJQ");
import impBorder = require("../Controls/BorderJQ");
import impColor = require("../Controls/ColorJQ");
import impText = require("../Controls/TextJQ");
import impHeightWidth = require("../SmartMenu/SmartMenuJQ");
import impCommon = require("../Common/CommonMethodsJQ");
import impJqueryUi = require("../Controls/JQueryUI");
import impCommonSmart = require("../common/CommonEvents");
import impMenuControl = require("../Controls/Menujq");
import impBi = require("../Controls/BIjq");
import impSpacer = require("../Controls/SpacerJQ");
import impLink = require("../Controls/LinkJQ");
import impHtml = require("../Controls/HtmlJQ");
import impMargin = require("../Controls/MarginJQ");
import impPadding = require("../Controls/PaddingJQ");
import impFrontBack = require("../Controls/FrontBackJQ");
import impOpacity = require("../Controls/OpacityJQ");
import impBorderShadow = require("../Controls/BorderShadow");

var G_isAttachedContextMenu = false;

var CTX_MENU_DISABLED_CLASS = "ctx-menu-disabled";

var ctxMenuIsReady = false;

var isBreak = false;

export module ContextMenu {


    export class ContextMenuJQ {

        isAttached: Boolean;

        controlId = "#contextMenu";

        constructor(extra?) {
        }

        public Init() {

            this.MainEvents();
        }

        public static ContextMenuBinding() {
            // context menu event ...
            jQuery(document).bind("contextmenu", function (e) {

               
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    e.preventDefault();

                    var contextMenu = new ContextMenuJQ();

                    contextMenu.DetectContextMenu();

                    // adjustment based on windows
                    var pageY = e.clientY;

                    if ((pageY ) >= (jQuery(window).height() - 250)) {

                        pageY = pageY - 240;
                    }

                    //var eh = new impError.ErrorHandle.ErrorJQ();

                    //eh.ActionHelp(pageY.toString());

                    var pageX = e.clientX;
                    if (pageX > (jQuery(document).width() - 200)) {
                        pageX = pageX - 150;
                    }
                    /////////////////

                    jQuery(contextMenu.controlId).css("left", pageX + "px");   // For updating the menu position.
                    jQuery(contextMenu.controlId).css("top", pageY + "px");    // 
                    jQuery(contextMenu.controlId).fadeIn(500); //  For bringing the context menu in picture.
                                   // To prevent the default context menu.

                e.cancelBubble = false;
            });
        }

        public DetectContextMenu() {


            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement != undefined) {
                jQuery(".ctx-menu-add-row").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-height-width").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-border").parent().removeClass(CTX_MENU_DISABLED_CLASS);


                jQuery(".ctx-menu-cut").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-copy").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-paste").parent().addClass(CTX_MENU_DISABLED_CLASS);

                jQuery(".ctx-menu-insert").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-text").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-image").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-youtube").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-html").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-css").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-menu").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-empty-space").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-link").parent().addClass(CTX_MENU_DISABLED_CLASS);
                jQuery(".ctx-menu-insert-object").parent().addClass(CTX_MENU_DISABLED_CLASS);

                jQuery(".ctx-menu-delete-element").parent().addClass(CTX_MENU_DISABLED_CLASS);

                if (selectedElement.hasClass("root-elements")) {
                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }

                if (selectedElement.hasClass("jq-site-link-container")) {
                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }

                if (selectedElement.hasClass("jqRootRow")) {
                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }

                if (selectedElement.hasClass("column")) {

                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-text").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-youtube").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-html").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-css").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-menu").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-empty-space").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-link").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-object").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }

                if (selectedElement.hasClass("empty-container") && !selectedElement.hasClass("empty-container-spacer")) {
                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-text").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-youtube").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-html").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-css").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-menu").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-empty-space").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-link").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-object").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }

                if (
                    selectedElement.hasClass("jq-plus-container")
                    ||
                    selectedElement.hasClass("empty-container-spacer")
                    ) {
                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }


                if (
                    selectedElement.hasClass("empty-container-text")
                    ||
                    selectedElement.hasClass("empty-container-image")

                    ) {

                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-text").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-youtube").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-html").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-css").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-menu").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-empty-space").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-link").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-object").parent().removeClass(CTX_MENU_DISABLED_CLASS);

                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }

                if (selectedElement.hasClass("empty-container-spacer")) {
                    jQuery(".ctx-menu-add-row").parent().addClass(CTX_MENU_DISABLED_CLASS); /// exceptional case..
                }
            }

        }

        public static AttachDeleteElement() {

            jQuery(".li.ctx-menu-delete-element").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.DeleteElement();

            })
        }

        public static AttachInsertLinkContainer() {

            jQuery(".li.ctx-menu-insert-link-container").on("click", function () {

                window.smartObj = null;

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                //to be moved to other class
                impCopy.CopyPaste.CopyPasteJQ.CreateLinkContainer();

            });
        }


    

        public static AttachInsertLink() {

            new impLink.Link.LinkJQ().Init();

            jQuery(".li.ctx-menu-insert-link").on("click", function () {

                window.smartObj = null;

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowControlInsertLink();

                impLink.Link.LinkJQ.ProcessSelectNotify();

            });
        }

        public static AttachInsertHTML() {

            new impHtml.Html.HtmlJQ().Init();

            jQuery(".li.ctx-menu-insert-html").on("click", function () {

                window.smartObj = null;

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowControlInsertHTML();
            
            });

        }


        public static AttachInsertText() {

            jQuery(".li.smart-menu-insert-text").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowControlInsertText();

                impText.Text.TextJQ.ProcessSelectNotify();

            });

            jQuery(".li.ctx-menu-insert-text").on("click", function () {

                window.smartObj = null;

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowControlInsertText();

                impText.Text.TextJQ.ProcessSelectNotify();

            });

        }

        public static AttachControlPageClose() {

            jQuery(".control-templates").find(".close-button").click(function () {
                jQuery(".control-page").removeClass("control-active");
                ContextMenuJQ.ShowProperties();
            });

            jQuery(".control-page").find(".close-button").click(function () {
                jQuery(".control-page").removeClass("control-active");
                ContextMenuJQ.ShowProperties();

                jQuery(".internet-bi-image-url").val("");
                jQuery(".internet-image-url").val("");
            });
        }

        public static ShowProperties() {
            if (!jQuery(".jq-properties-all").hasClass("forced-hide")) {
                jQuery(".jq-properties-all").show();
            }
        }

        public static ControlPageHide() {

            jQuery(".control-page").hide();
            jQuery(".control-page").attr("style", "");
            jQuery(".control-page").css("display", "none");
            jQuery(".control-page").removeClass("control-active");

            if (jQuery(".jq-properties-all").css("display") == "block") {
                jQuery(".jq-properties-all").addClass("normal-hide");
                jQuery(".jq-properties-all").hide();
            }
            else {
                if (!jQuery(".jq-properties-all").hasClass("forced-hide")) {
                    jQuery(".jq-properties-all").show();
                }
            }
        }

        public static ShowControlInsertLink() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-insert-link").addClass("control-active");

            impLink.Link.LinkJQ.Show();
            
        }

        public static ShowControlInsertHTML() {

            ContextMenuJQ.ControlPageHide();

          
            impHtml.Html.HtmlJQ.Show();
        }


        public static ShowControlInsertText() {

            ContextMenuJQ.ControlPageHide();

            ////////////////////////// show editor

            var topRowPx = "180px";

            var topNotifyPx = "105px";

            jQuery("rootx").css("top", topRowPx);
            jQuery(".designer-top-row").css("height", topRowPx);
            jQuery("#notify").css("top", topNotifyPx);
            jQuery(".editor").show();

            jQuery(".jqte-editor").removeClass("current-editor-scope");

            jQuery(this).find(".jqte-editor").addClass("current-editor-scope");
            //////////////////////////


            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-insert-text").addClass("control-active");

            jQuery("#control-insert-text").show();
            jQuery("#control-insert-text").trigger("cust_loaded");
        }

        public static ShowControlAddRow() {

            ContextMenuJQ.ControlPageHide();

            var controlId = impAddRowControl.Page.AddRowJQ.pageId;

            jQuery(".control-page").removeClass("control-active");
            jQuery(controlId).addClass("control-active");


            jQuery(controlId).show();
            jQuery(controlId).trigger('cust_loaded');
        }

        public static ShowMenu() {

            new impMenuControl.Menu.MenuJQ().Init();

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery(".control-menu").addClass("control-active");


            jQuery(".control-menu").show();
            impMenuControl.Menu.MenuJQ.ProcessShow();
            //jQuery("control-menu").trigger('cust_loaded');
        }

        public static InsertImage() {

            ContextMenuJQ.ControlPageHide();

            var controlId = impInsertImage.Image.SelfJQ.controlId;


            jQuery(".control-page").removeClass("control-active");
            jQuery(controlId).addClass("control-active");

            jQuery(".action-button-insert-image").show();
            jQuery(".action-button-change-image").hide();


            jQuery(controlId).show();
            jQuery(controlId).trigger('custom_loaded');
        }


        public static CopyElement() {

            //var copyObj = new impCopy.CopyPaste.SelfJQ();

            impCopy.CopyPaste.CopyPasteJQ.Copy();
        }

        public static DeleteElement() {

            //var copyObj = new impCopy.CopyPaste.SelfJQ();

            impCopy.CopyPaste.CopyPasteJQ.Delete();
        }

        public static CutElement() {

            //var copyObj = new impCopy.CopyPaste.SelfJQ();

            impCopy.CopyPaste.CopyPasteJQ.Cut();
        }

        public static PasteElement() {

            //var copyObj = new impCopy.CopyPaste.SelfJQ();

            impCopy.CopyPaste.CopyPasteJQ.Paste();
        }

        public static PasteClipBorad() {

            jQuery(".jq-clipboard").html("");
            jQuery("#control-insert-clipboard").show();

            //impCopy.CopyPaste.CopyPasteJQ.PasteClipBoard(); // no need to call. it will be called in paste event.
        }




        public static ShowControlHeightWidth() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-height-width").addClass("control-active");

            jQuery("#control-height-width").show();
        }

        public static ShowBorderControl() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-border").addClass("control-active");


            jQuery("#control-border").show();
        }

        public static ShowMarginControl() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-margin").addClass("control-active");


            jQuery("#control-margin").show();
        }

        public static ShowPaddingControl() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-padding").addClass("control-active");


            jQuery("#control-padding").show();
        }

        public static ShowOpacity() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-opacity").addClass("control-active");


            jQuery("#control-opacity").show();
        }

        public static ShowZindex() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-zindex").addClass("control-active");


            jQuery("#control-zindex").show();

        }

        public static ShowBS() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-border-shadow").addClass("control-active");


            jQuery("#control-border-shadow").show();

        }


        public static ShowColor() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-color").addClass("control-active");


            jQuery("#control-color").show();
        }

        public static ShowBackgroundImage() {

            ContextMenuJQ.ControlPageHide();

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-bi").addClass("control-active");

            jQuery("#control-bi").show();
        }


        public static AttachAddRow() {
            jQuery(".li.ctx-menu-add-row").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowControlAddRow();

                impAddRowControl.Page.AddRowJQ.ProcessSelectNotify();

            });
        }



        public static AttachHeightWidth() {

            jQuery(".li.ctx-menu-height-width").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowControlHeightWidth();

                impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();

            });
        }

        public static AttachBorder() {

            new impBorder.Border.BorderJQ().Init();

            jQuery(".li.ctx-menu-border").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowBorderControl();

                impBorder.Border.BorderJQ.ProcessSelectNotify();

            });
        }


        public static AttachMargin() {

            new impMargin.Margin.MarginJQ().Init();

            jQuery(".li.ctx-menu-margin").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowMarginControl();

                impMargin.Margin.MarginJQ.ProcessSelectNotify();

            });
        }

        public static AttachPadding() {
             
            new impPadding.Padding.PaddingJQ().Init();

            jQuery(".li.ctx-menu-padding").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowPaddingControl();

                impPadding.Padding.PaddingJQ.ProcessSelectNotify();

            });
        }

        public static AttachOpacity() {

            new impOpacity.Opacity.OpacityJQ().Init();

            jQuery(".li.ctx-menu-opacity").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowOpacity();

                impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();

            });
        }


        public static AttachZindex() {

            new impFrontBack.FrontBack.FrontBackJQ().Init();

            jQuery(".li.ctx-menu-z-index").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowZindex();

                impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();

            });
        }

        public static AttachBorderShadow() {

            new impBorderShadow.BorderShadow.BorderShadowJQ().Init();

            jQuery(".li.ctx-menu-border-shadow").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowBS();

                impBorderShadow.BorderShadow.BorderShadowJQ.ProcessSelectNotify();

            });
        }

        

        public static AttachCopy() {
            jQuery(".li.ctx-menu-copy").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.CopyElement();
            });
        }

        public static AttachCut() {
            jQuery(".li.ctx-menu-cut").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.CutElement();
            });
        }

        public static AttachPaste() {
            jQuery(".li.ctx-menu-paste").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }
                
                ContextMenuJQ.PasteElement();
            });
        }

        public static AttachPasteClipBorad() {
            jQuery(".li.ctx-menu-paste-clipborad").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.PasteClipBorad();
            });
        }


        public static AttachSpacer() {

            jQuery(".smart-menu-insert-empty-space").on("click", function () {

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                impSpacer.Spacer.SpacerJQ.InsertSpacer();

            });

            jQuery(".ctx-menu-insert-empty-space").on("click", function () {

                window.smartObj = null;

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                impSpacer.Spacer.SpacerJQ.InsertSpacer();                                

            });
        }

        public static AttachInsertImage() {

            new impInsertImage.Image.SelfJQ().Init();

            jQuery(".li.smart-menu-insert-image").on("click", function () {


                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.InsertImage();

                impInsertImage.Image.SelfJQ.ProcessSelectNotify();

            });

            jQuery(".li.ctx-menu-insert-image").on("click", function () {

                window.smartObj = null;

                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.InsertImage();

                impInsertImage.Image.SelfJQ.ProcessSelectNotify();

            });
        }

        public static AttachBackgroundImage() {

            new impBi.BI.BIJQ().Init();

            jQuery(".li.ctx-menu-background-image").on("click", function () {


                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowBackgroundImage();

                impBi.BI.BIJQ.ProcessSelectNotify();

            });
        }

        public static AttachInsertMenu() {
          
            jQuery(".li.ctx-menu-insert-menu").on("click", function () {


                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowMenu();

                impMenuControl.Menu.MenuJQ.ProcessSelectNotify();

            });
        }


        public static AttachColor() {

            new impColor.Color.ColorJQ().Init();

            jQuery(".li.ctx-menu-color").on("click", function () {


                if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                    return;
                }

                ContextMenuJQ.ShowColor();

                impColor.Color.ColorJQ.ProcessSelectNotify();

            });
        }

      


        public static ContextInnerMenuShowHide() {


            jQuery("#contextMenuitems").find(".li").mouseenter(function (e) {

                // adjustment based on window.
                var left = 147;
                if (e.pageX > ($(document).width() - 200)) {
                    left = -150;
                }

                jQuery(this).parent().find(".innerListContainer").first().css("left", left + "px");
                jQuery(this).parent().find(".innerListContainer").first().css("display", "block");


            });

            jQuery("#contextMenuitems").find("li").mouseleave(function (e) {


                jQuery(this).find(".innerListContainer").first().css("display", "none");


            });

        }

        public static LiClick() {
            // selected item ...
            jQuery("#contextMenuitems > li").click(function () {
                // alert($(this).text());  // Performing the selected function.

            });

        }

        MainEvents() {


            jQuery(document).ready(function () {

                if (ctxMenuIsReady == false) {
                    ctxMenuIsReady = true;
                    
                    jQuery(document).on("click", function () {

                        jQuery("#contextMenu").hide(500);              // To hide the context menu
                        jQuery("#smInsertNextPrev").hide(500);
                    });

                    if (G_isAttachedContextMenu == false) {
                        G_isAttachedContextMenu = true;

                        
                        ContextMenuJQ.ContextMenuBinding();
                        ContextMenuJQ.LiClick();
                        ContextMenuJQ.ContextInnerMenuShowHide();
                        ContextMenuJQ.AttachInsertLinkContainer();
                        ContextMenuJQ.AttachInsertLink();
                        ContextMenuJQ.AttachInsertHTML();
                        ContextMenuJQ.AttachInsertText();
                        ContextMenuJQ.AttachAddRow();
                        ContextMenuJQ.AttachDeleteElement();
                        ContextMenuJQ.AttachHeightWidth();
                        ContextMenuJQ.AttachCopy();
                        ContextMenuJQ.AttachPaste();
                        ContextMenuJQ.AttachPasteClipBorad();
                        ContextMenuJQ.AttachCut();
                        ContextMenuJQ.AttachInsertImage();
                        ContextMenuJQ.AttachSpacer();
                        ContextMenuJQ.AttachBorder();
                        ContextMenuJQ.AttachMargin();
                        ContextMenuJQ.AttachZindex();
                        ContextMenuJQ.AttachBorderShadow();
                        ContextMenuJQ.AttachOpacity();
                        ContextMenuJQ.AttachPadding();
                        ContextMenuJQ.AttachColor();
                        ContextMenuJQ.AttachInsertMenu();
                        ContextMenuJQ.AttachBackgroundImage();

                        ContextMenuJQ.AttachControlPageClose();
                    }
                }
            });


        }



    }

}