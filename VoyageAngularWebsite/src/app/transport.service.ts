import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Transport, ModeTransport} from "./model/transport";
import {Waypoint} from "./maps/geocode.service";

@Injectable()
export class TransportService{

    public transports: Transport[];
    public transport: Transport;
    public waypoints: Waypoint[];

    constructor(private http: Http) {}

    getAllVoyageTransports(voyageId: number) : Promise<Transport[]> {

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });

        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:1769/api/GetTransportsForVoyage/' + voyageId, options).toPromise()
            .then(response => {

                return response.json() as Transport[];
                
              /*  this.waypoints = [];
                this.transports = response.json();
                this.transport = this.transports[0];

                for(let currentTransport of this.transports){

                    console.log("LE FUCKING FOR DE MARDE");
                    console.log(this.transports);
                    console.log("========================");

                    const index: number = this.transports.indexOf(currentTransport);
                    if(index == 0){
                        this.transport.Destination.Origine = currentTransport.Destination.Origine;
                    } else {
/!*                        var waypoint: Waypoint;
                        waypoint.location = currentTransport.Destination.Origine;
                        waypoint.stopover = true;
                        console.log(waypoint);*!/
                        this.waypoints.push({location : currentTransport.Destination.Origine, stopover: true});
                        console.log("JAI AJOUTER UN FUCKING WAYPOINT");
                        console.log(this.waypoints);
                        console.log("========================");
                    }

                    if(index == this.transports.length-1)
                        this.transport.Destination.Arrivee = currentTransport.Destination.Arrivee;
                }*/
        });


/*        this.transports = [];
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
            TypeTransport: ModeTransport.Automobile,
            Destination: {
                Origine: "Cégep Montpetit",
                Arrivee: "Stade Olympique",
            },
            Cout: 20.00,
            VoyageId: 1
        });

        console.log(this.transports);*/
    }
}
