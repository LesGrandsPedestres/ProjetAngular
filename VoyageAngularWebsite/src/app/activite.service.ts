import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Activite} from "./model/activite";
import {Jour} from "./Jour";

//Jour et Activite Service
@Injectable()
export class ActiviteService{

    public listActivite:Activite[];

    constructor(private http: Http) { }

    getJourById(id:string):Promise<Jour>{
        let Jour:Jour;
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:2209****/api/Activites/GetActivitesById/'+id, options).toPromise()
            .then(response =>{
                console.log(response.json());
                Jour = response.json();
                return Jour;
            });
    }

    getActivites(id:string):void{
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:1769/api/Activites/GetActivitesByVoyageId/'+id,options).toPromise()
            .then(response => {
                console.log(response.json());
                this.listActivite = response.json();
            });
    }

    getActiviteParId(id:number):Promise<Activite>{
        let activite:Activite;
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:2209****/api/Activites/GetActivitesById/'+id.toString(), options).toPromise()
            .then(response =>{
                console.log(response.json());
                activite = response.json();
                return activite;
            });
    }

    

/*    getActivites():List<Activite>{

        return this.http.get("http://localhost:1769/api/Activites");
    }

    getActiviteParId(id:number):Activite{
        return this.http.get("http://localhost:1769/api/Activites/" + id.toString());
    }

    postActivite(activite:Activite):void{
        let data = {
            activite
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        this.http.post('http://localhost:11601/api/Activites', JSON.stringify(data), options);
    }

    deleteActivite(id:number):void{
        this.http.delete('http://localhost:11601/api/Activites/'+id.toString());
    }*/

    /*call(): void {
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:2209/api/Memos', options).toPromise()
            .then(response => {
                console.log(response.json());
            });
    }*/
}