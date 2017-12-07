import { NgModule }    from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { SpiComponent }  from './spi.component';
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
import { AgmCoreModule } from '@agm/core';
import {GeocodeComponent} from "./geocode/geocode.component";
import {DirectionsComponent} from "./directions/directions.component";
import {MapsComponent} from "./maps/maps.component";
import {LocalisationComponent} from "./localisation/localisation.component";
import {MarkerDirective} from "./maps/marker.directive";
import {SuggestionComponent} from "./suggestion/suggestion.component";
import {DirectionsDirective} from "./maps/directions.directive";
import {GeocodeService} from "./maps/geocode.service";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB2EuOW-iYY7uNt5uA0RMKG57UJUIc4rRs'
        }),
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
        LogoutComponent,
        SpiComponent, 
        GeocodeComponent, 
        DirectionsComponent, 
        MapsComponent, 
        LocalisationComponent, 
        MarkerDirective, 
        SuggestionComponent, 
        DirectionsDirective
    ],
    providers:    [
        ActiviteService,
        JourService,
        TransportService,
        UserService,
        VoyageService,
        GeocodeService
    ],
    bootstrap:    [ FormComponent ]
})
export class AppModule { }
