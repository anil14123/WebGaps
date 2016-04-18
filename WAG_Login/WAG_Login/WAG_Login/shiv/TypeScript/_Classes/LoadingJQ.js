define(["require", "exports"], function (require, exports) {
    "use strict";
    var Loading;
    (function (Loading) {
        var LoadingJQ = (function () {
            function LoadingJQ(controlId) {
                this.src = "/content/loading/colors.gif";
                this.controlId = controlId;
                this.Create();
            }
            LoadingJQ.prototype.Create = function () {
                var loading = jQuery(".loading.clonable").clone();
                loading.removeClass("clonable");
                loading.addClass("new");
                loading.removeClass("hide");
                loading.find("img").first().attr("src", this.src);
                jQuery(this.controlId).find(".loading.new").remove();
                jQuery(this.controlId).append(loading);
            };
            LoadingJQ.prototype.Init = function () {
                this.Show();
            };
            LoadingJQ.prototype.IsExist = function () {
                if (jQuery(this.controlId).find(".loading.new").length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            };
            LoadingJQ.prototype.Show = function () {
                if (this.IsExist()) {
                    jQuery(this.controlId).find(".loading.new").first().show();
                }
                else {
                    this.Create();
                    jQuery(this.controlId).find(".loading.new").first().show();
                }
            };
            LoadingJQ.prototype.Hide = function () {
                jQuery(this.controlId).find(".loading.new").first().hide();
            };
            return LoadingJQ;
        }());
        Loading.LoadingJQ = LoadingJQ;
    })(Loading = exports.Loading || (exports.Loading = {}));
});
//# sourceMappingURL=LoadingJQ.js.map