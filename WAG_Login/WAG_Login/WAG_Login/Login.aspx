<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="WebAppGoTypeScript_X_Modulerization.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="google-signin-client_id" content="291675768131-mome5f6q9asbaql9lmnpmrepa05r9umk.apps.googleusercontent.com">
   
    <script src="Library/jquery-1.11.2.min.js"></script>
    
     
    <script>

        function onSignIn(googleUser) {

            alert("ASDF");

          
        }

        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        }

        function onSuccess(googleUser) {

            var profile = googleUser.getBasicProfile();

            console.log('Logged in as: ' + profile.getName());

            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }

        function onFailure(error) {
            console.log(error);
        }

        function renderButton() {

           

            gapi.signin2.render('my-signin2', {
                'scope': 'https://www.googleapis.com/auth/plus.login',
                'width': 200,
                'height': 50,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': onSuccess,
                'onfailure': onFailure
            });
        }

    </script>

    <style>
     

    </style>

</head>
<body>
    <form id="form1" runat="server">
        <div>

         
            <div id="my-signin2"></div>


            <a href="#" onclick="signOut();">Sign out</a>
        </div>
    </form>

    <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
</body>
</html>
