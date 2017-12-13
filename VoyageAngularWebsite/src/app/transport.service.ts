import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Transport, ModeTransport} from "./model/transport";

@Injectable()
export class TransportService{

    public transports: Transport[];
    public transport: Transport;

    constructor(private http: Http) {}

    getAllVoyageTransports(voyageId: number){

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
/*        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:1769/api/GetTransportsForVoyage/' + voyageId, options).toPromise()
            .then(response => {
                let transport : Transport = response.json();
                this.transport = transport;
            });*/


        this.transports = [];
        this.transports.push({
            TransportId: 1,
            TypeTransport: ModeTransport.Automobile,
            Destination: {
                Origine: "Cégep Montpetit",
                Arrivee: "Masson Montréal",
            },
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
            Cout: 20.00,
            VoyageId: 1
        });

        console.log(this.transports);
    }
}