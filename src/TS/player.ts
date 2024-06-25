//This should extend the entity.ts i think
import { Entity } from "./Entity"
import { Resource } from "./Resources";
import { Worker } from "./Workers";

export class Player extends Entity{
    treasury: number;
    soldiers: number;
    workersList: Worker[];
    resources: Resource[];
    nonCommittedPersonnel: number; //if you remove a soldier they become non-committed personnel until you move them into something
    constructor(name: string, hasBentKnee: boolean, entitySignifier:string, treasury: number, 
        soldiers: number, nonCommittedPersonnel: number,
        workersList: Worker[]){
        super(name,hasBentKnee,entitySignifier);
        this.treasury = treasury;
        this.soldiers = soldiers;
        this.nonCommittedPersonnel = nonCommittedPersonnel;
        this.workersList = workersList;
        //This may not be the best place to do this but i decided I wanted to
        this.resources =  [
            new Resource(1, 'Gold', 0),
            new Resource(2, 'Wood', 0),
            new Resource(3, 'Stone', 0),
            new Resource(4, 'Food', 0),
            new Resource(5, 'Weapons', 0),
            new Resource(6, "Iron", 0)
        ];
    }
}