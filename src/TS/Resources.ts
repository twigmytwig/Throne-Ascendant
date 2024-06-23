//this is the object of what a resource is. these objects need to be initialized on game load
export class Resource{
    name: string;
    id: number;
    amount: number;
    constructor(id:number, name:string, amount: number){
        this.name = name;
        this.amount = amount;        
        this.id = id;
    }
}