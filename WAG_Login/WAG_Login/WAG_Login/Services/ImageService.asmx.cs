using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using WAG_Login_Page;
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
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<ImageJQ> GetImages(int start, int pageSize)
        {
      
            List<ImageJQ> imagesList = new List<ImageJQ>();
            if (User.Identity.IsAuthenticated)
            {
                try
                {

                    var entities = new WebPageEntities();

                    var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

                    int count = entities.Images.OrderByDescending(k => k.id).Count(i => i.UserId == user.Id);

                    if (count > 0 && count > start)
                    {
                        var images = entities.Images.Where(i => i.UserId == user.Id).OrderByDescending(k=>k.id).Skip(start).Take(pageSize);

                        foreach (WAG_Login_Page.Image img in images)
                        {
                            ImageJQ image = new ImageJQ();
                            image.Path = "iimages/" + Convert.ToString(img.FileName).ToLower();

                            imagesList.Add(image);
                        }

                        if (imagesList.Count > 0)
                        {
                            imagesList = imagesList.Where(i => i.Path.Contains(".jpeg") || i.Path.Contains(".jpg") || i.Path.Contains(".gif") || i.Path.Contains(".png")).ToList();
                        }
                    }
                }
                catch (Exception ex)
                {

                }
            }

            return imagesList;
        }
    }
}
