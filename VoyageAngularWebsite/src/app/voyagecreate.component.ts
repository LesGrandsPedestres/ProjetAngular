import {VoyageService} from "./voyage.service";
import {ActivatedRoute} from "@angular/router/router";
import {Component, OnInit} from "@angular/core/core";

@Component({
    selector: 'CreateVoyage',
    templateUrl: './voyagecreate.component.html',
})
// Activité et Jour component
export class VoyageCreateComponent  implements  OnInit{
    NombreJour:number;
    NameVoyage:string;
    


    constructor (private serivce:VoyageService, private route:ActivatedRoute){ }

    ngOnInit():void{
        this.route.paramMap.subscribe(params => {

        })
    }


}