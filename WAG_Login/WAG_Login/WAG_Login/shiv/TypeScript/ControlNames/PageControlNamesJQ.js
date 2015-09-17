define(["require", "exports"], function (require, exports) {
    var PageControlNamesJQ;
    (function (PageControlNamesJQ) {
        var Page;
        (function (Page) {
            var AddRow;
            (function (AddRow) {
                var Controls = (function () {
                    function Controls() {
                    }
                    Controls.CONTROL_COLUMNS = ".control-columns";
                    Controls.ROW_HEIGHT_CONTROL = "#heightControl";
                    Controls.ROW_HEIGHT_VALUE_CONTROL = "#heightControlValue";
                    Controls.COLUMN_HEIGHT_CONTROL = "#colHeightControl";
                    Controls.COLUMN_HEIGHT_VALUE_CONTROL = "#colHeightControlValue";
                    Controls.DDN_ROWS_COLUMNS = "#rows-columns";
                    Controls.BTN_ADD_ROW = ".action-button-add-row";
                    return Controls;
                })();
                AddRow.Controls = Controls;
            })(AddRow = Page.AddRow || (Page.AddRow = {}));
            var Text;
            (function (Text) {
                var Controls = (function () {
                    function Controls() {
                    }
                    Controls.BTN_INSERT_TEXT = ".action-button-insert-text";
                    Controls.BTN_CLEAR_TEXT = ".action-button-insert-text-clear";
                    return Controls;
                })();
                Text.Controls = Controls;
            })(Text = Page.Text || (Page.Text = {}));
            var Image;
            (function (Image) {
                var Controls = (function () {
                    function Controls() {
                    }
                    Controls.BTN_INSERT_IMAGE = ".action-button-insert-image";
                    return Controls;
                })();
                Image.Controls = Controls;
            })(Image = Page.Image || (Page.Image = {}));
        })(Page = PageControlNamesJQ.Page || (PageControlNamesJQ.Page = {}));
    })(PageControlNamesJQ = exports.PageControlNamesJQ || (exports.PageControlNamesJQ = {}));
});
//# sourceMappingURL=PageControlNamesJQ.js.map