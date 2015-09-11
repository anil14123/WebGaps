/// <reference path="../../library/jquery.d.ts" />
var onMouseElement;
var menuid2 = "#menu-2 ";
var rotator2Top = 12;
jQuery(document).ready(function () {
    jQuery(menuid2 + ".rotator").hide();
    jQuery(menuid2 + ".rotator").width(jQuery(".active").width());
    jQuery(menuid2 + " .menu").find(".li").click(function (e) {
        jQuery(menuid2 + ".li").removeClass("active-link");
        jQuery(menuid2 + ".li").parent().removeClass("active");
        jQuery(this).parent().addClass("active");
        jQuery(this).addClass("active-link");
    });
    jQuery(menuid2).mouseleave(function () {
        jQuery(this).closest(menuid2).find("ul").find("ul").css("display", "none");
        jQuery(menuid2 + ".li").removeClass("on-mouse-active");
        var childRect = jQuery(menuid2 + "li.active").find(".li").first()[0].getBoundingClientRect();
        var parentRect = jQuery(menuid2)[0].getBoundingClientRect();
        //relativePos.top = childRect.top - parentRect.top,
        //relativePos.right = childRect.right - parentRect.right,
        //relativePos.bottom = childRect.bottom - parentRect.bottom,
        var left = childRect.left - parentRect.left;
        jQuery(menuid2 + ".rotator").animate({
            queue: true,
            left: left,
            width: jQuery(menuid2 + "li.active").width(),
            top: rotator2Top
        }, 300, function () {
        });
    });
    jQuery(menuid2 + " .menu").find(".li").mouseenter(function (e) {
        jQuery(this).closest(menuid2).find("ul").removeClass("current-menu");
        var current = jQuery(this).parent().parent("ul");
        var currenli;
        current.addClass("current-menu");
        for (var i = 0; !jQuery(current).hasClass("menu") && jQuery(current).length > 0; i++) {
            current = jQuery(current).parent().parent("ul");
            currenli = current.find(".li").first();
            current.addClass("current-menu");
        }
        jQuery(this).closest(menuid2).find("ul").find("ul").not(".current-menu").css("display", "none");
        if (jQuery(this).parent().hasClass("level-1")) {
            jQuery(this).parent().find("ul").first().css("left", 0 + "px");
            jQuery(this).parent().find("ul").first().css("top", jQuery(this).closest(".menu").height() + "px");
            jQuery(this).parent().find("ul").first().css("display", "block");
        }
        else {
            jQuery(this).parent().find("ul").first().css("left", 147 + "px");
            jQuery(this).parent().find("ul").first().css("display", "block");
        }
    });
    jQuery(menuid2 + " .menu").children("li").children(".li").click(function (e) {
        jQuery(menuid2 + ".li").removeClass("on-mouse-active");
        jQuery(menuid2 + ".rotator").show();
        var childRect = jQuery(this)[0].getBoundingClientRect();
        var parentRect = jQuery(menuid2)[0].getBoundingClientRect();
        var left = childRect.left - parentRect.left;
        onMouseElement = jQuery(this);
        jQuery(menuid2 + ".rotator").animate({
            queue: true,
            left: left,
            top: rotator2Top,
            width: jQuery(this).width()
        }, 300, function () {
        });
        onMouseElement.addClass("on-mouse-active");
    });
    jQuery(menuid2 + "  .menu").find("li").mouseleave(function (e) {
    });
    jQuery(menuid2 + "  .menu").children("li").children(".li").mouseenter(function (e) {
        jQuery(menuid2 + ".li").removeClass("on-mouse-active");
        jQuery(menuid2 + ".rotator").show();
        var childRect = jQuery(this)[0].getBoundingClientRect();
        var parentRect = jQuery(menuid2)[0].getBoundingClientRect();
        //relativePos.top = childRect.top - parentRect.top,
        //relativePos.right = childRect.right - parentRect.right,
        //relativePos.bottom = childRect.bottom - parentRect.bottom,
        var left = childRect.left - parentRect.left;
        onMouseElement = jQuery(this);
        jQuery(menuid2 + ".rotator").animate({
            queue: true,
            left: left,
            top: rotator2Top,
            width: jQuery(this).width()
        }, 300, function () {
        });
        onMouseElement.addClass("on-mouse-active");
    });
    jQuery(menuid2 + "  .menu").find("li").mouseleave(function (e) {
    });
});
//# sourceMappingURL=Menu.js.map