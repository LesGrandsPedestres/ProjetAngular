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
        [DataType(DataType.DateTime)]
        public DateTime Date { get; set; }


        [Required]
        public string Localisation { get; set; } //TODO : Remove that for transport

        public double Cout { get; set; }

        [ForeignKey("JourneeActivite")]
        public int JourId { get; set; }
        [InverseProperty("ListeActivite")]
        public Jour JourneeActivite { get; set; }
        
        //Chaque activité possède un transport indiquant de ou à ou.
        public Transport Transport { get; set; }
    }

}
