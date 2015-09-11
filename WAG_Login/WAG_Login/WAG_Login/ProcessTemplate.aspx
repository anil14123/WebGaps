<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ProcessTemplate.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.ProcessTemplate" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <%--<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>--%>
    <script src="/Library/jquery-1.11.2.min.js"></script>

    <%--<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>--%>
    <script src="/Library/jquery-ui.js"></script>

    <link href="Content/ProcessTemplate/main.css" rel="stylesheet" />
        <script data-main="../TypeScript_ProcessTemplate/app.js" src="/Library/require.js"></script>

    <style>

        html{
            height:100%;
        }

        body{
            min-height:100%;
            height:100%;
        }

    </style>

</head>
<body >
   
    <div style="height:100%; width:100%;">
    
        <div class="search-box">
            <span class="search-lable">Website Url :</span>  <input class="search" value="Themes/abc/index.aspx" type="text" /> <button class="search-button"> GET </button>
        </div>

         <iframe name="wesite-template" class="website-template" frameborder="0" style="overflow:hidden;height:100%;width:100%"></iframe>

    </div>
   
</body>
</html>
