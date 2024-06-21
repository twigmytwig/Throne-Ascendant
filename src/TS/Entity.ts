//This is the class that all entities have to have such as name, etc. This will be inheireted by other things like tribe.ts or House.ts
export class Entity{
    name: string;
    hasBentKnee: boolean;
    constructor(name: string, hasBentKnee: boolean){
        this.name = name;
        this.hasBentKnee = hasBentKnee;
    }
}