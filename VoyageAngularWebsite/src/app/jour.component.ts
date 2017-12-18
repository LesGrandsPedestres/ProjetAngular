import {Component, OnInit, Input} from '@angular/core';
import {JOURS, Jour} from "./Jour";
import {ActivatedRoute} from "@angular/router";
import {JourService} from "./jour.service";

@Component({
  selector: 'jour',
  templateUrl: './jour.component.html',
})
export class JourComponent implements  OnInit{
      listJours:Jour[];
      voyageId:string;

  constructor (private serivce:JourService, private route:ActivatedRoute){ }

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      this.voyageId = params.get('voyageId').toString();
      this.serivce.getJours(this.voyageId);
    })
  }
  onPlus(id:number){
    console.log(id);
    this.serivce.plus(id);
    this.serivce.getJours(this.voyageId)
  }
  onMoins(id:number){
    this.serivce.moins(id);
    this.serivce.getJours(this.voyageId)
  }

}