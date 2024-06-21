//This should extend the entity.ts i think
export class Player{
    name: string;
    hasBentKnee: boolean;

    constructor(name: string, hasBentKnee: boolean){
        this.name = name;
        this.hasBentKnee = hasBentKnee;
    }
}