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
        public int idActivite { get; set; }
        [Required]
        public string titreActivite { get; set; }
        [Required]
        public DateTime date { get; set; }
        [Required]
        public string localisation { get; set; }

        public double cout { get; set; }

        [ForeignKey("journeeActivite")]
        public int idJour { get; set; }
        [InverseProperty("listeActivite")]
        public Jour journeeActivite { get; set; }


    }

}