import {ElementRef, Injectable} from '@angular/core';
import {Coordonnee, Emplacement, Waypoint} from './geocode.service';
declare let google: any;

@Injectable()
export class MapsService {

  emplacement: Emplacement;
  zoom: number;
  markers: Marker[] = [];
  destination: string;
  origin: string;
  mode: string;
  waypoints: Waypoint[];

  mapOptions: any;
  map: any;
  mapDiv: ElementRef;

  addDirections(destination: string, origin: string, waypoints: Waypoint[], mode: string): MapsService {
    this.destination = destination;
    this.origin = origin;
    this.waypoints = waypoints;
    this.mode = mode;

    return this;
  }

  addMarker(coordonnee: Coordonnee, infoWindow: string, icon: string): MapsService {
    let m: Marker = new Marker();
    m.coordonnee = coordonnee;
    m.icon = icon;
    m.infoWindow = infoWindow;
    this.markers.push(m);
    return this;
  }

  updateMap(): void {
    if (!this.mapDiv) return;
    this.mapOptions = {
      center: {lat: this.emplacement.lat, lng: this.emplacement.lng},
      zoom: this.zoom
    };

    this.map = new google.maps.Map(this.mapDiv, this.mapOptions);

    if (this.emplacement.bounds) {
      this.map.fitBounds(this.emplacement.bounds);
    }

    this.createMarkers();

    this.createDirections();

  }

  createMap(elem: ElementRef): void {
    console.log(elem);
    this.mapDiv = elem;
    this.updateMap();
  }

  createMarkers(): void {
    if (this.markers) {
      for (let i = 0; i < this.markers.length; i++) {
        let marker = new google.maps.Marker({
          position: this.markers[i].coordonnee,
          map: this.map,
          icon: this.markers[i].icon
        });
        if (this.markers[i].infoWindow) {
          google.maps.event.addListener(marker, 'click', () => {
            let infowindow = new google.maps.InfoWindow({
              content: this.markers[i].infoWindow
            });
            infowindow.open(this.map, marker);
          });
        }
        if (this.emplacement.bounds) {
          this.emplacement.bounds.extend(this.markers[i].coordonnee);
        }
      }

    }
  }

  createDirections(): void {
    if (this.destination && this.origin) {

      let directionsService = new google.maps.DirectionsService();
      let directionsDisplay = new google.maps.DirectionsRenderer();

      let request = {
        origin: this.origin,
        destination: this.destination,
        waypoints: this.waypoints,
        avoidHighways: true,
        travelMode: google.maps.TravelMode[this.mode]
      };

      directionsDisplay.setMap(this.map);

      directionsService.route(request, function (response: any, status: any) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    }
  }

  location(emplacement: Emplacement, zoom: number): MapsService {
    this.emplacement = emplacement;
    this.zoom = zoom;
    return this;
  }



}


export class Marker {
  coordonnee: Coordonnee;
  icon: string;
  infoWindow: string;
}

