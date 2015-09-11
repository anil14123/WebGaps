define(["require", "exports"], function (require, exports) {
    var ModuleA;
    (function (ModuleA) {
        var A = (function () {
            function A() {
                this.x = "hello module a class a";
            }
            return A;
        })();
        ModuleA.A = A;
    })(ModuleA = exports.ModuleA || (exports.ModuleA = {}));
});
//# sourceMappingURL=ModuleA.js.map