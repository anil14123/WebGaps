using System;
using System.Linq;
using System.Web;
using System.Web.UI;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Owin;
using WAG_Login.Models;

namespace WAG_Login.Account
{
    public partial class Register : Page
    {
        ApplicationUser user;

        protected void Page_Load(object sender, EventArgs e)
        {
            confirmation.Visible = false;
            create.Visible = true;
        }

        protected void ReSendEMail_Click(object sender, EventArgs e)
        {
            if(user!= null)
            {
                var manager = Context.GetOwinContext().GetUserManager<ApplicationUserManager>();
                string code = manager.GenerateEmailConfirmationToken(user.Id);
                string callbackUrl = IdentityHelper.GetUserConfirmationRedirectUrl(code, user.Id, Request);
                manager.SendEmail(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>.");

            }
        }

        protected void CreateUser_Click(object sender, EventArgs e)
        {
            var manager = Context.GetOwinContext().GetUserManager<ApplicationUserManager>();
            var signInManager = Context.GetOwinContext().Get<ApplicationSignInManager>();
             user = new ApplicationUser() { UserName = Email.Text, Email = Email.Text};
            IdentityResult result = manager.Create(user, Password.Text);
            if (result.Succeeded)
            {
                // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=320771
                string code = manager.GenerateEmailConfirmationToken(user.Id);
                string callbackUrl = IdentityHelper.GetUserConfirmationRedirectUrl(code, user.Id, Request);
                manager.SendEmail(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>.");


                confirmation.Visible = true;
                create.Visible = false;
                //signInManager.SignIn( user, isPersistent: false, rememberBrowser: false);
                //IdentityHelper.RedirectToReturnUrl(Request.QueryString["ReturnUrl"], Response);

                // IdentityHelper.RedirectToReturnUrl("/Account/ConfirmMessage", Response);

                
            }
            else 
            {
                ErrorMessage.Text = result.Errors.FirstOrDefault();

                confirmation.Visible = false;
                create.Visible = true;
            }
        }
    }
}