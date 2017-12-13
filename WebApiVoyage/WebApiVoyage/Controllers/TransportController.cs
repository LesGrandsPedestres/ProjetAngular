using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiVoyage.Models;

namespace WebApiVoyage.Controllers
{
    public class TransportController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [Route("api/GetTransports")]
        [HttpGet]
        public List<Transport> GetTransports()
        {
            
            return db.Transports.ToList();
        }
        // GET: api/GetTransportsForVoyage/5
        [Route("api/GetTransportsForVoyage/{id}")]
        [HttpGet]
        public TransportDTO GetTransportsForVoyage(int voyageId)
        {
            Voyage voyage = db.Voyages.Find(voyageId);
            if(voyage == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return voyage.Transport.toDTO();
        }

        // GET: api/GetTransportsForVoyage/5
        [Route("api/GetTransportsForActivite/{id}")]
        [HttpGet]
        public TransportDTO GetTransportsForActivite(int activiteId)
        {
            Activite activite = db.Activites.Find(activiteId);
            if (activite == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return activite.Transport.toDTO();
        }

        // DELETE: api/Transport/5
        public void Delete(int id)
        {
        }
    }
}
