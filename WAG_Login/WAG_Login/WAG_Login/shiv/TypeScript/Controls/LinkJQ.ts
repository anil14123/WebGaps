/// <reference path="../../sitemanager_ts/site/sitejq.ts" />

import impPage = require("../../SiteManager_TS/Site/SiteJQ");
import impError = require("../../typescript/error/errorjq");


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

            var previewlink = "<a target='_blank' href='"
                + jQuery(".input-current-location").val() + "/" 
                + jQuery(".input-site-id").val() + "/" 
                + jQuery(".input-site-name").val() + "/" 
                + jQuery(".insert-link-links").find('option:selected').val()
                + "'>" + jQuery(".insert-link-links").find('option:selected').text() + "</a>";

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


            jQuery(".insert-link-name").on("change", function () {

                jQuery(".insert-link-preview").find("a").text(jQuery(this).val());
            });

            jQuery("#control-insert-link").on("change", ".insert-link-links", function () {

                var previewlink = "<a target='_blank' href='"
                    + jQuery(".input-current-location").val() + "/"
                    + jQuery(".input-site-id").val() + "/"
                    + jQuery(".input-site-name").val() + "/"
                    + jQuery(".insert-link-links").find('option:selected').val()
                    + "'>" + jQuery(".insert-link-links").find('option:selected').text() + "</a>";

                jQuery(".insert-link-preview").html(previewlink);

                jQuery(".insert-link-name").val(jQuery(".insert-link-links").find('option:selected').text());

            });
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