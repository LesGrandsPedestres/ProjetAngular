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

        console.log("Voyage ID in getAllVoyage : " + voyageId);
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });

        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:1769/api/GetTransportsForVoyage/' + voyageId, options).toPromise()
            .then(response => {
                return response.json() as Transport[];
         });
    }
}
