import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class JourService{
    constructor(private http: Http) {}
}