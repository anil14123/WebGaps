using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WAG_Login_Page.shiv
{
    public partial class PageManager : System.Web.UI.Page
    {
        public string SiteName
        {
            get; set;
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            SiteName = Request.QueryString["SiteName"];

        }
    }
}