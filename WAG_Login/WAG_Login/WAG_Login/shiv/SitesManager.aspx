<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SitesManager.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.SitesManager" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script src="Library/jquery-1.11.2.min.js"></script>
    <link href="Content/bootstrap.css" rel="stylesheet" />
    <link href="SiteManager.css" rel="stylesheet" />
</head>
<body>
   
    <div>

        <div class="row header">

            <div class="col-xs-4">
                <img class="logo" src="Content/loading/Orange.gif" />

            </div>
            <div class="col-xs-8">


            </div>

        </div>
    
        <div class="site-manager row">
            <div class="col-xs-4 site-manager-header">
                Sites
            </div>
             <div class="col-xs-4 site-manager-header">
                 &nbsp;
            </div>
             <div class="col-xs-4 site-manager-header">
                 <button class=" btn btn-primary create-site">Create New</button>
            </div>

        </div>

    </div>
  
</body>
</html>
