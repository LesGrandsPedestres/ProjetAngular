import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Waypoint} from './geocode.service';
import {MapsService} from './maps.service';

@Directive({
  selector: 'spi-direction',
})
export class DirectionsDirective implements OnChanges {
  @Input() destination: string;
  @Input() origin: string;
  @Input() mode: string;
  @Input() waypoints: Waypoint[];

  constructor(private mapsService: MapsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.mapsService.addDirections(this.destination, this.origin, this.waypoints, this.mode).updateMap();
  }
}
