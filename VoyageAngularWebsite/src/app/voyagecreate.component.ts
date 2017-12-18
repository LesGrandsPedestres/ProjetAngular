import {VoyageService} from "./voyage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {Voyage} from "./model/voyage";

@Component({
    selector: 'CreateVoyage',
    templateUrl: './voyagecreate.component.html',
})
// Activité et Jour component
export class VoyageCreateComponent  implements  OnInit{
    NombreJour:number;
    NameVoyage:string;
    budget :number =0;
    Voyage: Voyage = new Voyage();



    constructor (private serivce:VoyageService, private route:ActivatedRoute, private router : Router){ }

    ngOnInit():void{
        this.route.paramMap.subscribe(params => {

        })
    }

    onSubmit(){
        if(this.NombreJour <= 0 ){
            console.log(this.NombreJour);
            return;
        }
        if(this.NameVoyage == ""){
            console.log(this.NameVoyage);
            return;
        }
        if(this.budget <= 0){
            console.log(this.budget);
            return;
        }
        console.log(this.budget);

        this.Voyage.Budget = 0;
        this.Voyage.Budget = this.budget.valueOf();

        this.Voyage.NbJours = this.NombreJour;
        this.Voyage.TitreVoyage = this.NameVoyage;
        console.log(this.Voyage);
        this.serivce.Create(this.Voyage).then(y=> {
            if(y){
                this.router.navigateByUrl("/home")
            }
            else{ this.NombreJour= 0;
                this.budget = 0;
                this.NameVoyage = "Échec"
            }
        })
    }




}