/// <reference path="../../sitemanager_ts/site/sitejq.ts" />

import impPage = require("../../SiteManager_TS/Site/SiteJQ");
import impError = require("../../typescript/error/errorjq");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impCommonCode = require("../Controls/ControlCommonJQ");
import impOperaction = require("../Common/OperationJQ");

var initOnceFlag = false;
var normalLinkId = 0;
export module Link {

    export class LinkJQ {

        public Init() {

            if (initOnceFlag == false) {
                initOnceFlag = true;
                this.AttachEvents();
            }
        }

        public static LoadLinks() {

            var site = new impPage.Site.SiteJQ();

            site.GetPages(
                jQuery(".input-site-name").val(),
                LinkJQ.OnGetPagesSuccess,
                LinkJQ.OnGetPagesError);
        }

        public static OnGetPagesSuccess(data, status) {
            jQuery(".jq-loading").hide();

            var result = data.d;

            jQuery(".insert-link-links").html("");

            for (var i = 0; i < result.length; i++) {

                var select;

                if (i == 0) {
                    select = "<option selected value='" + result[i].Name + "'>" + result[i].Name.replace(".html", "") + "</option>";
                }
                else {
                    select = "<option value='" + result[i].Name + "'>" + result[i].Name.replace(".html", "") + "</option>";
                }

                jQuery(".insert-link-links").append(select);

            }
                      
            jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());
            var previewlink = LinkJQ.CreateCurrentLink(true);
            jQuery(".insert-link-preview").html(previewlink);
        }

        public static OnGetPagesError(request, status, error) {

            jQuery(".jq-loading").hide();

            jQuery(".insert-link-links").html("");

            var errorHandler = new impError.ErrorHandle.ErrorJQ();
            errorHandler.ActionFail("Something went wrong<br>Try again later!");

        }

        public static IsExternalUrl: boolean;

        public static GenerateId() {
            return "NormalLink" + ++normalLinkId;
        }


        public AttachEvents() {

            jQuery("#insert-internet-link-url").change(function () {

                LinkJQ.IsExternalUrl = true;

                jQuery("#insert-internet-link-name").val("Give Name");

                var value: string;
                value  = jQuery("#insert-internet-link-url").val();

                if (value.length > 0) {
                    while (value.charAt(0) == ' ') value = value.substring(1);
                }

                if (value != "") {

                    var i = value.indexOf("http://");
                    var j = value.indexOf("https://");
                    var k = value.indexOf("//");
                    if (i != 0 && j != 0 && k != 0) {
                        jQuery(this).val("//" + jQuery(this).val());
                    }

                }
                else {

                    var errorHandler = new impError.ErrorHandle.ErrorJQ();

                    errorHandler.ActionHelp("Please provide External Link Url.");
                }

                var previewlink = LinkJQ.CreateCurrentLink(true, jQuery(this).val(), jQuery("#insert-internet-link-name").val());

                jQuery(".insert-link-preview").html(previewlink);

            });

            jQuery("#insert-internet-link-name").change(function () {

                LinkJQ.IsExternalUrl = true;

                if (jQuery(this).val() != "Give Name") {
                    var previewlink = LinkJQ.CreateCurrentLink(true, jQuery("#insert-internet-link-url").val(), jQuery(this).val());
                    jQuery(".insert-link-preview").html(previewlink);
                    var value = jQuery("#insert-internet-link-url").val();

                    if (value.length > 0) {
                        while (value.charAt(0) == ' ') value = value.substring(1);
                    }

                    if (value == "") {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();

                        errorHandler.ActionHelp("Please provide External Link Url.");
                    }
                }

            });

            jQuery(".btn-style").click(function () {

                jQuery(".btn-style").removeClass("btn-style-selected");
                jQuery(this).addClass("btn-style-selected");


                var previewlink

                if (LinkJQ.IsExternalUrl == true) {
                    previewlink = LinkJQ.CreateCurrentLink(true, jQuery("#insert-internet-link-url").val(), jQuery("#insert-internet-link-name").val());
                }
                else {
                    previewlink = LinkJQ.CreateCurrentLink(true);
                }

                jQuery(".insert-link-preview").html(previewlink);

            });

            jQuery(".action-button-insert-link").click(function () {

                var linkToInsert;

                if (LinkJQ.IsExternalUrl == true) {
                    linkToInsert = LinkJQ.CreateCurrentLink(false, jQuery("#insert-internet-link-url").val(), jQuery("#insert-internet-link-name").val());
                }
                else {
                    linkToInsert = LinkJQ.CreateCurrentLink(false);
                }

               
               
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {

                    impOperaction.Operation.AfterOperationJQ.Execute();

                    selectedElement.append(linkToInsert);

                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();

                    jQuery("page a").not(".jq-logout").unbind("click");
                    jQuery("page a").not(".jq-logout").click(function () {
                        impCommonCode.ControlCommon.Code.AnchorClicked = true;
                    });

                    impCommonCode.ControlCommon.Code.Execute();
                }



            });

            jQuery(".insert-link-name").on("change", function () {

                LinkJQ.IsExternalUrl = false;
                var previewlink = LinkJQ.CreateCurrentLink(true);
                
                jQuery(".insert-link-preview").find("a").text(jQuery(this).val());
            });

            jQuery("#control-insert-link").on("change", ".insert-link-links", function () {

                LinkJQ.IsExternalUrl = false;

                jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());

                var previewlink = LinkJQ.CreateCurrentLink(true);

                jQuery(".insert-link-preview").html(previewlink);

                jQuery("#insert-internet-link-name").val("");
                jQuery("#insert-internet-link-url").val("");

            });
        }

        public static CreateCurrentLink(blankTarget?: boolean, url?: string, name?: string) {
            var link;
            var id;
            if (blankTarget == false) {
                id = LinkJQ.GenerateId()
            }

            if (url == undefined) {
                //url = jQuery(".input-current-location").val() + "/"
                //+ jQuery(".input-site-id").val() + "/"
                //+ jQuery(".input-site-name").val() + "/" +
                url = jQuery(".insert-link-links").find('option:selected').val();
            }

            var btnStyle = jQuery(".btn-style-selected").attr("btn-style");

            if (btnStyle == undefined) {
                btnStyle = " btn-default ";
            }

            if (name == undefined) {
                name = jQuery(".insert-link-name").val();
            }

            if (blankTarget == true) {
                link = "<span style='display:inline-block;' class='key jq-normal-link jq-site-link-container  btn " + btnStyle + "'><a target='_blank' id='" + id + "' class='jq-site-link " + "' href='"
                + url
                + "?nocache=true'>" + name + "</a></span>";
            }
            else {
                link = "<span style='display:inline-block;' class='key jq-normal-link jq-site-link-container  btn " + btnStyle + "'><a id='" + id + "' class='jq-site-link " + "' href='"
                + url
                + "?nocache=true'>" + name + "</a></span>";
            }

            return link;
        }

        public static Show() {
            jQuery("#control-insert-link").show();
            jQuery(".jq-loading").show();

            LinkJQ.LoadLinks();

        }

        public static Close() {

        }

        public static ProcessSelectNotify() {

        }
    }
}