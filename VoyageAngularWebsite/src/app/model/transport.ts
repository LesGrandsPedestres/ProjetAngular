import {Destination} from "./destination";

export class Transport{
    TransportId: number;
    TypeTransport: ModeTransport;
    Destination: Destination;
    DateDepart: Date;
    DateArrivee: Date;
    Cout: number;
    VoyageId: number;
}

export enum ModeTransport{
    Bus,
    Marche,
    Velo,
    Automobile,
    Taxi,
    Uber
}