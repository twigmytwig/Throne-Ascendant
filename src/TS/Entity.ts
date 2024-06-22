//This is the class that all entities have to have such as name, etc. This will be inheireted by other things like tribe.ts or House.ts
export class Entity{
    name: string;
    hasBentKnee: boolean;
    entitySignifier: string; //This is liek tribe, house, etc. This should eventually be replaced by an object that has that info.. y'know... OOP things
    constructor(name: string, hasBentKnee: boolean, entiitySignifier: string){
        this.name = name;
        this.hasBentKnee = hasBentKnee;
        this.entitySignifier = entiitySignifier;
    }
}