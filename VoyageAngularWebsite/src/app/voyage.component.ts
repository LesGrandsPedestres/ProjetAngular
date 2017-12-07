import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {VoyageService} from "./voyage.service";
import {Voyage} from "./model/voyage";
declare var jQuery:any;

@Component({
  selector: 'voyage',
  templateUrl: './voyage.component.html'
})
export class VoyageComponent implements OnInit, AfterViewInit {
    voyages: Voyage[];

    ngAfterViewInit():void {
        jQuery(this.elementRef.nativeElement).find('#accordion' + this.voyages[0].titre).accordion({collapsible: true, active: false});
        jQuery(this.elementRef.nativeElement).find('#accordion' + this.voyages[1].titre).accordion({collapsible: true, active: false});
        jQuery(this.elementRef.nativeElement).find('#accordion' + this.voyages[2].titre).accordion({collapsible: true, active: false});
        jQuery(this.elementRef.nativeElement).find('#accordion' + this.voyages[3].titre).accordion({collapsible: true, active: false});
    }

    ngOnInit():void {
        this.voyages = [
            {titre: "Pérou", desc: "Idk"},
            {titre: "Italie", desc: "Idk2"},
            {titre: "Penis", desc: "Idk3"},
            {titre: "Pussytown", desc: "Idk4"},
        ];
    }

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService, private elementRef: ElementRef) {}

}