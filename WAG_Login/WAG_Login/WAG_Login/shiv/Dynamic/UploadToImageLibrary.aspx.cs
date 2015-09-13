using System;
using System.Collections.Generic;
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
           return Server.MapPath(".") + "/../Content/Images/User_1/";
        }

        protected void Page_Load(object sender, EventArgs e)
        {
          
        }

        protected void BtnUpload_Click(object sender, EventArgs e)
        {
            try
            {
                
                if (myFileUpload.HasFile)
                {
                    string ext = System.IO.Path.GetExtension(this.myFileUpload.PostedFile.FileName).ToLower();

                    if (ext != ".jpg" && ext != ".png" && ext != ".gif" && ext != ".jpeg")
                    {
                        result.Text = "Not a valid image.";
                        result.CssClass = "fail";
                        result.Visible = true;
                        return;
                    }

                    string savePath = GetUserImagesPath() + myFileUpload.FileName;

                    myFileUpload.SaveAs(savePath);

                    uploadedImage.ImageUrl = "/Content/Images/User_1/" + myFileUpload.FileName;

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