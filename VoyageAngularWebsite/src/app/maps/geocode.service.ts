import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {google} from "@agm/core/services/google-maps-types";

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }

  geocoder(adresse: string): Promise<Emplacement> {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?sensor=false&key=AIzaSyDY1hVrLnYHWLhr4X-RzJs5c2Y6r-43hwM&address=' + adresse)
      .toPromise().then(response => {
        console.log(response.json());
        let e: Emplacement = response.json().results[0].geometry.location;
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(response.json().results[0].geometry.location);
        e.bounds = bounds;
        e.adresse = response.json().results[0].formatted_address;
        return e;
      });
  }

  geocodeFromLocation(emplacement: Coordonnee): Promise<Emplacement> {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${emplacement.lat},${emplacement.lng}&key=AIzaSyDY1hVrLnYHWLhr4X-RzJs5c2Y6r-43hwM`)
      .toPromise().then(response => {
        console.log(response.json());
        let e: Emplacement = response.json().results[0].geometry.location;
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(response.json().results[0].geometry.location);
        e.bounds = bounds;
        e.adresse = response.json().results[0].formatted_address;
        return e;
      });
  }
}

export class Coordonnee {
  lat: number;
  lng: number;
}

export class Emplacement extends Coordonnee {
  adresse: string;
  bounds: google.maps.LatLngBounds;
}

export class Waypoint {
  location: string;
  stopover: boolean;
}
