﻿/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////


import impUndoManager = require("../UndoManager/UndoManager");
import impLayout = require("../Themes/EmptyLayout/EmptyLayoutJQ");
import impAuth = require("../_Classes/Auth");
import impError = require("../Error/ErrorJQ");
import impAny = require("../page/anyjq");
import impOn = require("../Common/on");
import impSaveClass = require("../_Classes/SaveJq");
import impmal = require("../MalFormed/MalFormedJQ");
import impNoUi = require("../Controls/NoUi");
import impImage = require("../Controls/ImageJQ");

var themeHandle;
var downloadInterval;
var imageFiles;

export module Common {

    export class SmartObj {
        currentObj: JQuery;
        command = "";
        isDirty = false;
    }

    export class CommonEvents {

        isCommonEventsAdded = false;

        public static GetCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        public static CheckMal() {
            if (CommonEvents.GetCookie("jQuery") == jQuery("#viewstate").val()) {
                return true;
            }
            else {
                return false;
            }
        }

        public static UploadImages() {

            var files = imageFiles;

            //// Add the uploaded image content to the form data collection
            //if (files.length > 0) {
            //    data.append("UploadedImage", files[0]);
            //}

            var data = new FormData();

            for (var i = 0; i < files.length; i++) {
                data.append(files[i].name, files[i]);
            }  

            // Make Ajax request with the contentType = false, and procesDate = false
            $.ajax({
                type: "POST",
                url: "/Services/PageService.asmx/UploadImages",
                contentType: false,
                processData: false,
                data: data,
                success: function () {

                    impImage.Image.SelfJQ.ClearImageGalaryPagingValue();
                    impImage.Image.SelfJQ.GetImages();

                },
                error: function (request, status, error) {
                  
                }
            });

           
        }       

          // Grab the files and set them to our variable
        public static PrepareUpload(event) {
            imageFiles = event.target.files;

            CommonEvents.UploadImages();
        }

        public Init() {

            if (CommonEvents.CheckMal() == false) {
                impmal.MalFormed.MalFormedJQ.IsMalFormed = true;
            }     

            ///////////// change image ////////////////

            jQuery(".button-change-image").click(function () {
               
                impImage.Image.SelfJQ.ChangeImage();

               
            });


            //////////// images upload ////////////////

           
            // Add events
            $('.image-file-upload').on('change', CommonEvents.PrepareUpload);
                      

            ////////////// Flating or aligning...

            jQuery(".button-align-left").click(function () {
                impNoUi.NoUI.AlignJQ.Left();
            });

            jQuery(".button-align-right").click(function () {
                impNoUi.NoUI.AlignJQ.Right();
            });

            jQuery(".button-align-center").click(function () {

                impNoUi.NoUI.AlignJQ.Center();
            });

            ///////////// Moving Object....

            jQuery(".button-move-left").click(function () {
                impNoUi.NoUI.MoveJQ.Left();
            });

            jQuery(".button-move-right").click(function () {
                impNoUi.NoUI.MoveJQ.Right();
            });

            jQuery(".button-move-up").click(function () {
                impNoUi.NoUI.MoveJQ.Up();
            });

            jQuery(".button-move-down").click(function () {
                impNoUi.NoUI.MoveJQ.Down();
            });

            ///////////////////////////////////////////////////////////////

            jQuery("#control-align").draggable({ revert: false });
            jQuery("#control-object-move").draggable({ revert: false });

            var liveUrl = jQuery(".input-current-location").val() + "/"
                + jQuery(".input-site-id").val() + "/"
                + jQuery(".input-site-name").val() + "/"
                + jQuery(".input-page-name").val();

            jQuery(".anchor-show-live-preview").attr("href", liveUrl);

            jQuery("#notify").click(function () {
                jQuery(this).hide();
            });

            jQuery(".btn-help").click(function () {

                jQuery("#site-help").slideToggle();
            });

            jQuery("#site-help").click(function () {

                jQuery(this).slideUp();
            });

            themeHandle = window.setInterval(
                function () {
                    if (impAuth.Auth.AuthJQ.IsAuth == true) {

                        impAuth.Auth.AuthJQ.HideLoading();


                        window.clearInterval(themeHandle);

                        var layout = new impLayout.Themes.Empty.LayoutJQ();

                        layout.Init();

                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Hide()
                        }


                    }
                    else {
                        if (impLayout.Themes.Empty.LayoutJQ.loading != undefined) {
                            impLayout.Themes.Empty.LayoutJQ.loading.Show()
                        }
                    }

                }, 1000);

            ////////////////

            jQuery(".jq-show-plus").click(function () {
                jQuery(".jq-row-plus-container").show();

                jQuery(".jq-show-plus").hide();
                jQuery(".jq-hide-plus").show();
            });

            jQuery(".jq-hide-plus").click(function () {
                jQuery(".jq-row-plus-container").hide();

                jQuery(".jq-hide-plus").hide();
                jQuery(".jq-show-plus").show();

            });

            //// download /////////////////

            jQuery(".button-download-site").click(function () {

                var save = new impSaveClass.Save.SaveJQ();

                var data = {
                    siteName: jQuery(".input-site-name").val()
                }

                var downloadData = JSON.stringify(data);

                var eh = new impError.ErrorHandle.ErrorJQ();

                eh.ActionHelp("Download will start in few seconds...");

                save.Download(downloadData);

            });
           
            /// save ///////

            jQuery(".jq-save").click(function () {

                var scripts = jQuery(document.createElement("scripts"));
                var styles = jQuery(document.createElement("styles"));
                var page = jQuery(document.createElement("page"))

                var fullbody = "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" /> </head><body>";
                var fullbodyEnd = "</body></html>";

                var styleSheetExtra =
                    "<script type=\" text/javascript\" class=\"add-to-page jquery\" src= \"jquery/jquery-1.11.2.min.js\" > </script>" +
                    "<link rel=\"stylesheet\" type= \"text/css\" class=\"add-to-page\" href= \"bootstrap/bootstrap-customzed-48.min.css\" />" +
                    "<link class=\"add-to-page\" type= \"text/css\" href= \"theme/theme.css\" rel= \"stylesheet\" type= \"text/css\" />" +
                    "<link class=\"add-to-page\"  href= \"theme/jqplus.css\" rel= \"stylesheet\" />" +
                    " <style> " +
                    " .jq-plus-element { display:none !important; } " +
                    " .jq-row-plus-container { display:none !important; } " +
                    " .row { margin:0; padding:0; } " +
                    " .column { margin:0; padding:0; } " +
                    ".page-static-element { display:none !important;} .page-static-element-circle{display:none !important;} .design-adjust-image-text-other{margin:1px;}" +
                    " .image-text-other .adjust-image-text-other-left{ float: left; } .page-marker{display:none;} " +
                    "</style>";

                jQuery(".image-selection").removeClass("image-selection");

                jQuery(".add-to-page").each(function () {

                    if (jQuery(this).prop("tagName") == "SCRIPT") {
                        scripts.append($(this).clone());
                    }

                    if (jQuery(this).prop("tagName") == "LINK") {
                        styles.append($(this).clone());
                    }

                    if (jQuery(this).prop("tagName") == "PAGE") {
                        page.append($(this).clone());
                        page.find(".jqte-editor").removeAttr("contentEditable").removeAttr("tabindex").css("cursor", "initial");
                        page.prepend(styleSheetExtra);
                    }

                });

                var save = new impSaveClass.Save.SaveJQ();

                save.scripts = scripts.html();
                save.styles = styles.html();
                save.page = fullbody + page.html() + fullbodyEnd;

                var data = {
                    Obj: save, siteName: jQuery(".input-site-name").val(), pageName: jQuery(".input-page-name").val()
                }

                var saveData = JSON.stringify(data);

                save.SavePage(saveData);


            });

            //// undo manager ////

            jQuery(".jq-undo").click(function () {

                var undoManager = new impUndoManager.Manager.UndoManager();
                undoManager.Undo();

            });

            jQuery(".jq-redo").click(function () {
                var undoManager = new impUndoManager.Manager.UndoManager();
                undoManager.Redo();
            });

            jQuery(".properties-button").click(function () {

                if (jQuery(".control-properties").css("display") == "block") {
                    jQuery(".control-properties").addClass("forced-hide");
                }
                else {
                    jQuery(".control-properties").removeClass("forced-hide");
                }

                jQuery(".control-properties").fadeToggle();

            });

            /////// smar obj /////
            window.smartObj = new SmartObj();

            impOn.On.Code.Execute();
        }


        public static ResizableClickCode($this) {


            jQuery(".ui-resizable-se").removeClass("selected-resizable");
            jQuery(".ui-resizable-s").removeClass("selected-resizable");

            jQuery($this).addClass("selected-resizable");
        }


    }


}