
export module Page.Menu {

    //need to convert this to an array in MenuLinksJQ...
    export class MenuLinkJQ {
        name: string;
        pageLocation: string;
        text: string;
        subLinks: MenuLinkJQ[];
    }
}