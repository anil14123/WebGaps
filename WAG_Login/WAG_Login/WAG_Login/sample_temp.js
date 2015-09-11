var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
$(document).ready(function () {
    /////////////////////////////// Back Up code /////////////////////////////////
    //var ctx = new ContextJQ();
    //ctx.Page.Header.AddRow(undefined, "col-xs-3 col-xs-9", "");
    //ctx.Page.Header.AddRow(ctx.Page.Header.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    //ctx.Page.Header.AddRow(ctx.Page.Header.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    //ctx.Page.MenuBar.AddRow(ctx.Page.MenuBar.GetColumn(0, 0), "col-xs-12", "");
    ////////////////////////////////////////////////////////////////////////////////
    // /////////////////////////////// Back Up code /////////////////////////////////
    // var pageBase: PageElementBaseJQ;
    // pageBase = new PageElementBaseJQ(null, "Header", "pageX", null);
    // // undefined means jq_Header is the root element passed from constructor.
    // pageBase.AddRow(undefined, "col-xs-4 col-xs-4 col-xs-4", "");
    // pageBase.AddRow(pageBase.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    // pageBase.AddRow(pageBase.GetColumn(0, 1), "col-xs-4 col-xs-4 col-xs-4", "");
    //// pageBase.AddRow(jQuery(pageBase.GetColumn(0, 1)).find("[scopeId=scopeId_4]"), "col-xs-4 col-xs-4 col-xs-4", "");
    ////var headerContent = jQuery(document.createElement("div")).text("Ajit");
    ////pageBase.Add(pageBase.GetColumn(0, 0), headerContent, "", "0 2", false);
    //////////////////////////////////////////////////////////////////////////////////
});
var LocationJQ = (function () {
    function LocationJQ(row, column) {
        this.Row = row;
        this.Column = column;
    }
    return LocationJQ;
})();
//# sourceMappingURL=sample_temp.js.map