using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WAG_Login_Page;

namespace WAG_Login.shiv
{
    public partial class SitesManager : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                var entities = new WagPageEntities();

                var user = entities.AspNetUsers.Where(i => i.UserName == User.Identity.Name).FirstOrDefault();

                if (user != null)
                {
                    ViewState["UD"] = user.Id;
                }
            }

         
        }


    }
}