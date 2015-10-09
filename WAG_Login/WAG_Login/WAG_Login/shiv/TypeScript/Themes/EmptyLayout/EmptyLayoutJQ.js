define(["require", "exports", "../../Page/HeaderJQ", "../../Page/MenuBarJQ", "../../Page/ContentJQ", "../../Page/FooterJQ", "../../_Classes/CssClass", "../../_Classes/LoadingJQ", "../../page/anyjq", "../../Error/ErrorJQ", "../../UndoManager/UndoManager", "../../Preview/Preview", "../../ContextMenu/ContextMenuJQ", "../../controls/controlcommonjq"], function (require, exports, impHeader, impMenuBar, impBody, impFooter, impCss, impLoading, impAny, impError, impUndoManager, impPreview, impCtxMenu, impControlCommon) {
    window.layoutCreating = true;
    var colorToChange = 0;
    var Themes;
    (function (Themes) {
        var Empty;
        (function (Empty) {
            var LayoutJQ = (function () {
                function LayoutJQ() {
                    this.controlId = "#control-templates";
                    window.layoutCreating = true;
                    // loading created...
                    LayoutJQ.loading = new impLoading.Loading.LoadingJQ(this.controlId);
                    LayoutJQ.loading.Init();
                }
                LayoutJQ.prototype.Init = function () {
                    try {
                        this.Layout(LayoutJQ.layout);
                        this.Layout(LayoutJQ.layout3);
                        this.Layout(LayoutJQ.layout6);
                        this.Layout(LayoutJQ.layout1);
                        this.Layout(LayoutJQ.layout4);
                        this.Layout(LayoutJQ.layout7);
                        this.Layout(LayoutJQ.layout2);
                        this.Layout(LayoutJQ.layout5);
                        this.Layout(LayoutJQ.layout8);
                        jQuery(".empty-layout-templates").find(".ui-resizable-handle").hide();
                        jQuery(".empty-layout-templates .row").removeClass("design-row");
                        jQuery(".empty-layout-templates .column").css("outline", "1px solid #282424");
                        jQuery(".empty-layout-templates .root-elements").css("padding", "0");
                        this.Attach();
                    }
                    catch (ex) {
                    }
                    window.layoutCreating = false;
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                };
                LayoutJQ.prototype.Attach = function () {
                    jQuery(".empty-layout").on("click", function () {
                        jQuery(".empty-layout").removeClass("empty-layout-select");
                        jQuery(this).addClass("empty-layout-select");
                    });
                    jQuery(".create-layout-show-button").on("click", function () {
                        impPreview.Preview.PreviewJQ.ClosePreview();
                        jQuery(".jq-row-plus-container").hide();
                        impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
                        jQuery(".control-templates").show();
                        jQuery(".control-templates").addClass("control-active");
                        jQuery(".empty-layout-templates .row").removeClass("padding-root-elements");
                        jQuery(".empty-layout-templates").find(".ui-resizable-handle").hide();
                        jQuery(".empty-layout-templates .row").removeClass("design-row");
                        jQuery(".empty-layout-templates .column").addClass("design-column");
                        jQuery(".empty-layout-templates .root-elements").css("padding", "0");
                    });
                    //jQuery(".control-templates .close-button").click(function () {
                    //    jQuery(".column").removeClass("column-layout-border-yellow");
                    //    jQuery(".column").removeClass("column-layout-border-brown");
                    //});
                    jQuery(".action-button-layout-create").on("click", function () {
                        var layoutId = jQuery(".empty-layout-select").attr("layout-id");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (layoutId != undefined) {
                            var layout = undefined;
                            switch (layoutId) {
                                case "0":
                                    layout = LayoutJQ.layout;
                                    break;
                                case "1":
                                    layout = LayoutJQ.layout1;
                                    break;
                                case "2":
                                    layout = LayoutJQ.layout2;
                                    break;
                                case "3":
                                    layout = LayoutJQ.layout3;
                                    break;
                                case "4":
                                    layout = LayoutJQ.layout4;
                                    break;
                                case "5":
                                    layout = LayoutJQ.layout5;
                                    break;
                                case "6":
                                    layout = LayoutJQ.layout6;
                                    break;
                                case "7":
                                    layout = LayoutJQ.layout7;
                                    break;
                                case "8":
                                    layout = LayoutJQ.layout8;
                                    break;
                            }
                            if (layout != undefined) {
                                var anyJQ = new impAny.Page.AnyJQ("");
                                //jQuery(".column").removeClass("column-layout-border-yellow");
                                //jQuery(".column").removeClass("column-layout-border-brown");
                                var staticElement = "<span class=\"page-static-element-circle\"> </span>";
                                jQuery("page .root-elements").html("");
                                anyJQ.AddRow(jQuery(".jq-Header"), layout.header.cols, "", undefined, undefined);
                                jQuery(".jq-Header").prepend(staticElement);
                                var adjustColumnHeightMB = new impCss.CssClass.AdjustJQ();
                                adjustColumnHeightMB.height = 50;
                                anyJQ.AddRow(jQuery(".jq-MenuBar"), layout.menuBar.cols, "", undefined, adjustColumnHeightMB);
                                jQuery(".jq-MenuBar").prepend(staticElement);
                                var adjustColumnHeight = new impCss.CssClass.AdjustJQ();
                                adjustColumnHeight.height = 500;
                                anyJQ.AddRow(jQuery(".jq-Content"), layout.body.cols, "", undefined, adjustColumnHeight);
                                jQuery(".jq-Content").prepend(staticElement);
                                anyJQ.AddRow(jQuery(".jq-Footer"), layout.footer.cols, "", undefined, undefined);
                                jQuery(".jq-Footer").prepend(staticElement);
                                // escape key issue
                                //if (colorToChange % 2 == 0) {
                                //    jQuery("page .root-elements .column").addClass("column-layout-border-yellow");
                                //}
                                //else {
                                //    jQuery("page .root-elements .column").addClass("column-layout-border-brown");
                                //}
                                //colorToChange++;
                                errorHandler.ActionSuccess("Layout Created");
                                jQuery(this).closest(".control-page").hide();
                                var undoManager = new impUndoManager.Manager.UndoManager();
                                undoManager.PopUndo();
                                undoManager.PopUndo();
                                undoManager.PopUndo();
                                undoManager.PopUndo();
                                impControlCommon.ControlCommon.Code.DestroyResizable();
                                impControlCommon.ControlCommon.Code.Execute();
                                undoManager.BeforeOperation();
                            }
                            else {
                                errorHandler.ActionFail("Please try after some time.");
                            }
                        }
                        else {
                            errorHandler.ActionFail("Please select a layout.!");
                        }
                        jQuery(".jq-row-plus-container").hide();
                    });
                };
                LayoutJQ.prototype.Layout = function (layout) {
                    var templateNumber = 1;
                    var templateId = "template-" + layout.templateNumber;
                    var templateWrapper = jQuery(document.createElement("div"));
                    templateWrapper.addClass("empty-template-wrapper");
                    var template = jQuery(document.createElement("div"));
                    var dotTemplateId = ".template-" + layout.templateNumber;
                    ;
                    template.addClass("float-left");
                    template.addClass("empty-layout");
                    template.addClass(templateId);
                    template.attr("layout-id", layout.templateNumber + "");
                    templateWrapper.append(template);
                    jQuery(".empty-layout-templates").append(templateWrapper);
                    var commonId = "T" + layout.templateNumber;
                    var headerId = commonId + "Header";
                    var header = new impHeader.Page.HeaderJQ("", headerId);
                    header.rootWrapper = dotTemplateId;
                    header.scopeId = ".empty-layout-templates";
                    var menuBarId = commonId + "MenuBar";
                    var menuBar = new impMenuBar.Page.MenuBarJQ("", menuBarId);
                    menuBar.rootWrapper = dotTemplateId;
                    menuBar.scopeId = ".empty-layout-templates";
                    var bodyId = commonId + "Body";
                    var body = new impBody.Page.ContentJQ("", bodyId);
                    body.rootWrapper = dotTemplateId;
                    body.scopeId = ".empty-layout-templates";
                    var footerId = commonId + "Footer";
                    var footer = new impFooter.Page.FooterJQ("", footerId);
                    footer.rootWrapper = dotTemplateId;
                    footer.scopeId = ".empty-layout-templates";
                    var adjustRow = new impCss.CssClass.AdjustJQ();
                    var adjustColumn = new impCss.CssClass.AdjustJQ();
                    adjustRow.height = layout.header.height;
                    adjustColumn.height = layout.header.height;
                    header.AddRow(undefined, layout.header.cols, "", adjustRow, adjustColumn);
                    try {
                        header.GetColumn(1, 0).text("H");
                    }
                    catch (ex) {
                    }
                    adjustRow.height = layout.menuBar.height;
                    adjustColumn.height = layout.menuBar.height;
                    menuBar.AddRow(undefined, layout.menuBar.cols, "", adjustRow, adjustColumn);
                    try {
                        menuBar.GetColumn(1, 0).text("M");
                    }
                    catch (ex) {
                    }
                    adjustRow.height = layout.body.height;
                    adjustColumn.height = layout.body.height;
                    body.AddRow(undefined, layout.body.cols, "", adjustRow, adjustColumn);
                    try {
                        var column = body.GetColumn(1, 0);
                        column.text("B");
                    }
                    catch (ex) {
                    }
                    adjustRow.height = layout.footer.height;
                    adjustColumn.height = layout.footer.height;
                    footer.AddRow(undefined, layout.footer.cols, "", adjustRow, adjustColumn);
                    try {
                        var column = footer.GetColumn(1, 0);
                        column.text("F");
                    }
                    catch (ex) {
                    }
                };
                LayoutJQ.layout = {
                    templateNumber: 0,
                    header: {
                        height: 41,
                        cols: "col-sm-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout1 = {
                    templateNumber: 1,
                    header: {
                        height: 41,
                        cols: "col-sm-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-12 col-sm-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout2 = {
                    templateNumber: 2,
                    header: {
                        height: 41,
                        cols: "col-sm-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-12 col-sm-24 col-sm-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout3 = {
                    templateNumber: 3,
                    header: {
                        height: 41,
                        cols: "col-sm-12 col-sm-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout4 = {
                    templateNumber: 4,
                    header: {
                        height: 41,
                        cols: "col-sm-12 col-sm-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-12 col-sm-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout5 = {
                    templateNumber: 5,
                    header: {
                        height: 41,
                        cols: "col-sm-12 col-sm-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-12 col-sm-24 col-sm-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout6 = {
                    templateNumber: 6,
                    header: {
                        height: 41,
                        cols: "col-sm-12 col-sm-20 col-sm-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout7 = {
                    templateNumber: 7,
                    header: {
                        height: 41,
                        cols: "col-sm-12 col-sm-20 col-sm-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-12 col-sm-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                LayoutJQ.layout8 = {
                    templateNumber: 8,
                    header: {
                        height: 41,
                        cols: "col-sm-12 col-sm-20 col-sm-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-sm-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-sm-12 col-sm-24 col-sm-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-sm-48"
                    }
                };
                return LayoutJQ;
            })();
            Empty.LayoutJQ = LayoutJQ;
        })(Empty = Themes.Empty || (Themes.Empty = {}));
    })(Themes = exports.Themes || (exports.Themes = {}));
});
//# sourceMappingURL=EmptyLayoutJQ.js.map