define(["require", "exports", "jquery"], function (require, exports, jQuery) {
    "use strict";
    var Page;
    (function (Page) {
        var Elements;
        (function (Elements) {
            var ElementJQ = (function () {
                function ElementJQ() {
                    this.CreateImage = function (src, className) {
                        var additionalStyle = ''; // ScaffoldClassName(className);
                        return jQuery(this.image).attr('class', '').addClass(className).attr('style', additionalStyle).attr('src', src);
                    };
                    this.GetDotClass = function (className) {
                        return '.' + this.classKey + '_' + className + '';
                    };
                    this.div = document.createElement('div');
                    this.span = document.createElement('span');
                    this.p = document.createElement('p');
                    this.a = document.createElement('a');
                    this.style = document.createElement('style');
                    this.image = document.createElement('img');
                    this.classKey = '';
                }
                ElementJQ.prototype.CreateStyle = function (classes) {
                    return jQuery(this.style).html(classes);
                };
                ElementJQ.prototype.CreateDiv = function (content, className) {
                    var additionalStyle = ''; //ScaffoldClassName(className);
                    return jQuery(this.div).html(content).attr('class', '').addClass(className).attr('style', additionalStyle);
                };
                ElementJQ.prototype.GetClass = function (className, dot) {
                    return this.classKey + '_' + className;
                };
                return ElementJQ;
            }());
            Elements.ElementJQ = ElementJQ;
            // needs review for TypeScript
            function ScaffoldClassName(className) {
                if (className != undefined) {
                    var classes = className.split(' ');
                    var additionalStyle = '';
                    var additionalKey = '';
                    var additionalValue = '';
                    var styleCollection = ['height', 'width', 'margintop', 'marginleft', 'marginright', 'marginbottom', 'marginallsides'];
                    if (classes != undefined && classes.length > 0) {
                        var n;
                        var i;
                        for (n = 0; n < styleCollection.length; n++) {
                            for (i = 0; i < classes.length; i++) {
                                var jqHeightIndex = classes[i].toLowerCase().indexOf(styleCollection[n]);
                                if (jqHeightIndex > 0) {
                                    jqHeightIndex = classes[i].indexOf('-');
                                }
                                if (jqHeightIndex > 0) {
                                    jqHeightIndex += 1;
                                    var extractedNumber = classes[i].substring(jqHeightIndex);
                                    if (extractedNumber != undefined && extractedNumber.toString().length > 0 && !isNaN(extractedNumber)) {
                                        if (styleCollection[n] == 'height' || styleCollection[n] == 'width') {
                                            additionalKey = styleCollection[n];
                                        }
                                        else {
                                            if (styleCollection[n] == 'marginleft') {
                                                additionalKey = 'margin-left';
                                            }
                                            else if (styleCollection[n] == 'margintop') {
                                                additionalKey = 'margin-top';
                                            }
                                            else if (styleCollection[n] == 'marginlright') {
                                                additionalKey = 'margin-right';
                                            }
                                            else if (styleCollection[n] == 'marginbottom') {
                                                additionalKey = 'margin-bottom';
                                            }
                                            else if (styleCollection[n] == 'marginallsides') {
                                                additionalKey = 'margin';
                                            }
                                        }
                                        additionalValue = extractedNumber + 'px';
                                        additionalStyle += ' ' + additionalKey + ':' + additionalValue + ';';
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    return additionalStyle;
                }
            }
        })(Elements = Page.Elements || (Page.Elements = {}));
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=ElementJQ.js.map