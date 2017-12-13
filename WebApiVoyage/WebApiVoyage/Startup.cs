using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using WebApiVoyage.Models;
using System.Data.Entity;

[assembly: OwinStartup(typeof(WebApiVoyage.Startup))]

namespace WebApiVoyage
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            Database.SetInitializer<ApplicationDbContext>(new DbInitializer());
            using (var context = new ApplicationDbContext())
            {
                context.Database.Initialize(force: true);
            }
        }
    }
}
