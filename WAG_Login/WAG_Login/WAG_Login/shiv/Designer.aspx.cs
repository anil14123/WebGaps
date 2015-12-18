using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using WAG_Login_Page;

namespace WebAppGoTypeScript_X_Modulerization
{
    public partial class Default : System.Web.UI.Page
    {
        private const string AntiXsrfTokenKey = "__AntiXsrfToken";
        private const string AntiXsrfUserNameKey = "__AntiXsrfUserName";
        private string _antiXsrfTokenValue;

        public string SiteName;
        public string PageName;
        public string SiteId;

        public string CookieValue;

        protected void Page_Init(object sender, EventArgs e)
        {
            // The code below helps to protect against XSRF attacks
            var requestCookie = Request.Cookies[AntiXsrfTokenKey];
            Guid requestCookieGuidValue;
            if (requestCookie != null && Guid.TryParse(requestCookie.Value, out requestCookieGuidValue))
            {
                // Use the Anti-XSRF token from the cookie
                _antiXsrfTokenValue = requestCookie.Value;
                Page.ViewStateUserKey = _antiXsrfTokenValue;
            }
            else
            {
                // Generate a new Anti-XSRF token and save to the cookie
                _antiXsrfTokenValue = Guid.NewGuid().ToString("N");
                Page.ViewStateUserKey = _antiXsrfTokenValue;

                var responseCookie = new HttpCookie(AntiXsrfTokenKey)
                {
                    HttpOnly = true,
                    Value = _antiXsrfTokenValue
                };
                if (FormsAuthentication.RequireSSL && Request.IsSecureConnection)
                {
                    responseCookie.Secure = true;
                }
                Response.Cookies.Set(responseCookie);
            }

            Page.PreLoad += master_Page_PreLoad;
        }

        protected void master_Page_PreLoad(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Set Anti-XSRF token
                ViewState[AntiXsrfTokenKey] = Page.ViewStateUserKey;
                ViewState[AntiXsrfUserNameKey] = Context.User.Identity.Name ?? String.Empty;
            }
            else
            {
                // Validate the Anti-XSRF token
                if ((string)ViewState[AntiXsrfTokenKey] != _antiXsrfTokenValue
                    || (string)ViewState[AntiXsrfUserNameKey] != (Context.User.Identity.Name ?? String.Empty))
                {
                    throw new InvalidOperationException("Validation of Anti-XSRF token failed.");
                }
            }
        }


        protected void Page_Load(object sender, EventArgs e)
        {
            SiteName = Request.QueryString["SiteName"];
            PageName = Request.QueryString["PageName"];

            HttpCookie authCookie = Request.Cookies[".AspNet.ApplicationCookie"];

            CookieValue = authCookie.Value;

            HttpCookie myCookie = new HttpCookie("jQuery");
            HttpCookie myCookie2 = new HttpCookie("hatway");
            DateTime now = DateTime.Now;

            myCookie.Value = CookieValue;

            string key = EDC2.EDC.Key;

            myCookie2.Value = "Ae343efDDgA/dDFEFAadA4dD/AeD=ADDED/D====";

            // Add the cookie.
            myCookie.Expires = authCookie.Expires;
            myCookie2.Expires = authCookie.Expires;

            Response.Cookies.Add(myCookie);
            Response.Cookies.Add(myCookie2);

            var entities = new WebPageEntities();

            var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

            if (user != null)
            {
                SiteId = user.Id;
            }

            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.AppendCacheExtension("no-store, must-revalidate");
            Response.ExpiresAbsolute = DateTime.Now.AddDays(-1);
            Response.AppendHeader("Pragma", "no-cache");
            Response.AppendHeader("Expires", "0");
            Response.Cache.SetNoServerCaching();
            Response.Buffer = true;
        }


        protected void Unnamed_LoggingOut(object sender, LoginCancelEventArgs e)
        {
            Context.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
        }

        Random random = new Random();

        string GetRandomString(int length)
        {
            try
            {
                var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                var stringChars = new char[length];


                for (int i = 0; i < stringChars.Length; i++)
                {
                    stringChars[i] = chars[random.Next(chars.Length)];
                }

                var finalString = new String(stringChars);

                return finalString;
            }
            catch
            {
                return "NoCGen";
            }
        }

        private string GetUserImagesPath()
        {
            return Server.MapPath(".") + "/iimages/";
        }

    }
}