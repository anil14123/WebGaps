/// <reference path="../../../library/jquery.d.ts" />
define(["require", "exports", "../Watch/WatchMouseJQ", "../Error/ErrorJQ", "../Controls/ControlsJQ", "../Watch/CopyPasteJQ", "../Controls/ImageJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../Controls/TextJQ", "../SmartMenu/SmartMenuJQ", "../Controls/Menujq", "../Controls/BIjq", "../Controls/SpacerJQ"], function (require, exports, impWatch, impError, impAddRowControl, impCopy, impInsertImage, impBorder, impColor, impText, impHeightWidth, impMenuControl, impBi, impSpacer) {
    var G_isAttachedContextMenu = false;
    var CTX_MENU_DISABLED_CLASS = "ctx-menu-disabled";
    var ctxMenuIsReady = false;
    var isBreak = false;
    var ContextMenu;
    (function (ContextMenu) {
        var ContextMenuJQ = (function () {
            function ContextMenuJQ(extra) {
                this.controlId = "#contextMenu";
            }
            ContextMenuJQ.prototype.Init = function () {
                this.MainEvents();
            };
            ContextMenuJQ.ContextMenuBinding = function () {
                // context menu event ...
                jQuery(document).bind("contextmenu", function (e) {
                    if (jQuery(e.target).closest(".control-page").length == 0) {
                        impWatch.Watch.MouseJQ.ProcessClick(e);
                        e.preventDefault();
                        var contextMenu = new ContextMenuJQ();
                        contextMenu.DetectContextMenu();
                        // adjustment based on windows
                        var pageY = e.clientY;
                        if ((pageY) >= (jQuery(window).height() - 250)) {
                            pageY = pageY - 240;
                        }
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp(pageY.toString());
                        var pageX = e.clientX;
                        if (pageX > (jQuery(document).width() - 200)) {
                            pageX = pageX - 150;
                        }
                        /////////////////
                        jQuery(contextMenu.controlId).css("left", pageX + "px"); // For updating the menu position.
                        jQuery(contextMenu.controlId).css("top", pageY + "px"); // 
                        jQuery(contextMenu.controlId).fadeIn(500); //  For bringing the context menu in picture.
                    } // To prevent the default context menu.
                    e.cancelBubble = false;
                });
            };
            ContextMenuJQ.prototype.DetectContextMenu = function () {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
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
                jQuery(".ctx-menu-delete-element").parent().addClass(CTX_MENU_DISABLED_CLASS);
                if (selectedElement.hasClass("root-elements")) {
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
                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }
                if (selectedElement.hasClass("jq-plus-container")
                    ||
                        selectedElement.hasClass("empty-container-text")
                    ||
                        selectedElement.hasClass("empty-container-image")
                    ||
                        selectedElement.hasClass("empty-container-spacer")) {
                    jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                }
                if (selectedElement.hasClass("empty-container-spacer")) {
                    jQuery(".ctx-menu-add-row").parent().addClass(CTX_MENU_DISABLED_CLASS); /// exceptional case..
                }
            };
            ContextMenuJQ.AttachDeleteElement = function () {
                jQuery(".li.ctx-menu-delete-element").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.DeleteElement();
                });
            };
            ContextMenuJQ.AttachInsertText = function () {
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
            };
            ContextMenuJQ.AttachControlPageClose = function () {
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
            };
            ContextMenuJQ.ShowProperties = function () {
                if (!jQuery(".jq-properties-all").hasClass("forced-hide")) {
                    jQuery(".jq-properties-all").show();
                }
            };
            ContextMenuJQ.ControlPageHide = function () {
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
            };
            ContextMenuJQ.ShowControlInsertText = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-text").addClass("control-active");
                jQuery("#control-insert-text").show();
                jQuery("#control-insert-text").trigger("cust_loaded");
            };
            ContextMenuJQ.ShowControlAddRow = function () {
                ContextMenuJQ.ControlPageHide();
                var controlId = impAddRowControl.Page.AddRowJQ.pageId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(controlId).show();
                jQuery(controlId).trigger('cust_loaded');
            };
            ContextMenuJQ.ShowMenu = function () {
                new impMenuControl.Menu.MenuJQ().Init();
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery(".control-menu").addClass("control-active");
                jQuery(".control-menu").show();
                impMenuControl.Menu.MenuJQ.ProcessShow();
                //jQuery("control-menu").trigger('cust_loaded');
            };
            ContextMenuJQ.InsertImage = function () {
                ContextMenuJQ.ControlPageHide();
                var controlId = impInsertImage.Image.SelfJQ.controlId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(controlId).show();
                jQuery(controlId).trigger('custom_loaded');
            };
            ContextMenuJQ.CopyElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Copy();
            };
            ContextMenuJQ.DeleteElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Delete();
            };
            ContextMenuJQ.CutElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Cut();
            };
            ContextMenuJQ.PasteElement = function () {
                //var copyObj = new impCopy.CopyPaste.SelfJQ();
                impCopy.CopyPaste.CopyPasteJQ.Paste();
            };
            ContextMenuJQ.PasteClipBorad = function () {
                jQuery(".jq-clipboard").html("");
                jQuery("#control-insert-clipboard").show();
                //impCopy.CopyPaste.CopyPasteJQ.PasteClipBoard(); // no need to call. it will be called in paste event.
            };
            ContextMenuJQ.ShowControlHeightWidth = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-height-width").addClass("control-active");
                jQuery("#control-height-width").show();
            };
            ContextMenuJQ.ShowBorderControl = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border").addClass("control-active");
                jQuery("#control-border").show();
            };
            ContextMenuJQ.ShowColor = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-color").addClass("control-active");
                jQuery("#control-color").show();
            };
            ContextMenuJQ.ShowBackgroundImage = function () {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-bi").addClass("control-active");
                jQuery("#control-bi").show();
            };
            ContextMenuJQ.AttachAddRow = function () {
                jQuery(".li.ctx-menu-add-row").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowControlAddRow();
                    impAddRowControl.Page.AddRowJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachHeightWidth = function () {
                jQuery(".li.ctx-menu-height-width").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowControlHeightWidth();
                    impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachBorder = function () {
                new impBorder.Border.BorderJQ().Init();
                jQuery(".li.ctx-menu-border").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowBorderControl();
                    impBorder.Border.BorderJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachCopy = function () {
                jQuery(".li.ctx-menu-copy").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.CopyElement();
                });
            };
            ContextMenuJQ.AttachCut = function () {
                jQuery(".li.ctx-menu-cut").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.CutElement();
                });
            };
            ContextMenuJQ.AttachPaste = function () {
                jQuery(".li.ctx-menu-paste").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.PasteElement();
                });
            };
            ContextMenuJQ.AttachPasteClipBorad = function () {
                jQuery(".li.ctx-menu-paste-clipborad").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.PasteClipBorad();
                });
            };
            ContextMenuJQ.AttachSpacer = function () {
                jQuery(".ctx-menu-insert-empty-space").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
            };
            ContextMenuJQ.AttachInsertImage = function () {
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
            };
            ContextMenuJQ.AttachBackgroundImage = function () {
                new impBi.BI.BIJQ().Init();
                jQuery(".li.ctx-menu-background-image").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowBackgroundImage();
                    impBi.BI.BIJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachInsertMenu = function () {
                jQuery(".li.ctx-menu-insert-menu").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowMenu();
                    impMenuControl.Menu.MenuJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachColor = function () {
                new impColor.Color.ColorJQ().Init();
                jQuery(".li.ctx-menu-color").on("click", function () {
                    if (jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        return;
                    }
                    ContextMenuJQ.ShowColor();
                    impColor.Color.ColorJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.ContextInnerMenuShowHide = function () {
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
            };
            ContextMenuJQ.LiClick = function () {
                // selected item ...
                jQuery("#contextMenuitems > li").click(function () {
                    // alert($(this).text());  // Performing the selected function.
                });
            };
            ContextMenuJQ.prototype.MainEvents = function () {
                jQuery(document).ready(function () {
                    if (ctxMenuIsReady == false) {
                        ctxMenuIsReady = true;
                        jQuery(document).on("click", function () {
                            jQuery("#contextMenu").hide(500); // To hide the context menu
                            jQuery("#smInsertNextPrev").hide(500);
                        });
                        if (G_isAttachedContextMenu == false) {
                            G_isAttachedContextMenu = true;
                            ContextMenuJQ.ContextMenuBinding();
                            ContextMenuJQ.LiClick();
                            ContextMenuJQ.ContextInnerMenuShowHide();
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
                            ContextMenuJQ.AttachColor();
                            ContextMenuJQ.AttachInsertMenu();
                            ContextMenuJQ.AttachBackgroundImage();
                            ContextMenuJQ.AttachControlPageClose();
                        }
                    }
                });
            };
            return ContextMenuJQ;
        })();
        ContextMenu.ContextMenuJQ = ContextMenuJQ;
    })(ContextMenu = exports.ContextMenu || (exports.ContextMenu = {}));
});
//# sourceMappingURL=Contextmenujq.js.map