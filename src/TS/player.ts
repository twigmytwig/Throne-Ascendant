//This should extend the entity.ts i think
import { Entity } from "./Entity"

export class Player extends Entity{
    treasury: number;
    soldiers: number;
    workers: number;
    hunters: number;
    food: number;
    weapons: number;
    nonCommittedPersonnel: number; //if you remove a soldier they become non-committed personnel until you move them into something
    constructor(name: string, hasBentKnee: boolean, entitySignifier:string, treasury: number, 
        soldiers: number, workers: number, nonCommittedPersonnel: number, hunters: number,
        food: number, weapons: number){
        super(name,hasBentKnee,entitySignifier);
        this.treasury = treasury;
        this.soldiers = soldiers;
        this.workers = workers;
        this.nonCommittedPersonnel = nonCommittedPersonnel;
        this.hunters = hunters;
        this.food = food;
        this.weapons = weapons;
    }
}