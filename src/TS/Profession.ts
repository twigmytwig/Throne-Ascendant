//these will be like the proffesions workers can have so like iron smith -> iron weapons
export class Profession{
    id: number;
    name: string;
    resources: number[]; //This will be a list of ID's of resources
    constructor(name:string, resources: number[], id: number){
        this.name = name;
        this.resources = resources;
        this.id = id;
    }
}