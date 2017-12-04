import {Destination} from "./Destination";

export class Transport{
    TransportId: number;
    TypeTransport: ModeTransport;
    Destination: Destination;
    DateDepart: Date;
    DateArrive: Date;
    Cout: number;
    VoyageId: number;
}

export enum ModeTransport{
    Bus,
    Avion,
    Marche,
    Velo,
    Train,
    Automobile,
    Taxi,
    Uber
}