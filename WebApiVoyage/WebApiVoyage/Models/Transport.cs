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
        public int idTransport { get; set; }

        public ModeTransport typeTransport { get; set; }

        public DateTime dateDepart { get; set; }

        public DateTime dateArrive { get; set; }

        public double cout { get; set; }
        [ForeignKey("voyage")]
        public int idVoyage { get; set;}

        [InverseProperty("listeVoyageur")]
        public Voyage voyage { get; set; }

       
    }
}