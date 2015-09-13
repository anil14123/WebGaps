<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="PageManager.aspx.cs" Inherits="WAG_Login_Page.shiv.PageManager" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">


      <br />

    Site Name : <div class="site-name-primary"><%: SiteName  %></div>
   
    <br />
    <br />

    <div class="page-manager row">

        <div class="col-xs-4 page-manager-header">
          <span class="page-name-header">Pages</span>
        </div>
        <div class="col-xs-4 page-manager-header">
            &nbsp;
        </div>
        <div class="col-xs-4 page-manager-header">
            <button class=" btn btn-primary create-site">Create New</button>
        </div>

    </div>

    <div class="page-manager-data row">

        <div class="page-data hide">
            <div class="col-xs-4 page-name">
               
            </div>
            <div class="col-xs-4 page-controls">
            </div>
            <div class="col-xs-4 page-controls">
                <button class=" btn btn-primary edit-page">Open</button>
            </div>
        </div>

    </div>


     <script data-main="SiteManager_TS/app.js" src="/Library/require.js"></script>
    <link href="../SiteManager.css" rel="stylesheet" />


</asp:Content>
