
import impError = require("../Error/ErrorJQ");

export module Page.Menu {

    export class MenuLinksJQ {

        Get(id) {

            var MenuLinks;

            if (id == 1) {
                return MenuLinks = [
                    {
                        name: 'home',
                        pageLocation: '#',
                        text: 'Home',
                        subLinks: [
                            {
                                name: 'SubLink Home 1',
                                pageLocation: '/x2',
                                text: 'SubLink Home 1',
                                subLinks: [
                                    {
                                        name: 'SubLink Home 1.1',
                                        pageLocation: '/x1',
                                        text: 'SubLink Home 1.1   ',
                                        subLinks: [
                                            {
                                                name: 'SubLink Home 1.1.1',
                                                pageLocation: 'x2',
                                                text: 'SubLink Home 1.1.1',
                                                subLinks: []

                                            }
                                        ]

                                    }
                                ]

                            }
                        ]
                    },
                    {

                        name: "Contact",
                        pageLocation: '/eventvideos',
                        text: 'Contact Us',
                        subLinks: [
                            //{
                            //    name: 'SubLink About 1',
                            //    link: ' <a class="jqMenuItemLink" href="/x1"> SubLink About 1 </a> ',
                            //    subLinks: []
                            //}
                        ]
                    },

                    {

                        name: "About",
                        pageLocation: '#',
                        text: 'About Us',
                        subLinks: [
                            {
                                name: 'SubLink Home 1',
                                pageLocation: '/x2',
                                text: 'SubLink Home 1',
                                subLinks: [
                                    {
                                        name: 'SubLink Home 1.1',
                                        pageLocation: '/x1',
                                        text: 'SubLink Home 1.1   ',
                                        subLinks: [
                                            {
                                                name: 'SubLink Home 1.1.1',
                                                pageLocation: 'x2',
                                                text: 'SubLink Home 1.1.1',
                                                subLinks: []

                                            }
                                        ]

                                    }
                                ]

                            }
                        ]
                    }


                ];
            }
            else
                if (id == 2) {
                    return [
                        {
                            name: 'Home',
                            pageLocation: '/x1',
                            text: 'Home',
                            subLinks: [
                                {
                                    name: 'SubLink Home 1',
                                    pageLocation: '/x2',
                                    text: 'SubLink Home 1',
                                    subLinks: [
                                        {
                                            name: 'SubLink Home 1.1',
                                            pageLocation: '/x1',
                                            text: 'SubLink Home 1.1   ',
                                            subLinks: [
                                                {
                                                    name: 'SubLink Home 1.1.1',
                                                    pageLocation: 'x2',
                                                    text: 'SubLink Home 1.1.1',
                                                    subLinks: []

                                                }
                                            ]

                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            name: 'About',
                            pageLocation: 'x1',
                            text: 'About',
                            externalLocation: true,
                            subLinks: [
                                {
                                    name: 'SubLink About 1',
                                    pageLocation: '/x2',
                                    text: 'SubLink About 1',
                                    subLinks: [
                                        {
                                            name: 'SubLink About 1.1',
                                            pageLocation: '/x1',
                                            text: 'SubLink About 1.1',
                                            subLinks: [
                                                {
                                                    name: 'SubLink About 1.1.1',
                                                    pageLocation: 'x2',
                                                    text: 'SubLink About 1.1.1',
                                                    subLinks: []

                                                }
                                            ]

                                        }
                                    ]

                                }
                            ]
                        }
                    ];

                }
                else if (id == 3) {
                    return [
                        {
                            name: 'Home',
                            pageLocation: '/nopage',
                            text: 'Home',
                            subLinks: [
                                {
                                    name: 'SubLink Home 1',
                                    pageLocation: 'x1',
                                    text: 'SubLink Home 1',
                                    subLinks: [

                                    ]

                                }
                            ]
                        },
                        {
                            name: 'About',
                            pageLocation: 'x2',
                            text: 'About',
                            externalLocation: true,
                            subLinks: [

                            ]
                        },
                        {
                            name: 'Video Samples',
                            pageLocation: 'http://www.http.com',
                            text: 'Video Samples',
                            subLinks: [
                                //{
                                //    name: 'SubLink Home 1',
                                //    link: ' <a class="jqMenuItemLink" href="/x1"> SubLink Home 1 </a> ',
                                //    subLinks: []

                                //}
                            ]
                        },
                        {

                            name: "Event",
                            pageLocation: '/eventvideos',
                            text: 'Event',
                            subLinks: [
                                {
                                    name: "Videos",
                                    pageLocation: '/eventvideos',
                                    text: 'Videos',
                                    subLinks: [

                                    ]
                                }
                            ]
                        }
                    ];
                }
                else {
                    new impError.ErrorHandle.ErrorJQ().LogMessage("menu not found");
                }
        }

    }

}