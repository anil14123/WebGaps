define(["require", "exports", "../Common/CommonMethodsJQ"], function (require, exports, impCommon) {
    var Common;
    (function (Common) {
        var UrlJQ = (function () {
            function UrlJQ() {
                this.NgRoutePrefix = "/#";
            }
            UrlJQ.prototype.GetDocumentLocation = function () {
                var hn = document.location.hostname;
                if (hn != undefined && hn != "") {
                    hn = hn.toLowerCase();
                    hn = hn.replace("www.", "");
                }
                return hn;
            };
            UrlJQ.prototype.PreparePageHref = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    var urlMethods = new UrlJQ;
                    if (commonMethods.Trim(url) == '#') {
                    }
                    else {
                        url = urlMethods.PrepareForHTTP(url);
                        url = urlMethods.PrepareForLocal(url);
                        url = urlMethods.PrepareForAngularJS(url, this.NgRoutePrefix);
                    }
                }
                if (url == undefined) {
                    url = '/#';
                }
                return url;
            };
            UrlJQ.prototype.PrepareForAngularJS = function (url, ngRoutePrefix) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('http://') != 0 && url.indexOf('https://') != 0 && url.indexOf('//') != 0 && url.indexOf('www.') != 0) {
                        url = ngRoutePrefix + url;
                    }
                }
                return url;
            };
            UrlJQ.prototype.PrepareForLocal = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('/') == 0 || url.indexOf('http://') == 0 || url.indexOf('https://') == 0 || url.indexOf('//') == 0 ||
                        url.indexOf('www.') == 0) {
                    }
                    else {
                        url = '/' + url;
                    }
                }
                return url;
            };
            UrlJQ.prototype.PrepareForHTTP = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('/') == 0 || url.indexOf('http:') == 0 || url.indexOf('https:') == 0 || url.indexOf('//') == 0 ||
                        url.indexOf('www.') == 0) {
                        if (url.indexOf('http:/') == 0 || (url.indexOf('https:/') == 0)) {
                            var protocolLength;
                            if (url.indexOf('http:/') == 0) {
                                protocolLength = 'http:/'.length;
                            }
                            else if (url.indexOf('https:/') == 0) {
                                protocolLength = 'https:/'.length;
                            }
                            url = commonMethods.Insert(protocolLength - 1, url, '/');
                        }
                        else if (url.indexOf('http:') == 0 || (url.indexOf('https:') == 0)) {
                            var protocolLength;
                            if (url.indexOf('http:') == 0) {
                                protocolLength = 'http:'.length;
                            }
                            else if (url.indexOf('https:') == 0) {
                                protocolLength = 'https:'.length;
                            }
                            url = commonMethods.Insert(protocolLength, url, '//');
                        }
                        if (url.indexOf('www.') == 0) {
                            url = '//' + url;
                        }
                        url = this.RemoveExtraHTTPSlashes(url);
                    }
                    else {
                    }
                }
                return url;
            };
            UrlJQ.prototype.RemoveExtraHTTPSlashes = function (url) {
                if (url != undefined) {
                    var commonMethods = new impCommon.Common.CommonMethodsJQ();
                    url = commonMethods.Trim(url);
                    url = commonMethods.RemoveSpaces(url);
                    if (url.indexOf('/') == 0 || url.indexOf('http://') == 0 || url.indexOf('https://') == 0 || url.indexOf('//') == 0 ||
                        url.indexOf('www.') == 0) {
                        if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0 || url.indexOf('//') == 0) {
                            var http = '';
                            if (url.indexOf('http:') == 0) {
                                http = 'http://';
                                url = url.slice(5);
                            }
                            else if (url.indexOf('https:') == 0) {
                                http = 'https://';
                                url = url.slice(6);
                            }
                            else if (url.indexOf('//') == 0) {
                                http = "//";
                            }
                            var httpIndex = 0;
                            for (var i = 0; i < url.length; i++) {
                                if (url[i] == '/') {
                                    httpIndex++;
                                }
                                else {
                                    break;
                                }
                            }
                            url = url.slice(httpIndex);
                            url = http + url;
                        }
                        else {
                        }
                    }
                }
                return url;
            };
            return UrlJQ;
        })();
        Common.UrlJQ = UrlJQ;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=UrlJQ.js.map