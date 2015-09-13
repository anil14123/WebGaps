<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Designer.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.Default" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeScript HTML App</title>


    <script class="add-to-page jquery" src="/Library/jquery-1.11.2.min.js"></script>


    <script src="/Library/jquery-ui.js"></script>

    <link href="/Content/jquery-ui.min.css" rel="stylesheet" />

    <link class="add-to-page" href="/Content/bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet" />
    <%--  <script src="Content/bootstrap-3.3.5-dist/js/bootstrap.js"></script>--%>

    <link rel="stylesheet" href="/app.css" type="text/css" />
    <link rel="stylesheet" href="/controls.css" type="text/css" />
    <link href="/ContextMenu.css" rel="stylesheet" />
    <link class="add-to-page" href="/Themes/457/theme.css" rel="stylesheet" />
    <link href="/Third-Party/jte/jquery-te-1.4.0.css" rel="stylesheet" />
    <link href="/JQte.css" rel="stylesheet" />
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



    <div class="jq-plus-container jq-plus-container-not-used">

        <div class="jq-plus-element">

            <%--  <span class="jq-plus-prev jq-plus">
             <br /> Swap sample
            </span>--%>

            <span class="jq-plus-prev jq-plus">+
            </span>
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

            <div class="col-xs-3">
                <button class=" create-layout-show-button jq-save-margin btn btn-toolbar btn-xs">
                    <img alt="" class="layout-img" src="/content/layout/layout.png" />
                    Layout</button>
            </div>

            <div class="col-xs-3">
                <button class=" close-preview jq-save-margin  btn btn-toolbar btn-xs">
                    <img alt="" class="preview-img" src="/content/preview/preview.png" />
                    Close Preview</button>
                <button class=" show-preview jq-save-margin btn btn-toolbar btn-xs">
                    <img alt="" class="preview-img" src="/content/preview/preview.png" />
                    Preview</button>


            </div>
            <div class="col-xs-3">

                <button class="jq-undo-buttons jq-save-margin jq-undo btn btn-toolbar btn-xs">
                    <img alt="" class="undo-img" src="/content/undo/undo.png" />
                    Undo</button>
                <button class="jq-undo-buttons jq-save-margin  jq-redo btn btn-toolbar btn-xs">
                    Redo
                    <img alt="" class="undo-img" src="/content/undo/redo.png" /></button>

                <button class="jq-save jq-save-margin btn btn-toolbar btn-xs" style="margin-left: 15px; margin-right: 15px;">
                    <img alt="" class="save-img" src="/content/save/save.png" />
                    Save</button>

            </div>

            <div class="col-xs-3">

                <div class="row">
                    <div class="col-xs-8">
                        <button class="page-propetries-button  btn btn-toolbar btn-xs jq-save-margin">
                            <img alt="" class="settings-img" src="/content/settings/settings.png" />
                            Page</button>
                        <button class="properties-button  btn btn-toolbar btn-xs btn jq-save-margin">
                            <img alt="" class="settings-img" src="/content/settings/settings.png" />
                            Properties</button>

                    </div>
                    <div class="col-xs-4">
                        <form name="logout" runat="server">
                            <asp:LoginStatus runat="server" CssClass="jq-logout" LogoutAction="Redirect" LogoutText="Log off" LogoutPageUrl="~/" OnLoggingOut="Unnamed_LoggingOut" />
                        </form>
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

                                <div class="col-xs-4"> 
                            <div class="legend ">
                               Height 
                            </div>
                                    </div>
                             
                                <div class="col-xs-8 control-p">
                                    <div class='smart-menu-height smart-menu-control'  style="background-color:black;"></div>
                                     <div class="height-px">0px</div>
                               </div>
                            </fieldset>

                             <fieldset class="clear row">

                                 <div class="col-xs-4">
                            <div class="legend ">
                               Width 
                            </div>
                                     </div>
                            
                                 <div class="col-xs-8 control-p">
                                  <div class='smart-menu-width smart-menu-control'  style="background-color:black;"></div>
                        <div class="height-px">0px</div>
                        
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

                                <div class="col-xs-4">
                            <div class="legend ">
                               Foreground 
                            </div>
                                    </div>

                                <div class="col-xs-8">
                                   # <input type="text" value="000000" class="control-color-foreground-color fb-color-picker" />
                                    </div>
                            </fieldset>

                             <fieldset class="clear row">

                                 <div class="col-xs-4">
                            <div class="legend ">
                               Background 
                            </div>
                                     </div>

                                 <div class="col-xs-8">
                                   # <input type="text" value="90bd64" class="control-color-background-color fb-color-picker" />
                                     </div>
                            </fieldset>

                          

                            

                        </fieldset>
                    
                    
                </div>

                <hr />

                 <div class="control-border-controls">
                      <fieldset class="clear row">

                                 <div class="col-xs-4">
                            <div class="legend ">
                               Font 
                            </div>
                                     </div>

                           <div class="col-xs-8"> 
                              
                              <select class="ddn-control ddn-font-lists ddn-font-pinned" ></select> 
                              <%-- <div class="ddn-font-lists-sample-pinned"></div>--%>
                               <select class="ddn-control ddn-font-size ddn-font-size-pinned" ></select> 
                               

                            </div>
                      </fieldset>
                    </div>
                <hr />
                  <div class="control-border-controls">
                   

                     <fieldset class="clear row">

                                 <div class="col-xs-4">
                            <div class="legend ">
                               Border 
                            </div>
                                     </div>

                         <div class="col-xs-5"> 
                       <div class="control-border-thickness-all control-border-thickness" style="background-color:black;"></div>

                                                    <div class="border-px">0px</div>
                             </div>

                         <div class="col-xs-3">
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

        <div id="control-templates" name="templates" class="control-page control-templates control-active" style="display:block;" >
           
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

                           <%-- <div class="page-name legend ">
                              
                            </div>--%>

                            <div id="imageLibrary" class="image-library">
                                
                                 <img class="loading" src="Content/loading/colors.gif" />
                            
                            </div>

                           

                        </fieldset>

                      <div class="controls-action"> 
                       <a href="/Dynamic/UploadToImageLibrary.aspx" target="_blank" class="action-button action-link action-button-image-upload">Upload Image</a>
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
                <div class="col-xs-12">
                   
                       
                          <div id="sm-controls" class='hw-menu-controls smart-menu-controls-table smart-menu-height-width'>

                               
            <fieldset class="clear ">
              
                            <div class="legend ">
                               Height 
                            </div>
              <br />
                        <div class='smart-menu-height smart-menu-control' style="background-color:black;"></div>
                        
                        <div class="height-px">0px</div>
                        
                </fieldset>

                   <fieldset class="clear ">

                            <div class="legend ">
                               Width 
                            </div>
                       <br />
                        <div class='smart-menu-width smart-menu-control' style="background-color:black;" ></div>
                        <div class="height-px">0px</div>
                        
                     </fieldset>
           
       

        </div>

                       
                 
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
                                </div>

                                 <div class="bi-h-w" >
                                     <div class='smart-menu-bi-height smart-menu-bi-control' style="background-color:black;"></div>
                        
                                     <div class="height-px">0px</div>

                                 </div>

                                <div class="bi-h-w">
                                    <div class='smart-menu-bi-width smart-menu-bi-control' style="background-color:black;"></div>
                        
                                     <div class="height-px">0px</div>
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
                                        <div class="col-xs-6">

                                            <div class="row border-thickness-padding-row border-all-divider">

                                                <div class="col-xs-4">All:</div>
                                                <div class="col-xs-8">

                                                     <div class="control-border-thickness-all control-border-thickness" style="background-color:black;"></div>

                                                    <div class="border-px">0px</div>

                                                </div>

                                            </div>

                                            <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-4">Left: </div>
                                                 <div class="col-xs-8">

                                                    <div class="control-border-thickness-left control-border-thickness" style="background-color:black;"></div>
                                                      <div class="border-px">0px</div>

                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced" >

                                                <div class="col-xs-4">Right:</div>
                                                  <div class="col-xs-8">
                                                    <div class="control-border-thickness-right control-border-thickness" style="background-color:black;"></div>
                                                      <div class="border-px">0px</div>
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-4">Top:</div>
                                                 <div class="col-xs-8">

                                                      <div class="control-border-thickness-top control-border-thickness" style="background-color:black;"></div>
                                                      <div class="border-px">0px</div>
                                                </div>

                                            </div>
                                              <div class="row border-thickness-padding-row jq-border-advanced">

                                                <div class="col-xs-4">Bottom:</div>
                                                  <div class="col-xs-8">

                                                     <div class="control-border-thickness-bottom control-border-thickness" style="background-color:black;"></div>
                                                      <div class="border-px">0px</div>
                                                </div>

                                            </div>

                                            

                                        </div>
                                        <div class="col-xs-6">
                                     
                                             <div class="row border-color-padding-row border-all-divider">
                                             
                                                 <div class="col-xs-12">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-all"></input>

                                                 </div>
                                                 
                                              
                                              
                                                 
                                                
                                                  </div>
                                            <div class="row border-color-padding-row jq-border-advanced">
                                              
                                                 <div class="col-xs-12">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-left"></input>

                                                 </div>
                                                 
                                              
                                              


                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-12">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-right"></input>

                                                 </div>
                                                 
                                             
                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-12">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-top"></input>

                                                 </div>
                                                 
                                              
                                                
                                               </div>
                                              <div class="row border-color-padding-row jq-border-advanced">
                                               <div class="col-xs-12">

                                                     <input type="text" id="color-picker" value="000000" class="color-picker color-picker-bottom"></input>

                                                 </div>
                                                 
                                              
                                           
                                                 </div>
                                               </div>

                                             <div class="row border-thickness-padding-row ">

                                                <div class="col-xs-4">Border Corner Round:</div>
                                                  <div class="col-xs-5">

                                                     <div class="control-border-thickness-radius " style="background-color:black;"></div>
                                                      <div class="border-px">0px</div>
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
    

        <!------------------------------ Insert Text ------------------------------------>

        <div id="control-insert-text" name="insert-text" class="control-page" style="">
          
            <div class="close-panel"> <span class="close-button">X</span> </div>
            <div class="control-move-area">Insert Text</div>
            <div class="row" style="border:none; outline:none;">
                <div class="col-xs-12">
                    <fieldset class="clear">

                        <%--<div class="page-name legend ">
                            
                        </div>--%>

                        <div class="jq-template" template-id="control-font-style">

                        </div>
                        <div id="text_edtor_as_is" style="border:1px solid black; border-radius:5px;" class="jq-drag-cancle">
                            <input name="input" type="text" value="" class="insert-text-jte">
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
                <div class="li smart-menu-insert-youtube">Youtube</div>
            </li>
            <li>
                <div class="li smart-menu-insert-html">Html</div>
            </li>
            <li>
                <div class="li smart-menu-insert-css">Css</div>
            </li>

        </ul>
    </div>

    <div id="contextMenu">
        <ul id="contextMenuitems">

            <li>
                <div class="li ctx-menu-add-row">Add Columns</div>
            </li>
            <li>
                <div class="li ctx-menu-insert">Insert</div>
                <div class="innerListContainer">
                    <ul>
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
                            <div class="li ctx-menu-insert-menu">Menu</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-youtube">Youtube</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-html">Html</div>
                        </li>
                        <li>
                            <div class="li ctx-menu-insert-css">Css</div>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="li ctx-menu-properties">Properties</div>
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

</body>
</html>
