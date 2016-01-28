<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Tools.aspx.cs" Inherits="WAG_Login_Page.shiv.Tools" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>

        <style>
            .insert-tools{
                border:1px double tan;
                border-color:tan;
                display:inline-block;

                background-color:lightgray;

               font: bold 11px "helvetica neue",arial;
            }

            .it{
                padding:15px;
                font-weight:bold;
                display:inline-block;

                border-right:1px solid tan;
                cursor:pointer;
            }

            .it-title{
                padding:15px;
                font-weight:bold;
                background-color:burlywood;
                 display:inline-block;
                 border-right:1px solid tan;
            }

        </style>
    
         <div class="insert-tools">
            <span class="it-title ctx-menu-insert">Tools</span>
            <span class="it-paragraph it ctx-menu-insert">Paragraph</span>
            <span class="it-title it ctx-menu-insert">Title</span>
            <span class="it-link it ctx-menu-insert">Link</span>
            <span class="it-image it ctx-menu-insert">Image</span>
            <span class="it-imageAtext it ctx-menu-insert">Image & Text</span>
            <span class="it-columns it ctx-menu-insert">Columns</span>
            <span class="it-photo-gallery it ctx-menu-insert">Photo Gallery</span>
            <span class="it-video it ctx-menu-insert">Video</span>
            <span class="it-contact-form it ctx-menu-insert">Contact Form</span>
            <span class="it-map it ctx-menu-insert">Map</span>
        </div>


    </div>
    </form>
</body>
</html>
