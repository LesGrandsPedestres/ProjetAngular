import {Component, OnInit, Input} from '@angular/core';
import {JOURS, Jour} from "./Jour";
import {ActivatedRoute} from "@angular/router";
import {ActiviteService} from "./activite.service";

@Component({
  selector: 'jour',
  templateUrl: './jour.component.html',
})
export class JourComponent implements  OnInit{
      listJours:Jour[] = JOURS;
      voyageId:string;

  constructor (private serivce:ActiviteService, private route:ActivatedRoute){ }

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      this.voyageId = params.get('voyageId').toString();
      //this.serivce.getActivites(this.voyageId);
    })
  }

}