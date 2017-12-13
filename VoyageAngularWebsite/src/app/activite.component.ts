import {Component, Input, OnInit} from '@angular/core';
import {ActiviteService} from "./activite.service";
import { ActivatedRoute } from "@angular/router"
import { Activite } from "./activite"
import {Jour, JOURS} from "./Jour";

@Component({
  selector: 'activite',
  templateUrl: './activite.component.html',
})
// Activité et Jour component
export class ActiviteComponent  implements  OnInit{
    Jours:Jour[] = JOURS
    @Input() voyageId: string; // Pour prendre toute les jours de se voyages
    JoursIdSelected:string; //Pour prendre toute les activitées de cette journée afin de pouvoir mettre ne place un horaire

    constructor (private serivce:ActiviteService, private route:ActivatedRoute){ }

    ngOnInit():void{
        this.route.paramMap.subscribe(params => {
            this.voyageId = params.get('id');
            //this.serivce.getActivites(this.voyageId);
        })
    }
  
    
}