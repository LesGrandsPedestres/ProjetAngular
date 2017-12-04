using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class Hotel
    {

        [Key]
        public int idReservationHotel { get; set; }

        public string nomHotel { get; set; }

        public int numeroChambre { get; set; }

        public double cout { get; set; }

        [InverseProperty("reservationHotel")]
        public IEnumerable<Jour> joursReservation { get; set; }

    }
}