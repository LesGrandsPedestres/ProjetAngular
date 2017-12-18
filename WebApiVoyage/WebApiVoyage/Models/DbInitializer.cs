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
            voy1.TitreVoyage = "Voyage des Pédestres à Montréal";
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

            Voyage voy2 = new Voyage();
            voy2.TitreVoyage = "Tour de l'Europe";
            voy2.Budget = 4000.00;
            voy2.BudgetRestant = 1000.00;

            voy2.ListeVoyageur = new List<ApplicationUser>
            {
                user,
                user2
            };
            voy2.NbJours = 14;
            voy2.VoyageId = 2;
            voy2.Jours = new List<Jour> { };

            Voyage voy3 = new Voyage();
            voy3.TitreVoyage = "Tour de l'Égypte";
            voy3.Budget = 3500.00;
            voy3.BudgetRestant = 1500.00;

            voy3.ListeVoyageur = new List<ApplicationUser>
            {
                user,
                user2
            };
            voy3.NbJours = 14;
            voy3.VoyageId = 3;
            voy3.Jours = new List<Jour> { };

            context.Voyages.Add(voy1);
            context.Voyages.Add(voy2);
            context.Voyages.Add(voy3);

            #endregion
            #region Jours
            for (int i = 0; i < 14; i++)
            {
                Jour a = new Jour();
                a.BudgetJour = 186.70;
                a.JourId = i;
                a.NumeroJour = 1 + i;
                a.ListeActivite = new List<Activite> { };
                voy1.Jours.Add(a);
            }
            #endregion

            #region Transport
            Destination dest1 = new Destination();
            dest1.Origine = "Cegep montpetit";
            dest1.Arrivee = "Stade Olympique";
            Activite Act1 = new Activite();
            Act1.JourneeActivite = voy1.Jours.FirstOrDefault();
            Act1.Localisation = "Montreal";
            Act1.TitreActivite = "Visite Stade Olympique";

            Act1.Cout = 50;
            Destination dest2 = new Destination();
            dest2.Origine = "Terminus Longueuil";
            dest2.Arrivee = "Centre Bell";
            Activite Act2 = new Activite();
            Act2.JourneeActivite = voy1.Jours.Last();
            Act2.Localisation = "Montreal";
            Act2.TitreActivite = "Partie de Hockey avec le Canadien de Montreal";
            Act2.Cout = 47;
            Destination dest3 = new Destination();
            dest3.Origine = "Centre Bell";
            dest3.Arrivee = "Granby";

            var transport1 = new Transport()
            {
                TransportId = 1,
                VoyageId = 1,
                Cout = 250.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest1
            };
            Act1.Transport = transport1;

            var transport2 = new Transport()
            {
                TransportId = 2,
                VoyageId = 1,
                Cout = 150.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest2
            };
            Act2.Transport = transport2;

            var transport3 = new Transport()
            {
                TransportId = 3,
                VoyageId = 1,
                Cout = 80.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest3
            };
            Act2.Transport = transport2;

            voy1.Jours.FirstOrDefault().ListeActivite.Add(Act1);
            voy1.Jours.Last().ListeActivite.Add(Act2);
            voy1.Transport = new List<Transport> { transport1, transport2, transport3 };

            Destination dest4 = new Destination();
            dest4.Origine = "France";
            dest4.Arrivee = "Allemagne";



            Destination dest5 = new Destination();
            dest5.Origine = "Allemagne";
            dest5.Arrivee = "Italie";

            Destination dest6 = new Destination();
            dest6.Origine = "Italie";
            dest6.Arrivee = "Espagne";

            var transport4 = new Transport()
            {
                TransportId = 4,
                VoyageId = 2,
                Cout = 150.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest4
            };

            var transport5 = new Transport()
            {
                TransportId = 5,
                VoyageId = 2,
                Cout = 150.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest5
            };

            var transport6 = new Transport()
            {
                TransportId = 6,
                VoyageId = 2,
                Cout = 150.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest6
            };

            Destination dest7 = new Destination();
            dest7.Origine = "Thèbes, Egypte";
            dest7.Arrivee = "Charm el-Cheikh, Egypte";



            Destination dest8 = new Destination();
            dest8.Origine = "Charm el-Cheikh, Egypte";
            dest8.Arrivee = "Louxor, Egypte";

            Destination dest9 = new Destination();
            dest9.Origine = "Louxor, Egypte";
            dest9.Arrivee = "Gizeh, Egypte";

            var transport7 = new Transport()
            {
                TransportId = 7,
                VoyageId = 3,
                Cout = 75.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest7
            };

            var transport8 = new Transport()
            {
                TransportId = 8,
                VoyageId = 3,
                Cout = 150.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest8
            };

            var transport9 = new Transport()
            {
                TransportId = 9,
                VoyageId = 3,
                Cout = 150.00,
                TypeTransport = ModeTransport.Automobile,
                Destination = dest9
            };

            voy2.Transport = new List<Transport> { transport4, transport5, transport6 };
            voy3.Transport = new List<Transport> { transport7, transport8, transport9 };
            #endregion

            base.Seed(context);
        }
    }
}