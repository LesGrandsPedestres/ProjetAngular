import {Component, OnInit} from '@angular/core';
import {TransportService} from "./transport.service";
import {ModeTransport} from "./model/transport";
import {Emplacement, Waypoint} from '../maps/geocode.service';

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
    this.transportService.getAllVoyageTransports();
  }

  getModeTransport(index: number) : string{
    return ModeTransport[index];
  }
}
