using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public enum ModeTransport { Bus,Marche,Velo, Automobile, Taxi, Uber}
    public class Transport
    {
        [Key]
        public int TransportId { get; set; }

        public ModeTransport TypeTransport { get; set; }

        public Destination Destination { get; set; }

        public DateTime DateDepart { get; set; }

        public DateTime DateArrivee { get; set; }

        public double Cout { get; set; }
        [ForeignKey("Voyage")]
        public int VoyageId { get; set;}

        [InverseProperty("ListeVoyageur")]
        public Voyage Voyage { get; set; }

        public TransportDTO toDTO()
        {
            TransportDTO transportDTO = new TransportDTO();
            transportDTO.TransportId = this.TransportId;
            transportDTO.TypeTransport = this.TypeTransport;
            transportDTO.Destination = this.Destination;
            transportDTO.DateDepart = this.DateDepart;
            transportDTO.DateArrivee = this.DateArrivee;
            transportDTO.Cout = this.Cout;

            return transportDTO;
        }

    }

    public class TransportDTO
    {
        public int TransportId { get; set; }

        public ModeTransport TypeTransport { get; set; }

        public Destination Destination { get; set; }

        public DateTime DateDepart { get; set; }

        public DateTime DateArrivee { get; set; }

        public double Cout { get; set; }

        public int VoyageId { get; set; }

    }
}