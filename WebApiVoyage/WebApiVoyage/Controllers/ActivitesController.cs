﻿using System;
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
    public class ActivitesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Activites
        public IQueryable<Activite> GetActivites()
        {
            return db.Activites;
        }

        // GET: api/Activites/5
        [ResponseType(typeof(Activite))]
        public IHttpActionResult GetActivite(int id)
        {
            Activite activite = db.Activites.Find(id);
            if (activite == null)
            {
                return NotFound();
            }

            return Ok(activite);
        }

        // PUT: api/Activites/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutActivite(int id, Activite activite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != activite.ActiviteId)
            {
                return BadRequest();
            }

            db.Entry(activite).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActiviteExists(id))
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

        // POST: api/Activites
        [ResponseType(typeof(Activite))]
        public IHttpActionResult PostActivite(Activite activite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Activites.Add(activite);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = activite.ActiviteId }, activite);
        }

        // DELETE: api/Activites/5
        [ResponseType(typeof(Activite))]
        public IHttpActionResult DeleteActivite(int id)
        {
            Activite activite = db.Activites.Find(id);
            if (activite == null)
            {
                return NotFound();
            }

            db.Activites.Remove(activite);
            db.SaveChanges();

            return Ok(activite);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ActiviteExists(int id)
        {
            return db.Activites.Count(e => e.ActiviteId == id) > 0;
        }
    }
}