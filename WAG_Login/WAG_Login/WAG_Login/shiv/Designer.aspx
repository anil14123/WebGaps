<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Designer.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.Default" %>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">

    <title>Web Gaps</title>

    <%--  <script class=" jquery" src="/Library/jquery-1.11.2.min.js"></script>

    <script src="/Library/jquery-ui.js"></script>--%>

    <link rel="stylesheet" href="/Content/jquery-ui.min.css" type="text/css" />

    <%--  <link href="/Third-Party/tabmenu/tabmenu.css" rel="stylesheet" type="text/css" />
    <script src="/Third-Party/tabmenu/tabmenu.js" type="text/javascript"></script>--%>

    <link href="/Third-Party/cssmenu/styles.css" rel="stylesheet" />

    <link rel="stylesheet" type="text/css" href="/Content/bootstrap-3.3.5-dist/css/bootstrap-customzed-48.min.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

    <%--<link class="add-to-page" href="/Content/bootstrap-3.3.5-dist/css/bootstrap.customized.24.min.css" rel="stylesheet" />--%>
  
    <link rel="stylesheet" href="/app.css" type="text/css" />
    <link rel="stylesheet" href="/InsertTools.css" type="text/css" />
    <link rel="stylesheet" href="/controls.css" type="text/css" />
    <link href="/ContextMenu.css" type="text/css" rel="stylesheet" />

    <link href="/Themes/457/theme.css" rel="stylesheet" type="text/css" />

    <%--<link href="/Third-Party/jte/jquery-te-1.4.0.css" rel="stylesheet" />--%>
    <link href="../my-jqte.css.css" rel="stylesheet" type="text/css" />

    <link href="/JQte.css" rel="stylesheet" type="text/css" />
    <%--<script src="/Third-Party/jte/uncompressed/jquery-te-1.4.0.js"></script>--%>
    <%--<link href="/Third-Party/colpick-jQuery-Color-Picker-master/css/colpick.css" rel="stylesheet" />--%>
    <%--<link href="/ColorPicker.css" rel="stylesheet" />--%>
    <link href="/Cursors.css" rel="stylesheet" />

    <link href="/Content/Menus/2/blue/menu.css" rel="stylesheet" />

    <script src="/Content/Menus/2/blue/Menu.js"></script>
    <!--javascript text editor-->

    <%--<script data-main="/TypeScript/app.js" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.js"></script>--%>
   <%-- <script data-main="TypeScript/app.js?v=2" src="/Library/require.js"></script>--%>
     <script data-main="TypeScript/app.js?v=2" src="/Library/require.js"></script>

    <%--<script src="/Third-Party/colpick-jQuery-Color-Picker-master/js/colpick.js"></script>--%>

    <link href="/Scripts/evoluteur.colorpicker/colorpicker-master/css/evol.colorpicker.css" rel="stylesheet" />
    <%--<script src="/Scripts/evoluteur.colorpicker/colorpicker-master/js/evol.colorpicker.js"></script>--%>

    <link href="/designer.css" rel="stylesheet" />
    <link href="/JqPlus.css" rel="stylesheet" />

    <link href="/SmartContextMenu.css" rel="stylesheet" />
    <link href="/Text.css" rel="stylesheet" />
    <link href="/DesignerPaddings.css" rel="stylesheet" />
    <link href="/EmptyLayout.css" rel="stylesheet" />
    <link href="/Loading.css" rel="stylesheet" />
    <link href="/MediaQueries.css" rel="stylesheet" />
    <link href="/priority.css" rel="stylesheet" />

    <%--   <style>

  .ui-tabs-vertical { width: 200px; }
  .ui-tabs-vertical .ui-tabs-nav { padding: .2em .1em .2em .2em; float: left; width: 12em; }
  .ui-tabs-vertical .ui-tabs-nav li { clear: left; width: 100%; border-bottom-width: 1px !important; border-right-width: 0 !important; margin: 0 -1px .2em 0; }
  .ui-tabs-vertical .ui-tabs-nav li a { display:block; }
  .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active { padding-bottom: 0; padding-right: .1em; border-right-width: 1px; }
  .ui-tabs-vertical .ui-tabs-panel { padding: 1em; float: right; width: 40em;}

    </style>--%>
</head>
<body>

    
<style>
 
    rootX{
        display:none;
    }

</style>


    <%--
    <iframe id="loadingIframe" style="z-index:99999999999999999999999999999; position:absolute; top:0; height:100%; width:100%; left:0; bottom:0; right:0" src="loading.aspx"> 
        
    </iframe>
    --%>


    <div class="loading hide clonable" style="padding: 0;">
        <img class="loading-img" src="/Content/loading/colors.gif" alt="Loading..." />
    </div>

    <div class="jq-loading">
    </div>

    <input class="input-page-name hide" value="<%:PageName%>" />
    <input class="input-site-name hide" value="<%:SiteName%>" />
    <input class="input-site-id hide" value="<%:SiteId%>" />
    <input class="input-current-location hide" value="/services/sites" />

    <div class="jq-plus-container jq-plus-container-not-used">

        <div class="row" style="display: none;">
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

    <div class="jq-properties-tag" style="display: none;">

        <span class="jq-left tag-control button-move-left"><span class="fa fa-arrow-left "></span></span>
        <span class="jq-right tag-control button-move-right"><span class="fa fa-arrow-right "></span></span>

        <span class="jq-design tag-control"><span class="fa fa-paint-brush fa-2x"></span></span>
        <span class="jq-settings tag-control"><span class="fa fa-cog fa-2x"></span></span>
        <span class="jq-delete tag-control tag-color-red"><span class="fa fa-remove fa-2x"></span></span>

    </div>

    <span id="noelement22"></span>


    <div class="top-row-container">

        <div class="designer-top-row table">

            <style>
                .blue {
                    color: blue;
                }
            </style>
            <style>
                .btnblue {
                    background-color: #2D4961 !important;
                }
            </style>



            <div class=" table-cell close-preview jq-save-margin  "><span class=" fa fa-eye  white"></span>&nbsp;Close Preview</div>
            <div class=" table-cell  show-preview jq-save-margin "><span class=" fa fa-eye  white"></span>&nbsp;Preview</div>
            <a href='#' href="#" target="_blank" class="anchor-show-live-preview table-cell ">
                <div class=" " style="margin-left: 6px; display: inline-block;">
                    <span class=" fa fa-eye  white"></span>&nbsp;Live Preview
                </div>
            </a>
            <div class="table-cell jq-show-plus " style="margin: 5px;">
                <span class="fa fa-plus-square white"></span>&nbsp;Rows Add
            </div>
            <div class="table-cell jq-hide-plus display-none" style="margin: 5px;">
                <span class="fa fa-plus-square white"></span>&nbsp;Rows Add Hide
            </div>
            <div class="table-cell  btn-file">
                <span class="fa fa-cloud-upload white"></span>&nbsp;Image Upload<input type="file" multiple="multiple" class="image-file-upload" />
            </div>
            <div class=" table-cell button-download-site jq-save-margin">
                <span class="fa fa-cloud-download white"></span>&nbsp;Download Site
            </div>



            <div class="table-cell">
                <div class="white jq-desktop ">
                    <span class="fa fa-desktop fa-2x"></span>
                </div>
            </div>

            <div class="table-cell">
                <div class=" white jq-tablet  ">
                    <span class="fa fa-tablet fa-2x"></span>
                </div>
            </div>

            <div class="table-cell">
                <div class=" white jq-mobile">
                    <span class="fa fa-mobile fa-2x"></span>
                </div>
            </div>

            <!--- undo save redo --->

            <div class="table-cell jq-undo-buttons jq-undo ">
                <span style="color: white;" class="fa fa-undo"></span>
                &nbsp;Undo
            </div>
            <div class="table-cell jq-undo-buttons  jq-redo  ">
                Redo
                     &nbsp;<span style="color: white;" class="fa fa-repeat"></span>
            </div>

            <div class="table-cell jq-save  " style="padding-right: 5px;">
                <span style="color: white;" class="fa fa-save"></span>
                &nbsp;Save
            </div>


            <div class="table-cell jq-jogoff-css">
                <div class="jq-jogoff-css">
                    <form name="logout" runat="server">
                        <asp:LoginStatus runat="server" Style="color: white;" class="jq-logout " LogoutAction="Redirect" LogoutText="Log off" LogoutPageUrl="~/" OnLoggingOut="Unnamed_LoggingOut" />
                    </form>
                </div>
            </div>

            <div class="table-cell btn-help">Help</div>

        </div>

        <style>
            .green {
                color: #46B34F;
            }

            .black {
                color: black;
            }

            .mobile-button-border-white {
                border-right: none;
                border-left: 1px solid white;
                border-top: none;
                border-bottom: none;
            }

            .mobile-button-last-border-white {
                border-right: 1px solid white;
                border-top: none;
                border-bottom: none;
            }

            .back-black {
                background-color: black;
            }
        </style>


    </div>

    <div class="editor " style="z-index: 999;">
        <div class="jqte-toolbar">



            <select class="font-name jqte-font-name form-control" style="float: left; margin-top: 2px; margin-right: 3px; height: 20px; padding: 0; width: auto;">
                <option value="0">Font </option>
                <option class="jqte-editor-tool-c" value="Arial, Helvetica, sans-serif">Sans Serif</></option>
                <option class="jqte-editor-tool-c" value="'times new roman', serif">Serif</option>
                <option class="jqte-editor-tool-c" value="'arial black', sans-serif">Wide</></option>
                <option class="jqte-editor-tool-c" value="'arial narrow', sans-serif">Narrow</></option>
                <option class="jqte-editor-tool-c" value="'comic sans ms', sans-serif">Comic Sans MS</></option>
                <option class="jqte-editor-tool-c" value="'courier new', monospace">Courier New</></option>
                <option class="jqte-editor-tool-c" value="garamond, serif">Garamond</></option>
                <option class="jqte-editor-tool-c" value="georgia, serif">Georgia</></option>
                <option class="jqte-editor-tool-c" value="tahoma, sans-serif">Tahoma</></option>
                <option class="jqte-editor-tool-c" value="'trebuchet ms', sans-serif">Trebuchet MS</></option>
                <option class="jqte-editor-tool-c" value="'verdana, sans-serif;">Verdana</></option>
            </select>

            <select class="font-size jqte-font-size form-control" style="float: left; margin-top: 2px; margin-right: 2px; height: 20px; padding: 0; width: auto;">
                <option value="0">Font Size </option>
                <option class="jqte-editor-tool-c" value="small">Small</></option>
                <option class="jqte-editor-tool-c" value="normal">Normal</option>
                <option class="jqte-editor-tool-c" value="medium">Medium</></option>
                <option class="jqte-editor-tool-c" value="x-large">Large</></option>
                <option class="jqte-editor-tool-c" value="xx-large">Huge</></option>
                <option class="jqte-editor-tool-c" value="38">2 X Huge</></option>
                <option class="jqte-editor-tool-c" value="42">3 X Huge</></option>
                <option class="jqte-editor-tool-c" value="46">4 X Huge</></option>
                <option class="jqte-editor-tool-c" value="48">5 X Huge</></option>
                <option class="jqte-editor-tool-c" value="50">6 X Huge</></option>
                <option class="jqte-editor-tool-c" value="56">7 X Huge</></option>
                <option class="jqte-editor-tool-c" value="60">8 X Huge</></option>
            </select>

            <div class="btn btn-default jqte-close" style="display: inline-block; margin-left: 2px; cursor: pointer;"
                onclick="jQuery('.editor').hide(); $('page .jq-text-block-content').removeAttr('contentEditable'); jQuery('page .empty-container-text').find('.jq-text-block-container').find('*').not('.ui-resizable-handle').css('cursor', 'move'); $('.empty-container-text').draggable({ disabled: false }); $('.empty-container-image').draggable({ disabled: false });jQuery('page .jqte-editor').css('cursor', 'move'); ">
                Close
            </div>

            <%--                     <button class=" btn btn-default jqte-edit btn-primary" id="jqte-edit" name="Edit">Edit</button>
                      <button class=" btn btn-default jqte-edit btn-danger" style="display:none;" id="jqte-edit-stop" name="Edit">Stop Edit</button>--%>

            <%--  <ul tabindex="-1" class="font-name-list font-name jqte-editor-tool-list">
                        <li>
                            <button class="jqte-editor-tool-c" value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</button></li>
                        <li>
                            <button class="jqte-editor-tool-c" value="Georgia, serif">Georgia, serif</button></li>
                        <li>
                            <button class="jqte-editor-tool-c" value="'Times New Roman', Times, serif">"Times New Roman", Times, serif</button></li>
                    </ul>--%>
            <%-- <button tabindex="-1" class="font-size-icon fa  jqte-editor-tool-p" name="font-size"></button>
                    <ul tabindex="-1" class="font-size-list font-size jqte-editor-tool-list">
                        <li style="height: 60px;">
                            <button class="jqte-editor-tool-c" style="font-size: 9px;" value="9">Smaller Text</button>
                        </li>
                        <li style="height: 60px;">
                            <button class="jqte-editor-tool-c" style="font-size: 12px;" value="12">Medium Text</button>
                        </li>
                        <li>
                            <button class="jqte-editor-tool-c" value="32" style="font-size: 32px;">Heading 1</button>
                        </li>
                        <li style="height: 60px;">
                            <button class="jqte-editor-tool-c" style="font-size: 24px; float: none;" value="24">Heading 2</button>
                        </li>
                        <li style="float: none;"></li>
                        <li>
                            <button class="jqte-editor-tool-c" style="font-size: 19px;" value="19">Heading 3</button>
                        </li>

                        <li style="height: 40px;">
                            <button class="jqte-editor-tool-c" style="font-size: 16px;" value="16">Heading 4</button>
                        </li>
                        <li style="height: 40px;">
                            <button class="jqte-editor-tool-c" style="font-size: 14px;" value="14">Heading 5</button>
                        </li>
                        <li style="height: 40px;">
                            <button class="jqte-editor-tool-c" style="font-size: 13px;" value="13">Heading 6</button>
                        </li>
                        <li style="float: none;">
                            <button class="jqte-editor-tool-c" style="font-size: 13px; cursor: none;" value="12"></button>
                        </li>
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
                        <li style="float: none;"></li>
                        <li>Help: To apply font size to entire text : click on a empty space (not on a word) and select font size. then done.
                        </li>
                    </ul>--%>


            <button class="bold-icon btn btn-default fa fa-bold jqte-editor-tool" name="bold"></button>
            <button class="italic-icon btn btn-default fa fa-italic jqte-editor-tool" name="italic"></button>
            <button class="underline-icon btn btn-default fa fa-underline jqte-editor-tool" name="underline"></button>
            <button class="strike-icon btn btn-default fa fa-strikethrough jqte-editor-tool" name="strike"></button>
            <button class="fore-color-icon btn btn-default fa fa-font color-tool jqte-editor-tool" name="fore-color"></button>
            <div class="jqte-color-palette jqte-editor-tool-list">

                <span class="color-type"></span>

                <div class="jq-color-saperator"></div>
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
            <button class="back-color-icon btn btn-default fa fa-font  color-tool jqte-editor-tool" name="back-color"></button>
            <button class="bullet-icon btn btn-default fa fa-list-ul jqte-editor-tool" name="bullet"></button>
            <button class="number-icon btn btn-default fa fa-list-ol jqte-editor-tool" name="number"></button>
            <button class="left-icon btn btn-default fa fa-align-left jqte-editor-tool" name="left"></button>
            <button class="right-icon btn btn-default fa fa-align-right jqte-editor-tool" name="right"></button>
            <button class="center-icon btn btn-default fa fa-align-center jqte-editor-tool" name="center"></button>
            <button class="full-icon btn btn-default fa fa-align-justify jqte-editor-tool" name="full"></button>
            <button class="left-indent-icon btn btn-default fa fa-indent jqte-editor-tool" name="indent"></button>
            <button class="right-indent-icon btn btn-default fa fa-outdent jqte-editor-tool" name="outdent"></button>
            <button class="link-icon btn btn-default fa fa-link jqte-editor-tool" name="link"></button>
            <button class="unlink-icon btn btn-default fa fa-unlink jqte-editor-tool" name="unlink"></button>
            <button class="clear-icon btn btn-default fa fa-eraser jqte-editor-tool" name="clear"></button>

            <div class="jqte-link jqte-editor-tool-list">
                &nbsp;&nbsp; Web Address :
                        <input type="text" value="http://" class="link-window-url form-control" />

                <button style="margin: 2px;" class="btn btn-danger" onclick="jQuery(this).parent().hide();">Close</button>
                <button class="editor-create-link btn btn-default" style="margin: 2px;">Insert</button>

            </div>
        </div>
    </div>

    <%-- 
       <div class="align-center show-hide-menu absolute" style="left: 600px">
        <span class="show-hide-menu-btn fa fa-angle-double-up hide-menu black pointer btn-xs btn btn-default"></span>
        <span class="show-hide-menu-btn fa fa-angle-double-down show-menu black btn btn-xs btn-default"></span>
    </div>

    <div id="hideMenuHelpTop">
        <span class="fa fa-hand-o-left help-guid help-guid-hide-menu">&nbsp; Hide Menu </span>
    </div>
    --%>

    <style>
        .help-guid {
            padding: 10px;
            background-color: #337AB7;
            position: fixed;
            left: 625px;
            z-index: 99999;
            top: 50px;
            color: white;
            font-weight: bold;
            font-size: small;
            border-radius: 5px;
            display: none;
        }

        .help-guid-left {
            padding: 10px;
            background-color: #337AB7;
            float: right;
            z-index: 99999;
            color: white;
            font-size: small;
            font-weight: bold;
            border-radius: 5px;
            display: none;
        }


        .hide-menu {
            position: absolute;
            top: 50px;
        }

        #hideLeftMenuHelp {
            float: right;
        }

        .hide-show-left-menu {
            border-left: 1px solid #676767;
            border-top: 1px solid #676767;
            border-bottom: 1px solid #676767;
            margin-left: -23px;
            color: #656161;
            opacity: 0.8;
            padding: 5px;
            width: 25px;
            padding-left: 2px;
            padding-right: 0;
            vertical-align: middle;
            background-color: rgb(238, 238, 238);
        }


        .show-hide-menu-btn {
            display: none;
            font-size: 11px;
            color: #9BBB59 !important;
        }

        .white {
            color: white !important;
        }

        .absolute {
            position: absolute;
        }

        .black {
            color: black;
        }

        .pointer {
            cursor: pointer;
        }

        .align-center {
            text-align: center;
        }

        .show-hide-menu {
            top: 0;
            z-index: 9999;
            position: fixed;
        }
    </style>

    <rootx style="clear: both; position: relative;">

        <style>
            .page-static-element {
                display: none;
            }

            .page {
                display: none;
            }

            .border {
                border: 1px solid black;
            }
        </style>

        <div class="row">

            <%-- <div class="col-xs-2"  >
             </div>--%>
            
            <div class="col-xs-36" id="main-page-column" style="overflow-x:auto; border-right:1px solid #AFAAAA; padding:0; overflow-y:hidden; padding-bottom:260px;">

                <%--<span style="margin-top:3px; margin-right:14px; position:relative;" class="btn btn-xs btn-danger jq-desktop float-right jq-save-margin" >Desktop</span>
                <span style="margin-top:3px; position:relative; " class="btn btn-xs btn-danger jq-tablet float-right jq-save-margin">Tablet</span>
                 <span style="margin-top:3px; position:relative; " class="btn btn-xs btn-danger jq-mobile float-right jq-save-margin">Mobile</span>--%>

                <Page class="add-to-page key page "  unique-id="0" class="page" >
           <div class="page-marker design-css">Page</div> 
                    <div class="page-margin design-css design-page-margin">
           
                    <div key-css="jq-Header" unique-id="1" style="" scopeId="root-1" class="jq-Header key root-elements  jq-back-Header jq-additional-Header design-row row page-element design-root-elements jqMargin-0 " style="">
                        <span class="page-static-element">Header</span>
                        <span class="page-static-element-circle design-css design-root-elements-static"></span>

                    </div>

                    <div key-css="jq-MenuBar" style=""  unique-id="2" scopeId="root-2" class="jq-MenuBar key root-elements jq-back-MenuBar jq-additional-MenuBar design-row  row page-element design-root-elements  jqMargin-0 " style="">
                        <span class="page-static-element">Menu Bar</span>
                         <span class="page-static-element-circle"></span>

                    </div>


                    <div key-css="jq-Content" style="" unique-id="3" scopeId="root-3" class="clear key root-elements  jq-Content jq-back-Content jq-additional-Content design-row  row page-element design-root-elements  jqMargin-0 " style="">
                       <span class="page-static-element">Body</span>
                         <span class="page-static-element-circle"></span>

                    </div>


                    <div key-css="jq-Footer" style="" unique-id="4" scopeId="root-4" class="jq-Footer key root-elements jq-back-Footer jq-additional-Footer design-row  row page-element design-root-elements  jqMargin-0 " style="">
                        <span class="page-static-element">Footer</span>
                         <span class="page-static-element-circle"></span>
                
                    </div>


                        </div> 

                </Page>

                <div style="float:right; position:relative;">
                      <div class="align-center show-hide-menu absolute" style="top: 300px; ">
        <div class="fa fa-play  show-hide-menu-btn hide-left-menu hide-show-left-menu fa-1x black pointer "></div>
        <div class="fa fa-play fa-flip-horizontal border show-hide-menu-btn show-left-menu hide-show-left-menu fa-1x black pointer"></div>

        <div id="hideLeftMenuHelp"> &nbsp;
            <span class="fa fa-hand-o-left help-guid-left help-guid-hide-menu"> &nbsp; Hide Menu </span>
        </div>
    </div>

                  
                    </div>

           </div>

            <div class="properties-sidebar col-xs-12"id="property-sidebar-page-column" style="position:relative;" >

            

                <div class="properties-sidebar-container">

                    <%--<div class="selected-display-element-container">Selected : <span class="selected-display-element"></span></div>--%>

                    <%-- CAccordion --%>

                    <table class="table jq-properties-tab-tab" style="margin:0;">
                        <tr>
                            <td class="table-cell jq-prop-tab borer-for-prop-tab jq-prop-tab-selected">
                                Design
                            </td>
                            <td class="table-cell jq-prop-tab">
                                Settings
                            </td>
                        </tr>
                    </table>


                      <div id="control-settings" class="hide">

                          Control Settings
                          <br /><br /><br />
                      </div>

                      <div id="properties-accordion">
  <h3 class="prop-sb" name="height-width">  &nbsp;&nbsp; Height / Width </h3>
  <div>
    <div class="smart-menu-controls-table" style="width:auto;">
           
           <div class="row">    
                <div class="col-xs-12">
                 <span class="small-name" title="Height">  Height </span>
                </div>   
        
                <div class="col-xs-36">
                 <input class='smart-menu-height smart-menu-control'  />
                </div>  
               </div>                   
        
        <div class="row">
                <div class="col-xs-12">
                  <span class="small-name" title="Width"> Width  </span>
                </div>      
        
                 <div class="col-xs-36">
                    <input class='smart-menu-width smart-menu-control'   />
                 </div>   
       </div>       
                        

                
                </div>
  </div>
  <h1 class="prop-sb" name="color">  &nbsp;&nbsp; Color</h1>
  <div style="overflow:visible;">
   
        <div class="control-color-controls">
                   
            <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Foreground Color">  Front </span>
                 </div>     
              <div class="col-xs-30">
                 <input type="text" value="#ffffff" class="control-color-foreground-color fb-color-picker" />
              </div>
            </div>
            
            <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Background Color"> Background </span>
                 </div>
              <div class="col-xs-30">
                    <input type="text" value="#ffffff" class="control-color-background-color fb-color-picker" />
              </div>
             </div>
                    

            <div style="background-color:lightgrey; text-align:center;">Color Gradient</div>
                 
            
             <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Start Color">Start Color </span>
                 </div>
              <div class="col-xs-30">
                    <input type="text" value="#ffffff" class="control-color-gradient-color-1 fb-color-picker-gradient" />
              </div>
             </div>
            
              <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="End Color">End Color </span>
                 </div>
              <div class="col-xs-30">
                    <input type="text" value="#ffffff" class="control-color-gradient-color-2 fb-color-picker-gradient" />
              </div>
             </div>                   
                 <button class="remove-gradient btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Color</button>                   
              
         </div>

  </div>
  <h3 class="prop-sb" name="border"> &nbsp;&nbsp; Border</h3>
  <div>
   

    <div class="control-border-controls" >
                   
                            <div class="">
                                  <div class="row">

                                      <center>
                                       <div class="small-name"> Style  </div>
                                     
                                       <div title="Solid Border" class="border-style-control-container border-style-selected">
                                       <div class="border-style border-style-solid" style="border-style:solid"></div>
                                       </div>

                                      <div title="Dotted Border" class="border-style-control-container">
                                      <div class="border-style border-style-dotted" style="border-style:dotted"></div>
                                      </div>
                                      
                                      <div title="Dashed Border" class="border-style-control-container">
                                      <div class="border-style border-style-dashed" style="border-style:dashed"></div>
                                      </div>
                                       
                                      <div title="Groove Border" class="border-style-control-container">
                                      <div class="border-style border-style-groove" style="border-style:groove"></div>
                                      </div>


                                      <br /><br />
                                          </center>
                                   </div>

                                <div class="row">
                                   
                                     <div class="col-xs-28 column-no-pad" >

                                         <span class="small-name" title="Top">Top</span>  <input class="control-border-thickness-top control-border-thickness" />
                                   <input type="text" id="color-picker"  value="#000000" class="color-picker color-picker-top"/>        

                                       
                                      </div>

                                    <div class="col-xs-20 column-no-pad"> 
                                        <span  class="small-name"  title="Right">Right</span><input   class="control-border-thickness-right control-border-thickness"  />
                                        <input type="text" id="color-picker" value="#000000" class="color-picker color-picker-right"/>         

                                    </div>
                                     
                                    </div>

                                <div class="row">

                                    <center>
                                        <br />
                                         <span class="small-name"  title="All">All</span>  <input  class="control-border-thickness-all control-border-thickness" />
                                   <input type="text" id="color-picker" style="margin-left:-14px;" value="#000000" class="color-picker color-picker-all"/>        
                                        <br />
                                      
                                       </center>
                                      
                                </div>

                                 <div class="row">
                                   
                                     <div class="col-xs-28 column-no-pad" >

                                         <span class="small-name"  title="Left">Left</span>  <input class="control-border-thickness-left control-border-thickness" />
                                   <input type="text" id="color-picker"   value="#000000" class="color-picker color-picker-left"/>        

                                       
                                      </div>

                                    <div class="col-xs-20 column-no-pad"> 
                                        <span class="small-name"  title="Bottom">Bott</span><input   class="control-border-thickness-bottom control-border-thickness"  />
                                        <input type="text" id="color-picker" value="#000000" class="color-picker color-picker-bottom"/>         

                                    </div>
                                     
                                    </div>

                                  <%-- <input class="control-border-thickness-all control-border-thickness" />
                                         <input type="text" id="color-picker" value="000000" class="color-picker color-picker-all" />

                                                   <input class="control-border-thickness-left control-border-thickness" />
                                 <input type="text" id="color-picker" value="000000" class="color-picker color-picker-left" />

                                                             

                                                        

                                                   <input class="control-border-thickness-bottom control-border-thickness"  />
                                   <input type="text" id="color-picker" value="000000" class="color-picker color-picker-bottom"/>--%>
                                               
                                                 </div>

                                            </div>

                                     
      <div>
          <br />

           <div style="background-color:lightgrey; text-align:center;">Border Radius</div>

      <div style="padding-left:15px;" class="row">
         <div class="control-border-controls">
           <span class="small-name" title="Border Radius">Border Radius </span> <input class="control-border-thickness-radius " />
         </div>
      </div>
          <br />
          <div>Help: Set border radius after setting border above.</div>

           <button class="remove-border btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Border</button>     
  </div>
                         
                  
 </div>
 
  
  
  <h3 class="prop-sb" name="padding"> &nbsp;&nbsp; Padding</h3>
  <div>

        <div class="control-padding-controls" >
                   
                            <div class="">
                                

                                <div class="row">
                                   
                                     <div class="col-xs-24 column-no-pad" >

                                         <span class="small-name" title="Top">Top</span> 
                                            <input class="control-padding-top control-padding-padding" />
                                       
                                      </div>

                                    <div class="col-xs-24 column-no-pad"> 
                                        <span  class="small-name"  title="Right">Right</span>
                                           <input class="control-padding-right control-padding-padding" />
                                    </div>
                                     
                                    </div>

                                <div class="row">

                                    <center>
                                        <br />
                                         <span class="small-name"  title="All">All</span> 
                                          <input class="control-padding-all control-padding-padding" />
                                              <br />
                                        <br />
                                       </center>
                                      
                                </div>

                                 <div class="row">
                                   
                                     <div class="col-xs-24 column-no-pad" >

                                         <span class="small-name"  title="Left">Left</span>      <input class="control-padding-left control-padding-padding" />
                                       
                                      </div>

                                    <div class="col-xs-24 column-no-pad"> 
                                        <span class="small-name"  title="Bottom">Bott</span>   <input class="control-padding-bottom control-padding-padding" />
                                    </div>
                                     
                                    </div>
                                <br />
                                 <button class="remove-padding btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Padding</button>     

                                  <%-- <input class="control-border-thickness-all control-border-thickness" />
                                         <input type="text" id="color-picker" value="000000" class="color-picker color-picker-all" />

                                                   <input class="control-border-thickness-left control-border-thickness" />
                                 <input type="text" id="color-picker" value="000000" class="color-picker color-picker-left" />

                                                             

                                                        

                                                   <input class="control-border-thickness-bottom control-border-thickness"  />
                                   <input type="text" id="color-picker" value="000000" class="color-picker color-picker-bottom"/>--%>
                                               
                                                 </div>

               </div>


  </div>
  <h3 class="prop-sb" name="margin"> &nbsp;&nbsp; Margin</h3>
  <div>

        <div class="control-margin-controls" >
                   
                            <div class="">
                                

                                <div class="row">
                                   
                                     <div class="col-xs-24 column-no-pad" >

                                         <span class="small-name" title="Top">Top</span> 
                                            <input class="control-margin-top control-margin-margin" />
                                       
                                      </div>

                                    <div class="col-xs-24 column-no-pad"> 
                                        <span  class="small-name"  title="Right">Right</span>
                                           <input class="control-margin-right control-margin-margin" />
                                    </div>
                                     
                                    </div>

                                <div class="row">

                                    <center>
                                        <br />
                                         <span class="small-name"  title="All">All</span> 
                                           <input class="control-margin-all control-margin-margin" />
                                              <br />
                                        <br />
                                       </center>
                                      
                                </div>

                                 <div class="row">
                                   
                                     <div class="col-xs-24 column-no-pad" >

                                         <span class="small-name"  title="Left">Left</span>  
                                             <input class="control-margin-left control-margin-margin" />
                                      </div>

                                    <div class="col-xs-24 column-no-pad"> 
                                        <span class="small-name"  title="Bottom">Bott</span>  
                                         <input class="control-margin-bottom control-margin-margin" />
                                    </div>
                                     
                                    </div>
                                <br />

                                  <button class="remove-margin btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Margin</button>     


                                  <%-- <input class="control-border-thickness-all control-border-thickness" />
                                         <input type="text" id="color-picker" value="000000" class="color-picker color-picker-all" />

                                                   <input class="control-border-thickness-left control-border-thickness" />
                                 <input type="text" id="color-picker" value="000000" class="color-picker color-picker-left" />

                                                             

                                                        

                                                   <input class="control-border-thickness-bottom control-border-thickness"  />
                                   <input type="text" id="color-picker" value="000000" class="color-picker color-picker-bottom"/>--%>
                                               
                                                 </div>

               </div>

  </div>
  <h3 class="prop-sb" name="opacity"> &nbsp;&nbsp; Opacity</h3>
  <div>
   
      <div class="control-opacity-controls">
                    <center>
                      
                           <%-- <div class="page-name legend ">
                               
                            </div>--%>
                           
                          
                               <span class="small-name">Opacity</span>    <div class="control-o-opacity" style="background-color:black; margin:10px; width:190px;"/>
                                              
                    </center>
         
          <button class="remove-opacity btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Opacity</button>     

                    
                </div>

  </div>



 <h3 class="prop-sb" name="bi"> &nbsp;&nbsp; Background Image</h3>
  <div>
   
      <div class="control-bi-controls">
                   
 
           <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Background Image">  Background Image </span>
                 </div>     
              <div class="col-xs-30">
                <input class="bi-selected-image hide" type="text" /> <button class="bi-browse btn btn-xs btn-danger" > Browse</button>
              </div>
            </div>


            <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Repeat Image">   Repeat </span>
                 </div>
              <div class="col-xs-30">
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
              </div>
             </div>
                    

           <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Attachment">   Attachment </span>
                 </div>
              <div class="col-xs-30">
                       <div class="cntrls">
                                <select class="ddn-control ddn-bi-attachment">
                                      <option selected value="scroll">Scroll</option>
                                      <option value="fixed">Fixed</option>
                                      <option value="local">Local</option>
                                 </select>
                                      </div>
              </div>
             </div>

           <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Position">   Position </span>
                 </div>
              <div class="col-xs-30">
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
              </div>
             </div>
                               
            <fieldset class="clear row" style="border:1px solid grey; padding:5px;">

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
                    
                   <button class="remove-bi btn btn-danger btn-sm" style="margin:2px;">Clear Background Image</button>
                </div>

  </div>

 <h3 class="prop-sb" name="bs"> &nbsp;&nbsp; Border Shadow / Glow</h3>
  <div>
   
         <div class="control-bs-controls">
                  
                           <%-- <div class="page-name legend ">
                               
                            </div>--%>
                           
                  
                             <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Horizontal Spacing"> Horizontal </span>
                 </div>     
              <div class="col-xs-30">
                  <input class="control-b-s-h control-b-s" value="0"/>
              </div>
            </div>

                        
                             <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Vertical Spacing">Vertical </span>
                 </div>     
              <div class="col-xs-30">
                  <input class="control-b-s-v control-b-s" value="0" />
              </div>
            </div>


                          <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Blur"> Blur </span>
                 </div>     
              <div class="col-xs-30">
                    <input class="control-b-s-blur control-b-s" value="0" />
              </div>
            </div>


                        
                          <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Color"> Color </span>
                 </div>     
              <div class="col-xs-30">
                    <input class="b-s-color"/>
              </div>
            </div>

                          <center> <br />  <button class="btn btn-primary b-s-glow">Glow</button></center>

                        
                          <br />
                             <button class="btn btn-danger b-s-remove">Clear Border Shadow</button>   

                </div>
           
  </div>

<h3 class="prop-sb" name="zindex"> &nbsp;&nbsp; Front Back Position</h3>
  <div>
   
  <div class="control-z-zindex" style="background-color:black; margin:15px;"/>
           
  </div>




</div>
             
               </div>

            </div>
        </div>


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


        

         <div id="control-save" name="save" style="top:200px;" class="control-page control-save control-active"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();jQuery('.control-page').removeClass('control-active');">X</span> </div>
            <div class="control-move-area"></div>
             
            <fieldset class="clear" style="width:300px; background-color:white; height:150px;">
             
             <center>
               <h5 style='font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;'> Please save your work before leave</h5> 

                 <hr />
                     <button class="jq-save jq-save-margin btn btn-primary btn-large" onclick="jQuery(this).closest('.control-page').hide();">
                            <img alt="" class="save-img" src="/content/save/save.png" />
                            Save</button>
                 </center>
            </fieldset>

        </div>

        <!------------------------------- CTemplates ----------------------------------->

        <div id="control-templates" name="templates" class="control-page control-templates control-active"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();jQuery('.control-page').removeClass('control-active');">X</span> </div>
            <div class="control-move-area">Layout</div>
             
            <fieldset class="clear" style="width:100%; height:360px;  overflow:auto;">
             
                <div class="empty-layout-templates clear">



                </div>

            </fieldset>

             <div class="controls-action">
                   <button class="btn btn-success btn-xs action-button-template-choose">Choose Templates</button>  <button class="btn btn-success btn-xs action-button-layout-create">Create Layout</button>
                </div>
        </div>


        <!------------------------------- CAdd a Row ------------------------------------>

        <div id="control-add-row" name="add-row" class="control-page" >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Add Row</div>
             <!--<div class="help">
                <span class="help-field"> Required Fields </span>  : <span class="help-symbol help-symbol"> * </span>
            </div>-->

            <fieldset class="clear" style="min-width:160px;">
               <%-- <div class="page-name legend ">
                    
                </div>--%>

                <div class="control-columns-roots">
                        <div class="row" style="outline:none;">
                           <%-- <div class="control-columns col-xs-4" id="column1" data-number="4" data-set="0"></div>
                            <div class="control-columns col-xs-4 " id="column2" data-number="8" data-set="0"></div>--%>
                            <div class="control-columns col-xs-16" id="column2" data-number="12" data-set="0"></div>
                           <%-- <div class="control-columns col-xs-4" id="column2" data-number="16" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="20" data-set="0"></div>--%>
                            <div class="control-columns col-xs-16" id="column2" data-number="24" data-set="0"></div>
                            <%--<div class="control-columns col-xs-4" id="column2" data-number="28" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="32" data-set="0"></div>--%>
                            <div class="control-columns col-xs-16" id="column2" data-number="36" data-set="0"></div>
                           <%-- <div class="control-columns col-xs-4" id="column2" data-number="40" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="44" data-set="0"></div>
                            <div class="control-columns col-xs-4" id="column2" data-number="48" data-set="0"></div>--%>
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

        <!------------------------------ Cimage library --------------------------------->

        <div id="control-image-library" name="image-library" class="control-page" style="background-color:white;" >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Images</div>
            
            <%--  <fieldset class="clear" style="background-color:white;">
                
                     <div class=" float-left">
                            <b> Image Url </b>
                            </div>

                <input type="text" class="input-sm  internet-image-url" />
                
                </fieldset>

                                     <center style="background-color:white;"><b>OR</b></center>--%>

                        <fieldset class="clear" style="background-color:white;">

                          <div class=" legend ">
                              [ My Images ]
                            </div>

                            <div id="imageLibrary" class="image-library">
                                
                                 <img class="loading" src="Content/loading/colors.gif" />
                            
                            </div>

                            <span class="btn btn-primary load-more-images" style="margin:14px;">Load More Images</span>
                           

                        </fieldset>

                      <div class="controls-action"> 
                          <%-- <a href="/shiv/Dynamic/UploadToImageLibrary.aspx" 
                           target="_blank" class="action-button action-link action-button-image-upload">
                           Upload Image</a>--%>

                     <span class="btn btn-danger btn-sm btn-file"> 
                          Upload  
                        <input type="file" multiple="multiple" class="image-file-upload" />
                    </span>

                           <button class="btn btn-primary btn-sm action-button-change-image">Change</button>
                            <button class="btn btn-primary btn-sm action-button-insert-image">Insert</button>
                       
                      
                      </div>
                    
          
        </div>

            <!------------------------------ Cmenu control --------------------------------->

        <div id="control-menu" name="control-menu" class="control-menu control-page"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Menus</div>
            
                        <fieldset class="clear">

                            <div id="control-menu-styles" class="control-menu-styles">
                                
                                
                            
                            </div>

                           

                        </fieldset>

                      <div class="controls-action"> 
                           <button class="action-button control-menu-prev">Previous</button>
                       <button class="action-button control-menu-next">Next</button>
                            <button class="action-button control-menu-insert">Insert</button>
                       </div>
                    
          
        </div>

        <!------------------------------ CHeight Width ---------------------------------->

      <%--  <div id="control-height-width" name="height-width" class="control-page " >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Height & Width</div>
            <div class="row" style="outline:none; border:none;">
                <div class="col-xs-48">
                   
                       
                          <div id="sm-controls" class='hw-menu-controls smart-menu-controls-table smart-menu-height-width'>



                               <div class="row">    
                <div class="col-xs-12">
                 <span class="small-name"  title="Height"> Height  </span>
                </div>   
        
                <div class="col-xs-36">
                 <input class='smart-menu-height smart-menu-control'  />
                </div>  
               </div>     

                                 <div class="row">    
                <div class="col-xs-12">
                 <span class="small-name" title="Width">  Width  </span>
                </div>   
        
                <div class="col-xs-36">
                 <input class='smart-menu-width smart-menu-control' />
                </div>  
               </div>     

       
                

        </div>

                       
                 
                </div>
            </div>
        </div>--%>

        
        <!------------------------------   CLinks  --------------------------------------->

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

                                &nbsp;&nbsp;<span class="jq-c-lable"> Name: </span> <input type="text" class="insert-link-name" />

                            </div>

                            </fieldset>

                        <fieldset class="clear ">

                            <div class="legend ">
                               External Link
                            </div>

                            <div style="margin:5px; text-align:left">

                                <div class="row">
                                <div class="col-xs-10"><span class="jq-c-lable">Url</span> </div>  <div class="col-xs-36"> <input type="text" id="insert-internet-link-url" /></div>
                                </div>

                                <div class="row">
                                <div class="col-xs-10"><span class="jq-c-lable">Name</span> </div> <div class="col-xs-36"> <input type="text" id="insert-internet-link-name" /></div>
                                </div>
                            </div>
                          

                            </fieldset>

                             <fieldset class="clear ">

                            <div class="legend ">
                               Preview 
                            </div>
                                  <div style="margin:5px;">
                                    
                                      
                                      <center class="insert-link-preview">

                                      </center>


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



          <!------------------------------   COpacity  --------------------------------------->

      <%--  <div id="control-opacity" name="opacity" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Opacity</div>
           
                <div class="control-opacity-controls">
                    <center>
                      
                        
                            <fieldset class="clear ">

                            <div class="legend " style="width:200px;">
                               Opacity
                            </div>
                                   <div class="control-o-opacity" style="background-color:black; margin:15px;"/>

                            </fieldset>

                           
                    </center>

                    
                </div>
        </div>--%>


          <!------------------------------   CBorderShadow  --------------------------------------->

      <%--  <div id="control-border-shadow" name="bordershadow" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area"> Border Glow / Shadow </div>
           
                <div class="control-bs-controls">
                  
                  
                             <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Horizontal Spacing"> Horizontal Spacing </span>
                 </div>     
              <div class="col-xs-30">
                  <input class="control-b-s-h control-b-s" value="0"/>
              </div>
            </div>

                        
                             <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Vertical Spacing">Vertical Spacing </span>
                 </div>     
              <div class="col-xs-30">
                  <input class="control-b-s-v control-b-s" value="0" />
              </div>
            </div>


                          <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Blur"> Blur </span>
                 </div>     
              <div class="col-xs-30">
                    <input class="control-b-s-blur control-b-s" value="0" />
              </div>
            </div>


                        
                          <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Color"> Color </span>
                 </div>     
              <div class="col-xs-30">
                    <input class="b-s-color"/>
              </div>
            </div>

                          <center>   <button class="btn btn-primary b-s-glow">Glow</button>   </center>

                        
                          
                             <button class="btn btn-danger b-s-remove">Clear Border Shadow</button>   

                           
                    

                    
                </div>
        </div>--%>


         <!------------------------------   CFrontBack  --------------------------------------->

      <%--  <div id="control-zindex" name="zindex" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Change Element To Front / Back </div>
           
                <div class="control-zindex-controls">
                    <center>
                      
                           
                            <fieldset class="clear ">

                            <div class="legend ">
                               Front/Back 
                            </div>
                                   <div class="control-z-zindex" style="background-color:black; margin:15px;"/>

                            </fieldset>

                           
                    </center>

                    
                </div>
        </div>--%>


        <!------------------------------   CColor  --------------------------------------->

     <%--   <div id="control-color" name="color" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Color</div>
           
                <div class="control-color-controls">
                   
                     <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Foreground Color">  Front </span>
                 </div>     
              <div class="col-xs-30">
                 <input type="text" value="#ffffff" class="control-color-foreground-color fb-color-picker" />
              </div>
            </div>
            
            <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Background Color"> Background </span>
                 </div>
              <div class="col-xs-30">
                    <input type="text" value="#ffffff" class="control-color-background-color fb-color-picker" />
              </div>
             </div>
                    

            <div style="background-color:lightgrey; text-align:center;">Color Gradient</div>
                 
            
             <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Start Color">Start Color </span>
                 </div>
              <div class="col-xs-30">
                    <input type="text" value="#ffffff" class="control-color-gradient-color-1 fb-color-picker-gradient" />
              </div>
             </div>
            
              <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="End Color">End Color </span>
                 </div>
              <div class="col-xs-30">
                    <input type="text" value="#ffffff" class="control-color-gradient-color-2 fb-color-picker-gradient" />
              </div>
             </div>                   
                <button class="remove-gradient btn btn-danger btn-sm" style="margin:2px;" >Clear Color</button>                  
             
                    
                    
                </div>
        </div>--%>

   
        <!------------------------------ CBi Image Lib ------------------------------------>
        
           <div id="control-image-bi-library" name="bi-image-library" class="control-page"  >
           
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">images</div>
            
                        <fieldset class="clear">

                        

                            <div id="imageLibrary" class="image-library">
                                
                               <img class="loading" src="Content/loading/colors.gif" />
                            
                            </div>

                             <span class="btn btn-primary load-more-images" style="margin:4px;">Load More Images</span>

                        </fieldset>

                      <div class="controls-action"> 
                       <span class="btn btn-danger  btn-file">Upload<input type="file" multiple="multiple" class="image-file-upload" /></span>
                            <button class=" btn btn-primary action-button-insert-bi-image">Insert</button>
                       </div>
                    
          
        </div>

        <!------------------------------- CBI CBackground Image ------------------------------>
        
       <%--   <div id="control-bi" name="bi" class="control-page" >
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
            <div class="control-move-area">Background Image</div>
           
                <div class="control-bi-controls">
                   


                                           <div class="row">  
             <div class="col-xs-18">
               <span class="small-name" title="Background Image">  Background Image </span>
                 </div>     
              <div class="col-xs-30">
                <input class="bi-selected-image" type="text" /> <button class="bi-browse" > Browse</button>
              </div>
            </div>


                     <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Repeat Image">   Repeat </span>
                 </div>
              <div class="col-xs-30">
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
              </div>
             </div>
                    

                         <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Attachment">   Attachment </span>
                 </div>
              <div class="col-xs-30">
                       <div class="cntrls">
                                <select class="ddn-control ddn-bi-attachment">
                                      <option selected value="scroll">Scroll</option>
                                      <option value="fixed">Fixed</option>
                                      <option value="local">Local</option>
                                 </select>
                                      </div>
              </div>
             </div>

                      <div class="row">
             <div class="col-xs-18">
                <span class="small-name" title="Position">   Position </span>
                 </div>
              <div class="col-xs-30">
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
              </div>
             </div>
                               
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
                    
                   <button class="remove-bi btn btn-danger btn-sm" style="margin:2px;">Clear Background Image</button>
                </div>
        </div>--%>
        

          <!------------------------------   CPadding  -------------------------------------->

        <style>
            .jq-padding-advanced {
                /*display:none;*/
            }
        </style>
   <%-- <div id="control-padding" name="padding" class='control-padding control-page' >
           
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
             <div class="control-move-area">Padding</div>
           
                <div class="control-padding-controls">
                    <center>
                       
                          
                            <div class="">
                                <fieldset class="clear">
                                  
                        
                                    <div clas="row">
                                        <div class="col-xs-48">

                                            <div class="row border-thickness-padding-row border-all-divider">

                                                <div class="col-xs-16"> <span class="jq-c-lable"> All: </span></div>
                                                <div class="col-xs-32">

                                                     <input class="control-padding-all control-padding-padding" />

                                                </div>

                                            </div>

                                            <div class="row border-thickness-padding-row jq-padding-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Left: </span></div>
                                                 <div class="col-xs-32">

                                                    <input class="control-padding-left control-padding-padding" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-padding-advanced" >

                                                <div class="col-xs-16"><span class="jq-c-lable">Right:</span></div>
                                                  <div class="col-xs-32">
                                                    <input class="control-padding-right control-padding-padding"  />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-padding-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Top:</span></div>
                                                 <div class="col-xs-32">

                                                      <input class="control-padding-top control-padding-padding" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-padding-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Bottom:</span></div>
                                                  <div class="col-xs-32">

                                                     <input class="control-padding-bottom control-padding-padding"  />
                                                    
                                                </div>

                                                
                                            </div>

                                            
                                           
                                        </div>
                                     
                                        
                                        </div>
                                       </fieldset>
                                    </div>        

                         <div class="controls-action">
                
                           <button class="remove-padding btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Padding</button>     <a class="padding-advanced-show" style="font-weight:bold;" href="#">Advanced</a> 
                         
                         </div>

                        

                    </center>
                </div>
          </div>--%>


          <!------------------------------   CMargin  -------------------------------------->

        <style>
            -advanced {
                /*display:none;*/
            }
        </style>

        <%-- <div id="control-margin" name="margin" class='control-margin control-page' >
           
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
             <div class="control-move-area">Margin</div>
           
                <div class="control-margin-controls">
                    <center>
                       
                            <div class="">
                                <fieldset class="clear">
                                  
                        
                                    <div class="row">
                                        <div class="col-xs-48">

                                            <div class="row border-thickness-padding-row border-all-divider">

                                                <div class="col-xs-16"><span class="jq-c-lable">All:</span></div>
                                                <div class="col-xs-32">

                                                     <input class="control-margin-all control-margin-margin" />

                                                </div>

                                            </div>

                                            <div class="row border-thickness-padding-row jq-margin-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Left:</span> </div>
                                                 <div class="col-xs-32">

                                                    <input class="control-margin-left control-margin-margin" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-margin-advanced" >

                                                <div class="col-xs-16"><span class="jq-c-lable">Right:</span></div>
                                                  <div class="col-xs-32">
                                                    <input class="control-margin-right control-margin-margin"  />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-margin-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Top:</span></div>
                                                 <div class="col-xs-32">

                                                      <input class="control-margin-top control-margin-margin" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-margin-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Bottom:</span></div>
                                                  <div class="col-xs-32">

                                                     <input class="control-margin-bottom control-margin-margin"  />
                                                    
                                                </div>

                                            </div>

                                            

                                        </div>
                                     

                                        </div>
                        
                                    </fieldset>               
                                    </div> 
                        
                               

                         <div class="controls-action">
                
                           <button class="remove-margin btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Margin</button>     <a class="margin-advanced-show" style="font-weight:bold;" href="#">Advanced</a> 
                         
                         </div>

                        

                    </center>
                </div>
          </div>--%>

        <!------------------------------   CBorder  -------------------------------------->

       <%--  <div id="control-border" name="border" class='control-border control-page' >
           
            
            <div class="close-panel"> <span class="close-button" onclick="jQuery(this).closest('.control-page').hide();">X</span> </div>
             <div class="control-move-area">Border</div>
           
                <div class="control-border-controls">
                    <center>
                       

                            <div class="">
                                <fieldset class="clear">
                                  
                        
                                    <div clas="row">
                                        <div class="col-xs-24">

                                            <div class="row border-thickness-padding-row border-all-divider">

                                                <div class="col-xs-16"><span class="jq-c-lable">All:</span></div>
                                                <div class="col-xs-32">

                                                     <input class="control-border-thickness-all control-border-thickness" />

                                                </div>

                                            </div>

                                            <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Left:</span> </div>
                                                 <div class="col-xs-32">

                                                    <input class="control-border-thickness-left control-border-thickness" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced" >

                                                <div class="col-xs-16"><span class="jq-c-lable">Right:</span></div>
                                                  <div class="col-xs-32">
                                                    <input class="control-border-thickness-right control-border-thickness"  />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Top:</span></div>
                                                 <div class="col-xs-32">

                                                      <input class="control-border-thickness-top control-border-thickness" />
                                                     
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-16"><span class="jq-c-lable">Bottom:</span></div>
                                                  <div class="col-xs-32">

                                                     <input class="control-border-thickness-bottom control-border-thickness"  />
                                                    
                                                </div>

                                            </div>

                                            

                                        </div>
                                        <div class="col-xs-24">
                                     
                                             <div class="row border-color-padding-row border-all-divider">
                                             
                                                 <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="#ffffff" class="color-picker color-picker-all" />

                                                 </div>
                                                 
                                              
                                              
                                                 
                                                
                                                  </div>
                                            <div class="row border-color-padding-row jq-border-advanced">
                                              
                                                 <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="#ffffff" class="color-picker color-picker-left" />

                                                 </div>
                                                 
                                              
                                              


                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="#ffffff" class="color-picker color-picker-right"/>

                                                 </div>
                                                 
                                             
                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="#ffffff" class="color-picker color-picker-top"/>

                                                 </div>
                                                 
                                              
                                                
                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-48">

                                                     <input type="text" id="color-picker" value="#ffffff" class="color-picker color-picker-bottom"/>

                                                 </div>
                                                 
                                              
                                           
                                                 </div>
                                               </div>

                                             <div class="row border-thickness-padding-row ">

                                                <div class="col-xs-16"><span class="jq-c-lable">Border Corner Round:</span></div>
                                                  <div class="col-xs-20">

                                                     <input class="control-border-thickness-radius " />
                                                     
                                                </div>

                                            </div>
                                             
                                        </div>
                                       
                                    </div>        

                         
                      

                         <div class="controls-action">
                
                        <button class="remove-border btn btn-danger btn-sm" style="margin:2px; font-size:12px;" >Clear Border</button>        <a class="border-advanced-show" style="font-weight:bold;" href="#">Advanced</a> 
                         
                         </div>

                        

                    </center>
                </div>
          </div>
    --%>
          <!------------------------------ CInsert clipborad ------------------------------------>

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

       
     <!------------------------------ CInsert Html ------------------------------------>

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

        <!------------------------------ CInsert Text ------------------------------------>

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
                        <div class="jqte-editor"  contenteditable="true" style="background-color:white; min-height:200px; min-width:250px; border:1px solid black; border-radius:5px;" ></div>


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
            <%-- <li>
                <div class="li smart-menu-insert-empty-space">Spacer</div>
            </li>--%>
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
                <div class="li ctx-menu-add-row">Add Row</div>
            </li>
            <li>
                <div class="li ctx-menu-insert">
                    Insert
                    <div class="jq-menu-arrow"></div>
                </div>
                <div class="innerListContainer">
                    <ul>
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

            <%--Properties Menu--%>
            <%-- <li>
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
                            <div class="li ctx-menu-color">Color</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-border">Border</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-margin">Margin</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-padding">Padding</div>
                        </li>
                    </ul>
                </div>
            </li>


            <li>
                <div class="li ctx-menu-more-properties">
                    More Properties
                    <div class="jq-menu-arrow"></div>
                </div>
                <div class="innerListContainer">
                    <ul>
                        <li>
                            <div class="li ctx-menu-background-image">Background Image</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-border-shadow">Border Glow / Shadow</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-opacity">Opacity</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-z-index">Front/Back Position</div>
                        </li>

                    </ul>
                </div>
            </li>--%>
            <%--Properties Menu End--%>
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

    <input type="text" id="viewstate" class="viewstate hide" value="<%=CookieValue%>" />


    <style>
        .insert-t ols border: 1px double ta border-color: t n; inli e-blck; background- ay; px "hel etica d; botto igh : z index
        }

        padding: 15p font-weight bod; inline block; t: 1px solid t n cursor: point it-ti padding 15px; -weight: bold; nd-color: bur ywod; l ne-block; bo -right: 1px solid tan;
    </style>

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


        /// need to check this 
        //var loading = jQuery(".loading.clonable").clone();

        //loading.addClass("new")
        //loading.removeClass("clonable");
        //loading.removeClass("hide");
        //jQuery(".control-templates").append(loading);

    </script>

    <div style="display: none;">
        <div id="copyright">Copyright &copy; 2015 <a href="http://apycom.com/">Apycom jQuery Menus</a></div>
    </div>

    <div id="site-help">
        <ol>
            <li>You can only insert elements in a column blocks.</li>
            <li>If you are unable to drag a element, then press [Esc] or Escape.</li>
            <li>You can only paste copied element in a column block.</li>

        </ol>
    </div>



    <table id="my-palette" style="display: none; position: absolute;" class="my-palette">
        <tbody>
            <tr>
                <td style="background-color: #ffffff" data-color="#ffffff"><span></span></td>
                <td style="background-color: #000000" data-color="#000000"><span></span></td>
                <td style="background-color: #eeece1" data-color="#eeece1"><span></span></td>
                <td style="background-color: #1f497d" data-color="#1f497d"><span></span></td>
                <td style="background-color: #4f81bd" data-color="#4f81bd"><span></span></td>
                <td style="background-color: #c0504d" data-color="#c0504d"><span></span></td>
                <td style="background-color: #9bbb59" data-color="#9bbb59"><span></span></td>
                <td style="background-color: #8064a2" data-color="#8064a2"><span></span></td>
                <td style="background-color: #4bacc6" data-color="#4bacc6"><span></span></td>
                <td style="background-color: #f79646" data-color="#f79646"><span></span></td>
            </tr>

            <tr class="top">
                <td style="background-color: #f2f2f2" data-color="#f2f2f2"><span></span></td>
                <td style="background-color: #7f7f7f" data-color="#7f7f7f"><span></span></td>
                <td style="background-color: #ddd9c3" data-color="#ddd9c3"><span></span></td>
                <td style="background-color: #c6d9f0" data-color="#c6d9f0"><span></span></td>
                <td style="background-color: #dbe5f1" data-color="#dbe5f1"><span></span></td>
                <td style="background-color: #f2dcdb" data-color="#f2dcdb"><span></span></td>
                <td style="background-color: #ebf1dd" data-color="#ebf1dd"><span></span></td>
                <td style="background-color: #e5e0ec" data-color="#e5e0ec"><span></span></td>
                <td style="background-color: #dbeef3" data-color="#dbeef3"><span></span></td>
                <td style="background-color: #fdeada" data-color="#fdeada"><span></span></td>
            </tr>
            <tr class="in">
                <td style="background-color: #d8d8d8" data-color="#d8d8d8"><span></span></td>
                <td style="background-color: #595959" data-color="#595959"><span></span></td>
                <td style="background-color: #c4bd97" data-color="#c4bd97"><span></span></td>
                <td style="background-color: #8db3e2" data-color="#8db3e2"><span></span></td>
                <td style="background-color: #b8cce4" data-color="#b8cce4"><span></span></td>
                <td style="background-color: #e5b9b7" data-color="#e5b9b7"><span></span></td>
                <td style="background-color: #d7e3bc" data-color="#d7e3bc"><span></span></td>
                <td style="background-color: #ccc1d9" data-color="#ccc1d9"><span></span></td>
                <td style="background-color: #b7dde8" data-color="#b7dde8"><span></span></td>
                <td style="background-color: #fbd5b5" data-color="#fbd5b5"><span></span></td>
            </tr>
            <tr class="in">
                <td style="background-color: #bfbfbf" data-color="#bfbfbf"><span></span></td>
                <td style="background-color: #3f3f3f" data-color="#3f3f3f"><span></span></td>
                <td style="background-color: #938953" data-color="#938953"><span></span></td>
                <td style="background-color: #548dd4" data-color="#548dd4"><span></span></td>
                <td style="background-color: #95b3d7" data-color="#95b3d7"><span></span></td>
                <td style="background-color: #d99694" data-color="#d99694"><span></span></td>
                <td style="background-color: #c3d69b" data-color="#c3d69b"><span></span></td>
                <td style="background-color: #b2a2c7" data-color="#b2a2c7"><span></span></td>
                <td style="background-color: #92cddc" data-color="#92cddc"><span></span></td>
                <td style="background-color: #fac08f" data-color="#fac08f"><span></span></td>
            </tr>
            <tr class="in">
                <td style="background-color: #a5a5a5" data-color="#a5a5a5"><span></span></td>
                <td style="background-color: #262626" data-color="#262626"><span></span></td>
                <td style="background-color: #494429" data-color="#494429"><span></span></td>
                <td style="background-color: #17365d" data-color="#17365d"><span></span></td>
                <td style="background-color: #366092" data-color="#366092"><span></span></td>
                <td style="background-color: #953734" data-color="#953734"><span></span></td>
                <td style="background-color: #76923c" data-color="#76923c"><span></span></td>
                <td style="background-color: #5f497a" data-color="#5f497a"><span></span></td>
                <td style="background-color: #31859b" data-color="#31859b"><span></span></td>
                <td style="background-color: #e36c09" data-color="#e36c09"><span></span></td>
            </tr>
            <tr class="bottom">
                <td style="background-color: #7f7f7f" data-color="#7f7f7f"><span></span></td>
                <td style="background-color: #0c0c0c" data-color="#0c0c0c"><span></span></td>
                <td style="background-color: #1d1b10" data-color="#1d1b10"><span></span></td>
                <td style="background-color: #0f243e" data-color="#0f243e"><span></span></td>
                <td style="background-color: #244061" data-color="#244061"><span></span></td>
                <td style="background-color: #632423" data-color="#632423"><span></span></td>
                <td style="background-color: #4f6128" data-color="#4f6128"><span></span></td>
                <td style="background-color: #3f3151" data-color="#3f3151"><span></span></td>
                <td style="background-color: #205867" data-color="#205867"><span></span></td>
                <td style="background-color: #974806" data-color="#974806"><span></span></td>
            </tr>

            <tr class="standard-colors">
                <td style="background-color: #c00000" data-color="#c00000"><span></span></td>
                <td style="background-color: #ff0000" data-color="#ff0000"><span></span></td>
                <td style="background-color: #ffc000" data-color="#ffc000"><span></span></td>
                <td style="background-color: #ffff00" data-color="#ffff00"><span></span></td>
                <td style="background-color: #92d050" data-color="#92d050"><span></span></td>
                <td style="background-color: #00b050" data-color="#00b050"><span></span></td>
                <td style="background-color: #00b0f0" data-color="#00b0f0"><span></span></td>
                <td style="background-color: #0070c0" data-color="#0070c0"><span></span></td>
                <td style="background-color: #FF00FF" data-color="#FF00FF"><span></span></td>
                <td style="background-color: #7030a0" data-color="#7030a0"><span></span></td>
            </tr>
        </tbody>
    </table>

    <div id="interface_bottom">
        <div id="controls_wrap">
            <div id="controls">
                <div id="controls_nav">
                    <menu id="leaf_types">
                        <li data-name="webs.bldr.modules.container.popular" class="active"><a class="leaf_type_btn">Popular</a></li>
                        <li data-name="webs.bldr.modules.container.structure" class=""><a class="leaf_type_btn">Structure</a></li>
                        <li data-name="webs.bldr.modules.container.media" class=""><a class="leaf_type_btn">Media</a></li>
                        <li data-name="webs.bldr.modules.container.social" class=""><a class="leaf_type_btn">Social</a></li>
                        <li data-name="webs.bldr.modules.container.commerce" class=""><a class="leaf_type_btn">Commerce</a></li>
                        <li data-name="webs.bldr.dock.ads.appfeeds" class=""><a class="leaf_type_btn">Other</a></li>
                    </menu>

                </div>
            </div>
            <div id="toaster">
                <div id="leaf_dock" style="left: -120px;">
                    <div id="leaf_wrap">
                        <div id="leaf_container" class="" style="margin-left: -44px;">
                            <ul class="leaf_type active">
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
                            <ul class="leaf_type ">
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

    <button id="control-common-execute" style="display: none;">
    </button>
    <button id="undo-redo-execute" style="display: none;">
    </button>

</body>
</html>
