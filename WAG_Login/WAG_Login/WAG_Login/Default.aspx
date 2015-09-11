<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.Default1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link href="/Content/jquery-ui.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/Content/bootstrap.css" />
    <link rel="stylesheet" href="/app.css" type="text/css" />
    <link rel="stylesheet" href="/controls.css" type="text/css" />
    <link href="/ContextMenu.css" rel="stylesheet" />
    <link href="/Themes/457/theme.css" rel="stylesheet" />
    <link href="/Third-Party/jte/jquery-te-1.4.0.css" rel="stylesheet" />
    <link href="/JQte.css" rel="stylesheet" />

    <link href="/Third-Party/colpick-jQuery-Color-Picker-master/css/colpick.css" rel="stylesheet" />
    <link href="/ColorPicker.css" rel="stylesheet" />
    <link href="/Cursors.css" rel="stylesheet" />

    <link href="/designer.css" rel="stylesheet" />
    <link href="/JqPlus.css" rel="stylesheet" />
    <link href="/SmartContextMenu.css" rel="stylesheet" />
    <link href="/Text.css" rel="stylesheet" />
    <link href="/DesignerPaddings.css" rel="stylesheet" />
    <link href="/EmptyLayout.css" rel="stylesheet" />

    <link href="/MediaQueries.css" rel="stylesheet" />

    <style>
        .float-left {
            float: left;
        }

        .square {
            width: 20px;
            height: 20px;
            background-color: lightgreen;
            margin: 5px;
            border-radius: 10px;
        }

        .bgreen {
            background-color: #ffd800;
        }

        .bblue {
            background-color: blue;
        }

        .blightgreen {
            background-color: #4cff00;
            ;
        }

        .bmaroon {
            background-color: maroon;
        }
    </style>

</head>
<body>
    <form id="form1" runat="server">
        <div>


            <div style="height: 500px; left: 45%; width: 300px; position: relative;">

                <div style="top: 45%; position: absolute;">
                    <marquee direction="right" dir="right">
                        <div class="float-left square bgreen"></div>
                        <div class="float-left square bblue"></div>
                        <div class="float-left square blightgreen"></div>
                        <div class="float-left square bmaroon"></div>
                        <div class="float-left square bgreen"></div></marquee>
                </div>

            </div>
        </div>
    </form>




    <%--<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>--%>
    <script src="/Library/jquery-1.11.2.min.js"></script>

    <%--<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>--%>
    <script src="/Library/jquery-ui.js"></script>
    <script src="/Third-Party/jte/uncompressed/jquery-te-1.4.0.js"></script>

    <script src="/Third-Party/colpick-jQuery-Color-Picker-master/js/colpick.js"></script>
    <link href="/Third-Party/jte/jquery-te-1.4.0.css" rel="stylesheet" />

    <script data-main="../TypeScript/app.js" src="/Library/require.js"></script>

    <script>

        jQuery(document).ready(function () {

            window.setTimeout(function () { window.location.href = "designer.aspx"; }, 3000);

        });

    </script>

</body>
</html>
