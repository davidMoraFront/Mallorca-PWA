import { Position } from "../enums/position";
import { Stadistic } from "./stadistic";

export interface Player {
    id: string;
    name: string;
    position: Position;
    image: string;
    stadistics: Stadistic[];
}