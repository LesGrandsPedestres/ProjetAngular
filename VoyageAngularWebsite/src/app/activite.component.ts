import {Component, Input, OnInit} from '@angular/core';
import {ActiviteService} from "./activite.service";
import { ActivatedRoute } from "@angular/router"
import { Activite } from "./activite"
import {Jour, JOURS} from "./Jour";

@Component({
  selector: 'activite',
  templateUrl: './activite.component.html',
})
export class ActiviteComponent  implements  OnInit{
    voyageId: string; 
    JoursId:string;

    constructor (private serivce:ActiviteService, private route:ActivatedRoute){ }

    ngOnInit():void{
        this.route.paramMap.subscribe(params => {
            this.voyageId = params.get('voyageId');
            this.JoursId = params.get('jourId');
            this.serivce.getActivites(this.voyageId);
        })
    }
  
    
}