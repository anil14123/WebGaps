define(["require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "jquery"], function (require, exports, impWatch, impUndoManager, jQuery) {
    "use strict";
    var isFontReady = false;
    var Font;
    (function (Font) {
        var FontJQ = (function () {
            function FontJQ() {
            }
            FontJQ.LoadFontSize = function () {
                for (var i = 8; i <= 200; i++) {
                    jQuery(".ddn-font-size").append("<option class='font-size-option selected' value='"
                        + i + "px" +
                        "'>"
                        + i +
                        "</option>");
                }
                jQuery(".ddn-font-size").val("14px");
            };
            FontJQ.LoadFonts = function (ddnid) {
                if (ddnid == undefined) {
                    ddnid = FontJQ.ddnId;
                }
                for (var i = 0; i < FontJQ.FontList.length; i++) {
                    if (i == 0) {
                        jQuery(ddnid).append("<option class='font-list-option selected' value='"
                            + FontJQ.FontList[i] +
                            "'>"
                            + "<span style='" + FontJQ.FontList[i] + "'>" + FontJQ.FontList[i] + "</span>" +
                            "</option>");
                    }
                    else {
                        jQuery(ddnid).append("<option class='font-list-option' value='"
                            + FontJQ.FontList[i] +
                            "'>"
                            + "<span style='" + FontJQ.FontList[i] + "'>" + FontJQ.FontList[i] + "</span>" +
                            "</option>");
                    }
                }
            };
            FontJQ.prototype.Init = function () {
                jQuery(document).ready(function () {
                    if (isFontReady == false) {
                        isFontReady = true;
                        FontJQ.LoadFonts();
                        FontJQ.LoadFontSize();
                        jQuery(FontJQ.ddnId).on("custom_load", function () {
                            FontJQ.LoadFonts();
                        });
                        jQuery(".ddn-font-size-pinned").on("change", function () {
                            // jQuery(FontJQ.ddnId + "-sample-pinned").html("<span style='font-family:" + $(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            if (impWatch.Watch.MouseJQ.selectedElement != undefined) {
                                impWatch.Watch.MouseJQ.selectedElement.css("font-size", jQuery(this).val());
                                impWatch.Watch.MouseJQ.selectedElement.find(".jq-text-block").first().css("font-size", "");
                            }
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.BeforeOperation();
                            //jQuery(".jqte_editor").css("font-family", jQuery(this).find("option:selected").val());
                        });
                        jQuery(".ddn-font-pinned").on("change", function () {
                            // jQuery(FontJQ.ddnId + "-sample-pinned").html("<span style='font-family:" + $(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            if (impWatch.Watch.MouseJQ.selectedElement != undefined) {
                                impWatch.Watch.MouseJQ.selectedElement.css("font-family", jQuery(this).val());
                                impWatch.Watch.MouseJQ.selectedElement.find(".jq-text-block").first().css("font-family", "");
                            }
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.BeforeOperation();
                            //jQuery(".jqte_editor").css("font-family", jQuery(this).find("option:selected").val());
                        });
                        jQuery(FontJQ.ddnId).on("change", function () {
                            jQuery(FontJQ.ddnId + "-sample").html("<span style='font-family:" + jQuery(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            //jQuery(".jqte_editor").css("font-family", jQuery(this).find("option:selected").val());
                            FontJQ.PreviewInsertText();
                        });
                    }
                });
            };
            FontJQ.PreviewInsertText = function () {
                var output = document.createElement("div");
                var innerOutput = document.createElement("div");
                jQuery(innerOutput).css("font-family", jQuery(".ddn-font-lists").find("option:selected").val());
                jQuery(innerOutput).append(jQuery(".insert-text-jte").val());
                jQuery(output).append(innerOutput);
                jQuery(".insert-text-out-put").html(jQuery(output).html());
            };
            FontJQ.ProcessSelectNotify = function () {
                jQuery(".ddn-font-size").val("14px");
            };
            FontJQ.ddnId = ".ddn-font-lists";
            FontJQ.FontList = [
                'Arial, Arial, Helvetica, sans-serif',
                'Arial Black, Arial Black, Gadget, sans-serif',
                'Comic Sans MS, Comic Sans MS, cursive',
                'Courier New, Courier New, Courier, monospace',
                'Georgia, Georgia, serif',
                'Impact, Charcoal, sans-serif',
                'Lucida Console, Monaco, monospace',
                'Lucida Sans Unicode, Lucida Grande, sans-serif',
                'Palatino Linotype, Book Antiqua, Palatino,serif',
                'Tahoma, Geneva, sans-serif',
                'Times New Roman, Times,serif',
                'Trebuchet MS, Helvetica, sans-serif',
                'Verdana, Geneva, sans-serif',
                'Gill Sans, Geneva, sans-serif'
            ];
            return FontJQ;
        }());
        Font.FontJQ = FontJQ;
    })(Font = exports.Font || (exports.Font = {}));
});
//# sourceMappingURL=FontJQ.js.map