using System;
using System.Collections.Generic;
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
        public bool SavePage(Save Obj, string site, string pageName)
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

                    UserDirectory = User.Identity.Name;

                    UserDirectory = new EDC2.EDC().Encrypt(UserDirectory);

                    var folder = System.IO.Path.Combine(root, UserDirectory);

                    System.IO.Directory.CreateDirectory(folder);

                    pageName = pageName + ".html";

                    string filePath = System.IO.Path.Combine(folder, pageName);

                    if (!System.IO.File.Exists(filePath))
                    {
                        using (System.IO.FileStream fs = System.IO.File.Create(filePath))
                        {
                            fs.Close();
                            fs.Dispose();
                        }

                        System.IO.File.WriteAllText(filePath, pageText);
                    }
                    else
                    {
                        System.IO.File.WriteAllText(filePath, pageText);
                    }

                    return true;
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
        public Site CreateSite(Site Obj, string siteName)
        {

            return new Site();
        }
    }
}
