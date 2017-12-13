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
        public string Localisation { get; set; } //TODO : Remove that for transport

        public double Cout { get; set; }

        [ForeignKey("JourneeActivite")]
        public int JourId { get; set; }
        [InverseProperty("ListeActivite")]
        public Jour JourneeActivite { get; set; }
        
        //Chaque activité possède un transport indiquant de ou à ou.
        public Transport Transport { get; set; }

        public ActiviteDTO toDTO()
        {
            ActiviteDTO a = new ActiviteDTO();
            a.ActiviteId = this.ActiviteId;
            a.cout = this.Cout;
            a.JourId = this.JourId;
            a.TitreActivite = this.TitreActivite;
            a.Localisation = this.Localisation;
            return a;
        }
        public static List<ActiviteDTO>toDTOList(List<Activite> a)
        {
            List<ActiviteDTO> list = new List<ActiviteDTO>();
            if(a == null)
            {
                return list;
            }
            foreach (Activite x in a)
            {
                list.Add(x.toDTO());
            }

            return list;
        }
    }

    public class ActiviteDTO
    {
        public int ActiviteId { get; set; }
        public string TitreActivite { get; set; }
        public string Localisation { get; set; }
        public double cout { get; set; }
        public int JourId { get; set; }

    }

}
