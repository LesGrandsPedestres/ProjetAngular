import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Activite} from "./model/activite";

@Injectable()
export class ActiviteService{
    constructor(private http: Http) { }

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
}