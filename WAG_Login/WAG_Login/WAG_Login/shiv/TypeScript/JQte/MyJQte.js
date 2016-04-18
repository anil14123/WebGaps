/// <reference path="document.d.ts" />
define(["require", "exports", "../Constants/ConstantsJQ", "../UndoManager/UndoManager"], function (require, exports, impStatic, impUndoManager) {
    "use strict";
    var initOnce = false;
    var MyJQte;
    (function (MyJQte) {
        var JqteParams = (function () {
            function JqteParams() {
            }
            return JqteParams;
        }());
        MyJQte.JqteParams = JqteParams;
        var jqte = (function () {
            function jqte(params) {
                this.Init();
            }
            jqte.prototype.Init = function () {
                if (initOnce == false) {
                    initOnce = true;
                    jQuery(".jqte-editor-tool").click(function () {
                        return false;
                    });
                    $(".jqte-editor-tool-p").off('click');
                    $(".jqte-editor-tool").off('click');
                    $(".jqte-editor-tool-c").off('click');
                    $(".jq-color").off('click');
                    this.AttachEvents();
                    jQuery(".font-name-list li").each(function () {
                        jQuery(this).children().css("font-family", jQuery(this).text());
                    });
                }
            };
            jqte.GenerateId = function () {
                return "EditorLink" + ++impStatic.Constants.StaticJQ.editorLinkId;
            };
            jqte.prototype.AttachEvents = function () {
                jQuery(document).not(".editor").click(function (e) {
                    if (!jQuery(e.target).hasClass("jqte-editor-tool-p")) {
                        jQuery(".jqte-editor-tool-list").hide();
                    }
                });
                $(".jqte-editor-tool,.jqte-editor-tool-p").mouseup(function (e) {
                    jQuery(this).removeClass("highlight-tool");
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jqte-editor-tool,.jqte-editor-tool-p").mousedown(function (e) {
                    jQuery(this).addClass("highlight-tool");
                    var name = jQuery(this).attr("name");
                    switch (name) {
                        case "font":
                            jQuery(".jqte-editor-tool-list").not(".font-name-list").hide();
                            if (jQuery(".font-name-list").css("display") == "none") {
                                jQuery(".font-name-list").css("display", "block");
                            }
                            else {
                                jQuery(".font-name-list").css("display", "none");
                            }
                            break;
                        case "font-size":
                            jQuery(".jqte-editor-tool-list").not(".font-size-list").hide();
                            if (jQuery(".font-size-list ").css("display") == "none") {
                                jQuery(".font-size-list ").css("display", "block");
                            }
                            else {
                                jQuery(".font-size-list ").css("display", "none");
                            }
                            break;
                        case 'fore-color':
                        case 'back-color':
                            jQuery(".jqte-editor-tool-list").not(".jqte-color-palette").hide();
                            if (jQuery(this).hasClass("current-color-tool")) {
                                if (jQuery(".jqte-color-palette").css("display") == "none") {
                                    jQuery(".jqte-color-palette").css("display", "block");
                                }
                                else {
                                    jQuery(".jqte-color-palette").css("display", "none");
                                }
                            }
                            else {
                                jQuery(".jqte-color-palette").css("display", "block");
                            }
                            jQuery(".color-tool").removeClass("current-color-tool");
                            jQuery(this).addClass("current-color-tool");
                            break;
                        case 'bold':
                            jqte.SelectionSet("bold", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'italic':
                            jqte.SelectionSet("italic", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'underline':
                            jqte.SelectionSet('underline', null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'strike':
                            jqte.SelectionSet("strikeThrough", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'bullet':
                            jqte.SelectionSet("insertUnorderedList", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'number':
                            jqte.SelectionSet("insertOrderedList", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'left':
                            jqte.SelectionSet("justifyLeft", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'right':
                            jqte.SelectionSet("justifyRight", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'center':
                            jqte.SelectionSet("justifyCenter", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'full':
                            jqte.SelectionSet("justifyFull", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'outdent':
                            jqte.SelectionSet("outdent", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'indent':
                            jqte.SelectionSet("indent", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case 'clear':
                            jqte.SelectionSet("removeFormat", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case "unlink":
                            jqte.SelectionSet("unlink", null);
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                            break;
                        case "link":
                            jQuery(".jqte-editor-tool-list").not(".jqte-link").hide();
                            if (jQuery(".jqte-link").css("display") == "none") {
                                jQuery(".jqte-link").css("display", "block");
                            }
                            else {
                                jQuery(".jqte-link").css("display", "none");
                            }
                            jQuery(".link-window-url").val("http://");
                            jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#003399");
                            jQuery(".current-editor-scope").find("font[color='#003399']").addClass("key jq-editor-link");
                            jqte.SelectionSet("createLink", "#");
                            jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("id", MyJQte.jqte.GenerateId());
                            break;
                    }
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                jQuery(".editor-create-link").click(function (e) {
                    jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("href", jQuery(".link-window-url").val());
                    jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                    jQuery(".jqte-editor-tool-list").hide();
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jqte-editor-tool-c").mousedown(function (e) {
                    if (jQuery(this).parent().parent().hasClass("font-name")) {
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if (selectedtext == "") {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.find(".jq-text-block").css("font-family", jQuery(this).attr("value"));
                        }
                        if (selectedtext != "") {
                            jqte.SelectionSet("fontName", jQuery(this).attr("value"));
                        }
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    if (jQuery(this).parent().parent().hasClass("font-size")) {
                        jqte.SelectionSet("fontSize", 7);
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if (selectedtext == "") {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.css("font-size", jQuery(this).attr("value") + "px");
                        }
                        if (selectedtext != "") {
                            jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).attr("value") + "px").removeAttr("size");
                        }
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    jQuery(".jqte-editor-tool-list").hide();
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                $(".jq-color").mousedown(function (e) {
                    if (jQuery(".current-color-tool").length > 0) {
                        var name = jQuery(".current-color-tool").attr("name");
                        if (name == "back-color") {
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#afafaf");
                            var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            if (selectedtext == "") {
                                var selectedElement = jQuery(".image-selection").last();
                                if (selectedElement.hasClass("empty-container-text")) {
                                    selectedElement = selectedElement.find(".jq-text-block");
                                }
                                selectedElement.css("background-color", jQuery(this).css("background-color"));
                            }
                            if (selectedtext != "") {
                                jqte.SelectionSet("backColor", jQuery(this).css("background-color"));
                            }
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                        else if (name = "fore-color") {
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#afafaf");
                            var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            if (selectedtext == "") {
                                var selectedElement = jQuery(".image-selection").last();
                                if (selectedElement != undefined) {
                                    selectedElement.css("color", jQuery(this).css("background-color"));
                                    if (selectedElement.hasClass("jq-editor-link") || selectedElement.hasClass("jq-normal-link")) {
                                        if (jQuery("page").find("." + selectedElement.find("a").first().attr("id")).length > 0) {
                                            jQuery("page").find("." + selectedElement.find("a").first().attr("id")).html("");
                                        }
                                        else {
                                            var style = "<style class='" + selectedElement.find("a").first().attr("id") + "'> </span>";
                                            jQuery("page").append(style);
                                        }
                                        var linkId = "#" + selectedElement.find("a").first().attr("id");
                                        var linkColor = jQuery(this).css("background-color");
                                        var style = " " +
                                            linkId + ":link {" +
                                            " color:" + linkColor + ";}" +
                                            linkId + ":visited {" +
                                            " color:" + linkColor + ";}" +
                                            linkId + ":hover {" +
                                            " color:" + linkColor + ";}" +
                                            linkId + ":active {" +
                                            " color:" + linkColor + ";}";
                                        jQuery("page").find("." + selectedElement.find("a").first().attr("id")).html(style);
                                    }
                                }
                            }
                            if (selectedtext != "") {
                                jqte.SelectionSet("foreColor", jQuery(this).css("background-color"));
                            }
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                    }
                    jQuery(".jqte-editor-tool-list").hide();
                    if (e.cancelBubble != null)
                        e.cancelBubble = true;
                    if (e.stopPropagation)
                        e.stopPropagation(); //e.stopPropagation works in Firefox.
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.returnValue != null)
                        e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                    return false;
                });
                //jQuery(".jqte-editor").focus(function () {
                //    jQuery(this).addClass("focused");
                //});
                //for testing
                // this.AttachGetSelection();
            };
            //for testing
            //public AttachGetSelection() {
            //    jQuery(".get-selection").click(function () {
            //        jqte.GetSelectetdText();
            //        jQuery(this).closest(".editor").find(".jqte-editor").find("font[size=1]").attr("size", 50);
            //    });
            //}
            jqte.GetSelectetdText = function () {
                return jqte.SelectionSet("fontSize", "1");
            };
            jqte.SelectionGet = function () {
                // for webkit, mozilla, opera
                if (window.getSelection)
                    return window.getSelection();
                else if (document.selection && document.selection.createRange && document.selection.type != "None")
                    return document.selection.createRange();
            };
            jqte.SelectionSet = function (addCommand, thirdParam) {
                var range, sel = jqte.SelectionGet();
                // for webkit, mozilla, opera
                if (window.getSelection) {
                    if (sel.anchorNode && sel.getRangeAt)
                        range = sel.getRangeAt(0);
                    if (range) {
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                    if (!jqte.ThisBrowser.match(/msie/))
                        document.execCommand('StyleWithCSS', false, false);
                    document.execCommand(addCommand, false, thirdParam);
                }
                else if (document.selection && document.selection.createRange && document.selection.type != "None") {
                    range = document.selection.createRange();
                    range.execCommand(addCommand, false, thirdParam);
                }
            };
            jqte.SelectText = function (element) {
                if (element) {
                    var element = element[0];
                    var range;
                    if (document.body.createTextRange) {
                        range = document.body.createTextRange();
                        range.moveToElementText(element);
                        range.select();
                    }
                    else if (window.getSelection) {
                        var selection = window.getSelection();
                        range = document.createRange();
                        if (element != "undefined" && element != null) {
                            range.selectNodeContents(element);
                            selection.removeAllRanges();
                            selection.addRange(range);
                            if ($(element).is(":empty")) {
                                $(element).append("&nbsp;");
                                jqte.SelectText($(element));
                            }
                        }
                    }
                }
            };
            jqte.ThisBrowser = navigator.userAgent.toLowerCase();
            return jqte;
        }());
        MyJQte.jqte = jqte;
    })(MyJQte = exports.MyJQte || (exports.MyJQte = {}));
});
//# sourceMappingURL=MyJQte.js.map