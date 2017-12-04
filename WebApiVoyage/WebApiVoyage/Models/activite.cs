using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class Activite
    { 
        [Key]
        public int ActiviteId { get; set; }
        [Required]
        public string TitreActivite { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Localisation { get; set; }

        public double Cout { get; set; }

        [ForeignKey("JourneeActivite")]
        public int JourId { get; set; }
        [InverseProperty("ListeActivite")]
        public Jour JourneeActivite { get; set; }


    }

}