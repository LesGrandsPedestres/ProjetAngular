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
        public int VoyageId { get; set; }
        [Required]
        public string TitreVoyage { get; set; }

        public int NbJours { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        public DateTime DateDepart { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        public DateTime DateRetour { get; set; }
        [Required]
        public double Budget { get; set; }

        public double BudgetRestant { get; set; }
        
        [InverseProperty("Voyage")]
        public List<Transport> Transport { get; set; }

        
        public IEnumerable<ApplicationUser> ListeVoyageur { get; set;}
        

    }
}