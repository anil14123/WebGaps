using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WAG_Login.Startup))]
namespace WAG_Login
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
