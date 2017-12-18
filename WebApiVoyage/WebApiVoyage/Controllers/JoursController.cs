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

namespace WebApiVoyage.Controllers
{
    
    public class JoursController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Jours
        [Route("api/Jours/GetJoursByVoyageId/{VoyageId}")]
        public List<JourDTO> GetJoursByVoyageId(int VoyageId)
        {
            return Jour.toDTOList(db.Jours.Where(x=>x.VoyageId == VoyageId).ToList());
        }

        // GET: api/Jours/5
        [ResponseType(typeof(JourDTO))]
        [Route("api/Jours/GetJourById/{JourId}")]
        public JourDTO GetJourById(int JourId)
        {
            Jour jour = db.Jours.Find(JourId);
            if (jour == null)
            {
                return null;
            }

            return jour.toDTO();
        }

        // PUT: api/Jours/5
        [ResponseType(typeof(void))]
        [Route("api/Jours/ModifyJour/{id}")]
        public IHttpActionResult PutJour(int id, Jour jour)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jour.JourId)
            {
                return BadRequest();
            }

            db.Entry(jour).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JourExists(id))
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

        // POST: api/Jours
        [ResponseType(typeof(Jour))]
        [Route("api/Jours/AddJour")]
        public IHttpActionResult PostJour(Jour jour)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            db.Jours.Add(jour);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jour.JourId }, jour);
        }

        // DELETE: api/Jours/5
        [ResponseType(typeof(JourDTO))]
        [Route("api/Jours/RemoveJour/{id}")]
        public IHttpActionResult DeleteJour(int id)
        {
            Jour jour = db.Jours.Find(id);
            if (jour == null)
            {
                return NotFound();
            }

            db.Jours.Remove(jour);
            db.SaveChanges();

            return Ok(jour.toDTO());
        }
        [ResponseType(typeof(void))]
        [Route("api/Jours/gestionBudgetPlus/{id}")]
        public IHttpActionResult gestionBudgetPlus(int id)
        {
            Jour jour = db.Jours.Find(id);
            if (jour == null)
            {
                return NotFound();
            }
            jour.BudgetJour++;
            db.Entry(jour).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JourExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            
            return Ok();
        }
        [ResponseType(typeof(void))]
        [Route("api/Jours/gestionBudgetMoins/{id}")]
        public IHttpActionResult gestionBudgetMoins(int id)
        {
            Jour jour = db.Jours.Find(id);
            if (jour == null)
            {
                return NotFound();
            }
            jour.BudgetJour--;
            db.Entry(jour).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JourExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Ok();
        }



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JourExists(int id)
        {
            return db.Jours.Count(e => e.JourId == id) > 0;
        }
    }
}