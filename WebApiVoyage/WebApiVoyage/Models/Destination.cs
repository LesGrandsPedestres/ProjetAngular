using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiVoyage.Models
{
    public class Destination
    {
        public double LongitudeDepart { get; set; }
        public double LatitudeDepart { get; set; }
        public double LongitudeArrivee { get; set; }
        public double LatitudeArrivee { get; set; }
    }
}