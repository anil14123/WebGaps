<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="WAG_Login_Page.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <style>
        #interface_bottom {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 36px;
        }

            #interface_bottom #controls_wrap {
                height: 36px;
                background: #000 url('/content/images/carbon_fiber.png');
                border-top: 1px solid #7c7c7c;
                position: relative;
                z-index: 1;
            }

                #interface_bottom #controls_wrap #controls {
                    width: 973px;
                    margin: 0 auto;
                    position: relative;
                }

                    #interface_bottom #controls_wrap #controls #controls_nav {
                        height: 32px;
                    }

                        #interface_bottom #controls_wrap #controls #controls_nav menu#leaf_types, #interface_bottom #controls_wrap #controls #controls_nav menu#dockTabs {
                            float: left;
                            margin-top: 6px;
                            margin-left: 20px;
                            font-size: 14px;
                        }

        menu {
            color: #d9d9d9;
        }

        ol, ul, menu {
            list-style: none;
        }

        #interface_bottom #controls_wrap #controls #controls_nav menu#leaf_types li, #interface_bottom #controls_wrap #controls #controls_nav menu#dockTabs li {
            float: left;
            margin-right: 8px;
        }

            #interface_bottom #controls_wrap #controls #controls_nav menu#leaf_types li .leaf_type_btn, #interface_bottom #controls_wrap #controls #controls_nav menu#dockTabs li .leaf_type_btn {
                cursor: pointer;
                display: block;
                text-decoration: none;
                padding: 5px 12px;
                color: #a1a1a1;
                text-shadow: 0 1px 2px #000;
                font-weight: 700;
            }

        a, a:visited {
            text-decoration: none;
            color: #0370a8;
        }

        #interface_bottom #controls_wrap #controls #controls_nav menu#leaf_types li .leaf_type_btn:hover, #interface_bottom #controls_wrap #controls #controls_nav menu#dockTabs li .leaf_type_btn:hover {
            color: #e1e1e1;
        }

        #interface_bottom #controls_wrap #controls #controls_nav menu#leaf_types li.active .leaf_type_btn, #interface_bottom #controls_wrap #controls #controls_nav menu#dockTabs li.active .leaf_type_btn {
            background-color: #797979;
            border: 1px solid #7c7c7c;
            border-top: 1px solid #868686;
            margin-top: -10px;
            padding-top: 13px;
            color: #e1e1e1;
            -moz-border-radius-bottom-left: 3px;
            border-bottom-left-radius: 3px;
            -moz-border-radius-bottom-right: 3px;
            border-bottom-right-radius: 3px;
        }

        #interface_bottom #controls_wrap #controls #controls_nav menu#leaf_types li .leaf_type_btn, #interface_bottom #controls_wrap #controls #controls_nav menu#dockTabs li .leaf_type_btn {
            cursor: pointer;
            display: block;
            text-decoration: none;
            padding: 5px 12px;
            color: #a1a1a1;
            text-shadow: 0 1px 2px #000;
            font-weight: 700;
        }



        /*--------------------------Toaster------------------------*/

        #interface_bottom #toaster {
            width: 973px;
            margin: 0 auto;
            position: relative;
        }

            #interface_bottom #toaster #leaf_dock {
                background: #797979 url('/content/images/controls_ui_bg.png') repeat-x 0 -42px;
                position: absolute;
                bottom: 37px;
                width: 100%;
                height: 42px;
                border-radius:5px;
            }

                #interface_bottom #toaster #leaf_dock #leaf_wrap {
                    position: absolute;
                    bottom: 17px;
                    padding: 10px 10px 0 10px;
                    width: 100%;
                }

                    #interface_bottom #toaster #leaf_dock #leaf_wrap #leaf_container {
                        position: absolute;
                        bottom: -18px;
                        padding-left: 7px;
                        width: 930px;
                    }

                        #interface_bottom #toaster #leaf_dock #leaf_wrap #leaf_container ul.leaf_type {
                            display: none;
                            margin-left: 4px;
                            width: 100%;
                            height: 115px;
                        }

                            #interface_bottom #toaster #leaf_dock #leaf_wrap #leaf_container ul.leaf_type li {
                                width: 93px;
                                height: 128px;
                                padding-bottom: 1px;
                                margin: 0;
                                float: left;
                            }

        .bldr-draggable {
            position: relative;
            background-color: #575757;
            width: 85px;
            height: 93px;
            cursor: move;
            margin: 0 auto;
            padding-top: 16px;
            text-align: center;
            color: #fff;
            border: 1px solid #393939;
            text-shadow: 1px 1px 1px #111;
            box-shadow: inset 0 1px 1px #818181;
            -o-border-radius: 4px;
            border-radius: 4px;
        }

            .bldr-draggable .bldr-drgb_icon {
                width: 71px;
                height: 65px;
                margin: -6px auto 0;
                background-color: #2c2c2c;
                border: 1px solid #6d6d6d;
                border: 1px solid rgba(118,118,118,0.7);
                box-shadow: inset 0 2px 3px rgba(0,0,0,0.5);
            }

        .bldr-drgb_desc-container {
            display: block;
            height: 30px;
            vertical-align: middle;
            line-height: 30px;
        }

        .bldr-draggable .bldr-drgb_desc {
            font: bold 11px "helvetica neue",arial;
            text-align: center;
            display: inline-block;
            margin: 0;
        }

        #interface_bottom #toaster #leaf_dock #leaf_wrap #leaf_container ul.leaf_type.active {
            display: block;
        }

        #interface_bottom #toaster #leaf_dock #leaf_wrap #leaf_container ul.leaf_type {
            display: none;
            margin-left: 4px;
            width: 100%;
            height: 115px;
        }

        #bldr-drgb-text .bldr-drgb_icon span {
            background-position: 16px 6px;
        }

        #bldr-drgb-2-columns .bldr-drgb_icon span {
            background-position: -1023px 6px;
        }

        #bldr-drgb-3-columns .bldr-drgb_icon span {
            background-position: -1114px 6px;
        }

        #bldr-drgb-table .bldr-drgb_icon span {
            background-position: -1205px 6px;
        }

        #bldr-drgb-buckets .bldr-drgb_icon span {
            background-position: -3176px 6px;
        }

        #bldr-drgb-horizontal_rule .bldr-drgb_icon span {
            background-position: -555px 6px;
        }

        #bldr-drgb-spacer .bldr-drgb_icon span {
            background-position: -1730px 6px;
        }

        #bldr-drgb-text .bldr-drgb_icon span {
            background-position: 16px 6px;
        }

        #bldr-drgb-title .bldr-drgb_icon span {
            background-position: -80px 6px;
        }

        #bldr-drgb-image .bldr-drgb_icon span {
            background-position: -173px 6px;
        }

        #bldr-drgb-text_image .bldr-drgb_icon span {
            background-position: -267px 6px;
        }

        #bldr-drgb-2-columns .bldr-drgb_icon span {
            background-position: -1023px 6px;
        }

        #bldr-drgb-photo_gallery .bldr-drgb_icon span {
            background-position: -2535px 6px;
        }

        #bldr-drgb-video .bldr-drgb_icon span {
            background-position: -363px 6px;
        }

        #bldr-drgb-contact_form .bldr-drgb_icon span {
            background-position: -747px 6px;
        }

        #bldr-drgb-google_map .bldr-drgb_icon span {
            background-position: -932px 6px;
        }

        #bldr-drgb-button .bldr-drgb_icon span {
            background-position: -459px 6px;
        }

        #bldr-drgb-2-columns .bldr-drgb_icon span {
            background-position: -1023px 6px;
        }

        #bldr-drgb-3-columns .bldr-drgb_icon span {
            background-position: -1114px 6px;
        }

        #bldr-drgb-table .bldr-drgb_icon span {
            background-position: -1205px 6px;
        }

        #bldr-drgb-buckets .bldr-drgb_icon span {
            background-position: -3176px 6px;
        }

        #bldr-drgb-horizontal_rule .bldr-drgb_icon span {
            background-position: -555px 6px;
        }

        #bldr-drgb-spacer .bldr-drgb_icon span {
            background-position: -1730px 6px;
        }

        #bldr-drgb-photo_gallery .bldr-drgb_icon span {
            background-position: -2535px 6px;
        }

        #bldr-drgb-slideshow .bldr-drgb_icon span {
            background-position: -841px 6px;
        }

        #bldr-drgb-video .bldr-drgb_icon span {
            background-position: -363px 6px;
        }

        #bldr-drgb-audio .bldr-drgb_icon span {
            background-position: -2297px 6px;
        }

        #bldr-drgb-social-links .bldr-drgb_icon span {
            background-position: -1375px 6px;
        }

        #bldr-drgb-twitter-feed .bldr-drgb_icon span {
            background-position: -1586px 6px;
        }

        #bldr-drgb-fb-like .bldr-drgb_icon span {
            background-position: -1448px 6px;
        }

        #bldr-drgb-fb-comments .bldr-drgb_icon span {
            background-position: -1520px 6px;
        }

        #bldr-drgb-follow .bldr-drgb_icon span {
            background-position: -1984px 6px;
        }

        #bldr-drgb-share_button .bldr-drgb_icon span {
            background-position: -2152px 6px;
        }

        #bldr-drgb-paypal .bldr-drgb_icon span {
            background-position: -1895px 6px;
        }

        #bldr-drgb-donate .bldr-drgb_icon span {
            background-position: -1807px 6px;
        }

        #bldr-drgb-webstore_products .bldr-drgb_icon span {
            background-position: -2614px 6px;
        }

        #bldr-drgb-html .bldr-drgb_icon span {
            background-position: -1660px 6px;
        }

        #bldr-drgb-google_map .bldr-drgb_icon span {
            background-position: -932px 6px;
        }

        #bldr-drgb-email_list .bldr-drgb_icon span {
            background-position: -2453px 6px;
        }

        #interface_bottom #toaster #leaf_dock #leaf_wrap:before {
            content: "";
            width: 952px;
            height: 7px;
            position: absolute;
            left: 10px;
            bottom: 0;
            background: transparent url('/content/images/leaf_hole.png') no-repeat 0 0;
        }


        #bldr-drgb-text .bldr-drgb_icon span {
            background-position: 16px 6px;
            background-position-x: 16px;
            background-position-y: 6px;
        }

        .bldr-draggable .bldr-drgb_icon span {
            display: block;
            width: 71px;
            height: 65px;
            background: transparent url('../images/drgb-icons.png') no-repeat -100px -100px;
            background-image: url("../images/drgb-icons.png");
            background-position-x: -100px;
            background-position-y: -100px;
            background-size: initial;
            background-repeat-x: no-repeat;
            background-repeat-y: no-repeat;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: transparent;
        }


        .bldr-draggable .bldr-drgb_icon span {
            display: block;
            width: 71px;
            height: 65px;
            background: transparent url('/content/images/drgb-icons.png') no-repeat -100px -100px;
        }

        .bldr-draggable:before {
            content: " ";
            position: absolute;
            top: -2px;
            left: 50%;
            margin-left: -24px;
            display: block;
            width: 47px;
            height: 16px;
            background: transparent url('/content/images/draggable-handle.png') 0 0;
            background-image: url("/content/images/draggable-handle.png");
            background-position-x: 0px;
            background-position-y: 0px;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: transparent;
        }
    </style>

</head>
<body>
    <form id="form1" runat="server">
        <div>


            <div id="interface_bottom">
                <div id="controls_wrap">
                    <div id="controls">
                        <div id="controls_nav">
                            <menu id="leaf_types">
                                <li data-name="webs.bldr.modules.container.popular" class=""><a class="leaf_type_btn">Popular</a></li>
                                <li data-name="webs.bldr.modules.container.structure" class="active"><a class="leaf_type_btn">Structure</a></li>
                                <li data-name="webs.bldr.modules.container.media" class=""><a class="leaf_type_btn">Media</a></li>
                                <li data-name="webs.bldr.modules.container.social" class=""><a class="leaf_type_btn">Social</a></li>
                                <li data-name="webs.bldr.modules.container.commerce" class=""><a class="leaf_type_btn">Commerce</a></li>
                                <li data-name="webs.bldr.dock.ads.appfeeds" class=""><a class="leaf_type_btn">Other</a></li>
                            </menu>

                        </div>
                    </div>
                    <div id="toaster">
                        <div id="leaf_dock">
                            <div id="leaf_wrap">
                                <div id="leaf_container" class="" style="bottom: -18px;">
                                    <ul class="leaf_type">
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-text">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Paragraph</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-title">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Title</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-image">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Image</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-text_image">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Image &amp; Text</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-2-columns">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Columns</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-photo_gallery">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Photo Gallery</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-video">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Video</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-contact_form">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Contact Form</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-google_map">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Map</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-button">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Button</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="leaf_type active">
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-2-columns">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">2 Columns</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-3-columns">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">3 Columns</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-table">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Table</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-buckets">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Combo</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-horizontal_rule">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Divider</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-spacer">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Spacer</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="leaf_type">
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-photo_gallery">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Photo Gallery</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-slideshow">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Slideshow</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-video">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Video</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-audio">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Audio</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="leaf_type">
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-social-links">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Social Links</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-twitter-feed">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Twitter Feed</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-fb-like">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">FB Like Box</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-fb-comments">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">FB Comments</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-follow">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Follow</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-share_button">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Share</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="leaf_type">
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-paypal">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">PayPal Buy Now</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-donate">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">PayPal Donate</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-webstore_products">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Products</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="leaf_type">
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-html">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Custom HTML</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-google_map">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Map</span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="bldr-draggable" id="bldr-drgb-email_list">
                                                <div class="bldr-drgb_icon"><span></span></div>
                                                <div class="bldr-drgb_desc-container"><span class="bldr-drgb_desc">Subscribe</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="leaf_cover"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </form>
</body>
</html>
