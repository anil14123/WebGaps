/// <reference path="../../sitemanager_ts/site/sitejq.ts" />

import impPage = require("../../SiteManager_TS/Site/SiteJQ");
import impError = require("../../typescript/error/errorjq");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");

export module Link {

    export class LinkJQ {

        public Init() {
            this.AttachEvents();
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

            var previewlink = LinkJQ.CreateCurrentLink(true);

            jQuery(".insert-link-preview").html(previewlink);
            jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());
        }

        public static OnGetPagesError(request, status, error) {

            jQuery(".jq-loading").hide();

            jQuery(".insert-link-links").html("");

            var errorHandler = new impError.ErrorHandle.ErrorJQ();
            errorHandler.ActionFail("Something went wrong<br>Try again later!");

        }

        public AttachEvents() {

            jQuery("#insert-internet-link-url").change(function () {

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

            jQuery(".action-button-insert-link").click(function () {

                var linkToInsert = LinkJQ.CreateCurrentLink();

                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement != undefined) {

                    selectedElement.append(linkToInsert);

                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }

            });

            jQuery(".insert-link-name").on("change", function () {

                jQuery(".insert-link-preview").find("a").text(jQuery(this).val());
            });

            jQuery("#control-insert-link").on("change", ".insert-link-links", function () {

                var previewlink = LinkJQ.CreateCurrentLink(true);

                jQuery(".insert-link-preview").html(previewlink);

                jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());

                jQuery("#insert-internet-link-name").val("");
                jQuery("#insert-internet-link-url").val("");

            });
        }

        public static CreateCurrentLink(blankTarget?: boolean, url?: string, name?: string) {
            var link;

            if (url == undefined) {
                url = jQuery(".input-current-location").val() + "/"
                + jQuery(".input-site-id").val() + "/"
                + jQuery(".input-site-name").val() + "/"
                + jQuery(".insert-link-links").find('option:selected').val()
            }

            if (name == undefined) {
                name = jQuery(".insert-link-links").find('option:selected').text();
            }

            if (blankTarget == true) {
                link = "<a target='_blank' class='jq-site-link btn btn-default' href='"
                + url
                + "?nocache=true'>" + name + "</a>";
            }
            else {
                link = "<a class='jq-site-link btn btn-default' href='"
                + url
                + "?nocache=true'>" + name + "</a>";
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