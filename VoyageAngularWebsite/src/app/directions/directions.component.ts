import { Component } from '@angular/core';
import {Emplacement, Waypoint} from '../maps/geocode.service';

@Component({
  selector: 'directions',
  templateUrl: './directions.component.html'
})
export class DirectionsComponent {

  emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '', bounds: null };

  waypoints: Waypoint[] = [{
    location: 'Stade olympique',
    stopover: false
  }, {
    location: '822 Rue Saint-Laurent Ouest, Longueuil, QC J4K 1C3',
    stopover: true
  }];

}
