//This should extend the entity.ts i think
import { Entity } from "./Entity"

export class Player extends Entity{
    treasury: number;
    soldiers: number;
    constructor(name: string, hasBentKnee: boolean, treasury: number, soldiers: number){
        super(name,hasBentKnee);
        this.treasury = treasury;
        this.soldiers = soldiers;
    }
}