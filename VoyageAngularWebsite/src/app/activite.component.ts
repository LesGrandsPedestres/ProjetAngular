import { Component } from '@angular/core';
import {ActiviteService} from "./activite.service";

@Component({
  selector: 'activite',
  templateUrl: './activite.component.html',
})
export class ActiviteComponent {

    constructor (private serivce:ActiviteService){ }
  

}