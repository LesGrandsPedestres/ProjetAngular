import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {TransportService} from "./transport.service";
import {ModeTransport, Transport} from "./model/transport";
import {Emplacement, Waypoint} from './maps/geocode.service';
import {MapsComponent} from "./maps/maps.component";
import {Destination} from "./model/Destination";

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

  transport: Transport = new Transport();
  waypoints: Waypoint[] = [];

  constructor(private transportService: TransportService) { }

  public updateMap(): void {
    this.mapsComponent.refresh();
  }

  ngOnInit() : void{
    this.transport.Destination = new Destination();
    this.transport = {TransportId: 1, TypeTransport: ModeTransport.Automobile, Destination: new Destination(), Cout: 200, VoyageId: 1};
 //   this.transportService.getAllVoyageTransports(this.voyageId).then(response => this.setUpTransport(response));
  }

  setUpTransport(transports: Transport[]){
    this.transport = transports[0];
    for(let currentTransport of transports){
      const index: number = transports.indexOf(currentTransport);
      if(index == 0){
        this.transport.Destination.Origine = currentTransport.Destination.Origine;
      } else {
        this.waypoints.push({location : currentTransport.Destination.Origine, stopover: true});
      }

      if(index == transports.length-1)
        this.transport.Destination.Arrivee = currentTransport.Destination.Arrivee;
    }
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
