import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Emplacement} from '../maps/geocode.service';
import {MapsComponent} from '../maps/maps.component';

@Component({
  selector: 'suggestion',
  templateUrl: './suggestion.component.html'
})
export class SuggestionComponent implements AfterViewInit {

  @ViewChild(MapsComponent)
  mapsComponent: MapsComponent;

  emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '', bounds: null };
  places: any = [];

  infoWindow: string = '<div><div id="infowindow_content"></div><div>';

  ngAfterViewInit(): void {

    this.mapsComponent.placesService.search('2000', this.emplacement).then(places => {
       console.log(places);
       this.places = places;
     });

  }

  getInfoWindowTxt(place: any) {
    return `<div id="infowindow_content">
              <img src="${place.icon}" alt="">
              <h3>${place.name}</h3>
            </div>`;
  }
}
