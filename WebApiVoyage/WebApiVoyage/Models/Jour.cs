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
        public int idJour { get; set; }

        public int numeroJour { get; set; }

        public double budgetJour { get; set; }

        [InverseProperty("journeeActivite")]
        public IEnumerable<Activite> listeActivite { get; set; }

        [ForeignKey("reservationHotel")]
        public int idReservationHotel { get; set; }
        [InverseProperty("joursReservation")]
        public Hotel reservationHotel { get; set; }
    }
}