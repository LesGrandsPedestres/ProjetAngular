import {Component, OnInit, ElementRef} from '@angular/core';
import {VoyageService} from "./voyage.service";
import {Voyage} from "./model/voyage";
import {TransportComponent} from "./transport.component";
declare var jQuery: any;
declare let google: any;

@Component({
  selector: 'voyage',
  templateUrl: './voyage.component.html'
})
export class VoyageComponent implements OnInit {
    voyages: Voyage[];

    ngOnInit():void {
        this.voyages = [
            {id: "1", titre: "Pérou", desc: "Idk"},
            {id: "2", titre: "Italie", desc: "Idk2"},
            {id: "3", titre: "Penis", desc: "Idk3"},
            {id: "4", titre: "Pussytown", desc: "Idk4"}
        ];
    }

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService, private elementRef: ElementRef) {}

}
