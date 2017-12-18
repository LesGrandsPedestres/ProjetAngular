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
        public double Budget { get; set; }

        public double BudgetRestant { get; set; }
        
        [InverseProperty("Voyage")]
        public virtual List<Transport> Transport { get; set; }
        [InverseProperty("Voyage")]
        public virtual List<Jour> Jours { get; set; }

        
        public virtual List<ApplicationUser> ListeVoyageur { get; set;}


        public VoyageDTO toDTO()
        {
            VoyageDTO dto = new VoyageDTO();
            dto.Budget = Budget;
            dto.BudgetRestant = BudgetRestant;
            dto.NbJours = NbJours;
            dto.TitreVoyage = TitreVoyage;
            dto.VoyageId = VoyageId;

            List<TransportDTO> tDto = new List<TransportDTO>();
            foreach (Transport t in Transport)
            {
                tDto.Add(t.toDTO());
            }
            dto.Transport = tDto;

            return dto;
        }

    }

    public class VoyageDTO
    {
        public int VoyageId { get; set; }
        public string TitreVoyage { get; set; }
        public int NbJours { get; set; }
        public double Budget { get; set; }
        public double BudgetRestant { get; set; }
        public virtual List<TransportDTO> Transport { get; set; }
    }
}