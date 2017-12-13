import {Component, OnInit, Input} from '@angular/core';
import {TransportService} from "./transport.service";
import {ModeTransport} from "./model/transport";
import {Emplacement, Waypoint} from './maps/geocode.service';

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

  @Input() voyageId: number;
  emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '', bounds: null };

  waypoints: Waypoint[] = [{
    location: 'Stade olympique',
    stopover: false
  }, {
    location: '822 Rue Saint-Laurent Ouest, Longueuil, QC J4K 1C3',
    stopover: true
  }];

  constructor(private transportService: TransportService) { }

  ngOnInit() : void{
    this.transportService.getAllVoyageTransports(this.voyageId);
  }

  getModeTransport(index: number) : string{
    return ModeTransport[index];
  }

  getValueForModeTransport(mode: string) : string{
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
