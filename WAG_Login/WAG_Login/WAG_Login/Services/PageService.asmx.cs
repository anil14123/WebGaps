using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using WebAppGoLibrary;
using WebAppGoLibrary.Save;
using WebAppGoLibrary.Site;
using WebAppGoLibrary.Data;
using WAG_Login_Page;
using System.Text.RegularExpressions;
using System.Web.Http;

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
        class SrcFiles
        {
            public string FolderPath;
            public string fileName;
            public string DestPath;

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UploadImages()
        {
            string resultError = "";


            if (User.Identity.IsAuthenticated)
            {

                if (HttpContext.Current.Request.Files.AllKeys.Any())
                {

                    try
                    {

                        var entities = new WAG_Login_Page.WagPageEntities();

                        var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

                        Image image = new Image();

                        var postedFiles = HttpContext.Current.Request.Files;
                        for (int f = 0; f < HttpContext.Current.Request.Files.Count; f++)
                        {
                            string fileName = "";
                            try
                            {

                                string ext = System.IO.Path.GetExtension(postedFiles[f].FileName).ToLower();

                                fileName = Path.GetFileName(postedFiles[f].FileName);

                                int maxFileSize = 5000;

                                int fileSize = postedFiles[f].ContentLength;
                                if (fileSize > (maxFileSize * 1024))
                                {
                                    if (ext != ".jpg" && ext != ".png" && ext != ".gif" && ext != ".jpeg")
                                    {
                                        resultError += fileName + " is Not a valid image.<br>";
                                    }
                                    else
                                    {
                                        resultError += fileName + " image file size is greater than 5Mb.<br>";
                                    }

                                    continue;
                                }

                                if (ext != ".jpg" && ext != ".png" && ext != ".gif" && ext != ".jpeg")
                                {
                                    resultError += fileName + " is Not a valid image.<br>";

                                    continue;
                                }

                                fileName = GetRandomString(8) + fileName;

                                int i = 0;

                                while (File.Exists(GetUserImagesPath() + fileName))
                                {
                                    i++;

                                    fileName = GetRandomString(5) + GetRandomString(5) + fileName;
                                    if (i == 4)
                                    {
                                        break;
                                    }
                                }

                                string savePath = GetUserImagesPath() + fileName;

                                postedFiles[f].SaveAs(savePath);

                                image = new Image();
                                image.UserId = user.Id;
                                image.FileName = fileName;
                                image.Path = "iimages";

                                entities.Images.Add(image);

                            }
                            catch (Exception ex)
                            {
                                resultError += fileName + " upload failed : server error.<br>";

                            }

                        }


                        entities.SaveChanges();
                    }
                    catch(Exception ex)
                    {
                        resultError = "Server error!.<br>Try again later.";
                    }
                }
            }

            return resultError;
        
        }
  
        private string GetUserImagesPath()
        {
            return Server.MapPath(".") + "/../shiv/iimages/";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Data Download(string siteName)
        {
            if (User.Identity.IsAuthenticated)
            {
                try
                {
                    var entities = new WAG_Login_Page.WagPageEntities();

                    var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

                    string random = GetRandomString(3);
                    string random2 = GetRandomString(6);

                    string startPath = Path.Combine(Server.MapPath("."), user.Id + "/" + siteName);
                    string zipFileDir = Path.Combine(Server.MapPath("."), "../public_downloads/");
                    string zipPath = Path.Combine(Server.MapPath("."), "../public_downloads/" + random + "1n1" + user.Id.Replace("-", "") + "k4" + random2 + "-" + siteName + ".zip");

                    string internetZipPath = "/public_downloads/" + random + "1n1" + user.Id.Replace("-", "") + "k4" + random2 + "-" + siteName + ".zip";

                    if (!Directory.Exists(zipFileDir))
                    {
                        Directory.CreateDirectory(zipFileDir);
                    }

                    Directory.GetFiles(zipFileDir)
                     .Select(f => new FileInfo(f))
                     .Where(f => f.LastAccessTime < DateTime.Now.AddHours(-1))
                     .ToList()
                     .ForEach(f => f.Delete());

                    if (File.Exists(zipPath))
                    {
                        File.Delete(zipPath);
                    }

                    ZipFile.CreateFromDirectory(startPath, zipPath);

                    return new Data { Success = true, Link = internetZipPath };
                }
                catch (Exception ex)
                {
                    return new Data { Success = false, Error = ex.Message };
                }

            }

            return new Data { Success = false, Error = "" };
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

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Data SavePage(Save Obj, string siteName, string pageName)
        {
            try
            {
                if (User.Identity.IsAuthenticated)
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

                            if (Directory.Exists(siteFolder))
                            {

                                string filePath = Path.Combine(siteFolder, pageName);

                                if (File.Exists(filePath))
                                {
                                    try
                                    {
                                        ////////////////////////////////////////////////
                                        string targetThemeFolder = Path.Combine(siteFolder, "Theme");

                                        string[] themeFile = { "theme.css", "jQuery.js" };

                                        SrcFiles theme = new SrcFiles();
                                        theme.fileName = "theme.css";
                                        theme.FolderPath = Path.Combine(Server.MapPath("."), "../Themes/457/");
                                        theme.DestPath = Path.Combine(siteFolder, "Theme/");

                                        SrcFiles jquery = new SrcFiles();
                                        jquery.fileName = "jquery-1.11.2.min.js";
                                        jquery.FolderPath = Path.Combine(Server.MapPath("."), "../Library/");
                                        jquery.DestPath = Path.Combine(siteFolder, "jQuery/");


                                        SrcFiles jqPlus = new SrcFiles();
                                        jqPlus.fileName = "jqPlus.css";
                                        jqPlus.FolderPath = Path.Combine(Server.MapPath("."), "../");
                                        jqPlus.DestPath = Path.Combine(siteFolder, "Theme/");

                                        SrcFiles bootstrap = new SrcFiles();
                                        bootstrap.fileName = "bootstrap-customzed-48.min.css";
                                        bootstrap.FolderPath = Path.Combine(Server.MapPath("."), "../Content/bootstrap-3.3.5-dist/css/");
                                        bootstrap.DestPath = Path.Combine(siteFolder, "Bootstrap/");


                                        List<SrcFiles> copy = new List<SrcFiles>();

                                        copy.Add(theme);
                                        copy.Add(jquery);
                                        copy.Add(bootstrap);
                                        copy.Add(jqPlus);

                                        for (int i = 0; i < copy.Count(); i++)
                                        {

                                            if (!Directory.Exists(copy[i].DestPath))
                                            {
                                                Directory.CreateDirectory(copy[i].DestPath);
                                            }

                                            string sourcePath = Path.Combine(copy[i].FolderPath, copy[i].fileName);
                                            string targetPath = Path.Combine(copy[i].DestPath, copy[i].fileName);

                                            File.Copy(sourcePath, targetPath, true);

                                        }

                                        ///////////////////// theme file //////////////////

                                        ///////////////////// Save Images /////////////////

                                        try
                                        {

                                            string destDirFullPath = Path.Combine(siteFolder, "iimages");

                                            if (!Directory.Exists(destDirFullPath))
                                            {
                                                Directory.CreateDirectory(destDirFullPath);
                                            }

                                            Regex imagePat = new Regex("(<img [^>]+|image: *url[^)]+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
                                            Regex imageSrcPat = new Regex("src=(\"[^\"]+\"|'[^']+'| *[^ ]+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
                                            //Regex imageAltPat = new Regex("alt=(\"[^\"]+\"|'[^']+'| *[^ ]+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
                                            //Regex imageWidthPat = new Regex("width=(\"[^\"]+\"|'[^']+'| *[^ ]+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
                                            //Regex imageHeightPat = new Regex("height=(\"[^\"]+\"|'[^']+'| *[^ ]+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
                                            Regex imageUrlPat = new Regex(@"url\(([^)]+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);

                                            Match mImg;
                                            foreach (Match match in imagePat.Matches(Obj.page))
                                            {
                                                int pos = match.Index;
                                                string imgStr = Obj.page.Substring(pos, match.Length);

                                                switch (char.ToLower(imgStr[0]))
                                                {
                                                    case 'i':   // background-image: url(foo.png);
                                                        mImg = imageUrlPat.Match(imgStr);
                                                        break;
                                                    case '<':   // <img src="foo.png">
                                                        mImg = imageSrcPat.Match(imgStr);
                                                        break;
                                                    default:
                                                        mImg = null;
                                                        break;
                                                }

                                                if (mImg != null)
                                                {
                                                    mImg = imageSrcPat.Match(imgStr);

                                                    string imagePath = mImg.Groups[1].Value.Trim().Replace("'", "").Replace("\"", "");


                                                    if (imagePath != null && imagePath.Trim() != "")
                                                    {
                                                        //"/Content/Images/User_1/12.png"

                                                        imagePath = imagePath.ToLower();

                                                        imagePath = imagePath.Replace("\\", "/");

                                                        string srcImage = Path.Combine(Server.MapPath("."), "../shiv/" + imagePath);

                                                        string destPath = imagePath;

                                                        string destFileFullPath = Path.Combine(siteFolder, destPath);

                                                        try
                                                        {

                                                            File.Copy(srcImage, destFileFullPath, true);
                                                        }
                                                        catch (Exception ex)
                                                        {

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        catch (Exception ex)
                                        {

                                        }
                                        ////////////////////////////////////////////////////

                                        string pageText = "";

                                        pageText = Obj.scripts.ToString();
                                        pageText += Obj.styles.ToString();
                                        pageText += Obj.page.ToString();


                                        File.WriteAllText(filePath, pageText);


                                        return new Data { Success = true };
                                    }
                                    catch (Exception ex)
                                    {
                                        return new Data { Success = false, ExceptionError = ex.Message };
                                    }
                                }
                                else
                                {
                                    return new Data { Success = false, Error = "Page Does Not Exist" };
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

                if (user != null)
                {
                    var sites = entities.Sites.Where(i => i.UserId == user.Id);

                    if (sites != null && sites.Count() > 0)
                    {
                        foreach (var site in sites)
                        {
                            siteData.Add(new Data { Name = site.SiteName });
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
                                pageData.Add(new Data { Name = page.PageName, Link = page.PageName + isFirstTime });
                            }
                        }

                    }

                }
            }
            catch (Exception ex)
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

                if (site != null)
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

                if (site == null)
                {
                    return new Data { Error = "Please create [Site] first." };
                }

                if (pageE.Count() > 0)
                {
                    return new Data { Error = "Page Name already exists.<br>Choose another Name." };
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
                                    FileStream str = File.Create(page);

                                    var pageToCreate = new WAG_Login_Page.Page();

                                    pageToCreate.SiteId = site.Id;
                                    pageToCreate.PageName = pageName;
                                    pageToCreate.IsFirstTime = "true";

                                    entities.Pages.Add(pageToCreate);

                                    entities.SaveChanges();

                                    str.Close();
                                    str.Dispose();

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
