import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Voyage} from "./model/voyage";

@Injectable()
export class VoyageService{
    constructor(private http: Http) {}






    public  Create(Voyage: Voyage): Promise<boolean>{

        let token = localStorage.getItem('token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
             let options = new RequestOptions({headers: headers});
       return  this.http.post('http://localhost:1769/api/Voyages/CreateVoyage',JSON.stringify(Voyage), options).toPromise()
         .then(response => {
            return true;
         });

    }
}