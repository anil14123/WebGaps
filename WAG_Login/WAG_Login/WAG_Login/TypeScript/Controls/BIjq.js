define(["require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../controls/imagejq"], function (require, exports, impWatch, impUnodManager, impImage) {
    var debug = true;
    var isBIJQReady = false;
    var nextId = 0;
    var BI;
    (function (BI) {
        var BIJQ = (function () {
            function BIJQ() {
            }
            BIJQ.prototype.Init = function () {
                jQuery(document).ready(function () {
                    if (isBIJQReady == false) {
                        isBIJQReady = true;
                        jQuery(".smart-menu-bi-control").slider({
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
                            },
                            slide: function (event, ui) {
                                if (jQuery(this).next(".height-px").length == 0) {
                                    var spanResult = jQuery(document.createElement("div"));
                                    spanResult.addClass("height-px");
                                    jQuery(this).after(spanResult);
                                }
                                jQuery(this).next(".height-px").text(ui.value + "px");
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (selectedElement != undefined) {
                                    var height = jQuery(".smart-menu-bi-height").slider("value");
                                    var width = jQuery(".smart-menu-bi-width").slider("value");
                                    selectedElement.css("background-size", width + "px" + " " + height + "px");
                                }
                            },
                            stop: function (event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (selectedElement != undefined) {
                                    var height = jQuery(".smart-menu-bi-height").slider("value");
                                    var width = jQuery(".smart-menu-bi-width").slider("value");
                                    selectedElement.css("background-size", width + "px" + " " + height + "px");
                                    var undo = new impUnodManager.Manager.UndoManager();
                                    undo.BeforeOperation();
                                }
                            }
                        });
                        jQuery(".bi-browse").click(function () {
                            impImage.Image.SelfJQ.GetImages();
                            jQuery("#control-image-bi-library").show();
                        });
                        jQuery(".action-button-insert-bi-image").click(function () {
                            var src = jQuery(".image-library-bi-select").first().attr("src");
                            jQuery(".bi-selected-image").val(src).change();
                            jQuery(".image-library-image").removeClass("image-library-bi-select");
                            jQuery("#control-image-bi-library").hide();
                        });
                        jQuery(".control-bi-controls .bi-selected-image").change(function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-repeat").change(function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-repeat", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-attachment").change(function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-attachment", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-position").change(function () {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (selectedElement != undefined) {
                                selectedElement.css("background-position", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            BIJQ.ProcessSelectNotify = function () {
                BIJQ.isSelectProcessing = true;
                try {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedElement != undefined) {
                        var bi = selectedElement.css("background-image").replace('url(', '').replace(')', '');
                        jQuery(".bi-selected-image").val(bi);
                        var repeat = selectedElement.css("background-repeat");
                        jQuery(".ddn-bi-repeat").val(repeat);
                        var attachment = selectedElement.css("background-attachment");
                        jQuery(".ddn-bi-attachment").val(attachment);
                        var position = selectedElement.css("background-position");
                        jQuery(".ddn-bi-position").val(position);
                        var backgroundSize = selectedElement.css("background-size");
                        if (backgroundSize != undefined) {
                            var wh = backgroundSize.split(" ");
                            if (wh.length >= 2) {
                                var width = wh[0];
                                var heigth = wh[1];
                                width = width.replace("px", "");
                                heigth = heigth.replace("px", "");
                                jQuery(".smart-menu-bi-height").slider("value", heigth);
                                jQuery(".smart-menu-bi-width").slider("value", width);
                            }
                            else {
                                jQuery(".smart-menu-bi-height").slider("value", 0);
                                jQuery(".smart-menu-bi-width").slider("value", 0);
                            }
                        }
                    }
                }
                catch (ex) {
                }
                BIJQ.isSelectProcessing = false;
            };
            BIJQ.isSelectProcessing = false;
            return BIJQ;
        })();
        BI.BIJQ = BIJQ;
    })(BI = exports.BI || (exports.BI = {}));
});
//# sourceMappingURL=BIjq.js.map