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
        public int ReservationHotelId { get; set; }

        public string NomHotel { get; set; }

        public int NumeroChambre { get; set; }

        public double Cout { get; set; }

        [InverseProperty("ReservationHotel")]
        public IEnumerable<Jour> JoursReservation { get; set; }

    }
}