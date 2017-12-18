import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Jour} from "./Jour";

@Injectable()
export class JourService{
    public listJour:Jour[];

    constructor(private http: Http) { }


    getJours(id:string):void {
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:1769/api/Jours/GetJoursByVoyageId/'+id,options).toPromise()
            .then(response => {
                console.log(response.json());
                this.listJour = response.json();
            });
    }





}