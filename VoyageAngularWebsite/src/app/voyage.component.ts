import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {VoyageService} from "./voyage.service";
import {Voyage} from "./model/voyage";
declare var jQuery: any;

@Component({
  selector: 'voyage',
  templateUrl: './voyage.component.html'
})
export class VoyageComponent implements OnInit, AfterViewInit {
    voyages: Voyage[];

    ngAfterViewInit():void {
        for(var i = 0; i <= this.voyages.length; i++){
            jQuery(this.elementRef.nativeElement).find('#accordion' + this.voyages[i].id).accordion({collapsible: true, active: false});
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

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService, private elementRef: ElementRef) {}

}