using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using WebAppGoLibrary;
using WebAppGoLibrary.Save;

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

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public bool SavePage(Save Obj, string site , string pageName)
        {
            try
            {
                string pageText = "";

                pageText = Obj.scripts.ToString();
                pageText += Obj.styles.ToString();
                pageText += Obj.page.ToString();

                string root = Server.MapPath(".");

                var folder = System.IO.Path.Combine(root, site);

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
            catch(Exception ex)
            {
                return false;
            }
        }
    }
}
