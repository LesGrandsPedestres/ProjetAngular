import {Component, OnInit} from '@angular/core';
import {TransportService} from "./transport.service";
import {ModeTransport} from "./model/transport";

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

  constructor(private transportService: TransportService) { }

  ngOnInit() : void{
    this.transportService.getAllVoyageTransports();
  }

  getModeTransport(index: number) : string{
    return ModeTransport[index];
  }
}
