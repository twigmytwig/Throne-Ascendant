//This is the file that defines the functions and professions a worker can have
import { Profession } from "./Profession";
export class Worker{
    profession: Profession;
    productionDate: number; //this is supposed to be the next day the unit will produce its resource
    
    constructor(profession: Profession, productionDate: number){
        this.profession = profession;
        this.productionDate = productionDate; //this needs to be recalculated every time
    }
}