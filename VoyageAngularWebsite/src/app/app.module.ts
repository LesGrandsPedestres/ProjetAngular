import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FormComponent }  from './form.component';
import {VoyageComponent} from "./voyage.component";
import {ActiviteComponent} from "./activite.component";
import {JourComponent} from "./jour.component";
import {TransportComponent} from "./transport.component";
import {ActiviteService} from "./activite.service";
import {JourService} from "./jour.service";
import {TransportService} from "./transport.service";
import {VoyageService} from "./voyage.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ FormComponent,
                  ActiviteComponent,
                  JourComponent,
                  TransportComponent,
                  VoyageComponent ],
  providers:    [ActiviteService,
                 JourService,
                 TransportService,
                 VoyageService],
  bootstrap:    [ FormComponent ]
})
export class AppModule { }
