using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class DbInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {

            #region User
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

            var role = new IdentityRole();
            role.Name = "admin";
            if (!roleManager.RoleExists("admin"))
                roleManager.Create(role);

            role = new IdentityRole();
            role.Name = "membre";
            if (!roleManager.RoleExists("membre"))
                roleManager.Create(role);

            var user = new ApplicationUser();
            user.UserName = "admin@admin.com";
            user.Email = "admin@admin.com";
            string userPass = "Passw0rd!";
            var chkUser = userManager.Create(user, userPass);
            if (chkUser.Succeeded)
            {
                var result = userManager.AddToRole(user.Id, "admin");
            }

            var user2 = new ApplicationUser();
            user2.UserName = "pierre@gmail.com";
            user2.Email = "pierre@gmail.com";
            string userPass2 = "Passw0rd!";
            var chkUser2 = userManager.Create(user2, userPass2);
            if (chkUser.Succeeded)
            {
                var result = userManager.AddToRole(user2.Id, "membre");
            }
            #endregion
       
            context.SaveChanges();
        }
    }
}