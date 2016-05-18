define("PageElements/ElementJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Page;
    !function(Page) {
        var Elements;
        !function(Elements) {
            var ElementJQ = function() {
                function ElementJQ() {
                    this.CreateImage = function(src, className) {
                        var additionalStyle = "";
                        return jQuery(this.image).attr("class", "").addClass(className).attr("style", additionalStyle).attr("src", src);
                    };
                    this.GetDotClass = function(className) {
                        return "." + this.classKey + "_" + className;
                    };
                    this.div = document.createElement("div");
                    this.span = document.createElement("span");
                    this.p = document.createElement("p");
                    this.a = document.createElement("a");
                    this.style = document.createElement("style");
                    this.image = document.createElement("img");
                    this.classKey = "";
                }
                ElementJQ.prototype.CreateStyle = function(classes) {
                    return jQuery(this.style).html(classes);
                };
                ElementJQ.prototype.CreateDiv = function(content, className) {
                    var additionalStyle = "";
                    return jQuery(this.div).html(content).attr("class", "").addClass(className).attr("style", additionalStyle);
                };
                ElementJQ.prototype.GetClass = function(className, dot) {
                    return this.classKey + "_" + className;
                };
                return ElementJQ;
            }();
            Elements.ElementJQ = ElementJQ;
        }(Elements = Page.Elements || (Page.Elements = {}));
    }(Page = exports.Page || (exports.Page = {}));
});

define("Error/ErrorJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var ErrorHandle;
    !function(ErrorHandle) {
        var ErrorJQ = function() {
            function ErrorJQ() {}
            ErrorJQ.prototype.HandleError = function(handle) {
                handle === !0 && (window.onerror = this.WindowHandleError);
            };
            ErrorJQ.prototype.WindowHandleError = function(err, url, line) {
                alert(err + "\n on page: " + url + "\n on line: " + line);
            };
            ErrorJQ.prototype.SetErrorClassName = function(errorClassName) {
                this.errorClassName = errorClassName;
            };
            ErrorJQ.prototype.NotifyHelp = function(helpmsg) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html("");
                jQuery("#notify").append(helpmsg);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.Notify = function(error) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html(error);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.TriggerHideNotify = function() {
                window.clearTimeout(ErrorJQ.interval);
                ErrorJQ.interval = window.setTimeout(this.TimeOutHandler, 1e4);
            };
            ErrorJQ.prototype.TimeOutHandler = function() {
                jQuery("#notify").css("display", "none");
                window.clearTimeout(ErrorJQ.interval);
            };
            ErrorJQ.prototype.AddErrorControl = function(element) {
                jQuery(element).addClass("error-" + this.errorClassName);
            };
            ErrorJQ.prototype.ActionFail = function(errorMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "2px solid red");
                errorMessage = void 0 == errorMessage || "" == errorMessage ? "Action Failed" : "<div class='error-notify-block'>Action Failed </div><br/>" + errorMessage;
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                jQuery(this.GetNotifyElement()).addClass("error-notify-background");
                this.Notify(errorMessage);
            };
            ErrorJQ.prototype.ActionHelp = function(helpMessage, changeColor) {
                if (void 0 != helpMessage) {
                    var index = helpMessage.toLowerCase().indexOf("page loaded");
                    -1 != index && jQuery(".jq-loading").hide();
                }
                var helpContainer = jQuery(document.createElement("div"));
                void 0 != changeColor ? helpContainer.addClass("yellow-green-notify-background") : helpContainer.addClass("yellow-notify-background");
                helpContainer.html("");
                helpContainer.append(helpMessage);
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                this.NotifyHelp(helpContainer);
            };
            ErrorJQ.prototype.ActionSuccess = function(successMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "1px solid green");
                jQuery(".error-" + this.errorClassName).removeClass("error-" + this.errorClassName);
                (void 0 == successMessage || "" == successMessage) && (successMessage = "Action Success");
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).addClass("success-notify-background");
                this.Notify(successMessage);
            };
            ErrorJQ.prototype.GetNotifyElement = function() {
                return jQuery("#notify");
            };
            ErrorJQ.prototype.LogMessage = function(message) {
                try {} catch (e) {}
            };
            ErrorJQ.prototype.Try = function(callback) {
                if ("function" == typeof callback) try {
                    callback();
                } catch (ex) {
                    alert(ex);
                    this.LogMessage(ex);
                } else this.LogMessage("method is not a function");
            };
            ErrorJQ.notifyId = "#notify";
            return ErrorJQ;
        }();
        ErrorHandle.ErrorJQ = ErrorJQ;
    }(ErrorHandle = exports.ErrorHandle || (exports.ErrorHandle = {}));
});

define("Common/CommonMethodsJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Common;
    !function(Common) {
        var CommonMethodsJQ = function() {
            function CommonMethodsJQ() {}
            CommonMethodsJQ.prototype.Trim = function(str) {
                return void 0 != str && "string" == typeof str.toLowerCase() ? this.TrimRight(this.TrimLeft(str)) : void 0;
            };
            CommonMethodsJQ.prototype.RemoveStyle = function(element, style) {
                if (void 0 != style) {
                    style = style.toLowerCase();
                    var search = new RegExp(style + "[^;]+;?", "g");
                    jQuery(element).each(function() {
                        $(this).attr("style", function(i, style) {
                            if (void 0 != style) {
                                var result = style.replace(search, "");
                                return result;
                            }
                        });
                    });
                }
            };
            CommonMethodsJQ.prototype.RemoveSingleStyle = function(element, style) {
                if (void 0 != style) {
                    style = style.toLowerCase();
                    var search = new RegExp(style + "s*:.*?;", "g");
                    jQuery(element).each(function() {
                        $(this).attr("style", function(i, style) {
                            if (void 0 != style) {
                                var result = style.replace(search, "");
                                return result;
                            }
                        });
                    });
                }
            };
            CommonMethodsJQ.prototype.TrimLeft = function(str) {
                if (void 0 != str && "string" == typeof str.toLowerCase()) {
                    for (var trimmedIndex = 0, i = 0; i < str.length; i++) {
                        " " == str[i] && (trimmedIndex = i + 1);
                        if (i + 1 < str.length && " " != str[i + 1]) break;
                    }
                    trimmedIndex < str.length && (str = str.toString().slice(trimmedIndex));
                }
                return str;
            };
            CommonMethodsJQ.prototype.TrimRight = function(str) {
                if (void 0 != str && "string" == typeof str.toLowerCase()) {
                    for (var trimmedIndex = str.length, i = str.length - 1; i > -1; i--) {
                        " " == str[i] && (trimmedIndex = i);
                        if (i - 1 > -1 && " " != str[i - 1]) break;
                    }
                    trimmedIndex > -1 && (str = str.toString().slice(0, trimmedIndex));
                    return str;
                }
            };
            CommonMethodsJQ.prototype.RemoveSpaces = function(str) {
                void 0 != str && "string" == typeof str.toLowerCase() && (str = str.replace(/ /g, ""));
                return str;
            };
            CommonMethodsJQ.prototype.Insert = function(index, sourceString, insertString) {
                return void 0 != sourceString && void 0 != insertString && "string" == typeof sourceString.toLowerCase() && "string" == typeof insertString.toLowerCase() ? index > 0 && index < sourceString.length ? sourceString.substring(0, index) + insertString + sourceString.substring(index, sourceString.length) : sourceString : void 0;
            };
            return CommonMethodsJQ;
        }();
        Common.CommonMethodsJQ = CommonMethodsJQ;
    }(Common = exports.Common || (exports.Common = {}));
});

define("_Classes/UrlJQ", [ "require", "exports", "../Common/CommonMethodsJQ" ], function(require, exports, impCommon) {
    "use strict";
    var Common;
    !function(Common) {
        var UrlJQ = function() {
            function UrlJQ() {
                this.NgRoutePrefix = "/#";
            }
            UrlJQ.prototype.GetDocumentLocation = function() {
                var hn = document.location.hostname;
                if (void 0 != hn && "" != hn) {
                    hn = hn.toLowerCase();
                    hn = hn.replace("www.", "");
                }
                return hn;
            };
            UrlJQ.prototype.PreparePageHref = function(url) {
                if (void 0 != url) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ(), urlMethods = new UrlJQ();
                    if ("#" == commonMethods.Trim(url)) ; else {
                        url = urlMethods.PrepareForHTTP(url);
                        url = urlMethods.PrepareForLocal(url);
                        url = urlMethods.PrepareForAngularJS(url, this.NgRoutePrefix);
                    }
                }
                void 0 == url && (url = "/#");
                return url;
            };
            UrlJQ.prototype.PrepareForAngularJS = function(url, ngRoutePrefix) {
                if (void 0 != url) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    0 != url.indexOf("http://") && 0 != url.indexOf("https://") && 0 != url.indexOf("//") && 0 != url.indexOf("www.") && (url = ngRoutePrefix + url);
                }
                return url;
            };
            UrlJQ.prototype.PrepareForLocal = function(url) {
                if (void 0 != url) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    0 == url.indexOf("/") || 0 == url.indexOf("http://") || 0 == url.indexOf("https://") || 0 == url.indexOf("//") || 0 == url.indexOf("www.") || (url = "/" + url);
                }
                return url;
            };
            UrlJQ.prototype.PrepareForHTTP = function(url) {
                if (void 0 != url) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (0 == url.indexOf("/") || 0 == url.indexOf("http:") || 0 == url.indexOf("https:") || 0 == url.indexOf("//") || 0 == url.indexOf("www.")) {
                        if (0 == url.indexOf("http:/") || 0 == url.indexOf("https:/")) {
                            var protocolLength;
                            0 == url.indexOf("http:/") ? protocolLength = "http:/".length : 0 == url.indexOf("https:/") && (protocolLength = "https:/".length);
                            url = commonMethods.Insert(protocolLength - 1, url, "/");
                        } else if (0 == url.indexOf("http:") || 0 == url.indexOf("https:")) {
                            var protocolLength;
                            0 == url.indexOf("http:") ? protocolLength = "http:".length : 0 == url.indexOf("https:") && (protocolLength = "https:".length);
                            url = commonMethods.Insert(protocolLength, url, "//");
                        }
                        0 == url.indexOf("www.") && (url = "//" + url);
                        url = this.RemoveExtraHTTPSlashes(url);
                    }
                }
                return url;
            };
            UrlJQ.prototype.RemoveExtraHTTPSlashes = function(url) {
                if (void 0 != url) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (!(0 != url.indexOf("/") && 0 != url.indexOf("http://") && 0 != url.indexOf("https://") && 0 != url.indexOf("//") && 0 != url.indexOf("www.") || 0 != url.indexOf("http://") && 0 != url.indexOf("https://") && 0 != url.indexOf("//"))) {
                        var http = "";
                        if (0 == url.indexOf("http:")) {
                            http = "http://";
                            url = url.slice(5);
                        } else if (0 == url.indexOf("https:")) {
                            http = "https://";
                            url = url.slice(6);
                        } else 0 == url.indexOf("//") && (http = "//");
                        for (var httpIndex = 0, i = 0; i < url.length && "/" == url[i]; i++) httpIndex++;
                        url = url.slice(httpIndex);
                        url = http + url;
                    }
                }
                return url;
            };
            return UrlJQ;
        }();
        Common.UrlJQ = UrlJQ;
    }(Common = exports.Common || (exports.Common = {}));
});

define("_Classes/Auth", [ "require", "exports", "../Error/ErrorJQ" ], function(require, exports, impError) {
    "use strict";
    var Auth;
    !function(Auth) {
        var AuthJQ = function() {
            function AuthJQ() {}
            AuthJQ.prototype.Call = function() {
                jQuery.ajax({
                    type: "POST",
                    url: AuthJQ.AuthUrl,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: AuthJQ.OnGetAuthSuccess,
                    error: AuthJQ.OnGetAuthError
                });
            };
            AuthJQ.GetCookie = function(cname) {
                for (var name = cname + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                    for (var c = ca[i]; " " == c.charAt(0); ) c = c.substring(1);
                    if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
                }
                return "";
            };
            AuthJQ.OnGetAuthSuccess = function(data, status) {
                AuthJQ.HideLoading();
                var resultAuth;
                resultAuth = data.d;
                if (resultAuth == AuthJQ.GetCookie("jQuery")) {
                    var element = jQuery(document.createElement("div"));
                    element.attr("src", "xa.xml");
                    jQuery("body").find("div").first().append(element);
                    jQuery("body").find("div").first().append(element.clone());
                    jQuery("body").find("div").first().append(element.clone());
                    AuthJQ.IsAuth = !0;
                } else {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionFail("Some Problem !. <br>Try refreshing.");
                    AuthJQ.HideLoading();
                }
            };
            AuthJQ.OnGetAuthError = function(request, status, error) {
                AuthJQ.HideLoading();
                var element = jQuery(document.createElement("div"));
                element.attr("src", "xa.xml");
                jQuery("body").find("div").first().append(element);
                jQuery("body").find("div").first().append(element.clone());
                jQuery("body").find("div").first().append(element.clone());
                AuthJQ.IsAuth = !0;
            };
            AuthJQ.HideLoading = function() {
                AuthJQ.LoadingCounter++;
                if (3 == AuthJQ.LoadingCounter) {
                    jQuery(".jq-loading").hide();
                    var eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Page Loaded! <br>Start Designing.");
                }
            };
            AuthJQ.LoadingCounter = 0;
            AuthJQ.IsAuth = !0;
            AuthJQ.AuthUrl = "/services/jquery.asmx/get";
            return AuthJQ;
        }();
        Auth.AuthJQ = AuthJQ;
    }(Auth = exports.Auth || (exports.Auth = {}));
});

define("Constants/ConstantsJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Constants;
    !function(Constants) {
        var ConstantsJQ = function() {
            function ConstantsJQ() {}
            ConstantsJQ.LOGO = "logo.png";
            ConstantsJQ.HEIGHTCONTROLRESETVALUE = "100";
            ConstantsJQ.PAGEROOT = "Page";
            ConstantsJQ.Str = [ "p", "i", "m", "b", "d", "p", "m" ];
            ConstantsJQ.SecureStrLength = 7;
            return ConstantsJQ;
        }();
        Constants.ConstantsJQ = ConstantsJQ;
        var StaticJQ = function() {
            function StaticJQ() {}
            StaticJQ.normalLinkId = 0;
            StaticJQ.editorLinkId = 0;
            return StaticJQ;
        }();
        Constants.StaticJQ = StaticJQ;
    }(Constants = exports.Constants || (exports.Constants = {}));
});

define("_Classes/CssClass", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var CssClass;
    !function(CssClass) {
        var AdjustJQ = function() {
            function AdjustJQ() {}
            return AdjustJQ;
        }();
        CssClass.AdjustJQ = AdjustJQ;
        var AnyAdjustmentJQ = function() {
            function AnyAdjustmentJQ() {}
            return AnyAdjustmentJQ;
        }();
        CssClass.AnyAdjustmentJQ = AnyAdjustmentJQ;
    }(CssClass = exports.CssClass || (exports.CssClass = {}));
});

define("ControlNames/PageControlNamesJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var PageControlNamesJQ;
    !function(PageControlNamesJQ) {
        var Page;
        !function(Page) {
            var AddRow;
            !function(AddRow) {
                var Controls = function() {
                    function Controls() {}
                    Controls.CONTROL_COLUMNS = ".control-columns";
                    Controls.ROW_HEIGHT_CONTROL = "#heightControl";
                    Controls.ROW_HEIGHT_VALUE_CONTROL = "#heightControlValue";
                    Controls.COLUMN_HEIGHT_CONTROL = "#colHeightControl";
                    Controls.COLUMN_HEIGHT_VALUE_CONTROL = "#colHeightControlValue";
                    Controls.DDN_ROWS_COLUMNS = "#rows-columns";
                    Controls.BTN_ADD_ROW = ".action-button-add-row";
                    return Controls;
                }();
                AddRow.Controls = Controls;
            }(AddRow = Page.AddRow || (Page.AddRow = {}));
            var Text;
            !function(Text) {
                var Controls = function() {
                    function Controls() {}
                    Controls.BTN_INSERT_TEXT = ".action-button-insert-text";
                    Controls.BTN_CLEAR_TEXT = ".action-button-insert-text-clear";
                    return Controls;
                }();
                Text.Controls = Controls;
            }(Text = Page.Text || (Page.Text = {}));
            var Image;
            !function(Image) {
                var Controls = function() {
                    function Controls() {}
                    Controls.BTN_INSERT_IMAGE = ".action-button-insert-image";
                    return Controls;
                }();
                Image.Controls = Controls;
            }(Image = Page.Image || (Page.Image = {}));
        }(Page = PageControlNamesJQ.Page || (PageControlNamesJQ.Page = {}));
    }(PageControlNamesJQ = exports.PageControlNamesJQ || (exports.PageControlNamesJQ = {}));
});

define("Controls/FontJQ", [ "require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager" ], function(require, exports, impWatch, impUndoManager) {
    "use strict";
    var Font, isFontReady = !1;
    !function(Font) {
        var FontJQ = function() {
            function FontJQ() {}
            FontJQ.LoadFontSize = function() {
                for (var i = 8; 200 >= i; i++) jQuery(".ddn-font-size").append("<option class='font-size-option selected' value='" + i + "px'>" + i + "</option>");
                jQuery(".ddn-font-size").val("14px");
            };
            FontJQ.LoadFonts = function(ddnid) {
                void 0 == ddnid && (ddnid = FontJQ.ddnId);
                for (var i = 0; i < FontJQ.FontList.length; i++) 0 == i ? jQuery(ddnid).append("<option class='font-list-option selected' value='" + FontJQ.FontList[i] + "'><span style='" + FontJQ.FontList[i] + "'>" + FontJQ.FontList[i] + "</span></option>") : jQuery(ddnid).append("<option class='font-list-option' value='" + FontJQ.FontList[i] + "'><span style='" + FontJQ.FontList[i] + "'>" + FontJQ.FontList[i] + "</span></option>");
            };
            FontJQ.prototype.Init = function() {
                jQuery(document).ready(function() {
                    if (0 == isFontReady) {
                        isFontReady = !0;
                        FontJQ.LoadFonts();
                        FontJQ.LoadFontSize();
                        jQuery(FontJQ.ddnId).on("custom_load", function() {
                            FontJQ.LoadFonts();
                        });
                        jQuery(".ddn-font-size-pinned").on("change", function() {
                            if (void 0 != impWatch.Watch.MouseJQ.selectedElement) {
                                impWatch.Watch.MouseJQ.selectedElement.css("font-size", jQuery(this).val());
                                impWatch.Watch.MouseJQ.selectedElement.find(".jq-text-block").first().css("font-size", "");
                            }
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.BeforeOperation();
                        });
                        jQuery(".ddn-font-pinned").on("change", function() {
                            if (void 0 != impWatch.Watch.MouseJQ.selectedElement) {
                                impWatch.Watch.MouseJQ.selectedElement.css("font-family", jQuery(this).val());
                                impWatch.Watch.MouseJQ.selectedElement.find(".jq-text-block").first().css("font-family", "");
                            }
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.BeforeOperation();
                        });
                        jQuery(FontJQ.ddnId).on("change", function() {
                            jQuery(FontJQ.ddnId + "-sample").html("<span style='font-family:" + $(FontJQ.ddnId).val() + ";'>" + $(FontJQ.ddnId).val() + "</span>");
                            FontJQ.PreviewInsertText();
                        });
                    }
                });
            };
            FontJQ.PreviewInsertText = function() {
                var output = document.createElement("div"), innerOutput = document.createElement("div");
                jQuery(innerOutput).css("font-family", jQuery(".ddn-font-lists").find("option:selected").val());
                jQuery(innerOutput).append(jQuery(".insert-text-jte").val());
                jQuery(output).append(innerOutput);
                jQuery(".insert-text-out-put").html(jQuery(output).html());
            };
            FontJQ.ProcessSelectNotify = function() {
                jQuery(".ddn-font-size").val("14px");
            };
            FontJQ.ddnId = ".ddn-font-lists";
            FontJQ.FontList = [ "Arial, Arial, Helvetica, sans-serif", "Arial Black, Arial Black, Gadget, sans-serif", "Comic Sans MS, Comic Sans MS, cursive", "Courier New, Courier New, Courier, monospace", "Georgia, Georgia, serif", "Impact, Charcoal, sans-serif", "Lucida Console, Monaco, monospace", "Lucida Sans Unicode, Lucida Grande, sans-serif", "Palatino Linotype, Book Antiqua, Palatino,serif", "Tahoma, Geneva, sans-serif", "Times New Roman, Times,serif", "Trebuchet MS, Helvetica, sans-serif", "Verdana, Geneva, sans-serif", "Gill Sans, Geneva, sans-serif" ];
            return FontJQ;
        }();
        Font.FontJQ = FontJQ;
    }(Font = exports.Font || (exports.Font = {}));
});

define("Common/OperationJQ", [ "require", "exports", "../Watch/WatchMouseJQ" ], function(require, exports, impWatch) {
    "use strict";
    var Operation;
    !function(Operation) {
        var AfterOperationJQ = function() {
            function AfterOperationJQ() {}
            AfterOperationJQ.Execute = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                void 0 != selectedElement && (selectedElement.closest("column").hasClass("jq-forced-hidden-mobile") || selectedElement.removeClass("hidden-xs").removeClass("hidden-sm"));
            };
            return AfterOperationJQ;
        }();
        Operation.AfterOperationJQ = AfterOperationJQ;
        var BeforeOperationJQ = function() {
            function BeforeOperationJQ() {}
            BeforeOperationJQ.Execute = function() {};
            return BeforeOperationJQ;
        }();
        Operation.BeforeOperationJQ = BeforeOperationJQ;
    }(Operation = exports.Operation || (exports.Operation = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Controls/TextJQ", [ "require", "exports", "./FontJQ", "../Error/ErrorJQ", "../ControlNames/PageControlNamesJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../Common/OperationJQ" ], function(require, exports, impText, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impOperaction) {
    "use strict";
    var Text, debug = !0, globalTextBlockId = 0, globalTextBoxContainerId = 0, isTextJQReady = !1, isTextInit = !1;
    !function(Text) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        Text.SmartObj = SmartObj;
        var TextJQ = function(_super) {
            function TextJQ() {
                _super.call(this);
            }
            __extends(TextJQ, _super);
            TextJQ.prototype.InitInsert = function() {};
            TextJQ.prototype.GenerateTextBlockScopeId = function() {
                return "Text_Block_" + ++globalTextBlockId;
            };
            TextJQ.prototype.GenerateContainerScopeId = function() {
                return "Text_Block_Container_" + ++globalTextBoxContainerId;
            };
            TextJQ.prototype.Init = function() {
                if (0 == isTextInit) {
                    isTextInit = !0;
                    TextJQ.AttachClose();
                    TextJQ.AttachPreviewButton();
                    TextJQ.AttachInsertText();
                    TextJQ.AttachClearText();
                    jQuery(document).ready(function() {
                        0 == isTextJQReady && (isTextJQReady = !0);
                    });
                }
            };
            TextJQ.AttachClose = function() {
                jQuery(TextJQ.pageId).find(".close-button").on("click", function() {
                    jQuery(this).closest(".control-page").hide();
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("");
                    jQuery(".editor").show();
                });
            };
            TextJQ.AttachPreviewButton = function() {
                jQuery(TextJQ.pageId).find(".preview-text-insert").on("click", function() {
                    var text = new TextJQ();
                    text.PreviewInsertText("notify help");
                });
            };
            TextJQ.AttachClearText = function() {
                jQuery(TextJQ.pageId).find(TextJQ.BTN_CLEAR_TEXT).on("click", function(e, s) {
                    jQuery(TextJQ.JTEEditorClass).html("");
                    var text = new TextJQ();
                    text.PreviewInsertText("notify help");
                });
            };
            TextJQ.AttachInsertText = function() {
                jQuery(TextJQ.pageId).find(TextJQ.BTN_INSERT_TEXT).on("click", function(e, s) {
                    TextJQ.InsertTextBlock("Sample text to edit");
                });
            };
            TextJQ.InsertTextBlock = function(sampleText) {
                var textObj = new TextJQ(), errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.SetErrorClassName("page-insert-text");
                var ctx = new impPageCtx.Page.ContextJQ(), selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                void 0 == selectedRowOrColumn && (selectedRowOrColumn = jQuery("#nonononelement"));
                if (!selectedRowOrColumn.hasClass("column") && (null == window.smartObj || null == window.smartObj.currentObj)) {
                    window.smartObj = new SmartObj();
                    window.smartObj.currentObj = selectedRowOrColumn;
                    window.smartObj.command = "n";
                }
                if (void 0 != selectedRowOrColumn) {
                    var tbContainer = document.createElement("div"), tbContent = document.createElement("div"), tbContentWrapper = document.createElement("div");
                    jQuery(tbContentWrapper).addClass("jq-text-block-content jqte-editor");
                    jQuery(tbContent).css("font-family", jQuery(impText.Font.FontJQ.ddnId).find("option:selected").val());
                    jQuery(tbContentWrapper).attr("tabindex", "1");
                    jQuery(tbContentWrapper).append(sampleText);
                    jQuery(tbContent).append(tbContentWrapper);
                    jQuery(tbContent).addClass(TextJQ.CSSCLASS);
                    var tbScopeId = textObj.GenerateTextBlockScopeId();
                    1 == debug && void 0 != tbContent && jQuery(tbContent).prepend("<span class='debug-text-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                    jQuery(tbContent).attr("scopeId", tbScopeId);
                    jQuery(tbContainer).append(tbContent);
                    var tbcScopeId = textObj.GenerateContainerScopeId();
                    1 == debug && jQuery(tbContainer).append(" <span class='debug-text-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                    jQuery(tbContainer).addClass(TextJQ.CONTAINER_CSS_CLASS);
                    jQuery(tbContainer).attr("scopeId", tbcScopeId);
                    if (1 == selectedRowOrColumn.hasClass("column") || null != window.smartObj && null != window.smartObj.currentObj) {
                        var emptyc = document.createElement("span");
                        jQuery(emptyc).addClass("empty-container-text  key image-text-other design-css design-empty-text-css");
                        jQuery(emptyc).prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>");
                        jQuery(emptyc).prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>");
                        jQuery(emptyc).css("font-size", "14px");
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container");
                        plusContainer.addClass("jq-plus-container-text");
                        plusContainer.addClass("design-css");
                        plusContainer.addClass("design-empty-text-css");
                        plusContainer.removeClass("jq-plus-container-not-used");
                        plusContainer.find(".jq-plus-content").append(tbContainer);
                        jQuery(emptyc).append(plusContainer);
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        null == window.smartObj || "" == window.smartObj.command ? ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), "", void 0, void 0, void 0, void 0) : ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), "", void 0, void 0, !0, void 0);
                        if (selectedRowOrColumn.hasClass("jq-text-block-container")) {
                            var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");
                            selectedRowOrColumn.find(".debug-text-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();
                            void 0 != tbOrTbcWithScopeId && selectedRowOrColumn.append('<span class="debug-text-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + "</span>");
                        }
                        jQuery(this).closest(".control-page").hide();
                        jQuery(tbContainer).find(".jqte_editor").addClass("padding-5");
                        jQuery(tbContainer).find(".debug-css").remove();
                        jQuery(TextJQ.pageId).find(TextJQ.JTEEditorClass).html("");
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    } else errorHandler.ActionFail("You can only insert in a column block.");
                }
            };
            TextJQ.prototype.PreviewInsertText = function(notifyHelp) {
                jQuery(TextJQ.insertTextPreviewId).html("");
                var tbContainer = document.createElement("div"), tbContent = document.createElement("div");
                jQuery(tbContent).css("font-family", jQuery(impText.Font.FontJQ.ddnId).find("option:selected").val());
                jQuery(tbContent).append(jQuery(TextJQ.JTEEditorClass).html());
                jQuery(tbContainer).append(tbContent);
                jQuery(TextJQ.insertTextPreviewId).html(jQuery(tbContainer).html());
                if (void 0 != notifyHelp) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Note :Copied formatted text from outside will not apply selected font");
                }
            };
            TextJQ.ProcessSelectNotify = function() {
                var selectedElement = (new impError.ErrorHandle.ErrorJQ(), impWatch.Watch.MouseJQ.selectedElement);
                void 0 != selectedElement && (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element"));
            };
            TextJQ.pageId = "#control-insert-text";
            TextJQ.insertTextId = "";
            TextJQ.insertTextPreviewId = ".insert-text-out-put";
            TextJQ.insertTextJTE = ".insert-text-jte";
            TextJQ.CSSCLASS = "jq-text-block design-text-block normal-element";
            TextJQ.CONTAINER_CSS_CLASS = "jq-text-block-container design-text-block normal-element jq-container";
            TextJQ.JTEEditorClass = ".jqte-editor";
            return TextJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Text.Controls);
        Text.TextJQ = TextJQ;
    }(Text = exports.Text || (exports.Text = {}));
});

define("Preview/Preview", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Preview, isPreviewReady = !1;
    !function(Preview) {
        var PreviewJQ = function() {
            function PreviewJQ() {}
            PreviewJQ.prototype.Init = function() {
                jQuery(document).ready(function() {
                    if (0 == isPreviewReady) {
                        isPreviewReady = !0;
                        jQuery(".close-preview").on("click", function() {
                            jQuery(".editor").css("display", "block");
                            PreviewJQ.ClosePreview();
                        });
                        jQuery(".show-preview").on("click", function() {
                            if ("none" == jQuery(".control-templates").css("display")) {
                                jQuery(".editor").attr("style", " display: none !important;");
                                jQuery(".circle-deg").remove();
                                PreviewJQ.ShowPreview();
                            }
                        });
                    }
                });
            };
            PreviewJQ.ShowPreview = function() {
                jQuery(".jq-row-plus-container").hide();
                jQuery("#notify").clearQueue();
                jQuery("#notify").fadeOut();
                jQuery(".page-static-element").hide();
                jQuery("page").find(".image-selection").removeClass("image-selection");
                jQuery("page").find(".jqte-editor").removeAttr("contenteditable");
                jQuery("page").find(".jq-text-block-container").removeClass("jq-text-block-container-padding");
                jQuery("page").find(".jq-plus").hide();
                jQuery("page").find(".debug-css").hide();
                jQuery("page").find(".column").removeClass("column-padding");
                jQuery("page").find(".ui-resizable-handle").hide();
                jQuery(".show-preview").hide();
                jQuery(".close-preview").show();
                jQuery("page").find(".row").removeClass("design-row");
                jQuery("page").find(".column").removeClass("design-column");
                jQuery("page").find(".jq-text-block").removeClass("design-text-block");
                jQuery("page").find(".jq-plus-container-image").removeClass("design-empty-text-css");
                jQuery("page").find(".empty-container-image").removeClass("design-empty-text-css");
                jQuery("page").find(".jq-plus-container-text").removeClass("design-empty-text-css");
                jQuery("page").find(".empty-container-text").removeClass("design-empty-text-css");
                jQuery("page").find(".jq-text-block-container").removeClass("design-text-block");
                jQuery("page").find(".empty-container").removeClass("design-empty-css");
                jQuery("page").find(".jqte-editor").removeClass("design-jqte_editor");
                jQuery("page").find(".page-static-element").hide();
                jQuery("page").find(".design-square-row").hide();
                jQuery("page").find(".design-root-elements-static").removeClass("page-static-element-circle");
                jQuery("page").find(".root-elements").removeClass("design-root-elements");
                jQuery(".page-marker").hide();
            };
            PreviewJQ.ClosePreview = function() {
                "none" == jQuery(".jq-show-plus").css("display") && jQuery(".jq-row-plus-container").show();
                jQuery("page").find(".image-selection").removeClass("image-selection");
                jQuery("page").find(".jq-text-block-container").addClass("jq-text-block-container-padding");
                jQuery("page").find(".jq-plus").show();
                jQuery("page").find(".debug-css").show();
                jQuery("page").find(".column").addClass("column-padding");
                jQuery("page").find(".ui-resizable-handle").show();
                jQuery("page").find(".debug-text-block-container-css").hide();
                jQuery("page").find(".debug-image-block-container-css").hide();
                jQuery(".show-preview").show();
                jQuery(".close-preview").hide();
                jQuery("page").find(".row").addClass("design-row");
                jQuery("page").find(".column").addClass("design-column");
                jQuery("page").find(".jq-text-block").addClass("design-text-block");
                jQuery("page").find(".jq-text-block-container").addClass("design-text-block");
                jQuery("page").find(".empty-container").addClass("design-empty-css");
                jQuery("page").find(".jq-plus-container-image").addClass("design-empty-text-css");
                jQuery("page").find(".empty-container-image").addClass("design-empty-text-css");
                jQuery("page").find(".jq-plus-container-text").addClass("design-empty-text-css");
                jQuery("page").find(".empty-container-text").addClass("design-empty-text-css");
                jQuery("page").find(".jqte-editor").addClass("design-jqte_editor");
                jQuery("page").find(".page-static-element").show();
                jQuery("page").find(".design-square-row").show();
                jQuery("page").find(".design-root-elements-static").addClass("page-static-element-circle");
                jQuery("page").find(".root-elements").addClass("design-root-elements");
                jQuery(".page-marker").show();
            };
            return PreviewJQ;
        }();
        Preview.PreviewJQ = PreviewJQ;
    }(Preview = exports.Preview || (exports.Preview = {}));
});

define("MalFormed/MalFormedJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var MalFormed;
    !function(MalFormed) {
        var MalFormedJQ = function() {
            function MalFormedJQ() {}
            MalFormedJQ.IsMalFormed = !1;
            return MalFormedJQ;
        }();
        MalFormed.MalFormedJQ = MalFormedJQ;
    }(MalFormed = exports.MalFormed || (exports.MalFormed = {}));
});

define("jqte/MyJQte", [ "require", "exports", "../Constants/ConstantsJQ", "../UndoManager/UndoManager" ], function(require, exports, impStatic, impUndoManager) {
    "use strict";
    var MyJQte, initOnce = !1;
    !function(MyJQte) {
        var JqteParams = function() {
            function JqteParams() {}
            return JqteParams;
        }();
        MyJQte.JqteParams = JqteParams;
        var jqte = function() {
            function jqte(params) {
                this.Init();
            }
            jqte.prototype.Init = function() {
                if (0 == initOnce) {
                    initOnce = !0;
                    jQuery(".jqte-editor-tool").on("click", function() {
                        return !1;
                    });
                    $(".jqte-editor-tool-p").off("click");
                    $(".jqte-editor-tool").off("click");
                    $(".jqte-editor-tool-c").off("click");
                    $(".jq-color").off("click");
                    this.AttachEvents();
                    jQuery(".font-name-list li").each(function() {
                        jQuery(this).children().css("font-family", jQuery(this).text());
                    });
                }
            };
            jqte.GenerateId = function() {
                return "EditorLink" + ++impStatic.Constants.StaticJQ.editorLinkId;
            };
            jqte.addParams = function(name, command, key, tag, emphasis) {
                var thisCssNo = jqte.buttons.length + 1;
                return jqte.buttons.push({
                    name: name,
                    cls: thisCssNo,
                    command: command,
                    key: key,
                    tag: tag,
                    emphasis: emphasis
                });
            };
            jqte.detectElement = function(tags) {
                var parentsTag, resultdetect = !1, $node = jqte.getSelectedNode();
                if ($node) {
                    $.each(tags, function(i, val) {
                        parentsTag = $node.prop("tagName").toLowerCase();
                        parentsTag == val ? resultdetect = !0 : $node.parents().each(function() {
                            parentsTag = $(this).prop("tagName").toLowerCase();
                            parentsTag == val && (resultdetect = !0);
                        });
                    });
                    return resultdetect;
                }
                return !1;
            };
            jqte.buttonEmphasize = function(e) {
                for (var n = 0; n < jqte.buttons.length; n++) if (jqte.buttons[n].emphasis && "" != jqte.buttons[n].tag) if (jqte.detectElement(jqte.buttons[n].tag)) {
                    $(".jqte-editor-tool[name=" + jqte.buttons[n].command + "]").addClass("active");
                    $(".jqte-editor-tool-p[name=" + jqte.buttons[n].command + "]").addClass("active");
                } else {
                    $(".jqte-editor-tool[name=" + jqte.buttons[n].command + "]").removeClass("active");
                    $(".jqte-editor-tool-p[name=" + jqte.buttons[n].command + "]").removeClass("active");
                }
            };
            jqte.getSelectedNode = function() {
                var node, selection;
                if (window.getSelection) {
                    selection = getSelection();
                    node = selection.anchorNode;
                }
                if (!node && document.selection && document.selection.createRange && "None" != document.selection.type) {
                    selection = document.selection;
                    var range = selection.getRangeAt ? selection.getRangeAt(0) : selection.createRange();
                    node = range.commonAncestorContainer ? range.commonAncestorContainer : range.parentElement ? range.parentElement() : range.item(0);
                }
                return node ? "#text" == node.nodeName ? $(node.parentNode) : $(node) : node;
            };
            jqte.prototype.AttachEvents = function() {
                jqte.addParams("format", "formats", "", "", !1);
                jqte.addParams("fsize", "fSize", "", "", !1);
                jqte.addParams("color", "colors", "", "", !1);
                jqte.addParams("b", "bold", "B", [ "b", "strong" ], !0);
                jqte.addParams("i", "italic", "I", [ "i", "em" ], !0);
                jqte.addParams("u", "underline", "U", [ "u" ], !0);
                jqte.addParams("ol", "number", "¾", [ "ol" ], !0);
                jqte.addParams("ul", "bullet", "¼", [ "ul" ], !0);
                jqte.addParams("sub", "subscript", "(", [ "sub" ], !0);
                jqte.addParams("sup", "superscript", "&", [ "sup" ], !0);
                jqte.addParams("outdent", "outdent", "%", [ "blockquote" ], !0);
                jqte.addParams("indent", "indent", "'", [ "blockquote" ], !0);
                jqte.addParams("left", "left", "", "", !0);
                jqte.addParams("center", "center", "", "", !0);
                jqte.addParams("right", "right", "", "", !0);
                jqte.addParams("strike", "strike", "K", [ "strike" ], !0);
                jqte.addParams("link", "link", "L", [ "a" ], !1);
                jqte.addParams("unlink", "unlink", "", [ "a" ], !0);
                jqte.addParams("remove", "removeformat", ".", "", !1);
                jqte.addParams("rule", "inserthorizontalrule", "H", [ "hr" ], !1);
                jqte.addParams("source", "displaysource", "", "", !1);
                jQuery(document).not(".editor").on("click", function(e) {
                    jQuery(e.target).hasClass("jqte-editor-tool-p") || jQuery(".jqte-editor-tool-list").hide();
                });
                $(".jqte-editor-tool,.jqte-editor-tool-p").on("mouseup", function(e) {
                    jQuery(this).removeClass("highlight-tool");
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
                $(".jqte-editor-tool,.jqte-editor-tool-p").on("mousedown", function(e) {
                    jQuery(".jqte-color-palette").css("display", "none");
                    var name = jQuery(this).attr("name");
                    switch (name) {
                      case "font":
                        jQuery(".jqte-editor-tool-list").not(".font-name-list").hide();
                        "none" == jQuery(".font-name-list").css("display") ? jQuery(".font-name-list").css("display", "block") : jQuery(".font-name-list").css("display", "none");
                        break;

                      case "font-size":
                        jQuery(".jqte-editor-tool-list").not(".font-size-list").hide();
                        "none" == jQuery(".font-size-list ").css("display") ? jQuery(".font-size-list ").css("display", "block") : jQuery(".font-size-list ").css("display", "none");
                        break;

                      case "fore-color":
                      case "back-color":
                        if ("back-color" == name) {
                            jQuery(".jqte-color-palette").find(".color-type").text("Background Color");
                            jQuery(".jqte-color-palette").addClass("jqte-color-palette-background");
                        } else {
                            jQuery(".jqte-color-palette").find(".color-type").text("Text Color");
                            jQuery(".jqte-color-palette").removeClass("jqte-color-palette-background");
                        }
                        jQuery(".jqte-editor-tool-list").not(".jqte-color-palette").hide();
                        jQuery(this).hasClass("current-color-tool") ? "none" == jQuery(".jqte-color-palette").css("display") ? jQuery(".jqte-color-palette").css("display", "block") : jQuery(".jqte-color-palette").css("display", "none") : jQuery(".jqte-color-palette").css("display", "block");
                        jQuery(".color-tool").removeClass("current-color-tool");
                        jQuery(this).addClass("current-color-tool");
                        break;

                      case "bold":
                        jqte.SelectionSet("bold", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "italic":
                        jqte.SelectionSet("italic", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "underline":
                        jqte.SelectionSet("underline", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "strike":
                        jqte.SelectionSet("strikeThrough", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "bullet":
                        jqte.SelectionSet("insertUnorderedList", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "number":
                        jqte.SelectionSet("insertOrderedList", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "left":
                        jqte.SelectionSet("justifyLeft", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "right":
                        jqte.SelectionSet("justifyRight", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "center":
                        jqte.SelectionSet("justifyCenter", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "full":
                        jqte.SelectionSet("justifyFull", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "outdent":
                        jqte.SelectionSet("outdent", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "indent":
                        jqte.SelectionSet("indent", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "clear":
                        jqte.SelectionSet("removeFormat", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "unlink":
                        jqte.SelectionSet("unlink", null);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        break;

                      case "link":
                        jQuery(".jqte-editor-tool-list").not(".jqte-link").hide();
                        "none" == jQuery(".jqte-link").css("display") ? jQuery(".jqte-link").css("display", "block") : jQuery(".jqte-link").css("display", "none");
                        jQuery(".link-window-url").val("http://");
                        jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#003399");
                        jQuery(".current-editor-scope").find("font[color='#003399']").addClass("key jq-editor-link");
                        jqte.SelectionSet("createLink", "#");
                        jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("id", MyJQte.jqte.GenerateId());
                    }
                    jqte.buttonEmphasize(e);
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
                jQuery(".editor-create-link").on("click", function(e) {
                    jQuery(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("href", jQuery(".link-window-url").val());
                    jQuery(".current-editor-scope").find("font[color='#003399']").removeAttr("color");
                    jQuery(".jqte-editor-tool-list").hide();
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
                $(".jqte-font-name").on("change", function(e) {
                    if (0 != jQuery(this).val()) {
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if ("" == selectedtext) {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.find(".jq-text-block").css("font-family", jQuery(this).attr("value"));
                        }
                        "" != selectedtext && jqte.SelectionSet("fontName", jQuery(this).val());
                        jQuery(this).val("0");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
                $(".jqte-font-size").on("change", function(e) {
                    if (0 != jQuery(this).val()) {
                        jqte.SelectionSet("fontSize", 7);
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        var res = parseInt(jQuery(this).val());
                        if ("" == selectedtext) {
                            var selectedElement = jQuery(".image-selection").last();
                            isNaN(res) ? selectedElement.css("font-size", jQuery(this).val()) : selectedElement.css("font-size", jQuery(this).val() + "px");
                        }
                        "" != selectedtext && (isNaN(res) ? jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).val()).removeAttr("size") : jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).val() + "px").removeAttr("size"));
                        jQuery(this).val("0");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
                $(".jqte-editor-tool-c").on("mousedown", function(e) {
                    if (jQuery(this).parent().hasClass("font-name")) {
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if ("" == selectedtext) {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.find(".jq-text-block").css("font-family", jQuery(this).attr("value"));
                        }
                        "" != selectedtext && jqte.SelectionSet("fontName", jQuery(this).attr("value"));
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    if (jQuery(this).parent().parent().hasClass("font-size")) {
                        jqte.SelectionSet("fontSize", 7);
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        jqte.SelectionSet("foreColor", "#afafaf");
                        var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                        jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                        if ("" == selectedtext) {
                            var selectedElement = jQuery(".image-selection").last();
                            selectedElement.css("font-size", jQuery(this).attr("value") + "px");
                        }
                        "" != selectedtext && jQuery(".current-editor-scope").find("font[size='7']").css("font-size", jQuery(this).attr("value") + "px").removeAttr("size");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                    jQuery(".jqte-editor-tool-list").hide();
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
                $(".jq-color").on("mousedown", function(e) {
                    if (jQuery(".current-color-tool").length > 0) {
                        var name = jQuery(".current-color-tool").attr("name");
                        if ("back-color" == name) {
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#afafaf");
                            var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            if ("" == selectedtext) {
                                var selectedElement = jQuery(".image-selection").last();
                                selectedElement.hasClass("empty-container-text") && (selectedElement = selectedElement.find(".jq-text-block"));
                                selectedElement.css("background-color", jQuery(this).css("background-color"));
                            }
                            "" != selectedtext && jqte.SelectionSet("backColor", jQuery(this).css("background-color"));
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        } else if (name = "fore-color") {
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            jqte.SelectionSet("foreColor", "#afafaf");
                            var selectedtext = jQuery(".current-editor-scope").find("font[color='#afafaf']").text();
                            jQuery(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color");
                            if ("" == selectedtext) {
                                var selectedElement = jQuery(".image-selection").last();
                                if (void 0 != selectedElement) {
                                    selectedElement.css("color", jQuery(this).css("background-color"));
                                    if (selectedElement.hasClass("jq-editor-link") || selectedElement.hasClass("jq-normal-link")) {
                                        if (jQuery("page").find("." + selectedElement.find("a").first().attr("id")).length > 0) jQuery("page").find("." + selectedElement.find("a").first().attr("id")).html(""); else {
                                            var style = "<style class='" + selectedElement.find("a").first().attr("id") + "'> </span>";
                                            jQuery("page").append(style);
                                        }
                                        var linkId = "#" + selectedElement.find("a").first().attr("id"), linkColor = jQuery(this).css("background-color"), style = " " + linkId + ":link { color:" + linkColor + ";}" + linkId + ":visited { color:" + linkColor + ";}" + linkId + ":hover { color:" + linkColor + ";}" + linkId + ":active { color:" + linkColor + ";}";
                                        jQuery("page").find("." + selectedElement.find("a").first().attr("id")).html(style);
                                    }
                                }
                            }
                            "" != selectedtext && jqte.SelectionSet("foreColor", jQuery(this).css("background-color"));
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                    }
                    jQuery(".jqte-editor-tool-list").hide();
                    null != e.cancelBubble && (e.cancelBubble = !0);
                    e.stopPropagation && e.stopPropagation();
                    e.preventDefault && e.preventDefault();
                    null != e.returnValue && (e.returnValue = !1);
                    return !1;
                });
            };
            jqte.GetSelectetdText = function() {
                return jqte.SelectionSet("fontSize", "1");
            };
            jqte.SelectionGet = function() {
                return window.getSelection ? window.getSelection() : document.selection && document.selection.createRange && "None" != document.selection.type ? document.selection.createRange() : void 0;
            };
            jqte.SelectionSet = function(addCommand, thirdParam) {
                var range, sel = jqte.SelectionGet();
                if (window.getSelection) {
                    sel.anchorNode && sel.getRangeAt && (range = sel.getRangeAt(0));
                    if (range) {
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                    jqte.ThisBrowser.match(/msie/) || document.execCommand("StyleWithCSS", !1, !1);
                    document.execCommand(addCommand, !1, thirdParam);
                } else if (document.selection && document.selection.createRange && "None" != document.selection.type) {
                    range = document.selection.createRange();
                    range.execCommand(addCommand, !1, thirdParam);
                }
            };
            jqte.SelectText = function(element) {
                if (element) {
                    var range, element = element[0];
                    if (document.body.createTextRange) {
                        range = document.body.createTextRange();
                        range.moveToElementText(element);
                        range.select();
                    } else if (window.getSelection) {
                        var selection = window.getSelection();
                        range = document.createRange();
                        if ("undefined" != element && null != element) {
                            range.selectNodeContents(element);
                            selection.removeAllRanges();
                            selection.addRange(range);
                            if ($(element).is(":empty")) {
                                $(element).append("&nbsp;");
                                jqte.SelectText($(element));
                            }
                        }
                    }
                }
            };
            jqte.ThisBrowser = navigator.userAgent.toLowerCase();
            jqte.buttons = [];
            jqte.formats = [ [ "p", "Normal" ], [ "h1", "Header 1" ], [ "h2", "Header 2" ], [ "h3", "Header 3" ], [ "h4", "Header 4" ], [ "h5", "Header 5" ], [ "h6", "Header 6" ], [ "pre", "Preformatted" ] ];
            return jqte;
        }();
        MyJQte.jqte = jqte;
    }(MyJQte = exports.MyJQte || (exports.MyJQte = {}));
});

define("jqte/OnInsert", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../Controls/ControlCommonJQ", "../jqte/MyJQte", "../PageElements/ElementJQ" ], function(require, exports, impError, impWatch, impUndoManager, impCommonCode, impJQte, impElements) {
    "use strict";
    var OnInsert, changed = !1;
    !function(OnInsert) {
        var Code = function() {
            function Code() {}
            Code.prototype.Init = function() {
                jQuery("page .jq-add-column").unbind("click");
                jQuery("page .jq-add-column").on("click", function() {
                    var columnsCount = jQuery(this).closest(".row").children(".column").length;
                    if (columnsCount >= 4) {
                        var error = new impError.ErrorHandle.ErrorJQ();
                        error.ActionHelp("Cannot add more than 4 columns");
                    } else {
                        var columnSize = "", columnClass = "";
                        if (1 == columnsCount) {
                            columnClass = "col-xs-24";
                            columnSize = "24";
                        }
                        if (2 == columnsCount) {
                            columnClass = "col-xs-16";
                            columnSize = "16";
                        }
                        if (3 == columnsCount) {
                            columnClass = "col-xs-12";
                            columnSize = "12";
                        }
                        var lastColumn;
                        jQuery(this).closest(".row").children(".column").each(function() {
                            lastColumn = jQuery(this);
                            var prevSize = jQuery(this).attr("xs-column-size"), cssClass = "col-xs-" + prevSize;
                            if (cssClass != columnClass) {
                                jQuery(this).addClass(columnClass);
                                jQuery(this).attr("xs-column-size", columnSize);
                                jQuery(this).removeClass(cssClass);
                            }
                        });
                        var column, elements2 = new impElements.Page.Elements.ElementJQ(), columnCss = columnClass + "  from-column-add-click column key design-column column-number-" + (columnsCount + 1);
                        column = elements2.CreateDiv("", columnCss);
                        column.attr("column-number", columnsCount + 1);
                        column.attr("xs-column-size", columnSize);
                        column.css("min-height", "100px");
                        column.addClass("column-padding");
                        jQuery(this).closest(".row").append(column);
                        jQuery("#control-common-execute").click();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                });
                jQuery("page a").not(".jq-logout").unbind("click");
                jQuery("page a").not(".jq-logout").click(function() {
                    impCommonCode.ControlCommon.Code.AnchorClicked = !0;
                });
                jQuery("page .jqte-editor").unbind("click");
                jQuery("page .jqte-editor").on("click", function() {
                    jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                    jQuery(this).addClass("current-editor-scope");
                });
                jQuery("page .column").unbind("click");
                jQuery("page .column").on("click", function() {
                    if ("none" == jQuery("#jqte-edit-stop").css("display")) {
                        jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                        jQuery(this).addClass("current-editor-scope");
                    }
                });
                jQuery("page .jqte-editor").unbind("keydown");
                jQuery("page .jqte-editor").on("keydown", function() {
                    Code.BackPassed = !0;
                });
                jQuery("page .jqte-editor").unbind("keyup");
                jQuery("page .jqte-editor").on("keyup", function() {
                    changed = !0;
                });
                jQuery("page .jqte-editor").unbind("focusout");
                jQuery("page .jqte-editor").on("focusout", function() {
                    if (1 == changed) {
                        changed = !1;
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                });
                jQuery(".empty-container-image").unbind("dblclick");
                jQuery(".empty-container-image").on("dblclick", function() {});
                jQuery(".empty-container-text").unbind("dblclick");
                jQuery(".empty-container-text").on("dblclick", function() {
                    $(".empty-container-text").draggable({
                        disabled: !1
                    });
                    jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                    $("page .jq-text-block-content").removeAttr("contentEditable");
                    jQuery(".current-editor-scope").removeClass("current-editor-scope");
                    jQuery(this).find(".jq-text-block-content").addClass("current-editor-scope");
                    jQuery(".editor").show();
                    $(this).draggable({
                        disabled: !0
                    });
                    jQuery(".current-editor-scope").focus();
                    jQuery(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text");
                    jQuery(".current-editor-scope").attr("contentEditable", "true");
                });
                jQuery("page .jqte-editor").unbind("mouseup");
                jQuery("page .jqte-editor").on("mouseup", function(e) {
                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });
                jQuery("page .column").unbind("mouseup");
                jQuery("page .column").on("mouseup", function(e) {
                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });
                jQuery(".jq-site-link").unbind("dblclick");
                jQuery(".jq-site-link").on("dblclick", function() {
                    jQuery(".editor").show();
                    jQuery(".current-editor-scope").focus();
                    jQuery(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text");
                });
                jQuery("page").unbind("click");
                jQuery("page").on("click", function(e) {
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    jQuery("#contextMenu").hide(500);
                    jQuery("#smInsertNextPrev").hide(500);
                    if (1 == impCommonCode.ControlCommon.Code.AnchorClicked) {
                        impCommonCode.ControlCommon.Code.AnchorClicked = !1;
                        null != e.cancelBubble && (e.cancelBubble = !0);
                        e.stopPropagation && e.stopPropagation();
                        e.preventDefault && e.preventDefault();
                        null != e.returnValue && (e.returnValue = !1);
                        return !1;
                    }
                });
            };
            Code.BackPassed = !1;
            Code.BackPassedEdit = !1;
            return Code;
        }();
        OnInsert.Code = Code;
    }(OnInsert = exports.OnInsert || (exports.OnInsert = {}));
});

define("Undomanager/undomanager", [ "require", "exports", "../Controls/ControlCommonJQ", "../Preview/Preview", "../Watch/WatchMouseJQ", "../MalFormed/MalFormedJQ", "../jqte/OnInsert" ], function(require, exports, impControlsCommon, impPreview, impWatch, impmal, impOnInsert) {
    "use strict";
    window.undoActivityIndex = 999999;
    var Manager;
    !function(Manager) {
        var UndoManager = function() {
            function UndoManager() {
                this.isEnabled = !0;
                this.isUndoHit = !1;
                this.isRedoHit = !1;
            }
            UndoManager.prototype.EnableUndoManager = function(isEnable) {
                this.isEnabled = isEnable;
            };
            UndoManager.prototype.SetSelectElement = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selectedElement) {
                    var scopeId = selectedElement.attr("scopeId");
                    impWatch.Watch.MouseJQ.selectedElement = jQuery("div[scopeId='" + scopeId + "'").first();
                }
            };
            UndoManager.prototype.Undo = function() {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed) {
                    "none" != jQuery(".close-preview").css("display") && impPreview.Preview.PreviewJQ.ClosePreview();
                    var undoObj;
                    if (!(window.undoActivityIndex <= 0)) {
                        if (999999 == window.undoActivityIndex) {
                            if (void 0 != window.undoObjArray) {
                                window.undoActivityIndex = window.undoObjArray.length - 2;
                                undoObj = window.undoObjArray[window.undoActivityIndex];
                            }
                        } else {
                            window.undoActivityIndex--;
                            window.undoActivityIndex <= 0 && (this.isUndoHit = !0);
                            undoObj = window.undoObjArray[window.undoActivityIndex];
                        }
                        if (null != undoObj) {
                            var parent;
                            parent = jQuery(undoObj.parent);
                            jQuery("page").html(undoObj.html);
                            impControlsCommon.ControlCommon.Code.DestroyResizable();
                            impControlsCommon.ControlCommon.Code.Execute();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            this.SetSelectElement();
                        }
                    }
                }
            };
            UndoManager.prototype.Redo = function() {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed) {
                    "none" != jQuery(".close-preview").css("display") && impPreview.Preview.PreviewJQ.ClosePreview();
                    var undoObj;
                    -1 == window.undoActivityIndex && (window.undoActivityIndex = 0);
                    if (void 0 != window.undoObjArray) {
                        if (window.undoActivityIndex + 1 >= window.undoObjArray.length) return;
                        window.undoActivityIndex++;
                        undoObj = window.undoObjArray[window.undoActivityIndex];
                        if (null != undoObj) {
                            jQuery("page").html(undoObj.html);
                            impControlsCommon.ControlCommon.Code.DestroyResizable();
                            impControlsCommon.ControlCommon.Code.Execute();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            this.SetSelectElement();
                        }
                    }
                }
            };
            UndoManager.prototype.PushUndo = function(undo) {
                void 0 == window.undoObjArray && (window.undoObjArray = []);
                void 0 != undo && window.undoObjArray.push(undo);
            };
            UndoManager.prototype.PopUndo = function() {
                window.undoObjArray.pop();
            };
            UndoManager.prototype.ClearRedoOnChange = function() {};
            UndoManager.prototype.Clear = function() {};
            UndoManager.prototype.BeforeOperation = function(selectedParent) {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed && 0 == window.layoutCreating) {
                    try {
                        window.undoObjArray.splice(window.undoActivityIndex + 1);
                        window.undoActivityIndex = 999999;
                    } catch (ex) {}
                    selectedParent = jQuery("page");
                    var rootTemp;
                    rootTemp = selectedParent;
                    var undo = new UndoJQ();
                    undo.parent = rootTemp;
                    undo.html = rootTemp.html();
                    undo.Push();
                }
            };
            return UndoManager;
        }();
        Manager.UndoManager = UndoManager;
        var UndoJQ = function() {
            function UndoJQ() {}
            UndoJQ.prototype.Push = function() {
                var um = new UndoManager();
                um.PushUndo(this);
            };
            return UndoJQ;
        }();
        Manager.UndoJQ = UndoJQ;
    }(Manager = exports.Manager || (exports.Manager = {}));
});

define("SmartMenu/SmartMenuJQ", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../Undomanager/undomanager" ], function(require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var Smart, isSmartMenuReady = !1, isChangedWidth = !1, prevWidthValue = 0;
    !function(Smart) {
        var SmartMenuJQ = function() {
            function SmartMenuJQ() {}
            SmartMenuJQ.prototype.Init = function() {
                SmartMenuJQ.AttachSmartMenu();
            };
            SmartMenuJQ.ImageHeightProcessing = function(selectedElement, heightVal, widthVal) {
                if (selectedElement.hasClass("jq-image-block-image")) {
                    if ("" != heightVal) {
                        var htv = Number(heightVal) + 55;
                        selectedElement.parent().closest(".key").css("height", htv + "px");
                        selectedElement.parent().closest(".jq-image-block").css("height", Number(heightVal) + 20 + "px");
                    }
                    if ("" != widthVal) {
                        var wtv = Number(widthVal) + 35;
                        selectedElement.parent().closest(".key").css("width", wtv + "px");
                        selectedElement.parent().closest(".jq-image-block").css("width", Number(widthVal) + 20 + "px");
                    }
                }
                if (selectedElement.hasClass("jq-image-block-container")) {
                    if ("" != heightVal) {
                        var htv = Number(heightVal) - 60;
                        selectedElement.find(".key").css("height", htv + "px");
                        selectedElement.find(".jq-image-block").css("height", Number(heightVal) - 30 + "px");
                    }
                    if ("" != widthVal) {
                        var wtv = Number(widthVal) - 35;
                        selectedElement.find(".key").css("width", wtv + "px");
                        selectedElement.find(".jq-image-block").css("width", Number(widthVal) - 15 + "px");
                    }
                }
            };
            SmartMenuJQ.TextBlockProcessing = function(selectedElement, heightVal, widthVal) {
                if (selectedElement.hasClass("jq-text-block")) {
                    if ("" != heightVal) {
                        var htv = Number(heightVal);
                        selectedElement.parent().closest(".key").css("height", htv + "px");
                    }
                    if ("" != widthVal) {
                        var wtv = Number(widthVal);
                        selectedElement.parent().closest(".key").css("width", wtv + "px");
                    }
                }
                if (selectedElement.hasClass("jq-text-block-container")) {
                    if ("" != heightVal) {
                        var htv = Number(heightVal);
                        selectedElement.find(".key").css("height", htv + "px");
                    }
                    if ("" != widthVal) {
                        var wtv = Number(widthVal);
                        selectedElement.find(".key").css("width", wtv + "px");
                    }
                }
            };
            SmartMenuJQ.AttachSmartMenu = function() {
                jQuery(document).ready(function() {
                    if (0 == isSmartMenuReady) {
                        isSmartMenuReady = !0;
                        jQuery("#sm").on("click", function() {});
                        jQuery(".smart-menu-width").spinner({
                            min: 0,
                            max: 2e3,
                            step: 1,
                            change: function(event, ui) {},
                            spin: function(event, ui) {},
                            stop: function(event, ui) {
                                prevWidthValue != jQuery(this).val() && (isChangedWidth = !0);
                                var flag = "-";
                                flag = prevWidthValue > jQuery(this).val() ? "+" : "-";
                                prevWidthValue = jQuery(this).val();
                                if (1 == isChangedWidth) {
                                    isChangedWidth = !1;
                                    0 == SmartMenuJQ.isSelectProcessing && SmartMenuJQ.OnChange(this, "width");
                                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                    if (void 0 != selectedElement && !selectedElement.hasClass("row") && !selectedElement.hasClass("root-elements")) {
                                        var undo = new impUndoManager.Manager.UndoManager();
                                        undo.BeforeOperation();
                                    }
                                }
                            }
                        });
                        jQuery(".smart-menu-height").spinner({
                            min: 0,
                            max: 5e3,
                            step: 1,
                            change: function(event, ui) {
                                0 == SmartMenuJQ.isSelectProcessing && SmartMenuJQ.OnChange(this, "height");
                            },
                            slide: function(event, ui) {
                                0 == SmartMenuJQ.isSelectProcessing && SmartMenuJQ.OnChange(this, "height");
                            },
                            stop: function(event, ui) {
                                0 == SmartMenuJQ.isSelectProcessing && SmartMenuJQ.OnChange(this, "height");
                                var undo = (impWatch.Watch.MouseJQ.selectedElement, new impUndoManager.Manager.UndoManager());
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".smart-menu-collapse-close").on("click", function() {
                            jQuery("#sm").find(".smart-menu-controls").slideUp();
                            jQuery("#sm").find(".smart-menu-collapse-show").removeClass("hide");
                            jQuery(this).addClass("hide");
                        });
                        jQuery(".smart-menu-collapse-show").on("click", function() {
                            jQuery("#sm").find(".smart-menu-controls").slideDown();
                            jQuery("#sm").find(".smart-menu-collapse-close").removeClass("hide");
                            jQuery(this).addClass("hide");
                        });
                        jQuery(".smart-menu-controls").on("mouseenter", function() {});
                        jQuery(".smart-menu-controls").on("mouseleave", function() {
                            jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("");
                            jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                        });
                        jQuery(".smart-menu-button-apply").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement, widthVal = (new impError.ErrorHandle.ErrorJQ(), 
                            $(this).closest(".smart-menu-controls-table").find(".smart-menu-width").spinner("value")), heightVal = $(this).closest(".smart-menu-controls-table").find(".smart-menu-height").spinner("value");
                            if (void 0 != selectedElement) if (selectedElement.hasClass("column")) {
                                SmartMenuJQ.ProcessColumnWidth(widthVal);
                                selectedElement.css("min-height", heightVal + "px");
                            } else {
                                selectedElement.css("width", widthVal + "px");
                                selectedElement.hasClass("row") || selectedElement.hasClass("column") ? selectedElement.css("min-height", heightVal + "px") : selectedElement.css("height", heightVal + "px");
                            }
                        });
                    }
                });
            };
            SmartMenuJQ.OnChange = function($this, whclass) {
                impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-text-block-container").first() : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image").first());
                if (void 0 != selectedElement) {
                    var widthVal = (new impError.ErrorHandle.ErrorJQ(), $($this).closest(".smart-menu-controls-table").find(".smart-menu-width").spinner("value")), heightVal = $($this).closest(".smart-menu-controls-table").find(".smart-menu-height").spinner("value");
                    if (selectedElement.hasClass("column")) {
                        "width" == whclass && SmartMenuJQ.ProcessColumnWidth(widthVal);
                        "height" == whclass && selectedElement.css("min-height", heightVal + "px");
                    } else {
                        "width" == whclass && (selectedElement.hasClass("root-elements") || selectedElement.hasClass("row") || selectedElement.css("width", widthVal + "px"));
                        if ("height" == whclass) if (selectedElement.hasClass("row") || selectedElement.hasClass("column") || selectedElement.hasClass("root-elements")) selectedElement.css("min-height", heightVal + "px"); else {
                            selectedElement.css("min-height", heightVal + "px");
                            selectedElement.css("height", heightVal + "px");
                        }
                    }
                }
            };
            SmartMenuJQ.ProcessColumnWidth = function(width) {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text").first() : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image").first());
                if (void 0 != selectedElement) {
                    var width = width, originalWidth = selectedElement.width(), rowWidth = jQuery(selectedElement).parent().width(), onePercentPixels = Math.floor(1 * rowWidth / 100), colXsOnePercentage = 2, colXsOnePixels = colXsOnePercentage * onePercentPixels, commonMethods = new impCommon.Common.CommonMethodsJQ();
                    jQuery(selectedElement).attr("style");
                    commonMethods.RemoveStyle(selectedElement, "min-width");
                    commonMethods.RemoveStyle(selectedElement, "width");
                    var twoFour = 48;
                    if (width > originalWidth) {
                        var emptyXsCount = 0, nextElements = jQuery(selectedElement).nextAll(".column");
                        try {
                            for (var columns = selectedElement.parent().children(".column"), count = 0, j = 0; j < columns.length; j++) {
                                var size = jQuery(columns[j]).attr("xs-column-size");
                                if (void 0 != size && "" != size) {
                                    var num = Number(size);
                                    count += num;
                                }
                            }
                            twoFour > count && (emptyXsCount = twoFour - count);
                            var extenedWidth = width - originalWidth, colXs = Math.floor(extenedWidth / colXsOnePixels);
                            0 == colXs && (colXs = 1);
                            var nextElementsCount = jQuery(selectedElement).nextAll(".column").length, eachXs = Math.floor(colXs / nextElementsCount);
                            0 == eachXs && (eachXs = 1);
                            for (var colXsTemp = colXs, i = 0; i < nextElements.length && colXsTemp > 0; i++) {
                                var nextXsSize = Number(jQuery(nextElements[i]).attr("xs-column-size"));
                                if (1 != nextXsSize) {
                                    var newNextXsSize = nextXsSize - eachXs;
                                    if (1 > newNextXsSize) {
                                        colXsTemp = colXsTemp - eachXs + 1;
                                        newNextXsSize = 1;
                                    } else colXsTemp -= eachXs;
                                    jQuery(nextElements[i]).removeClass("col-xs-" + nextXsSize);
                                    jQuery(nextElements[i]).addClass("col-xs-" + newNextXsSize);
                                    jQuery(nextElements[i]).attr("xs-column-size", newNextXsSize);
                                }
                            }
                            var xsSize = Number(selectedElement.attr("xs-column-size")), newXsSize = xsSize + colXs - colXsTemp;
                            colXs == colXsTemp && (newXsSize += colXsTemp);
                            var allXs = 0;
                            selectedElement.parent().children(".column").each(function() {
                                allXs += Number(jQuery(this).attr("xs-column-size"));
                            });
                            for (var overallMinusCurrent = allXs - xsSize, g = overallMinusCurrent + newXsSize; g > twoFour; ) {
                                newXsSize--;
                                g--;
                            }
                            jQuery(selectedElement).removeClass("col-xs-" + xsSize);
                            jQuery(selectedElement).addClass("col-xs-" + newXsSize);
                            selectedElement.attr("xs-column-size", newXsSize);
                        } catch (ex) {}
                        nextElements.show();
                    } else if (originalWidth > width) {
                        var nextElements = jQuery(selectedElement).nextAll(".column");
                        try {
                            var extenedWidth = originalWidth - width, colXs = Math.floor(extenedWidth / colXsOnePixels);
                            0 == colXs && (colXs = 1);
                            var eachXs = Math.floor(colXs / 1);
                            0 == eachXs && (eachXs = 1);
                            var xsSize = Number(selectedElement.attr("xs-column-size"));
                            if (xsSize > 1) {
                                var eachXsTemp = eachXs, newXsSize = xsSize - eachXs;
                                if (0 > newXsSize) {
                                    eachXsTemp = eachXs + newXsSize;
                                    newXsSize = 1;
                                }
                                if (0 == newXsSize) {
                                    eachXsTemp = eachXs - 1;
                                    newXsSize = 1;
                                }
                                jQuery(selectedElement).removeClass("col-xs-" + xsSize);
                                jQuery(selectedElement).addClass("col-xs-" + newXsSize);
                                selectedElement.attr("xs-column-size", newXsSize);
                                var colXsTemp = colXs;
                                if (colXsTemp > 0) {
                                    var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size")), newNextXsSize = nextXsSize + eachXsTemp, allXs = 0;
                                    selectedElement.parent().children(".column").each(function() {
                                        allXs += Number(jQuery(this).attr("xs-column-size"));
                                    });
                                    for (var overallMinusNext = allXs - Number(jQuery(nextElements[0]).attr("xs-column-size")), g = overallMinusNext + newNextXsSize; g > twoFour; ) {
                                        newNextXsSize--;
                                        g--;
                                    }
                                    jQuery(nextElements[0]).removeClass("col-xs-" + nextXsSize);
                                    jQuery(nextElements[0]).addClass("col-xs-" + newNextXsSize);
                                    jQuery(nextElements[0]).attr("xs-column-size", newNextXsSize);
                                }
                            }
                        } catch (ex) {}
                        nextElements.show();
                    }
                    var nextElementsToShow = jQuery(selectedElement).nextAll(".column");
                    nextElementsToShow.show();
                }
            };
            SmartMenuJQ.ProcessSelectedValues = function() {
                SmartMenuJQ.isSelectProcessing = !0;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text").first() : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image").first());
                if (void 0 != selectedElement) {
                    var heightstr = selectedElement.css("height");
                    if (void 0 != heightstr) {
                        heightstr.replace("%", "");
                        heightstr.indexOf("%") > -1 || (heightstr = heightstr.replace("px", ""));
                    }
                    var widthstr = selectedElement.css("width");
                    if (void 0 != widthstr) {
                        widthstr.replace("%", "");
                        widthstr.indexOf("%") > -1 || (widthstr = widthstr.replace("px", ""));
                    }
                    jQuery(".smart-menu-height").spinner("value", heightstr);
                    jQuery(".smart-menu-width").spinner("value", widthstr);
                    SmartMenuJQ.isSelectProcessing = !1;
                }
            };
            SmartMenuJQ.ProcessSelectNotify = function() {
                SmartMenuJQ.ProcessSelectedValues();
            };
            SmartMenuJQ.smartMenuIconId = ".smart-menu-icon";
            SmartMenuJQ.smartMenuId = ".smart-menu";
            SmartMenuJQ.isSelectProcessing = !1;
            return SmartMenuJQ;
        }();
        Smart.SmartMenuJQ = SmartMenuJQ;
    }(Smart = exports.Smart || (exports.Smart = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Controls/ControlsJQ", [ "require", "exports", "../Page/Context/ContextJQ", "../_Classes/CssClass", "../Constants/ConstantsJQ", "../ControlNames/PageControlNamesJQ", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "./FontJQ", "./TextJQ", "../SmartMenu/SmartMenuJQ", "../Common/OperationJQ" ], function(require, exports, impPageCtx, impCss, impConsts, impPageControlNames, impError, impWatch, impFontList, impText, impSmartMenu, impOperaction) {
    "use strict";
    var Page;
    !function(Page) {
        var RequiredJQ = function() {
            function RequiredJQ() {}
            RequiredJQ.prototype.Prepare = function(pageId) {
                jQuery(pageId).find(".required-symbol").remove();
                jQuery(pageId).find(".required").after("<span class='required-symbol'>*</span");
            };
            return RequiredJQ;
        }();
        Page.RequiredJQ = RequiredJQ;
        var AddRowJQ = function(_super) {
            function AddRowJQ() {
                _super.call(this);
            }
            __extends(AddRowJQ, _super);
            AddRowJQ.prototype.Init = function() {
                this.AttachPageAddRowJQ();
                this.AttachFontJQ();
                this.AttachInsertTextJQ();
                this.AttachSmartMenu();
                this.AttachReset();
            };
            AddRowJQ.prototype.AttachReset = function() {
                jQuery("#btnResetAddRowControls").on("click", function() {
                    var ar = new AddRowJQ();
                    ar.ResetAddRowsControls();
                });
            };
            AddRowJQ.prototype.AttachSmartMenu = function() {
                new impSmartMenu.Smart.SmartMenuJQ().Init();
            };
            AddRowJQ.prototype.AttachFontJQ = function() {
                new impFontList.Font.FontJQ().Init();
            };
            AddRowJQ.prototype.AttachInsertTextJQ = function() {
                new impText.Text.TextJQ().Init();
            };
            AddRowJQ.prototype.AttachPageAddRowJQ = function() {
                this.LoadEvent();
                this.AddRow(this.ResetAddRowsControls);
                this.RowColumnNamesDDN();
                this.ControlColumns();
                this.ControlRowHeight();
                this.ControlColumnHeight();
                new RequiredJQ().Prepare(AddRowJQ.pageId);
            };
            AddRowJQ.prototype.LoadEvent = function() {
                jQuery(AddRowJQ.pageId).on("cust_loaded", function() {
                    if (impWatch.Watch.MouseJQ.selectedElement.hasClass("jq-Content")) {
                        AddRowJQ.SetRowHeightControl("400");
                        AddRowJQ.SetColumnHeightControl("400");
                    } else {
                        AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                        AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                    }
                });
            };
            AddRowJQ.SetRowHeightControl = function(val) {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).val(val);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(AddRowJQ.ROW_HEIGHT_CONTROL).val() + " pixels");
            };
            AddRowJQ.SetColumnHeightControl = function(val) {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).val(val);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_VALUE_CONTROL).text(jQuery(AddRowJQ.COLUMN_HEIGHT_CONTROL).val() + " pixels");
            };
            AddRowJQ.prototype.RowColumnNamesDDN = function() {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).on("change", function() {
                    var selectedRowOrColumn = jQuery("#rows-columns option:selected").val();
                    if (".jq-Content" == selectedRowOrColumn) {
                        AddRowJQ.SetColumnHeightControl("400");
                        AddRowJQ.SetRowHeightControl("400");
                    }
                });
            };
            AddRowJQ.prototype.ResetAddRowsControls = function() {
                var tempControl = new AddRowJQ();
                tempControl.LoadRowsAndColumnsNames();
                tempControl.ResetColumnControl();
                tempControl.ResetRowHeightControl();
                tempControl.ResetColumnHeightControl();
            };
            AddRowJQ.prototype.ResetColumnControl = function() {
                jQuery(AddRowJQ.CONTROL_COLUMNS).each(function() {
                    jQuery(this).attr("data-set", "0");
                    jQuery(this).removeClass("highlight-column");
                });
            };
            AddRowJQ.prototype.ResetRowHeightControl = function() {
                AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
            };
            AddRowJQ.prototype.ResetColumnHeightControl = function() {
                AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
            };
            AddRowJQ.prototype.LoadRowsAndColumnsNames = function() {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).empty();
                var rows = jQuery(".debug-row-css"), columns = jQuery(".debug-column-css"), selectOption = "<option value='select'>-- Select --</option>";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(selectOption);
                var defaultOption = "<option value='.jq-Header'>Header</option>";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                var defaultOption = "<option value='.jq-MenuBar'>MenuBar</option>";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                defaultOption = "<option value='.jq-Content'>Body</option";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                defaultOption = "<option value='.jq-Footer'>Footer</option";
                jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(defaultOption);
                if (rows.length > 0) for (var i = 0; i < rows.length; i++) {
                    var rowOption = "<option value='" + jQuery(rows[i]).text() + "'>" + jQuery(rows[i]).text() + "</option>";
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(rowOption);
                }
                if (columns.length > 0) for (var i = 0; i < columns.length; i++) {
                    var columnOption = "<option value='" + jQuery(columns[i]).text() + "'>" + jQuery(columns[i]).text() + "</option>";
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.DDN_ROWS_COLUMNS).append(columnOption);
                }
            };
            AddRowJQ.prototype.AddRow = function(callBackLoadRowAndColumnNames) {
                jQuery(".control-columns").on("click", function() {
                    var columnSet = jQuery(this).attr("data-set");
                    if ("1" == columnSet) {
                        jQuery(this).attr("data-set", "0");
                        jQuery(this).removeClass("highlight-column");
                    } else {
                        jQuery(this).attr("data-set", "1");
                        jQuery(this).addClass("highlight-column");
                    }
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.SetErrorClassName("page-add-row");
                    for (var cols = jQuery(".control-columns[data-set=1]"), colsClasses = "", colPrevNumber = 0, columnNumber = 0, i = 0; i < cols.length; i++) {
                        columnNumber = Number(jQuery(cols[i]).attr("data-number"));
                        i > 0 && (columnNumber -= colPrevNumber);
                        colPrevNumber = columnNumber + colPrevNumber;
                        colsClasses += 0 == i ? "col-xs-" + columnNumber : " col-xs-" + columnNumber;
                    }
                    var lastColClassNumber = 48 - colPrevNumber;
                    lastColClassNumber > 0 && (colsClasses += " col-xs-" + lastColClassNumber);
                    var ctx = new impPageCtx.Page.ContextJQ(), selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedRowOrColumn) {
                        var adjustRow = new impCss.CssClass.AdjustJQ(), adjustColumn = new impCss.CssClass.AdjustJQ();
                        adjustColumn.height = jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).val();
                        selectedRowOrColumn.hasClass("empty-container") && (adjustColumn.height = adjustRow.height);
                        selectedRowOrColumn.attr("scopeId");
                        jQuery(".removable-row").remove();
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        selectedRowOrColumn.children(".debug-column-css").hide();
                        selectedRowOrColumn.css("padding", "0");
                        var beforeAfter = void 0;
                        selectedRowOrColumn.hasClass("row") && (beforeAfter = !1);
                        selectedRowOrColumn.hasClass("image-text-other") && (beforeAfter = !1);
                        AddRowJQ.addedRow = ctx.Page.Any.AddRow(selectedRowOrColumn, colsClasses, "", adjustRow, adjustColumn, beforeAfter);
                        if (void 0 != AddRowJQ.addedRow) {
                            AddRowJQ.addedRow.addClass("removable-row");
                            AddRowJQ.addedRow.children(".column").addClass("columns-pending");
                        }
                        "none" != jQuery(".jq-show-plus").css("display") && jQuery(".jq-row-plus-container").hide();
                        jQuery("#control-common-execute").trigger("click");
                    }
                });
                jQuery(AddRowJQ.pageId).find(AddRowJQ.BTN_ADD_ROW).on("click", function(e, s) {
                    jQuery(".removable-row").removeClass("removable-row");
                    void 0 != callBackLoadRowAndColumnNames && callBackLoadRowAndColumnNames();
                });
            };
            AddRowJQ.prototype.ControlColumns = function() {
                jQuery(AddRowJQ.pageId).find(AddRowJQ.CONTROL_COLUMNS).on("click", function(e, s) {});
            };
            AddRowJQ.prototype.ControlRowHeight = function() {
                AddRowJQ.SetRowHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_CONTROL).on("change", function() {
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.ROW_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + " pixels");
                });
            };
            AddRowJQ.prototype.ControlColumnHeight = function() {
                AddRowJQ.SetColumnHeightControl(impConsts.Constants.ConstantsJQ.HEIGHTCONTROLRESETVALUE);
                jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_CONTROL).on("change", function() {
                    jQuery(AddRowJQ.pageId).find(AddRowJQ.COLUMN_HEIGHT_VALUE_CONTROL).text(jQuery(this).val() + " pixels");
                });
            };
            AddRowJQ.ProcessSelectNotify = function() {
                impWatch.Watch.MouseJQ.selectedElement;
                jQuery(".removable-row").removeClass("removable-row");
                jQuery(".columns-pending").removeClass("columns-pending");
                var ar = new AddRowJQ();
                ar.ResetColumnControl();
            };
            AddRowJQ.pageId = "#control-add-row";
            return AddRowJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.AddRow.Controls);
        Page.AddRowJQ = AddRowJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Controls/ImageJQ", [ "require", "exports", "../Error/ErrorJQ", "../ControlNames/PageControlNamesJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../Common/OperationJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impOperaction, impUndoManager) {
    "use strict";
    var Image, debug = !0, globalImageBlockId = 0, globalImageBlockContainerId = 0;
    !function(Image) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        Image.SmartObj = SmartObj;
        var SelfJQ = function(_super) {
            function SelfJQ() {
                _super.apply(this, arguments);
            }
            __extends(SelfJQ, _super);
            SelfJQ.prototype.Init = function() {
                this.AttachUserImages();
                this.AttachSelectImage();
                this.AttachInsertImage();
            };
            SelfJQ.prototype.GenerateTextBlockScopeId = function() {
                return "Image_Block_" + ++globalImageBlockId;
            };
            SelfJQ.prototype.GenerateContainerScopeId = function() {
                return "Image_Block_Container_" + ++globalImageBlockContainerId;
            };
            SelfJQ.prototype.AttachSelectImage = function() {
                jQuery("#control-image-bi-library").on("click", ".image-library-image", function() {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(".image-library-image").removeClass("image-library-bi-select");
                    jQuery(this).addClass("image-library-select");
                    jQuery(this).addClass("image-library-bi-select");
                });
                jQuery(SelfJQ.controlId).on("click", ".image-library-image", function() {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(this).addClass("image-library-select");
                });
            };
            SelfJQ.IsImageUrl = function(s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (1 == regexp.test(s) && s.length >= 5) for (var lowerUrl = s.toLowerCase(), types = [ "jpeg", "jpg", "png", "gif" ], i = 0; i < types.length; i++) {
                    var _type = lowerUrl.substr(lowerUrl.length - 5, 5), ts = _type.split(".");
                    if (ts.length >= 2 && ts[1] == types[i]) return !0;
                }
                return !1;
            };
            SelfJQ.prototype.AttachInsertImage = function() {
                jQuery(SelfJQ.controlId).find(".action-button-insert-image").on("click", function() {
                    "" != jQuery(".internet-image-url").val() ? SelfJQ.InsertImage(jQuery(".internet-image-url").val()) : SelfJQ.InsertImage(void 0);
                });
                jQuery(".action-button-change-image").on("click", function() {
                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedRowOrColumn && selectedRowOrColumn.hasClass("empty-container-image")) {
                        var imgSrc = jQuery(".image-library-select").attr("src");
                        if ("" != imgSrc) {
                            selectedRowOrColumn.find(".jq-plus-container-image").find("img").attr("src", imgSrc);
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        }
                    } else {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("please select a image change.");
                    }
                    jQuery("#control-image-library").hide();
                });
            };
            SelfJQ.ChangeImage = function() {
                jQuery(".action-button-insert-image").hide();
                jQuery(".action-button-change-image").show();
                jQuery("#control-image-library").show();
                jQuery("#control-image-library").trigger("custom_loaded");
            };
            SelfJQ.InsertImage = function(url) {
                var imageObj = new SelfJQ(), errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.SetErrorClassName("page-insert-image");
                var ctx = new impPageCtx.Page.ContextJQ(), selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                if (!selectedRowOrColumn.hasClass("column") && (null == window.smartObj || null == window.smartObj.currentObj)) {
                    window.smartObj = new SmartObj();
                    window.smartObj.currentObj = selectedRowOrColumn;
                    window.smartObj.command = "n";
                }
                void 0 == selectedRowOrColumn && (selectedRowOrColumn = jQuery("#nnnoelement"));
                if (void 0 != selectedRowOrColumn) {
                    var tbImageContainer = document.createElement("div"), tbImage = document.createElement("div"), tbImageWrapper = document.createElement("div"), tbImg = document.createElement("img");
                    jQuery(tbImg).addClass("jq-image-block-image ");
                    jQuery(tbImg).addClass("normal-element image-element");
                    jQuery(tbImageWrapper).addClass("jq-image-block-image-wrapper ");
                    var imgSrc;
                    imgSrc = void 0 == url ? jQuery(".image-library-select").attr("src") : url;
                    jQuery(tbImg).attr("src", imgSrc);
                    jQuery(tbImageWrapper).append(tbImg);
                    jQuery(tbImage).append(tbImageWrapper);
                    jQuery(tbImage).addClass(SelfJQ.CSSCLASS);
                    var tbScopeId = imageObj.GenerateTextBlockScopeId();
                    1 == debug && void 0 != tbImage && jQuery(tbImage).prepend("<span class='debug-image-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                    jQuery(tbImage).attr("scopeId", tbScopeId);
                    jQuery(tbImageContainer).append(tbImage);
                    var tbcScopeId = imageObj.GenerateContainerScopeId();
                    1 == debug && jQuery(tbImageContainer).append(" <span class='debug-image-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                    jQuery(tbImageContainer).addClass(SelfJQ.CONTAINER_CSS_CLASS);
                    jQuery(tbImageContainer).attr("scopeId", tbcScopeId);
                    if (1 == selectedRowOrColumn.hasClass("column") || null != window.smartObj) {
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container-not-used");
                        plusContainer.addClass("jq-plus-container-image");
                        plusContainer.addClass("design-css");
                        plusContainer.addClass("design-empty-text-css");
                        plusContainer.removeClass("jq-plus-container");
                        plusContainer.find(".jq-plus-element-content").addClass("jq-plus-element-content-image");
                        var emptycontainer = document.createElement("div");
                        plusContainer.find(".adjust-image-text-other").remove();
                        plusContainer.css("height", "200px");
                        plusContainer.css("width", "200px");
                        var jEc = jQuery(emptycontainer);
                        jEc.prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>");
                        jEc.prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>");
                        jEc.addClass("empty-container-image image-text-other key design-css design-empty-text-css");
                        jEc.append(plusContainer);
                        plusContainer.find(".jq-plus-content").append(tbImageContainer);
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        null == window.smartObj || "" == window.smartObj.command ? ctx.Page.Any.Add(selectedRowOrColumn, jEc, "", void 0, void 0, void 0, void 0) : ctx.Page.Any.Add(selectedRowOrColumn, jEc, "", void 0, void 0, !0, void 0);
                        if (selectedRowOrColumn.hasClass("jq-image-block-container")) {
                            var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");
                            selectedRowOrColumn.find(".debug-image-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();
                            void 0 != tbOrTbcWithScopeId && selectedRowOrColumn.append('<span class="debug-image-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + "</span>");
                        }
                        jQuery(tbImageContainer).find(".debug-css").remove();
                        errorHandler.ActionSuccess("");
                        jQuery(SelfJQ.controlId).hide();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    } else errorHandler.ActionFail("You can only insert in a column block.");
                }
                jQuery(".image-library-image").removeClass("image-library-select");
                jQuery(".internet-image-url").val("");
            };
            SelfJQ.prototype.AttachUserImages = function() {
                jQuery(".load-more-images").on("click", function() {
                    SelfJQ.GetImages();
                });
                jQuery(SelfJQ.controlId).on("custom_loaded", function() {
                    SelfJQ.ClearImageGalaryPagingValue();
                    SelfJQ.GetImages();
                });
            };
            SelfJQ.SetImageGalaryPagingValue = function() {
                jQuery(".imges-get-start").val((Number(jQuery(".imges-get-start").val()) + 20).toString());
            };
            SelfJQ.GetImageGalaryPagingValue = function() {
                if (0 == jQuery(".imges-get-start").length) {
                    var pagingElement = jQuery(document.createElement("input"));
                    pagingElement.addClass("imges-get-start hide");
                    jQuery("body").append(pagingElement);
                    jQuery(".imges-get-start").val("0");
                }
                return jQuery(".imges-get-start").val();
            };
            SelfJQ.GetImages = function() {
                var data = {
                    start: SelfJQ.GetImageGalaryPagingValue(),
                    pageSize: 20
                }, dataStrfy = JSON.stringify(data);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/ImageService.asmx/GetImages",
                    data: dataStrfy,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SelfJQ.OnGetImagesSuccess,
                    error: SelfJQ.OnGetImagesError
                });
            };
            SelfJQ.ClearImageGalaryPagingValue = function() {
                jQuery(".imges-get-start").val("0");
            };
            SelfJQ.OnGetImagesSuccess = function(data, status) {
                var resultImages;
                resultImages = data.d;
                if (resultImages.length > 0) {
                    "0" == SelfJQ.GetImageGalaryPagingValue() && jQuery(".image-library").html("");
                    SelfJQ.SetImageGalaryPagingValue();
                }
                for (var i = 0; i < resultImages.length; i++) {
                    var imageContainer = document.createElement("div");
                    jQuery(imageContainer).addClass("image-lib-container");
                    var image = document.createElement("img");
                    jQuery(image).attr("src", resultImages[i].Path);
                    jQuery(image).addClass("image-library-image");
                    jQuery(image).addClass("img-thumbnail");
                    jQuery(imageContainer).append(image);
                    jQuery(".image-library").append(imageContainer);
                }
            };
            SelfJQ.OnGetImagesError = function(request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Some Problem !. <br>Try again latter.");
            };
            SelfJQ.ProcessSelectNotify = function() {
                var selectedElement = (new impError.ErrorHandle.ErrorJQ(), impWatch.Watch.MouseJQ.selectedElement);
                void 0 != selectedElement && (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element"));
            };
            SelfJQ.controlId = "#control-image-library";
            SelfJQ.CSSCLASS = "jq-image-block design-image-block normal-element";
            SelfJQ.CONTAINER_CSS_CLASS = "jq-image-block-container design-image-block normal-element jq-container";
            return SelfJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Image.Controls);
        Image.SelfJQ = SelfJQ;
    }(Image = exports.Image || (exports.Image = {}));
});

define("Controls/BorderJQ", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var Border, isBorderReady = !1, borderFirstTime = 0;
    !function(Border) {
        var BorderJQ = function() {
            function BorderJQ() {}
            BorderJQ.prototype.Init = function() {
                BorderJQ.AttachBorder();
            };
            BorderJQ.AttachBorder = function() {
                jQuery(document).ready(function() {
                    if (0 == isBorderReady) {
                        isBorderReady = !0;
                        jQuery(".border-style").on("click", function() {
                            jQuery(".border-style").parent().removeClass("border-style-selected");
                            jQuery(this).parent().addClass("border-style-selected");
                            BorderJQ.OnChange(this);
                        });
                        jQuery(".border-advanced-show").on("click", function() {
                            jQuery(".jq-border-advanced").fadeToggle(1);
                        });
                        jQuery(".control-border-thickness-radius").spinner({
                            min: 0,
                            max: 5e3,
                            step: 1,
                            change: function(event, ui) {
                                0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                            },
                            spin: function(event, ui) {
                                0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-border-thickness").spinner({
                            min: 0,
                            max: 50,
                            step: 1,
                            value: 0,
                            change: function(event, ui) {
                                0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                            },
                            spin: function(event, ui) {
                                0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".color-picker").colorpicker();
                        jQuery(".color-picker").on("change", function() {
                            0 == BorderJQ.isSelectProcessing && BorderJQ.OnChange(this);
                        });
                        jQuery(BorderJQ.controlBtnApply).on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var common = (new impError.ErrorHandle.ErrorJQ(), new impCommon.Common.CommonMethodsJQ()), borderLeft = $(this).closest(".control-border-controls").find(".control-border-thickness-left").spinner("value"), borderTop = $(this).closest(".control-border-controls").find(".control-border-thickness-top").spinner("value"), borderRight = $(this).closest(".control-border-controls").find(".control-border-thickness-right").spinner("value"), borderBottom = $(this).closest(".control-border-controls").find(".control-border-thickness-bottom").spinner("value"), borderRadius = $(this).closest(".control-border-controls").find(".control-border-thickness-radius").spinner("value");
                                void 0 != borderRadius && selectedElement.css("border-radius", borderRadius + "px");
                                if (void 0 != borderLeft) {
                                    selectedElement.css("border-left-width", borderLeft + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-left").val();
                                    selectedElement.css("border-left-color", "#" + color);
                                }
                                if (void 0 != borderTop) {
                                    selectedElement.css("border-top-width", borderTop + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-top").val();
                                    selectedElement.css("border-top-color", "#" + color);
                                }
                                if (void 0 != borderRight) {
                                    selectedElement.css("border-right-width", borderRight + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-right").val();
                                    selectedElement.css("border-right-color", "#" + color);
                                }
                                if (void 0 != borderBottom) {
                                    selectedElement.css("border-bottom-width", borderBottom + "px");
                                    var color = $(this).closest(".control-border-controls").find(".color-picker-bottom").val();
                                    selectedElement.css("border-bottom-color", "#" + color);
                                }
                                selectedElement.css("border-style", "solid");
                                if (0 == borderLeft && 0 == borderTop && 0 == borderRight && 0 == borderBottom) {
                                    common.RemoveStyle(selectedElement, "border-left-width");
                                    common.RemoveStyle(selectedElement, "border-top-width");
                                    common.RemoveStyle(selectedElement, "border-bottom-width");
                                    common.RemoveStyle(selectedElement, "border-right-width");
                                    common.RemoveStyle(selectedElement, "border-color");
                                    common.RemoveStyle(selectedElement, "border");
                                }
                            }
                        });
                    }
                });
            };
            BorderJQ.OnChange = function($this) {
                BorderJQ.isSelectProcessing = !0;
                try {
                    if (0 != borderFirstTime) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        new impError.ErrorHandle.ErrorJQ();
                        jQuery($this).hasClass("control-border-thickness-all") && jQuery(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").spinner("value", jQuery($this).val());
                        $($this).hasClass("color-picker-left") && 0 == $(".control-border-thickness-left").spinner("value") && $(".control-border-thickness-left").spinner("value", 1);
                        $($this).hasClass("color-picker-top") && 0 == $(".control-border-thickness-top").spinner("value") && $(".control-border-thickness-top").spinner("value", 1);
                        $($this).hasClass("color-picker-right") && 0 == $(".control-border-thickness-right").spinner("value") && $(".control-border-thickness-right").spinner("value", 1);
                        $($this).hasClass("color-picker-bottom") && 0 == $(".control-border-thickness-bottom").spinner("value") && $(".control-border-thickness-bottom").spinner("value", 1);
                        if ($($this).hasClass("color-picker-all") && 0 == $(".control-border-thickness-all").spinner("value")) {
                            $(".control-border-thickness-left").spinner("value", 1);
                            $(".control-border-thickness-top").spinner("value", 1);
                            $(".control-border-thickness-right").spinner("value", 1);
                            $(".control-border-thickness-bottom").spinner("value", 1);
                            $(".control-border-thickness-all").spinner("value", 1);
                        }
                        var common = new impCommon.Common.CommonMethodsJQ(), borderLeft = $(".control-border-thickness-left").spinner("value"), borderTop = $(".control-border-thickness-top").spinner("value"), borderRight = $(".control-border-thickness-right").spinner("value"), borderBottom = $(".control-border-thickness-bottom").spinner("value"), borderRadius = $(".control-border-thickness-radius").spinner("value");
                        void 0 != borderRadius && selectedElement.css("border-radius", borderRadius + "px");
                        if (jQuery($this).hasClass("color-picker-all")) {
                            jQuery(".color-picker").val(jQuery($this).val());
                            jQuery(".color-picker").keyup();
                        }
                        if (void 0 != borderLeft) {
                            selectedElement.css("border-left-width", borderLeft + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-left").val();
                            selectedElement.css("border-left-color", "#" + color);
                        }
                        if (void 0 != borderTop) {
                            selectedElement.css("border-top-width", borderTop + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-top").val();
                            selectedElement.css("border-top-color", "#" + color);
                        }
                        if (void 0 != borderRight) {
                            selectedElement.css("border-right-width", borderRight + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-right").val();
                            selectedElement.css("border-right-color", "#" + color);
                        }
                        if (void 0 != borderBottom) {
                            selectedElement.css("border-bottom-width", borderBottom + "px");
                            var color = $($this).closest(".control-border-controls").find(".color-picker-bottom").val();
                            selectedElement.css("border-bottom-color", "#" + color);
                        }
                        jQuery(".border-style-selected").find(".border-style").hasClass("border-style-solid") ? selectedElement.css("border-style", "solid") : jQuery(".border-style-selected").find(".border-style").hasClass("border-style-dotted") ? selectedElement.css("border-style", "dotted") : jQuery(".border-style-selected").find(".border-style").hasClass("border-style-dashed") ? selectedElement.css("border-style", "dashed") : jQuery(".border-style-selected").find(".border-style").hasClass("border-style-groove") && selectedElement.css("border-style", "groove");
                        if (0 == borderLeft && 0 == borderTop && 0 == borderRight && 0 == borderBottom) {
                            common.RemoveStyle(selectedElement, "border-left-width");
                            common.RemoveStyle(selectedElement, "border-top-width");
                            common.RemoveStyle(selectedElement, "border-bottom-width");
                            common.RemoveStyle(selectedElement, "border-right-width");
                            common.RemoveStyle(selectedElement, "border-color");
                            common.RemoveStyle(selectedElement, "border");
                        }
                        selectedElement.removeClass("image-selection");
                    }
                } catch (ex) {}
                BorderJQ.isSelectProcessing = !1;
            };
            BorderJQ.ProcessSelectedValues = function() {
                BorderJQ.isSelectProcessing = !0;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selectedElement) {
                    selectedElement.removeClass("image-selection");
                    var borderLeft = selectedElement.css("border-left-width"), borderTop = selectedElement.css("border-top-width"), borderRight = selectedElement.css("border-right-width"), borderBottom = selectedElement.css("border-bottom-width"), borderRadius = selectedElement.css("border-top-left-radius"), colorLeft = selectedElement.css("border-left-color"), colorTop = selectedElement.css("border-top-color"), colorRight = selectedElement.css("border-right-color"), colorBottom = selectedElement.css("border-bottom-color");
                    if (void 0 != borderRadius) {
                        borderRadius = borderRadius.replace("px", "");
                        jQuery(".control-border-thickness-radius").spinner("value", borderRadius);
                    }
                    if (void 0 != borderLeft) {
                        borderLeft = borderLeft.replace("px", "");
                        jQuery(".control-border-thickness-left").spinner("value", borderLeft);
                    }
                    if (void 0 != borderTop) {
                        borderTop = borderTop.replace("px", "");
                        jQuery(".control-border-thickness-top").spinner("value", borderTop);
                    }
                    if (void 0 != borderRight) {
                        borderRight = borderRight.replace("px", "");
                        jQuery(".control-border-thickness-right").spinner("value", borderRight);
                    }
                    if (void 0 != borderBottom) {
                        borderBottom = borderBottom.replace("px", "");
                        jQuery(".control-border-thickness-bottom").spinner("value", borderBottom);
                    }
                    borderLeft == borderTop && borderLeft == borderRight && borderLeft == borderBottom && jQuery(".control-border-thickness-all").spinner("value", borderLeft);
                    if (void 0 != colorLeft) {
                        colorLeft = BorderJQ.RgbToHex(colorLeft);
                        jQuery(".color-picker-left").val("#" + colorLeft);
                    }
                    if (void 0 != colorTop) {
                        colorTop = BorderJQ.RgbToHex(colorTop);
                        jQuery(".color-picker-top").val("#" + colorTop);
                    }
                    if (void 0 != colorRight) {
                        colorRight = BorderJQ.RgbToHex(colorRight);
                        jQuery(".color-picker-right").val("#" + colorRight);
                    }
                    if (void 0 != colorBottom) {
                        colorBottom = BorderJQ.RgbToHex(colorBottom);
                        jQuery(".color-picker-bottom").val("#" + colorBottom);
                    }
                    colorLeft == colorTop && colorLeft == colorRight && colorLeft == colorBottom && jQuery(".color-picker-all").val("#" + colorLeft);
                    jQuery(".color-picker").keyup();
                    "inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display") && selectedElement.addClass("image-selection");
                }
                BorderJQ.isSelectProcessing = !1;
            };
            BorderJQ.RgbToHex = function(str) {
                try {
                    var r, g, b, rgb = str.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",");
                    r = Number(rgb[0]);
                    g = Number(rgb[1]);
                    b = Number(rgb[2]);
                    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                } catch (ex) {
                    return "";
                }
            };
            BorderJQ.ProcessSelectNotify = function() {
                BorderJQ.ProcessSelectedValues();
            };
            BorderJQ.controlId = ".control-border";
            BorderJQ.controlBtnApply = ".action-button-border-apply";
            BorderJQ.isSelectProcessing = !1;
            return BorderJQ;
        }();
        Border.BorderJQ = BorderJQ;
    }(Border = exports.Border || (exports.Border = {}));
});

define("common/commonmethodsjq", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Common;
    !function(Common) {
        var CommonMethodsJQ = function() {
            function CommonMethodsJQ() {}
            CommonMethodsJQ.prototype.Trim = function(str) {
                return void 0 != str && "string" == typeof str.toLowerCase() ? this.TrimRight(this.TrimLeft(str)) : void 0;
            };
            CommonMethodsJQ.prototype.RemoveStyle = function(element, style) {
                if (void 0 != style) {
                    style = style.toLowerCase();
                    var search = new RegExp(style + "[^;]+;?", "g");
                    jQuery(element).each(function() {
                        $(this).attr("style", function(i, style) {
                            if (void 0 != style) {
                                var result = style.replace(search, "");
                                return result;
                            }
                        });
                    });
                }
            };
            CommonMethodsJQ.prototype.RemoveSingleStyle = function(element, style) {
                if (void 0 != style) {
                    style = style.toLowerCase();
                    var search = new RegExp(style + "s*:.*?;", "g");
                    jQuery(element).each(function() {
                        $(this).attr("style", function(i, style) {
                            if (void 0 != style) {
                                var result = style.replace(search, "");
                                return result;
                            }
                        });
                    });
                }
            };
            CommonMethodsJQ.prototype.TrimLeft = function(str) {
                if (void 0 != str && "string" == typeof str.toLowerCase()) {
                    for (var trimmedIndex = 0, i = 0; i < str.length; i++) {
                        " " == str[i] && (trimmedIndex = i + 1);
                        if (i + 1 < str.length && " " != str[i + 1]) break;
                    }
                    trimmedIndex < str.length && (str = str.toString().slice(trimmedIndex));
                }
                return str;
            };
            CommonMethodsJQ.prototype.TrimRight = function(str) {
                if (void 0 != str && "string" == typeof str.toLowerCase()) {
                    for (var trimmedIndex = str.length, i = str.length - 1; i > -1; i--) {
                        " " == str[i] && (trimmedIndex = i);
                        if (i - 1 > -1 && " " != str[i - 1]) break;
                    }
                    trimmedIndex > -1 && (str = str.toString().slice(0, trimmedIndex));
                    return str;
                }
            };
            CommonMethodsJQ.prototype.RemoveSpaces = function(str) {
                void 0 != str && "string" == typeof str.toLowerCase() && (str = str.replace(/ /g, ""));
                return str;
            };
            CommonMethodsJQ.prototype.Insert = function(index, sourceString, insertString) {
                return void 0 != sourceString && void 0 != insertString && "string" == typeof sourceString.toLowerCase() && "string" == typeof insertString.toLowerCase() ? index > 0 && index < sourceString.length ? sourceString.substring(0, index) + insertString + sourceString.substring(index, sourceString.length) : sourceString : void 0;
            };
            return CommonMethodsJQ;
        }();
        Common.CommonMethodsJQ = CommonMethodsJQ;
    }(Common = exports.Common || (exports.Common = {}));
});

define("Controls/ColorJQ", [ "require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../common/commonmethodsjq" ], function(require, exports, impWatch, impUndoManager, impCommon) {
    "use strict";
    var Color, isColorReady = !1;
    !function(Color) {
        var ColorJQ = function() {
            function ColorJQ() {}
            ColorJQ.prototype.Init = function() {
                ColorJQ.AttachColor();
            };
            ColorJQ.AttachColor = function() {
                jQuery(document).ready(function() {
                    if (0 == isColorReady) {
                        isColorReady = !0;
                        jQuery(".remove-bi").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background-image");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-border").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "border");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-opacity").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "opacity");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-padding").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "padding");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-margin").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveStyle(selectedElement, "margin");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".remove-gradient").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text") : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image"));
                            if (void 0 != selectedElement) {
                                var comm = new impCommon.Common.CommonMethodsJQ();
                                comm.RemoveSingleStyle(selectedElement, "background");
                                comm.RemoveSingleStyle(selectedElement, "background-color");
                                comm.RemoveSingleStyle(selectedElement, "color");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                                impWatch.Watch.MouseJQ.ResetAfterClear();
                            }
                        });
                        jQuery(".fb-color-picker-gradient").colorpicker();
                        jQuery(".fb-color-picker").colorpicker();
                        jQuery(".fb-color-picker").trigger("keyup");
                        jQuery(".fb-color-picker").on("change", function() {
                            if (0 == ColorJQ.isSelectProcessing) {
                                impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text") : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image"));
                                if (void 0 != selectedElement) {
                                    if (jQuery(this).hasClass("control-color-foreground-color")) {
                                        var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
                                        colorForeground = colorForeground.replace("#", "");
                                        selectedElement.css("color", "#" + colorForeground);
                                        "" != colorForeground && selectedElement.each(function(index, $this) {
                                            var $$this = jQuery($this);
                                            if ($$this.hasClass("jq-editor-link") || $$this.hasClass("jq-normal-link")) {
                                                if (jQuery("page").find("." + $$this.find("a").first().attr("id")).length > 0) jQuery("page").find("." + $$this.find("a").first().attr("id")).html(""); else {
                                                    var style = "<style class='" + $$this.find("a").first().attr("id") + "'> </span>";
                                                    jQuery("page").append(style);
                                                }
                                                var linkId = "#" + $$this.find("a").first().attr("id"), linkColor = "#" + colorForeground, style = " " + linkId + ":link { color:" + linkColor + ";}" + linkId + ":visited { color:" + linkColor + ";}" + linkId + ":hover { color:" + linkColor + ";}" + linkId + ":active { color:" + linkColor + ";}";
                                                jQuery("page").find("." + $$this.find("a").first().attr("id")).html(style);
                                            }
                                        });
                                    } else if (jQuery(this).hasClass("control-color-background-color")) {
                                        var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                        selectedElement.hasClass("empty-container-text");
                                        colorBackground = colorBackground.replace("#", "");
                                        selectedElement.css("background-color", "#" + colorBackground);
                                    }
                                    var undo = new impUndoManager.Manager.UndoManager();
                                    undo.BeforeOperation();
                                }
                            }
                        });
                        jQuery(".fb-color-picker-gradient").on("change", function() {
                            impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text") : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image"));
                            if (void 0 != selectedElement) {
                                var colorOne = $(this).closest(".control-color-controls").find(".control-color-gradient-color-1").val(), colorTwo = $(this).closest(".control-color-controls").find(".control-color-gradient-color-2").val();
                                colorOne = colorOne.replace("#", "");
                                colorTwo = colorTwo.replace("#", "");
                                for (var browserSpecificGradient = [ "-webkit-linear-gradient", "-o-linear-gradient", "-moz-linear-gradient", "linear-gradient" ], i = 0; i < browserSpecificGradient.length; i++) selectedElement.css("background", "" + browserSpecificGradient[i] + "(#" + colorOne + ",#" + colorTwo + ")");
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(ColorJQ.controlBtnApply).on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text") : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image"));
                            if (void 0 != selectedElement) {
                                var colorForeground = $(this).closest(".control-color-controls").find(".control-color-foreground-color").val();
                                selectedElement.css("color", "#" + colorForeground);
                                var colorBackground = $(this).closest(".control-color-controls").find(".control-color-background-color").val();
                                selectedElement.css("background-color", "#" + colorBackground);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            ColorJQ.ProcessSelectedValues = function() {
                ColorJQ.isSelectProcessing = !0;
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                selectedElement.hasClass("empty-container-text") ? selectedElement = selectedElement.find(".jq-plus-container-text") : selectedElement.hasClass("empty-container-image") && (selectedElement = selectedElement.find(".jq-plus-container-image"));
                if (void 0 != selectedElement) {
                    var str = selectedElement.css("color");
                    if (void 0 != str) {
                        str = ColorJQ.RgbToHex(str);
                        jQuery(".control-color-foreground-color").val("#" + str);
                        jQuery(".control-color-foreground-color").trigger("keyup");
                    }
                    var str = selectedElement.css("background-color");
                    if (void 0 != str && "transparent" != str && "rgba(0, 0, 0, 0)" != str) {
                        str = ColorJQ.RgbToHex(str);
                        jQuery(".control-color-background-color").val("#" + str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    } else {
                        str = "transparent";
                        jQuery(".control-color-background-color").val(str);
                        jQuery(".control-color-background-color").trigger("keyup");
                    }
                }
                ColorJQ.isSelectProcessing = !1;
            };
            ColorJQ.RgbToHex = function(str) {
                try {
                    var r, g, b, rgb = str.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",");
                    r = Number(rgb[0]);
                    g = Number(rgb[1]);
                    b = Number(rgb[2]);
                    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                } catch (ex) {
                    return "";
                }
            };
            ColorJQ.ProcessSelectNotify = function() {
                ColorJQ.ProcessSelectedValues();
            };
            ColorJQ.controlId = "#control-color";
            ColorJQ.controlBtnApply = ".action-button-color-apply";
            ColorJQ.isSelectProcessing = !1;
            return ColorJQ;
        }();
        Color.ColorJQ = ColorJQ;
    }(Color = exports.Color || (exports.Color = {}));
});

define("Watch/ClipBoardJQ", [ "require", "exports", "../Controls/ImageJQ" ], function(require, exports, impImage) {
    "use strict";
    var ClipBoard;
    !function(ClipBoard) {
        var ClipBoardJQ = function() {
            function ClipBoardJQ() {}
            ClipBoardJQ.prototype.InsertImage = function(url) {
                impImage.Image.SelfJQ.InsertImage(url);
            };
            ClipBoardJQ.prototype.InsertText = function(text) {};
            return ClipBoardJQ;
        }();
        ClipBoard.ClipBoardJQ = ClipBoardJQ;
    }(ClipBoard = exports.ClipBoard || (exports.ClipBoard = {}));
});

define("Watch/CopyPasteJQ", [ "require", "exports", "./WatchMouseJQ", "../Error/ErrorJQ", "../Controls/ControlCommonJQ", "../UndoManager/UndoManager", "./ClipBoardJQ", "../Common/OperationJQ" ], function(require, exports, impWatch, impError, impCommonCode, impUndoManager, impClipboard, impOperaction) {
    "use strict";
    var CopiedElement, CopyPaste, isCut = !1, ClipBorad = function() {
        function ClipBorad() {}
        return ClipBorad;
    }();
    !function(CopyPaste) {
        var CopyPasteJQ = function() {
            function CopyPasteJQ() {}
            CopyPasteJQ.Const = function() {
                CopyPasteJQ.ClipBoardData = new ClipBorad();
            };
            CopyPasteJQ.prototype.Init = function() {};
            CopyPasteJQ.SetClipBoard = function(clipText) {
                CopyPasteJQ.ClipBoardData.data = clipText;
            };
            CopyPasteJQ.IsImageUrl = function(s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (1 == regexp.test(s) && s.length >= 5) for (var lowerUrl = s.toLowerCase(), types = [ "jpeg", "jpg", "png", "gif" ], i = 0; i < types.length; i++) {
                    var _type = lowerUrl.substr(lowerUrl.length - 5, 5), ts = _type.split(".");
                    if (ts.length >= 2 && ts[1] == types[i]) return !0;
                }
                return !1;
            };
            CopyPasteJQ.CreateLinkContainer = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                void 0 == selectedElement && (selectedElement = jQuery("#nononoelement"));
                var container = jQuery(document.createElement("div"));
                impOperaction.Operation.AfterOperationJQ.Execute();
                container.addClass("key empty-container links-container image-text-other");
                selectedElement.append(container);
                var undo = new impUndoManager.Manager.UndoManager();
                undo.BeforeOperation();
                impCommonCode.ControlCommon.Code.DestroyResizable();
                impCommonCode.ControlCommon.Code.Execute();
            };
            CopyPasteJQ.Delete = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                new impError.ErrorHandle.ErrorJQ();
                if (void 0 != selectedElement) {
                    if (selectedElement.hasClass("jq-Header") || selectedElement.hasClass("jq-MenuBar") || selectedElement.hasClass("jq-Content") || selectedElement.hasClass("jq-Footer")) selectedElement.hide(); else if (selectedElement.hasClass("jq-image-block-image")) selectedElement.closest(".jq-plus-container").remove(); else if (selectedElement.hasClass("jq-text-block")) selectedElement.closest(".jq-plus-container").remove(); else if (selectedElement.hasClass("column")) {
                        var columnsCount = selectedElement.closest(".row").children(".column").length, columnSize = "", columnClass = "";
                        if (2 == columnsCount) {
                            columnClass = "col-xs-48";
                            columnSize = "48";
                        }
                        if (3 == columnsCount) {
                            columnClass = "col-xs-24";
                            columnSize = "24";
                        }
                        if (4 == columnsCount) {
                            columnClass = "col-xs-16";
                            columnSize = "16";
                        }
                        var lastColumn;
                        selectedElement.closest(".row").children(".column").each(function() {
                            lastColumn = jQuery(this);
                            var prevSize = jQuery(this).attr("xs-column-size"), cssClass = "col-xs-" + prevSize;
                            if (cssClass != columnClass) {
                                jQuery(this).addClass(columnClass);
                                jQuery(this).attr("xs-column-size", columnSize);
                                jQuery(this).removeClass(cssClass);
                            }
                        });
                        selectedElement.remove();
                    } else selectedElement.remove();
                    var undomanager = new impUndoManager.Manager.UndoManager();
                    undomanager.BeforeOperation();
                }
            };
            CopyPasteJQ.Cut = function() {
                isCut = !0;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selecedElement) {
                    selecedElement.removeClass("image-selection");
                    if (selecedElement.hasClass("root-elements")) {
                        CopiedElement = jQuery("#noelement--x");
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("You can only cut Text , Image.");
                    } else CopiedElement = selecedElement.hasClass("jq-image-block-image") ? selecedElement.closest(".jq-plus-container") : selecedElement.hasClass("jqte") ? selecedElement.closest(".jq-plus-container") : selecedElement;
                }
            };
            CopyPasteJQ.Copy = function() {
                isCut = !1;
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selecedElement) if (selecedElement.hasClass("root-elements")) {
                    CopiedElement = jQuery("#noelement--x");
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionSuccess("You can only copy Text , Image.");
                } else {
                    selecedElement.removeClass("image-selection");
                    impCommonCode.ControlCommon.Code.DestroyResizable();
                    CopiedElement = selecedElement.hasClass("jq-image-block-image") ? selecedElement.closest(".jq-plus-container").clone() : selecedElement.hasClass("jqte") ? selecedElement.closest(".jq-plus-container").clone() : selecedElement.clone();
                    impCommonCode.ControlCommon.Code.DestroyResizable();
                    impCommonCode.ControlCommon.Code.Execute();
                }
            };
            CopyPasteJQ.Paste = function() {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement, errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (0 != jQuery(CopiedElement).length) {
                    if (void 0 != selecedElement) if (selecedElement.hasClass("column") || selecedElement.hasClass("image-text-other")) {
                        if (jQuery.contains(CopiedElement[0], selecedElement[0])) errorHandler.ActionFail("You can only cut and paste element in to same element."); else {
                            CopiedElement.children(".ui-resizable-handle").css("margin", "0px");
                            1 == isCut && impCommonCode.ControlCommon.Code.DestroyResizable();
                            impOperaction.Operation.AfterOperationJQ.Execute();
                            selecedElement.hasClass("column") ? impWatch.Watch.MouseJQ.nearestElement.length > 0 ? impWatch.Watch.MouseJQ.nearestElement.after(CopiedElement) : selecedElement.append(CopiedElement) : selecedElement.after(CopiedElement);
                        }
                        1 == isCut && (CopiedElement = jQuery("#noelement--x"));
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                        isCut = !1;
                    } else errorHandler.ActionFail("Please select a [Column] to paste.");
                } else errorHandler.ActionFail("Please copy/cut a element.");
            };
            CopyPasteJQ.PasteClipBoard = function() {
                var selecedElement = impWatch.Watch.MouseJQ.selectedElement, errorHandler = new impError.ErrorHandle.ErrorJQ();
                if (void 0 != selecedElement) {
                    if (selecedElement.hasClass("empty-container") || selecedElement.hasClass("column")) {
                        if (void 0 != CopyPasteJQ.ClipBoardData.data && "" != CopyPasteJQ.ClipBoardData.data) if (CopyPasteJQ.IsImageUrl(CopyPasteJQ.ClipBoardData.data)) {
                            var clp = new impClipboard.ClipBoard.ClipBoardJQ();
                            clp.InsertImage(CopyPasteJQ.ClipBoardData.data);
                        } else {
                            var clp = new impClipboard.ClipBoard.ClipBoardJQ();
                            clp.InsertText(CopyPasteJQ.ClipBoardData.data);
                        }
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                } else errorHandler.ActionFail("You can only paste element to a column and empty blocks.");
            };
            CopyPasteJQ.staticRun = CopyPasteJQ.Const();
            return CopyPasteJQ;
        }();
        CopyPaste.CopyPasteJQ = CopyPasteJQ;
    }(CopyPaste = exports.CopyPaste || (exports.CopyPaste = {}));
});

define("cssManager/cssManagerJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var CssManager;
    !function(CssManager) {
        var Menu = function() {
            function Menu() {}
            return Menu;
        }();
        CssManager.Menu = Menu;
        var CssManagerJQ = function() {
            function CssManagerJQ() {
                this.cssPath = "/Content/Menus/[MenuName]/[Color]/menu.css";
                this.jsPath = "/Content/Menus/[MenuName]/[Color]/menu.js";
                this.htmlPath = "/Content/Menus/[MenuName]/[Color]/index.html";
                this.Menus = [ {
                    Id: 1,
                    MenuName: "2",
                    Color: "green",
                    HtmlPath: "",
                    MenuId: 2
                }, {
                    Id: 2,
                    MenuName: "2",
                    Color: "blue",
                    HtmlPath: "",
                    MenuId: 3
                } ];
            }
            CssManagerJQ.prototype.GetHtml = function(fileId) {
                try {
                    this.Menus[fileId];
                    var m;
                    m = this.Menus[fileId];
                    var html = this.htmlPath.replace("[MenuName]", m.MenuName);
                    html = html.replace("[Color]", m.Color);
                    return html;
                } catch (ex) {}
            };
            CssManagerJQ.prototype.Add = function(fileId) {
                try {
                    this.Menus[fileId];
                    var m;
                    m = this.Menus[fileId];
                    var css = this.cssPath.replace("[MenuName]", m.MenuName);
                    css = css.replace("[Color]", m.Color);
                    var js = this.jsPath.replace("[MenuName]", m.MenuName);
                    js = js.replace("[Color]", m.Color);
                    jQuery("head").append("<link menu-id='" + m.Id + "' rel='stylesheet' href='" + css + "'/>");
                    jQuery("head").append("<script menu-id='" + m.Id + "' type='text/javascript' src='" + js + "'> </script>");
                } catch (ex) {}
            };
            CssManagerJQ.prototype.Remove = function(fileId) {
                try {
                    this.Menus[fileId];
                    jQuery("link[menu-id=' " + fileId + "']").remove();
                    jQuery("script[menu-id='" + fileId + "']").remove();
                } catch (ex) {}
            };
            return CssManagerJQ;
        }();
        CssManager.CssManagerJQ = CssManagerJQ;
    }(CssManager = exports.CssManager || (exports.CssManager = {}));
});

define("Menu/MenuLinksJQ", [ "require", "exports", "../Error/ErrorJQ" ], function(require, exports, impError) {
    "use strict";
    var Page;
    !function(Page) {
        var Menu;
        !function(Menu) {
            var MenuLinksJQ = function() {
                function MenuLinksJQ() {}
                MenuLinksJQ.prototype.Get = function(id) {
                    var MenuLinks;
                    if (1 == id) return MenuLinks = [ {
                        name: "home",
                        pageLocation: "#",
                        text: "Home",
                        subLinks: [ {
                            name: "SubLink Home 1",
                            pageLocation: "/x2",
                            text: "SubLink Home 1",
                            subLinks: [ {
                                name: "SubLink Home 1.1",
                                pageLocation: "/x1",
                                text: "SubLink Home 1.1   ",
                                subLinks: [ {
                                    name: "SubLink Home 1.1.1",
                                    pageLocation: "x2",
                                    text: "SubLink Home 1.1.1",
                                    subLinks: []
                                } ]
                            } ]
                        } ]
                    }, {
                        name: "Contact",
                        pageLocation: "/eventvideos",
                        text: "Contact Us",
                        subLinks: []
                    }, {
                        name: "About",
                        pageLocation: "#",
                        text: "About Us",
                        subLinks: [ {
                            name: "SubLink Home 1",
                            pageLocation: "/x2",
                            text: "SubLink Home 1",
                            subLinks: [ {
                                name: "SubLink Home 1.1",
                                pageLocation: "/x1",
                                text: "SubLink Home 1.1   ",
                                subLinks: [ {
                                    name: "SubLink Home 1.1.1",
                                    pageLocation: "x2",
                                    text: "SubLink Home 1.1.1",
                                    subLinks: []
                                } ]
                            } ]
                        } ]
                    } ];
                    if (2 == id) return [ {
                        name: "Home",
                        pageLocation: "/x1",
                        text: "Home",
                        subLinks: [ {
                            name: "SubLink Home 1",
                            pageLocation: "/x2",
                            text: "SubLink Home 1",
                            subLinks: [ {
                                name: "SubLink Home 1.1",
                                pageLocation: "/x1",
                                text: "SubLink Home 1.1   ",
                                subLinks: [ {
                                    name: "SubLink Home 1.1.1",
                                    pageLocation: "x2",
                                    text: "SubLink Home 1.1.1",
                                    subLinks: []
                                } ]
                            } ]
                        } ]
                    }, {
                        name: "About",
                        pageLocation: "x1",
                        text: "About",
                        externalLocation: !0,
                        subLinks: [ {
                            name: "SubLink About 1",
                            pageLocation: "/x2",
                            text: "SubLink About 1",
                            subLinks: [ {
                                name: "SubLink About 1.1",
                                pageLocation: "/x1",
                                text: "SubLink About 1.1",
                                subLinks: [ {
                                    name: "SubLink About 1.1.1",
                                    pageLocation: "x2",
                                    text: "SubLink About 1.1.1",
                                    subLinks: []
                                } ]
                            } ]
                        } ]
                    } ];
                    if (3 == id) return [ {
                        name: "Home",
                        pageLocation: "/nopage",
                        text: "Home",
                        subLinks: [ {
                            name: "SubLink Home 1",
                            pageLocation: "x1",
                            text: "SubLink Home 1",
                            subLinks: []
                        } ]
                    }, {
                        name: "About",
                        pageLocation: "x2",
                        text: "About",
                        externalLocation: !0,
                        subLinks: []
                    }, {
                        name: "Video Samples",
                        pageLocation: "http://www.http.com",
                        text: "Video Samples",
                        subLinks: []
                    }, {
                        name: "Event",
                        pageLocation: "/eventvideos",
                        text: "Event",
                        subLinks: [ {
                            name: "Videos",
                            pageLocation: "/eventvideos",
                            text: "Videos",
                            subLinks: []
                        } ]
                    } ];
                    new impError.ErrorHandle.ErrorJQ().LogMessage("menu not found");
                };
                return MenuLinksJQ;
            }();
            Menu.MenuLinksJQ = MenuLinksJQ;
        }(Menu = Page.Menu || (Page.Menu = {}));
    }(Page = exports.Page || (exports.Page = {}));
});

define("Menu/MenuTemplateJQ", [ "require", "exports", "../_Classes/UrlJQ", "../Menu/MenuLinksJQ" ], function(require, exports, impCommonUrl, impMenuLinks) {
    "use strict";
    var Page, firstElementActive = !1;
    !function(Page) {
        var Menu;
        !function(Menu) {
            var MenuTemplateJQ = function() {
                function MenuTemplateJQ() {
                    this.menuOneId = 1;
                    this.menuTwoId = 2;
                    this.menuThreeId = 3;
                    this.menuFourId = 4;
                    this.menuFiveId = 5;
                }
                MenuTemplateJQ.prototype.CreateMenuTemplate = function(id, className, menuLinks, menuDesignId) {
                    if (void 0 == menuLinks) {
                        menuLinks = new impMenuLinks.Page.Menu.MenuLinksJQ().Get(id);
                        this.currentMenuLinks = menuLinks;
                    }
                    var menuContainer;
                    if (void 0 != menuLinks && menuLinks.length > 0) {
                        menuContainer = jQuery("<div  id='menu-" + menuDesignId + "' class='jqMenuContainer" + className + "'> </div>");
                        var menuUl = this.CreateUL("menu", menuLinks);
                        menuContainer.append(menuUl);
                        menuContainer.prepend("<div class='rotator'></div>");
                    }
                    return menuContainer;
                };
                MenuTemplateJQ.prototype.CreateUL = function(ulName, menuLinks, level) {
                    void 0 === level && (level = 1);
                    for (var menuUl = jQuery("<ul class='" + ulName + "'> </ul>"), urlJQ = new impCommonUrl.Common.UrlJQ(), i = 0; i < menuLinks.length; i++) {
                        var pageLocation = menuLinks[i].pageLocation, href = urlJQ.PreparePageHref(pageLocation), parent = "";
                        void 0 != menuLinks[i].subLinks && menuLinks[i].subLinks.length > 0 && (parent = "has-children");
                        var menuitemLink = ' <a class="li ' + parent + '" href="' + href + '"> ' + menuLinks[i].text + "</a> ";
                        void 0 == menuitemLink && (menuitemLink = "");
                        var idName = menuLinks[i].name;
                        if (void 0 != idName) {
                            idName = idName.toString().replace(/\s+/g, "");
                            idName = idName.toUpperCase();
                            idName = "jqPrimaryMenu-" + idName;
                        }
                        var menuitem = jQuery("<li> " + menuitemLink + "</li> ");
                        menuUl.append(menuitem);
                        var subMenuUl;
                        if (void 0 != menuLinks[i].subLinks && menuLinks[i].subLinks.length > 0) {
                            level++;
                            subMenuUl = this.CreateUL("jqSubMenuUl", menuLinks[i].subLinks, level);
                            level--;
                        }
                        void 0 != subMenuUl && jQuery(menuitem).append(subMenuUl);
                        if (1 == level && 0 == firstElementActive) {
                            firstElementActive = !0;
                            menuitem.addClass("active");
                            menuitem.find(".li").first().addClass("active-link");
                        }
                        menuitem.addClass("level-" + level);
                    }
                    return menuUl;
                };
                return MenuTemplateJQ;
            }();
            Menu.MenuTemplateJQ = MenuTemplateJQ;
        }(Menu = Page.Menu || (Page.Menu = {}));
    }(Page = exports.Page || (exports.Page = {}));
});

define("Controls/Menujq", [ "require", "exports", "../Error/ErrorJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../cssManager/cssManagerJQ", "../Menu/MenuTemplateJQ" ], function(require, exports, impError, impPageCtx, impWatch, impCommonCode, impCssManager, impMenuTemplate) {
    "use strict";
    var Menu, globalMenuontainerId = 0, isMenuJQReady = !1, isTextInit = !1, nextId = 0;
    !function(Menu) {
        var MenuJQ = function() {
            function MenuJQ() {}
            MenuJQ.prototype.InitInsert = function() {};
            MenuJQ.prototype.GenerateContainerScopeId = function() {
                return "Menu_Container_" + ++globalMenuontainerId;
            };
            MenuJQ.prototype.Init = function() {
                if (0 == isTextInit) {
                    isTextInit = !0;
                    jQuery(document).ready(function() {
                        if (0 == isMenuJQReady) {
                            isMenuJQReady = !0;
                            MenuJQ.AttachClose();
                            MenuJQ.AttachInsertMenu();
                            MenuJQ.AttachNextMenu();
                            MenuJQ.AttachPrevMenu();
                        }
                    });
                }
            };
            MenuJQ.AttachNextMenu = function() {
                jQuery(".control-menu-next").on("click", function() {
                    var cssman = new impCssManager.CssManager.CssManagerJQ();
                    nextId++;
                    if (nextId < cssman.Menus.length) {
                        var src = cssman.GetHtml(nextId), iframe = jQuery(document.createElement("iframe"));
                        iframe.attr("src", src);
                        iframe.addClass("menu-iframe");
                        jQuery(".control-menu-styles").html("");
                        jQuery(".control-menu-styles").append(iframe);
                    } else nextId = cssman.Menus.length - 1;
                });
            };
            MenuJQ.AttachPrevMenu = function() {
                jQuery(".control-menu-prev").on("click", function() {
                    var cssman = new impCssManager.CssManager.CssManagerJQ();
                    nextId--;
                    if (nextId >= 0) {
                        var src = cssman.GetHtml(nextId), iframe = jQuery(document.createElement("iframe"));
                        iframe.attr("src", src);
                        iframe.addClass("menu-iframe");
                        jQuery(".control-menu-styles").html("");
                        jQuery(".control-menu-styles").append(iframe);
                    } else nextId = 0;
                });
            };
            MenuJQ.AttachClose = function() {
                jQuery(".control-menu").find(".close-button").on("click", function() {
                    jQuery(this).closest(".control-page").hide();
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).css("display", "none");
                    jQuery(impError.ErrorHandle.ErrorJQ.notifyId).html("");
                });
            };
            MenuJQ.AttachInsertMenu = function() {
                jQuery(".control-menu").find(".control-menu-insert").on("click", function(e, s) {
                    var cssMan = new impCssManager.CssManager.CssManagerJQ();
                    if (nextId >= 0 && nextId < cssMan.Menus.length) {
                        var menuDesignId = cssMan.Menus[nextId].MenuId, mt = new impMenuTemplate.Page.Menu.MenuTemplateJQ(), menu = mt.CreateMenuTemplate(1, "", void 0, menuDesignId), menuObj = new MenuJQ(), ctx = new impPageCtx.Page.ContextJQ(), selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                        if (void 0 != selectedRowOrColumn) {
                            var tbContainer = document.createElement("div");
                            jQuery(tbContainer).append(menu);
                            var tbcScopeId = menuObj.GenerateContainerScopeId();
                            jQuery(tbContainer).attr("scopeId", tbcScopeId);
                            if (1 == selectedRowOrColumn.hasClass("column") || selectedRowOrColumn.hasClass("empty-container")) {
                                var emptyc = document.createElement("span");
                                jQuery(emptyc).addClass("empty-container-menu key image-text-other ");
                                jQuery(emptyc).css("font-size", "14px");
                                var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                                plusContainer.removeClass("jq-plus-container");
                                plusContainer.addClass("jq-plus-container-text");
                                plusContainer.removeClass("jq-plus-container-not-used");
                                plusContainer.find(".jq-plus-content").append(tbContainer);
                                jQuery(emptyc).append(plusContainer);
                                ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), "", void 0, void 0, !0, void 0);
                                impCommonCode.ControlCommon.Code.DestroyResizable();
                                impCommonCode.ControlCommon.Code.Execute();
                            }
                            cssMan.Add(nextId);
                        }
                    }
                });
            };
            MenuJQ.ProcessShow = function() {
                var cssman = new impCssManager.CssManager.CssManagerJQ();
                nextId = 0;
                var src = cssman.GetHtml(nextId), iframe = jQuery(document.createElement("iframe"));
                iframe.attr("src", src);
                iframe.addClass("menu-iframe");
                jQuery(".control-menu-styles").html("");
                jQuery(".control-menu-styles").append(iframe);
            };
            MenuJQ.ProcessSelectNotify = function() {
                var errorHandler = new impError.ErrorHandle.ErrorJQ(), selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                void 0 != selectedElement && (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element")) && errorHandler.ActionHelp("Help : You cannot [Text] insert here.");
            };
            return MenuJQ;
        }();
        Menu.MenuJQ = MenuJQ;
    }(Menu = exports.Menu || (exports.Menu = {}));
});

define("controls/JQueryUI", [ "require", "exports", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager", "../Controls/TextJQ" ], function(require, exports, impWatch, impCommonMethods, impUndoManager, impText) {
    "use strict";
    var JQueryUI;
    !function(JQueryUI) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        JQueryUI.SmartObj = SmartObj;
        var UIHelper = function() {
            function UIHelper() {}
            return UIHelper;
        }();
        JQueryUI.UIHelper = UIHelper;
        var CommonCode = function() {
            function CommonCode() {}
            CommonCode.Draggable = function(element, cancelableCss) {
                jQuery(element).draggable({
                    cancel: cancelableCss,
                    revert: "invalid",
                    helper: "clone",
                    appendTo: "body",
                    distance: 5,
                    start: function(event, ui) {
                        CommonCode.DragStopped = !1;
                        jQuery("#interface_bottom").hide();
                        jQuery(ui.helper).addClass("jq-dragging");
                        jQuery("page").addClass("dragging");
                        CommonCode.DroppableEventCount = 0;
                        CommonCode.droppableCount++;
                        ui.helper.css("z-index", "9999999999");
                        ui.helper.css("opacity", "0.8");
                    },
                    stop: function(event, ui) {
                        CommonCode.DragStopped = !0;
                        jQuery("#interface_bottom").show();
                        jQuery(ui.helper).removeClass("jq-dragging");
                        jQuery("page").removeClass("dragging");
                        CommonCode.droppableCount = 2;
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        ui.helper.css("opacity", "1");
                        ui.helper.css("z-index", "0");
                    },
                    drag: function(event, ui) {
                        var element = jQuery(event.target).hasClass("key") ? jQuery(event.target) : jQuery(event.target).closest(".key");
                        element.addClass("image-selection-drag");
                    }
                });
            };
            CommonCode.ResizableImage = function() {
                var handleDefault = "e,se,s";
                $(".image-element").resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    delay: 0,
                    start: function(event, ui) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                    },
                    stop: function(event, ui) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                    },
                    resize: function(event, ui) {
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                    }
                });
            };
            CommonCode.commonHeight = function(height, ui) {
                return "error";
            };
            CommonCode.ResizableColumn = function() {
                var handleDefault = "e,s";
                $(".column").resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    distance: 0,
                    start: function(event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                        if ("se" == jQuery(ui.element).data("ui-resizable").axis || "s" == $(ui.element).data("ui-resizable").axis) {
                            ui.element.height(ui.element.height());
                            CommonCode.originalHeightBeforeDragStartStr = $(ui.helper).css("min-height");
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                        }
                        var nextElements = jQuery(ui.helper).nextAll(".column");
                        nextElements.hide();
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                    },
                    stop: function(event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        jQuery(".ui-resizable-se").removeClass("selected-resizable");
                        var height = ui.size.height, width = ui.size.width, originalHeight = ui.originalSize.height, originalWidth = ui.originalSize.width, rowWidth = jQuery(ui.helper).parent().width(), onePercentPixels = Math.floor(1 * rowWidth / 100), colXsOnePercentage = 2, colXsOnePixels = colXsOnePercentage * onePercentPixels, commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        jQuery(ui.helper).attr("style");
                        if (height != originalHeight) {
                            CommonCode.commonHeight(height, ui);
                            commonMethods.RemoveSingleStyle(ui.helper, "height");
                            jQuery(ui.helper).css("min-height", height);
                        }
                        commonMethods.RemoveStyle(ui.helper, "min-width");
                        commonMethods.RemoveStyle(ui.helper, "width");
                        var twoFour = 48;
                        if (width > originalWidth) {
                            var emptyXsCount = 0, nextElements = jQuery(ui.helper).nextAll(".column");
                            try {
                                for (var columns = ui.helper.parent().children(".column"), count = 0, j = 0; j < columns.length; j++) {
                                    var size = jQuery(columns[j]).attr("xs-column-size");
                                    if (void 0 != size && "" != size) {
                                        var num = Number(size);
                                        count += num;
                                    }
                                }
                                twoFour > count && (emptyXsCount = twoFour - count);
                                var extenedWidth = width - originalWidth, colXs = Math.floor(extenedWidth / colXsOnePixels);
                                0 == colXs && (colXs = 1);
                                var nextElementsCount = jQuery(ui.helper).nextAll(".column").length, eachXs = Math.floor(colXs / nextElementsCount);
                                0 == eachXs && (eachXs = 1);
                                for (var colXsTemp = colXs, i = 0; i < nextElements.length && colXsTemp > 0; i++) {
                                    var nextXsSize = Number(jQuery(nextElements[i]).attr("xs-column-size"));
                                    if (1 != nextXsSize) {
                                        var newNextXsSize = nextXsSize - eachXs;
                                        if (1 > newNextXsSize) {
                                            colXsTemp = colXsTemp - eachXs + 1;
                                            newNextXsSize = 1;
                                        } else colXsTemp -= eachXs;
                                        jQuery(nextElements[i]).removeClass("col-xs-" + nextXsSize);
                                        jQuery(nextElements[i]).addClass("col-xs-" + newNextXsSize);
                                        jQuery(nextElements[i]).attr("xs-column-size", newNextXsSize);
                                    }
                                }
                                var xsSize = Number(ui.helper.attr("xs-column-size")), newXsSize = xsSize + colXs - colXsTemp;
                                colXs == colXsTemp && (newXsSize += colXsTemp);
                                var allXs = 0;
                                ui.helper.parent().children(".column").each(function() {
                                    allXs += Number(jQuery(this).attr("xs-column-size"));
                                });
                                for (var overallMinusCurrent = allXs - xsSize, g = overallMinusCurrent + newXsSize; g > twoFour; ) {
                                    newXsSize--;
                                    g--;
                                }
                                jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                ui.helper.attr("xs-column-size", newXsSize);
                            } catch (ex) {}
                            nextElements.show();
                        } else if (originalWidth > width) {
                            var nextElements = jQuery(ui.helper).nextAll(".column");
                            try {
                                var extenedWidth = originalWidth - width, colXs = Math.floor(extenedWidth / colXsOnePixels);
                                0 == colXs && (colXs = 1);
                                var eachXs = Math.floor(colXs / 1);
                                0 == eachXs && (eachXs = 1);
                                var xsSize = Number(ui.helper.attr("xs-column-size"));
                                if (xsSize > 1) {
                                    var eachXsTemp = eachXs, newXsSize = xsSize - eachXs;
                                    if (0 > newXsSize) {
                                        eachXsTemp = eachXs + newXsSize;
                                        newXsSize = 1;
                                    }
                                    if (0 == newXsSize) {
                                        eachXsTemp = eachXs - 1;
                                        newXsSize = 1;
                                    }
                                    jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                    jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                    ui.helper.attr("xs-column-size", newXsSize);
                                    var colXsTemp = colXs;
                                    if (colXsTemp > 0) {
                                        var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size")), newNextXsSize = nextXsSize + eachXsTemp, allXs = 0;
                                        ui.helper.parent().children(".column").each(function() {
                                            allXs += Number(jQuery(this).attr("xs-column-size"));
                                        });
                                        for (var overallMinusNext = allXs - Number(jQuery(nextElements[0]).attr("xs-column-size")), g = overallMinusNext + newNextXsSize; g > twoFour; ) {
                                            newNextXsSize--;
                                            g--;
                                        }
                                        jQuery(nextElements[0]).removeClass("col-xs-" + nextXsSize);
                                        jQuery(nextElements[0]).addClass("col-xs-" + newNextXsSize);
                                        jQuery(nextElements[0]).attr("xs-column-size", newNextXsSize);
                                    }
                                }
                            } catch (ex) {}
                            nextElements.show();
                        }
                        var nextElementsToShow = jQuery(ui.helper).nextAll(".column");
                        nextElementsToShow.show();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {}
                });
            };
            CommonCode.OnResize = function(event, ui) {
                "se" == jQuery(ui.element).data("ui-resizable").axis || ("s" == $(ui.element).data("ui-resizable").axis ? ui.helper.height(ui.helper.height() + 20) : "s" == $(ui.element).data("ui-resizable").axis);
            };
            CommonCode.JustResizable = function(elementCss, handle) {
                var handleDefault = "e,se,s";
                void 0 != handle && "" != handle && (handleDefault = handle);
                $(elementCss).resizable({
                    handles: handleDefault,
                    minHeight: 0,
                    minWidth: 0,
                    delay: 0,
                    start: function(event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                    },
                    stop: function(event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        ui.size.height, ui.size.width;
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {}
                });
            };
            CommonCode.ResizableRootElements = function(elementCss, handle) {
                var handleDefault = "e,se,s";
                void 0 != handle && "" != handle && (handleDefault = handle);
                $(elementCss).resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    delay: 0,
                    start: function(event, ui) {
                        if ("se" == jQuery(ui.element).data("ui-resizable").axis || "s" == $(ui.element).data("ui-resizable").axis) {
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                            commonMethods.RemoveStyle(ui.helper, "height");
                        }
                    },
                    stop: function(event, ui) {
                        var height = ui.size.height;
                        ui.size.width;
                        if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("root-elements")) {
                            var common = new impCommonMethods.Common.CommonMethodsJQ();
                            common.RemoveStyle(jQuery(this), "min-height");
                            common.RemoveStyle(jQuery(this), "height");
                            jQuery(this).css("min-height", height);
                        }
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                    }
                });
            };
            CommonCode.ResizeCommon = function(selectedElement) {
                try {
                    var box = jQuery(selectedElement)[0].getBoundingClientRect(), circleLeftTopElement = jQuery("<div class='circle-deg' style='width:12px; border-radius:50%; height:12px; position:absolute; background-color:#00A1FF;'></div>"), circleRightTopElement = jQuery(circleLeftTopElement).clone(), circleLeftBottomElement = jQuery(circleLeftTopElement).clone(), circleRightBottomElement = jQuery(circleLeftTopElement).clone();
                    circleRightBottomElement.addClass("z-index-back");
                    var body = document.body, docElem = document.documentElement, scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop, scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + scrollTop - clientTop, left = box.left + scrollLeft - clientLeft, width = jQuery(selectedElement).css("width"), height = jQuery(selectedElement).css("height"), widthf = parseFloat(width.replace("px", "")), heightf = parseFloat(height.replace("px", ""));
                    circleLeftTopElement.css("left", left - 5);
                    circleLeftTopElement.css("top", top - 5);
                    circleLeftBottomElement.css("left", left - 5);
                    circleLeftBottomElement.css("top", top + heightf - 5);
                    circleRightTopElement.css("left", left + widthf - 5);
                    circleRightTopElement.css("top", top - 5);
                    circleRightBottomElement.css("left", left + widthf - 5);
                    circleRightBottomElement.css("top", top + heightf - 5);
                    jQuery(".circle-deg").remove();
                    jQuery("body").append(circleLeftTopElement);
                    jQuery("body").append(circleLeftBottomElement);
                    jQuery("body").append(circleRightTopElement);
                    jQuery("body").append(circleRightBottomElement);
                } catch (ex) {}
            };
            CommonCode.Resizable = function(elementCss, handle) {
                var handleDefault = "e,se,s";
                void 0 != handle && "" != handle && (handleDefault = handle);
                $(elementCss).resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    distance: 0,
                    start: function(event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                        $(ui.helper).closest(".key").after("<div class='height float-right dummy-div'></div>");
                        jQuery(".dummy-div").height(ui.helper.height() + 2);
                        if ("se" == jQuery(ui.element).data("ui-resizable").axis || "s" == $(ui.element).data("ui-resizable").axis) {
                            ui.helper.css("height", ui.helper.css("min-height"));
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                        }
                    },
                    stop: function(event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(".dummy-div").remove();
                        var height = ui.size.height;
                        ui.size.width;
                        if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("empty-container-image") || jQuery(this).hasClass("empty-container") || jQuery(this).hasClass("jq-plus-container-text") || jQuery(this).hasClass("jq-plus-container-image") || jQuery(this).hasClass("jq-text-block-container") || jQuery(this).hasClass("root-elements")) if (jQuery(this).hasClass("jq-plus-container-image") || jQuery(this).hasClass("empty-container-spacer")) {
                            jQuery(this).css("height", height);
                            jQuery(this).css("min-height", height);
                        } else {
                            jQuery(this).css("height", height);
                            jQuery(this).css("min-height", height);
                        }
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {
                        window.setTimeout(function() {
                            jQuery(".dummy-div").height() < ui.helper.height() && jQuery(".dummy-div").height(jQuery(".dummy-div").height() + 2);
                        }, 10);
                    }
                });
            };
            CommonCode.Droppable = function(elementCss) {
                $(elementCss).droppable({
                    greedy: !0,
                    tolerance: "pointer",
                    accept: ".bldr-draggable, .image-text-other",
                    drop: function(event, ui) {
                        if (1 != CommonCode.DroppableEventCount) {
                            CommonCode.DroppableEventCount = 1;
                            try {
                                window.smartObj = new JQueryUI.SmartObj();
                                window.smartObj.currentObj = void 0;
                                window.smartObj.command = "";
                                impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");
                                var x = event.clientX, y = event.clientY + $(document).scrollTop();
                                jQuery(".nearest-element").removeClass("nearest-element");
                                impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other") && (impWatch.Watch.MouseJQ.selectedElement = impWatch.Watch.MouseJQ.selectedElement.closest(".column"));
                                if (impWatch.Watch.MouseJQ.selectedElement.hasClass("column")) {
                                    var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other"), nearestLeftArray = [], nearestTopArray = [];
                                    if ($elements.length > 0) {
                                        $elements.each(function(index, _this) {
                                            var $this = $(_this), top = parseFloat($this.attr("top")), bottom = parseFloat($this.attr("bottom")), left = parseFloat($this.attr("left"));
                                            if (y >= top && bottom >= y && x >= left) {
                                                nearestLeftArray.push(left);
                                                nearestTopArray.push(top);
                                            }
                                        });
                                        var nearestLeft = 0, nearestTop = 0;
                                        nearestLeftArray.length > 0 && (nearestLeft = Math.max.apply(Math, nearestLeftArray));
                                        nearestTopArray.length > 0 && (nearestTop = Math.max.apply(Math, nearestTopArray));
                                        impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");
                                        impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();
                                        if (impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                            window.smartObj.currentObj = impWatch.Watch.MouseJQ.nearestElement;
                                            window.smartObj.command = "n";
                                        }
                                    }
                                }
                            } catch (ex) {}
                            impWatch.Watch.MouseJQ.selectedElement = jQuery(".image-selection-drag");
                            if (CommonCode.droppableCount >= 2 && void 0 != CommonCode.currentTarget && !ui.draggable.hasClass("control-drag-anywhere") && !ui.draggable.hasClass("bldr-draggable")) {
                                CommonCode.droppableCount++;
                                ui.draggable.css("opacity", "1");
                                if (ui.draggable.find(".jq-image-block-image").length > 0) {
                                    ui.draggable.css("position", "relative").css("left", "").css("top", "");
                                    void 0 != impWatch.Watch.MouseJQ.nearestElement && impWatch.Watch.MouseJQ.nearestElement.length > 0 ? impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.closest(".empty-container-image")) : CommonCode.currentTarget.closest(".key").hasClass("column") ? CommonCode.currentTarget.closest(".key").append(ui.draggable.closest(".empty-container-image")) : CommonCode.currentTarget.closest(".key").after(ui.draggable.closest(".empty-container-image"));
                                } else void 0 != impWatch.Watch.MouseJQ.nearestElement && impWatch.Watch.MouseJQ.nearestElement.length > 0 ? impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.css("position", "relative").css("left", "").css("top", "")) : CommonCode.currentTarget.closest(".key").hasClass("column") ? CommonCode.currentTarget.closest(".key").append(ui.draggable.css("position", "relative").css("left", "").css("top", "")) : CommonCode.currentTarget.closest(".key").after(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                jQuery(".image-selection").removeClass("image-selection");
                                event.stopPropagation();
                                CommonCode.currentTarget = null;
                                var undomanager = new impUndoManager.Manager.UndoManager();
                                undomanager.BeforeOperation();
                            } else if (!ui.draggable.hasClass("control-drag-anywhere")) {
                                ui.draggable.css("position", "relative").css("left", "").css("top", "");
                                if (ui.draggable.hasClass("bldr-draggable")) {
                                    var id = ui.draggable.attr("id");
                                    switch (id) {
                                      case "bldr-drgb-text":
                                        impText.Text.TextJQ.InsertTextBlock("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
                                        break;

                                      case "bldr-drgb-title":
                                        impText.Text.TextJQ.InsertTextBlock("<h2>Title Here.</h2>");
                                    }
                                }
                            }
                            jQuery(".image-text-other").each(function(index, _this) {
                                var $this = jQuery(_this), bottom = $this.offset().top + $this.height(), top = $this.offset().top, left = $this.offset().left;
                                $this.attr("top", top);
                                $this.attr("bottom", bottom);
                                $this.attr("left", left);
                            });
                            jQuery(".image-selection-drag").removeClass("image-selection-drag");
                            jQuery(".empty").removeClass("empty");
                            jQuery("#control-common-execute").trigger("click");
                        }
                    },
                    out: function(event, ui) {
                        CommonCode.droppableCount++;
                    },
                    over: function(event, ui) {
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        CommonCode.currentTarget = jQuery(event.target);
                        if (jQuery(event.target).hasClass("key")) {
                            if ("inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display")) {
                                jQuery(event.target).addClass("image-selection-drag");
                                impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target);
                            }
                        } else if ("inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display")) {
                            jQuery(event.target).closest(".key").addClass("image-selection-drag");
                            impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target).closest(".key");
                        }
                    }
                });
            };
            CommonCode.DraggableDestroy = function(element) {
                jQuery(element).each(function(index, _this) {
                    try {
                        var $this = $(_this);
                        $this.draggable("destroy");
                    } catch (ex) {}
                });
            };
            CommonCode.DroppableDestroy = function(elementCss) {
                jQuery(elementCss).each(function(index, _this) {
                    try {
                        var $this = $(_this);
                        $this.droppable("destroy");
                        $this.removeClass("ui-droppable");
                    } catch (ex) {}
                });
            };
            CommonCode.ResizableDestroy = function(elementCss) {
                jQuery(elementCss).each(function(index, _this) {
                    try {
                        var $this = $(_this);
                        $this.resizable("destroy");
                        jQuery($this).find("div").remove(".ui-resizable-handle");
                    } catch (ex) {
                        jQuery($this).find("div").remove(".ui-resizable-handle");
                    }
                });
            };
            CommonCode.droppableCount = 2;
            CommonCode.DroppableEventCount = 0;
            CommonCode.DragStopped = !0;
            CommonCode.originalHeightBeforeDragStartStr = "";
            return CommonCode;
        }();
        JQueryUI.CommonCode = CommonCode;
    }(JQueryUI = exports.JQueryUI || (exports.JQueryUI = {}));
});

define("page/PageElementBaseJQ", [ "require", "exports", "../PageElements/ElementJQ", "../Error/ErrorJQ", "../Common/CommonMethodsJQ", "../_Classes/UrlJQ", "../_Classes/Auth", "../Constants/ConstantsJQ", "../UndoManager/UndoManager", "../MalFormed/MalFormedJQ" ], function(require, exports, impElements, impError, impCommon, impUrl, impAuth, impConstants, impUndoManager, impmal) {
    "use strict";
    var Page, uniqureId = 5;
    !function(Page) {
        var debug, globalColumnId, globalRowId;
        globalColumnId = 0;
        globalRowId = 0;
        debug = !0;
        var PageElementBaseJQ = function() {
            function PageElementBaseJQ(page, typeName, paramRootWrapper, extra) {
                this.scopeId = "body";
                this.typeName = typeName;
                this.rootWrapper = paramRootWrapper;
                this.cssClassName = "jq-" + this.typeName;
                this.cssBackClassName = "jq-back-" + this.typeName;
                this.cssAdditionalStylingClassName = "jq-additional-" + this.typeName;
                this.templatePath = this.typeName;
                this.templateName = this.typeName + ".html";
                this.qualifiedTemplatePath = this.templatePath + "/" + this.templateName;
            }
            PageElementBaseJQ.prototype.GenerateColumnScopeId = function() {
                return "Column_" + ++globalColumnId;
            };
            PageElementBaseJQ.prototype.GenerateRowScopeId = function() {
                return "Row_" + ++globalRowId;
            };
            PageElementBaseJQ.prototype.Log = function(msg) {
                new impError.ErrorHandle.ErrorJQ().LogMessage(this.typeName + "JQ : " + msg);
            };
            PageElementBaseJQ.prototype.GetClassName = function() {
                return this.cssClassName;
            };
            PageElementBaseJQ.prototype.GetDotClassName = function() {
                return "." + this.GetClassName();
            };
            PageElementBaseJQ.prototype.GetScope = function() {
                if (void 0 == this.scopeId || "" == this.scopeId) {
                    this.scopeId = "body";
                    return jQuery(this.scopeId);
                }
                return jQuery(this.scopeId);
            };
            PageElementBaseJQ.prototype.SetScope = function(scopeid) {
                this.scopeId = scopeid;
                return this;
            };
            PageElementBaseJQ.prototype.Get = function() {
                return jQuery(this.GetScope()).find(this.GetDotClassName());
            };
            PageElementBaseJQ.prototype.Remove = function() {
                jQuery(this.Get()).remove();
            };
            PageElementBaseJQ.prototype.GetWrapper = function() {
                return 1 == this.ProcessKey() ? "body" == this.rootWrapper.toString().toLowerCase() ? jQuery(this.rootWrapper) : jQuery(this.GetScope()).find(this.rootWrapper) : void 0;
            };
            PageElementBaseJQ.prototype.Create = function(className) {
                if (1 == this.ProcessKey()) {
                    if (0 == this.Get().length) {
                        var elements = new impElements.Page.Elements.ElementJQ();
                        this.Add(this.GetWrapper(), elements.CreateDiv("", this.GetClassName() + " " + this.cssBackClassName + " " + this.cssAdditionalStylingClassName + "  key design-row row root-elements page-element jqMargin-0 "), void 0, void 0, void 0, void 0, void 0);
                    }
                    return this;
                }
            };
            PageElementBaseJQ.prototype.CreateNotExist = function() {
                0 == this.Get().length && this.Create(void 0);
            };
            PageElementBaseJQ.prototype.AddRow = function(root, colClassNames, className, adjustRow, adjustColumn, beforeAfter) {
                if (1 == this.ProcessKey()) {
                    var row;
                    0 == this.Get().length && this.Create(void 0);
                    if (void 0 != colClassNames && colClassNames.length > 0) {
                        var cols;
                        cols = colClassNames.toString().split(" ");
                        var elements = new impElements.Page.Elements.ElementJQ();
                        row = elements.CreateDiv("", "row key jqRootRow design-row");
                        for (var commonMethods = new impCommon.Common.CommonMethodsJQ(), i = 0; i < cols.length; i++) {
                            var colClassName = "", columnSize = "";
                            if (void 0 != cols[i] && "" != commonMethods.Trim(cols[i])) {
                                colClassName = cols[i].toString().replace(/,/g, " ");
                                columnSize = colClassName.toString().replace("col-xs-", "");
                                var column, elements2 = new impElements.Page.Elements.ElementJQ(), columnCss = colClassName + " " + className + " column key design-column column-number-" + i, contentClassName = "", contentCssClass = "";
                                if ("Content" == this.typeName || jQuery(root).hasClass("jq-Content")) {
                                    contentCssClass = "";
                                    0 == i ? contentCssClass = "SideBarLeft" : 1 == i ? contentCssClass = "MiddleContent" : 2 == i && (contentCssClass = "SideBarRight");
                                    contentClassName = "jq-" + contentCssClass + " jq-back-" + contentCssClass + " jq-additional-" + contentCssClass;
                                }
                                column = elements2.CreateDiv("", columnCss + " " + contentClassName);
                                var columnScopeId = this.GenerateColumnScopeId();
                                1 == debug && void 0 != column && column.append("<span class='debug-column-css debug-css' scopeId='" + columnScopeId + "'> " + columnScopeId + " </span> ");
                                column.attr("scopeId", columnScopeId);
                                column.attr("column-number", i);
                                column.attr("xs-column-size", columnSize);
                                column.css("min-height", "100px");
                                column.addClass("column-padding");
                                "" != contentClassName ? column.attr("key-css", ".jq-" + contentClassName) : void 0 != root ? column.attr("key-css", jQuery(root).attr("key-css") + " column") : column.attr("key-css", this.GetDotClassName() + " column");
                                void 0 != root ? row.attr("key-css", jQuery(root).attr("key-css") + " row") : row.attr("key-css", this.GetDotClassName() + " row");
                                jQuery(row).append(column);
                                void 0 != adjustColumn && this.AdjustElement(column, adjustColumn);
                            }
                        }
                    }
                    var rowScopeId = this.GenerateRowScopeId();
                    row.attr("scopeId", rowScopeId);
                    var nextPlus = "<div class='jq-row-plus-container jq-next-row-container'> <span class='jq-row-plus jq-next-row'> + </span> </div>", prevPlus = "<div class='jq-row-plus-container jq-prev-row-container'> <span class='jq-row-plus jq-prev-row'> + </span> </div>";
                    if (void 0 != row) {
                        row.prepend(prevPlus);
                        row.append(nextPlus);
                    }
                    void 0 != adjustRow && this.AdjustElement(row, adjustRow);
                    void 0 == root && (root = this.Get());
                    jQuery(row).prepend("<span title='Row' class=\"design-page-row \"> <span class='design-square-row'>Row</span> <span class='columns-add-text'>Columns <button class='jq-add-column btn btn-xs btn-danger'>+</button></span> </span>");
                    this.Add(root, row, void 0, void 0, void 0, void 0, beforeAfter);
                    if ((root.hasClass("empty-container-image") || root.hasClass("empty-container-text")) && !row.hasClass("row")) {
                        row.wrap("<div class='table-row'></div>");
                        row.before("<div class='table-cell'></div>");
                        row.addClass("table-cell");
                        return row.parent();
                    }
                    return row;
                }
            };
            PageElementBaseJQ.prototype.AdjustElement = function(element, adjust) {
                if (1 == this.ProcessKey() && void 0 != element && void 0 != adjust) {
                    void 0 != adjust.height && jQuery(element).css("min-height", adjust.height + "px");
                    void 0 != adjust.width && jQuery(element).css("width", adjust.width + "px");
                    if (void 0 != adjust.padding) {
                        var padding = adjust.padding;
                        if (void 0 != padding.all) jQuery(element).css("padding", padding.all + "px"); else {
                            void 0 != padding.left && jQuery(element).css("padding-left", padding.left + "px");
                            void 0 != padding.top && jQuery(element).css("padding-top", padding.top + "px");
                            void 0 != padding.right && jQuery(element).css("padding-right", padding.right + "px");
                            void 0 != padding.bottom && jQuery(element).css("padding-bottom", padding.bottom + "px");
                        }
                    }
                    if (void 0 != adjust.margin) {
                        var margin = adjust.margin;
                        if (void 0 != margin.all) jQuery(element).css("margin", margin.all + "px"); else {
                            void 0 != margin.left && jQuery(element).css("margin-left", margin.left + "px");
                            void 0 != margin.top && jQuery(element).css("margin-top", margin.top + "px");
                            void 0 != margin.right && jQuery(element).css("margin-right", margin.right + "px");
                            void 0 != margin.bottom && jQuery(element).css("margin-bottom", margin.bottom + "px");
                        }
                    }
                }
            };
            PageElementBaseJQ.prototype.Add = function(root, element, className, rowcolumn, front, useSmartObj, beforeAfter) {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed && 1 == this.ProcessKey()) {
                    void 0 != element && element.find(".debug-css").html("");
                    var row = 0, column = 0;
                    void 0 == root && (root = this.Get());
                    if (void 0 != rowcolumn) {
                        if ("" != rowcolumn) {
                            var rowcolumNumber = rowcolumn.toString().split(" ");
                            try {
                                var tempForTry = Number(rowcolumNumber[0]);
                                tempForTry = Number(rowcolumNumber[1]);
                            } catch (ex) {
                                this.Log("Add(): Row or Column is not a number : provided values (" + rowcolumn + ")");
                                return;
                            }
                            if (void 0 != rowcolumNumber && rowcolumNumber.length > 1) {
                                row = Number(rowcolumNumber[0]) + 1;
                                column = Number(rowcolumNumber[1]);
                            }
                        }
                        if (!(jQuery(root).find(".jqRootRow:nth-child(" + row + ")").children().eq(column).length > 0)) {
                            this.Log(" Add() : [" + jQuery(root).attr("class") + "] do not have row column [" + row + "," + column + "] to add element");
                            return;
                        }
                        root = jQuery(root).find(".jqRootRow:nth-child(" + row + ")").children().eq(column);
                    } else this.Log("Warning : Please Add Row to  [" + jQuery(root).attr("class") + "] ");
                    if (void 0 != element) {
                        if ("object" != typeof element) {
                            var tempElement = document.createElement("span");
                            jQuery(tempElement).append(element);
                            element = jQuery(tempElement);
                        }
                        jQuery(element).addClass(className);
                    }
                    element.attr("class");
                    if (1 == useSmartObj && null != window.smartObj && null != window.smartObj.currentObj && "" != window.smartObj.command) if ("n" == window.smartObj.command || "" == window.smartObj.command) {
                        $(window.smartObj.currentObj).after(element);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    } else {
                        $(window.smartObj.currentObj).before(element);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    } else if (1 == front) jQuery("div[src='xa.xml']").length > 2 && 1 == impAuth.Auth.AuthJQ.IsAuth && $(root).prepend(element); else if (jQuery("div[src='xa.xml']").length > 2 && 1 == impAuth.Auth.AuthJQ.IsAuth) {
                        if (void 0 == jQuery(root).attr("unique-id")) {
                            uniqureId++;
                            jQuery(root).attr("unique-id", uniqureId);
                        }
                        void 0 == beforeAfter ? $(root).append(element) : 1 == beforeAfter ? $(root).before(element) : $(root).after(element);
                        if (jQuery(element).hasClass("jq-Any")) {
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        } else {
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                    }
                }
            };
            PageElementBaseJQ.prototype.AddContent = function(content, className, rowcolumn, front) {
                this.CreateNotExist();
                void 0 != content && "" != content && this.Add(this.Get(), content, className, rowcolumn, front, void 0, void 0);
            };
            PageElementBaseJQ.prototype.AddTemplate = function(root, template, className, rowcolumn) {
                if (void 0 != root) {
                    (void 0 == template || "" == template) && (template = this.qualifiedTemplatePath);
                    template.indexOf(".html") > 0 ? this.Add(jQuery(root), jQuery('<div class="' + className + '" ng-include="\'/static/' + template + "'\"></div>"), className, rowcolumn, !1, void 0, void 0) : this.Add(jQuery(root), jQuery('<div class="' + className + '" ng-include="\'' + template + "'\"></div>"), className, rowcolumn, !1, void 0, void 0);
                } else new impError.ErrorHandle.ErrorJQ().LogMessage(" AddTemlate() > root is undefined");
            };
            PageElementBaseJQ.prototype.RemoveColumn = function(rowNumber, columnNumber) {
                var row = jQuery(this.Get()).find(".jqRootRow:nth-child(" + rowNumber + ")");
                jQuery(row).length > 0 ? jQuery(jQuery(row).children().eq(columnNumber)).remove() : this.Log("[" + rowNumber + "," + columnNumber + "] column not found");
            };
            PageElementBaseJQ.prototype.GetRow = function(rowNumber) {
                var row = jQuery(this.Get()).find(".jqRootRow:nth-child(" + rowNumber + ")");
                if (jQuery(row).length > 0) return jQuery(row);
                this.Log("[" + rowNumber + "] row not found");
            };
            PageElementBaseJQ.prototype.GetColumn = function(rowNumber, columnNumber) {
                rowNumber += 1;
                var row = jQuery(this.Get()).find(".jqRootRow:nth-child(" + rowNumber + ")");
                if (jQuery(row).length > 0) return jQuery(row).children().eq(columnNumber);
                this.Log("[" + rowNumber + "," + columnNumber + "] column not found");
            };
            PageElementBaseJQ.prototype.ProcessKey = function() {
                try {
                    var str = this.GetKey();
                    if (1 == this.IsInIframe()) return !1;
                    if (7 != impConstants.Constants.ConstantsJQ.SecureStrLength) return !1;
                    for (var j = 0, i = 6; i >= 0; i--) {
                        if (this.NextChar(str[j]) != impConstants.Constants.ConstantsJQ.Str[i]) return !1;
                        j++;
                    }
                    return !0;
                } catch (ex) {
                    return !1;
                }
            };
            PageElementBaseJQ.prototype.GetKey = function() {
                return new impUrl.Common.UrlJQ().GetDocumentLocation();
            };
            PageElementBaseJQ.prototype.IsInIframe = function() {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return !0;
                }
            };
            PageElementBaseJQ.prototype.NextChar = function(c) {
                return String.fromCharCode(c.charCodeAt(0) + 1);
            };
            return PageElementBaseJQ;
        }();
        Page.PageElementBaseJQ = PageElementBaseJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("page/anyjq", [ "require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var AnyJQ = function(_super) {
            function AnyJQ(extra) {
                _super.call(this, null, "Any", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            __extends(AnyJQ, _super);
            return AnyJQ;
        }(impPage.Page.PageElementBaseJQ);
        Page.AnyJQ = AnyJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

define("common/on", [ "require", "exports", "../page/anyjq", "../Watch/WatchMouseJQ" ], function(require, exports, impAny, impWatch) {
    "use strict";
    var On;
    !function(On) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        On.SmartObj = SmartObj;
        var Code = function() {
            function Code() {}
            Code.Execute = function() {
                Code.BindPlus();
                Code.BindEC();
            };
            Code.BindEC = function() {
                jQuery(".empty-container").unbind("click");
                jQuery(".empty-container").on("click", function() {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    void 0 != selectedElement && selectedElement.hasClass("empty-container");
                });
            };
            Code.BindPlus = function() {
                jQuery(".jq-prev-row").unbind("click");
                jQuery(".jq-prev-row").on("click", function() {
                    var currentRow = jQuery(this).parentsUntil(".row"), anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-48", "", void 0, void 0, !0);
                });
                jQuery(".jq-next-row").unbind("click");
                jQuery(".jq-next-row").on("click", function() {
                    var currentRow = jQuery(this).parentsUntil(".row"), anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-48", "", void 0, void 0, !1);
                });
                jQuery(".jq-plus-prev").unbind("click");
                jQuery(".jq-plus-prev").on("click", function(e) {
                    window.smartObj = new SmartObj();
                    jQuery(this).hasClass("image-text-other") ? window.smartObj.currentObj = jQuery(this) : window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                    window.smartObj.command = "p";
                    window.smartObj.isDirty = !1;
                    e.stopPropagation();
                    var pageY = e.pageY;
                    jQuery(window).scrollTop() + pageY >= jQuery(window).height() - 250 && (pageY = e.pageY - 250);
                    var pageX = e.pageX;
                    e.pageX > $(document).width() - 200 && (pageX = e.pageX - 150);
                    jQuery("#smInsertNextPrev").css("left", pageX + "px");
                    jQuery("#smInsertNextPrev").css("top", pageY + "px");
                    jQuery("#smInsertNextPrev").fadeIn(500);
                });
                jQuery(".jq-plus-next").unbind("click");
                jQuery(".jq-plus-next").on("click", function(e) {
                    window.smartObj = new SmartObj();
                    jQuery(this).hasClass("image-text-other") ? window.smartObj.currentObj = jQuery(this) : window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                    window.smartObj.command = "n";
                    window.smartObj.isDirty = !1;
                    e.stopPropagation();
                    var pageY = e.pageY;
                    jQuery(window).scrollTop() + pageY >= jQuery(window).height() - 250 && (pageY = e.pageY - 180);
                    var pageX = e.pageX;
                    e.pageX > $(document).width() - 200 && (pageX = e.pageX - 150);
                    jQuery("#smInsertNextPrev").css("left", pageX + "px");
                    jQuery("#smInsertNextPrev").css("top", pageY + "px");
                    jQuery("#smInsertNextPrev").fadeIn(500);
                });
            };
            return Code;
        }();
        On.Code = Code;
    }(On = exports.On || (exports.On = {}));
});

define("JQte/OnInsert", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../Controls/ControlCommonJQ", "../jqte/MyJQte", "../PageElements/ElementJQ" ], function(require, exports, impError, impWatch, impUndoManager, impCommonCode, impJQte, impElements) {
    "use strict";
    var OnInsert, changed = !1;
    !function(OnInsert) {
        var Code = function() {
            function Code() {}
            Code.prototype.Init = function() {
                jQuery("page .jq-add-column").unbind("click");
                jQuery("page .jq-add-column").on("click", function() {
                    var columnsCount = jQuery(this).closest(".row").children(".column").length;
                    if (columnsCount >= 4) {
                        var error = new impError.ErrorHandle.ErrorJQ();
                        error.ActionHelp("Cannot add more than 4 columns");
                    } else {
                        var columnSize = "", columnClass = "";
                        if (1 == columnsCount) {
                            columnClass = "col-xs-24";
                            columnSize = "24";
                        }
                        if (2 == columnsCount) {
                            columnClass = "col-xs-16";
                            columnSize = "16";
                        }
                        if (3 == columnsCount) {
                            columnClass = "col-xs-12";
                            columnSize = "12";
                        }
                        var lastColumn;
                        jQuery(this).closest(".row").children(".column").each(function() {
                            lastColumn = jQuery(this);
                            var prevSize = jQuery(this).attr("xs-column-size"), cssClass = "col-xs-" + prevSize;
                            if (cssClass != columnClass) {
                                jQuery(this).addClass(columnClass);
                                jQuery(this).attr("xs-column-size", columnSize);
                                jQuery(this).removeClass(cssClass);
                            }
                        });
                        var column, elements2 = new impElements.Page.Elements.ElementJQ(), columnCss = columnClass + "  from-column-add-click column key design-column column-number-" + (columnsCount + 1);
                        column = elements2.CreateDiv("", columnCss);
                        column.attr("column-number", columnsCount + 1);
                        column.attr("xs-column-size", columnSize);
                        column.css("min-height", "100px");
                        column.addClass("column-padding");
                        jQuery(this).closest(".row").append(column);
                        jQuery("#control-common-execute").click();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                });
                jQuery("page a").not(".jq-logout").unbind("click");
                jQuery("page a").not(".jq-logout").click(function() {
                    impCommonCode.ControlCommon.Code.AnchorClicked = !0;
                });
                jQuery("page .jqte-editor").unbind("click");
                jQuery("page .jqte-editor").on("click", function() {
                    jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                    jQuery(this).addClass("current-editor-scope");
                });
                jQuery("page .column").unbind("click");
                jQuery("page .column").on("click", function() {
                    if ("none" == jQuery("#jqte-edit-stop").css("display")) {
                        jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                        jQuery(this).addClass("current-editor-scope");
                    }
                });
                jQuery("page .jqte-editor").unbind("keydown");
                jQuery("page .jqte-editor").on("keydown", function() {
                    Code.BackPassed = !0;
                });
                jQuery("page .jqte-editor").unbind("keyup");
                jQuery("page .jqte-editor").on("keyup", function() {
                    changed = !0;
                });
                jQuery("page .jqte-editor").unbind("focusout");
                jQuery("page .jqte-editor").on("focusout", function() {
                    if (1 == changed) {
                        changed = !1;
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    }
                });
                jQuery(".empty-container-image").unbind("dblclick");
                jQuery(".empty-container-image").on("dblclick", function() {});
                jQuery(".empty-container-text").unbind("dblclick");
                jQuery(".empty-container-text").on("dblclick", function() {
                    $(".empty-container-text").draggable({
                        disabled: !1
                    });
                    jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                    $("page .jq-text-block-content").removeAttr("contentEditable");
                    jQuery(".current-editor-scope").removeClass("current-editor-scope");
                    jQuery(this).find(".jq-text-block-content").addClass("current-editor-scope");
                    jQuery(".editor").show();
                    $(this).draggable({
                        disabled: !0
                    });
                    jQuery(".current-editor-scope").focus();
                    jQuery(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text");
                    jQuery(".current-editor-scope").attr("contentEditable", "true");
                });
                jQuery("page .jqte-editor").unbind("mouseup");
                jQuery("page .jqte-editor").on("mouseup", function(e) {
                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });
                jQuery("page .column").unbind("mouseup");
                jQuery("page .column").on("mouseup", function(e) {
                    impJQte.MyJQte.jqte.buttonEmphasize(e);
                });
                jQuery(".jq-site-link").unbind("dblclick");
                jQuery(".jq-site-link").on("dblclick", function() {
                    jQuery(".editor").show();
                    jQuery(".current-editor-scope").focus();
                    jQuery(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text");
                });
                jQuery("page").unbind("click");
                jQuery("page").on("click", function(e) {
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    jQuery("#contextMenu").hide(500);
                    jQuery("#smInsertNextPrev").hide(500);
                    if (1 == impCommonCode.ControlCommon.Code.AnchorClicked) {
                        impCommonCode.ControlCommon.Code.AnchorClicked = !1;
                        null != e.cancelBubble && (e.cancelBubble = !0);
                        e.stopPropagation && e.stopPropagation();
                        e.preventDefault && e.preventDefault();
                        null != e.returnValue && (e.returnValue = !1);
                        return !1;
                    }
                });
            };
            Code.BackPassed = !1;
            Code.BackPassedEdit = !1;
            return Code;
        }();
        OnInsert.Code = Code;
    }(OnInsert = exports.OnInsert || (exports.OnInsert = {}));
});

define("controls/ControlCommonJQ", [ "require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert" ], function(require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    !function(ControlCommon) {
        var Code = function() {
            function Code() {}
            Code.AttachClick = function() {
                jQuery("#control-common-execute").on("click", function() {
                    Code.DestroyResizable();
                    Code.Execute();
                });
            };
            Code.Execute = function() {
                window.setTimeout(function() {
                    impOn.On.Code.Execute();
                    new impJqteOnInsert.OnInsert.Code().Init();
                    impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                    impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                    jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                    jQuery(".column").each(function() {
                        if (0 == jQuery(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length) {
                            jQuery(this).addClass("empty");
                            0 == jQuery(this).find(".empty-drop-element").length && jQuery(this).append("<div class='image-text-other empty-drop-element' ></div>");
                        } else {
                            jQuery(this).removeClass("empty");
                            jQuery(this).find(".empty-drop-element").remove();
                        }
                    });
                    jQuery(".image-text-other, .empty-container-empty").each(function(index, _this) {
                        var $this = jQuery(_this), bottom = $this.offset().top + $this.height(), top = $this.offset().top, left = $this.offset().left;
                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);
                    });
                    impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
                    jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                    jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                    jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                }, 10);
            };
            Code.DestroyResizable = function() {
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left");
            };
            Code.AnchorClicked = !1;
            return Code;
        }();
        ControlCommon.Code = Code;
    }(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("controls/imagejq", [ "require", "exports", "../Error/ErrorJQ", "../ControlNames/PageControlNamesJQ", "../Page/Context/ContextJQ", "../Watch/WatchMouseJQ", "./ControlCommonJQ", "../Common/OperationJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impPageControlNames, impPageCtx, impWatch, impCommonCode, impOperaction, impUndoManager) {
    "use strict";
    var Image, debug = !0, globalImageBlockId = 0, globalImageBlockContainerId = 0;
    !function(Image) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        Image.SmartObj = SmartObj;
        var SelfJQ = function(_super) {
            function SelfJQ() {
                _super.apply(this, arguments);
            }
            __extends(SelfJQ, _super);
            SelfJQ.prototype.Init = function() {
                this.AttachUserImages();
                this.AttachSelectImage();
                this.AttachInsertImage();
            };
            SelfJQ.prototype.GenerateTextBlockScopeId = function() {
                return "Image_Block_" + ++globalImageBlockId;
            };
            SelfJQ.prototype.GenerateContainerScopeId = function() {
                return "Image_Block_Container_" + ++globalImageBlockContainerId;
            };
            SelfJQ.prototype.AttachSelectImage = function() {
                jQuery("#control-image-bi-library").on("click", ".image-library-image", function() {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(".image-library-image").removeClass("image-library-bi-select");
                    jQuery(this).addClass("image-library-select");
                    jQuery(this).addClass("image-library-bi-select");
                });
                jQuery(SelfJQ.controlId).on("click", ".image-library-image", function() {
                    jQuery(".image-library-image").removeClass("image-library-select");
                    jQuery(this).addClass("image-library-select");
                });
            };
            SelfJQ.IsImageUrl = function(s) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if (1 == regexp.test(s) && s.length >= 5) for (var lowerUrl = s.toLowerCase(), types = [ "jpeg", "jpg", "png", "gif" ], i = 0; i < types.length; i++) {
                    var _type = lowerUrl.substr(lowerUrl.length - 5, 5), ts = _type.split(".");
                    if (ts.length >= 2 && ts[1] == types[i]) return !0;
                }
                return !1;
            };
            SelfJQ.prototype.AttachInsertImage = function() {
                jQuery(SelfJQ.controlId).find(".action-button-insert-image").on("click", function() {
                    "" != jQuery(".internet-image-url").val() ? SelfJQ.InsertImage(jQuery(".internet-image-url").val()) : SelfJQ.InsertImage(void 0);
                });
                jQuery(".action-button-change-image").on("click", function() {
                    var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedRowOrColumn && selectedRowOrColumn.hasClass("empty-container-image")) {
                        var imgSrc = jQuery(".image-library-select").attr("src");
                        if ("" != imgSrc) {
                            selectedRowOrColumn.find(".jq-plus-container-image").find("img").attr("src", imgSrc);
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        }
                    } else {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("please select a image change.");
                    }
                    jQuery("#control-image-library").hide();
                });
            };
            SelfJQ.ChangeImage = function() {
                jQuery(".action-button-insert-image").hide();
                jQuery(".action-button-change-image").show();
                jQuery("#control-image-library").show();
                jQuery("#control-image-library").trigger("custom_loaded");
            };
            SelfJQ.InsertImage = function(url) {
                var imageObj = new SelfJQ(), errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.SetErrorClassName("page-insert-image");
                var ctx = new impPageCtx.Page.ContextJQ(), selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                if (!selectedRowOrColumn.hasClass("column") && (null == window.smartObj || null == window.smartObj.currentObj)) {
                    window.smartObj = new SmartObj();
                    window.smartObj.currentObj = selectedRowOrColumn;
                    window.smartObj.command = "n";
                }
                void 0 == selectedRowOrColumn && (selectedRowOrColumn = jQuery("#nnnoelement"));
                if (void 0 != selectedRowOrColumn) {
                    var tbImageContainer = document.createElement("div"), tbImage = document.createElement("div"), tbImageWrapper = document.createElement("div"), tbImg = document.createElement("img");
                    jQuery(tbImg).addClass("jq-image-block-image ");
                    jQuery(tbImg).addClass("normal-element image-element");
                    jQuery(tbImageWrapper).addClass("jq-image-block-image-wrapper ");
                    var imgSrc;
                    imgSrc = void 0 == url ? jQuery(".image-library-select").attr("src") : url;
                    jQuery(tbImg).attr("src", imgSrc);
                    jQuery(tbImageWrapper).append(tbImg);
                    jQuery(tbImage).append(tbImageWrapper);
                    jQuery(tbImage).addClass(SelfJQ.CSSCLASS);
                    var tbScopeId = imageObj.GenerateTextBlockScopeId();
                    1 == debug && void 0 != tbImage && jQuery(tbImage).prepend("<span class='debug-image-block-css debug-css' scopeId='" + tbScopeId + "'> " + tbScopeId + " </span> ");
                    jQuery(tbImage).attr("scopeId", tbScopeId);
                    jQuery(tbImageContainer).append(tbImage);
                    var tbcScopeId = imageObj.GenerateContainerScopeId();
                    1 == debug && jQuery(tbImageContainer).append(" <span class='debug-image-block-container-css debug-css' scopeId='" + tbcScopeId + "'> " + tbcScopeId + " </span> ");
                    jQuery(tbImageContainer).addClass(SelfJQ.CONTAINER_CSS_CLASS);
                    jQuery(tbImageContainer).attr("scopeId", tbcScopeId);
                    if (1 == selectedRowOrColumn.hasClass("column") || null != window.smartObj) {
                        var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                        plusContainer.removeClass("jq-plus-container-not-used");
                        plusContainer.addClass("jq-plus-container-image");
                        plusContainer.addClass("design-css");
                        plusContainer.addClass("design-empty-text-css");
                        plusContainer.removeClass("jq-plus-container");
                        plusContainer.find(".jq-plus-element-content").addClass("jq-plus-element-content-image");
                        var emptycontainer = document.createElement("div");
                        plusContainer.find(".adjust-image-text-other").remove();
                        plusContainer.css("height", "200px");
                        plusContainer.css("width", "200px");
                        var jEc = jQuery(emptycontainer);
                        jEc.prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>");
                        jEc.prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>");
                        jEc.addClass("empty-container-image image-text-other key design-css design-empty-text-css");
                        jEc.append(plusContainer);
                        plusContainer.find(".jq-plus-content").append(tbImageContainer);
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        null == window.smartObj || "" == window.smartObj.command ? ctx.Page.Any.Add(selectedRowOrColumn, jEc, "", void 0, void 0, void 0, void 0) : ctx.Page.Any.Add(selectedRowOrColumn, jEc, "", void 0, void 0, !0, void 0);
                        if (selectedRowOrColumn.hasClass("jq-image-block-container")) {
                            var tbOrTbcWithScopeId = selectedRowOrColumn.attr("scopeId");
                            selectedRowOrColumn.find(".debug-image-block-container-css[scopeId=" + tbOrTbcWithScopeId + "]").remove();
                            void 0 != tbOrTbcWithScopeId && selectedRowOrColumn.append('<span class="debug-image-block-container-css debug-css" scopeId="' + tbOrTbcWithScopeId + '" > ' + tbOrTbcWithScopeId + "</span>");
                        }
                        jQuery(tbImageContainer).find(".debug-css").remove();
                        errorHandler.ActionSuccess("");
                        jQuery(SelfJQ.controlId).hide();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    } else errorHandler.ActionFail("You can only insert in a column block.");
                }
                jQuery(".image-library-image").removeClass("image-library-select");
                jQuery(".internet-image-url").val("");
            };
            SelfJQ.prototype.AttachUserImages = function() {
                jQuery(".load-more-images").on("click", function() {
                    SelfJQ.GetImages();
                });
                jQuery(SelfJQ.controlId).on("custom_loaded", function() {
                    SelfJQ.ClearImageGalaryPagingValue();
                    SelfJQ.GetImages();
                });
            };
            SelfJQ.SetImageGalaryPagingValue = function() {
                jQuery(".imges-get-start").val((Number(jQuery(".imges-get-start").val()) + 20).toString());
            };
            SelfJQ.GetImageGalaryPagingValue = function() {
                if (0 == jQuery(".imges-get-start").length) {
                    var pagingElement = jQuery(document.createElement("input"));
                    pagingElement.addClass("imges-get-start hide");
                    jQuery("body").append(pagingElement);
                    jQuery(".imges-get-start").val("0");
                }
                return jQuery(".imges-get-start").val();
            };
            SelfJQ.GetImages = function() {
                var data = {
                    start: SelfJQ.GetImageGalaryPagingValue(),
                    pageSize: 20
                }, dataStrfy = JSON.stringify(data);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/ImageService.asmx/GetImages",
                    data: dataStrfy,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SelfJQ.OnGetImagesSuccess,
                    error: SelfJQ.OnGetImagesError
                });
            };
            SelfJQ.ClearImageGalaryPagingValue = function() {
                jQuery(".imges-get-start").val("0");
            };
            SelfJQ.OnGetImagesSuccess = function(data, status) {
                var resultImages;
                resultImages = data.d;
                if (resultImages.length > 0) {
                    "0" == SelfJQ.GetImageGalaryPagingValue() && jQuery(".image-library").html("");
                    SelfJQ.SetImageGalaryPagingValue();
                }
                for (var i = 0; i < resultImages.length; i++) {
                    var imageContainer = document.createElement("div");
                    jQuery(imageContainer).addClass("image-lib-container");
                    var image = document.createElement("img");
                    jQuery(image).attr("src", resultImages[i].Path);
                    jQuery(image).addClass("image-library-image");
                    jQuery(image).addClass("img-thumbnail");
                    jQuery(imageContainer).append(image);
                    jQuery(".image-library").append(imageContainer);
                }
            };
            SelfJQ.OnGetImagesError = function(request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Some Problem !. <br>Try again latter.");
            };
            SelfJQ.ProcessSelectNotify = function() {
                var selectedElement = (new impError.ErrorHandle.ErrorJQ(), impWatch.Watch.MouseJQ.selectedElement);
                void 0 != selectedElement && (selectedElement.hasClass("row") || selectedElement.hasClass("normal-element"));
            };
            SelfJQ.controlId = "#control-image-library";
            SelfJQ.CSSCLASS = "jq-image-block design-image-block normal-element";
            SelfJQ.CONTAINER_CSS_CLASS = "jq-image-block-container design-image-block normal-element jq-container";
            return SelfJQ;
        }(impPageControlNames.PageControlNamesJQ.Page.Image.Controls);
        Image.SelfJQ = SelfJQ;
    }(Image = exports.Image || (exports.Image = {}));
});

define("Controls/BIjq", [ "require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../controls/imagejq" ], function(require, exports, impWatch, impUnodManager, impImage) {
    "use strict";
    var BI, isBIJQReady = !1;
    !function(BI) {
        var BIJQ = function() {
            function BIJQ() {}
            BIJQ.prototype.Init = function() {
                jQuery(document).ready(function() {
                    if (0 == isBIJQReady) {
                        isBIJQReady = !0;
                        jQuery(".smart-menu-bi-control").spinner({
                            min: 0,
                            max: 2e3,
                            step: 1,
                            change: function(event, ui) {},
                            spin: function(event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (void 0 != selectedElement) {
                                    var height = jQuery(".smart-menu-bi-height").spinner("value"), width = jQuery(".smart-menu-bi-width").spinner("value");
                                    selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                }
                            },
                            stop: function(event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (void 0 != selectedElement) {
                                    var height = jQuery(".smart-menu-bi-height").spinner("value"), width = jQuery(".smart-menu-bi-width").spinner("value");
                                    selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                    var undo = new impUnodManager.Manager.UndoManager();
                                    undo.BeforeOperation();
                                }
                            }
                        });
                        jQuery(".bi-browse").on("click", function() {
                            impImage.Image.SelfJQ.GetImages();
                            jQuery("#control-image-bi-library").show();
                        });
                        jQuery(".make-100").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                jQuery(".ddn-bi-pixel-type").val("%");
                                var height = 100;
                                jQuery(".smart-menu-bi-height").spinner("value", height);
                                var width = 100;
                                jQuery(".smart-menu-bi-width").spinner("value", width);
                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".ddn-bi-pixel-type").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var height = jQuery(".smart-menu-bi-height").spinner("value"), width = jQuery(".smart-menu-bi-width").spinner("value");
                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".action-button-insert-bi-image").on("click", function() {
                            var src = jQuery(".image-library-bi-select").first().attr("src");
                            jQuery(".bi-selected-image").val(src).change();
                            jQuery(".image-library-image").removeClass("image-library-bi-select");
                            jQuery("#control-image-bi-library").hide();
                        });
                        jQuery(".control-bi-controls .bi-selected-image").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement, applyToBody = jQuery(".bi-body").is(":checked");
                            if (1 == applyToBody) {
                                jQuery("page").css("background-image", "url('" + jQuery(this).val() + "')");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            } else if (void 0 != selectedElement) {
                                selectedElement.css("background-image", "url('" + jQuery(this).val() + "')");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .internet-bi-image-url").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-repeat").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-repeat", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-attachment").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-attachment", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-position").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-position", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            BIJQ.ProcessSelectNotify = function() {
                BIJQ.isSelectProcessing = !0;
                try {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        var bi = selectedElement.css("background-image").replace("url(", "").replace(")", "");
                        jQuery(".bi-selected-image").val(bi);
                        var repeat = selectedElement.css("background-repeat");
                        jQuery(".ddn-bi-repeat").val(repeat);
                        var attachment = selectedElement.css("background-attachment");
                        jQuery(".ddn-bi-attachment").val(attachment);
                        var position = selectedElement.css("background-position");
                        jQuery(".ddn-bi-position").val(position);
                        var backgroundSize = selectedElement.css("background-size");
                        if (void 0 != backgroundSize) {
                            var wh = backgroundSize.split(" ");
                            if (wh.length >= 2) {
                                var width = wh[0], heigth = wh[1];
                                jQuery(".ddn-bi-pixel-type").val("px");
                                width = width.replace("px", "");
                                heigth = heigth.replace("px", "");
                                jQuery(".smart-menu-bi-height").spinner("value", heigth);
                                jQuery(".smart-menu-bi-width").spinner("value", width);
                            } else {
                                jQuery(".smart-menu-bi-height").spinner("value", 0);
                                jQuery(".smart-menu-bi-width").spinner("value", 0);
                            }
                        }
                    }
                } catch (ex) {}
                BIJQ.isSelectProcessing = !1;
            };
            BIJQ.isSelectProcessing = !1;
            return BIJQ;
        }();
        BI.BIJQ = BIJQ;
    }(BI = exports.BI || (exports.BI = {}));
});

define("Controls/SpacerJQ", [ "require", "exports", "../Watch/WatchMouseJQ", "../Page/Context/ContextJQ" ], function(require, exports, impWatch, impPageCtx) {
    "use strict";
    var Spacer;
    !function(Spacer) {
        var SpacerJQ = function() {
            function SpacerJQ() {}
            SpacerJQ.InsertSpacer = function() {
                var selectedRowOrColumn = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selectedRowOrColumn && (1 == selectedRowOrColumn.hasClass("column") || selectedRowOrColumn.hasClass("empty-container-text") || selectedRowOrColumn.hasClass("empty-container-image") || selectedRowOrColumn.hasClass("empty-container") || null != window.smartObj)) {
                    var ctx = new impPageCtx.Page.ContextJQ(), emptyc = document.createElement("span");
                    jQuery(emptyc).addClass("empty-container empty-container-spacer key image-text-other design-css design-empty-css");
                    jQuery(emptyc).css("font-size", "14px");
                    var plusContainer = jQuery(".jq-plus-container.jq-plus-container-not-used").clone();
                    plusContainer.removeClass("jq-plus-container-not-used");
                    var spacer = jQuery(document.createElement("div"));
                    spacer.addClass("empty-spacer");
                    spacer.html("<center></center>");
                    plusContainer.find(".jq-plus-content").append(spacer);
                    jQuery(emptyc).append(plusContainer);
                    null == window.smartObj || "" == window.smartObj.command ? ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), "", void 0, void 0, void 0, void 0) : ctx.Page.Any.Add(selectedRowOrColumn, jQuery(emptyc), "", void 0, void 0, !0, void 0);
                }
            };
            return SpacerJQ;
        }();
        Spacer.SpacerJQ = SpacerJQ;
    }(Spacer = exports.Spacer || (exports.Spacer = {}));
});

define("Controls/../../SiteManager_TS/Site/SiteJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Site;
    !function(Site) {
        var SiteJQ = function() {
            function SiteJQ() {}
            SiteJQ.prototype.Init = function() {};
            SiteJQ.prototype.CreatePage = function(siteName, pageName) {
                var obj = {
                    siteName: siteName,
                    pageName: pageName
                }, createData = JSON.stringify(obj);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/createPage",
                    data: createData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SiteJQ.OnCreatePageSuccess,
                    error: SiteJQ.OnCreatePageError
                });
            };
            SiteJQ.OnCreatePageSuccess = function(data, status) {
                var site = new SiteJQ();
                site.GetPages(jQuery(".input-site-name-primary").val());
                jQuery(".control-page").hide();
                jQuery(".loading").hide();
            };
            SiteJQ.OnCreatePageError = function(request, status, error) {
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.CreateSite = function(siteName) {
                var obj = {
                    siteName: siteName
                }, createData = JSON.stringify(obj);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/createSite",
                    data: createData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SiteJQ.OnCreateSiteSuccess,
                    error: SiteJQ.OnCreateSiteError
                });
            };
            SiteJQ.OnCreateSiteSuccess = function(data, status) {
                var site = new SiteJQ();
                site.GetSites();
                jQuery(".control-page").hide();
                jQuery(".loading").hide();
            };
            SiteJQ.OnCreateSiteError = function(request, status, error) {
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.GetPages = function(siteName, success, error) {
                void 0 == success && (success = SiteJQ.OnGetPagesSuccess);
                void 0 == error && (error = SiteJQ.OnGetPagesError);
                var data = {
                    siteName: siteName
                }, pageData = JSON.stringify(data);
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/getPages",
                    data: pageData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: success,
                    error: error
                });
            };
            SiteJQ.OnGetPagesSuccess = function(data, status) {
                jQuery(".loading").hide();
                jQuery("#nestable3").html("");
                var result = data.d, list = jQuery(".jq-pages-list.hide").clone(), item = jQuery(".jq-page-item.hide").clone(), rootlist = list.clone();
                rootlist.removeClass("hide");
                jQuery("#nestable3").append(rootlist);
                for (var i = 0; i < result.length; i++) {
                    var newitem = item.clone();
                    newitem.removeClass("hide");
                    newitem.attr("data-id", result[i].Id);
                    newitem.find(".jq-page-item-name").text(result[i].Name);
                    var a = jQuery(document.createElement("a")), link = result[i].Link;
                    link = link.replace("?", "&");
                    a.attr("href", "/shiv/designer.aspx?PageName=" + link + "&SiteName=" + jQuery(".input-site-name-primary").val());
                    a.addClass("white-link");
                    a.append("Open");
                    a.css("float", "right");
                    a.addClass("btn btn-primary btn-xs");
                    newitem.find(".jq-page-item-name").append(a);
                    rootlist.append(newitem);
                }
                for (var i = 0; i < result.length; i++) if ("" != result[i].Extra) {
                    if (0 == jQuery(".jq-page-item[data-id='" + result[i].Extra + "']").children("ol").length) {
                        var childrenList = list.clone();
                        childrenList.removeClass("hide");
                        jQuery(".jq-page-item[data-id='" + result[i].Extra + "']").append(childrenList);
                    }
                    jQuery(".jq-page-item[data-id='" + result[i].Extra + "']").children("ol").append(jQuery(".jq-page-item[data-id='" + result[i].Id + "']"));
                }
                $("#nestable3").nestable();
            };
            SiteJQ.OnGetPagesError = function(request, status, error) {
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.GetSites = function() {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/getSites",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SiteJQ.OnGetSitesSuccess,
                    error: SiteJQ.OnGetSitesError
                });
            };
            SiteJQ.OnGetSitesSuccess = function(data, status) {
                jQuery(".loading").hide();
                var result = data.d;
                jQuery(".site-manager-data").html("");
                for (var i = 0; i < result.length; i++) {
                    var sitedata = jQuery(".site-data.hide").clone();
                    sitedata.removeClass("hide");
                    sitedata.find(".site-name").html(result[i].Name);
                    var a = jQuery(document.createElement("a"));
                    a.attr("href", "/shiv/PageManager.aspx?SiteName=" + result[i].Name);
                    a.addClass("white-link");
                    a.append("Open");
                    sitedata.find(".open-site").append(a);
                    jQuery(".site-manager-data").append(sitedata);
                }
            };
            SiteJQ.OnGetSitesError = function(request, status, error) {
                jQuery(".loading").hide();
            };
            SiteJQ.prototype.AttachOpenEvent = function() {};
            SiteJQ.prototype.AttachCreateEvent = function() {};
            SiteJQ.prototype.AttachEditEvent = function() {};
            return SiteJQ;
        }();
        Site.SiteJQ = SiteJQ;
    }(Site = exports.Site || (exports.Site = {}));
});

define("error/errorjq", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var ErrorHandle;
    !function(ErrorHandle) {
        var ErrorJQ = function() {
            function ErrorJQ() {}
            ErrorJQ.prototype.HandleError = function(handle) {
                handle === !0 && (window.onerror = this.WindowHandleError);
            };
            ErrorJQ.prototype.WindowHandleError = function(err, url, line) {
                alert(err + "\n on page: " + url + "\n on line: " + line);
            };
            ErrorJQ.prototype.SetErrorClassName = function(errorClassName) {
                this.errorClassName = errorClassName;
            };
            ErrorJQ.prototype.NotifyHelp = function(helpmsg) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html("");
                jQuery("#notify").append(helpmsg);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.Notify = function(error) {
                jQuery("#notify").clearQueue();
                jQuery("#notify").html(error);
                jQuery("#notify").css("display", "block");
                this.TriggerHideNotify();
            };
            ErrorJQ.prototype.TriggerHideNotify = function() {
                window.clearTimeout(ErrorJQ.interval);
                ErrorJQ.interval = window.setTimeout(this.TimeOutHandler, 1e4);
            };
            ErrorJQ.prototype.TimeOutHandler = function() {
                jQuery("#notify").css("display", "none");
                window.clearTimeout(ErrorJQ.interval);
            };
            ErrorJQ.prototype.AddErrorControl = function(element) {
                jQuery(element).addClass("error-" + this.errorClassName);
            };
            ErrorJQ.prototype.ActionFail = function(errorMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "2px solid red");
                errorMessage = void 0 == errorMessage || "" == errorMessage ? "Action Failed" : "<div class='error-notify-block'>Action Failed </div><br/>" + errorMessage;
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                jQuery(this.GetNotifyElement()).addClass("error-notify-background");
                this.Notify(errorMessage);
            };
            ErrorJQ.prototype.ActionHelp = function(helpMessage, changeColor) {
                if (void 0 != helpMessage) {
                    var index = helpMessage.toLowerCase().indexOf("page loaded");
                    -1 != index && jQuery(".jq-loading").hide();
                }
                var helpContainer = jQuery(document.createElement("div"));
                void 0 != changeColor ? helpContainer.addClass("yellow-green-notify-background") : helpContainer.addClass("yellow-notify-background");
                helpContainer.html("");
                helpContainer.append(helpMessage);
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).removeClass("success-notify-background");
                this.NotifyHelp(helpContainer);
            };
            ErrorJQ.prototype.ActionSuccess = function(successMessage) {
                jQuery(".error-" + this.errorClassName).css("border", "1px solid green");
                jQuery(".error-" + this.errorClassName).removeClass("error-" + this.errorClassName);
                (void 0 == successMessage || "" == successMessage) && (successMessage = "Action Success");
                jQuery(this.GetNotifyElement()).removeClass("error-notify-background");
                jQuery(this.GetNotifyElement()).addClass("success-notify-background");
                this.Notify(successMessage);
            };
            ErrorJQ.prototype.GetNotifyElement = function() {
                return jQuery("#notify");
            };
            ErrorJQ.prototype.LogMessage = function(message) {
                try {} catch (e) {}
            };
            ErrorJQ.prototype.Try = function(callback) {
                if ("function" == typeof callback) try {
                    callback();
                } catch (ex) {
                    alert(ex);
                    this.LogMessage(ex);
                } else this.LogMessage("method is not a function");
            };
            ErrorJQ.notifyId = "#notify";
            return ErrorJQ;
        }();
        ErrorHandle.ErrorJQ = ErrorJQ;
    }(ErrorHandle = exports.ErrorHandle || (exports.ErrorHandle = {}));
});

define("Controls/LinkJQ", [ "require", "exports", "../../SiteManager_TS/Site/SiteJQ", "../error/errorjq", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../Controls/ControlCommonJQ", "../Common/OperationJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impError, impWatch, impUndoManager, impCommonCode, impOperaction, impStatic) {
    "use strict";
    var Link, initOnceFlag = !1;
    !function(Link) {
        var LinkJQ = function() {
            function LinkJQ() {}
            LinkJQ.prototype.Init = function() {
                if (0 == initOnceFlag) {
                    initOnceFlag = !0;
                    this.AttachEvents();
                }
            };
            LinkJQ.LoadLinks = function() {
                var site = new impPage.Site.SiteJQ();
                site.GetPages(jQuery(".input-site-name").val(), LinkJQ.OnGetPagesSuccess, LinkJQ.OnGetPagesError);
            };
            LinkJQ.OnGetPagesSuccess = function(data, status) {
                jQuery(".jq-loading").hide();
                var result = data.d;
                jQuery(".insert-link-links").html("");
                for (var i = 0; i < result.length; i++) {
                    var select;
                    select = 0 == i ? "<option selected value='" + result[i].Name + "'>" + result[i].Name.replace(".html", "") + "</option>" : "<option value='" + result[i].Name + "'>" + result[i].Name.replace(".html", "") + "</option>";
                    jQuery(".insert-link-links").append(select);
                }
                jQuery(".insert-link-name").val(jQuery(".insert-link-links").find("option:selected").text());
                var previewlink = LinkJQ.CreateCurrentLink(!0);
                jQuery(".insert-link-preview").html(previewlink);
            };
            LinkJQ.OnGetPagesError = function(request, status, error) {
                jQuery(".jq-loading").hide();
                jQuery(".insert-link-links").html("");
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Something went wrong<br>Try again later!");
            };
            LinkJQ.GenerateId = function() {
                return "NormalLink" + ++impStatic.Constants.StaticJQ.normalLinkId;
            };
            LinkJQ.prototype.AttachEvents = function() {
                jQuery("#insert-internet-link-url").on("change", function() {
                    LinkJQ.IsExternalUrl = !0;
                    jQuery("#insert-internet-link-name").val("Give Name");
                    var value;
                    value = jQuery("#insert-internet-link-url").val();
                    if (value.length > 0) for (;" " == value.charAt(0); ) value = value.substring(1);
                    if ("" != value) {
                        var i = value.indexOf("http://"), j = value.indexOf("https://"), k = value.indexOf("//");
                        0 != i && 0 != j && 0 != k && jQuery(this).val("//" + jQuery(this).val());
                    } else {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionHelp("Please provide External Link Url.");
                    }
                    var previewlink = LinkJQ.CreateCurrentLink(!0, jQuery(this).val(), jQuery("#insert-internet-link-name").val());
                    jQuery(".insert-link-preview").html(previewlink);
                });
                jQuery("#insert-internet-link-name").on("change", function() {
                    LinkJQ.IsExternalUrl = !0;
                    if ("Give Name" != jQuery(this).val()) {
                        var previewlink = LinkJQ.CreateCurrentLink(!0, jQuery("#insert-internet-link-url").val(), jQuery(this).val());
                        jQuery(".insert-link-preview").html(previewlink);
                        var value = jQuery("#insert-internet-link-url").val();
                        if (value.length > 0) for (;" " == value.charAt(0); ) value = value.substring(1);
                        if ("" == value) {
                            var errorHandler = new impError.ErrorHandle.ErrorJQ();
                            errorHandler.ActionHelp("Please provide External Link Url.");
                        }
                    }
                });
                jQuery(".btn-style").on("click", function() {
                    jQuery(".btn-style").removeClass("btn-style-selected");
                    jQuery(this).addClass("btn-style-selected");
                    var previewlink;
                    previewlink = 1 == LinkJQ.IsExternalUrl ? LinkJQ.CreateCurrentLink(!0, jQuery("#insert-internet-link-url").val(), jQuery("#insert-internet-link-name").val()) : LinkJQ.CreateCurrentLink(!0);
                    jQuery(".insert-link-preview").html(previewlink);
                });
                jQuery(".action-button-insert-link").on("click", function() {
                    var linkToInsert;
                    linkToInsert = 1 == LinkJQ.IsExternalUrl ? LinkJQ.CreateCurrentLink(!1, jQuery("#insert-internet-link-url").val(), jQuery("#insert-internet-link-name").val()) : LinkJQ.CreateCurrentLink(!1);
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        impOperaction.Operation.AfterOperationJQ.Execute();
                        selectedElement.append(linkToInsert);
                        var undo = new impUndoManager.Manager.UndoManager();
                        undo.BeforeOperation();
                        jQuery("page a").not(".jq-logout").unbind("click");
                        jQuery("page a").not(".jq-logout").on("click", function() {
                            impCommonCode.ControlCommon.Code.AnchorClicked = !0;
                        });
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    jQuery("#control-insert-link").hide();
                });
                jQuery(".insert-link-name").on("change", function() {
                    LinkJQ.IsExternalUrl = !1;
                    LinkJQ.CreateCurrentLink(!0);
                    jQuery(".insert-link-preview").find("a").text(jQuery(this).val());
                });
                jQuery("#control-insert-link").on("change", ".insert-link-links", function() {
                    LinkJQ.IsExternalUrl = !1;
                    jQuery(".insert-link-name").val(jQuery(".insert-link-links").find("option:selected").text());
                    var previewlink = LinkJQ.CreateCurrentLink(!0);
                    jQuery(".insert-link-preview").html(previewlink);
                    jQuery("#insert-internet-link-name").val("");
                    jQuery("#insert-internet-link-url").val("");
                });
            };
            LinkJQ.CreateCurrentLink = function(blankTarget, url, name) {
                var link, id;
                0 == blankTarget && (id = LinkJQ.GenerateId());
                void 0 == url && (url = jQuery(".insert-link-links").find("option:selected").val());
                var btnStyle = jQuery(".btn-style-selected").attr("btn-style");
                void 0 == btnStyle && (btnStyle = " btn-default ");
                void 0 == name && (name = jQuery(".insert-link-name").val());
                link = 1 == blankTarget ? "<span style='display:inline-block;;float:none;' class='key jq-normal-link jq-site-link-container  btn " + btnStyle + "'><a contentEditable='true' target='_blank' class='jq-site-link jqte-editor' href='" + url + "?nocache=true'>" + name + "</a></span>" : "<span style='display:inline-block' class='key jq-normal-link jq-site-link-container  btn " + btnStyle + "'><a contentEditable='true' id='" + id + "' class='jq-site-link jqte-editor ' href='" + url + "?nocache=true'>" + name + "</a></span>";
                return link;
            };
            LinkJQ.Show = function() {
                jQuery("#control-insert-link").show();
                jQuery(".jq-loading").show();
                LinkJQ.LoadLinks();
            };
            LinkJQ.Close = function() {};
            LinkJQ.ProcessSelectNotify = function() {};
            return LinkJQ;
        }();
        Link.LinkJQ = LinkJQ;
    }(Link = exports.Link || (exports.Link = {}));
});

define("Controls/HtmlJQ", [ "require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../Controls/ControlCommonJQ" ], function(require, exports, impWatch, impUndoManager, impCommonCode) {
    "use strict";
    var Html, initOnceFlag = !1;
    !function(Html) {
        var HtmlJQ = function() {
            function HtmlJQ() {}
            HtmlJQ.prototype.Init = function() {
                if (0 == initOnceFlag) {
                    initOnceFlag = !0;
                    this.AttachEvents();
                }
            };
            HtmlJQ.prototype.AttachEvents = function() {
                jQuery(".action-button-insert-html-clear").on("click", function() {
                    jQuery(".input-html").val("");
                });
                jQuery(".action-button-insert-html").on("click", function() {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        var html = jQuery(".input-html").val(), htmlObj = jQuery(document.createElement("div"));
                        htmlObj.css("float", "left");
                        htmlObj.addClass("key empty-container design-empty-css");
                        htmlObj.css("height", "100px");
                        htmlObj.append(jQuery.parseHTML(html, document, !0));
                        jQuery(htmlObj).html();
                        selectedElement.append(htmlObj);
                        var undo = new impUndoManager.Manager.UndoManager();
                        undo.BeforeOperation();
                        impCommonCode.ControlCommon.Code.DestroyResizable();
                        impCommonCode.ControlCommon.Code.Execute();
                    }
                    jQuery("#control-insert-html").hide();
                });
            };
            HtmlJQ.Show = function() {
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-html").addClass("control-active");
                jQuery("#control-insert-html").show();
                jQuery(".input-html").val("");
            };
            HtmlJQ.Close = function() {};
            HtmlJQ.ProcessSelectNotify = function() {};
            return HtmlJQ;
        }();
        Html.HtmlJQ = HtmlJQ;
    }(Html = exports.Html || (exports.Html = {}));
});

define("Controls/MarginJQ", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var Margin, isBorderReady = !1, borderFirstTime = 0;
    !function(Margin) {
        var MarginJQ = function() {
            function MarginJQ() {}
            MarginJQ.prototype.Init = function() {
                MarginJQ.AttachMargin();
            };
            MarginJQ.AttachMargin = function() {
                jQuery(document).ready(function() {
                    if (0 == isBorderReady) {
                        isBorderReady = !0;
                        jQuery(".margin-advanced-show").on("click", function() {
                            jQuery(".jq-margin-advanced").fadeToggle(1);
                        });
                        jQuery(".control-margin-margin").spinner({
                            min: -1500,
                            max: 1500,
                            step: 1,
                            value: 0,
                            change: function(event, ui) {
                                0 == MarginJQ.isSelectProcessing && MarginJQ.OnChange(this);
                            },
                            spin: function(event, ui) {
                                0 == MarginJQ.isSelectProcessing && MarginJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == MarginJQ.isSelectProcessing && MarginJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            MarginJQ.OnChange = function($this) {
                MarginJQ.isSelectProcessing = !0;
                try {
                    if (0 != borderFirstTime) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        if (selectedElement.hasClass("column")) errorHandler.ActionHelp("Cannot change margin for [Column] blocks"); else {
                            jQuery($this).hasClass("control-margin-all") && $($this).closest(".control-margin-controls").find(".control-margin-margin").not(".control-margin-all").spinner("value", jQuery($this).val());
                            var common = new impCommon.Common.CommonMethodsJQ(), left = $($this).closest(".control-margin-controls").find(".control-margin-left").spinner("value"), top = $($this).closest(".control-margin-controls").find(".control-margin-top").spinner("value"), right = $($this).closest(".control-margin-controls").find(".control-margin-right").spinner("value"), bottom = $($this).closest(".control-margin-controls").find(".control-margin-bottom").spinner("value");
                            void 0 != left && selectedElement.css("margin-left", left + "px");
                            void 0 != top && selectedElement.css("margin-top", top + "px");
                            void 0 != right && selectedElement.css("margin-right", right + "px");
                            void 0 != bottom && selectedElement.css("margin-bottom", bottom + "px");
                            if (0 == left && 0 == top && 0 == right && 0 == bottom) {
                                common.RemoveStyle(selectedElement, "margin-left");
                                common.RemoveStyle(selectedElement, "margin-top");
                                common.RemoveStyle(selectedElement, "margin-bottom");
                                common.RemoveStyle(selectedElement, "margin-right");
                                common.RemoveStyle(selectedElement, "margin");
                            }
                        }
                    }
                } catch (ex) {}
                MarginJQ.isSelectProcessing = !1;
            };
            MarginJQ.ProcessSelectedValues = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                MarginJQ.isSelectProcessing = !0;
                if (void 0 != selectedElement) {
                    var left = selectedElement.css("margin-left"), top = selectedElement.css("margin-top"), right = selectedElement.css("margin-right"), bottom = selectedElement.css("margin-bottom");
                    if (void 0 != left) {
                        left = left.replace("px", "");
                        jQuery(".control-margin-left").spinner("value", left);
                    }
                    if (void 0 != top) {
                        top = top.replace("px", "");
                        jQuery(".control-margin-top").spinner("value", top);
                    }
                    if (void 0 != right) {
                        right = right.replace("px", "");
                        jQuery(".control-margin-right").spinner("value", right);
                    }
                    if (void 0 != bottom) {
                        bottom = bottom.replace("px", "");
                        jQuery(".control-margin-bottom").spinner("value", bottom);
                    }
                    left == top && left == right && left == bottom && jQuery(".control-margin-all").spinner("value", left);
                }
                MarginJQ.isSelectProcessing = !1;
            };
            MarginJQ.ProcessSelectNotify = function() {
                MarginJQ.ProcessSelectedValues();
            };
            MarginJQ.controlId = ".control-margin";
            MarginJQ.isSelectProcessing = !1;
            return MarginJQ;
        }();
        Margin.MarginJQ = MarginJQ;
    }(Margin = exports.Margin || (exports.Margin = {}));
});

define("Controls/PaddingJQ", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var Padding, isBorderReady = !1, borderFirstTime = 0;
    !function(Padding) {
        var PaddingJQ = function() {
            function PaddingJQ() {}
            PaddingJQ.prototype.Init = function() {
                PaddingJQ.AttachPadding();
            };
            PaddingJQ.AttachPadding = function() {
                jQuery(document).ready(function() {
                    if (0 == isBorderReady) {
                        isBorderReady = !0;
                        jQuery(".padding-advanced-show").on("click", function() {
                            jQuery(".jq-padding-advanced").fadeToggle(1);
                        });
                        jQuery(".control-padding-padding").spinner({
                            min: 1,
                            max: 1500,
                            step: 1,
                            value: 0,
                            change: function(event, ui) {
                                0 == PaddingJQ.isSelectProcessing && PaddingJQ.OnChange(this);
                            },
                            spin: function(event, ui) {
                                0 == PaddingJQ.isSelectProcessing && PaddingJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == PaddingJQ.isSelectProcessing && PaddingJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            PaddingJQ.OnChange = function($this) {
                PaddingJQ.isSelectProcessing = !0;
                try {
                    if (0 != borderFirstTime) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        new impError.ErrorHandle.ErrorJQ();
                        jQuery($this).hasClass("control-padding-all") && jQuery(".control-padding-padding").not(".control-padding-all").spinner("value", jQuery($this).val());
                        var common = new impCommon.Common.CommonMethodsJQ(), left = $(".control-padding-left").spinner("value"), top = $(".control-padding-top").spinner("value"), right = $(".control-padding-right").spinner("value"), bottom = $(".control-padding-bottom").spinner("value");
                        void 0 != left && selectedElement.css("padding-left", left + "px");
                        void 0 != top && selectedElement.css("padding-top", top + "px");
                        void 0 != right && selectedElement.css("padding-right", right + "px");
                        void 0 != bottom && selectedElement.css("padding-bottom", bottom + "px");
                        if (0 == left && 0 == top && 0 == right && 0 == bottom) {
                            common.RemoveStyle(selectedElement, "padding-left");
                            common.RemoveStyle(selectedElement, "padding-top");
                            common.RemoveStyle(selectedElement, "padding-bottom");
                            common.RemoveStyle(selectedElement, "padding-right");
                            common.RemoveStyle(selectedElement, "padding");
                        }
                    }
                } catch (ex) {}
                PaddingJQ.isSelectProcessing = !1;
            };
            PaddingJQ.ProcessSelectedValues = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                PaddingJQ.isSelectProcessing = !0;
                if (void 0 != selectedElement) {
                    var left = selectedElement.css("padding-left"), top = selectedElement.css("padding-top"), right = selectedElement.css("padding-right"), bottom = selectedElement.css("padding-bottom");
                    if (void 0 != left) {
                        left = left.replace("px", "");
                        jQuery(".control-padding-left").spinner("value", left);
                    }
                    if (void 0 != top) {
                        top = top.replace("px", "");
                        jQuery(".control-padding-top").spinner("value", top);
                    }
                    if (void 0 != right) {
                        right = right.replace("px", "");
                        jQuery(".control-padding-right").spinner("value", right);
                    }
                    if (void 0 != bottom) {
                        bottom = bottom.replace("px", "");
                        jQuery(".control-padding-bottom").spinner("value", bottom);
                    }
                    left == top && left == right && left == bottom && jQuery(".control-padding-all").spinner("value", left);
                }
                PaddingJQ.isSelectProcessing = !1;
            };
            PaddingJQ.ProcessSelectNotify = function() {
                PaddingJQ.ProcessSelectedValues();
            };
            PaddingJQ.controlId = ".control-padding";
            PaddingJQ.isSelectProcessing = !1;
            return PaddingJQ;
        }();
        Padding.PaddingJQ = PaddingJQ;
    }(Padding = exports.Padding || (exports.Padding = {}));
});

define("Controls/FrontBackJQ", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impWatch, impUndoManager) {
    "use strict";
    var FrontBack, isFrontBackReady = !1, borderFirstTime = 0;
    !function(FrontBack) {
        var FrontBackJQ = function() {
            function FrontBackJQ() {}
            FrontBackJQ.prototype.Init = function() {
                FrontBackJQ.AttachFrontBack();
            };
            FrontBackJQ.AttachFrontBack = function() {
                jQuery(document).ready(function() {
                    if (0 == isFrontBackReady) {
                        isFrontBackReady = !0;
                        jQuery(".control-z-zindex").slider({
                            min: 1,
                            max: 500,
                            step: 1,
                            value: 0,
                            change: function(event, ui) {
                                0 == FrontBackJQ.isSelectProcessing && FrontBackJQ.OnChange(this);
                            },
                            spin: function(event, ui) {
                                0 == FrontBackJQ.isSelectProcessing && FrontBackJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == FrontBackJQ.isSelectProcessing && FrontBackJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            FrontBackJQ.OnChange = function($this) {
                FrontBackJQ.isSelectProcessing = !0;
                try {
                    if (0 != borderFirstTime) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        new impError.ErrorHandle.ErrorJQ();
                        if (selectedElement.hasClass("image-text-other")) {
                            var zIndex = jQuery(".control-z-zindex").slider("value");
                            selectedElement.css("z-index", zIndex);
                        }
                    }
                } catch (ex) {}
                FrontBackJQ.isSelectProcessing = !1;
            };
            FrontBackJQ.ProcessSelectedValues = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                FrontBackJQ.isSelectProcessing = !0;
                if (void 0 != selectedElement && selectedElement.hasClass("image-text-other")) {
                    var zindex = selectedElement.css("z-index");
                    jQuery(".control-z-zindex").slider("value", zindex);
                }
                FrontBackJQ.isSelectProcessing = !1;
            };
            FrontBackJQ.ProcessSelectNotify = function() {
                FrontBackJQ.ProcessSelectedValues();
            };
            FrontBackJQ.isSelectProcessing = !1;
            return FrontBackJQ;
        }();
        FrontBack.FrontBackJQ = FrontBackJQ;
    }(FrontBack = exports.FrontBack || (exports.FrontBack = {}));
});

define("Controls/OpacityJQ", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impWatch, impUndoManager) {
    "use strict";
    var Opacity, isOpacityReady = !1, borderFirstTime = 0;
    !function(Opacity) {
        var OpacityJQ = function() {
            function OpacityJQ() {}
            OpacityJQ.prototype.Init = function() {
                OpacityJQ.AttachOpacity();
            };
            OpacityJQ.AttachOpacity = function() {
                jQuery(document).ready(function() {
                    if (0 == isOpacityReady) {
                        isOpacityReady = !0;
                        jQuery(".control-o-opacity").slider({
                            min: 0,
                            max: 1,
                            step: .1,
                            value: 1,
                            change: function(event, ui) {
                                0 == OpacityJQ.isSelectProcessing && OpacityJQ.OnChange(this);
                            },
                            slide: function(event, ui) {
                                0 == OpacityJQ.isSelectProcessing && OpacityJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == OpacityJQ.isSelectProcessing && OpacityJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            OpacityJQ.OnChange = function($this) {
                OpacityJQ.isSelectProcessing = !0;
                try {
                    if (0 != borderFirstTime) {
                        borderFirstTime = 1;
                        impWatch.Watch.MouseJQ.RemoveAndResetRemovableRow();
                    }
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        var opacity = (new impError.ErrorHandle.ErrorJQ(), jQuery(".control-o-opacity").slider("value"));
                        selectedElement.css("opacity", opacity);
                    }
                } catch (ex) {}
                OpacityJQ.isSelectProcessing = !1;
            };
            OpacityJQ.ProcessSelectedValues = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                OpacityJQ.isSelectProcessing = !0;
                if (void 0 != selectedElement) {
                    var opacity = selectedElement.css("opacity");
                    jQuery(".control-o-opacity").slider("value", opacity);
                }
                OpacityJQ.isSelectProcessing = !1;
            };
            OpacityJQ.ProcessSelectNotify = function() {
                OpacityJQ.ProcessSelectedValues();
            };
            OpacityJQ.isSelectProcessing = !1;
            return OpacityJQ;
        }();
        Opacity.OpacityJQ = OpacityJQ;
    }(Opacity = exports.Opacity || (exports.Opacity = {}));
});

define("Controls/BorderShadow", [ "require", "exports", "../Error/ErrorJQ", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager" ], function(require, exports, impError, impWatch, impCommon, impUndoManager) {
    "use strict";
    var BorderShadow, isBorderReady = !1;
    !function(BorderShadow) {
        var BorderShadowJQ = function() {
            function BorderShadowJQ() {}
            BorderShadowJQ.prototype.Init = function() {
                BorderShadowJQ.AttachBorder();
            };
            BorderShadowJQ.AttachBorder = function() {
                jQuery(document).ready(function() {
                    if (0 == isBorderReady) {
                        isBorderReady = !0;
                        jQuery(".b-s-remove").on("click", function() {
                            var cm = new impCommon.Common.CommonMethodsJQ();
                            jQuery(".control-b-s").spinner("value", 0);
                            jQuery(".b-s-color").val("000000").keyup();
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            cm.RemoveStyle(selectedElement, "box-shadow");
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        });
                        jQuery(".b-s-glow").on("click", function() {
                            jQuery(".control-b-s").spinner("value", 0);
                            jQuery(".control-b-s-blur").spinner("value", 35);
                            jQuery(".b-s-color").val("0000FF").keyup();
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                        });
                        jQuery(".b-s-color").colorpicker();
                        jQuery(".b-s-colorr").trigger("keyup");
                        jQuery(".b-s-color").on("change", function() {
                            BorderShadowJQ.OnChange(this);
                        });
                        jQuery(".control-b-s").spinner({
                            min: -800,
                            max: 800,
                            step: 1,
                            value: 1,
                            change: function(event, ui) {
                                0 == BorderShadowJQ.isSelectProcessing && BorderShadowJQ.OnChange(this);
                            },
                            spin: function(event, ui) {
                                0 == BorderShadowJQ.isSelectProcessing && BorderShadowJQ.OnChange(this);
                            },
                            stop: function(event, ui) {
                                0 == BorderShadowJQ.isSelectProcessing && BorderShadowJQ.OnChange(this);
                                var undo = new impUndoManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            BorderShadowJQ.OnChange = function($this) {
                BorderShadowJQ.isSelectProcessing = !0;
                try {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        var h = (new impError.ErrorHandle.ErrorJQ(), jQuery(".control-b-s-h").spinner("value")), v = jQuery(".control-b-s-v").spinner("value"), blur = jQuery(".control-b-s-blur").spinner("value"), color = jQuery(".b-s-color").val();
                        if ("" == color) color = "#000000"; else {
                            color = color.replace("#", "");
                            color = "#" + color;
                        }
                        var borderShadow = h + "px " + v + "px " + blur + "px " + color;
                        selectedElement.css("box-shadow", borderShadow);
                    }
                } catch (ex) {}
                BorderShadowJQ.isSelectProcessing = !1;
            };
            BorderShadowJQ.ProcessSelectedValues = function() {
                impWatch.Watch.MouseJQ.selectedElement;
            };
            BorderShadowJQ.ProcessSelectNotify = function() {
                BorderShadowJQ.ProcessSelectedValues();
            };
            BorderShadowJQ.i = 0;
            BorderShadowJQ.isSelectProcessing = !1;
            return BorderShadowJQ;
        }();
        BorderShadow.BorderShadowJQ = BorderShadowJQ;
    }(BorderShadow = exports.BorderShadow || (exports.BorderShadow = {}));
});

define("ContextMenu/Contextmenujq", [ "require", "exports", "../Watch/WatchMouseJQ", "../Controls/ControlsJQ", "../Watch/CopyPasteJQ", "../Controls/ImageJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../Controls/TextJQ", "../SmartMenu/SmartMenuJQ", "../Controls/Menujq", "../Controls/BIjq", "../Controls/SpacerJQ", "../Controls/LinkJQ", "../Controls/HtmlJQ", "../Controls/MarginJQ", "../Controls/PaddingJQ", "../Controls/FrontBackJQ", "../Controls/OpacityJQ", "../Controls/BorderShadow" ], function(require, exports, impWatch, impAddRowControl, impCopy, impInsertImage, impBorder, impColor, impText, impHeightWidth, impMenuControl, impBi, impSpacer, impLink, impHtml, impMargin, impPadding, impFrontBack, impOpacity, impBorderShadow) {
    "use strict";
    var ContextMenu, G_isAttachedContextMenu = !1, CTX_MENU_DISABLED_CLASS = "ctx-menu-disabled", ctxMenuIsReady = !1;
    !function(ContextMenu) {
        var ContextMenuJQ = function() {
            function ContextMenuJQ(extra) {
                this.controlId = "#contextMenu";
            }
            ContextMenuJQ.prototype.Init = function() {
                this.MainEvents();
            };
            ContextMenuJQ.ContextMenuBinding = function() {
                jQuery(document).on("click", function(e) {
                    var contextMenu = new ContextMenuJQ();
                    contextMenu.DetectContextMenu();
                });
                jQuery(document).bind("contextmenu", function(e) {
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    window.setTimeout(function() {
                        try {
                            impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");
                            var x = e.clientX, y = e.clientY + $(document).scrollTop();
                            jQuery(".nearest-element").removeClass("nearest-element");
                            var column = impWatch.Watch.MouseJQ.selectedElement;
                            impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other") && (column = impWatch.Watch.MouseJQ.selectedElement.closest(".column"));
                            if (column.hasClass("column")) {
                                var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other"), nearestLeftArray = [], nearestTopArray = [];
                                if ($elements.length > 0) {
                                    $elements.each(function(index, _this) {
                                        var $this = $(_this), top = parseFloat($this.attr("top")), bottom = parseFloat($this.attr("bottom")), left = parseFloat($this.attr("left"));
                                        if (y >= top && bottom >= y && x >= left) {
                                            nearestLeftArray.push(left);
                                            nearestTopArray.push(top);
                                        }
                                    });
                                    var nearestLeft = 0, nearestTop = 0;
                                    nearestLeftArray.length > 0 && (nearestLeft = Math.max.apply(Math, nearestLeftArray));
                                    nearestTopArray.length > 0 && (nearestTop = Math.max.apply(Math, nearestTopArray));
                                    column.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");
                                    impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();
                                }
                            }
                        } catch (ex) {}
                    }, 5);
                    e.preventDefault();
                    var contextMenu = new ContextMenuJQ();
                    contextMenu.DetectContextMenu();
                    var pageY = e.clientY;
                    pageY >= 350 && (pageY -= jQuery("#contextMenu").height());
                    var pageX = e.clientX;
                    pageX > jQuery(document).width() - 200 && (pageX -= 150);
                    jQuery(contextMenu.controlId).css("left", pageX + "px");
                    jQuery(contextMenu.controlId).css("top", pageY + "px");
                    jQuery(contextMenu.controlId).fadeIn(500);
                    e.cancelBubble = !1;
                });
            };
            ContextMenuJQ.prototype.DetectContextMenu = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selectedElement) {
                    jQuery(".ctx-menu-add-row").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-cut").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-text").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-image").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-youtube").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-html").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-css").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-menu").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-empty-space").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-link").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-object").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-delete-element").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    selectedElement.hasClass("root-elements") && jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    if (selectedElement.hasClass("jqRootRow")) {
                        jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("column")) {
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("image-text-other")) {
                        jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("page")) {
                        jQuery(".ctx-menu-add-row").parent().addClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-height-width").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    }
                }
            };
            ContextMenuJQ.AttachDeleteElement = function() {
                jQuery(".li.ctx-menu-delete-element").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.DeleteElement();
                });
            };
            ContextMenuJQ.AttachInsertLinkContainer = function() {
                jQuery(".li.ctx-menu-insert-link-container").on("click", function() {
                    window.smartObj = null;
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || impCopy.CopyPaste.CopyPasteJQ.CreateLinkContainer();
                });
            };
            ContextMenuJQ.AttachInsertLink = function() {
                new impLink.Link.LinkJQ().Init();
                jQuery(".ctx-menu-insert-link").on("click", function() {
                    window.smartObj = null;
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowControlInsertLink();
                        impLink.Link.LinkJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachInsertHTML = function() {
                new impHtml.Html.HtmlJQ().Init();
                jQuery(".ctx-menu-insert-html").on("click", function() {
                    window.smartObj = null;
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.ShowControlInsertHTML();
                });
            };
            ContextMenuJQ.AttachInsertText = function() {
                jQuery(".li.smart-menu-insert-text").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".li.ctx-menu-insert-text").on("click", function() {
                    window.smartObj = null;
                    impText.Text.TextJQ.InsertTextBlock("Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-normal-text").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock(" Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-1").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h1> Heading1 to edit</h1>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-2").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h2> Heading2 to edit</h2>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-3").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h3> Heading3 to edit</h3>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-4").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h4> Heading4 to edit</h4>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-5").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h5> Heading5 to edit</h5>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachControlPageClose = function() {
                jQuery(".control-templates").find(".close-button").on("click", function() {
                    jQuery(".control-page").removeClass("control-active");
                    ContextMenuJQ.ShowProperties();
                });
                jQuery(".control-page").find(".close-button").on("click", function() {
                    jQuery(".control-page").removeClass("control-active");
                    ContextMenuJQ.ShowProperties();
                    jQuery(".internet-bi-image-url").val("");
                    jQuery(".internet-image-url").val("");
                });
            };
            ContextMenuJQ.ShowProperties = function() {
                jQuery(".jq-properties-all").hasClass("forced-hide") || jQuery(".jq-properties-all").show();
            };
            ContextMenuJQ.ControlPageHide = function() {
                jQuery(".control-page").hide();
                jQuery(".control-page").attr("style", "");
                jQuery(".control-page").css("display", "none");
                jQuery(".control-page").removeClass("control-active");
                if ("block" == jQuery(".jq-properties-all").css("display")) {
                    jQuery(".jq-properties-all").addClass("normal-hide");
                    jQuery(".jq-properties-all").hide();
                } else jQuery(".jq-properties-all").hasClass("forced-hide") || jQuery(".jq-properties-all").show();
            };
            ContextMenuJQ.ShowControlInsertLink = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-link").addClass("control-active");
                impLink.Link.LinkJQ.Show();
            };
            ContextMenuJQ.ShowControlInsertHTML = function() {
                ContextMenuJQ.ControlPageHide();
                impHtml.Html.HtmlJQ.Show();
            };
            ContextMenuJQ.ShowControlInsertText = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".editor").show();
                jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                jQuery(this).find(".jqte-editor").addClass("current-editor-scope");
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-text").addClass("control-active");
                jQuery("#control-insert-text").show();
                jQuery("#control-insert-text").trigger("cust_loaded");
            };
            ContextMenuJQ.ShowControlAddRow = function() {
                ContextMenuJQ.ControlPageHide();
                var controlId = impAddRowControl.Page.AddRowJQ.pageId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(controlId).show();
                jQuery(controlId).trigger("cust_loaded");
            };
            ContextMenuJQ.ShowMenu = function() {
                new impMenuControl.Menu.MenuJQ().Init();
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery(".control-menu").addClass("control-active");
                jQuery(".control-menu").show();
                impMenuControl.Menu.MenuJQ.ProcessShow();
            };
            ContextMenuJQ.InsertImage = function() {
                ContextMenuJQ.ControlPageHide();
                var controlId = impInsertImage.Image.SelfJQ.controlId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(".action-button-insert-image").show();
                jQuery(".action-button-change-image").hide();
                jQuery(controlId).show();
                jQuery(controlId).trigger("custom_loaded");
            };
            ContextMenuJQ.CopyElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Copy();
            };
            ContextMenuJQ.DeleteElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Delete();
            };
            ContextMenuJQ.CutElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Cut();
            };
            ContextMenuJQ.PasteElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Paste();
            };
            ContextMenuJQ.PasteClipBorad = function() {
                jQuery(".jq-clipboard").html("");
                jQuery("#control-insert-clipboard").show();
            };
            ContextMenuJQ.ShowControlHeightWidth = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-height-width").addClass("control-active");
                jQuery("#control-height-width").show();
            };
            ContextMenuJQ.ShowBorderControl = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border").addClass("control-active");
                jQuery("#control-border").show();
            };
            ContextMenuJQ.ShowMarginControl = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-margin").addClass("control-active");
                jQuery("#control-margin").show();
            };
            ContextMenuJQ.ShowPaddingControl = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-padding").addClass("control-active");
                jQuery("#control-padding").show();
            };
            ContextMenuJQ.ShowOpacity = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-opacity").addClass("control-active");
                jQuery("#control-opacity").show();
            };
            ContextMenuJQ.ShowZindex = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-zindex").addClass("control-active");
                jQuery("#control-zindex").show();
            };
            ContextMenuJQ.ShowBS = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border-shadow").addClass("control-active");
                jQuery("#control-border-shadow").show();
            };
            ContextMenuJQ.ShowColor = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-color").addClass("control-active");
                jQuery("#control-color").show();
            };
            ContextMenuJQ.ShowBackgroundImage = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-bi").addClass("control-active");
                jQuery("#control-bi").show();
            };
            ContextMenuJQ.AttachAddRow = function() {
                jQuery(".li.ctx-menu-add-row").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowControlAddRow();
                        impAddRowControl.Page.AddRowJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachHeightWidth = function() {
                jQuery(".li.ctx-menu-height-width").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowControlHeightWidth();
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachBorder = function() {
                new impBorder.Border.BorderJQ().Init();
                jQuery(".li.ctx-menu-border").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowBorderControl();
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachMargin = function() {
                new impMargin.Margin.MarginJQ().Init();
                jQuery(".li.ctx-menu-margin").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowMarginControl();
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachPadding = function() {
                new impPadding.Padding.PaddingJQ().Init();
                jQuery(".li.ctx-menu-padding").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowPaddingControl();
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachOpacity = function() {
                new impOpacity.Opacity.OpacityJQ().Init();
                jQuery(".li.ctx-menu-opacity").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowOpacity();
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachZindex = function() {
                new impFrontBack.FrontBack.FrontBackJQ().Init();
                jQuery(".li.ctx-menu-z-index").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowZindex();
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachBorderShadow = function() {
                new impBorderShadow.BorderShadow.BorderShadowJQ().Init();
                jQuery(".li.ctx-menu-border-shadow").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowBS();
                        impBorderShadow.BorderShadow.BorderShadowJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachCopy = function() {
                jQuery(".li.ctx-menu-copy").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.CopyElement();
                });
            };
            ContextMenuJQ.AttachCut = function() {
                jQuery(".li.ctx-menu-cut").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.CutElement();
                });
            };
            ContextMenuJQ.AttachPaste = function() {
                jQuery(".li.ctx-menu-paste").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.PasteElement();
                });
            };
            ContextMenuJQ.AttachPasteClipBorad = function() {
                jQuery(".li.ctx-menu-paste-clipborad").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.PasteClipBorad();
                });
            };
            ContextMenuJQ.AttachSpacer = function() {
                jQuery(".smart-menu-insert-empty-space").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
                jQuery(".ctx-menu-insert-empty-space").on("click", function() {
                    window.smartObj = null;
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
            };
            ContextMenuJQ.AttachInsertImage = function() {
                new impInsertImage.Image.SelfJQ().Init();
                jQuery(".li.smart-menu-insert-image").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.InsertImage();
                        impInsertImage.Image.SelfJQ.ProcessSelectNotify();
                    }
                });
                jQuery(".li.ctx-menu-insert-image").on("click", function() {
                    window.smartObj = null;
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.InsertImage();
                        impInsertImage.Image.SelfJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachBackgroundImage = function() {
                new impBi.BI.BIJQ().Init();
                jQuery(".li.ctx-menu-background-image").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowBackgroundImage();
                        impBi.BI.BIJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachInsertMenu = function() {
                jQuery(".li.ctx-menu-insert-menu").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowMenu();
                        impMenuControl.Menu.MenuJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachColor = function() {
                new impColor.Color.ColorJQ().Init();
                jQuery(".li.ctx-menu-color").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowColor();
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.ContextInnerMenuShowHide = function() {
                jQuery("#contextMenuitems").find(".li").on("mouseenter", function(e) {
                    var left = 147;
                    e.pageX > $(document).width() - 200 && (left = -150);
                    jQuery(this).parent().find(".innerListContainer").first().css("left", left + "px");
                    jQuery(this).parent().find(".innerListContainer").first().css("display", "block");
                });
                jQuery("#contextMenuitems").find("li").on("mouseleave", function(e) {
                    jQuery(this).find(".innerListContainer").first().css("display", "none");
                });
            };
            ContextMenuJQ.LiClick = function() {
                jQuery("#contextMenuitems > li").on("click", function() {});
            };
            ContextMenuJQ.prototype.MainEvents = function() {
                jQuery(document).ready(function() {
                    if (0 == ctxMenuIsReady) {
                        ctxMenuIsReady = !0;
                        jQuery(document).on("click", function() {
                            jQuery("#contextMenu").hide(500);
                            jQuery("#smInsertNextPrev").hide(500);
                        });
                        if (0 == G_isAttachedContextMenu) {
                            G_isAttachedContextMenu = !0;
                            ContextMenuJQ.ContextMenuBinding();
                            ContextMenuJQ.LiClick();
                            ContextMenuJQ.ContextInnerMenuShowHide();
                            ContextMenuJQ.AttachInsertLinkContainer();
                            ContextMenuJQ.AttachInsertLink();
                            ContextMenuJQ.AttachInsertHTML();
                            ContextMenuJQ.AttachInsertText();
                            ContextMenuJQ.AttachAddRow();
                            ContextMenuJQ.AttachDeleteElement();
                            ContextMenuJQ.AttachHeightWidth();
                            ContextMenuJQ.AttachCopy();
                            ContextMenuJQ.AttachPaste();
                            ContextMenuJQ.AttachPasteClipBorad();
                            ContextMenuJQ.AttachCut();
                            ContextMenuJQ.AttachInsertImage();
                            ContextMenuJQ.AttachSpacer();
                            ContextMenuJQ.AttachBorder();
                            ContextMenuJQ.AttachMargin();
                            ContextMenuJQ.AttachZindex();
                            ContextMenuJQ.AttachBorderShadow();
                            ContextMenuJQ.AttachOpacity();
                            ContextMenuJQ.AttachPadding();
                            ContextMenuJQ.AttachColor();
                            ContextMenuJQ.AttachInsertMenu();
                            ContextMenuJQ.AttachBackgroundImage();
                            ContextMenuJQ.AttachControlPageClose();
                        }
                    }
                });
            };
            return ContextMenuJQ;
        }();
        ContextMenu.ContextMenuJQ = ContextMenuJQ;
    }(ContextMenu = exports.ContextMenu || (exports.ContextMenu = {}));
});

define("controls/bijq", [ "require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "../controls/imagejq" ], function(require, exports, impWatch, impUnodManager, impImage) {
    "use strict";
    var BI, isBIJQReady = !1;
    !function(BI) {
        var BIJQ = function() {
            function BIJQ() {}
            BIJQ.prototype.Init = function() {
                jQuery(document).ready(function() {
                    if (0 == isBIJQReady) {
                        isBIJQReady = !0;
                        jQuery(".smart-menu-bi-control").spinner({
                            min: 0,
                            max: 2e3,
                            step: 1,
                            change: function(event, ui) {},
                            spin: function(event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (void 0 != selectedElement) {
                                    var height = jQuery(".smart-menu-bi-height").spinner("value"), width = jQuery(".smart-menu-bi-width").spinner("value");
                                    selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                }
                            },
                            stop: function(event, ui) {
                                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                                if (void 0 != selectedElement) {
                                    var height = jQuery(".smart-menu-bi-height").spinner("value"), width = jQuery(".smart-menu-bi-width").spinner("value");
                                    selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                    var undo = new impUnodManager.Manager.UndoManager();
                                    undo.BeforeOperation();
                                }
                            }
                        });
                        jQuery(".bi-browse").on("click", function() {
                            impImage.Image.SelfJQ.GetImages();
                            jQuery("#control-image-bi-library").show();
                        });
                        jQuery(".make-100").on("click", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                jQuery(".ddn-bi-pixel-type").val("%");
                                var height = 100;
                                jQuery(".smart-menu-bi-height").spinner("value", height);
                                var width = 100;
                                jQuery(".smart-menu-bi-width").spinner("value", width);
                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".ddn-bi-pixel-type").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                var height = jQuery(".smart-menu-bi-height").spinner("value"), width = jQuery(".smart-menu-bi-width").spinner("value");
                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".action-button-insert-bi-image").on("click", function() {
                            var src = jQuery(".image-library-bi-select").first().attr("src");
                            jQuery(".bi-selected-image").val(src).change();
                            jQuery(".image-library-image").removeClass("image-library-bi-select");
                            jQuery("#control-image-bi-library").hide();
                        });
                        jQuery(".control-bi-controls .bi-selected-image").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement, applyToBody = jQuery(".bi-body").is(":checked");
                            if (1 == applyToBody) {
                                jQuery("page").css("background-image", "url('" + jQuery(this).val() + "')");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            } else if (void 0 != selectedElement) {
                                selectedElement.css("background-image", "url('" + jQuery(this).val() + "')");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .internet-bi-image-url").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-repeat").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-repeat", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-attachment").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-attachment", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                        jQuery(".control-bi-controls .ddn-bi-position").on("change", function() {
                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                            if (void 0 != selectedElement) {
                                selectedElement.css("background-position", jQuery(this).val());
                                var undo = new impUnodManager.Manager.UndoManager();
                                undo.BeforeOperation();
                            }
                        });
                    }
                });
            };
            BIJQ.ProcessSelectNotify = function() {
                BIJQ.isSelectProcessing = !0;
                try {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    if (void 0 != selectedElement) {
                        var bi = selectedElement.css("background-image").replace("url(", "").replace(")", "");
                        jQuery(".bi-selected-image").val(bi);
                        var repeat = selectedElement.css("background-repeat");
                        jQuery(".ddn-bi-repeat").val(repeat);
                        var attachment = selectedElement.css("background-attachment");
                        jQuery(".ddn-bi-attachment").val(attachment);
                        var position = selectedElement.css("background-position");
                        jQuery(".ddn-bi-position").val(position);
                        var backgroundSize = selectedElement.css("background-size");
                        if (void 0 != backgroundSize) {
                            var wh = backgroundSize.split(" ");
                            if (wh.length >= 2) {
                                var width = wh[0], heigth = wh[1];
                                jQuery(".ddn-bi-pixel-type").val("px");
                                width = width.replace("px", "");
                                heigth = heigth.replace("px", "");
                                jQuery(".smart-menu-bi-height").spinner("value", heigth);
                                jQuery(".smart-menu-bi-width").spinner("value", width);
                            } else {
                                jQuery(".smart-menu-bi-height").spinner("value", 0);
                                jQuery(".smart-menu-bi-width").spinner("value", 0);
                            }
                        }
                    }
                } catch (ex) {}
                BIJQ.isSelectProcessing = !1;
            };
            BIJQ.isSelectProcessing = !1;
            return BIJQ;
        }();
        BI.BIJQ = BIJQ;
    }(BI = exports.BI || (exports.BI = {}));
});

define("Watch/WatchMouseJQ", [ "require", "exports", "../Common/CommonMethodsJQ", "../Controls/ControlsJQ", "../Controls/TextJQ", "../Controls/ImageJQ", "../Controls/FontJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../SmartMenu/SmartMenuJQ", "../Error/ErrorJQ", "../ContextMenu/Contextmenujq", "../controls/bijq", "../JQte/OnInsert", "../MalFormed/MalFormedJQ", "../Controls/ControlCommonJQ", "../Controls/MarginJQ", "../Controls/PaddingJQ", "../Controls/FrontBackJQ", "../Watch/CopyPasteJQ", "../Controls/OpacityJQ" ], function(require, exports, impCommon, impAddRow, impText, impImage, impFont, impBorder, impColor, impHeightWidth, impError, impCtxMenu, impBi, impOnInsert, impmal, impCommonCode, impMargin, impPadding, impFrontBack, impCopy, impOpacity) {
    "use strict";
    var Watch, G_isAttachedWatch = !1;
    !function(Watch) {
        var MouseJQ = function() {
            function MouseJQ() {}
            MouseJQ.RemoveAndResetRemovableRow = function() {
                if (jQuery(".removable-row").length > 0) {
                    jQuery(".removable-row").removeClass("removable-row");
                    jQuery(".columns-pending").removeClass("columns-pending");
                    MouseJQ.selectedElement = jQuery("#nononoelement");
                }
                if (void 0 == MouseJQ.selectedElement) {
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    errorHandler.ActionHelp("Please select a element.");
                }
            };
            MouseJQ.ProcessMove = function(e) {
                if (!jQuery("page").hasClass("dragging") && !jQuery("page").hasClass("resizing")) {
                    var $target = jQuery(event.target);
                    $target.hasClass("key") || ($target = $target.closest(".key"));
                    if ($target.hasClass("key")) {
                        jQuery(".design-page-row").hide();
                        $target.hasClass("row") ? $target.children(".design-page-row").show() : $target.closest(".row").children(".design-page-row").show();
                    }
                }
            };
            MouseJQ.ProcessClick = function(e) {
                new impCommon.Common.CommonMethodsJQ();
                if ("inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display") && 1 != impmal.MalFormed.MalFormedJQ.IsMalFormed) {
                    if (void 0 != MouseJQ.selectedElement && 0 == e.ctrlKey) {
                        MouseJQ.selectedElement.removeClass("image-selection");
                        MouseJQ.selectedElement.removeClass("design-select-element-just-mark");
                    }
                    0 == e.ctrlKey && jQuery(".image-selection").removeClass("image-selection");
                    MouseJQ.selectedElement = jQuery(e.target);
                    MouseJQ.selectedElement = MouseJQ.selectedElement.closest(".key");
                    0 == MouseJQ.selectedElement.hasClass("key") && (MouseJQ.selectedElement = jQuery("#noelement"));
                    MouseJQ.selectedElement.hasClass("column") ? jQuery(".selected-display-element").text("Column") : MouseJQ.selectedElement.hasClass("row") ? jQuery(".selected-display-element").text("Row") : MouseJQ.selectedElement.hasClass("empty-container-text") ? jQuery(".selected-display-element").text("Text Block") : MouseJQ.selectedElement.hasClass("empty-container-image") ? jQuery(".selected-display-element").text("Image") : MouseJQ.selectedElement.hasClass("jq-normal-link") ? jQuery(".selected-display-element").text("Link") : MouseJQ.selectedElement.hasClass("page") && jQuery(".selected-display-element").text("Page");
                    if (!MouseJQ.selectedElement.hasClass("empty-container-text")) {
                        $(".empty-container-text").draggable({
                            disabled: !1
                        });
                        jQuery(".editor").hide();
                        jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                    }
                    if (1 == MouseJQ.selectedElement.hasClass("column")) {
                        jQuery(".design-page-row").hide();
                        MouseJQ.selectedElement.parent().children(".design-page-row").show();
                    } else if (1 == MouseJQ.selectedElement.hasClass("row")) {
                        jQuery(".design-page-row").hide();
                        MouseJQ.selectedElement.children(".design-page-row").show();
                    } else if (1 == MouseJQ.selectedElement.hasClass("image-text-other")) {
                        jQuery(".design-page-row").hide();
                        MouseJQ.selectedElement.parent().parent().children(".design-page-row").show();
                    } else jQuery(".design-page-row").hide();
                    MouseJQ.selectedElement.addClass("design-select-element-just-mark");
                    impAddRow.Page.AddRowJQ.ProcessSelectNotify();
                    var activeControl = MouseJQ.GetActiveControl(), activeSBControl = MouseJQ.GetActiveSidebarControl();
                    if (void 0 != activeControl && "" != activeControl) switch (activeControl.toLowerCase()) {
                      case "add-row":
                        break;

                      case "height-width":
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                        break;

                      case "image-library":
                        impImage.Image.SelfJQ.ProcessSelectNotify();
                        break;

                      case "color":
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                        break;

                      case "border":
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                        break;

                      case "insert-text":
                        impText.Text.TextJQ.ProcessSelectNotify();
                        break;

                      case "bi":
                        impBi.BI.BIJQ.ProcessSelectNotify();
                        break;

                      case "margin":
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                        break;

                      case "padding":
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                        break;

                      case "zindex":
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                        break;

                      case "opacity":
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                    }
                    if (void 0 != activeSBControl && "" != activeSBControl) switch (activeSBControl.toLowerCase()) {
                      case "add-row":
                        break;

                      case "height-width":
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                        break;

                      case "image-library":
                        impImage.Image.SelfJQ.ProcessSelectNotify();
                        break;

                      case "color":
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                        break;

                      case "border":
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                        break;

                      case "insert-text":
                        impText.Text.TextJQ.ProcessSelectNotify();
                        break;

                      case "bi":
                        impBi.BI.BIJQ.ProcessSelectNotify();
                        break;

                      case "margin":
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                        break;

                      case "padding":
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                        break;

                      case "zindex":
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                        break;

                      case "opacity":
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                    }
                    try {
                        if ("none" != jQuery(".jq-properties-all").css("display").toLowerCase()) {
                            impColor.Color.ColorJQ.ProcessSelectNotify();
                            impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                            impBorder.Border.BorderJQ.ProcessSelectNotify();
                            impFont.Font.FontJQ.ProcessSelectNotify();
                            impBi.BI.BIJQ.ProcessSelectNotify();
                        }
                    } catch (ex) {}
                    if (void 0 != MouseJQ.selectedElement && !MouseJQ.selectedElement.hasClass("jqte") && "inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display")) {
                        1 == e.ctrlKey && MouseJQ.selectedElement.hasClass("image-selection") ? MouseJQ.selectedElement.removeClass("image-selection") : MouseJQ.selectedElement.addClass("image-selection");
                        1 == e.ctrlKey && (MouseJQ.selectedElement = jQuery(".image-selection"));
                    }
                    try {
                        var box = jQuery(MouseJQ.selectedElement)[0].getBoundingClientRect(), circleLeftTopElement = jQuery("<div class='circle-deg' style='width:14px; border-radius:50%; height:14px; border:2px solid white; position:absolute; background-color:#00A1FF;'></div>"), circleRightTopElement = jQuery(circleLeftTopElement).clone(), circleLeftBottomElement = jQuery(circleLeftTopElement).clone(), circleRightBottomElement = jQuery(circleLeftTopElement).clone();
                        circleRightBottomElement.addClass("z-index-back");
                        var body = document.body, docElem = document.documentElement, scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop, scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + scrollTop - clientTop, left = box.left + scrollLeft - clientLeft, width = jQuery(MouseJQ.selectedElement).css("width"), height = jQuery(MouseJQ.selectedElement).css("height"), widthf = parseFloat(width.replace("px", "")), heightf = parseFloat(height.replace("px", ""));
                        circleLeftTopElement.css("left", left - 5);
                        circleLeftTopElement.css("top", top - 5);
                        circleLeftBottomElement.css("left", left - 5);
                        circleLeftBottomElement.css("top", top + heightf - 5);
                        circleRightTopElement.css("left", left + widthf - 7);
                        circleRightTopElement.css("top", top - 5);
                        circleRightBottomElement.css("left", left + widthf - 7);
                        circleRightBottomElement.css("top", top + heightf - 5);
                        jQuery(".circle-deg").remove();
                        jQuery("body").append(circleLeftTopElement);
                        jQuery("body").append(circleLeftBottomElement);
                        jQuery("body").append(circleRightTopElement);
                        jQuery("body").append(circleRightBottomElement);
                    } catch (ex) {}
                }
            };
            MouseJQ.GetActiveControl = function() {
                for (var activeControl = "", controls = jQuery(".control-page"), i = 0; i < controls.length; i++) if ("block" == jQuery(controls[i]).css("display")) {
                    activeControl = jQuery(controls[i]).attr("name");
                    break;
                }
                return activeControl;
            };
            MouseJQ.ResetAfterClear = function() {
                var activeSBControl = MouseJQ.GetActiveSidebarControl();
                if (void 0 != activeSBControl && "" != activeSBControl) switch (activeSBControl.toLowerCase()) {
                  case "add-row":
                    break;

                  case "height-width":
                    impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                    break;

                  case "image-library":
                    impImage.Image.SelfJQ.ProcessSelectNotify();
                    break;

                  case "color":
                    impColor.Color.ColorJQ.ProcessSelectNotify();
                    break;

                  case "border":
                    impBorder.Border.BorderJQ.ProcessSelectNotify();
                    break;

                  case "insert-text":
                    impText.Text.TextJQ.ProcessSelectNotify();
                    break;

                  case "bi":
                    impBi.BI.BIJQ.ProcessSelectNotify();
                    break;

                  case "margin":
                    impMargin.Margin.MarginJQ.ProcessSelectNotify();
                    break;

                  case "padding":
                    impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                    break;

                  case "zindex":
                    impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                    break;

                  case "opacity":
                    impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                }
            };
            MouseJQ.GetActiveSidebarControl = function() {
                var activeControl = "", activeControl = jQuery(".prop-sb.ui-accordion-header-active").first().attr("name");
                return activeControl;
            };
            MouseJQ.prototype.WatchPage = function() {
                jQuery(document).ready(function() {
                    if (0 == G_isAttachedWatch) {
                        G_isAttachedWatch = !0;
                        jQuery(".prop-sb").click(function() {
                            impAddRow.Page.AddRowJQ.ProcessSelectNotify();
                            var activeSBControl = MouseJQ.GetActiveSidebarControl();
                            if (void 0 != activeSBControl && "" != activeSBControl) switch (activeSBControl.toLowerCase()) {
                              case "add-row":
                                break;

                              case "height-width":
                                impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                                break;

                              case "image-library":
                                impImage.Image.SelfJQ.ProcessSelectNotify();
                                break;

                              case "color":
                                impColor.Color.ColorJQ.ProcessSelectNotify();
                                break;

                              case "border":
                                impBorder.Border.BorderJQ.ProcessSelectNotify();
                                break;

                              case "insert-text":
                                impText.Text.TextJQ.ProcessSelectNotify();
                                break;

                              case "bi":
                                impBi.BI.BIJQ.ProcessSelectNotify();
                                break;

                              case "margin":
                                impMargin.Margin.MarginJQ.ProcessSelectNotify();
                                break;

                              case "padding":
                                impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                                break;

                              case "zindex":
                                impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                                break;

                              case "opacity":
                                impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                            }
                        });
                        jQuery("page").on("click", function(e) {
                            MouseJQ.ProcessClick(e);
                            if (1 == impCommonCode.ControlCommon.Code.AnchorClicked) {
                                impCommonCode.ControlCommon.Code.AnchorClicked = !1;
                                null != e.cancelBubble && (e.cancelBubble = !0);
                                e.stopPropagation && e.stopPropagation();
                                e.preventDefault && e.preventDefault();
                                null != e.returnValue && (e.returnValue = !1);
                                return !1;
                            }
                        });
                        jQuery("input").on("keydown", function(e) {
                            var BACK = 8;
                            e.which == BACK && (impOnInsert.OnInsert.Code.BackPassed = !0);
                        });
                        jQuery("textarea").on("keydown", function(e) {
                            var BACK = 8;
                            e.which == BACK && (impOnInsert.OnInsert.Code.BackPassed = !0);
                        });
                        jQuery(".jqte-editor").on("keydown", function(e) {
                            var BACK = 8;
                            e.which == BACK && (impOnInsert.OnInsert.Code.BackPassed = !0);
                        });
                        jQuery(document).on("keydown", function(e) {
                            var BACK = 8;
                            if (e.which == BACK) {
                                if (0 == impOnInsert.OnInsert.Code.BackPassed && 0 == impOnInsert.OnInsert.Code.BackPassedEdit) {
                                    null != e.cancelBubble && (e.cancelBubble = !0);
                                    e.stopPropagation && e.stopPropagation();
                                    e.preventDefault && e.preventDefault();
                                    null != e.returnValue && (e.returnValue = !1);
                                    return !1;
                                }
                                impOnInsert.OnInsert.Code.BackPassed = !1;
                            }
                            if (e.ctrlKey || e.metaKey) switch (String.fromCharCode(e.which).toLowerCase()) {
                              case "s":
                                try {
                                    console.log("ctrl + s pressed");
                                } catch (ex) {}
                                event.preventDefault();
                                jQuery(".jq-save").click();
                                return !1;

                              case "z":
                                if (!MouseJQ.selectedElement.hasClass("empty-container-text") || 1 != MouseJQ.selectedElement.length || "text" != MouseJQ.selectedElement.find(".jq-text-block-content").css("cursor")) {
                                    try {
                                        console.log("ctrl + z pressed");
                                    } catch (ex) {}
                                    event.preventDefault();
                                    jQuery(".jq-undo").click();
                                    return !1;
                                }
                                break;

                              case "y":
                                try {
                                    console.log("ctrl + y pressed");
                                } catch (ex) {}
                                event.preventDefault();
                                jQuery(".jq-redo").click();
                                return !1;
                            }
                        });
                        $("page").bind("copy", function() {
                            impCopy.CopyPaste.CopyPasteJQ.Copy();
                        });
                        $("page").bind("paste", function() {
                            if (MouseJQ.selectedElement.hasClass("column")) impCopy.CopyPaste.CopyPasteJQ.Paste(); else {
                                var eh = new impError.ErrorHandle.ErrorJQ();
                                eh.ActionHelp("Please select a [Column] to paste.");
                            }
                        });
                        jQuery("page").bind("cut", function() {
                            impCopy.CopyPaste.CopyPasteJQ.Cut();
                        });
                        $(window).on("beforeunload", function() {
                            jQuery(".control-page").hide();
                            jQuery(".control-page").removeClass("control-active");
                            jQuery("#control-save").addClass("control-active");
                            jQuery("#control-save").show();
                            return "Note: Unsaved changes will be lost!";
                        });
                        jQuery(document).keyup(function(e) {
                            var ESC = 27;
                            if (e.which === ESC) {
                                $(".empty-container-text").draggable({
                                    disabled: !1
                                });
                                $(".empty-container-image").draggable({
                                    disabled: !1
                                });
                                $("page .jq-text-block-content").removeAttr("contentEditable");
                                jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                                jQuery(".editor").hide();
                                impCtxMenu.ContextMenu.ContextMenuJQ.ControlPageHide();
                                null != e.cancelBubble && (e.cancelBubble = !0);
                                e.stopPropagation && e.stopPropagation();
                                e.preventDefault && e.preventDefault();
                                null != e.returnValue && (e.returnValue = !1);
                                return !1;
                            }
                        });
                    }
                });
            };
            return MouseJQ;
        }();
        Watch.MouseJQ = MouseJQ;
    }(Watch = exports.Watch || (exports.Watch = {}));
});

define("Controls/JQueryUI", [ "require", "exports", "../Watch/WatchMouseJQ", "../Common/CommonMethodsJQ", "../UndoManager/UndoManager", "../Controls/TextJQ" ], function(require, exports, impWatch, impCommonMethods, impUndoManager, impText) {
    "use strict";
    var JQueryUI;
    !function(JQueryUI) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        JQueryUI.SmartObj = SmartObj;
        var UIHelper = function() {
            function UIHelper() {}
            return UIHelper;
        }();
        JQueryUI.UIHelper = UIHelper;
        var CommonCode = function() {
            function CommonCode() {}
            CommonCode.Draggable = function(element, cancelableCss) {
                jQuery(element).draggable({
                    cancel: cancelableCss,
                    revert: "invalid",
                    helper: "clone",
                    appendTo: "body",
                    distance: 5,
                    start: function(event, ui) {
                        CommonCode.DragStopped = !1;
                        jQuery("#interface_bottom").hide();
                        jQuery(ui.helper).addClass("jq-dragging");
                        jQuery("page").addClass("dragging");
                        CommonCode.DroppableEventCount = 0;
                        CommonCode.droppableCount++;
                        ui.helper.css("z-index", "9999999999");
                        ui.helper.css("opacity", "0.8");
                    },
                    stop: function(event, ui) {
                        CommonCode.DragStopped = !0;
                        jQuery("#interface_bottom").show();
                        jQuery(ui.helper).removeClass("jq-dragging");
                        jQuery("page").removeClass("dragging");
                        CommonCode.droppableCount = 2;
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        ui.helper.css("opacity", "1");
                        ui.helper.css("z-index", "0");
                    },
                    drag: function(event, ui) {
                        var element = jQuery(event.target).hasClass("key") ? jQuery(event.target) : jQuery(event.target).closest(".key");
                        element.addClass("image-selection-drag");
                    }
                });
            };
            CommonCode.ResizableImage = function() {
                var handleDefault = "e,se,s";
                $(".image-element").resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    delay: 0,
                    start: function(event, ui) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                    },
                    stop: function(event, ui) {
                        var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "height");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "min-width");
                        commonMethods.RemoveStyle(ui.helper.closest(".ui-wrapper"), "width");
                    },
                    resize: function(event, ui) {
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                    }
                });
            };
            CommonCode.commonHeight = function(height, ui) {
                return "error";
            };
            CommonCode.ResizableColumn = function() {
                var handleDefault = "e,s";
                $(".column").resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    distance: 0,
                    start: function(event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                        if ("se" == jQuery(ui.element).data("ui-resizable").axis || "s" == $(ui.element).data("ui-resizable").axis) {
                            ui.element.height(ui.element.height());
                            CommonCode.originalHeightBeforeDragStartStr = $(ui.helper).css("min-height");
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                        }
                        var nextElements = jQuery(ui.helper).nextAll(".column");
                        nextElements.hide();
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                    },
                    stop: function(event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        jQuery(".ui-resizable-se").removeClass("selected-resizable");
                        var height = ui.size.height, width = ui.size.width, originalHeight = ui.originalSize.height, originalWidth = ui.originalSize.width, rowWidth = jQuery(ui.helper).parent().width(), onePercentPixels = Math.floor(1 * rowWidth / 100), colXsOnePercentage = 2, colXsOnePixels = colXsOnePercentage * onePercentPixels, commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                        jQuery(ui.helper).attr("style");
                        if (height != originalHeight) {
                            CommonCode.commonHeight(height, ui);
                            commonMethods.RemoveSingleStyle(ui.helper, "height");
                            jQuery(ui.helper).css("min-height", height);
                        }
                        commonMethods.RemoveStyle(ui.helper, "min-width");
                        commonMethods.RemoveStyle(ui.helper, "width");
                        var twoFour = 48;
                        if (width > originalWidth) {
                            var emptyXsCount = 0, nextElements = jQuery(ui.helper).nextAll(".column");
                            try {
                                for (var columns = ui.helper.parent().children(".column"), count = 0, j = 0; j < columns.length; j++) {
                                    var size = jQuery(columns[j]).attr("xs-column-size");
                                    if (void 0 != size && "" != size) {
                                        var num = Number(size);
                                        count += num;
                                    }
                                }
                                twoFour > count && (emptyXsCount = twoFour - count);
                                var extenedWidth = width - originalWidth, colXs = Math.floor(extenedWidth / colXsOnePixels);
                                0 == colXs && (colXs = 1);
                                var nextElementsCount = jQuery(ui.helper).nextAll(".column").length, eachXs = Math.floor(colXs / nextElementsCount);
                                0 == eachXs && (eachXs = 1);
                                for (var colXsTemp = colXs, i = 0; i < nextElements.length && colXsTemp > 0; i++) {
                                    var nextXsSize = Number(jQuery(nextElements[i]).attr("xs-column-size"));
                                    if (1 != nextXsSize) {
                                        var newNextXsSize = nextXsSize - eachXs;
                                        if (1 > newNextXsSize) {
                                            colXsTemp = colXsTemp - eachXs + 1;
                                            newNextXsSize = 1;
                                        } else colXsTemp -= eachXs;
                                        jQuery(nextElements[i]).removeClass("col-xs-" + nextXsSize);
                                        jQuery(nextElements[i]).addClass("col-xs-" + newNextXsSize);
                                        jQuery(nextElements[i]).attr("xs-column-size", newNextXsSize);
                                    }
                                }
                                var xsSize = Number(ui.helper.attr("xs-column-size")), newXsSize = xsSize + colXs - colXsTemp;
                                colXs == colXsTemp && (newXsSize += colXsTemp);
                                var allXs = 0;
                                ui.helper.parent().children(".column").each(function() {
                                    allXs += Number(jQuery(this).attr("xs-column-size"));
                                });
                                for (var overallMinusCurrent = allXs - xsSize, g = overallMinusCurrent + newXsSize; g > twoFour; ) {
                                    newXsSize--;
                                    g--;
                                }
                                jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                ui.helper.attr("xs-column-size", newXsSize);
                            } catch (ex) {}
                            nextElements.show();
                        } else if (originalWidth > width) {
                            var nextElements = jQuery(ui.helper).nextAll(".column");
                            try {
                                var extenedWidth = originalWidth - width, colXs = Math.floor(extenedWidth / colXsOnePixels);
                                0 == colXs && (colXs = 1);
                                var eachXs = Math.floor(colXs / 1);
                                0 == eachXs && (eachXs = 1);
                                var xsSize = Number(ui.helper.attr("xs-column-size"));
                                if (xsSize > 1) {
                                    var eachXsTemp = eachXs, newXsSize = xsSize - eachXs;
                                    if (0 > newXsSize) {
                                        eachXsTemp = eachXs + newXsSize;
                                        newXsSize = 1;
                                    }
                                    if (0 == newXsSize) {
                                        eachXsTemp = eachXs - 1;
                                        newXsSize = 1;
                                    }
                                    jQuery(ui.helper).removeClass("col-xs-" + xsSize);
                                    jQuery(ui.helper).addClass("col-xs-" + newXsSize);
                                    ui.helper.attr("xs-column-size", newXsSize);
                                    var colXsTemp = colXs;
                                    if (colXsTemp > 0) {
                                        var nextXsSize = Number(jQuery(nextElements[0]).attr("xs-column-size")), newNextXsSize = nextXsSize + eachXsTemp, allXs = 0;
                                        ui.helper.parent().children(".column").each(function() {
                                            allXs += Number(jQuery(this).attr("xs-column-size"));
                                        });
                                        for (var overallMinusNext = allXs - Number(jQuery(nextElements[0]).attr("xs-column-size")), g = overallMinusNext + newNextXsSize; g > twoFour; ) {
                                            newNextXsSize--;
                                            g--;
                                        }
                                        jQuery(nextElements[0]).removeClass("col-xs-" + nextXsSize);
                                        jQuery(nextElements[0]).addClass("col-xs-" + newNextXsSize);
                                        jQuery(nextElements[0]).attr("xs-column-size", newNextXsSize);
                                    }
                                }
                            } catch (ex) {}
                            nextElements.show();
                        }
                        var nextElementsToShow = jQuery(ui.helper).nextAll(".column");
                        nextElementsToShow.show();
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {}
                });
            };
            CommonCode.OnResize = function(event, ui) {
                "se" == jQuery(ui.element).data("ui-resizable").axis || ("s" == $(ui.element).data("ui-resizable").axis ? ui.helper.height(ui.helper.height() + 20) : "s" == $(ui.element).data("ui-resizable").axis);
            };
            CommonCode.JustResizable = function(elementCss, handle) {
                var handleDefault = "e,se,s";
                void 0 != handle && "" != handle && (handleDefault = handle);
                $(elementCss).resizable({
                    handles: handleDefault,
                    minHeight: 0,
                    minWidth: 0,
                    delay: 0,
                    start: function(event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                    },
                    stop: function(event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        ui.size.height, ui.size.width;
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {}
                });
            };
            CommonCode.ResizableRootElements = function(elementCss, handle) {
                var handleDefault = "e,se,s";
                void 0 != handle && "" != handle && (handleDefault = handle);
                $(elementCss).resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    delay: 0,
                    start: function(event, ui) {
                        if ("se" == jQuery(ui.element).data("ui-resizable").axis || "s" == $(ui.element).data("ui-resizable").axis) {
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                            commonMethods.RemoveStyle(ui.helper, "height");
                        }
                    },
                    stop: function(event, ui) {
                        var height = ui.size.height;
                        ui.size.width;
                        if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("root-elements")) {
                            var common = new impCommonMethods.Common.CommonMethodsJQ();
                            common.RemoveStyle(jQuery(this), "min-height");
                            common.RemoveStyle(jQuery(this), "height");
                            jQuery(this).css("min-height", height);
                        }
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                    }
                });
            };
            CommonCode.ResizeCommon = function(selectedElement) {
                try {
                    var box = jQuery(selectedElement)[0].getBoundingClientRect(), circleLeftTopElement = jQuery("<div class='circle-deg' style='width:12px; border-radius:50%; height:12px; position:absolute; background-color:#00A1FF;'></div>"), circleRightTopElement = jQuery(circleLeftTopElement).clone(), circleLeftBottomElement = jQuery(circleLeftTopElement).clone(), circleRightBottomElement = jQuery(circleLeftTopElement).clone();
                    circleRightBottomElement.addClass("z-index-back");
                    var body = document.body, docElem = document.documentElement, scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop, scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + scrollTop - clientTop, left = box.left + scrollLeft - clientLeft, width = jQuery(selectedElement).css("width"), height = jQuery(selectedElement).css("height"), widthf = parseFloat(width.replace("px", "")), heightf = parseFloat(height.replace("px", ""));
                    circleLeftTopElement.css("left", left - 5);
                    circleLeftTopElement.css("top", top - 5);
                    circleLeftBottomElement.css("left", left - 5);
                    circleLeftBottomElement.css("top", top + heightf - 5);
                    circleRightTopElement.css("left", left + widthf - 5);
                    circleRightTopElement.css("top", top - 5);
                    circleRightBottomElement.css("left", left + widthf - 5);
                    circleRightBottomElement.css("top", top + heightf - 5);
                    jQuery(".circle-deg").remove();
                    jQuery("body").append(circleLeftTopElement);
                    jQuery("body").append(circleLeftBottomElement);
                    jQuery("body").append(circleRightTopElement);
                    jQuery("body").append(circleRightBottomElement);
                } catch (ex) {}
            };
            CommonCode.Resizable = function(elementCss, handle) {
                var handleDefault = "e,se,s";
                void 0 != handle && "" != handle && (handleDefault = handle);
                $(elementCss).resizable({
                    handles: handleDefault,
                    autoHide: !0,
                    distance: 0,
                    start: function(event, ui) {
                        jQuery("page").addClass("resizing");
                        var axis = jQuery(ui.element).data("ui-resizable").axis;
                        jQuery(ui.element).children(".ui-resizable-handle").find(".jq-square-" + axis).parent().addClass("ui-resizable-handle-hover");
                        $(ui.helper).closest(".key").after("<div class='height float-right dummy-div'></div>");
                        jQuery(".dummy-div").height(ui.helper.height() + 2);
                        if ("se" == jQuery(ui.element).data("ui-resizable").axis || "s" == $(ui.element).data("ui-resizable").axis) {
                            ui.helper.css("height", ui.helper.css("min-height"));
                            var commonMethods = new impCommonMethods.Common.CommonMethodsJQ();
                            commonMethods.RemoveStyle(ui.helper, "min-height");
                        }
                    },
                    stop: function(event, ui) {
                        jQuery("page").removeClass("resizing");
                        jQuery(".dummy-div").remove();
                        var height = ui.size.height;
                        ui.size.width;
                        if (jQuery(this).hasClass("empty-container-text") || jQuery(this).hasClass("empty-container-image") || jQuery(this).hasClass("empty-container") || jQuery(this).hasClass("jq-plus-container-text") || jQuery(this).hasClass("jq-plus-container-image") || jQuery(this).hasClass("jq-text-block-container") || jQuery(this).hasClass("root-elements")) if (jQuery(this).hasClass("jq-plus-container-image") || jQuery(this).hasClass("empty-container-spacer")) {
                            jQuery(this).css("height", height);
                            jQuery(this).css("min-height", height);
                        } else {
                            jQuery(this).css("height", height);
                            jQuery(this).css("min-height", height);
                        }
                        JQueryUI.CommonCode.ResizeCommon(ui.element);
                        var uiHelper = new UIHelper();
                        uiHelper.helper = $(this).closest(".column");
                        CommonCode.commonHeight(100, uiHelper);
                        jQuery(ui.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover");
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    },
                    resize: function(event, ui) {
                        window.setTimeout(function() {
                            jQuery(".dummy-div").height() < ui.helper.height() && jQuery(".dummy-div").height(jQuery(".dummy-div").height() + 2);
                        }, 10);
                    }
                });
            };
            CommonCode.Droppable = function(elementCss) {
                $(elementCss).droppable({
                    greedy: !0,
                    tolerance: "pointer",
                    accept: ".bldr-draggable, .image-text-other",
                    drop: function(event, ui) {
                        if (1 != CommonCode.DroppableEventCount) {
                            CommonCode.DroppableEventCount = 1;
                            try {
                                window.smartObj = new JQueryUI.SmartObj();
                                window.smartObj.currentObj = void 0;
                                window.smartObj.command = "";
                                impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");
                                var x = event.clientX, y = event.clientY + $(document).scrollTop();
                                jQuery(".nearest-element").removeClass("nearest-element");
                                impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other") && (impWatch.Watch.MouseJQ.selectedElement = impWatch.Watch.MouseJQ.selectedElement.closest(".column"));
                                if (impWatch.Watch.MouseJQ.selectedElement.hasClass("column")) {
                                    var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other"), nearestLeftArray = [], nearestTopArray = [];
                                    if ($elements.length > 0) {
                                        $elements.each(function(index, _this) {
                                            var $this = $(_this), top = parseFloat($this.attr("top")), bottom = parseFloat($this.attr("bottom")), left = parseFloat($this.attr("left"));
                                            if (y >= top && bottom >= y && x >= left) {
                                                nearestLeftArray.push(left);
                                                nearestTopArray.push(top);
                                            }
                                        });
                                        var nearestLeft = 0, nearestTop = 0;
                                        nearestLeftArray.length > 0 && (nearestLeft = Math.max.apply(Math, nearestLeftArray));
                                        nearestTopArray.length > 0 && (nearestTop = Math.max.apply(Math, nearestTopArray));
                                        impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");
                                        impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();
                                        if (impWatch.Watch.MouseJQ.nearestElement.length > 0) {
                                            window.smartObj.currentObj = impWatch.Watch.MouseJQ.nearestElement;
                                            window.smartObj.command = "n";
                                        }
                                    }
                                }
                            } catch (ex) {}
                            impWatch.Watch.MouseJQ.selectedElement = jQuery(".image-selection-drag");
                            if (CommonCode.droppableCount >= 2 && void 0 != CommonCode.currentTarget && !ui.draggable.hasClass("control-drag-anywhere") && !ui.draggable.hasClass("bldr-draggable")) {
                                CommonCode.droppableCount++;
                                ui.draggable.css("opacity", "1");
                                if (ui.draggable.find(".jq-image-block-image").length > 0) {
                                    ui.draggable.css("position", "relative").css("left", "").css("top", "");
                                    void 0 != impWatch.Watch.MouseJQ.nearestElement && impWatch.Watch.MouseJQ.nearestElement.length > 0 ? impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.closest(".empty-container-image")) : CommonCode.currentTarget.closest(".key").hasClass("column") ? CommonCode.currentTarget.closest(".key").append(ui.draggable.closest(".empty-container-image")) : CommonCode.currentTarget.closest(".key").after(ui.draggable.closest(".empty-container-image"));
                                } else void 0 != impWatch.Watch.MouseJQ.nearestElement && impWatch.Watch.MouseJQ.nearestElement.length > 0 ? impWatch.Watch.MouseJQ.nearestElement.after(ui.draggable.css("position", "relative").css("left", "").css("top", "")) : CommonCode.currentTarget.closest(".key").hasClass("column") ? CommonCode.currentTarget.closest(".key").append(ui.draggable.css("position", "relative").css("left", "").css("top", "")) : CommonCode.currentTarget.closest(".key").after(ui.draggable.css("position", "relative").css("left", "").css("top", ""));
                                jQuery(".image-selection").removeClass("image-selection");
                                event.stopPropagation();
                                CommonCode.currentTarget = null;
                                var undomanager = new impUndoManager.Manager.UndoManager();
                                undomanager.BeforeOperation();
                            } else if (!ui.draggable.hasClass("control-drag-anywhere")) {
                                ui.draggable.css("position", "relative").css("left", "").css("top", "");
                                if (ui.draggable.hasClass("bldr-draggable")) {
                                    var id = ui.draggable.attr("id");
                                    switch (id) {
                                      case "bldr-drgb-text":
                                        impText.Text.TextJQ.InsertTextBlock("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
                                        break;

                                      case "bldr-drgb-title":
                                        impText.Text.TextJQ.InsertTextBlock("<h2>Title Here.</h2>");
                                    }
                                }
                            }
                            jQuery(".image-text-other").each(function(index, _this) {
                                var $this = jQuery(_this), bottom = $this.offset().top + $this.height(), top = $this.offset().top, left = $this.offset().left;
                                $this.attr("top", top);
                                $this.attr("bottom", bottom);
                                $this.attr("left", left);
                            });
                            jQuery(".image-selection-drag").removeClass("image-selection-drag");
                            jQuery(".empty").removeClass("empty");
                            jQuery("#control-common-execute").trigger("click");
                        }
                    },
                    out: function(event, ui) {
                        CommonCode.droppableCount++;
                    },
                    over: function(event, ui) {
                        jQuery(".image-selection-drag").removeClass("image-selection-drag");
                        CommonCode.currentTarget = jQuery(event.target);
                        if (jQuery(event.target).hasClass("key")) {
                            if ("inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display")) {
                                jQuery(event.target).addClass("image-selection-drag");
                                impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target);
                            }
                        } else if ("inline-block" != jQuery(".close-preview").css("display") && "block" != jQuery(".close-preview").css("display")) {
                            jQuery(event.target).closest(".key").addClass("image-selection-drag");
                            impWatch.Watch.MouseJQ.selectedElement = jQuery(event.target).closest(".key");
                        }
                    }
                });
            };
            CommonCode.DraggableDestroy = function(element) {
                jQuery(element).each(function(index, _this) {
                    try {
                        var $this = $(_this);
                        $this.draggable("destroy");
                    } catch (ex) {}
                });
            };
            CommonCode.DroppableDestroy = function(elementCss) {
                jQuery(elementCss).each(function(index, _this) {
                    try {
                        var $this = $(_this);
                        $this.droppable("destroy");
                        $this.removeClass("ui-droppable");
                    } catch (ex) {}
                });
            };
            CommonCode.ResizableDestroy = function(elementCss) {
                jQuery(elementCss).each(function(index, _this) {
                    try {
                        var $this = $(_this);
                        $this.resizable("destroy");
                        jQuery($this).find("div").remove(".ui-resizable-handle");
                    } catch (ex) {
                        jQuery($this).find("div").remove(".ui-resizable-handle");
                    }
                });
            };
            CommonCode.droppableCount = 2;
            CommonCode.DroppableEventCount = 0;
            CommonCode.DragStopped = !0;
            CommonCode.originalHeightBeforeDragStartStr = "";
            return CommonCode;
        }();
        JQueryUI.CommonCode = CommonCode;
    }(JQueryUI = exports.JQueryUI || (exports.JQueryUI = {}));
});

define("Controls/ControlCommonJQ", [ "require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert" ], function(require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    !function(ControlCommon) {
        var Code = function() {
            function Code() {}
            Code.AttachClick = function() {
                jQuery("#control-common-execute").on("click", function() {
                    Code.DestroyResizable();
                    Code.Execute();
                });
            };
            Code.Execute = function() {
                window.setTimeout(function() {
                    impOn.On.Code.Execute();
                    new impJqteOnInsert.OnInsert.Code().Init();
                    impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                    impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                    jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                    jQuery(".column").each(function() {
                        if (0 == jQuery(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length) {
                            jQuery(this).addClass("empty");
                            0 == jQuery(this).find(".empty-drop-element").length && jQuery(this).append("<div class='image-text-other empty-drop-element' ></div>");
                        } else {
                            jQuery(this).removeClass("empty");
                            jQuery(this).find(".empty-drop-element").remove();
                        }
                    });
                    jQuery(".image-text-other, .empty-container-empty").each(function(index, _this) {
                        var $this = jQuery(_this), bottom = $this.offset().top + $this.height(), top = $this.offset().top, left = $this.offset().left;
                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);
                    });
                    impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
                    jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                    jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                    jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                }, 10);
            };
            Code.DestroyResizable = function() {
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left");
            };
            Code.AnchorClicked = !1;
            return Code;
        }();
        ControlCommon.Code = Code;
    }(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});

define("UndoManager/UndoManager", [ "require", "exports", "../Controls/ControlCommonJQ", "../Preview/Preview", "../Watch/WatchMouseJQ", "../MalFormed/MalFormedJQ", "../jqte/OnInsert" ], function(require, exports, impControlsCommon, impPreview, impWatch, impmal, impOnInsert) {
    "use strict";
    window.undoActivityIndex = 999999;
    var Manager;
    !function(Manager) {
        var UndoManager = function() {
            function UndoManager() {
                this.isEnabled = !0;
                this.isUndoHit = !1;
                this.isRedoHit = !1;
            }
            UndoManager.prototype.EnableUndoManager = function(isEnable) {
                this.isEnabled = isEnable;
            };
            UndoManager.prototype.SetSelectElement = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selectedElement) {
                    var scopeId = selectedElement.attr("scopeId");
                    impWatch.Watch.MouseJQ.selectedElement = jQuery("div[scopeId='" + scopeId + "'").first();
                }
            };
            UndoManager.prototype.Undo = function() {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed) {
                    "none" != jQuery(".close-preview").css("display") && impPreview.Preview.PreviewJQ.ClosePreview();
                    var undoObj;
                    if (!(window.undoActivityIndex <= 0)) {
                        if (999999 == window.undoActivityIndex) {
                            if (void 0 != window.undoObjArray) {
                                window.undoActivityIndex = window.undoObjArray.length - 2;
                                undoObj = window.undoObjArray[window.undoActivityIndex];
                            }
                        } else {
                            window.undoActivityIndex--;
                            window.undoActivityIndex <= 0 && (this.isUndoHit = !0);
                            undoObj = window.undoObjArray[window.undoActivityIndex];
                        }
                        if (null != undoObj) {
                            var parent;
                            parent = jQuery(undoObj.parent);
                            jQuery("page").html(undoObj.html);
                            impControlsCommon.ControlCommon.Code.DestroyResizable();
                            impControlsCommon.ControlCommon.Code.Execute();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            this.SetSelectElement();
                        }
                    }
                }
            };
            UndoManager.prototype.Redo = function() {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed) {
                    "none" != jQuery(".close-preview").css("display") && impPreview.Preview.PreviewJQ.ClosePreview();
                    var undoObj;
                    -1 == window.undoActivityIndex && (window.undoActivityIndex = 0);
                    if (void 0 != window.undoObjArray) {
                        if (window.undoActivityIndex + 1 >= window.undoObjArray.length) return;
                        window.undoActivityIndex++;
                        undoObj = window.undoObjArray[window.undoActivityIndex];
                        if (null != undoObj) {
                            jQuery("page").html(undoObj.html);
                            impControlsCommon.ControlCommon.Code.DestroyResizable();
                            impControlsCommon.ControlCommon.Code.Execute();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            this.SetSelectElement();
                        }
                    }
                }
            };
            UndoManager.prototype.PushUndo = function(undo) {
                void 0 == window.undoObjArray && (window.undoObjArray = []);
                void 0 != undo && window.undoObjArray.push(undo);
            };
            UndoManager.prototype.PopUndo = function() {
                window.undoObjArray.pop();
            };
            UndoManager.prototype.ClearRedoOnChange = function() {};
            UndoManager.prototype.Clear = function() {};
            UndoManager.prototype.BeforeOperation = function(selectedParent) {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed && 0 == window.layoutCreating) {
                    try {
                        window.undoObjArray.splice(window.undoActivityIndex + 1);
                        window.undoActivityIndex = 999999;
                    } catch (ex) {}
                    selectedParent = jQuery("page");
                    var rootTemp;
                    rootTemp = selectedParent;
                    var undo = new UndoJQ();
                    undo.parent = rootTemp;
                    undo.html = rootTemp.html();
                    undo.Push();
                }
            };
            return UndoManager;
        }();
        Manager.UndoManager = UndoManager;
        var UndoJQ = function() {
            function UndoJQ() {}
            UndoJQ.prototype.Push = function() {
                var um = new UndoManager();
                um.PushUndo(this);
            };
            return UndoJQ;
        }();
        Manager.UndoJQ = UndoJQ;
    }(Manager = exports.Manager || (exports.Manager = {}));
});

define("Page/PageElementBaseJQ", [ "require", "exports", "../PageElements/ElementJQ", "../Error/ErrorJQ", "../Common/CommonMethodsJQ", "../_Classes/UrlJQ", "../_Classes/Auth", "../Constants/ConstantsJQ", "../UndoManager/UndoManager", "../MalFormed/MalFormedJQ" ], function(require, exports, impElements, impError, impCommon, impUrl, impAuth, impConstants, impUndoManager, impmal) {
    "use strict";
    var Page, uniqureId = 5;
    !function(Page) {
        var debug, globalColumnId, globalRowId;
        globalColumnId = 0;
        globalRowId = 0;
        debug = !0;
        var PageElementBaseJQ = function() {
            function PageElementBaseJQ(page, typeName, paramRootWrapper, extra) {
                this.scopeId = "body";
                this.typeName = typeName;
                this.rootWrapper = paramRootWrapper;
                this.cssClassName = "jq-" + this.typeName;
                this.cssBackClassName = "jq-back-" + this.typeName;
                this.cssAdditionalStylingClassName = "jq-additional-" + this.typeName;
                this.templatePath = this.typeName;
                this.templateName = this.typeName + ".html";
                this.qualifiedTemplatePath = this.templatePath + "/" + this.templateName;
            }
            PageElementBaseJQ.prototype.GenerateColumnScopeId = function() {
                return "Column_" + ++globalColumnId;
            };
            PageElementBaseJQ.prototype.GenerateRowScopeId = function() {
                return "Row_" + ++globalRowId;
            };
            PageElementBaseJQ.prototype.Log = function(msg) {
                new impError.ErrorHandle.ErrorJQ().LogMessage(this.typeName + "JQ : " + msg);
            };
            PageElementBaseJQ.prototype.GetClassName = function() {
                return this.cssClassName;
            };
            PageElementBaseJQ.prototype.GetDotClassName = function() {
                return "." + this.GetClassName();
            };
            PageElementBaseJQ.prototype.GetScope = function() {
                if (void 0 == this.scopeId || "" == this.scopeId) {
                    this.scopeId = "body";
                    return jQuery(this.scopeId);
                }
                return jQuery(this.scopeId);
            };
            PageElementBaseJQ.prototype.SetScope = function(scopeid) {
                this.scopeId = scopeid;
                return this;
            };
            PageElementBaseJQ.prototype.Get = function() {
                return jQuery(this.GetScope()).find(this.GetDotClassName());
            };
            PageElementBaseJQ.prototype.Remove = function() {
                jQuery(this.Get()).remove();
            };
            PageElementBaseJQ.prototype.GetWrapper = function() {
                return 1 == this.ProcessKey() ? "body" == this.rootWrapper.toString().toLowerCase() ? jQuery(this.rootWrapper) : jQuery(this.GetScope()).find(this.rootWrapper) : void 0;
            };
            PageElementBaseJQ.prototype.Create = function(className) {
                if (1 == this.ProcessKey()) {
                    if (0 == this.Get().length) {
                        var elements = new impElements.Page.Elements.ElementJQ();
                        this.Add(this.GetWrapper(), elements.CreateDiv("", this.GetClassName() + " " + this.cssBackClassName + " " + this.cssAdditionalStylingClassName + "  key design-row row root-elements page-element jqMargin-0 "), void 0, void 0, void 0, void 0, void 0);
                    }
                    return this;
                }
            };
            PageElementBaseJQ.prototype.CreateNotExist = function() {
                0 == this.Get().length && this.Create(void 0);
            };
            PageElementBaseJQ.prototype.AddRow = function(root, colClassNames, className, adjustRow, adjustColumn, beforeAfter) {
                if (1 == this.ProcessKey()) {
                    var row;
                    0 == this.Get().length && this.Create(void 0);
                    if (void 0 != colClassNames && colClassNames.length > 0) {
                        var cols;
                        cols = colClassNames.toString().split(" ");
                        var elements = new impElements.Page.Elements.ElementJQ();
                        row = elements.CreateDiv("", "row key jqRootRow design-row");
                        for (var commonMethods = new impCommon.Common.CommonMethodsJQ(), i = 0; i < cols.length; i++) {
                            var colClassName = "", columnSize = "";
                            if (void 0 != cols[i] && "" != commonMethods.Trim(cols[i])) {
                                colClassName = cols[i].toString().replace(/,/g, " ");
                                columnSize = colClassName.toString().replace("col-xs-", "");
                                var column, elements2 = new impElements.Page.Elements.ElementJQ(), columnCss = colClassName + " " + className + " column key design-column column-number-" + i, contentClassName = "", contentCssClass = "";
                                if ("Content" == this.typeName || jQuery(root).hasClass("jq-Content")) {
                                    contentCssClass = "";
                                    0 == i ? contentCssClass = "SideBarLeft" : 1 == i ? contentCssClass = "MiddleContent" : 2 == i && (contentCssClass = "SideBarRight");
                                    contentClassName = "jq-" + contentCssClass + " jq-back-" + contentCssClass + " jq-additional-" + contentCssClass;
                                }
                                column = elements2.CreateDiv("", columnCss + " " + contentClassName);
                                var columnScopeId = this.GenerateColumnScopeId();
                                1 == debug && void 0 != column && column.append("<span class='debug-column-css debug-css' scopeId='" + columnScopeId + "'> " + columnScopeId + " </span> ");
                                column.attr("scopeId", columnScopeId);
                                column.attr("column-number", i);
                                column.attr("xs-column-size", columnSize);
                                column.css("min-height", "100px");
                                column.addClass("column-padding");
                                "" != contentClassName ? column.attr("key-css", ".jq-" + contentClassName) : void 0 != root ? column.attr("key-css", jQuery(root).attr("key-css") + " column") : column.attr("key-css", this.GetDotClassName() + " column");
                                void 0 != root ? row.attr("key-css", jQuery(root).attr("key-css") + " row") : row.attr("key-css", this.GetDotClassName() + " row");
                                jQuery(row).append(column);
                                void 0 != adjustColumn && this.AdjustElement(column, adjustColumn);
                            }
                        }
                    }
                    var rowScopeId = this.GenerateRowScopeId();
                    row.attr("scopeId", rowScopeId);
                    var nextPlus = "<div class='jq-row-plus-container jq-next-row-container'> <span class='jq-row-plus jq-next-row'> + </span> </div>", prevPlus = "<div class='jq-row-plus-container jq-prev-row-container'> <span class='jq-row-plus jq-prev-row'> + </span> </div>";
                    if (void 0 != row) {
                        row.prepend(prevPlus);
                        row.append(nextPlus);
                    }
                    void 0 != adjustRow && this.AdjustElement(row, adjustRow);
                    void 0 == root && (root = this.Get());
                    jQuery(row).prepend("<span title='Row' class=\"design-page-row \"> <span class='design-square-row'>Row</span> <span class='columns-add-text'>Columns <button class='jq-add-column btn btn-xs btn-danger'>+</button></span> </span>");
                    this.Add(root, row, void 0, void 0, void 0, void 0, beforeAfter);
                    if ((root.hasClass("empty-container-image") || root.hasClass("empty-container-text")) && !row.hasClass("row")) {
                        row.wrap("<div class='table-row'></div>");
                        row.before("<div class='table-cell'></div>");
                        row.addClass("table-cell");
                        return row.parent();
                    }
                    return row;
                }
            };
            PageElementBaseJQ.prototype.AdjustElement = function(element, adjust) {
                if (1 == this.ProcessKey() && void 0 != element && void 0 != adjust) {
                    void 0 != adjust.height && jQuery(element).css("min-height", adjust.height + "px");
                    void 0 != adjust.width && jQuery(element).css("width", adjust.width + "px");
                    if (void 0 != adjust.padding) {
                        var padding = adjust.padding;
                        if (void 0 != padding.all) jQuery(element).css("padding", padding.all + "px"); else {
                            void 0 != padding.left && jQuery(element).css("padding-left", padding.left + "px");
                            void 0 != padding.top && jQuery(element).css("padding-top", padding.top + "px");
                            void 0 != padding.right && jQuery(element).css("padding-right", padding.right + "px");
                            void 0 != padding.bottom && jQuery(element).css("padding-bottom", padding.bottom + "px");
                        }
                    }
                    if (void 0 != adjust.margin) {
                        var margin = adjust.margin;
                        if (void 0 != margin.all) jQuery(element).css("margin", margin.all + "px"); else {
                            void 0 != margin.left && jQuery(element).css("margin-left", margin.left + "px");
                            void 0 != margin.top && jQuery(element).css("margin-top", margin.top + "px");
                            void 0 != margin.right && jQuery(element).css("margin-right", margin.right + "px");
                            void 0 != margin.bottom && jQuery(element).css("margin-bottom", margin.bottom + "px");
                        }
                    }
                }
            };
            PageElementBaseJQ.prototype.Add = function(root, element, className, rowcolumn, front, useSmartObj, beforeAfter) {
                if (1 != impmal.MalFormed.MalFormedJQ.IsMalFormed && 1 == this.ProcessKey()) {
                    void 0 != element && element.find(".debug-css").html("");
                    var row = 0, column = 0;
                    void 0 == root && (root = this.Get());
                    if (void 0 != rowcolumn) {
                        if ("" != rowcolumn) {
                            var rowcolumNumber = rowcolumn.toString().split(" ");
                            try {
                                var tempForTry = Number(rowcolumNumber[0]);
                                tempForTry = Number(rowcolumNumber[1]);
                            } catch (ex) {
                                this.Log("Add(): Row or Column is not a number : provided values (" + rowcolumn + ")");
                                return;
                            }
                            if (void 0 != rowcolumNumber && rowcolumNumber.length > 1) {
                                row = Number(rowcolumNumber[0]) + 1;
                                column = Number(rowcolumNumber[1]);
                            }
                        }
                        if (!(jQuery(root).find(".jqRootRow:nth-child(" + row + ")").children().eq(column).length > 0)) {
                            this.Log(" Add() : [" + jQuery(root).attr("class") + "] do not have row column [" + row + "," + column + "] to add element");
                            return;
                        }
                        root = jQuery(root).find(".jqRootRow:nth-child(" + row + ")").children().eq(column);
                    } else this.Log("Warning : Please Add Row to  [" + jQuery(root).attr("class") + "] ");
                    if (void 0 != element) {
                        if ("object" != typeof element) {
                            var tempElement = document.createElement("span");
                            jQuery(tempElement).append(element);
                            element = jQuery(tempElement);
                        }
                        jQuery(element).addClass(className);
                    }
                    element.attr("class");
                    if (1 == useSmartObj && null != window.smartObj && null != window.smartObj.currentObj && "" != window.smartObj.command) if ("n" == window.smartObj.command || "" == window.smartObj.command) {
                        $(window.smartObj.currentObj).after(element);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    } else {
                        $(window.smartObj.currentObj).before(element);
                        var undomanager = new impUndoManager.Manager.UndoManager();
                        undomanager.BeforeOperation();
                    } else if (1 == front) jQuery("div[src='xa.xml']").length > 2 && 1 == impAuth.Auth.AuthJQ.IsAuth && $(root).prepend(element); else if (jQuery("div[src='xa.xml']").length > 2 && 1 == impAuth.Auth.AuthJQ.IsAuth) {
                        if (void 0 == jQuery(root).attr("unique-id")) {
                            uniqureId++;
                            jQuery(root).attr("unique-id", uniqureId);
                        }
                        void 0 == beforeAfter ? $(root).append(element) : 1 == beforeAfter ? $(root).before(element) : $(root).after(element);
                        if (jQuery(element).hasClass("jq-Any")) {
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        } else {
                            var undomanager = new impUndoManager.Manager.UndoManager();
                            undomanager.BeforeOperation();
                        }
                    }
                }
            };
            PageElementBaseJQ.prototype.AddContent = function(content, className, rowcolumn, front) {
                this.CreateNotExist();
                void 0 != content && "" != content && this.Add(this.Get(), content, className, rowcolumn, front, void 0, void 0);
            };
            PageElementBaseJQ.prototype.AddTemplate = function(root, template, className, rowcolumn) {
                if (void 0 != root) {
                    (void 0 == template || "" == template) && (template = this.qualifiedTemplatePath);
                    template.indexOf(".html") > 0 ? this.Add(jQuery(root), jQuery('<div class="' + className + '" ng-include="\'/static/' + template + "'\"></div>"), className, rowcolumn, !1, void 0, void 0) : this.Add(jQuery(root), jQuery('<div class="' + className + '" ng-include="\'' + template + "'\"></div>"), className, rowcolumn, !1, void 0, void 0);
                } else new impError.ErrorHandle.ErrorJQ().LogMessage(" AddTemlate() > root is undefined");
            };
            PageElementBaseJQ.prototype.RemoveColumn = function(rowNumber, columnNumber) {
                var row = jQuery(this.Get()).find(".jqRootRow:nth-child(" + rowNumber + ")");
                jQuery(row).length > 0 ? jQuery(jQuery(row).children().eq(columnNumber)).remove() : this.Log("[" + rowNumber + "," + columnNumber + "] column not found");
            };
            PageElementBaseJQ.prototype.GetRow = function(rowNumber) {
                var row = jQuery(this.Get()).find(".jqRootRow:nth-child(" + rowNumber + ")");
                if (jQuery(row).length > 0) return jQuery(row);
                this.Log("[" + rowNumber + "] row not found");
            };
            PageElementBaseJQ.prototype.GetColumn = function(rowNumber, columnNumber) {
                rowNumber += 1;
                var row = jQuery(this.Get()).find(".jqRootRow:nth-child(" + rowNumber + ")");
                if (jQuery(row).length > 0) return jQuery(row).children().eq(columnNumber);
                this.Log("[" + rowNumber + "," + columnNumber + "] column not found");
            };
            PageElementBaseJQ.prototype.ProcessKey = function() {
                try {
                    var str = this.GetKey();
                    if (1 == this.IsInIframe()) return !1;
                    if (7 != impConstants.Constants.ConstantsJQ.SecureStrLength) return !1;
                    for (var j = 0, i = 6; i >= 0; i--) {
                        if (this.NextChar(str[j]) != impConstants.Constants.ConstantsJQ.Str[i]) return !1;
                        j++;
                    }
                    return !0;
                } catch (ex) {
                    return !1;
                }
            };
            PageElementBaseJQ.prototype.GetKey = function() {
                return new impUrl.Common.UrlJQ().GetDocumentLocation();
            };
            PageElementBaseJQ.prototype.IsInIframe = function() {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return !0;
                }
            };
            PageElementBaseJQ.prototype.NextChar = function(c) {
                return String.fromCharCode(c.charCodeAt(0) + 1);
            };
            return PageElementBaseJQ;
        }();
        Page.PageElementBaseJQ = PageElementBaseJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Page/HeaderJQ", [ "require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var HeaderJQ = function(_super) {
            function HeaderJQ(extra, typeName) {
                void 0 != typeName || (typeName = "Header");
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            __extends(HeaderJQ, _super);
            return HeaderJQ;
        }(impPage.Page.PageElementBaseJQ);
        Page.HeaderJQ = HeaderJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Page/MenuBarJQ", [ "require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var MenuBarJQ = function(_super) {
            function MenuBarJQ(extra, typeName) {
                void 0 != typeName || (typeName = "MenuBar");
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            __extends(MenuBarJQ, _super);
            return MenuBarJQ;
        }(impPage.Page.PageElementBaseJQ);
        Page.MenuBarJQ = MenuBarJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Page/ContentJQ", [ "require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var ContentJQ = function(_super) {
            function ContentJQ(extra, typeName) {
                void 0 != typeName || (typeName = "Content");
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            __extends(ContentJQ, _super);
            return ContentJQ;
        }(impPage.Page.PageElementBaseJQ);
        Page.ContentJQ = ContentJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Page/FooterJQ", [ "require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var FooterJQ = function(_super) {
            function FooterJQ(extra, typeName) {
                void 0 != typeName || (typeName = "Footer");
                _super.call(this, null, typeName, impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            __extends(FooterJQ, _super);
            return FooterJQ;
        }(impPage.Page.PageElementBaseJQ);
        Page.FooterJQ = FooterJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

var __extends = this && this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define("Page/AnyJQ", [ "require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var AnyJQ = function(_super) {
            function AnyJQ(extra) {
                _super.call(this, null, "Any", impConsts.Constants.ConstantsJQ.PAGEROOT, null);
            }
            __extends(AnyJQ, _super);
            return AnyJQ;
        }(impPage.Page.PageElementBaseJQ);
        Page.AnyJQ = AnyJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

define("Page/PageJQ", [ "require", "exports", "./HeaderJQ", "./MenuBarJQ", "./ContentJQ", "./FooterJQ", "./AnyJQ", "../Menu/MenuTemplateJQ" ], function(require, exports, impHeader, impMenuBar, impContent, impFooter, impAny, impMenuTemplate) {
    "use strict";
    var Page;
    !function(Page) {
        var PageJQ = function() {
            function PageJQ(configuration) {
                this.pageConfiguration = configuration;
                this.Header = new impHeader.Page.HeaderJQ(null);
                this.MenuBar = new impMenuBar.Page.MenuBarJQ(null);
                this.MenuTemplate = new impMenuTemplate.Page.Menu.MenuTemplateJQ();
                this.Content = new impContent.Page.ContentJQ(null);
                this.Footer = new impFooter.Page.FooterJQ(null);
                this.Any = new impAny.Page.AnyJQ(null);
            }
            return PageJQ;
        }();
        Page.PageJQ = PageJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

define("Page/Context/ContextJQ", [ "require", "exports", "../PageJQ", "../../Constants/ConstantsJQ" ], function(require, exports, impPage, impConsts) {
    "use strict";
    var Page;
    !function(Page) {
        var ContextJQ = function() {
            function ContextJQ() {
                this.Page = new impPage.Page.PageJQ(null);
                this.Constants = new impConsts.Constants.ConstantsJQ();
            }
            return ContextJQ;
        }();
        Page.ContextJQ = ContextJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

define("ContextMenu/ContextMenuJQ", [ "require", "exports", "../Watch/WatchMouseJQ", "../Controls/ControlsJQ", "../Watch/CopyPasteJQ", "../Controls/ImageJQ", "../Controls/BorderJQ", "../Controls/ColorJQ", "../Controls/TextJQ", "../SmartMenu/SmartMenuJQ", "../Controls/Menujq", "../Controls/BIjq", "../Controls/SpacerJQ", "../Controls/LinkJQ", "../Controls/HtmlJQ", "../Controls/MarginJQ", "../Controls/PaddingJQ", "../Controls/FrontBackJQ", "../Controls/OpacityJQ", "../Controls/BorderShadow" ], function(require, exports, impWatch, impAddRowControl, impCopy, impInsertImage, impBorder, impColor, impText, impHeightWidth, impMenuControl, impBi, impSpacer, impLink, impHtml, impMargin, impPadding, impFrontBack, impOpacity, impBorderShadow) {
    "use strict";
    var ContextMenu, G_isAttachedContextMenu = !1, CTX_MENU_DISABLED_CLASS = "ctx-menu-disabled", ctxMenuIsReady = !1;
    !function(ContextMenu) {
        var ContextMenuJQ = function() {
            function ContextMenuJQ(extra) {
                this.controlId = "#contextMenu";
            }
            ContextMenuJQ.prototype.Init = function() {
                this.MainEvents();
            };
            ContextMenuJQ.ContextMenuBinding = function() {
                jQuery(document).on("click", function(e) {
                    var contextMenu = new ContextMenuJQ();
                    contextMenu.DetectContextMenu();
                });
                jQuery(document).bind("contextmenu", function(e) {
                    impWatch.Watch.MouseJQ.ProcessClick(e);
                    window.setTimeout(function() {
                        try {
                            impWatch.Watch.MouseJQ.nearestElement = jQuery("#nononononelement");
                            var x = e.clientX, y = e.clientY + $(document).scrollTop();
                            jQuery(".nearest-element").removeClass("nearest-element");
                            var column = impWatch.Watch.MouseJQ.selectedElement;
                            impWatch.Watch.MouseJQ.selectedElement.hasClass("image-text-other") && (column = impWatch.Watch.MouseJQ.selectedElement.closest(".column"));
                            if (column.hasClass("column")) {
                                var $elements = impWatch.Watch.MouseJQ.selectedElement.find(".image-text-other"), nearestLeftArray = [], nearestTopArray = [];
                                if ($elements.length > 0) {
                                    $elements.each(function(index, _this) {
                                        var $this = $(_this), top = parseFloat($this.attr("top")), bottom = parseFloat($this.attr("bottom")), left = parseFloat($this.attr("left"));
                                        if (y >= top && bottom >= y && x >= left) {
                                            nearestLeftArray.push(left);
                                            nearestTopArray.push(top);
                                        }
                                    });
                                    var nearestLeft = 0, nearestTop = 0;
                                    nearestLeftArray.length > 0 && (nearestLeft = Math.max.apply(Math, nearestLeftArray));
                                    nearestTopArray.length > 0 && (nearestTop = Math.max.apply(Math, nearestTopArray));
                                    column.find(".image-text-other[left='" + nearestLeft + "'][top='" + nearestTop + "']").addClass("nearest-element");
                                    impWatch.Watch.MouseJQ.nearestElement = jQuery(".nearest-element").first();
                                }
                            }
                        } catch (ex) {}
                    }, 5);
                    e.preventDefault();
                    var contextMenu = new ContextMenuJQ();
                    contextMenu.DetectContextMenu();
                    var pageY = e.clientY;
                    pageY >= 350 && (pageY -= jQuery("#contextMenu").height());
                    var pageX = e.clientX;
                    pageX > jQuery(document).width() - 200 && (pageX -= 150);
                    jQuery(contextMenu.controlId).css("left", pageX + "px");
                    jQuery(contextMenu.controlId).css("top", pageY + "px");
                    jQuery(contextMenu.controlId).fadeIn(500);
                    e.cancelBubble = !1;
                });
            };
            ContextMenuJQ.prototype.DetectContextMenu = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                if (void 0 != selectedElement) {
                    jQuery(".ctx-menu-add-row").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-cut").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-copy").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-paste").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-text").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-image").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-youtube").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-html").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-css").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-menu").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-empty-space").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-link").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-insert-object").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    jQuery(".ctx-menu-delete-element").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    selectedElement.hasClass("root-elements") && jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    if (selectedElement.hasClass("jqRootRow")) {
                        jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("column")) {
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("image-text-other")) {
                        jQuery(".ctx-menu-cut").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-copy").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-paste").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-insert-image").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-delete-element").parent().removeClass(CTX_MENU_DISABLED_CLASS);
                    }
                    if (selectedElement.hasClass("page")) {
                        jQuery(".ctx-menu-add-row").parent().addClass(CTX_MENU_DISABLED_CLASS);
                        jQuery(".ctx-menu-height-width").parent().addClass(CTX_MENU_DISABLED_CLASS);
                    }
                }
            };
            ContextMenuJQ.AttachDeleteElement = function() {
                jQuery(".li.ctx-menu-delete-element").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.DeleteElement();
                });
            };
            ContextMenuJQ.AttachInsertLinkContainer = function() {
                jQuery(".li.ctx-menu-insert-link-container").on("click", function() {
                    window.smartObj = null;
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || impCopy.CopyPaste.CopyPasteJQ.CreateLinkContainer();
                });
            };
            ContextMenuJQ.AttachInsertLink = function() {
                new impLink.Link.LinkJQ().Init();
                jQuery(".ctx-menu-insert-link").on("click", function() {
                    window.smartObj = null;
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowControlInsertLink();
                        impLink.Link.LinkJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachInsertHTML = function() {
                new impHtml.Html.HtmlJQ().Init();
                jQuery(".ctx-menu-insert-html").on("click", function() {
                    window.smartObj = null;
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.ShowControlInsertHTML();
                });
            };
            ContextMenuJQ.AttachInsertText = function() {
                jQuery(".li.smart-menu-insert-text").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".li.ctx-menu-insert-text").on("click", function() {
                    window.smartObj = null;
                    impText.Text.TextJQ.InsertTextBlock("Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-normal-text").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock(" Sample text to edit");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-1").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h1> Heading1 to edit</h1>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-2").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h2> Heading2 to edit</h2>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-3").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h3> Heading3 to edit</h3>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-4").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h4> Heading4 to edit</h4>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
                jQuery(".tool-heading-5").on("click", function() {
                    impText.Text.TextJQ.InsertTextBlock("<h5> Heading5 to edit</h5>");
                    impText.Text.TextJQ.ProcessSelectNotify();
                });
            };
            ContextMenuJQ.AttachControlPageClose = function() {
                jQuery(".control-templates").find(".close-button").on("click", function() {
                    jQuery(".control-page").removeClass("control-active");
                    ContextMenuJQ.ShowProperties();
                });
                jQuery(".control-page").find(".close-button").on("click", function() {
                    jQuery(".control-page").removeClass("control-active");
                    ContextMenuJQ.ShowProperties();
                    jQuery(".internet-bi-image-url").val("");
                    jQuery(".internet-image-url").val("");
                });
            };
            ContextMenuJQ.ShowProperties = function() {
                jQuery(".jq-properties-all").hasClass("forced-hide") || jQuery(".jq-properties-all").show();
            };
            ContextMenuJQ.ControlPageHide = function() {
                jQuery(".control-page").hide();
                jQuery(".control-page").attr("style", "");
                jQuery(".control-page").css("display", "none");
                jQuery(".control-page").removeClass("control-active");
                if ("block" == jQuery(".jq-properties-all").css("display")) {
                    jQuery(".jq-properties-all").addClass("normal-hide");
                    jQuery(".jq-properties-all").hide();
                } else jQuery(".jq-properties-all").hasClass("forced-hide") || jQuery(".jq-properties-all").show();
            };
            ContextMenuJQ.ShowControlInsertLink = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-link").addClass("control-active");
                impLink.Link.LinkJQ.Show();
            };
            ContextMenuJQ.ShowControlInsertHTML = function() {
                ContextMenuJQ.ControlPageHide();
                impHtml.Html.HtmlJQ.Show();
            };
            ContextMenuJQ.ShowControlInsertText = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".editor").show();
                jQuery(".jqte-editor, .column").removeClass("current-editor-scope");
                jQuery(this).find(".jqte-editor").addClass("current-editor-scope");
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-insert-text").addClass("control-active");
                jQuery("#control-insert-text").show();
                jQuery("#control-insert-text").trigger("cust_loaded");
            };
            ContextMenuJQ.ShowControlAddRow = function() {
                ContextMenuJQ.ControlPageHide();
                var controlId = impAddRowControl.Page.AddRowJQ.pageId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(controlId).show();
                jQuery(controlId).trigger("cust_loaded");
            };
            ContextMenuJQ.ShowMenu = function() {
                new impMenuControl.Menu.MenuJQ().Init();
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery(".control-menu").addClass("control-active");
                jQuery(".control-menu").show();
                impMenuControl.Menu.MenuJQ.ProcessShow();
            };
            ContextMenuJQ.InsertImage = function() {
                ContextMenuJQ.ControlPageHide();
                var controlId = impInsertImage.Image.SelfJQ.controlId;
                jQuery(".control-page").removeClass("control-active");
                jQuery(controlId).addClass("control-active");
                jQuery(".action-button-insert-image").show();
                jQuery(".action-button-change-image").hide();
                jQuery(controlId).show();
                jQuery(controlId).trigger("custom_loaded");
            };
            ContextMenuJQ.CopyElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Copy();
            };
            ContextMenuJQ.DeleteElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Delete();
            };
            ContextMenuJQ.CutElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Cut();
            };
            ContextMenuJQ.PasteElement = function() {
                impCopy.CopyPaste.CopyPasteJQ.Paste();
            };
            ContextMenuJQ.PasteClipBorad = function() {
                jQuery(".jq-clipboard").html("");
                jQuery("#control-insert-clipboard").show();
            };
            ContextMenuJQ.ShowControlHeightWidth = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-height-width").addClass("control-active");
                jQuery("#control-height-width").show();
            };
            ContextMenuJQ.ShowBorderControl = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border").addClass("control-active");
                jQuery("#control-border").show();
            };
            ContextMenuJQ.ShowMarginControl = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-margin").addClass("control-active");
                jQuery("#control-margin").show();
            };
            ContextMenuJQ.ShowPaddingControl = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-padding").addClass("control-active");
                jQuery("#control-padding").show();
            };
            ContextMenuJQ.ShowOpacity = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-opacity").addClass("control-active");
                jQuery("#control-opacity").show();
            };
            ContextMenuJQ.ShowZindex = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-zindex").addClass("control-active");
                jQuery("#control-zindex").show();
            };
            ContextMenuJQ.ShowBS = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-border-shadow").addClass("control-active");
                jQuery("#control-border-shadow").show();
            };
            ContextMenuJQ.ShowColor = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-color").addClass("control-active");
                jQuery("#control-color").show();
            };
            ContextMenuJQ.ShowBackgroundImage = function() {
                ContextMenuJQ.ControlPageHide();
                jQuery(".control-page").removeClass("control-active");
                jQuery("#control-bi").addClass("control-active");
                jQuery("#control-bi").show();
            };
            ContextMenuJQ.AttachAddRow = function() {
                jQuery(".li.ctx-menu-add-row").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowControlAddRow();
                        impAddRowControl.Page.AddRowJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachHeightWidth = function() {
                jQuery(".li.ctx-menu-height-width").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowControlHeightWidth();
                        impHeightWidth.Smart.SmartMenuJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachBorder = function() {
                new impBorder.Border.BorderJQ().Init();
                jQuery(".li.ctx-menu-border").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowBorderControl();
                        impBorder.Border.BorderJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachMargin = function() {
                new impMargin.Margin.MarginJQ().Init();
                jQuery(".li.ctx-menu-margin").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowMarginControl();
                        impMargin.Margin.MarginJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachPadding = function() {
                new impPadding.Padding.PaddingJQ().Init();
                jQuery(".li.ctx-menu-padding").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowPaddingControl();
                        impPadding.Padding.PaddingJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachOpacity = function() {
                new impOpacity.Opacity.OpacityJQ().Init();
                jQuery(".li.ctx-menu-opacity").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowOpacity();
                        impOpacity.Opacity.OpacityJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachZindex = function() {
                new impFrontBack.FrontBack.FrontBackJQ().Init();
                jQuery(".li.ctx-menu-z-index").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowZindex();
                        impFrontBack.FrontBack.FrontBackJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachBorderShadow = function() {
                new impBorderShadow.BorderShadow.BorderShadowJQ().Init();
                jQuery(".li.ctx-menu-border-shadow").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowBS();
                        impBorderShadow.BorderShadow.BorderShadowJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachCopy = function() {
                jQuery(".li.ctx-menu-copy").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.CopyElement();
                });
            };
            ContextMenuJQ.AttachCut = function() {
                jQuery(".li.ctx-menu-cut").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.CutElement();
                });
            };
            ContextMenuJQ.AttachPaste = function() {
                jQuery(".li.ctx-menu-paste").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.PasteElement();
                });
            };
            ContextMenuJQ.AttachPasteClipBorad = function() {
                jQuery(".li.ctx-menu-paste-clipborad").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || ContextMenuJQ.PasteClipBorad();
                });
            };
            ContextMenuJQ.AttachSpacer = function() {
                jQuery(".smart-menu-insert-empty-space").on("click", function() {
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
                jQuery(".ctx-menu-insert-empty-space").on("click", function() {
                    window.smartObj = null;
                    jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS) || impSpacer.Spacer.SpacerJQ.InsertSpacer();
                });
            };
            ContextMenuJQ.AttachInsertImage = function() {
                new impInsertImage.Image.SelfJQ().Init();
                jQuery(".li.smart-menu-insert-image").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.InsertImage();
                        impInsertImage.Image.SelfJQ.ProcessSelectNotify();
                    }
                });
                jQuery(".li.ctx-menu-insert-image").on("click", function() {
                    window.smartObj = null;
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.InsertImage();
                        impInsertImage.Image.SelfJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachBackgroundImage = function() {
                new impBi.BI.BIJQ().Init();
                jQuery(".li.ctx-menu-background-image").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowBackgroundImage();
                        impBi.BI.BIJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachInsertMenu = function() {
                jQuery(".li.ctx-menu-insert-menu").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowMenu();
                        impMenuControl.Menu.MenuJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.AttachColor = function() {
                new impColor.Color.ColorJQ().Init();
                jQuery(".li.ctx-menu-color").on("click", function() {
                    if (!jQuery(this).parent().hasClass(CTX_MENU_DISABLED_CLASS)) {
                        ContextMenuJQ.ShowColor();
                        impColor.Color.ColorJQ.ProcessSelectNotify();
                    }
                });
            };
            ContextMenuJQ.ContextInnerMenuShowHide = function() {
                jQuery("#contextMenuitems").find(".li").on("mouseenter", function(e) {
                    var left = 147;
                    e.pageX > $(document).width() - 200 && (left = -150);
                    jQuery(this).parent().find(".innerListContainer").first().css("left", left + "px");
                    jQuery(this).parent().find(".innerListContainer").first().css("display", "block");
                });
                jQuery("#contextMenuitems").find("li").on("mouseleave", function(e) {
                    jQuery(this).find(".innerListContainer").first().css("display", "none");
                });
            };
            ContextMenuJQ.LiClick = function() {
                jQuery("#contextMenuitems > li").on("click", function() {});
            };
            ContextMenuJQ.prototype.MainEvents = function() {
                jQuery(document).ready(function() {
                    if (0 == ctxMenuIsReady) {
                        ctxMenuIsReady = !0;
                        jQuery(document).on("click", function() {
                            jQuery("#contextMenu").hide(500);
                            jQuery("#smInsertNextPrev").hide(500);
                        });
                        if (0 == G_isAttachedContextMenu) {
                            G_isAttachedContextMenu = !0;
                            ContextMenuJQ.ContextMenuBinding();
                            ContextMenuJQ.LiClick();
                            ContextMenuJQ.ContextInnerMenuShowHide();
                            ContextMenuJQ.AttachInsertLinkContainer();
                            ContextMenuJQ.AttachInsertLink();
                            ContextMenuJQ.AttachInsertHTML();
                            ContextMenuJQ.AttachInsertText();
                            ContextMenuJQ.AttachAddRow();
                            ContextMenuJQ.AttachDeleteElement();
                            ContextMenuJQ.AttachHeightWidth();
                            ContextMenuJQ.AttachCopy();
                            ContextMenuJQ.AttachPaste();
                            ContextMenuJQ.AttachPasteClipBorad();
                            ContextMenuJQ.AttachCut();
                            ContextMenuJQ.AttachInsertImage();
                            ContextMenuJQ.AttachSpacer();
                            ContextMenuJQ.AttachBorder();
                            ContextMenuJQ.AttachMargin();
                            ContextMenuJQ.AttachZindex();
                            ContextMenuJQ.AttachBorderShadow();
                            ContextMenuJQ.AttachOpacity();
                            ContextMenuJQ.AttachPadding();
                            ContextMenuJQ.AttachColor();
                            ContextMenuJQ.AttachInsertMenu();
                            ContextMenuJQ.AttachBackgroundImage();
                            ContextMenuJQ.AttachControlPageClose();
                        }
                    }
                });
            };
            return ContextMenuJQ;
        }();
        ContextMenu.ContextMenuJQ = ContextMenuJQ;
    }(ContextMenu = exports.ContextMenu || (exports.ContextMenu = {}));
});

define("_Classes/LoadingJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Loading;
    !function(Loading) {
        var LoadingJQ = function() {
            function LoadingJQ(controlId) {
                this.src = "/content/loading/colors.gif";
                this.controlId = controlId;
                this.Create();
            }
            LoadingJQ.prototype.Create = function() {
                var loading = jQuery(".loading.clonable").clone();
                loading.removeClass("clonable");
                loading.addClass("new");
                loading.removeClass("hide");
                loading.find("img").first().attr("src", this.src);
                jQuery(this.controlId).find(".loading.new").remove();
                jQuery(this.controlId).append(loading);
            };
            LoadingJQ.prototype.Init = function() {
                this.Show();
            };
            LoadingJQ.prototype.IsExist = function() {
                return jQuery(this.controlId).find(".loading.new").length > 0 ? !0 : !1;
            };
            LoadingJQ.prototype.Show = function() {
                if (this.IsExist()) jQuery(this.controlId).find(".loading.new").first().show(); else {
                    this.Create();
                    jQuery(this.controlId).find(".loading.new").first().show();
                }
            };
            LoadingJQ.prototype.Hide = function() {
                jQuery(this.controlId).find(".loading.new").first().hide();
            };
            return LoadingJQ;
        }();
        Loading.LoadingJQ = LoadingJQ;
    }(Loading = exports.Loading || (exports.Loading = {}));
});

define("controls/controlcommonjq", [ "require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert" ], function(require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    !function(ControlCommon) {
        var Code = function() {
            function Code() {}
            Code.AttachClick = function() {
                jQuery("#control-common-execute").on("click", function() {
                    Code.DestroyResizable();
                    Code.Execute();
                });
            };
            Code.Execute = function() {
                window.setTimeout(function() {
                    impOn.On.Code.Execute();
                    new impJqteOnInsert.OnInsert.Code().Init();
                    impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                    impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                    jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                    jQuery(".column").each(function() {
                        if (0 == jQuery(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length) {
                            jQuery(this).addClass("empty");
                            0 == jQuery(this).find(".empty-drop-element").length && jQuery(this).append("<div class='image-text-other empty-drop-element' ></div>");
                        } else {
                            jQuery(this).removeClass("empty");
                            jQuery(this).find(".empty-drop-element").remove();
                        }
                    });
                    jQuery(".image-text-other, .empty-container-empty").each(function(index, _this) {
                        var $this = jQuery(_this), bottom = $this.offset().top + $this.height(), top = $this.offset().top, left = $this.offset().left;
                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);
                    });
                    impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
                    jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                    jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                    jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                }, 10);
            };
            Code.DestroyResizable = function() {
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left");
            };
            Code.AnchorClicked = !1;
            return Code;
        }();
        ControlCommon.Code = Code;
    }(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});

define("Themes/EmptyLayout/EmptyLayoutJQ", [ "require", "exports", "../../Page/HeaderJQ", "../../Page/MenuBarJQ", "../../Page/ContentJQ", "../../Page/FooterJQ", "../../_Classes/CssClass", "../../_Classes/LoadingJQ", "../../page/anyjq", "../../Error/ErrorJQ", "../../UndoManager/UndoManager", "../../Preview/Preview", "../../ContextMenu/ContextMenuJQ", "../../controls/controlcommonjq" ], function(require, exports, impHeader, impMenuBar, impBody, impFooter, impCss, impLoading, impAny, impError, impUndoManager, impPreview, impCtxMenu, impControlCommon) {
    "use strict";
    window.layoutCreating = !0;
    var Themes;
    !function(Themes) {
        var Empty;
        !function(Empty) {
            var LayoutJQ = function() {
                function LayoutJQ() {
                    this.controlId = "#control-templates";
                    window.layoutCreating = !0;
                    LayoutJQ.loading = new impLoading.Loading.LoadingJQ(this.controlId);
                    LayoutJQ.loading.Init();
                }
                LayoutJQ.prototype.Init = function() {
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
                    } catch (ex) {}
                    window.layoutCreating = !1;
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                };
                LayoutJQ.prototype.Attach = function() {
                    jQuery(".empty-layout").on("click", function() {
                        jQuery(".empty-layout").removeClass("empty-layout-select");
                        jQuery(this).addClass("empty-layout-select");
                    });
                    jQuery(".create-layout-show-button").on("click", function() {
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
                    jQuery(".control-templates .close-button").click(function() {
                        (void 0 == jQuery(".empty-layout-select").attr("layout-id") || "" == jQuery(".empty-layout-select").attr("layout-id")) && LayoutJQ.CreateLayout("0", this);
                        jQuery(".column").removeClass("column-layout-border-yellow");
                        jQuery(".column").removeClass("column-layout-border-brown");
                    });
                    jQuery(".action-button-layout-create").on("click", function() {
                        LayoutJQ.CreateLayout(void 0, this);
                    });
                };
                LayoutJQ.CreateLayout = function(layoutId, $this) {
                    void 0 == layoutId && (layoutId = jQuery(".empty-layout-select").attr("layout-id"));
                    var errorHandler = new impError.ErrorHandle.ErrorJQ();
                    if (void 0 != layoutId) {
                        var layout = void 0;
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
                        }
                        if (void 0 != layout) {
                            var anyJQ = new impAny.Page.AnyJQ(""), staticElement = '<span title class="page-static-element-circle design-root-elements-static"> </span>';
                            jQuery("page .root-elements").html("");
                            anyJQ.AddRow(jQuery(".jq-Header"), layout.header.cols, "layout-column", void 0, void 0);
                            var newStaticElementWithTitle = staticElement.replace("title", "title='Header'");
                            jQuery(".jq-Header").prepend(newStaticElementWithTitle);
                            var adjustColumnHeightMB = new impCss.CssClass.AdjustJQ();
                            adjustColumnHeightMB.height = 50;
                            anyJQ.AddRow(jQuery(".jq-MenuBar"), layout.menuBar.cols, "layout-column", void 0, adjustColumnHeightMB);
                            newStaticElementWithTitle = staticElement.replace("title", "title='Menu Bar'");
                            jQuery(".jq-MenuBar").prepend(newStaticElementWithTitle);
                            var adjustColumnHeight = new impCss.CssClass.AdjustJQ();
                            adjustColumnHeight.height = 500;
                            anyJQ.AddRow(jQuery(".jq-Content"), layout.body.cols, "layout-column", void 0, adjustColumnHeight);
                            newStaticElementWithTitle = staticElement.replace("title", "title='Body'");
                            jQuery(".jq-Content").prepend(newStaticElementWithTitle);
                            anyJQ.AddRow(jQuery(".jq-Footer"), layout.footer.cols, "layout-column", void 0, void 0);
                            newStaticElementWithTitle = staticElement.replace("title", "title='Footer'");
                            jQuery(".jq-Footer").prepend(newStaticElementWithTitle);
                            errorHandler.ActionSuccess("Layout Created");
                            jQuery($this).closest(".control-page").hide();
                            var undoManager = new impUndoManager.Manager.UndoManager();
                            undoManager.PopUndo();
                            undoManager.PopUndo();
                            undoManager.PopUndo();
                            undoManager.PopUndo();
                            jQuery(".page").show();
                            impControlCommon.ControlCommon.Code.DestroyResizable();
                            impControlCommon.ControlCommon.Code.Execute();
                            undoManager.BeforeOperation();
                        } else errorHandler.ActionFail("Please try after some time.");
                    } else errorHandler.ActionFail("Please select a layout.!");
                    jQuery(".jq-row-plus-container").hide();
                };
                LayoutJQ.prototype.Layout = function(layout) {
                    var templateId = "template-" + layout.templateNumber, templateWrapper = jQuery(document.createElement("div"));
                    templateWrapper.addClass("empty-template-wrapper");
                    var template = jQuery(document.createElement("div")), dotTemplateId = ".template-" + layout.templateNumber;
                    template.addClass("float-left");
                    template.addClass("empty-layout");
                    template.addClass(templateId);
                    template.attr("layout-id", layout.templateNumber + "");
                    templateWrapper.append(template);
                    jQuery(".empty-layout-templates").append(templateWrapper);
                    var commonId = "T" + layout.templateNumber, headerId = commonId + "Header", header = new impHeader.Page.HeaderJQ("", headerId);
                    header.rootWrapper = dotTemplateId;
                    header.scopeId = ".empty-layout-templates";
                    var menuBarId = commonId + "MenuBar", menuBar = new impMenuBar.Page.MenuBarJQ("", menuBarId);
                    menuBar.rootWrapper = dotTemplateId;
                    menuBar.scopeId = ".empty-layout-templates";
                    var bodyId = commonId + "Body", body = new impBody.Page.ContentJQ("", bodyId);
                    body.rootWrapper = dotTemplateId;
                    body.scopeId = ".empty-layout-templates";
                    var footerId = commonId + "Footer", footer = new impFooter.Page.FooterJQ("", footerId);
                    footer.rootWrapper = dotTemplateId;
                    footer.scopeId = ".empty-layout-templates";
                    var adjustRow = new impCss.CssClass.AdjustJQ(), adjustColumn = new impCss.CssClass.AdjustJQ();
                    adjustRow.height = layout.header.height;
                    adjustColumn.height = layout.header.height;
                    header.AddRow(void 0, layout.header.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        header.GetColumn(1, 0).text("H");
                    } catch (ex) {}
                    adjustRow.height = layout.menuBar.height;
                    adjustColumn.height = layout.menuBar.height;
                    menuBar.AddRow(void 0, layout.menuBar.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        menuBar.GetColumn(1, 0).text("M");
                    } catch (ex) {}
                    adjustRow.height = layout.body.height;
                    adjustColumn.height = layout.body.height;
                    body.AddRow(void 0, layout.body.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        var column = body.GetColumn(1, 0);
                        column.text("B");
                    } catch (ex) {}
                    adjustRow.height = layout.footer.height;
                    adjustColumn.height = layout.footer.height;
                    footer.AddRow(void 0, layout.footer.cols, "layout-column", adjustRow, adjustColumn);
                    try {
                        var column = footer.GetColumn(1, 0);
                        column.text("F");
                    } catch (ex) {}
                };
                LayoutJQ.layout = {
                    templateNumber: 0,
                    header: {
                        height: 41,
                        cols: "col-xs-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout1 = {
                    templateNumber: 1,
                    header: {
                        height: 41,
                        cols: "col-xs-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout2 = {
                    templateNumber: 2,
                    header: {
                        height: 41,
                        cols: "col-xs-48"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-24 col-xs-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout3 = {
                    templateNumber: 3,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout4 = {
                    templateNumber: 4,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout5 = {
                    templateNumber: 5,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-36"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-24 col-xs-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout6 = {
                    templateNumber: 6,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-20 col-xs-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-48"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout7 = {
                    templateNumber: 7,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-20 col-xs-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-36"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                LayoutJQ.layout8 = {
                    templateNumber: 8,
                    header: {
                        height: 41,
                        cols: "col-xs-12 col-xs-20 col-xs-16"
                    },
                    menuBar: {
                        height: 5,
                        cols: "col-xs-48"
                    },
                    body: {
                        height: 70,
                        cols: "col-xs-12 col-xs-24 col-xs-12"
                    },
                    footer: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                };
                return LayoutJQ;
            }();
            Empty.LayoutJQ = LayoutJQ;
        }(Empty = Themes.Empty || (Themes.Empty = {}));
    }(Themes = exports.Themes || (exports.Themes = {}));
});

define("Common/on", [ "require", "exports", "../page/anyjq", "../Watch/WatchMouseJQ" ], function(require, exports, impAny, impWatch) {
    "use strict";
    var On;
    !function(On) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        On.SmartObj = SmartObj;
        var Code = function() {
            function Code() {}
            Code.Execute = function() {
                Code.BindPlus();
                Code.BindEC();
            };
            Code.BindEC = function() {
                jQuery(".empty-container").unbind("click");
                jQuery(".empty-container").on("click", function() {
                    var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                    void 0 != selectedElement && selectedElement.hasClass("empty-container");
                });
            };
            Code.BindPlus = function() {
                jQuery(".jq-prev-row").unbind("click");
                jQuery(".jq-prev-row").on("click", function() {
                    var currentRow = jQuery(this).parentsUntil(".row"), anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-48", "", void 0, void 0, !0);
                });
                jQuery(".jq-next-row").unbind("click");
                jQuery(".jq-next-row").on("click", function() {
                    var currentRow = jQuery(this).parentsUntil(".row"), anyjq = new impAny.Page.AnyJQ("");
                    anyjq.AddRow(currentRow, "col-xs-48", "", void 0, void 0, !1);
                });
                jQuery(".jq-plus-prev").unbind("click");
                jQuery(".jq-plus-prev").on("click", function(e) {
                    window.smartObj = new SmartObj();
                    jQuery(this).hasClass("image-text-other") ? window.smartObj.currentObj = jQuery(this) : window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                    window.smartObj.command = "p";
                    window.smartObj.isDirty = !1;
                    e.stopPropagation();
                    var pageY = e.pageY;
                    jQuery(window).scrollTop() + pageY >= jQuery(window).height() - 250 && (pageY = e.pageY - 250);
                    var pageX = e.pageX;
                    e.pageX > $(document).width() - 200 && (pageX = e.pageX - 150);
                    jQuery("#smInsertNextPrev").css("left", pageX + "px");
                    jQuery("#smInsertNextPrev").css("top", pageY + "px");
                    jQuery("#smInsertNextPrev").fadeIn(500);
                });
                jQuery(".jq-plus-next").unbind("click");
                jQuery(".jq-plus-next").on("click", function(e) {
                    window.smartObj = new SmartObj();
                    jQuery(this).hasClass("image-text-other") ? window.smartObj.currentObj = jQuery(this) : window.smartObj.currentObj = jQuery(this).closest(".image-text-other");
                    window.smartObj.command = "n";
                    window.smartObj.isDirty = !1;
                    e.stopPropagation();
                    var pageY = e.pageY;
                    jQuery(window).scrollTop() + pageY >= jQuery(window).height() - 250 && (pageY = e.pageY - 180);
                    var pageX = e.pageX;
                    e.pageX > $(document).width() - 200 && (pageX = e.pageX - 150);
                    jQuery("#smInsertNextPrev").css("left", pageX + "px");
                    jQuery("#smInsertNextPrev").css("top", pageY + "px");
                    jQuery("#smInsertNextPrev").fadeIn(500);
                });
            };
            return Code;
        }();
        On.Code = Code;
    }(On = exports.On || (exports.On = {}));
});

define("_Classes/SaveJq", [ "require", "exports", "../Error/ErrorJQ" ], function(require, exports, impError) {
    "use strict";
    var Save;
    !function(Save) {
        var SaveJQ = function() {
            function SaveJQ() {}
            SaveJQ.prototype.Download = function(downloadData) {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/download",
                    data: downloadData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SaveJQ.OnDownloadSuccess,
                    error: SaveJQ.OnDownloadError
                });
            };
            SaveJQ.OnDownloadSuccess = function(data, status) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                "" != data.d.Error && null != data.d.Error || 1 != data.d.Success ? errorHandler.ActionFail("Unable to generate download link...") : errorHandler.ActionSuccess("Click on the download link below  <br> <a target='_blank' class='download-site-link' href='" + data.d.Link + "' > click here </a>");
            };
            SaveJQ.OnDownloadError = function(request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Unable to generate download link...");
            };
            SaveJQ.prototype.SavePage = function(saveData) {
                jQuery.ajax({
                    type: "POST",
                    url: "/services/pageService.asmx/savepage",
                    data: saveData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: SaveJQ.OnSaveSuccess,
                    error: SaveJQ.OnSaveError
                });
            };
            SaveJQ.OnSaveSuccess = function(data, status) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                "" != data.d.Error ? errorHandler.ActionSuccess("Page saved") : errorHandler.ActionFail("Save Failed! <br> Try again later.");
            };
            SaveJQ.OnSaveError = function(request, status, error) {
                var errorHandler = new impError.ErrorHandle.ErrorJQ();
                errorHandler.ActionFail("Save Failed! <br> Try again later.");
            };
            SaveJQ.IsDownloadStarted = !1;
            return SaveJQ;
        }();
        Save.SaveJQ = SaveJQ;
    }(Save = exports.Save || (exports.Save = {}));
});

define("Controls/NoUi", [ "require", "exports", "../UndoManager/UndoManager", "../Watch/WatchMouseJQ", "../Error/ErrorJQ" ], function(require, exports, impUndoManager, impWatch, impError) {
    "use strict";
    var NoUI;
    !function(NoUI) {
        var AlignJQ = function() {
            function AlignJQ() {}
            AlignJQ.Common = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                return void 0 != selectedElement ? selectedElement.hasClass("column") || selectedElement.hasClass("row") || selectedElement.hasClass("root-elements") ? jQuery("#nononoelement") : selectedElement : jQuery("#nononoelement");
            };
            AlignJQ.Center = function() {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "none");
                selectedElement.closest(".column").css("text-align", "center");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            AlignJQ.Left = function() {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "left");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            AlignJQ.Right = function() {
                var selectedElement = AlignJQ.Common();
                selectedElement.css("float", "right");
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            return AlignJQ;
        }();
        NoUI.AlignJQ = AlignJQ;
        var MoveJQ = function() {
            function MoveJQ() {}
            MoveJQ.Common = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                return void 0 != selectedElement ? selectedElement.hasClass("root-elements") ? jQuery("#nononoelement") : selectedElement : jQuery("#nononoelement");
            };
            MoveJQ.CommonUpDown = function() {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;
                return void 0 != selectedElement ? selectedElement : jQuery("#nononoelement");
            };
            MoveJQ.Left = function() {
                var selectedElement = MoveJQ.Common();
                if ("none" == selectedElement.css("float")) {
                    if (selectedElement.prevAll(".key").first().length > 0 && ("right" == selectedElement.prevAll(".key").first().css("float") || "left" == selectedElement.prevAll(".key").first().css("float")) || 0 == selectedElement.prevAll(".key").first().length) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                    }
                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                } else if ("left" == selectedElement.css("float")) {
                    if (selectedElement.prevAll(".key").first().length > 0 && ("right" == selectedElement.prevAll(".key").first().css("float") || "none" == selectedElement.prevAll(".key").first().css("float")) || 0 == selectedElement.prevAll(".key").first().length) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }
                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                } else {
                    if (selectedElement.nextAll(".key").first().length > 0 && ("left" == selectedElement.nextAll(".key").first().css("float") || "none" == selectedElement.nextAll(".key").first().css("float")) || 0 == selectedElement.nextAll(".key").first().length) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }
                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                }
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            MoveJQ.Right = function() {
                var selectedElement = MoveJQ.Common();
                if ("none" == selectedElement.css("float")) {
                    if (selectedElement.nextAll(".key").first().length > 0 && ("right" == selectedElement.nextAll(".key").first().css("float") || "left" == selectedElement.nextAll(".key").first().css("float")) || 0 == selectedElement.nextAll(".key").first().length) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Center] elements.");
                    }
                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                } else if ("left" == selectedElement.css("float")) {
                    if (selectedElement.nextAll(".key").first().length > 0 && ("right" == selectedElement.nextAll(".key").first().css("float") || "none" == selectedElement.nextAll(".key").first().css("float")) || 0 == selectedElement.nextAll(".key").first().length) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Left] elements.");
                    }
                    selectedElement.insertAfter(selectedElement.nextAll(".key").first());
                } else {
                    if (selectedElement.prevAll(".key").first().length > 0 && ("left" == selectedElement.prevAll(".key").first().css("float") || "none" == selectedElement.prevAll(".key").first().css("float")) || 0 == selectedElement.prevAll(".key").first().length) {
                        var eh = new impError.ErrorHandle.ErrorJQ();
                        eh.ActionHelp("Help : Current element is dependent on all [Align Right] elements.");
                    }
                    selectedElement.insertBefore(selectedElement.prevAll(".key").first());
                }
                if (selectedElement.length > 0) {
                    var undo = new impUndoManager.Manager.UndoManager();
                    undo.BeforeOperation();
                }
            };
            MoveJQ.Up = function() {
                var selectedElement = MoveJQ.CommonUpDown();
                selectedElement.hasClass("row") || (selectedElement = selectedElement.closest(".row"));
                var lastElement = selectedElement.prevAll(".row").first();
                0 == lastElement.length && (lastElement = selectedElement.prevAll(".key").last());
                selectedElement.insertBefore(lastElement);
            };
            MoveJQ.Down = function() {
                var selectedElement = MoveJQ.CommonUpDown();
                selectedElement.hasClass("row") || (selectedElement = selectedElement.closest(".row"));
                var lastElement = selectedElement.nextAll(".row").first();
                0 == lastElement.length && (lastElement = selectedElement.nextAll(".key").last());
                selectedElement.insertAfter(lastElement);
            };
            return MoveJQ;
        }();
        NoUI.MoveJQ = MoveJQ;
    }(NoUI = exports.NoUI || (exports.NoUI = {}));
});

define("Common/CommonEvents", [ "require", "exports", "../Controls/JQueryUI", "../UndoManager/UndoManager", "../Themes/EmptyLayout/EmptyLayoutJQ", "../_Classes/Auth", "../Error/ErrorJQ", "../Common/on", "../_Classes/SaveJq", "../MalFormed/MalFormedJQ", "../Controls/NoUi", "../Controls/ImageJQ" ], function(require, exports, impJQueryUI, impUndoManager, impLayout, impAuth, impError, impOn, impSaveClass, impmal, impNoUi, impImage) {
    "use strict";
    var themeHandle, imageFiles, Common;
    !function(Common) {
        var SmartObj = function() {
            function SmartObj() {
                this.command = "";
                this.isDirty = !1;
            }
            return SmartObj;
        }();
        Common.SmartObj = SmartObj;
        var CommonEvents = function() {
            function CommonEvents() {
                this.isCommonEventsAdded = !1;
            }
            CommonEvents.GetCookie = function(cname) {
                for (var name = cname + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                    for (var c = ca[i]; " " == c.charAt(0); ) c = c.substring(1);
                    if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
                }
                return "";
            };
            CommonEvents.CheckMal = function() {
                return CommonEvents.GetCookie("jQuery") == jQuery("#viewstate").val() ? !0 : !1;
            };
            CommonEvents.UploadImages = function() {
                for (var files = imageFiles, data = new FormData(), i = 0; i < files.length; i++) data.append(files[i].name, files[i]);
                $.ajax({
                    type: "POST",
                    url: "/Services/PageService.asmx/UploadImages",
                    contentType: !1,
                    processData: !1,
                    data: data,
                    success: function() {
                        impImage.Image.SelfJQ.ClearImageGalaryPagingValue();
                        impImage.Image.SelfJQ.GetImages();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("Images Uploaded Sucessfully.");
                    },
                    error: function(request, status, error) {
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("Images Uploaded Failed.(Please check file type or file size.)");
                    }
                });
            };
            CommonEvents.PrepareUpload = function(event) {
                imageFiles = event.target.files;
                CommonEvents.UploadImages();
            };
            CommonEvents.prototype.Init = function() {
                0 == CommonEvents.CheckMal() && (impmal.MalFormed.MalFormedJQ.IsMalFormed = !1);
                jQuery(document).ready(function() {
                    jQuery("#tabs").tabs();
                    jQuery("#properties-accordion").accordion({
                        collapsible: !0,
                        heightStyle: "accordion-properties-height"
                    });
                });
                $(".leaf_type_btn").on("click", function() {
                    $(".leaf_type_btn").parent().removeClass("active");
                    $(this).parent().addClass("active");
                    $("#leaf_container .leaf_type").removeClass("active");
                    switch ($(this).parent().data("name").toString()) {
                      case "webs.bldr.modules.container.popular":
                        $("#leaf_container .leaf_type:eq(0)").addClass("active");
                        break;

                      case "webs.bldr.modules.container.structure":
                        $("#leaf_container .leaf_type:eq(1)").addClass("active");
                        break;

                      case "webs.bldr.modules.container.media":
                        $("#leaf_container .leaf_type:eq(2)").addClass("active");
                        break;

                      case "webs.bldr.modules.container.social":
                        $("#leaf_container .leaf_type:eq(3)").addClass("active");
                        break;

                      case "webs.bldr.modules.container.commerce":
                        $("#leaf_container .leaf_type:eq(4)").addClass("active");
                        break;

                      case "webs.bldr.dock.ads.appfeeds":
                        $("#leaf_container .leaf_type:eq(5)").addClass("active");
                    }
                });
                jQuery(".button-change-image").on("click", function() {
                    impImage.Image.SelfJQ.ChangeImage();
                });
                if (!jQuery(".bldr-draggable").hasClass("event-added")) {
                    jQuery(".bldr-draggable").addClass("event-added");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".bldr-draggable", "");
                }
                jQuery(".jq-full-page").on("click", function() {
                    jQuery(".page-margin").css("width", "auto");
                });
                jQuery(".jq-small-page").on("click", function() {
                    jQuery(".page-margin").css("width", "980px");
                });
                jQuery(".show-hide-menu-btn").hide();
                jQuery(".hide-menu").show();
                jQuery(".show-menu, .hide-menu").on("click", function() {
                    jQuery("#hideMenuHelpTop").hide();
                    if ("none" != jQuery(".hide-menu").css("display")) {
                        jQuery(".hide-menu").hide();
                        jQuery(".show-menu").show();
                        jQuery(".top-row-container").hide();
                        jQuery("rootx").css("top", "0");
                        jQuery(".editor").css("top", "0");
                        jQuery(".properties-sidebar-container").css("top", "0");
                    } else {
                        jQuery(".hide-menu").show();
                        jQuery(".show-menu").hide();
                        jQuery("rootx").css("top", "56px");
                        jQuery(".editor").css("top", "56px");
                        jQuery(".properties-sidebar-container").css("top", "56px");
                        jQuery(".top-row-container").show();
                    }
                });
                jQuery(".hide-left-menu").show();
                jQuery(".hide-left-menu, .show-left-menu").on("click", function() {
                    jQuery("#hideLeftMenuHelp").hide();
                    if ("none" != jQuery(".hide-left-menu").css("display")) {
                        jQuery(".hide-left-menu").hide();
                        jQuery(".show-left-menu").show();
                        jQuery("#property-sidebar-page-column").hide();
                        jQuery("#main-page-column").addClass("col-xs-48").removeClass("col-xs-36");
                    } else {
                        jQuery(".hide-left-menu").show();
                        jQuery(".show-left-menu").hide();
                        jQuery("#main-page-column").addClass("col-xs-36").removeClass("col-xs-48");
                        jQuery("#property-sidebar-page-column").show();
                    }
                });
                $(".image-file-upload").on("change", CommonEvents.PrepareUpload);
                jQuery(".button-align-left").on("click", function() {
                    impNoUi.NoUI.AlignJQ.Left();
                });
                jQuery(".button-align-right").on("click", function() {
                    impNoUi.NoUI.AlignJQ.Right();
                });
                jQuery(".button-align-center").on("click", function() {
                    impNoUi.NoUI.AlignJQ.Center();
                });
                jQuery(".button-move-left").on("click", function() {
                    impNoUi.NoUI.MoveJQ.Left();
                });
                jQuery(".button-move-right").on("click", function() {
                    impNoUi.NoUI.MoveJQ.Right();
                });
                jQuery(".button-move-up").on("click", function() {
                    impNoUi.NoUI.MoveJQ.Up();
                });
                jQuery(".button-move-down").on("click", function() {
                    impNoUi.NoUI.MoveJQ.Down();
                });
                jQuery("#control-align").draggable({
                    revert: !1
                });
                jQuery("#control-object-move").draggable({
                    revert: !1
                });
                var liveUrl = jQuery(".input-current-location").val() + "/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
                jQuery(".anchor-show-live-preview").attr("href", liveUrl);
                jQuery("#notify").on("click", function() {
                    jQuery(this).hide();
                });
                jQuery(".btn-help").on("click", function() {
                    jQuery("#site-help").slideToggle();
                });
                jQuery("#site-help").on("click", function() {
                    jQuery(this).slideUp();
                });
                themeHandle = window.setInterval(function() {
                    if (1 == impAuth.Auth.AuthJQ.IsAuth) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        window.clearInterval(themeHandle);
                        var layout = new impLayout.Themes.Empty.LayoutJQ();
                        layout.Init();
                        void 0 != impLayout.Themes.Empty.LayoutJQ.loading && impLayout.Themes.Empty.LayoutJQ.loading.Hide();
                    } else void 0 != impLayout.Themes.Empty.LayoutJQ.loading && impLayout.Themes.Empty.LayoutJQ.loading.Show();
                }, 1e3);
                jQuery(".jq-show-plus").on("click", function() {
                    jQuery(".jq-row-plus-container").show();
                    jQuery(".jq-show-plus").hide();
                    jQuery(".jq-hide-plus").show();
                });
                jQuery(".jq-hide-plus").on("click", function() {
                    jQuery(".jq-row-plus-container").hide();
                    jQuery(".jq-hide-plus").hide();
                    jQuery(".jq-show-plus").show();
                });
                jQuery(".button-download-site").on("click", function() {
                    var save = new impSaveClass.Save.SaveJQ(), data = {
                        siteName: jQuery(".input-site-name").val()
                    }, downloadData = JSON.stringify(data), eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Download will start in few seconds...");
                    save.Download(downloadData);
                });
                jQuery(".jq-save").on("click", function() {
                    var eh = new impError.ErrorHandle.ErrorJQ();
                    eh.ActionHelp("Please Wait...");
                    var scripts = jQuery(document.createElement("scripts")), styles = jQuery(document.createElement("styles")), page = jQuery(document.createElement("page")), fullbody = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /> </head><body>', fullbodyEnd = "</body></html>", styleSheetExtra = '<script type=" text/javascript" class="add-to-page jquery" src= "jquery/jquery-1.11.2.min.js" > </script><link rel="stylesheet" type= "text/css" class="add-to-page" href= "bootstrap/bootstrap-customzed-48.min.css" /><link class="add-to-page" type= "text/css" href= "theme/theme.css" rel= "stylesheet" type= "text/css" /><link class="add-to-page"  href= "theme/jqplus.css" rel= "stylesheet" /> <style>  @media (max-width: 980px) { .page-margin { width: auto !important; } .empty-container-text {display:inline-block; } .jq-text-block-container{max-width:100%;} .jq-text-block-container {height:auto !important;} .jq-plus-container-text{display:inline-block; height:auto !important; } }   .jq-plus-element { display:none !important; }  .jq-row-plus-container { display:none !important; }  .row { margin:0; padding:2px; clear:both; } .root-elements{ padding:0;}  .column { margin:0; padding:0; } .page-static-element { display:none !important;} .page-static-element-circle{display:none !important;} .design-adjust-image-text-other{margin:1px;} .image-text-other .adjust-image-text-other-left{ float: left; } .page-marker{display:none !important;} .design-page-row{display:none !important;}</style>';
                    jQuery(".image-selection").removeClass("image-selection");
                    jQuery(".add-to-page").each(function() {
                        "SCRIPT" == jQuery(this).prop("tagName") && scripts.append($(this).clone());
                        "LINK" == jQuery(this).prop("tagName") && styles.append($(this).clone());
                        if ("PAGE" == jQuery(this).prop("tagName")) {
                            page.append($(this).clone());
                            page.find(".jqte-editor").removeAttr("contentEditable").removeAttr("tabindex").css("cursor", "initial");
                            page.prepend(styleSheetExtra);
                        }
                    });
                    var save = new impSaveClass.Save.SaveJQ();
                    save.scripts = scripts.html();
                    save.styles = styles.html();
                    save.page = fullbody + page.html() + fullbodyEnd;
                    var data = {
                        Obj: save,
                        siteName: jQuery(".input-site-name").val(),
                        pageName: jQuery(".input-page-name").val()
                    }, saveData = JSON.stringify(data);
                    save.SavePage(saveData);
                });
                jQuery(".jq-undo").on("click", function() {
                    var undoManager = new impUndoManager.Manager.UndoManager();
                    undoManager.Undo();
                });
                jQuery(".jq-redo").on("click", function() {
                    var undoManager = new impUndoManager.Manager.UndoManager();
                    undoManager.Redo();
                });
                jQuery(".properties-button").on("click", function() {
                    "block" == jQuery(".control-properties").css("display") ? jQuery(".control-properties").addClass("forced-hide") : jQuery(".control-properties").removeClass("forced-hide");
                    jQuery(".control-properties").fadeToggle();
                });
                window.smartObj = new SmartObj();
                impOn.On.Code.Execute();
            };
            CommonEvents.ResizableClickCode = function($this) {
                jQuery(".ui-resizable-se").removeClass("selected-resizable");
                jQuery(".ui-resizable-s").removeClass("selected-resizable");
                jQuery($this).addClass("selected-resizable");
            };
            return CommonEvents;
        }();
        Common.CommonEvents = CommonEvents;
    }(Common = exports.Common || (exports.Common = {}));
});

define("Controls/ControlMoveJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var control, Control, clicking = !1;
    !function(Control) {
        var ControlMoveJQ = function() {
            function ControlMoveJQ() {}
            ControlMoveJQ.prototype.Init = function() {
                this.MouseDown();
                this.MouseUp();
                this.MouseMove();
            };
            ControlMoveJQ.prototype.MouseDown = function() {
                jQuery(".control-move-area").on("mousedown", function(e) {
                    control = jQuery(this).closest(".control-page");
                    0 == control.length && (control = jQuery(this).closest(".control-properties"));
                    clicking = !0;
                });
            };
            ControlMoveJQ.prototype.MouseUp = function() {
                jQuery(document).on("mouseup", function(e) {
                    clicking = !1;
                });
            };
            ControlMoveJQ.prototype.MouseMove = function() {
                jQuery(document).on("mousemove", function(e) {
                    if (0 != clicking && !(e.clientX + 20 > jQuery(window).width() || e.clientY + 20 > jQuery(window).height() || e.clientY < 0)) {
                        var width = jQuery(control).css("width");
                        if (void 0 != width) {
                            width = width.replace("px", "");
                            var center = Number(width) / 2, x = e.clientX - (center - 10), y = e.clientY - 10;
                            jQuery(control).css("left", x);
                            jQuery(control).css("top", y + "px");
                            jQuery(control).css("outline", "0");
                        }
                    }
                });
            };
            return ControlMoveJQ;
        }();
        Control.ControlMoveJQ = ControlMoveJQ;
    }(Control = exports.Control || (exports.Control = {}));
});

define("Template/TemplateJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Template, isTemplateReady = !1;
    !function(Template) {
        var TemplateJQ = function() {
            function TemplateJQ() {}
            TemplateJQ.prototype.Init = function() {
                this.Process();
            };
            TemplateJQ.ProcessImmediate = function() {
                jQuery(".jq-template").each(function() {
                    var templateId = $(this).attr("template-id");
                    $(this).append(jQuery(jQuery("#" + templateId).html()).clone());
                });
            };
            TemplateJQ.prototype.Process = function() {
                jQuery(document).ready(function() {
                    if (0 == isTemplateReady) {
                        isTemplateReady = !0;
                        TemplateJQ.ProcessImmediate();
                    }
                });
            };
            return TemplateJQ;
        }();
        Template.TemplateJQ = TemplateJQ;
    }(Template = exports.Template || (exports.Template = {}));
});

define("Controls/controlcommonjq", [ "require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert" ], function(require, exports, impJQueryUI, impOn, impJqteOnInsert) {
    "use strict";
    var ControlCommon;
    !function(ControlCommon) {
        var Code = function() {
            function Code() {}
            Code.AttachClick = function() {
                jQuery("#control-common-execute").on("click", function() {
                    Code.DestroyResizable();
                    Code.Execute();
                });
            };
            Code.Execute = function() {
                window.setTimeout(function() {
                    impOn.On.Code.Execute();
                    new impJqteOnInsert.OnInsert.Code().Init();
                    impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                    impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                    jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                    jQuery(".column").each(function() {
                        if (0 == jQuery(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length) {
                            jQuery(this).addClass("empty");
                            0 == jQuery(this).find(".empty-drop-element").length && jQuery(this).append("<div class='image-text-other empty-drop-element' ></div>");
                        } else {
                            jQuery(this).removeClass("empty");
                            jQuery(this).find(".empty-drop-element").remove();
                        }
                    });
                    jQuery(".image-text-other, .empty-container-empty").each(function(index, _this) {
                        var $this = jQuery(_this), bottom = $this.offset().top + $this.height(), top = $this.offset().top, left = $this.offset().left;
                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);
                    });
                    impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
                    jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                    jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                    jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                }, 10);
            };
            Code.DestroyResizable = function() {
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left");
            };
            Code.AnchorClicked = !1;
            return Code;
        }();
        ControlCommon.Code = Code;
    }(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});

define("Document/DocumentJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var Document, isDocumentReady = !1;
    !function(Document) {
        var DocumentJQ = function() {
            function DocumentJQ() {}
            DocumentJQ.prototype.Init = function() {
                this.Attach();
            };
            DocumentJQ.prototype.Attach = function() {
                jQuery(document).ready(function() {
                    0 == isDocumentReady && (isDocumentReady = !0);
                });
            };
            return DocumentJQ;
        }();
        Document.DocumentJQ = DocumentJQ;
    }(Document = exports.Document || (exports.Document = {}));
});

define("InsertTool/InsertToolJQ", [ "require", "exports" ], function(require, exports) {
    "use strict";
    var InsertTool, isInsertToolReady = !1;
    !function(InsertTool) {
        var InsertToolJQ = function() {
            function InsertToolJQ() {}
            InsertToolJQ.prototype.Init = function() {
                this.Process();
            };
            InsertToolJQ.ShowInsertTool = function() {};
            InsertToolJQ.prototype.Process = function() {
                jQuery(document).ready(function() {
                    if (0 == isInsertToolReady) {
                        isInsertToolReady = !0;
                        InsertToolJQ.ShowInsertTool();
                    }
                });
            };
            return InsertToolJQ;
        }();
        InsertTool.InsertToolJQ = InsertToolJQ;
    }(InsertTool = exports.InsertTool || (exports.InsertTool = {}));
});

define("Page/LoadJQ", [ "require", "exports", "../Controls/ControlCommonJQ", "../UndoManager/UndoManager", "../Error/ErrorJQ", "../_Classes/Auth", "../Preview/Preview", "../Constants/ConstantsJQ", "../InsertTool/InsertToolJQ", "../jqte/OnInsert" ], function(require, exports, impCommonCode, impUndoManager, impError, impAuth, impPreview, impStatic, impInsertTool, impOnInsert) {
    "use strict";
    var Page;
    !function(Page) {
        var LoadJQ = function() {
            function LoadJQ() {}
            LoadJQ.LoadPage = function(siteId, siteName, pageName) {
                var url = "/services/sites/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
                $.ajax({
                    url: url,
                    type: "GET",
                    cache: !1,
                    success: function(data) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        var e = jQuery(document.createElement("div")), pg = jQuery(document.createElement("div"));
                        e.html(data);
                        pg.append(e.html());
                        var pgResizableRemoved = pg;
                        if (pgResizableRemoved.find("page").length > 0) {
                            jQuery("page").html(pgResizableRemoved.find("page").html());
                            try {
                                jQuery("page").attr("style", pgResizableRemoved.find("page").attr("style"));
                            } catch (ex) {}
                            jQuery(".main-page-column").css("border", "1px solid #29adef");
                            jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                            jQuery("page .jqte-editor").attr("tabindex", "1");
                            impStatic.Constants.StaticJQ.normalLinkId = jQuery("page .jq-normal-link").length + 10;
                            impStatic.Constants.StaticJQ.editorLinkId = jQuery("page .jq-editor-link").length + 10;
                            jQuery(".page").show();
                            impPreview.Preview.PreviewJQ.ClosePreview();
                            jQuery("#control-templates").hide();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            impCommonCode.ControlCommon.Code.DestroyResizable();
                            impCommonCode.ControlCommon.Code.Execute();
                            var insert = new impInsertTool.InsertTool.InsertToolJQ();
                            insert.Process();
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                            $(window).scrollTop();
                        } else jQuery("#control-templates").show();
                        jQuery(".jq-row-plus-container").hide();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("Your page is loading. <br>Please wait...");
                    },
                    error: function(e) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("Page Loading Failed ! <br> Try again latter");
                    }
                });
            };
            return LoadJQ;
        }();
        Page.LoadJQ = LoadJQ;
    }(Page = exports.Page || (exports.Page = {}));
});

define("mainJQ", [ "require", "exports", "./Page/Context/ContextJQ", "./Controls/ControlsJQ", "./ContextMenu/ContextMenuJQ", "./Watch/WatchMouseJQ", "./_Classes/Auth", "./Common/CommonEvents", "./Preview/Preview", "./jqte/MyJQte", "./Controls/ControlMoveJQ", "./Template/TemplateJQ", "./Controls/controlcommonjq", "./Document/DocumentJQ", "./Page/LoadJQ" ], function(require, exports, impPageCtx, impControls, impCtxMenu, impWatch, impAuth, impCommon, impPreview, impJqte, impControlMove, impTemplate, impCommonControls, impDocument, impPageLoad) {
    "use strict";
    function DesignerPadding() {
        jQuery(".jq-text-block-container").addClass("jq-text-block-container-padding");
        jQuery(".column").addClass("column-padding");
    }
    var isMainReady = (new impPageCtx.Page.ContextJQ(), !1);
    jQuery(document).ready(function() {
        if (0 == isMainReady) {
            isMainReady = !0;
            var element = jQuery(document.createElement("div"));
            element.attr("src", "xa.xml");
            jQuery("body").find("div").first().append(element);
            jQuery("body").find("div").first().append(element.clone());
            jQuery("body").find("div").first().append(element.clone());
            impCommonControls.ControlCommon.Code.AttachClick();
            jQuery(".row").removeClass("design-row");
            jQuery(".column").removeClass("design-column");
            jQuery(".jq-loading").show();
            "" != jQuery("inpu-page-name").val() && "" != jQuery("inpu-site-name").val() && impPageLoad.Page.LoadJQ.LoadPage("site", "site1", "page1");
            var doc = new impDocument.Document.DocumentJQ();
            doc.Init();
            var smart = new impCommon.Common.CommonEvents();
            smart.Init();
            var preview = new impPreview.Preview.PreviewJQ();
            preview.Init();
            DesignerPadding();
            var jqteObj = new impJqte.MyJQte.jqte("");
            jqteObj.Init();
            var addRow = new impControls.Page.AddRowJQ();
            addRow.Init();
            var contextmenu = new impCtxMenu.ContextMenu.ContextMenuJQ();
            contextmenu.Init();
            var watch = new impWatch.Watch.MouseJQ();
            watch.WatchPage();
            var controlMove = new impControlMove.Control.ControlMoveJQ();
            controlMove.Init();
            var templating = new impTemplate.Template.TemplateJQ();
            templating.Init();
            var Auth = new impAuth.Auth.AuthJQ();
            Auth.Call();
        }
    });
});

requirejs.config({
    baseUrl: "../../shiv/TypeScript",
    urlArgs: "bust=" + new Date().getTime(),
    wrapShim: !0,
    paths: {
        jquery: "../../Library/jquery-1.11.2.min",
        jqueryUi: "../../Library/jquery-ui",
        colPicker: "../../Scripts/evoluteur.colorpicker/colorpicker-master/js/evol.colorpicker",
        mainJQ: "./MainJQ"
    },
    shim: {
        jqueryUi: {
            deps: [ "jquery" ],
            exports: "$"
        },
        colPicker: {
            deps: [ "jquery", "jqueryUi" ],
            exports: "jQuery"
        },
        mainJQ: {
            deps: [ "jquery", "jqueryUi", "colPicker" ],
            exports: "MainJQ"
        }
    }
});

requirejs([ "mainJQ" ]);

define("app", function() {});

require([ "app" ]);