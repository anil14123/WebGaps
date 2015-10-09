<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="PageManager.aspx.cs" Inherits="WAG_Login_Page.shiv.PageManager" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <link href="../Nestable.css" rel="stylesheet" />
   

    <br />
    <br />
    Site Name :
    <div class="site-name-primary">
        <%:SiteName%>
    </div>

    <input class="input-site-name-primary hide" value="<%:SiteName%> " />


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
            <button class=" btn btn-primary create-page">Create New</button>
        </div>

    </div>

    <hr />

    <%--     <div class="page-data hide">
            <div class="col-xs-4 page-name">
            </div>
            <div class="col-xs-4 page-controls">
            </div>
            <div class="col-xs-4 page-controls">
                <div class=" btn btn-primary edit-page"></div>
            </div>
        </div>--%>


    <div class="page-manager-data row">

        <div class="cf nestable-lists">

            <div class="dd" id="nestable3">

            </div>

        </div>

    </div>

     <ol class="jq-pages-list dd-list hide clonable">
      </ol>

      <li class="jq-page-item dd-item dd3-item  hide clonable" data-id="0">
           <div class="dd-handle dd3-handle">Drag</div><div class="jq-page-item-name dd3-content">Item 13</div>  
      </li>


    <div id="control-create-page" name="links" class="control-page" style="display: none;">

        <div class="close-panel"><span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
        <div class="control-move-area">Create Page</div>

        <div class="control-page-controls">

            <fieldset>
                <div class="legend">
                    Page Name 
                </div>

                <input type="text" class="input-page-name jq-form-control" />

            </fieldset>

        </div>

        <center> <button class="btn btn-primary create-page-button">Create</button> </center>

    </div>




    <div class="loading">
    </div>

    <script data-main="PageManager_TS/app.js" src="/Library/require.js"></script>
    <link href="../SiteManager.css" rel="stylesheet" />

     <script src="../Scripts/Nestable-master/jquery.nestable.js"></script>
</asp:Content>
