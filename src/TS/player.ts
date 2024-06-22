//This should extend the entity.ts i think
import { Entity } from "./Entity"

export class Player extends Entity{
    treasury: number;
    soldiers: number;
    constructor(name: string, hasBentKnee: boolean, entitySignifier:string, treasury: number, soldiers: number){
        super(name,hasBentKnee,entitySignifier);
        this.treasury = treasury;
        this.soldiers = soldiers;
    }
}