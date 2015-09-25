<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Designer.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.Default" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Gaps</title>


    <script class=" jquery" src="/Library/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" class="add-to-page jquery" src="jquery/jquery-1.11.2.min.js"></script> <%--add to page--%>

    <script src="/Library/jquery-ui.js"></script>

    <link  rel="stylesheet" href="/Content/jquery-ui.min.css"  type="text/css"/>

    <link  rel="stylesheet" type="text/css" href="/Content/bootstrap-3.3.5-dist/css/bootstrap-customzed-48.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" class="add-to-page" href="bootstrap/bootstrap-customzed-48.min.css" />  <%--add to page--%>

    <%--<link class="add-to-page" href="/Content/bootstrap-3.3.5-dist/css/bootstrap.customized.24.min.css" rel="stylesheet" />--%>
    <%--  <script src="Content/bootstrap-3.3.5-dist/js/bootstrap.js"></script>--%>

    <link rel="stylesheet" href="/app.css" type="text/css" />
    <link rel="stylesheet" href="/controls.css" type="text/css" />
    <link href="/ContextMenu.css" type="text/css" rel="stylesheet" />

    <link href="/Themes/457/theme.css" rel="stylesheet" type="text/css" />
    <link class="add-to-page" type="text/css" href="theme/theme.css" rel="stylesheet" type="text/css" /> <%--add to page--%>


    <%--<link href="/Third-Party/jte/jquery-te-1.4.0.css" rel="stylesheet" />--%>
    <link href="../my-jqte.css.css" rel="stylesheet" type="text/css" />


    <link href="/JQte.css" rel="stylesheet" type="text/css" />
    <script src="/Third-Party/jte/uncompressed/jquery-te-1.4.0.js"></script>
    <link href="/Third-Party/colpick-jQuery-Color-Picker-master/css/colpick.css" rel="stylesheet" />
    <link href="/ColorPicker.css" rel="stylesheet" />
    <link href="/Cursors.css" rel="stylesheet" />

    <link href="/Content/Menus/2/blue/menu.css" rel="stylesheet" />

    <script src="/Content/Menus/2/blue/Menu.js"></script>
    <!--javascript text editor-->

    <%--<script data-main="/TypeScript/app.js" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.js"></script>--%>
    <script data-main="TypeScript/app.js" src="/Library/require.js"></script>

    <script src="/Third-Party/colpick-jQuery-Color-Picker-master/js/colpick.js"></script>
    <link href="/designer.css" rel="stylesheet" />
    <link href="/JqPlus.css" rel="stylesheet" />
    <link class="add-to-page"  href="theme/jqplus.css" rel="stylesheet" />
    <link href="/SmartContextMenu.css" rel="stylesheet" />
    <link href="/Text.css" rel="stylesheet" />
    <link href="/DesignerPaddings.css" rel="stylesheet" />
    <link href="/EmptyLayout.css" rel="stylesheet" />
    <link href="/Loading.css" rel="stylesheet" />
    <link href="/MediaQueries.css" rel="stylesheet" />

    <style>
        #firstTimeHelp {
            border-radius: 5px;
            background-color: black;
            color: white;
            border: 5px solid #616ed1;
            -moz-box-shadow: black 8px 8px;
            -webkit-box-shadow: black -8px -8px;
            box-shadow: black 8px 8px;
            z-index: 999999999;
        }
    </style>

</head>
<body>

    <div class="loading hide clonable" style="padding: 0;">
        <img class="loading-img" src="/Content/loading/colors.gif" alt="Loading..." />
    </div>

    <div class="jq-loading">
    </div>

    <input class="input-page-name hide" value="<%:PageName%>" />
    <input class="input-site-name hide" value="<%:SiteName%>" />
    <input class="input-site-id hide" value="<%:SiteId%>" />
    <input class="input-current-location hide" value="/services" />

    <div class="jq-plus-container jq-plus-container-not-used">

        <div class="row">
            <div class="jq-plus-element">

                <%--  <span class="jq-plus-prev jq-plus">
             <br /> Swap sample
            </span>--%>

                <span class="jq-plus-prev jq-plus">+
                </span>
            </div>

        </div>

        <div class="jq-plus-content jq-plus-element-content"></div>


        <div class="jq-plus-element">
            <%-- <span class="jq-plus-next jq-plus">
             <br /> Swap sample
            </span>--%>
            <span class="jq-plus-next jq-plus">+
            </span>
        </div>
    </div>



    <div id="sm" class='smart-menu'>
        <center><div class="smart-menu-collapse-close smart-menu-collapse"></div></center>
        <div id="sm-controls" class='smart-menu-controls smart-menu-height-width'>
            <table class='smart-menu-controls-table jq-drag-cancle'>
                <tr>
                    <td>Height </td>
                    <td>: </td>
                    <td>
                        <input maxlength='4' type='text' class='smart-menu-height smart-menu-control' />
                        px</td>
                </tr>
                <tr>
                    <td>Width </td>
                    <td>: </td>
                    <td>
                        <input maxlength='4' type='text' class='smart-menu-width smart-menu-control' />
                        px  </td>
                </tr>
                <tr>

                    <td colspan="3" align="center" style="padding: 4px;">
                        <button class="action-button smart-menu-button-apply">Apply</button></td>

                </tr>
            </table>

        </div>
        <center><div class="smart-menu-collapse-show smart-menu-collapse hide"></div></center>
    </div>




    <div id="notify">notify </div>
    <div id="firstTimeHelp">
        <center><b>Help :</b></center>
        1) Click to Select Elements.<br />
        2) Right click for Menu.
        <br />
        <span class=" visible-xs">Double click on Phone for Menu</span>
    </div>
    <span id="noelement22"></span>


    <div class="top-row-container">

        <div class="row designer-top-row">

            <div class="col-xs-48">
                <button class=" create-layout-show-button jq-save-margin btn btn-toolbar btn-xs">
                    <img alt="" class="layout-img" src="/content/layout/layout.png" />
                    Layout</button>



                <button class=" close-preview jq-save-margin  btn btn-toolbar btn-xs">
                    <img alt="" class="preview-img" src="/content/preview/preview.png" />
                    Close Preview</button>
                <button class=" show-preview jq-save-margin btn btn-toolbar btn-xs">
                    <img alt="" class="preview-img" src="/content/preview/preview.png" />
                    Preview</button>
                <a href="#" target="_blank" style="background-color: buttonface; color: black;" class="anchor-show-live-preview jq-save-margin btn btn-toolbar btn-xs">
                    <img alt="" class="preview-img" src="/content/preview/preview.png" />
                    Live Preview
                </a>


                <button class="btn btn-toolbar btn-xs  jq-show-plus " style="margin: 5px;">
                    Show [+]</button>
                <button class="btn btn-toolbar  btn-xs jq-hide-plus display-none" style="margin: 5px;">
                    Hide [+]</button>


                <button class="jq-undo-buttons jq-save-margin jq-undo btn btn-toolbar btn-xs">
                    <img alt="" class="undo-img" src="/content/undo/undo.png" />
                    Undo</button>
                <button class="jq-undo-buttons jq-save-margin  jq-redo btn btn-toolbar btn-xs">
                    Redo
                    <img alt="" class="undo-img" src="/content/undo/redo.png" /></button>

                <button class="jq-save jq-save-margin btn btn-toolbar btn-xs">
                    <img alt="" class="save-img" src="/content/save/save.png" />
                    Save</button>

                <button class="page-propetries-button  btn btn-toolbar btn-xs jq-save-margin">
                    <img alt="" class="settings-img" src="/content/settings/settings.png" />
                    Page</button>
                <button class="properties-button  btn btn-toolbar btn-xs btn jq-save-margin">
                    <img alt="" class="settings-img" src="/content/settings/settings.png" />
                    Properties

                </button>

                <span id="control-align" class="control-drag-anywhere" style="background-color: black; border: 2px solid #1885A9; display: inline-block; padding: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px;">

                    <span style="color: white; background-color: black; padding: 5px;">Align : 

                    </span>

                    <button class="button-align-left  btn btn-toolbar btn-xs btn jq-save-margin">
                        Left</button>

                    <button class="button-align-right  btn btn-toolbar btn-xs btn jq-save-margin">
                        Right</button>

                    <button class="button-align-center  btn btn-toolbar btn-xs btn jq-save-margin">
                        Center</button>
                </span>

                <span id="control-object-move" class="control-drag-anywhere" style="background-color: black; border: 2px solid #1885A9; display: inline-block; padding: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px;">
                    <span style="color: white; background-color: black; padding: 5px;">Move : </span>

                    <button class="button-move-left  btn btn-toolbar btn-xs btn jq-save-margin">
                        Left</button>

                    <button class="button-move-right  btn btn-toolbar btn-xs btn jq-save-margin">
                        Right</button>

                       <%-- 
                        
                        <button class="button-move-up  btn btn-toolbar btn-xs btn jq-save-margin">
                        Up</button>

                        <button class="button-move-down  btn btn-toolbar btn-xs btn jq-save-margin">
                        Down </button>
                      
                      --%>
                </span>

                <div class="float-right">

                    <div class="float-left">
                        <form name="logout" runat="server">
                            <asp:LoginStatus runat="server" class="jq-logout btn btn-darkest" LogoutAction="Redirect" LogoutText="Log off" LogoutPageUrl="~/" OnLoggingOut="Unnamed_LoggingOut" />
                        </form>
                    </div>

                    <button class="btn btn-darkest btn-help ">Help</button>


                </div>


              <div class="editor">
                            <div class="jqte-toolbar">



                                <button tabindex="-1" class="font-icon jqte-editor-tool-p" name="font"></button>
                                <ul tabindex="-1" class="font-name-list font-name jqte-editor-tool-list">
                                    <li>
                                        <button class="jqte-editor-tool-c" value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="Georgia, serif">Georgia, serif</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="'Times New Roman', Times, serif">"Times New Roman", Times, serif</button></li>
                                </ul>
                                <button tabindex="-1" class="font-size-icon jqte-editor-tool-p" name="font-size"></button>
                                <ul tabindex="-1" class="font-size-list font-size jqte-editor-tool-list">
                                    <li>
                                        <button class="jqte-editor-tool-c" value="1">1</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="2">2</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="3">3</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="4">4</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="5">5</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="6">6</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="7">7</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="8">8</button></li>

                                    <li>
                                        <button class="jqte-editor-tool-c" value="10">10</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="11">11</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="12">12</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="13">13</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="14">14</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="15">15</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="16">16</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="17">17</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="18">18</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="19">19</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="20">20</button></li>

                                    <li>
                                        <button class="jqte-editor-tool-c" value="25">25</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="26">26</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="27">27</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="28">28</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="29">29</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="30">30</button></li>

                                    <li>
                                        <button class="jqte-editor-tool-c" value="35">35</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="36">36</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="37">37</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="38">38</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="39">39</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="40">40</button></li>

                                    <li>
                                        <button class="jqte-editor-tool-c" value="45">45</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="46">46</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="47">47</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="48">48</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="49">49</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="50">50</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="55">55</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="56">56</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="57">57</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="58">58</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="59">59</button></li>

                                    <li>
                                        <button class="jqte-editor-tool-c" value="60">60</button></li>


                                    <li>
                                        <button class="jqte-editor-tool-c" value="70">70</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="80">80</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="90">90</button></li>
                                    <li>
                                        <button class="jqte-editor-tool-c" value="100">100</button></li>
                                </ul>
                                <button class="bold-icon jqte-editor-tool" name="bold"></button>
                                <button class="italic-icon jqte-editor-tool" name="italic"></button>
                                <button class="underline-icon jqte-editor-tool" name="underline"></button>
                                <button class="strike-icon jqte-editor-tool" name="strike"></button>
                                <button class="fore-color-icon color-tool jqte-editor-tool" name="fore-color"></button>
                                <div class="jqte-color-palette jqte-editor-tool-list">
                                    <button class="jq-color jq-color-1"></button>
                                    <button class="jq-color jq-color-2"></button>
                                    <button class="jq-color jq-color-3"></button>
                                    <button class="jq-color jq-color-4"></button>
                                    <button class="jq-color jq-color-5"></button>
                                    <button class="jq-color jq-color-6"></button>
                                    <button class="jq-color jq-color-7"></button>
                                    <button class="jq-color jq-color-8"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-9"></button>
                                    <button class="jq-color jq-color-10"></button>
                                    <button class="jq-color jq-color-11"></button>
                                    <button class="jq-color jq-color-12"></button>
                                    <button class="jq-color jq-color-13"></button>
                                    <button class="jq-color jq-color-14"></button>
                                    <button class="jq-color jq-color-15"></button>
                                    <button class="jq-color jq-color-16"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-17"></button>
                                    <button class="jq-color jq-color-18"></button>
                                    <button class="jq-color jq-color-19"></button>
                                    <button class="jq-color jq-color-20"></button>
                                    <button class="jq-color jq-color-21"></button>
                                    <button class="jq-color jq-color-22"></button>
                                    <button class="jq-color jq-color-23"></button>
                                    <button class="jq-color jq-color-24"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-25"></button>
                                    <button class="jq-color jq-color-26"></button>
                                    <button class="jq-color jq-color-27"></button>
                                    <button class="jq-color jq-color-28"></button>
                                    <button class="jq-color jq-color-29"></button>
                                    <button class="jq-color jq-color-30"></button>
                                    <button class="jq-color jq-color-31"></button>
                                    <button class="jq-color jq-color-32"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-33"></button>
                                    <button class="jq-color jq-color-34"></button>
                                    <button class="jq-color jq-color-35"></button>
                                    <button class="jq-color jq-color-36"></button>
                                    <button class="jq-color jq-color-37"></button>
                                    <button class="jq-color jq-color-38"></button>
                                    <button class="jq-color jq-color-39"></button>
                                    <button class="jq-color jq-color-40"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-41"></button>
                                    <button class="jq-color jq-color-42"></button>
                                    <button class="jq-color jq-color-43"></button>
                                    <button class="jq-color jq-color-44"></button>
                                    <button class="jq-color jq-color-45"></button>
                                    <button class="jq-color jq-color-46"></button>
                                    <button class="jq-color jq-color-47"></button>
                                    <button class="jq-color jq-color-48"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-49"></button>
                                    <button class="jq-color jq-color-50"></button>
                                    <button class="jq-color jq-color-51"></button>
                                    <button class="jq-color jq-color-52"></button>
                                    <button class="jq-color jq-color-53"></button>
                                    <button class="jq-color jq-color-54"></button>
                                    <button class="jq-color jq-color-55"></button>
                                    <button class="jq-color jq-color-56"></button>
                                    <div class="jq-color-saperator"></div>
                                    <button class="jq-color jq-color-57"></button>
                                    <button class="jq-color jq-color-58"></button>
                                    <button class="jq-color jq-color-59"></button>
                                    <button class="jq-color jq-color-60"></button>
                                    <button class="jq-color jq-color-61"></button>
                                    <button class="jq-color jq-color-62"></button>
                                    <button class="jq-color jq-color-63"></button>
                                    <button class="jq-color jq-color-64"></button>


                                </div>
                                <button class="back-color-icon  color-tool jqte-editor-tool" name="back-color"></button>
                                <button class="bullet-icon jqte-editor-tool" name="bullet"></button>
                                <button class="number-icon jqte-editor-tool" name="number"></button>
                                <button class="left-icon jqte-editor-tool" name="left"></button>
                                <button class="right-icon jqte-editor-tool" name="right"></button>
                                <button class="center-icon jqte-editor-tool" name="center"></button>
                                <button class="full-icon jqte-editor-tool" name="full"></button>
                                <button class="left-indent-icon jqte-editor-tool" name="outdent"></button>
                                <button class="right-indent-icon jqte-editor-tool" name="indent"></button>
                                <button class="link-icon jqte-editor-tool" name="link"></button>
                                <button class="unlink-icon jqte-editor-tool" name="unlink"></button>
                                <button class="clear-icon jqte-editor-tool" name="clear"></button>

                                <div class="jqte-link jqte-editor-tool-list">
                                    &nbsp;&nbsp; Web Address :
                    <input type="text" value="http://" class="link-window-url" />
                                    <button class="editor-create-link" style="margin: 2px;">Insert</button>
                                </div>
                            </div>
                        </div>
   
            </div>
        </div>

    </div>
    <rootx style="clear: both; position: relative;">

        <Page class="add-to-page" unique-id="0" class="page" >
            
           
            <div key-css="jq-Header" unique-id="1" style="min-height: 100px;" scopeId="root-1" class="jq-Header key root-elements  jq-back-Header jq-additional-Header design-row row page-element jqMargin-0 " style="">
                <span class="page-static-element">Header</span>

            </div>

            <div key-css="jq-MenuBar" style=" min-height: 60px;"  unique-id="2" scopeId="root-2" class="jq-MenuBar key root-elements jq-back-MenuBar jq-additional-MenuBar design-row  row page-element jqMargin-0 " style="">
                <span class="page-static-element">Menu Bar</span>

            </div>


            <div key-css="jq-Content" style="min-height: 500px;" unique-id="3" scopeId="root-3" class="clear key root-elements  jq-Content jq-back-Content jq-additional-Content design-row  row page-element jqMargin-0 " style="">
               <span class="page-static-element">Body</span>

            </div>


            <div key-css="jq-Footer" style=" min-height: 74px;" unique-id="4" scopeId="root-4" class="jq-Footer key root-elements jq-back-Footer jq-additional-Footer design-row  row page-element jqMargin-0 " style="">
                <span class="page-static-element">Footer</span>
                
            </div>

        </Page>

        <div class="controls-pinned-wrapper control-properties jq-properties-all forced-hide control-active-properties" style="display:none;" > 
             <div class="control-move-area">Properties</div>
            <PinnedControls style="" class="controls-pinned">
        
                <br />

                <%-- <div class="controls-add-columns" style="width:auto;">

                      <fieldset class="clear row">

                                <div class="col-xs-4"> 
                            <div class="legend ">
                               Columns 
                            </div>
                                    </div>

                          <div class="col-xs-8">
                <div class="control-columns-roots">
                        <div class="row" style="outline:none;">
                            <div class="control-columns col-xs-1" id="column1" data-number="1" data-set="0"></div>
                            <div class="control-columns col-xs-1 " id="column2" data-number="2" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="3" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="4" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="5" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="6" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="7" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="8" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="9" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="10" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="11" data-set="0"></div>
                            <div class="control-columns col-xs-1" id="column2" data-number="12" data-set="0"></div>
                        </div>
                </div>

                              </div>
                                    

                          </fieldset>
                       </div>

                <hr />--%>
           
                  <div class="smart-menu-controls-table" style="width:auto;">
                    <center>
                      
                           <%-- <div class="page-name legend ">
                               
                            </div>--%>
                           
                            <fieldset class="clear row">

                                <div class="col-xs-16"> 
                            <div class="legend ">
                               Height 
                            </div>
                                    </div>
                             
                                <div class="col-xs-32 control-p">
                                    <input class='smart-menu-height smart-menu-control'  />
                                   
                               </div>
                            </fieldset>

                             <fieldset class="clear row">

                                 <div class="col-xs-16">
                            <div class="legend ">
                               Width 
                            </div>
                                     </div>
                            
                                 <div class="col-xs-32 control-p">
                                  <input class='smart-menu-width smart-menu-control'   />
                      
                        
                                     </div>
                            </fieldset>

                     
                    </center>

                    
                </div>

                 <hr />

                  <div class="control-color-controls">
                   
                        <fieldset class="clear ">

                           <%-- <div class="page-name legend ">
                               
                            </div>--%>
                           
                          
                            <fieldset class="clear row ">

                                <div class="col-xs-16">
                            <div class="legend ">
                               Foreground 
                            </div>
                                    </div>

                                <div class="col-xs-32">
                                   # <input type="text" value="000000" class="control-color-foreground-color fb-color-picker" />
                                    </div>
                            </fieldset>

                             <fieldset class="clear row">

                                 <div class="col-xs-16">
                            <div class="legend ">
                               Background 
                            </div>
                                     </div>

                                 <div class="col-xs-32">
                                   # <input type="text" value="90bd64" class="control-color-background-color fb-color-picker" />
                                     </div>
                            </fieldset>

                          

                            

                        </fieldset>
                    
                    
                </div>

                <hr />

                <%--                
                     <div class="control-border-controls">
                      <fieldset class="clear row">

                                 <div class="col-xs-16">
                            <div class="legend ">
                               Font 
                            </div>
                                     </div>

                           <div class="col-xs-32"> 
                              
                              <select class="ddn-control ddn-font-lists ddn-font-pinned" ></select> 
                              <%-- <div class="ddn-font-lists-sample-pinned"></div>
                               <select class="ddn-control ddn-font-size ddn-font-size-pinned" ></select> 
                               

                            </div>
                      </fieldset>
                    </div>
                    <hr />
                --%>

                  <div class="control-border-controls">
                   

                     <fieldset class="clear row">

                                 <div class="col-xs-16">
                            <div class="legend ">
                               Border 
                            </div>
                                     </div>

                         <div class="col-xs-20"> 
                       <input class="control-border-thickness-all control-border-thickness"  />

                             </div>

                         <div class="col-xs-12">
                        <input type="text" id="color-picker" value="000000" class="color-picker color-picker-all"></input>

                             </div>

                         </fieldset>
                   </div>
                    
                

<%--            dsas
                fdasd
                a
                sdfa
                sda
--%>


            </PinnedControls>
        </div>
    </rootx>

    <controls>

        <!------------------------------- Templates ----------------------------------->

        <div id="control-templates" name="templates" class="control-page control-templates control-active"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();jQuery('.control-page').removeClass('control-active');">X</span> </div>
            <div class="control-move-area">Layout</div>
             
            <fieldset class="clear" style="width:100%; height:360px;  overflow:auto;">
             
                <div class="empty-layout-templates clear">



                </div>

            </fieldset>

             <div class="controls-action">
                   <button class="action-button action-button-template-choose">Choose Templates</button>  <button class="action-button action-button-layout-create">Create Layout</button>
                </div>
        </div>


        <!------------------------------- Add a Row ------------------------------------>

        <div id="control-add-row" name="add-row" class="control-page" >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Add Columns</div>
             <!--<div class="help">
                <span class="help-field"> Required Fields </span>  : <span class="help-symbol help-symbol"> * </span>
            </div>-->

            <fieldset class="clear" style="min-width:410px;">
               <%-- <div class="page-name legend ">
                    
                </div>--%>

                <div class="control-columns-roots">
                        <div class="row" style="outline:none;">
                            <div class="control-columns col-xs-4" id="column1" data-number="4" data-set="0"></div>
                            <div class="control-columns col-xs-4 " id="column2" data-number="8" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="12" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="16" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="20" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="24" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="28" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="32" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="36" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="40" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="44" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="48" data-set="0"></div>
                        </div>
                </div>

               <%-- <div class="control-column-height jq-drag-cancle">

                    <fieldset>
                        <div class="legend">Column <br /></div>
                        <input id="colHeightControl" type="range" min="0" step="2" max="500" />

                        <div>
                            Minimum Height : <span id="colHeightControlValue"></span>
                        </div>

                    </fieldset>
                </div>--%>

               <%-- <div class="control-row-height jq-drag-cancle">


                    <fieldset>
                        <div class="legend">Row <br /></div>
                        <input id="heightControl" type="range" min="0" step="2" max="500" />

                        <div>
                            Minimum Height : <span id="heightControlValue"></span>
                        </div>

                    </fieldset>
                </div>--%>

               

            </fieldset>

             <%--<div class="controls-action">
                    <button class="action-button action-button-reset-add-row" id="btnResetAddRowControls">Reset</button> <button class="action-button action-button-add-row">Add</button>
                </div>--%>
        </div>

        <!------------------------------ image library --------------------------------->

        <div id="control-image-library" name="image-library" class="control-page"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">images</div>
            
              <fieldset class="clear">
                
                     <div class=" legend float-left">
                             Paste Image Url 
                            </div>

                <input type="text" class="input-sm  internet-image-url" />
                
                </fieldset>

                                     <center><b>OR</b></center>

                        <fieldset class="clear">

                          <div class=" legend ">
                              Library
                            </div>

                            <div id="imageLibrary" class="image-library">
                                
                                 <img class="loading" src="Content/loading/colors.gif" />
                            
                            </div>

                           

                        </fieldset>

                      <div class="controls-action"> 
                       <a href="/shiv/Dynamic/UploadToImageLibrary.aspx" target="_blank" class="action-button action-link action-button-image-upload">Upload Image</a>
                            <button class="action-button action-button-insert-image">Insert</button>
                       </div>
                    
          
        </div>

            <!------------------------------ menu control --------------------------------->

        <div id="control-menu" name="control-menu" class="control-menu control-page"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Menus</div>
            
                        <fieldset class="clear">

                           <%-- <div class="page-name legend ">
                              
                            </div>--%>

                            <div id="control-menu-styles" class="control-menu-styles">
                                
                                
                            
                            </div>

                           

                        </fieldset>

                      <div class="controls-action"> 
                           <button class="action-button control-menu-prev">Previous</button>
                       <button class="action-button control-menu-next">Next</button>
                            <button class="action-button control-menu-insert">Insert</button>
                       </div>
                    
          
        </div>

        <!------------------------------ Height Width ---------------------------------->

        <div id="control-height-width" name="height-width" class="control-page " >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Height & Width</div>
            <div class="row" style="outline:none; border:none;">
                <div class="col-xs-48">
                   
                       
                          <div id="sm-controls" class='hw-menu-controls smart-menu-controls-table smart-menu-height-width'>

                               
            <fieldset class="clear ">
              
                            <div class="legend ">
                               Height 
                            </div>
             
                <div style="margin:5px;">
                        <input class='smart-menu-height smart-menu-control'  />
                      </div>
                </fieldset>

                   <fieldset class="clear ">

                            <div class="legend ">
                               Width 
                            </div>
                       <div style="margin:5px;">
                        <input class='smart-menu-width smart-menu-control' />
                        </div>
                        
                     </fieldset>
           
       

        </div>

                       
                 
                </div>
            </div>
        </div>

        
        <!------------------------------   Links  --------------------------------------->

        <div id="control-insert-link" name="color" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Insert Link</div>
           
                <div class="control-insert-link-controls">
                    <center>
                      
                           <%-- <div class="page-name legend ">
                               
                            </div>--%>
                           
                            <fieldset class="clear ">

                            <div class="legend ">
                               Your Links 
                            </div>

                            <div style="margin:5px;">

                                  <select class="ddn-control ddn insert-link-links"></select>

                                &nbsp;&nbsp; Name:  <input type="text" class="insert-link-name" />

                            </div>

                            </fieldset>

                        <fieldset class="clear ">

                            <div class="legend ">
                               External Link
                            </div>

                            <div style="margin:5px; text-align:left">

                                <div class="row">
                                <div class="col-xs-10">Url </div>  <div class="col-xs-36"> <input type="text" id="insert-internet-link-url" /></div>
                                </div>

                                <div class="row">
                                <div class="col-xs-10">Name </div> <div class="col-xs-36"> <input type="text" id="insert-internet-link-name" /></div>
                                </div>
                            </div>
                          

                            </fieldset>

                             <fieldset class="clear ">

                            <div class="legend ">
                               Preview 
                            </div>
                                  <div style="margin:5px;">
                                      <div class="insert-link-preview">

                                      </div>

                                    

                                  </div>

                            </fieldset>

                        
                             <fieldset class="clear ">

                            <div class="legend ">
                               Colors 
                            </div>
                                  <div style="margin:5px;">
                                     <div>
                                          
                                        
                                          <button class="btn-style-selected btn-style btn btn-default" btn-style="btn-default">&nbsp;</button>
                                          <button class="btn-style btn btn-primary " btn-style="btn-primary">&nbsp;</button>
                                          <button class="btn-style btn btn-success" btn-style="btn-success">&nbsp;</button>
                                          <button class="btn-style btn btn-info" btn-style="btn-info">&nbsp;</button>
                                          <button class="btn-style btn btn-warning" btn-style="btn-warning">&nbsp;</button>
                                          <button class="btn-style btn btn-danger" btn-style="btn-danger">&nbsp;</button>
                                          <button class="btn-style btn btn-link" btn-style="btn-link">&nbsp;</button>
                                          <button class="btn-style btn btn-darkest" btn-style="btn-darkest">&nbsp;</button>
                                      </div>
                                  </div>

                            </fieldset>
                         


                    </center>
                     <div class="controls-action"> 
                     
                            <button class="action-button action-button-insert-link">Insert</button>
                       </div>
                    
                </div>
        </div>



        <!------------------------------   Color  --------------------------------------->

        <div id="control-color" name="color" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Color</div>
           
                <div class="control-color-controls">
                    <center>
                      
                           <%-- <div class="page-name legend ">
                               
                            </div>--%>
                           
                            <fieldset class="clear ">

                            <div class="legend ">
                               Foreground 
                            </div>
                                   # <input type="text" value="000000" class="control-color-foreground-color fb-color-picker" />

                            </fieldset>

                             <fieldset class="clear ">

                            <div class="legend ">
                               Background 
                            </div>
                                   # <input type="text" value="90bd64" class="control-color-background-color fb-color-picker" />

                            </fieldset>

                            <fieldset class="clear row">

                                 
                            <div class="legend ">
                               Gradient 
                            </div>
                                     
                                 <input type="text" value="90bd64" class="control-color-gradient-color-1 fb-color-picker-gradient" />
                                
                                <input type="text" value="90bd64" class="control-color-gradient-color-2 fb-color-picker-gradient" />
                                
                                
                                <button class="remove-gradient" style="margin:2px;" >Clear</button>
                            </fieldset>

                    </center>

                    
                </div>
        </div>

   
        <!------------------------------ Bi Image Lib ------------------------------------>
        
           <div id="control-image-bi-library" name="bi-image-library" class="control-page"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">images</div>
            
                        <fieldset class="clear">

                           <%-- <div class="page-name legend ">
                              
                            </div>--%>

                            <div id="imageLibrary" class="image-library">
                                
                               <img class="loading" src="Content/loading/colors.gif" />
                            
                            </div>

                           

                        </fieldset>

                      <div class="controls-action"> 
                       <a href="/Dynamic/UploadToImageLibrary.aspx" target="_blank" class="action-button action-link action-button-image-upload">Upload Image</a>
                            <button class="action-button action-button-insert-bi-image">Insert</button>
                       </div>
                    
          
        </div>

        <!------------------------------- Background Image ------------------------------>
        
          <div id="control-bi" name="bi" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Background Image</div>
           
                <div class="control-bi-controls">
                   
                      
                           <%-- <div class="page-name legend ">
                               
                             </div>--%>
              

                           
                            <fieldset class="clear ">

                                <div class="legend ">
                                   Background Image 
                                </div>
                                  <div class="cntrls">
                                <input class="bi-selected-image" type="text" />

                                <button class="bi-browse" > Browse</button>
                                     <center><b>OR</b></center>
                                        <div class="float-left">
                             Paste Image Url 
                            </div>

                      <input type="text" class="input-sm  internet-bi-image-url" />

                                   

                                      </div>
                            </fieldset>

                             <fieldset class="clear ">

                                <div class="legend ">
                                    Repeat
                                </div>
                                  <div class="cntrls">
                                 <select class="ddn-control ddn-bi-repeat">
                                      <option selected value="repeat">Repeat</option>
                                      <option value="no-repeat">No Repeat</option>
                                      <option value="repeat-x">Repeat-X</option>
                                      <option value="repeat-y">Repeat-Y</option>
                                      <option value="round">Round</option>
                                      <option value="space">Space</option>
                                 </select>
                                      </div>
                            </fieldset>

                            <fieldset class="clear row">

                                 
                                <div class="legend ">
                                   Attachment 
                                </div>
                                     <div class="cntrls">
                                <select class="ddn-control ddn-bi-attachment">
                                      <option selected value="scroll">Scroll</option>
                                      <option value="fixed">Fixed</option>
                                      <option value="local">Local</option>
                                 </select>
                                         </div>

                            </fieldset>

                             <fieldset class="clear row">

                                 
                                <div class="legend ">
                                   Position 
                                </div>
                                 <div class="cntrls">
                                  <select class="ddn-control ddn-bi-position">
                                    
                                      <option selected value="0% 0%">Left Top</option>
                                      <option value="0% 50%">Left Center</option>
                                      <option value="0% 100%">Left Bottom</option>
                                      <option value="100% 0%">Right Top</option>
                                      <option value="100% 50%">Right Center</option>
                                      <option value="100% 100%">Right Bottom</option>
                                      <option value="50% 0%">Center Top</option>
                                      <option value="50% 50%">Center Center</option>
                                      <option value="50% 100%">Center Bottom</option>
                                 </select>
                                     </div>
                            </fieldset>

                        <fieldset class="clear row">

                                 
                                <div class="legend ">
                                   Height * Width 
                                    
                                    <select class="ddn-control ddn-bi-pixel-type">
                                      <option selected value="px">px</option>
                                      <option value="%">%</option>
                                 </select>

                                    <button class="btn btn-default make-100">Cover 100%</button>

                                </div>
                        
                            <div class="row">

                                 <div class="bi-h-w col-xs-24" >
                                     <input class='smart-menu-bi-height smart-menu-bi-control' />  
                        
                                    
                                 </div>

                                <div class="bi-h-w col-xs-24" >
                                    <input class='smart-menu-bi-width smart-menu-bi-control' />
                        
                                    
                                </div>
                            </div>

                         </fieldset>
                    
                </div>
        </div>
        

        <!------------------------------   Border  -------------------------------------->

         <div id="control-border" name="border" class='control-border control-page' >
           
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
             <div class="control-move-area">Border</div>
           
                <div class="control-border-controls">
                    <center>
                       
                            <%--<div class="page-name legend ">
                               
                            </div>--%>

                            <div class="">
                                <fieldset class="clear">
                                  
                        
                                    <div clas="row">
                                        <div class="col-xs-24">

                                            <div class="row border-thickness-padding-row border-all-divider">

                                                <div class="col-xs-16">All:</div>
                                                <div class="col-xs-32">

                                                     <input class="control-border-thickness-all control-border-thickness" />

                                                </div>

                                            </div>

                                            <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-16">Left: </div>
                                                 <div class="col-xs-32">

                                                    <input class="control-border-thickness-left control-border-thickness" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced" >

                                                <div class="col-xs-16">Right:</div>
                                                  <div class="col-xs-32">
                                                    <input class="control-border-thickness-right control-border-thickness"  />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-16">Top:</div>
                                                 <div class="col-xs-32">

                                                      <input class="control-border-thickness-top control-border-thickness" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-16">Bottom:</div>
                                                  <div class="col-xs-32">

                                                     <input class="control-border-thickness-bottom control-border-thickness"  />
                                                    
                                                </div>

                                            </div>

                                            

                                        </div>
                                        <div class="col-xs-24">
                                     
                                             <div class="row border-color-padding-row border-all-divider">
                                             
                                                 <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-all"></input>

                                                 </div>
                                                 
                                              
                                              
                                                 
                                                
                                                  </div>
                                            <div class="row border-color-padding-row jq-border-advanced">
                                              
                                                 <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-left"></input>

                                                 </div>
                                                 
                                              
                                              


                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-right"></input>

                                                 </div>
                                                 
                                             
                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-top"></input>

                                                 </div>
                                                 
                                              
                                                
                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-bottom"></input>

                                                 </div>
                                                 
                                              
                                           
                                                 </div>
                                               </div>

                                             <div class="row border-thickness-padding-row ">

                                                <div class="col-xs-16">Border Corner Round:</div>
                                                  <div class="col-xs-20">

                                                     <input class="control-border-thickness-radius " />
                                                     
                                                </div>

                                            </div>
                                             
                                        </div>
                                       
                                    </div>        

                         
                            

                                <%-- <fieldset class="clear">
                                    
                                     <div class="legend ">
                                        Border Style
                                      </div>
                                 
                                      <div class="border-solid border-style control-border-style-selected" style-name="solid" ></div>
                                       <div class="border-dotted border-style " style-name="dotted" ></div>
                                   
                                   </fieldset>--%>

                           

                      

                         <div class="controls-action">
                
                           <a class="border-advanced-show" style="font-weight:bold;" href="#">Advanced</a> 
                         
                         </div>

                        

                    </center>
                </div>
          </div>
    
          <!------------------------------ Insert clipborad ------------------------------------>

         <div id="control-insert-clipboard" name="insert-clipborad" class="control-page" style="">
          
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Image Url</div>
            <div class="row" style="border:none; outline:none;">
                <div class="col-xs-48">
                    <fieldset class="clear">

                        <div class="page-name legend ">
                            Paste Below
                        </div>

                          <div class="jq-clipboard" contenteditable="true">

                          </div>
                       

                    </fieldset>
                </div>
            
            </div>

        </div>

       
     <!------------------------------ Insert Html ------------------------------------>

        <div id="control-insert-html" name="insert-html" class="control-page" style="">
          
             <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Insert Html/Css/Script</div>
            <div class="row" style="border:none; outline:none;">
                <div class="col-xs-48">
                    <fieldset class="clear">

                        <textarea class="input-html" style=" min-height:200px; min-width:250px; border:1px solid black; border-radius:5px;" >
  </textarea>
                    </fieldset>
                </div>
        
            </div>

            <div class="controls-action">
                <button class="action-button action-button-insert-html-clear">Clear</button>
                <button class="action-button action-button-insert-html">Insert</button>
            </div>
        </div>

        <!------------------------------ Insert Text ------------------------------------>

        <div id="control-insert-text" name="insert-text" class="control-page" style="">
          
            <div class="close-panel"> <span class="close-button">X</span> </div>
            <div class="control-move-area">Insert Text</div>
            <div class="row" style="border:none; outline:none;">
                <div class="col-xs-48">
                    <fieldset class="clear">

                        <%--<div class="page-name legend ">
                            
                        </div>--%>

<%--                        <div class="jq-template" template-id="control-font-style">

                        </div>--%>
                        <div class="jqte-editor"  contenteditable="true" style=" min-height:200px; min-width:250px; border:1px solid black; border-radius:5px;" >
                            
                        </div>


                    </fieldset>
                </div>
              <%--  <div class="col-xs-5">
                    <fieldset class="clear">

                        <div class="page-name legend ">
                            Out Put
                        </div>

                        <div>
                            <button class="action-button preview-text-insert">Preview<br /></button>
                        </div>

                        <div class="insert-text-out-put">

                        </div>

                    </fieldset>
                </div>--%>
            </div>

            <div class="controls-action">
                <button class="action-button action-button-insert-text-clear">Clear</button>
                <button class="action-button action-button-insert-text">Insert</button>
            </div>
        </div>

        <!------------------------------ Font Styles ------------------------------------>

        <div id="control-font-style" name="font" class="control-page-clonable hide">
           
            <fieldset class="clear">
                <div class="legend ">
                    Font Style
                </div>

                <div>
                    <select class="ddn-font-lists"></select> <div class="ddn-font-lists-sample bold"></div>
                </div>

            </fieldset>
            
           
        </div>

    </controls>

    <style>
    </style>
    <div id="smInsertNextPrev" class="smart-context-menu">

        <ul class="smart-context-menu-items">

            <li>
                <div class="li smart-menu-insert-text">Text</div>
            </li>
            <li>
                <div class="li smart-menu-insert-image">Image</div>
            </li>
            <li>
                <div class="li smart-menu-insert-empty-space">Spacer</div>
            </li>
            <li>
                <div class="li smart-menu-insert-object">Other</div>
            </li>
            <%-- <li>
                <div class="li smart-menu-insert-youtube">Youtube</div>
            </li>
            <li>
                <div class="li smart-menu-insert-html">Html</div>
            </li>
            <li>
                <div class="li smart-menu-insert-css">Css</div>
            </li>--%>
        </ul>
    </div>

    <div id="contextMenu">
        <ul id="contextMenuitems">

            <li>
                <div class="li ctx-menu-add-row">Add Columns</div>
            </li>
            <li>
                <div class="li ctx-menu-insert">
                    Insert
                    <div class="jq-menu-arrow"></div>
                </div>
                <div class="innerListContainer">
                    <ul>
                        <li>
                            <div class="li ctx-menu-insert-link-container">Links Container</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-link">Link</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-text">Text</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-image">Image</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-empty-space">Spacer</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-object">Other</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-html">Html/Css/Script</div>
                        </li>
                        <%-- <li>
                            <div class="li ctx-menu-insert-menu">Menu</div>
                        </li>--%>
                        <%-- <li>
                            <div class="li ctx-menu-insert-youtube">Youtube</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-html">Html</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-css">Css</div>
                        </li> --%>
                    </ul>
                </div>
            </li>
            <li>
                <div class="li ctx-menu-properties">
                    Properties
                    <div class="jq-menu-arrow"></div>
                </div>
                <div class="innerListContainer">
                    <ul>

                        <li>
                            <div class="li ctx-menu-height-width">Height & Width</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-border">Border</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-color">Color</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-background-image">Background Image</div>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="li ctx-menu-cut">Cut</div>
            </li>
            <li>
                <div class="li ctx-menu-copy">Copy</div>
            </li>
            <li>
                <div class="li ctx-menu-paste">Paste</div>
            </li>
            <li>
                <div class="li ctx-menu-delete-element">Delete</div>
            </li>
        </ul>
    </div>

    <input type="text" id="viewstate" class="viewstate" value="<%=CookieValue%>" />

    <!-- sample context menu

        <div id="contextMenu">
        <ul id="contextMenuitems">
            <li>
                <div class="li">Add</div>
                <div class="innerListContainer">
                    <ul>
                        <li>
                            <div class="li">Option One</div>

                            <div class="innerListContainer">
                                <ul>
                                    <li>

                                        Abcdef
                                    </li>
                                    <li>
                                        violet
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            Yellow
                        </li>
                        <li>
                            Orange
                        </li>
                        <li>
                            Brown
                        </li>
                        <li>
                            Aqua
                        </li>
                    </ul>
                </div>
            </li>
            <li> Delete </li>
            <li> Green </li>
            <li> Blue </li>
            <li> Maroon </li>
            <li> Benkin </li>
        </ul>
    </div>-->

    <script>

        var loading = jQuery(".loading.clonable").clone();

        loading.addClass("new")
        loading.removeClass("clonable");
        loading.removeClass("hide");
        jQuery(".control-templates").append(loading);

    </script>

    <div style="display: none;">
        <div id="copyright">Copyright &copy; 2015 <a href="http://apycom.com/">Apycom jQuery Menus</a></div>
    </div>

    <div id="site-help">
        <ol>
            <li>If you are unable to drag a element, then press [Esc] or Escape.
            </li>
        </ol>
    </div>


</body>
</html>
