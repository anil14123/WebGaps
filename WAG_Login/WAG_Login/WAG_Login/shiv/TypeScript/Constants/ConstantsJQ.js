define(["require", "exports"], function (require, exports) {
    "use strict";
    var Constants;
    (function (Constants) {
        var ConstantsJQ = (function () {
            function ConstantsJQ() {
            }
            ConstantsJQ.LOGO = "logo.png";
            ConstantsJQ.HEIGHTCONTROLRESETVALUE = "100";
            ConstantsJQ.PAGEROOT = "Page";
            // public static Str = ["t", "q", "b", "h", "c", "f", "x"];
            // public static Str = ["t", "q", "b", "h", "c", "f", "x"];
            ConstantsJQ.Str = ["p", "i", "m", "b", "d", "p", "m"];
            ConstantsJQ.SecureStrLength = 7;
            return ConstantsJQ;
        }());
        Constants.ConstantsJQ = ConstantsJQ;
        var StaticJQ = (function () {
            function StaticJQ() {
            }
            StaticJQ.normalLinkId = 0;
            StaticJQ.editorLinkId = 0;
            return StaticJQ;
        }());
        Constants.StaticJQ = StaticJQ;
    })(Constants = exports.Constants || (exports.Constants = {}));
});
//# sourceMappingURL=ConstantsJQ.js.map