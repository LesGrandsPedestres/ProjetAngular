import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { FormComponent }  from './form.component';
import { VoyageComponent } from "./voyage.component";
import { ActiviteComponent } from "./activite.component";
import { JourComponent } from "./jour.component";
import { TransportComponent } from "./transport.component";
import { ActiviteService } from "./activite.service";
import { JourService } from "./jour.service";
import { TransportService } from "./transport.service";
import { VoyageService } from "./voyage.service";
import { HttpModule } from "@angular/http";
import { UserService } from "./user.service";
import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {LogoutComponent} from "./logout.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: VoyageComponent },
            { path: 'account', component: UserComponent },
            { path: 'logout', component: LogoutComponent }
        ])
    ],
    declarations: [
        FormComponent,
        ActiviteComponent,
        JourComponent,
        TransportComponent,
        UserComponent,
        VoyageComponent,
        LogoutComponent
    ],
    providers:    [
        ActiviteService,
        JourService,
        TransportService,
        UserService,
        VoyageService
    ],
    bootstrap:    [ FormComponent ]
})
export class AppModule { }
