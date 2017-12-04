import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable
export class VoyageService{
    constructor(private http: Http) {}
}