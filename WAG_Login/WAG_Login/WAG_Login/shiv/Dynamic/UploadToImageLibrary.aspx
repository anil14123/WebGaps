<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UploadToImageLibrary.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.Dynamic.UploadToImageLibrary" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <style>
        .action-button {
            background: #0cc74d;
            background-image: -webkit-linear-gradient(top, #0cc74d, #36b82b);
            background-image: -moz-linear-gradient(top, #0cc74d, #36b82b);
            background-image: -ms-linear-gradient(top, #0cc74d, #36b82b);
            background-image: -o-linear-gradient(top, #0cc74d, #36b82b);
            background-image: linear-gradient(to bottom, #0cc74d, #36b82b);
            -webkit-border-radius: 9px;
            -moz-border-radius: 9px;
            border-radius: 9px;
            font-family: Arial;
            color: #ffffff;
            font-size: 15px;
            padding: 10px 20px 10px 20px;
            text-decoration: none;
        }

            .action-button:hover {
                background: #3cb0fd;
                background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
                background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
                background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
                background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
                background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
                text-decoration: none;
            }

        .upload-button {
            position: absolute;
            left: 44%;
            top: 40%;
        }

        .file-upload {
            position: absolute;
            left: 40%;
            top: 20%;
            height: 40px;
            border: 2px solid blue;
            padding: 5px;
        }

        .success {
            padding: 10px;
            background-color: green;
            font-size: larger;
            color: white;
           
            display:none;
        }

        .fail {
            padding: 10px;
            background-color: red;
            font-size: larger;
            color: white;

            
            display:none;
        }

        .result {
            display:none;
        }

        .uploaded-image{
            width:300px;
            height:300px;

            border:3px solid white;
        }

    </style>
      <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

    <script>

        jQuery(document).ready(function () {

            jQuery("#result").delay(1000).fadeIn();
        })

    </script>

</head>
<body style="height:100%; background-color:#3cb0fd">
    <form id="form1" runat="server" >
        <div>
           <center > 
                <asp:Label class="result"   ClientIDMode="Static" ID="result"  runat="server"> </asp:Label>
           </center>

            <asp:Image CssClass="uploaded-image" ID="uploadedImage" runat="server" />

         
            <asp:FileUpload CssClass="file-upload" ID="myFileUpload" runat="server" />

            <asp:Button CssClass="action-button upload-button" Text="Upload Image" OnClick="BtnUpload_Click" ID="BtnUpload" runat="server" />
        </div>
    </form>
</body>
</html>
