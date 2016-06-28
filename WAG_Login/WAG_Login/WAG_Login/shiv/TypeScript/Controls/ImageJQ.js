var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Error/ErrorJQ", "../ControlNames/PageControlNamesJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../Common/OperationJQ", "../UndoManager/UndoManager", "jquery"], function (require, exports, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impOperaction, impUndoManager, jQuery) {
    "use strict";
    var debug = true;
    var globalImageBlockId = 0;
    var globalImageBlockContainerId = 0;
    var Image;
    (function (Image) {
        var SmartObj = (function () {
            function SmartObj() {
                this.command = "";
                this.isDirty = false;
            }
            return SmartObj;
        }());
        Image.SmartObj = SmartObj;
        var SelfJQ = (function (_super) {
            __extends(SelfJQ, _super);
            function SelfJQ() {
                _super.apply(this, arguments);
            }
            SelfJQ.prototype.Init = function () {
                this.AttachUserImages();
                this.AttachSelectImage();
                this.AttachInsertImage();
            };
            // generate scope id
            SelfJQ.prototype.GenerateTextBlockScopeId = function () {
                return "Image_Block_" + ++globalImageBlockId;
            };
            SelfJQ.prototype.GenerateContainerScopeId = function () {
                return "Image_Block_Container_" + ++globalImageBlockContainerId;
            };
            SelfJQ.prototype.AttachSelectImage = function () {
                jQuery("#control-image-bi-library").on("click", ".image-library-image", function () {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(".image-library-image").removeClass("image-library-bi-select");
                    jQuery(this).addClass("image-library-select");
                    jQuery(this).addClass("image-library-bi-select");
                });
                jQuery(SelfJQ.controlId).on("click", ".image-library-image", function () {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(this).addClass("image-library-select");
                });
            };
            SelfJQ.IsImageUrl = function (s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (regexp.test(s) == true) {
                    if (s.length >= 5) {
                        var lowerUrl = s.toLowerCase();
                        var types = ["jpeg", "jpg", "png", "gif"];
                        for (var i = 0; i < types.length; i++) {
                            var _type = lowerUrl.substr(lowerUrl.length - 5, 5);
                            var ts = _type.split(".");
                            if (ts.length >= 2) {
                                if (ts[1] == types[i]) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
            SelfJQ.prototype.AttachInsertImage = function () {
                jQuery(SelfJQ.controlId).find(".action-button-insert-image").on("click", function () {
                    if (jQuery(".internet-image-url").val() != "") {
                        SelfJQ.InsertImage(jQuery(".internet-image-url").val());
                    }
                    else {
                        SelfJQ.InsertImage(undefined);
                    }
                });
                jQuery(".action-button-change-image").on("click", function () {
                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                    if (selectedRowOrColumn != undefined
                        &&
                            selectedRowOrColumn.hasClass("empty-container-image")) {
                        var imgSrc = jQuery(".image-library-select").attr("src");
                        if (imgSrc != "") {
                            selectedRowOrColumn.find(".jq-plus-container-image").find("img").attr("src", imgSrc);
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        }
                    }
                    else {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("Please select a image to change.");
                    }
                    jQuery("#control-image-library").hide();
                });
            };
            SelfJQ.ChangeImage = function () {
                jQuery(".action-button-insert-image").hide();
                jQuery(".action-button-change-image").show();
                jQuery("#control-image-library").show();
                jQuery("#control-image-library").trigger('custom_loaded');
            };
            SelfJQ.InsertImage = function (url, selectedObject) {
                if (selectedObject === void 0) { selectedObject = undefined; }
                var imageObj = new SelfJQ();
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.SetErrorClassName("page-insert-image");
                var ctx = new impPageCtx.Page.ContextJQ();
                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement; //  jQuery("#rows-columns option:selected").val();
                if (selectedObject != undefined) {
                    selectedRowOrColumn = selectedObject;
                }
                if (!selectedRowOrColumn.hasClass("column") && (window.smartObj == null || window.smartObj.currentObj == null)) {
                    window.smartObj = new SmartObj();
                    window.smartObj.currentObj = selectedRowOrColumn;
                    window.smartObj.command = "n";
                }
                if (selectedRowOrColumn == undefined) {
                    selectedRowOrColumn = jQuery("#nnnoelement");
                }
                if (selectedRowOrColumn != undefined) {
                    var clonedImageBlock = $("#empty-container-image-copy").clone();
                    clonedImageBlock.removeClass("hide");
                    clonedImageBlock.attr("id", "");
                    var imgSrc;
                    if (url == undefined) {
                        imgSrc = jQuery(".image-library-select").attr("src");
                    }
                    else {
                        imgSrc = url;
                    }
                    clonedImageBlock.find(".jq-image-block-image").attr("src", imgSrc);
                    ///////////////column scope id for debugging and designer //////
                    var tbScopeId = imageObj.GenerateTextBlockScopeId();
                    if (debug == true) {
                        clonedImageBlock.prepend("<span class='debug-image-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                    }
                    clonedImageBlock.find(".jq-image-block-image").attr("scopeId", tbScopeId);
                    /////////////// row scope id for debugging and designer //////
                    var tbcScopeId = imageObj.GenerateContainerScopeId();
                    if (debug == true) {
                        clonedImageBlock.append(" <span class='debug-image-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                    }
                    if (selectedRowOrColumn.hasClass("column") == true
                        || window.smartObj != null) {
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container-not-used");
                        plusContainer.addClass("jq-plus-container-image");
                        plusContainer.addClass("design-css");
                        plusContainer.addClass("design-empty-text-css");
                        plusContainer.removeClass("jq-plus-container");
                        plusContainer.find(".jq-plus-element-content").addClass("jq-plus-element-content-image");
                        var emptycontainer = document.createElement("div");
                        plusContainer.find(".adjust-image-text-other").remove();
                        clonedImageBlock.find(".jq-plus-container-image").css("height", "200px");
                        clonedImageBlock.find(".jq-plus-container-image").css("width", "200px");
                        if (window.smartObj != null && window.smartObj.currentObj != null && (window.smartObj.currentObj.hasClass("column") || window.smartObj.currentObj.hasClass("empty-drop-element"))) {
                            if (window.smartObj.currentObj.height() <= 200) {
                                //window.smartObj.currentObj.height()
                                clonedImageBlock.find(".jq-plus-container-image").css("height", 100 + "px");
                                clonedImageBlock.find(".jq-plus-container-image").css("width", (window.smartObj.currentObj.width() > 200 ? 200 : window.smartObj.currentObj.width()) + "px");
                            }
                        }
                        else {
                            if (selectedRowOrColumn.hasClass("column") == true || selectedRowOrColumn.hasClass("empty-drop-element")) {
                                if (selectedRowOrColumn.height() <= 200) {
                                    //window.smartObj.currentObj.height()
                                    clonedImageBlock.find(".jq-plus-container-image").css("height", 100 + "px");
                                    clonedImageBlock.find(".jq-plus-container-image").css("width", (selectedRowOrColumn.width() > 200 ? 200 : selectedRowOrColumn.width()) + "px");
                                }
                            }
                        }
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        if (window.smartObj == null || window.smartObj.command == "") {
                            ctx.Page.Any.Add(selectedRowOrColumn, clonedImageBlock, '', undefined, undefined, undefined, undefined);
                        }
                        else {
                            ctx.Page.Any.Add(selectedRowOrColumn, clonedImageBlock, '', undefined, undefined, true, undefined);
                        }
                        //errorHandler.ActionSuccess("");
                        jQuery(SelfJQ.controlId).hide();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    else {
                    }
                }
                jQuery(".image-library-image").removeClass("image-library-select");
                jQuery(".internet-image-url").val("");
            };
            SelfJQ.prototype.AttachUserImages = function () {
                jQuery(".load-more-images").on("click", function () {
                    SelfJQ.GetImages();
                });
                jQuery(SelfJQ.controlId).on("custom_loaded", function () {
                    SelfJQ.ClearImageGalaryPagingValue();
                    SelfJQ.GetImages();
                });
            };
            SelfJQ.SetImageGalaryPagingValue = function () {
                jQuery(".imges-get-start").val((Number(jQuery(".imges-get-start").val()) + 20).toString());
            };
            SelfJQ.GetImageGalaryPagingValue = function () {
                if (jQuery(".imges-get-start").length == 0) {
                    var pagingElement = jQuery(document.createElement("input"));
                    pagingElement.addClass("imges-get-start hide");
                    jQuery("body").append(pagingElement);
                    jQuery(".imges-get-start").val('0');
                }
                return jQuery(".imges-get-start").val();
            };
            SelfJQ.GetImages = function () {
                var data = { start: SelfJQ.GetImageGalaryPagingValue(), pageSize: 20 };
                var dataStrfy = JSON.stringify(data);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/ImageService.asmx/GetImages",
                    data: dataStrfy,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SelfJQ.OnGetImagesSuccess,
                    error: SelfJQ.OnGetImagesError
                });
            };
            SelfJQ.ClearImageGalaryPagingValue = function () {
                jQuery(".imges-get-start").val("0");
            };
            SelfJQ.OnGetImagesSuccess = function (data, status) {
                var resultImages;
                resultImages = data.d;
                if (resultImages.length > 0) {
                    if (SelfJQ.GetImageGalaryPagingValue() == "0") {
                        jQuery(".image-library").html("");
                    }
                    SelfJQ.SetImageGalaryPagingValue();
                }
                for (var i = 0; i < resultImages.length; i++) {
                    var imageContainer = document.createElement("div");
                    jQuery(imageContainer).addClass("image-lib-container");
                    var image = document.createElement("img");
                    jQuery(image).attr("src", resultImages[i].Path);
                    jQuery(image).addClass("image-library-image");
                    jQuery(image).addClass("img-thumbnail");
                    jQuery(imageContainer).append(image);
                    jQuery(".image-library").append(imageContainer);
                }
            };
            SelfJQ.OnGetImagesError = function (request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Some Problem !. <br>Try again latter.");
            };
            SelfJQ.ProcessSelectNotify = function () {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (selectedElement != undefined) {
                    if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {
                    }
                    else {
                    }
                }
            };
            SelfJQ.controlId = "#control-image-library";
            SelfJQ.CSSCLASS = 'jq-image-block design-image-block normal-element';
            SelfJQ.CONTAINER_CSS_CLASS = "jq-image-block-container design-image-block normal-element jq-container";
            return SelfJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Image.Controls));
        Image.SelfJQ = SelfJQ;
    })(Image = exports.Image || (exports.Image = {}));
});
//# sourceMappingURL=ImageJQ.js.map