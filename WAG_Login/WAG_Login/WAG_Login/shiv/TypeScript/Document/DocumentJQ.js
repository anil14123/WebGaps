/// <reference path="iwindow.ts" />
define(["require", "exports", "jquery"], function (require, exports, jQuery) {
    "use strict";
    var isDocumentReady = false;
    var Document;
    (function (Document) {
        var DocumentJQ = (function () {
            function DocumentJQ() {
            }
            DocumentJQ.prototype.Init = function () {
                this.Attach();
            };
            DocumentJQ.prototype.Attach = function () {
                jQuery(document).ready(function () {
                    if (isDocumentReady == false) {
                        isDocumentReady = true;
                    }
                });
            };
            return DocumentJQ;
        }());
        Document.DocumentJQ = DocumentJQ;
    })(Document = exports.Document || (exports.Document = {}));
});
//# sourceMappingURL=DocumentJQ.js.map