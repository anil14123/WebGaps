using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using WebAppGoLibrary;

namespace WebAppGoTypeScript_X_Modulerization
{
    /// <summary>
    /// Summary description for ImageService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class ImageService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod( ResponseFormat = ResponseFormat.Json)]
        public List<ImageJQ> GetImages()
        {
            DirectoryInfo Folder;
            FileInfo[] Images;

            Folder = new DirectoryInfo( Server.MapPath(".") + "/../Content/Images/User_1/");
            Images = Folder.GetFiles();
            List<ImageJQ> imagesList = new List<ImageJQ>();

            for (int i = 0; i < Images.Length; i++)
            {
                ImageJQ image = new ImageJQ();
                image.Path = "/Content/Images/User_1/" + Convert.ToString(Images[i].Name).ToLower() ;

                imagesList.Add(image);
            }

            if(imagesList.Count >0)
            {
               imagesList = imagesList.Where(i => i.Path.Contains(".jpeg") || i.Path.Contains(".jpg") || i.Path.Contains(".gif") || i.Path.Contains(".png") ).ToList();
            }

            return imagesList;
        }
    }
}
