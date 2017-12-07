import { Component } from '@angular/core';
import {VoyageService} from "./voyage.service";

@Component({
  selector: 'voyage',
  templateUrl: './voyage.component.html'
})
export class VoyageComponent {
    

    //a include : javascriptStyle.js + styles.css
    constructor(private voyageService: VoyageService) {}



}