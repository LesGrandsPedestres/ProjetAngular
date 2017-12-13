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
            {VoyageId: "1", TitreVoyage: "Pérou",Budget: 521.00,NbJours: 14},
            {VoyageId: "2", TitreVoyage: "Italie", Budget: 5870.00, NbJours:15},
            {VoyageId: "3", TitreVoyage: "Penis", Budget:0.69, NbJours : 1},
            {VoyageId: "4", TitreVoyage: "Pussytown",Budget:17000.90, NbJours: 365}
        ];
    }

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService, private elementRef: ElementRef) {}

}
