import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Coordonnee} from './geocode.service';
import {MapsService} from './maps.service';

@Directive({
  selector: 'spi-marker',
})
export class MarkerDirective implements OnChanges {
  @Input() emplacement: Coordonnee;
  @Input() infoWindow: string;
  @Input() icon: string;

  constructor(private mapsService: MapsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.mapsService.addMarker(this.emplacement, this.infoWindow, this.icon).updateMap();
  }
}
