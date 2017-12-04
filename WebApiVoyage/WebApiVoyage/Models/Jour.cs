using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class Jour
    {
        [Key]
        public int JourId { get; set; }

        public int NumeroJour { get; set; }

        public double BudgetJour { get; set; }

        [InverseProperty("JourneeActivite")]
        public virtual List<Activite> ListeActivite { get; set; }
    }
}