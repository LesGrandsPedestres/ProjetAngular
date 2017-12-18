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
    public moins(id:number) : void{
        let token = localStorage.getItem('token');
        let headers = new Headers({
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
          this.http.get('http://localhost:1769/api/Jours/gestionBudgetMoins/'+id, options).toPromise()
            .then(response => {

            });
    }

//plus 1
    public plus(id:number) : void{
        let token = localStorage.getItem('token');
        let headers = new Headers({
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:1769/api/Jours/gestionBudgetPlus/'+id, options).toPromise().then(response =>{


    });
        
    }





}