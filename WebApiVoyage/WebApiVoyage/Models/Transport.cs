using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public enum ModeTransport { Bus,Avion,Marche,Velo,Train, Automobile, Taxi, Uber}
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

    }
}