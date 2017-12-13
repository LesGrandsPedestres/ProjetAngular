using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiVoyage.Models;
using Microsoft.AspNet.Identity;


namespace WebApiVoyage.Controllers
{
    public class VoyagesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Voyages
        [Route("api/Voyages/GetVoyages")]
        public IQueryable<Voyage> GetVoyages()
        {
            
            return db.Voyages.Include(y=> y.Transport).Include(h=>h.Jours).Include(i=>i.ListeVoyageur);
        }

        // GET: api/Voyages/5
        [ResponseType(typeof(Voyage))]
        [Route("api/Voyages/{id}")]
        public IHttpActionResult GetVoyage(int id)
        {
            Voyage voyage = db.Voyages.Find(id);
            if (voyage == null)
            {
                return NotFound();
            }

            return Ok(voyage);
        }

        // PUT: api/Voyages/5
        [ResponseType(typeof(void))]
        [Route("api/Voyages/GetVoyagesById/{id}")]
        public IHttpActionResult PutVoyage(int id, Voyage voyage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != voyage.VoyageId)
            {
                return BadRequest();
            }

            db.Entry(voyage).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoyageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Voyages
        [ResponseType(typeof(Voyage))]
        [Route("api/Voyages/CreateVoyage")]
        public Boolean CreateVoyage(Voyage voyage)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }
            string idUser = User.Identity.GetUserId();
            voyage.ListeVoyageur = new List<ApplicationUser> {db.Users.Find(idUser) };
            voyage.BudgetRestant = voyage.Budget;
            voyage.Jours = new List<Jour>();
            for (int i = 0; i < voyage.NbJours; i++)
            {
                Jour a = new Jour();
                a.ListeActivite = new List<Activite>();
                a.VoyageId = voyage.VoyageId;
                voyage.Jours.Add(a);
            }
            voyage.Transport = new List<Transport>();
            db.Voyages.Add(voyage);
            db.SaveChanges();

            return true;
        }

        // DELETE: api/Voyages/5
        [ResponseType(typeof(Voyage))]
        public IHttpActionResult DeleteVoyage(int id)
        {
            Voyage voyage = db.Voyages.Find(id);
            if (voyage == null)
            {
                return NotFound();
            }

            db.Voyages.Remove(voyage);
            db.SaveChanges();

            return Ok(voyage);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VoyageExists(int id)
        {
            return db.Voyages.Count(e => e.VoyageId == id) > 0;
        }
    }
}