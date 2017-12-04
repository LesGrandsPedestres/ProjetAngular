import { NgModule }    from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {SpiComponent}  from './spi.component';
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
        SpiComponent
    ],
    providers:    [
        ActiviteService,
        JourService,
        TransportService,
        UserService,
        VoyageService
    ],
    bootstrap:    [ TransportComponent ]
})
export class AppModule { }
