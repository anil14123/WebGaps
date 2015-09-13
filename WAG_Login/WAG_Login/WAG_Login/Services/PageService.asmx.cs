using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using WebAppGoLibrary;
using WebAppGoLibrary.Save;
using WebAppGoLibrary.Site;

namespace WebAppGoTypeScript_X_Modulerization.Services
{
    /// <summary>
    /// Summary description for PageService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class PageService : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string HelloWorld()
        {
            return "Hello World";
        }

        string UserDirectory;

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public bool SavePage(Save Obj, string siteName, string pageName)
        {
            try
            {
                if (User.Identity.IsAuthenticated)
                {
                    string pageText = "";

                    pageText = Obj.scripts.ToString();
                    pageText += Obj.styles.ToString();
                    pageText += Obj.page.ToString();

                    string root = Server.MapPath(".");

                    var entities = new WAG_Login_Page.WagPageEntities();

                    var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

                    if (user != null)
                    {
                        var userFolder = Path.Combine(root, user.Id);

                        if (Directory.Exists(userFolder))
                        {

                            var siteFolder = Path.Combine(userFolder, siteName);

                            if (Directory.Exists(siteFolder))
                            {

                                pageName = pageName + ".html";

                                string filePath = Path.Combine(siteFolder, pageName);

                                if (File.Exists(filePath))
                                {
                                    try
                                    {
                                        File.WriteAllText(filePath, pageText);
                                    }
                                    catch
                                    {
                                        return false;
                                    }
                                }
                            }
                        }

                    }


                }

                return false;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public bool CreateSite(string siteName)
        {
            string root = Server.MapPath(".");

            var entities = new WAG_Login_Page.WagPageEntities();

            var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

            if (user != null)
            {
                var userFolder = Path.Combine(root, user.Id);

                if (Directory.Exists(userFolder))
                {

                    var siteFolder = Path.Combine(userFolder, siteName);

                    if (!Directory.Exists(siteFolder))
                    {
                        try
                        {
                            Directory.CreateDirectory(siteFolder);
                            return true;
                        }
                        catch
                        {
                            return false;
                        }
                    }
                }
            }


            return false;
        }
    }
}
