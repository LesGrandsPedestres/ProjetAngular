import {Injectable} from '@angular/core';
import {MapsService} from './maps.service';
import {Emplacement} from './geocode.service';
declare var google: any;

@Injectable()
export class PlacesService {
  service: any;
  places: any;

  constructor(private mapsService: MapsService) { }

  search(radius: string, emplacement: Emplacement): Promise<any> {

    let request = {
      location: emplacement,
      radius: radius
    };

    this.places = [];
    this.service = new google.maps.places.PlacesService(this.mapsService.map);
    return new Promise(resolve => {
      this.service.nearbySearch(request, (results: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
          for (let i = 0; i < 5; i++) {
            this.places.push(results[i]);
          }
        }
        resolve(this.places);
      });
    });

  }

  searchOld(radius: string, emplacement: Emplacement): Promise<any> {

    // https://developers.google.com/places/
    let request = {
      location: emplacement,
      radius: radius

      // https://developers.google.com/places/documentation/supported_types
      // types: ['food']
    };

    this.places = [];
    this.service = new google.maps.places.PlacesService(this.mapsService.map);
    return Promise.resolve(this.service.nearbySearch(request, (results: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        for (let i = 0; i < 5; i++) {
          this.places.push(results[i]);
        }
      }
      return this.places;
    }));
  }
}
