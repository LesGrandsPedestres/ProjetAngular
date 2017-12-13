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
        [ForeignKey("Voyage")]
        public int VoyageId { get; set; }

        [InverseProperty("Jours")]
        public virtual Voyage Voyage { get; set; }

        public JourDTO toDTO()
        {
            JourDTO a = new JourDTO();
            a.BudgetJour = this.BudgetJour;
            a.JourId = this.JourId;
            a.NumeroJour = this.NumeroJour;
            a.VoyageId = this.VoyageId;
            return a;
        }
        public static List<JourDTO> toDTOList(List<Jour> a)
        {
            List<JourDTO> list = new List<JourDTO>();
            if (a == null)
            {
                return list;
            }
            foreach (Jour j in a)
            {
                list.Add(j.toDTO());

            }
            return list;
        }
    }
    public class JourDTO
    {
        public int JourId { get; set; }
        public int NumeroJour { get; set; }
        public double BudgetJour { get; set; }
        public int VoyageId { get; set; }
    }
}