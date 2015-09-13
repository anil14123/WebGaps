/// <reference path="../../../library/jquery.d.ts" />
import impCommonUrl = require("../_Classes/UrlJQ");
import impMenuLinks = require("../Menu/MenuLinksJQ");

var firstElementActive = false;
export module Page.Menu {

    export class MenuTemplateJQ {

        menuOneId: number;
        menuTwoId: number;
        menuThreeId: number;
        menuFourId: number;
        menuFiveId: number;
         
        constructor() {
            this.menuOneId = 1;
            this.menuTwoId = 2;
            this.menuThreeId = 3;
            this.menuFourId = 4;
            this.menuFiveId = 5;
        }

        currentMenuLinks: JQuery;

        CreateMenuTemplate(id, className, menuLinks, menuDesignId) {

            if (menuLinks == undefined) {
                menuLinks = new impMenuLinks.Page.Menu.MenuLinksJQ().Get(id);
                this.currentMenuLinks = menuLinks;
            }

            var menuContainer: JQuery;

            if (menuLinks != undefined && menuLinks.length > 0) {
                menuContainer = jQuery("<div  id='menu-" + (menuDesignId ) + "' class='jqMenuContainer" + className + "'> </div>");

                var menuUl = this.CreateUL('menu', menuLinks);

                menuContainer.append(menuUl);

                menuContainer.prepend("<div class='rotator'></div>");

            }

            //alert(menuContainer.html());

            return menuContainer;
        }

        CreateUL(ulName, menuLinks, level=1) {

            var menuUl = jQuery("<ul class='" + ulName + "'> </ul>");

            var urlJQ = new impCommonUrl.Common.UrlJQ();

            for (var i = 0; i < menuLinks.length; i++) {

                var pageLocation = menuLinks[i].pageLocation;


                var href = urlJQ.PreparePageHref(pageLocation);


                var parent = "";
                if (menuLinks[i].subLinks != undefined && menuLinks[i].subLinks.length > 0) {
                    parent = "has-children";
                }

                var menuitemLink = ' <a class="li ' + parent + '" href="' + href + '"> ' + menuLinks[i].text + '</a> ';

                if (menuitemLink == undefined) {
                    menuitemLink = '';
                }

                var idName = menuLinks[i].name;

                if (idName != undefined) {
                    idName = idName.toString().replace(/\s+/g, '');
                    idName = idName.toUpperCase();
                    idName = "jqPrimaryMenu-" + idName;
                }

                var menuitem = jQuery("<li> " + menuitemLink + "</li> ");

                menuUl.append(menuitem);

                var subMenuUl: JQuery;

                if (menuLinks[i].subLinks != undefined && menuLinks[i].subLinks.length > 0) {
                    level++;
                    subMenuUl = this.CreateUL('jqSubMenuUl', menuLinks[i].subLinks, level);          
                    level--;  
                }

                if (subMenuUl != undefined) {
                    jQuery(menuitem).append(subMenuUl);
                }

                if (level == 1 && firstElementActive == false) {
                    firstElementActive = true;
                    menuitem.addClass("active");
                    menuitem.find(".li").first().addClass("active-link");
                }
                menuitem.addClass("level-" + level);

            }

            return menuUl;

        }

    }
}