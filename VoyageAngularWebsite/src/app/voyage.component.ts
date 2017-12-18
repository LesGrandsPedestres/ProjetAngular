import {Component, OnInit, ElementRef} from '@angular/core';
import {VoyageService} from "./voyage.service";
import {Voyage} from "./model/voyage";
import {TransportComponent} from "./transport.component";
import {Http} from "@angular/http/http";
declare var jQuery: any;
declare let google: any;

@Component({
  selector: 'voyage',
  templateUrl: './voyage.component.html'
})
export class VoyageComponent implements OnInit {
    voyages: Voyage[];

    ngOnInit():void {
        this.voyageService.getMesVoyages()
            .then(response => this.voyages = response);
    }

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService, private elementRef: ElementRef) {}

}
