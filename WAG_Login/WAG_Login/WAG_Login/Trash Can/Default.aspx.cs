﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WAG_Login
{
	public partial class Default2 : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
            if (Request.IsAuthenticated)
            {
                Response.Redirect("shiv/Steps.aspx");
            }
            //else
            //{
            //    Response.Redirect("Account/login.aspx");
            //}
        }
	}
}