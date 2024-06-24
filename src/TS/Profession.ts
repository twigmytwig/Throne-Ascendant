//these will be like the proffesions workers can have so like iron smith -> iron weapons
export class Profession{
    id: number;
    name: string;
    productionRateDays: number; //this is how long it takes for each profession to make 1 of their resources
    resources: number[]; //This will be a list of ID's of resources
    productionAmount: number;
    constructor(name:string, resources: number[], id: number, productionRateDays: number){
        this.name = name;
        this.resources = resources;
        this.id = id;
        this.productionRateDays = productionRateDays;
        this.productionAmount = 1;
    }
}