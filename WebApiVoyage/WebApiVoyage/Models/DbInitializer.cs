using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class DbInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
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

            #region Voyage
            Voyage voy1 = new Voyage();
            voy1.TitreVoyage = "Voyage des Pédestres";
            voy1.Budget = 5200.00;
            voy1.BudgetRestant = 2600.00;
           
            voy1.ListeVoyageur = new List<ApplicationUser>
            {
                user,
                user2
            };
            voy1.NbJours = 14;
            voy1.VoyageId = 1;
            voy1.Jours = new List<Jour> { };

            
            #endregion
            #region Jours
            for (int i = 0; i < 14; i++)
            {
                Jour a = new Jour();
                a.BudgetJour= 186.70;
                a.JourId = i;
                a.NumeroJour = 1 + i;
                a.ListeActivite = new List<Activite> { };
                voy1.Jours.Add(a);
            }
            #endregion
            
            #region Transport
            Destination dest1 = new Destination();
            dest1.Origine = "cegep montpetit";
            dest1.Arrivee = "stade olympique";
            Activite Act1 = new Activite();
            Act1.JourneeActivite = voy1.Jours.FirstOrDefault();
            Act1.Localisation = "Montreal";
            Act1.TitreActivite= "Visite Stade Olympique";
            

            Destination dest2 = new Destination();
            dest2.Origine = "terminus longueuil";
            dest2.Arrivee = "centre bell";
            Activite Act2 = new Activite();
            Act2.JourneeActivite = voy1.Jours.Last();
            Act2.Localisation = "Montreal";
            Act2.TitreActivite = "Partie de Hockey avec le Canadien de Montreal";
            
            var transport1 = new Transport()
            {
                TransportId = 1,
                VoyageId = 1,
                Cout = 250.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest1
                //Might crash cause no Voyage?
            };
            Act1.Transport = transport1;

            var transport2 = new Transport()
            {
                TransportId = 1,
                VoyageId = 1,
                Cout = 250.00,
                TypeTransport = ModeTransport.Bus,
                Destination = dest2
                //Might crash cause no Voyage?
            };
            Act2.Transport = transport2;

            voy1.Jours.FirstOrDefault().ListeActivite.Add(Act1);
            voy1.Jours.Last().ListeActivite.Add(Act2);
            voy1.Transport = new List<Transport> { transport1, transport2 };
            

            context.Voyages.Add(voy1);
            #endregion

            base.Seed(context);
        }
    }
}