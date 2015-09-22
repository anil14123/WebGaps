using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace WebAppGoTypeScript_X_Modulerization.Services
{
    /// <summary>
    /// Summary description for Authenticate
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Authenticate : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Get()
        {
            bool isValid = true;
            string result = "xibD-T5YJX1AH4vr0tvaqro9qsDOo0wGYrzdfW6gYiwU-e3ZWe_rNzTHqZACjgmAV9ucno1HLWFGUF9sroCAEl6I2UOFzjrJchV4hORz90WDRHAj0bJWOgk_JrzlSgnyXjxFL-F3uQbmWAKkbHRO58WFw-4dozL3UXTMX28basjJs_pRF0jUktKikYsTYoYjgJHUL0GKGzkVhoL224X5jfhLgpEvDUzgrAVM_wGLfyvBHcqSZXP1jLlVVqwA5OKr9k1DHw8mUE55sOAqIQ3HRZCoq_sEou7c80F6WJikw9rtmpy6aB7gekTkWqMBI8fqKiR0uytRjpqPjj54_v3qjqwoOEyIjzK5NVDfpqpRSifYHxMBp1mo4ivsCk1lInrsPu8e9lvbtdTQ94L8spKCevja-dmYGXoXpsdzBWheK2gIw_d0mKnINczL3B7x1JUuSJwN4zGBveBBWTlqETVsqJfjvzdiYYlfKLv-4khBheLwThPTfcSFyEhhSLgcjrbN";
            if (isValid == true)
            {
                HttpCookie ck = HttpContext.Current.Request.Cookies[".AspNet.ApplicationCookie"];

                if(ck != null)
                {
                    result = ck.Value;
                }

                return result;
            }
            else
            {
                return result;
            }
        }

       
    }
}
