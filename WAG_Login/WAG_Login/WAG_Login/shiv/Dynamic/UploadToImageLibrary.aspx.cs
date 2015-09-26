using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebAppGoTypeScript_X_Modulerization.Dynamic
{
    public partial class UploadToImageLibrary : System.Web.UI.Page
    {
        private string GetUserImagesPath()
        {
           return Server.MapPath(".") + "/../iimages/";
        }

        protected void Page_Load(object sender, EventArgs e)
        {
          
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

        protected void BtnUpload_Click(object sender, EventArgs e)
        {
            try
            {
                
                if (myFileUpload.HasFile)
                {
                    string ext = System.IO.Path.GetExtension(this.myFileUpload.PostedFile.FileName).ToLower();

                   string fileName = Path.GetFileName(this.myFileUpload.PostedFile.FileName);

                    if (ext != ".jpg" && ext != ".png" && ext != ".gif" && ext != ".jpeg")
                    {
                        result.Text = "Not a valid image.";
                        result.CssClass = "fail";
                        result.Visible = true;
                        return;
                    }

                    fileName = GetRandomString(8) + fileName;

                    int i = 0;

                    while (File.Exists(GetUserImagesPath() + fileName))
                    {
                        i++;

                        fileName = GetRandomString(5) + fileName;
                        if (i == 4)
                        {
                            break;
                        }
                    }

                    string savePath = GetUserImagesPath() + fileName;

                    myFileUpload.SaveAs(savePath);

                    uploadedImage.ImageUrl = "../iimages/" + fileName;

                    result.Text = "Image Uploaded.";
                    result.CssClass = "success";

                    return;
                }
            }
            catch (Exception ex)
            {
                result.Text = "Upload failed.";
                result.CssClass = "fail";

                uploadedImage.ImageUrl = "";
            }

         
        }
    }
}