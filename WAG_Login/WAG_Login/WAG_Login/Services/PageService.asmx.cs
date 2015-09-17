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
using WebAppGoLibrary.Data;
using WAG_Login_Page;

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
        public Data SavePage(Save Obj, string siteName, string pageName)
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
                                
                                string filePath = Path.Combine(siteFolder, pageName);

                                if (File.Exists(filePath))
                                {
                                    try
                                    {
                                        File.WriteAllText(filePath, pageText);
                                        return new Data { Success = true };
                                    }
                                    catch(Exception ex)
                                    {
                                        return new Data { Success = false, ExceptionError = ex.Message };
                                    }
                                }
                                else
                                {
                                    return new Data { Success = false, Error="Page Does Not Exist" };
                                }
                            }
                        }

                    }


                }

                return new Data { Success = false };
            }
            catch (Exception ex)
            {
                return new Data { Success = false, Error = "", ExceptionError = ex.Message };
            }

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Data> GetSites()
        {
            List<Data> siteData = new List<Data>();

            if (User.Identity.IsAuthenticated)
            {
                var entities = new WagPageEntities();

                var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();
 
                if( user!= null)
                {
                    var sites = entities.Sites.Where(i => i.UserId == user.Id);

                    if( sites != null && sites.Count() > 0)
                    {
                        foreach(var site in sites)
                        {
                            siteData.Add(new Data { Name=site.SiteName });
                        }
                    }

                }

            }

            return siteData;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Data> GetPages(string siteName)
        {
            List<Data> pageData = new List<Data>();

            try
            {
                if (User.Identity.IsAuthenticated)
                {
                    var entities = new WagPageEntities();

                    var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();
                    var site = entities.Sites.Where(i => i.SiteName == siteName && i.UserId == user.Id).FirstOrDefault();


                    if (user != null)
                    {
                        var pages = entities.Pages.Where(i => i.SiteId == site.Id);

                        if (pages != null && pages.Count() > 0)
                        {
                            foreach (var page in pages)
                            {
                                string isFirstTime = page.IsFirstTime == "true" ? "?f=new" : "";
                                pageData.Add(new Data { Name = page.PageName , Link = page.PageName + isFirstTime });
                            }
                        }

                    }

                }
            }
            catch(Exception ex)
            {
                
            }

            return pageData;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Data CreateSite(string siteName)
        {
            if (User.Identity.IsAuthenticated)
            {
                string root = Server.MapPath(".");

                var entities = new WAG_Login_Page.WagPageEntities();
              
                var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();
                var site = entities.Sites.Where(i => i.SiteName == siteName && i.UserId == user.Id).FirstOrDefault();

                if(site != null)
                {
                    return new Data { Error = "Site Name already exists.<br>Choose another Name." };
                }

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

                                var siteToCreate = new WAG_Login_Page.Site();

                                siteToCreate.UserId = user.Id;
                                siteToCreate.SiteName = siteName;

                                entities.Sites.Add(siteToCreate);

                                entities.SaveChanges();

                                return new Data { Success = true };
                            }
                            catch(Exception ex)
                            {
                              
                                return new Data { Success = false, Error="" , ExceptionError = ex.Message };
                            }
                        }
                    }
                }

            }

            return new Data { Success = false };
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Data CreatePage(string siteName, string pageName)
        {
            if (User.Identity.IsAuthenticated)
            {
                string root = Server.MapPath(".");

                var entities = new WagPageEntities();

                var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();
                var site = entities.Sites.Where(i => i.SiteName == siteName && i.UserId == user.Id).FirstOrDefault();
                var pageE = entities.Pages.Where(i => i.SiteId == site.Id && i.PageName == pageName);

                if(site == null)
                {
                    return new Data { Error = "Please create [Site] first." };
                }

                if(pageE.Count()>0)
                {
                    return new Data { Error="Page Name already exists.<br>Choose another Name." };
                }

                if (user != null)
                {
                    var userFolder = Path.Combine(root, user.Id);

                    if (Directory.Exists(userFolder))
                    {

                        var siteFolder = Path.Combine(userFolder, siteName);

                        if (Directory.Exists(siteFolder))
                        {
                            try
                            {
                                pageName += ".html";
                                var page = Path.Combine(siteFolder, pageName);

                                if (!File.Exists(page))
                                {
                                    File.Create(page);

                                    var pageToCreate = new WAG_Login_Page.Page();

                                    pageToCreate.SiteId = site.Id;
                                    pageToCreate.PageName = pageName ;
                                    pageToCreate.IsFirstTime = "true";

                                    entities.Pages.Add(pageToCreate);

                                    entities.SaveChanges();

                                    return new Data { Success = true };
                                }
                            }
                            catch (Exception ex)
                            {

                                return new Data { Success = false, Error = "", ExceptionError = ex.Message };
                            }
                        }
                    }
                }

            }

            return new Data { Success = false };
        }
    }
}
