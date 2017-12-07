import {Component} from '@angular/core';
import {Emplacement, GeocodeService} from '../maps/geocode.service';

@Component({
  selector: 'geocode',
  templateUrl: './geocode.component.html'
})
export class GeocodeComponent {
  adresse: string = '';
  emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '', bounds: null };

  constructor(private geocodeService: GeocodeService) { }

  geocode(): void {
    this.geocodeService.geocoder(this.adresse).then(e => this.emplacement = e);
  }

}
