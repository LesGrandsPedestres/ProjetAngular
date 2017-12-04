using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class Voyage
    {
        [Key]
        public int idVoyage { get; set; }
        [Required]
        public string titreVoyage { get; set; }

        public int nbJours { get; set; }
        [Required]
        public DateTime dateDepart { get; set; }
        [Required]
        public DateTime dateRetour { get; set; }
        [Required]
        public double budget { get; set; }

        public double budgetRestant { get; set; }

        [InverseProperty("voyage")]
        public IEnumerable<ApplicationUser> listeVoyageur { get; set;}
        

    }
}