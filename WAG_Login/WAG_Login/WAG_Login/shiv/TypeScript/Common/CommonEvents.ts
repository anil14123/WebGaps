
/////////////////////////// window adding property /////////////////////
interface MyWindow extends Window { smartObj: Common.SmartObj; }

declare var window: MyWindow;

////////////////////////////////////////////////////////////////////////

import impJQueryUI = require("../Controls/JQueryUI");
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

import * as jQuery from "jquery";
import * as jQueryUI from "jqueryui";
jQueryUI;

var themeHandle;
var downloadInterval;
var imageFiles;
var showHideMenuHandle;

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
            jQuery.ajax({
                type: "POST",
                url: "/Services/PageService.asmx/UploadImages",
                contentType: false,
                processData: false,
                data: data,
                success: function () {

                    impImage.Image.SelfJQ.ClearImageGalaryPagingValue();
                    impImage.Image.SelfJQ.GetImages();

                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                    errorHandler.ActionSuccess("Images Uploaded Sucessfully.");
                  
                },
                error: function (request, status, error) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                    errorHandler.ActionFail("Images Uploaded Failed.(Please check file type or file size.)");
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
                impmal.MalFormed.MalFormedJQ.IsMalFormed = false; // i modified to false 
            }     

            /// Designer.aspx code

            jQuery(document).ready(function () {

                jQuery("#tabs").tabs();
                jQuery("#properties-accordion").accordion({
                    collapsible: true,
                    heightStyle: 'accordion-properties-height',
                    //beforeActivate: function (event, ui) {
                    //    ui.newHeader.add(ui.newPanel).prependTo(this)
                    //}
                });


                //$(".testnav").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");
                //$(".testnav li").addClass("ui-menu-item");
                //$(".sub-menu").hide();

                //$(".clk").mouseover(function () {

                //    var menu = "#nav";
                //    var position = { my: "left top", at: "left bottom+8" };
                //    $(menu).menu({
                //        position: position,
                //        blur: function () {
                //            $(this).menu("option", "position", position);
                //        },
                //        focus: function (e, ui) {
                //            if ($(menu).get(0) !== $(ui).get(0).item.parent().get(0)) {
                //                $(this).menu("option", "position", { my: "left top", at: "left top" });
                //            }
                //        }
                //    });
                //});

            });


            jQuery(".leaf_type_btn").on("click", function () {
                jQuery(".leaf_type_btn").parent().removeClass("active");
                jQuery(this).parent().addClass("active");

                jQuery("#leaf_container .leaf_type").removeClass("active");

                switch (jQuery(this).parent().data("name").toString()) {
                    case 'webs.bldr.modules.container.popular':
                        jQuery("#leaf_container .leaf_type:eq(0)").addClass("active");
                        break;
                    case 'webs.bldr.modules.container.structure':
                        jQuery("#leaf_container .leaf_type:eq(1)").addClass("active");
                        break;
                    case 'webs.bldr.modules.container.media':
                        jQuery("#leaf_container .leaf_type:eq(2)").addClass("active");
                        break;
                    case 'webs.bldr.modules.container.social':
                        jQuery("#leaf_container .leaf_type:eq(3)").addClass("active");
                        break;
                    case 'webs.bldr.modules.container.commerce':
                        jQuery("#leaf_container .leaf_type:eq(4)").addClass("active");
                        break;
                    case 'webs.bldr.dock.ads.appfeeds':
                        jQuery("#leaf_container .leaf_type:eq(5)").addClass("active");
                        break;
                }

            });

            ///////////////////////////////////////////////////
            
            jQuery(".jq-remove-height-width").on("click", function () {
                jQuery(".image-selection:first").find(".jpc").css("height", "auto").css("width", "auto").css("min-height", "auto").find("img").css("max-height", "initial");
                return false;
            });


            ///////////////////////////////////////////////////

            jQuery("#document-clear-selection").on("click", function () {
                try {
                    var sel = window.getSelection ? window.getSelection() : document.selection;
                    if (sel) {
                        if (sel.removeAllRanges) {
                            sel.removeAllRanges();
                        } else if (sel.empty) {
                            sel.empty();
                        }
                    }
                }
                catch (ex) {

                }                
            });            

            ///////////// change image ////////////////

            jQuery(".jq-change-image").on("click" , function () {
                impImage.Image.SelfJQ.ChangeImage();
            });
            
            if (!jQuery(".bldr-draggable").hasClass("event-added")) {
                jQuery(".bldr-draggable").addClass("event-added");
                impJQueryUI.JQueryUI.CommonCode.Draggable(".bldr-draggable", "");
            }

            jQuery(".jq-full-page").on("click", function () {
                jQuery(".page-margin").css("width", "auto");
            });

            jQuery(".jq-small-page").on("click", function () {
                jQuery(".page-margin").css("width", "980px");
            });

            ///////////////show hide menu//////////////
            jQuery(".show-hide-menu-btn").hide();
            jQuery(".hide-menu").show();
            jQuery(".show-menu, .hide-menu").on("click", function () {

                jQuery("#hideMenuHelpTop").hide();
           
                if (!(jQuery(".hide-menu").css("display") == "none")) {
                    jQuery(".hide-menu").hide();
                    jQuery(".show-menu").show();

                    jQuery(".top-row-container").hide();
                    jQuery("rootx").css("top", "0");
                    jQuery(".editor").css("top", "0");
                    jQuery(".properties-sidebar-container").css("top", "0");
                }
                else {
                    jQuery(".hide-menu").show();
                    jQuery(".show-menu").hide();

                    jQuery("rootx").css("top", "43px");
                    jQuery(".editor").css("top", "43px");
                    jQuery(".properties-sidebar-container").css("top", "43px;");
                    jQuery(".top-row-container").show();
                    
                }

            });

            jQuery(".hide-left-menu").show();
            jQuery(".hide-left-menu, .show-left-menu").on("click", function () {

                jQuery("#hideLeftMenuHelp").hide();

                if (!(jQuery(".hide-left-menu").css("display") == "none")) {
                    jQuery(".hide-left-menu").hide();
                    jQuery(".show-left-menu").show();

                    jQuery("#property-sidebar-page-column").hide();
                    jQuery("#main-page-column").addClass("col-xs-48").removeClass("col-xs-36");

                }
                else {
                    jQuery(".hide-left-menu").show();
                    jQuery(".show-left-menu").hide();

                    jQuery("#main-page-column").addClass("col-xs-36").removeClass("col-xs-48");
                    jQuery("#property-sidebar-page-column").show();
                }

                jQuery("#refresh-image-text-controls-position").trigger("click");

            });


            //////////// images upload ////////////////

           
            // Add events
            jQuery('.image-file-upload').on('change', CommonEvents.PrepareUpload);
                      

            ////////////// Flating or aligning...

            jQuery(".button-align-left").on("click" , function () {
                impNoUi.NoUI.AlignJQ.Left();
            });

            jQuery(".button-align-right").on("click", function () {
                impNoUi.NoUI.AlignJQ.Right();
            });

            jQuery(".button-align-center").on("click", function () {

                impNoUi.NoUI.AlignJQ.Center();
            });

          
            /////////////// Moving Object....

            //jQuery(".button-move-left").on("click", function () {
            //    impNoUi.NoUI.MoveJQ.Left();
            
            //    return false;
            //});

            //jQuery(".button-move-right").on("click", function () {
            //    impNoUi.NoUI.MoveJQ.Right();

            //    return false;
            //});

            jQuery(".button-move-up").on("click", function () {
                impNoUi.NoUI.MoveJQ.Up();
            });

            jQuery(".button-move-down").on("click", function () {
                impNoUi.NoUI.MoveJQ.Down();
            });

            ///////////////////////////////////////////////////////////////

            jQuery(".jq-prev-style-text").on("click", function () {
              
            });

            jQuery(".jq-next-style-text").on("click", function () {
               
            });

            ///////////////////////////////////////////////////////////////

            jQuery(".jq-prev-style-image").on("click", function () {
                
            });

            jQuery(".jq-next-style-image").on("click", function () {
               
            });

            
            ///////////////////////////////////////////////////////////////

            jQuery("#control-align").draggable({ revert: false });
            jQuery("#control-object-move").draggable({ revert: false });
           

            var liveUrl = jQuery(".input-current-location").val() + "/"
                + jQuery(".input-site-id").val() + "/"
                + jQuery(".input-site-name").val() + "/"
                + jQuery(".input-page-name").val();

            jQuery(".anchor-show-live-preview").attr("href", liveUrl);

            jQuery("#notify").on("click",function () {
                jQuery(this).hide();
            });

            jQuery(".btn-help").on("click" ,function () {

                jQuery("#site-help").slideToggle();
            });

            jQuery("#site-help").on("click",function () {

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

            jQuery(".jq-show-plus").on("click",function () {
                jQuery(".jq-row-plus-container").show();

                jQuery(".jq-show-plus").hide();
                jQuery(".jq-hide-plus").show();
            });

            jQuery(".jq-hide-plus").on("click",function () {
                jQuery(".jq-row-plus-container").hide();

                jQuery(".jq-hide-plus").hide();
                jQuery(".jq-show-plus").show();

            });

            //// download /////////////////

            jQuery(".button-download-site").on("click",function () {

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

            jQuery(".jq-save").on("click",function () {

                var eh = new impError.ErrorHandle.ErrorJQ();

                eh.ActionHelp("Please Wait...");

                var scripts = jQuery(document.createElement("scripts"));
                var styles = jQuery(document.createElement("styles"));
                var page = jQuery(document.createElement("page"))

                var fullbody = "<html><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" /> </head><body>";
                var fullbodyEnd = "</body></html>";

                var styleSheetExtra =
                    "<script type=\" text/javascript\" class=\"add-to-page jquery\" src= \"jquery/jquery-1.11.2.min.js\" > </script>" +
                    "<link rel=\"stylesheet\" type= \"text/css\" class=\"add-to-page\" href= \"bootstrap/bootstrap-customzed-48.min.css\" />" +
                    "<link class=\"add-to-page\" type= \"text/css\" href= \"theme/theme.css\" rel= \"stylesheet\" type= \"text/css\" />" +
                    "<link class=\"add-to-page\"  href= \"theme/jqplus.css\" rel= \"stylesheet\" />" +
                    " <style> " +
                    " @media (max-width: 980px) { .page-margin { width: auto !important; } .empty-container-text {display:inline-block; } .jq-text-block-container{max-width:100%;} .jq-text-block-container {height:auto !important;} .jq-plus-container-text{display:inline-block; height:auto !important; } }  " + 
                    " .jq-plus-element { display:none !important; } " +
                    " .jq-row-plus-container { display:none !important; } " +
                    " .row { margin:0; padding:0; clear:both; } .root-elements{ padding:0;} " +
                    " .column { margin:0; padding:0; } " +
                    ".page-static-element { display:none !important;} .page-static-element-circle{display:none !important;} .design-adjust-image-text-other{margin:0px;}" +
                    " .image-text-other .adjust-image-text-other-left{ float: left; } body * { cursor:initial !important; } .page-marker{display:none !important;} .design-page-row{display:none !important;}" +
                    "</style>";

                jQuery(".image-selection").removeClass("image-selection");

                jQuery(".add-to-page").each(function () {

                    if (jQuery(this).prop("tagName") == "SCRIPT") {
                        scripts.append(jQuery(this).clone());
                    }

                    if (jQuery(this).prop("tagName") == "LINK") {
                        styles.append(jQuery(this).clone());
                    }

                    if (jQuery(this).prop("tagName") == "PAGE") {
                        page.append(jQuery(this).clone());
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

            jQuery(".jq-undo").on("click",function () {

                var undoManager = new impUndoManager.Manager.UndoManager();
                undoManager.Undo();

            });

            jQuery("#undo-redo-execute").on("click", function () {
                var undoManager = new impUndoManager.Manager.UndoManager();
                undoManager.BeforeOperation();
            });

            jQuery(".jq-redo").on("click" ,function () {
                var undoManager = new impUndoManager.Manager.UndoManager();
                undoManager.Redo();
            });

            jQuery(".properties-button").on("click",function () {

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