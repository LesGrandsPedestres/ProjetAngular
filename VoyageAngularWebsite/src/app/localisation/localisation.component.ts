import {Component, OnInit} from '@angular/core';
import {Coordonnee, Emplacement, GeocodeService} from '../maps/geocode.service';

@Component({
  selector: 'localisation',
  templateUrl: './localisation.component.html'
})
export class LocalisationComponent implements OnInit {

  adresse: string = '';
  emplacement: Emplacement;

  constructor(private geocodeService: GeocodeService) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.geocode(position);
      });
    }
  }

  geocode(position: any): void {
    let c: Coordonnee = { lat: position.coords.latitude, lng: position.coords.longitude };
    this.geocodeService.geocodeFromLocation(c).then(e => this.emplacement = e);
  }
}
