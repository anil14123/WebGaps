
export module Common {

    export class CommonMethodsJQ {
                

        Trim(str) {
            if (str != undefined && typeof (str).toLowerCase() == "string") {

                return this.TrimRight(this.TrimLeft(str));
            }
        }

        RemoveStyle(element: JQuery, style: string) {

            if (style != undefined) {
                style = style.toLowerCase();
            }
            else {
                return;
            }

            var search = new RegExp(style + '[^;]+;?', 'g');
            jQuery(element).each(function () {
                $(this).attr('style', function (i, style) {
                    if (style != undefined) {
                        var result = style.replace(search, '');

                        return result;
                    }
                })
            });
        };

        RemoveSingleStyle(element: JQuery, style: string) {

            if (style != undefined) {
                style = style.toLowerCase();
            }
            else {
                return;
            }

            var search = new RegExp(style + "\s*:.*?;", 'g');
            jQuery(element).each(function () {
                $(this).attr('style', function (i, style) {
                    if (style != undefined) {
                        var result = style.replace(search, '');

                        return result;
                    }
                })
            });
        };

        //RemoveSingleStyle(element: JQuery, style: string) {

        //    if (style != undefined) {
        //        style = style.toLowerCase();
        //    }
        //    else {
        //        return;
        //    }

        //    var search = new RegExp(style + '[^;]', 'g');
        //    jQuery(element).each(function () {
        //        $(this).attr('style', function (i, style) {
        //            if (style != undefined) {
        //                return style.replace(search, '');
        //            }
        //        })
        //    });
        //};

        TrimLeft(str) {
            if (str != undefined && typeof (str).toLowerCase() == "string") {

                var trimmedIndex = 0;

                for (var i = 0; i < str.length; i++) {
                    if (str[i] == ' ') {
                        trimmedIndex = i + 1;
                    }

                    if ((i + 1) < str.length) {
                        if (str[i + 1] != ' ') {
                            break;
                        }
                    }
                }

                if (trimmedIndex < str.length) {
                    str = str.toString().slice(trimmedIndex); // result
                }

            }

            return str;
        }

        TrimRight(str) {
            if (str != undefined && typeof (str).toLowerCase() == "string") {

                var trimmedIndex = str.length;

                for (var i = str.length - 1; i > -1; i--) {
                    if (str[i] == ' ') {
                        trimmedIndex = i;
                    }

                    if ((i - 1) > -1) {
                        if (str[i - 1] != ' ') {
                            break;
                        }
                    }

                }

                if (trimmedIndex > -1) {
                    str = str.toString().slice(0, trimmedIndex); // result
                }

                return str;
            }



        }

        RemoveSpaces(str) {

            if (str != undefined) {

                if (typeof (str).toLowerCase() == 'string') {
                    str = str.replace(/ /g, "")
                }

            }

            return str;
        }

        Insert(index, sourceString, insertString) {

            if (sourceString != undefined && insertString != undefined) {

                if (typeof (sourceString).toLowerCase() == 'string' && typeof (insertString).toLowerCase() == 'string') {

                    if (index > 0 && index < sourceString.length) {
                        return sourceString.substring(0, index) + insertString + sourceString.substring(index, sourceString.length);
                    }
                    else {
                        return sourceString;
                    }

                }

            }

        }
    }

}