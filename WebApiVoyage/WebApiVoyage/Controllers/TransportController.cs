using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
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
        [Route("api/GetTransportsForVoyage/{voyageId}")]
        [HttpGet]
        public List<TransportDTO> GetTransportsForVoyage(int voyageId)
        {
            Voyage voyage = db.Voyages.Find(voyageId);
            if(voyage == null)
            {
                //voyage = db.Voyages.Find(1); //Use this line to Debug if only 1 voyage
                return null;
                //throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            List<Transport> transports = voyage.Transport;
            List<TransportDTO> transportsDTO = new List<TransportDTO>();
            foreach (Transport trans in transports)
            {
                transportsDTO.Add(trans.toDTO());
            }
            return transportsDTO;
        }

        [ResponseType(typeof(TransportDTO))]
        [Route("api/AddDestination")]
        [HttpPost]
        public IHttpActionResult AddDestination(Transport transport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            transport.TypeTransport = ModeTransport.Automobile;

            db.Transports.Add(transport); 
            db.SaveChanges();

            return Ok(transport.toDTO());

        }


        // POST: api/Transport
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Transport/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Transport/5
        public void Delete(int id)
        {
        }
    }
}
