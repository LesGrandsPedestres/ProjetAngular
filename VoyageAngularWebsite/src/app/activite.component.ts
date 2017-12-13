import {Component, Input} from '@angular/core';
import {ActiviteService} from "./activite.service";

@Component({
  selector: 'activite',
  templateUrl: './activite.component.html',
})
export class ActiviteComponent {
    @Input() voyageId: number;

    constructor (private serivce:ActiviteService){ }
  
    
}