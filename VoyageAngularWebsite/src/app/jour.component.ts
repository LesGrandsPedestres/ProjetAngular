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

}