import {Component, OnInit, ElementRef, AfterViewInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {VoyageService} from "./voyage.service";
import {Voyage} from "./model/voyage";
import {TransportComponent} from "./transport.component";
declare var jQuery: any;
declare let google: any;

@Component({
  selector: 'voyage',
  templateUrl: './voyage.component.html'
})
export class VoyageComponent implements OnInit, AfterViewInit {
    voyages: Voyage[];
    @ViewChildren(TransportComponent) transportComponents: QueryList<TransportComponent>;
    //@ViewChild(TransportComponent) transportComponent: TransportComponent[]

    ngAfterViewInit():void {
        for(let i = 0; i <= this.voyages.length - 1; i++){
            jQuery(this.elementRef.nativeElement).find('#accordion' + this.voyages[i].id).accordion({
                collapsible: true,
                active: false,
                activate: (() => {
                  this.updateMap();
                })
            });
            //this.mapsComponents[0].mapsService.map;
        }
    }

    ngOnInit():void {
        this.voyages = [
            {id: "1", titre: "Pérou", desc: "Idk"},
            {id: "2", titre: "Italie", desc: "Idk2"},
            {id: "3", titre: "Penis", desc: "Idk3"},
            {id: "4", titre: "Pussytown", desc: "Idk4"}
        ];
    }

    updateMap(): void {
      //console.log(this.transportComponents.toArray());
      for(let i =0; i<this.transportComponents.toArray().length; i++) {
        this.transportComponents.toArray()[i].updateMap();
      }
    }

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService, private elementRef: ElementRef) {}

}
