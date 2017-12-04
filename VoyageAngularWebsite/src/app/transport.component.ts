import { Component } from '@angular/core';
import {TransportService} from "./transport.service";

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
export class TransportComponent {
  mtlLat: number = 45.535493;
  mtlLng: number = -73.493892;

  constructor(private transportService: TransportService) { }

}