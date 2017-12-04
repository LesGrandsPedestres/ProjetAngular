import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Transport, ModeTransport} from "./model/transport";

@Injectable()
export class TransportService implements OnInit{

    public transports: Transport[];

    constructor(private http: Http) {}

    ngOnInit() : void{
        this.getAllVoyageTransports();
    }

    getAllVoyageTransports(){

        this.transports.push({
            TransportId: 1,
            TypeTransport: ModeTransport.Automobile,
            Destination: {
                LongitudeDepart: -73.493892,
                LatitudeDepart: 45.535493,
                LongitudeArrivee: -73.493892,
                LatitudeArrivee: 45.00000,
            },
            DateDepart: new Date(),
            DateArrive: new Date(),
            Cout: 10.00,
            VoyageId: 1
        });

        this.transports.push({
            TransportId: 2,
            TypeTransport: ModeTransport.Automobile,
            Destination: {
                LongitudeDepart: -3.493892,
                LatitudeDepart: 4.535493,
                LongitudeArrivee: -3.493892,
                LatitudeArrivee: 5.53000,
            },
            DateDepart: new Date(),
            DateArrive: new Date(),
            Cout: 20.00,
            VoyageId: 1
        });

    }
}