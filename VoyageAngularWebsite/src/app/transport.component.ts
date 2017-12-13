import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {TransportService} from "./transport.service";
import {ModeTransport} from "./model/transport";
import {Emplacement, Waypoint} from './maps/geocode.service';
import {MapsComponent} from "./maps/maps.component";

@Component({
  selector: 'transport',
  templateUrl: './transport.component.html',
  styles: [`
    agm-map {
    height: 300px;
    }
    
    #map {
    height: 300px;
    }
  `]
})
export class TransportComponent implements OnInit{

  @ViewChild(MapsComponent) mapsComponent: MapsComponent
  @Input() voyageId: number;
  emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '', bounds: null };

  waypoints: Waypoint[] = [{
    location: 'Stade olympique',
    stopover: true
  }, {
    location: '822 Rue Saint-Laurent Ouest, Longueuil, QC J4K 1C3',
    stopover: true
  }, {
    location: 'Granby',
    stopover: true
  }];

  constructor(private transportService: TransportService) { }

  public updateMap(): void {
    this.mapsComponent.refresh();
  }

  ngOnInit() : void{
    console.log(this.voyageId);
    this.transportService.getAllVoyageTransports(this.voyageId);
  }

  getModeTransport(index: number) : string {
    return ModeTransport[index];
  }

  getValueForModeTransport(mode: string) : string {
    var value;
    switch (mode) {
      case "Bus":
        value = "TRANSIT";
        break;
      case "Marche":
        value = "DRIVING";
        break;
      case "Velo":
        value = "BICYCLING";
        break;
      case "Automobile":
        value = "DRIVING";
        break;
      case "Taxi":
        value = "DRIVING";
        break;
      case "Uber":
        value = "DRIVING";
        break;
      default:
        value = "DRIVING";
    }
    return value;
  }
}
