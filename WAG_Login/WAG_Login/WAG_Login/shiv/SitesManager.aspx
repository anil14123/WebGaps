<%@ Page Title="Site Manager" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="SitesManager.aspx.cs" Inherits="WAG_Login.shiv.SitesManager" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <br />

   
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

    <div class="site-manager-data row">

        <div class="site-data hide">
            <div class="col-xs-4 site-name">
               
            </div>
            <div class="col-xs-4 site-controls">
            </div>
            <div class="col-xs-4 site-controlsr">
                <button class=" btn btn-primary open-site">Open</button>
            </div>
        </div>

    </div>


     <script data-main="SiteManager_TS/app.js" src="/Library/require.js"></script>


</asp:Content>
