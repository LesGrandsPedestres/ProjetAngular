import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Emplacement, GeocodeService} from './geocode.service';
import {MapsService} from './maps.service';
import {PlacesService} from './places.service';

@Component({
  selector: 'spi-map',
  template: `
    <div id="map" style="width:100%;height:400px"></div>
  `,
  providers: [ MapsService, PlacesService, GeocodeService ]
})
export class MapsComponent implements AfterViewInit, OnChanges {
  @Input() emplacement: Emplacement;
  @Input() zoom: number;

  constructor(private elementRef: ElementRef, public mapsService: MapsService, public placesService: PlacesService) { }

  ngAfterViewInit(): void {
    this.mapsService.location(this.emplacement, this.zoom).createMap(this.elementRef.nativeElement.firstElementChild);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mapsService.location(this.emplacement, this.zoom).createMap(this.elementRef.nativeElement.firstElementChild);
  }

  refresh(): void {
    //google.maps.event.trigger(this.mapsService.map, 'resize');
    this.mapsService.updateMap();
  }
}
