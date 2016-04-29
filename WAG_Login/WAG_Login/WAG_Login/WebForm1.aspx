<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WAG_Login_Page.WebForm1" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script src="Scripts/jquery-1.10.2.js"></script>

    <script type="text/html">
    </script>

    <style>
        #interface_bottom {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 36px;
        }

            #interface_bottom #controls_wrap {
                height: 36px;
                background: #000 url('../images/carbon_fiber.png');
                border-top: 1px solid #7c7c7c;
                position: relative;
                z-index: 1;
            }
    </style>

</head>
<body>
    <form id="form1" runat="server">
        <div>

            <div class="root-left-sidebar-menu">

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
