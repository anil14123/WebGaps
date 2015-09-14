/// <reference path="scripts/jquery.d.ts" />
/// <reference path="scripts/document.d.ts" />

class JqteParams {

}

class jqte {

    public static $this: JQuery;

    public static ThisBrowser = navigator.userAgent.toLowerCase();

    constructor(controlName, params: JqteParams) {
        jqte.$this = jQuery(controlName)

        this.Init();
    }

    public Init() {
        this.AttachEvents();
    }

    public AttachEvents() {

        this.AttachGetSelection();
    }

    public AttachGetSelection() {
        jQuery(".get-selection").click(function () {
            jqte.GetSelectetdText();

            jQuery(this).closest(".editor").find(".jqte-editor").find("font[size=1]").attr("size", 50);
        });
    }

    public static GetSelectetdText() {
        return jqte.SelectionSet("fontSize", "1");
    }

    public static SelectionGet() {
        // for webkit, mozilla, opera
        if (window.getSelection)
            return window.getSelection();
        // for ie
        else if (document.selection && document.selection.createRange && document.selection.type != "None")
            return document.selection.createRange();
    }

    public static SelectionSet(addCommand, thirdParam) {
        var range,
            sel = jqte.SelectionGet();

        // for webkit, mozilla, opera
        if (window.getSelection) {
            if (sel.anchorNode && sel.getRangeAt)
                range = sel.getRangeAt(0);

            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }

            if (!jqte.ThisBrowser.match(/msie/))
                document.execCommand('StyleWithCSS', false, false);

            document.execCommand(addCommand, false, thirdParam);
        }
				
        // for ie
        else if (document.selection && document.selection.createRange && document.selection.type != "None") {
            range = document.selection.createRange();
            range.execCommand(addCommand, false, thirdParam);
        }
				
       
    }

    public static SelectText(element) {
        if (element) {
            var element = element[0];
            var range;
            if (document.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            }
            else if (window.getSelection) {
                var selection = window.getSelection();
                range = document.createRange();

                if (element != "undefined" && element != null) {
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
    }

   
}

window.onload = () => {
    new jqte(".jqte-editor", {});
};