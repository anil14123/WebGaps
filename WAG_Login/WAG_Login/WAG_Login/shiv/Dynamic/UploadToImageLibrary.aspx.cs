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
            string resultError = "";

            if (myFileUpload.HasFiles)
            {
                for (int f = 0; f < myFileUpload.PostedFiles.Count(); f++)
                {
                    string fileName = "";
                    try
                    {

                        string ext = System.IO.Path.GetExtension(this.myFileUpload.PostedFiles[f].FileName).ToLower();

                        fileName = Path.GetFileName(this.myFileUpload.PostedFiles[f].FileName);

                        int maxFileSize = 5000;

                        int fileSize = myFileUpload.PostedFiles[f].ContentLength;
                        if (fileSize > (maxFileSize * 1024))
                        {
                            resultError += fileName + " Image file size is greater than 5Mb.<br><br>";

                            if (ext != ".jpg" && ext != ".png" && ext != ".gif" && ext != ".jpeg")
                            {
                                resultError += fileName + " is Not a valid image.<br><br>";
                            }

                                continue;
                        }

                        if (ext != ".jpg" && ext != ".png" && ext != ".gif" && ext != ".jpeg")
                        {
                            resultError += fileName + " is Not a valid image.<br><br>";

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

                        myFileUpload.SaveAs(savePath);

                      
                    }
                    catch (Exception ex)
                    {
                        resultError += fileName + " Upload failed : server error.<br><br>";
                       
                    }

                }

            }

            if (resultError != "")
            {
                result.Text = resultError;
                result.CssClass = "fail";
                result.Visible = true;
            }
            else
            {
                result.Text = "Images Uploaded.";
                result.CssClass = "success";
                
            }
        }
    }
}