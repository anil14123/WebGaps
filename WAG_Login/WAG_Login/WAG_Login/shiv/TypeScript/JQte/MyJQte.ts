/// <reference path="document.d.ts" />

import impStatic = require("../Constants/ConstantsJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impOnInsert = require("../JQte/OnInsert");
import impCommonCode = require("../Controls/ControlCommonJQ");

import * as jQuery from "jquery";

var initOnce = false;

export module MyJQte {

    export class JqteParams {

    }

    export class jqte {

        public static $this: JQuery;

        public static ThisBrowser = navigator.userAgent.toLowerCase();

        constructor(params: JqteParams) {

            this.Init();
        }

        public Init() {

            if (initOnce == false) {
                initOnce = true;

                jQuery(".jqte-editor-tool").on("click" ,function () {
                    return false;
                });

                jQuery(".jqte-editor-tool-p").off('click');
                jQuery(".jqte-editor-tool").off('click');
                jQuery(".jqte-editor-tool-c").off('click');
                jQuery(".jq-color").off('click');

                this.AttachEvents();
                jQuery(".font-name-list li").each(function () {

                    jQuery(this).children().css("font-family", jQuery(this).text());
                });

                //jQuery("#jqte-edit").on("click", function () {
                //    jQuery("#jqte-edit").hide();
                //    jQuery("#jqte-edit-stop").show();

                //    jQuery(".column.design-column").find(".ui-resizable-handle").attr("contentEditable", "false").hide();
                //    jQuery(".row").attr("contentEditable", "false");
                //    jQuery(".column.design-column").attr("contentEditable", "true");
                //    jQuery(".column.design-column").find(".image-text-other, .image-text-other *").not(".jqte-editor").attr("contentEditable", "false");

                //    impOnInsert.OnInsert.Code.BackPassedEdit = true;

                //});

                //jQuery("#jqte-edit-stop").on("click", function () {
                //    jQuery("#jqte-edit").show();
                //    jQuery("#jqte-edit-stop").hide();

                //    jQuery(".column.design-column").find(".ui-resizable-handle").removeAttr("contentEditable").show();
                //    jQuery(".row").removeAttr("contentEditable");
                //    jQuery(".column.design-column").removeAttr("contentEditable");
                //    jQuery(".column.design-column").find(".image-text-other, .image-text-other *").not(".jqte-editor").removeAttr("contentEditable").show();

                //    impCommonCode.ControlCommon.Code.Execute();

                //    impOnInsert.OnInsert.Code.BackPassedEdit = false;

                //});
            }
        }

        public static GenerateId() {
            return "EditorLink" + ++impStatic.Constants.StaticJQ.editorLinkId;
        }

        public static buttons = [];
        public static formats = [["p", "Normal"], ["h1", "Header 1"], ["h2", "Header 2"], ["h3", "Header 3"], ["h4", "Header 4"], ["h5", "Header 5"], ["h6", "Header 6"], ["pre", "Preformatted"]];

        // insertion function for parameters to toolbar
        public static addParams(name, command, key, tag, emphasis) {
            var thisCssNo = jqte.buttons.length + 1;
            return jqte.buttons.push({ name: name, cls: thisCssNo, command: command, key: key, tag: tag, emphasis: emphasis });
        }

        public static detectElement(tags) {

            var resultdetect = false, $node = jqte.getSelectedNode(), parentsTag;

            if ($node) {
                jQuery.each(tags, function (i, val) {
                    parentsTag = $node.prop('tagName').toLowerCase();

                    if (parentsTag == val)
                        resultdetect = true;
                    else {
                        $node.parents().each(function () {
                            parentsTag = jQuery(this).prop('tagName').toLowerCase();
                            if (parentsTag == val)
                                resultdetect = true;
                        });
                    }
                });

                return resultdetect;
            }
            else
                return false;
        };

        public static buttonEmphasize(e) {
            for (var n = 0; n < jqte.buttons.length; n++) {
                if (jqte.buttons[n].emphasis && jqte.buttons[n].tag != '')
                    if (jqte.detectElement(jqte.buttons[n].tag)) {

                        jQuery(".jqte-editor-tool[name=" + jqte.buttons[n].command + "]").addClass("active");
                        jQuery(".jqte-editor-tool-p[name=" + jqte.buttons[n].command + "]").addClass("active");

                    }
                    else {
                        jQuery(".jqte-editor-tool[name=" + jqte.buttons[n].command + "]").removeClass("active");
                        jQuery(".jqte-editor-tool-p[name=" + jqte.buttons[n].command + "]").removeClass("active");
                    }
            }
        }


        public static getSelectedNode() {
            var node, selection;
            if (window.getSelection) {
                selection = getSelection();
                node = selection.anchorNode;
            }
            if (!node && document.selection && document.selection.createRange && document.selection.type != "None") {
                selection = document.selection;
                var range = selection.getRangeAt ? selection.getRangeAt(0) : selection.createRange();
                node = range.commonAncestorContainer ? range.commonAncestorContainer :
                    range.parentElement ? range.parentElement() : range.item(0);
            }
            if (node) {
                return (node.nodeName == "#text" ? jQuery(node.parentNode) : jQuery(node));
            }
            else
                return node;
        }


        public AttachEvents() {

            jqte.addParams('format', 'formats', '', '', false); // text format button  --> no hotkey
            jqte.addParams('fsize', 'fSize', '', '', false); // font size button --> no hotkey
            jqte.addParams('color', 'colors', '', '', false); // text color button  --> no hotkey
            jqte.addParams('b', 'bold', 'B', ["b", "strong"], true); // bold --> ctrl + b
            jqte.addParams('i', 'italic', 'I', ["i", "em"], true); // italic --> ctrl + i
            jqte.addParams('u', 'underline', 'U', ["u"], true); // underline --> ctrl + u
            jqte.addParams('ol', 'number', '¾', ["ol"], true); // ordered list --> ctrl + .(dot)
            jqte.addParams('ul', 'bullet', '¼', ["ul"], true); // unordered list --> ctrl + ,(comma)
            jqte.addParams('sub', 'subscript', '(', ["sub"], true); // sub script --> ctrl + down arrow
            jqte.addParams('sup', 'superscript', '&', ["sup"], true); // super script --> ctrl + up arrow
            jqte.addParams('outdent', 'outdent', '%', ["blockquote"], true); // outdent --> ctrl + left arrow
            jqte.addParams('indent', 'indent', '\'', ["blockquote"], true); // indent --> ctrl + right arrow
            jqte.addParams('left', 'left', '', '', true); // justify Left --> no hotkey
            jqte.addParams('center', 'center', '', '', true); // justify center --> no hotkey
            jqte.addParams('right', 'right', '', '', true); // justify right --> no hotkey
            jqte.addParams('strike', 'strike', 'K', ["strike"], true); // strike through --> ctrl + K
            jqte.addParams('link', 'link', 'L', ["a"], false); // insertion link  --> ctrl + L
            jqte.addParams('unlink', 'unlink', '', ["a"], true); // remove link --> ctrl + N 
            jqte.addParams('remove', 'removeformat', '.', '', false); // remove all styles --> ctrl + delete
            jqte.addParams('rule', 'inserthorizontalrule', 'H', ["hr"], false); // insertion horizontal rule --> ctrl + H
            jqte.addParams('source', 'displaysource', '', '', false); // feature of displaying source



            jQuery(document).not(".editor").on("click" ,function (e) {

                if (!jQuery(e.target).hasClass("jqte-editor-tool-p")) {
                    jQuery(".jqte-editor-tool-list").hide();
                }

            });

            jQuery(".jqte-editor-tool,.jqte-editor-tool-p").on("mouseup", function (e) {
                jQuery(this).removeClass("highlight-tool");

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;
            });

            jQuery(".jqte-editor-tool,.jqte-editor-tool-p").on("mousedown", function (e) {

               // jQuery(this).addClass("highlight-tool");
                jQuery(".jqte-color-palette").css("display", "none");
                
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

                        if (name == "back-color") {
                            jQuery(".jqte-color-palette").find(".color-type").text("Background Color");
                            jQuery(".jqte-color-palette").addClass("jqte-color-palette-background");
                        }
                        else {
                            jQuery(".jqte-color-palette").find(".color-type").text("Text Color");
                            jQuery(".jqte-color-palette").removeClass("jqte-color-palette-background");
                        }

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
                    case 'bold': jqte.SelectionSet("bold", null);
                        
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'italic': jqte.SelectionSet("italic", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'underline': jqte.SelectionSet('underline', null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'strike': jqte.SelectionSet("strikeThrough", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'bullet': jqte.SelectionSet("insertUnorderedList", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'number': jqte.SelectionSet("insertOrderedList", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'left': jqte.SelectionSet("justifyLeft", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'right': jqte.SelectionSet("justifyRight", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'center': jqte.SelectionSet("justifyCenter", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'full': jqte.SelectionSet("justifyFull", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'outdent': jqte.SelectionSet("outdent", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'indent': jqte.SelectionSet("indent", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case 'clear': jqte.SelectionSet("removeFormat", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();

                        undomanager.BeforeOperation();
                        break;
                    case "unlink": jqte.SelectionSet("unlink", null);
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

                        jQuery(".link-window-url").val("http://")

                        jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#003399");
                        jQuery(".current-editor-scope").find("font[color='#003399']").addClass("key jq-editor-link");
                        jqte.SelectionSet("createLink", "#");
                        jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("id", MyJQte.jqte.GenerateId());
                        break;

                }

                jqte.buttonEmphasize(e);

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;
            });


            jQuery(".editor-create-link").on("click" ,function (e) {

                jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("href", jQuery(".link-window-url").val());
                jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                jQuery(".jqte-editor-tool-list").hide();

                var undomanager = new impUndoManager.Manager.UndoManager();

                undomanager.BeforeOperation();

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;
            });

            jQuery(".jqte-font-name").on("change", function (e) {

                if (jQuery(this).val() != 0) {
                    jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                    jqte.SelectionSet("foreColor", "#afafaf");
                    var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                    jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");

                    if (selectedtext == "") {
                        var selectedElement = jQuery(".image-selection").last();

                        selectedElement.find(".jq-text-block").css("font-family", jQuery(this).attr("value"));
                    }

                    if (selectedtext != "") {
                        jqte.SelectionSet("fontName", jQuery(this).val());
                    }

                    jQuery(this).val("0");

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;

            });

            jQuery(".jqte-font-size").on("change", function (e) {

                if (jQuery(this).val() != 0) {
                    jqte.SelectionSet("fontSize", 7);

                    jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                    jqte.SelectionSet("foreColor", "#afafaf");
                    var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                    jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");

                    var res = parseInt(jQuery(this).val())

                    if (selectedtext == "") {
                        var selectedElement = jQuery(".image-selection").last();

                        if (isNaN(res)) {
                            selectedElement.css("font-size", jQuery(this).val());
                        }
                        else {
                            selectedElement.css("font-size", jQuery(this).val() + "px");
                        }
                    }

                    if (selectedtext != "") {
                        if (isNaN(res)) {
                            jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).val()).removeAttr("size");
                        }
                        else {
                            jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).val() + "px" ).removeAttr("size");
                        }
                    }

                    jQuery(this).val("0");

                    var undomanager = new impUndoManager.Manager.UndoManager();

                    undomanager.BeforeOperation();
                }

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;

            });

            jQuery(".jqte-editor-tool-c").on("mousedown", function (e) {

                debugger;
                if (jQuery(this).parent().hasClass("font-name")) {

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

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;

            });

            jQuery(".jq-color").on("mousedown", function (e) {

                if (jQuery(".current-color-tool").length > 0) {

                    var name = jQuery(".current-color-tool").attr("name");

                    if (name == "back-color") {

                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");

                        if (selectedtext == "") { // if not text is selected then apply for entire text block

                            var selectedElement = jQuery(".image-selection").last();

                            if (selectedElement.hasClass("empty-container-text") || selectedElement.hasClass("jq-plus-container-text")) {
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
                    else
                        if (name = "fore-color") {

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

                if (e.cancelBubble != null) e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation(); //e.stopPropagation works in Firefox.
                if (e.preventDefault) e.preventDefault();
                if (e.returnValue != null) e.returnValue = false; // http://blog.patricktresp.de/2012/02/
                return false;

            });



            //jQuery(".jqte-editor").focus(function () {


            //    jQuery(this).addClass("focused");
            //});

            //for testing
            // this.AttachGetSelection();
        }


        //for testing
        //public AttachGetSelection() {
        //    jQuery(".get-selection").click(function () {
        //        jqte.GetSelectetdText();

        //        jQuery(this).closest(".editor").find(".jqte-editor").find("font[size=1]").attr("size", 50);
        //    });
        //}

        public static GetSelectetdText() {
            return jqte.SelectionSet("fontSize", "1");
        }

        public static SelectionGet() {
            // for webkit, mozilla, opera
            if (window.getSelection)
                return window.getSelection();
            // for ie
            else if (document.selection && document.selection.createRange && document.selection.type != "None")
                return document.selection.createRange();
        }

        public static SelectionSet(addCommand, thirdParam) {
            var range,
                sel = jqte.SelectionGet();

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

            // for ie
            else if (document.selection && document.selection.createRange && document.selection.type != "None") {
                range = document.selection.createRange();
                range.execCommand(addCommand, false, thirdParam);
            }


        }

        public static SelectText(element) {
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

                        if (jQuery(element).is(":empty")) {
                            jQuery(element).append("&nbsp;");
                            jqte.SelectText(jQuery(element));
                        }
                    }
                }
            }
        }


    }

}