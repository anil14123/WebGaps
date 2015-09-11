/// <reference path="../../library/jquery.d.ts" />
var onMouseElement;
var menuid = "#menu-3 ";
var rotator3Top = 12;
jQuery(document).ready(function () {
    jQuery(menuid + ".rotator").hide();
    jQuery(menuid + ".rotator").width(jQuery(".active").width());
    jQuery(menuid + " .menu").find(".li").click(function (e) {
        jQuery(menuid + ".li").removeClass("active-link");
        jQuery(menuid + ".li").parent().removeClass("active");
        jQuery(this).parent().addClass("active");
        jQuery(this).addClass("active-link");
    });
    jQuery(menuid).mouseleave(function () {
        jQuery(this).closest(menuid).find("ul").find("ul").css("display", "none");
        jQuery(menuid + ".li").removeClass("on-mouse-active");
        var childRect = jQuery(menuid + "li.active").find(".li").first()[0].getBoundingClientRect();
        var parentRect = jQuery(menuid)[0].getBoundingClientRect();
        //relativePos.top = childRect.top - parentRect.top,
        //relativePos.right = childRect.right - parentRect.right,
        //relativePos.bottom = childRect.bottom - parentRect.bottom,
        var left = childRect.left - parentRect.left;
        jQuery(menuid + ".rotator").animate({
            queue: true,
            left: left,
            width: jQuery(menuid + "li.active").width(),
            top: rotator3Top
        }, 300, function () {
        });
    });
    jQuery(menuid + " .menu").find(".li").mouseenter(function (e) {
        jQuery(this).closest(menuid).find("ul").removeClass("current-menu");
        var current = jQuery(this).parent().parent("ul");
        var currenli;
        current.addClass("current-menu");
        for (var i = 0; !jQuery(current).hasClass("menu") && jQuery(current).length > 0; i++) {
            current = jQuery(current).parent().parent("ul");
            currenli = current.find(".li").first();
            current.addClass("current-menu");
        }
        jQuery(this).closest(menuid).find("ul").find("ul").not(".current-menu").css("display", "none");
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
    jQuery(menuid + " .menu").children("li").children(".li").click(function (e) {
        jQuery(menuid + ".li").removeClass("on-mouse-active");
        jQuery(menuid + ".rotator").show();
        var childRect = jQuery(this)[0].getBoundingClientRect();
        var parentRect = jQuery(menuid)[0].getBoundingClientRect();
        var left = childRect.left - parentRect.left;
        onMouseElement = jQuery(this);
        jQuery(menuid + ".rotator").animate({
            queue: true,
            left: left,
            top: rotator3Top,
            width: jQuery(this).width()
        }, 300, function () {
        });
        onMouseElement.addClass("on-mouse-active");
    });
    jQuery(menuid + "  .menu").find("li").mouseleave(function (e) {
    });
    jQuery(menuid + "  .menu").children("li").children(".li").mouseenter(function (e) {
        jQuery(menuid + ".li").removeClass("on-mouse-active");
        jQuery(menuid + ".rotator").show();
        var childRect = jQuery(this)[0].getBoundingClientRect();
        var parentRect = jQuery(menuid)[0].getBoundingClientRect();
        //relativePos.top = childRect.top - parentRect.top,
        //relativePos.right = childRect.right - parentRect.right,
        //relativePos.bottom = childRect.bottom - parentRect.bottom,
        var left = childRect.left - parentRect.left;
        onMouseElement = jQuery(this);
        jQuery(menuid + ".rotator").animate({
            queue: true,
            left: left,
            top: rotator3Top,
            width: jQuery(this).width()
        }, 300, function () {
        });
        onMouseElement.addClass("on-mouse-active");
    });
    jQuery(menuid + "  .menu").find("li").mouseleave(function (e) {
    });
});
//# sourceMappingURL=Menu.js.map