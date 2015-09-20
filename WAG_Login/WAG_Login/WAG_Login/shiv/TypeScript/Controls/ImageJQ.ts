

/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: impCommonSmart.Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

import impText = require("./FontJQ");
import impError = require("../Error/ErrorJQ");
import impPageControlNames = require("../ControlNames/PageControlNamesJQ");
import impPageCtx = require("../Page/Context/ContextJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommonCode = require("./ControlCommonJQ");
import impCommonSmart = require("../Common/CommonEvents");

var debug = true;
var globalImageBlockId = 0;
var globalImageBlockContainerId = 0;

export module Image {

    export class SelfJQ extends impPageControlNames.PageControlNamesJQ.Page.Image.Controls {

        public static controlId = "#control-image-library";
        public static CSSCLASS = 'jq-image-block design-image-block normal-element';
        public static CONTAINER_CSS_CLASS = "jq-image-block-container design-image-block normal-element jq-container";

        public Init() {

            this.AttachUserImages();

            this.AttachSelectImage();

            this.AttachInsertImage();
        }

        // generate scope id
        GenerateTextBlockScopeId() {
            return "Image_Block_" + ++globalImageBlockId;
        }

        GenerateContainerScopeId() {
            return "Image_Block_Container_" + ++globalImageBlockContainerId;
        }


        AttachSelectImage() {

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
        }

        public static IsImageUrl(s: string) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
            if (regexp.test(s) == true) {
                if (s.length >= 5) {

                    var lowerUrl = s.toLowerCase();

                    var types = ["jpeg", "jpg", "png", "gif"]

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
        }



        AttachInsertImage() {
            jQuery(SelfJQ.controlId).find(".action-button-insert-image").click(function () {

                if (jQuery(".internet-image-url").val() != "" ) {
                    SelfJQ.InsertImage(jQuery(".internet-image-url").val());
                }
                else {
                    SelfJQ.InsertImage(undefined);
                }
            });
        }

        public static InsertImage(url) {
            var imageObj = new SelfJQ();

            var errorHandler = new impError.ErrorHandle.ErrorJQ();
            errorHandler.SetErrorClassName("page-insert-image");

            var ctx = new impPageCtx.Page.ContextJQ();

            var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;  //  jQuery("#rows-columns option:selected").val();

            var tbImageContainer = document.createElement("div");
            var tbImage = document.createElement("div");
            var tbImageWrapper = document.createElement("div");

            var tbImg = document.createElement("img");

         

            jQuery(tbImg).addClass("jq-image-block-image ");

            jQuery(tbImg).addClass("normal-element image-element");

            jQuery(tbImageWrapper).addClass("jq-image-block-image-wrapper");

            var imgSrc;

            if (url == undefined) {
                imgSrc = jQuery(".image-library-select").attr("src");
            }
            else {
                imgSrc = url;
            }

            jQuery(tbImg).attr("src", imgSrc);

            jQuery(tbImageWrapper).append(tbImg);

            jQuery(tbImage).append(tbImageWrapper);

            jQuery(tbImage).addClass(SelfJQ.CSSCLASS);

            ///////////////column scope id for debugging and designer //////
            var tbScopeId = imageObj.GenerateTextBlockScopeId();

            if (debug == true && tbImage != undefined) {
                jQuery(tbImage).prepend("<span class='debug-image-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
            }

            jQuery(tbImage).attr("scopeId", tbScopeId);

            jQuery(tbImageContainer).append(tbImage);

            /////////////// row scope id for debugging and designer //////
            var tbcScopeId = imageObj.GenerateContainerScopeId();

            if (debug == true) {
                jQuery(tbImageContainer).append(" <span class='debug-image-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
            }

            jQuery(tbImageContainer).addClass(SelfJQ.CONTAINER_CSS_CLASS);

            jQuery(tbImageContainer).attr("scopeId", tbcScopeId);

            //var smartMenu = "<div class='smart-menu-icon'></div>" +
            //    "<div class='smart-menu'> " +
            //    "<div class='smart-menu-controls  smart-menu-height-width' > " +
            //    "<table style='smart-menu-controls-table'>" +
            //    " <tr> <td>Height </td> <td> : </td> <td><input maxlength='3' type='text' class='smart-menu-height'> </input> px </td> </tr> " +
            //    "<tr> <td>Width </td> <td> : </td> <td> <input maxlength='3' type='text' class='smart-menu-width'> px </input> </td> " +
            //    "</table" +
            //    "</div>" +
            //    "</div>";

            //jQuery(tbContainer).append(smartMenu);


            if (selectedRowOrColumn.hasClass("column") == true || selectedRowOrColumn.hasClass("empty-container") || window.smartObj != null) {


                //var emptyc = document.createElement("span");
                //jQuery(emptyc).addClass("empty-container key design-css design-empty-css");

                    
                //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), '', undefined, undefined);

                var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                plusContainer.removeClass("jq-plus-container-not-used");

                var emptycontainer = document.createElement("div");

                var jEc = jQuery(emptycontainer);

                jEc.addClass("empty-container-image image-text-other key");
                jEc.append(plusContainer);

                jQuery(tbImg).load(function () {

                    var loadedImgContainer = jQuery(this).closest(".empty-container-image");

                    if (this.naturalHeight > 200) {
                    }
                    else {
                        loadedImgContainer.css("width", "auto");
                    }

                    if (this.naturalWidth > 200) {

                    }
                    else {
                        loadedImgContainer.css("height", "auto");
                    }

                });

                plusContainer.find(".jq-plus-content").append(tbImageContainer);


                if (window.smartObj == null || window.smartObj.command == "") {
                    ctx.Page.Any.Add(selectedRowOrColumn, jEc, '', undefined, undefined, undefined, undefined);
                }
                else {
                    ctx.Page.Any.Add(selectedRowOrColumn, jEc, '', undefined, undefined, true, undefined);
                }
                //var empty = document.createElement("span");
                //jQuery(empty).addClass("empty-container key design-css design-empty-css");

                //ctx.Page.Any.Add(selectedRowOrColumn, jQuery(empty), '', undefined, undefined);


                //// rearrange debug css ....

                if (selectedRowOrColumn.hasClass("jq-image-block-container")) {

                    var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");

                    selectedRowOrColumn.find(".debug-image-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();

                    if (tbOrTbcWithScopeId != undefined) {
                        selectedRowOrColumn.append('<span class="debug-image-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + '</span>');
                    }
                }
                ///// rearrange debug css completed...

                jQuery(tbImageContainer).find(".debug-css").remove();

                errorHandler.ActionSuccess("");

                jQuery(SelfJQ.controlId).hide();

                impCommonCode.ControlCommon.Code.Execute();
            }
            else {
                errorHandler.ActionFail("You can only insert in a column or empty container [].");
            }

            jQuery(".image-library-image").removeClass("image-library-select");
            jQuery(".internet-image-url").val("");
        }

        AttachUserImages()
        {
            jQuery(SelfJQ.controlId).on( "custom_loaded", function () {

                SelfJQ.GetImages();

            });
        }

        public static GetImages() {
        //$('input[type=button]').attr('disabled', true);
        //$("#MemberDetails").html('');
            //$("#MemberDetails").addClass("loading");
            jQuery.ajax({
            type: "POST",
            url: "/services/ImageService.asmx/GetImages",
            // data: "{'MemberNumber': '" + $("#txt_id").val() + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SelfJQ.OnGetImagesSuccess,
            error: SelfJQ.OnGetImagesError
        });
    }

        
        public static OnGetImagesSuccess(data, status) {

            var resultImages: any;

            resultImages = data.d;

            if (resultImages.length > 0) {
                jQuery(".image-library").html("");
            }

            for (var i = 0; i < resultImages.length; i++) {

                var imageContainer = document.createElement("div");
                jQuery(imageContainer).addClass("image-lib-container");

                var image = document.createElement("img");
                jQuery(image).attr("src", resultImages[i].Path);
                jQuery(image).addClass("image-library-image");
                jQuery(image).addClass("img-thumbnail");

                jQuery(imageContainer).append(image)

                jQuery(".image-library").append(imageContainer);
            }
        }

        public static OnGetImagesError(request, status, error) {

            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            errorHandler.ActionFail("Some Problem !. <br>Try again latter.");
        }


        public static ProcessSelectNotify() {
            var errorHandler = new impError.ErrorHandle.ErrorJQ();

            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

            if (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) {

              //  errorHandler.ActionHelp("Help : You cannot insert [Image] here.");
            }
            else {
               // errorHandler.ActionHelp("Help : You can insert [Image] here.", "altercolor");
            }
        }


    }

  

}