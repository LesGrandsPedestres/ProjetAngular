import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Transport, ModeTransport} from "./model/transport";

@Injectable()
export class TransportService{

    public transports: Transport[];

    constructor(private http: Http) {}

    getAllVoyageTransports(){
        this.transports = [];
        this.transports.push({
            TransportId: 1,
            TypeTransport: ModeTransport.Automobile,
            Destination: {
                Origine: "Cégep Montpetit",
                Arrivee: "Masson Montréal",
            },
            DateDepart: new Date(),
            DateArrivee: new Date(),
            Cout: 10.00,
            VoyageId: 1
        });

        this.transports.push({
            TransportId: 2,
            TypeTransport: ModeTransport.Bus,
            Destination: {
                Origine: "Cégep Montpetit",
                Arrivee: "Stade Olympique",
            },
            DateDepart: new Date(),
            DateArrivee: new Date(),
            Cout: 20.00,
            VoyageId: 1
        });

        console.log(this.transports);
    }
}