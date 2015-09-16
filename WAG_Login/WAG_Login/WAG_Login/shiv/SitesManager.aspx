<%@ Page Title="Site Manager" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="SitesManager.aspx.cs" Inherits="WAG_Login.shiv.SitesManager" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">


    
   

    <br />

   
    <div class="site-manager row">

        <div class="col-xs-4 site-manager-header">
           <span class="site-name-header"> Sites</span> 
        </div>
        <div class="col-xs-4 site-manager-header">
            &nbsp;
        </div>
        <div class="col-xs-4 site-manager-header">
            <button class=" btn btn-primary create-site">Create New</button>
        </div>

    </div>

    <hr />

    <div class="site-data hide">
            <div class="col-xs-4 site-name">
               
            </div>
            <div class="col-xs-4 site-controls">
            </div>
            <div class="col-xs-4 site-controls">
                <div class=" btn btn-primary open-site"></div>
            </div>
        </div>

    <div class="site-manager-data row">

        

    </div>


    <div id="control-create-site" name="links" class="control-page" style="display: none;">

        <div class="close-panel"><span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
        <div class="control-move-area">Create Site</div>

        <div class="control-site-controls">

            <fieldset>
                <div class="legend">
                    Site Name 
                </div>

                <input type="text" class="input-site-name jq-form-control" />

            </fieldset>

        </div>

        <center> <button class="btn btn-primary create-site-button">Create</button> </center>

    </div>


    

     <div class="loading" >
     
     
     </div>

    <script data-main="SiteManager_TS/app.js" src="/Library/require.js"></script>
    <link href="../SiteManager.css" rel="stylesheet" />

</asp:Content>
