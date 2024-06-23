//This is the file that defines the functions and professions a worker can have
import { Profession } from "./Profession";
export class Worker{
    profession: Profession;

    constructor(profession: Profession){
        this.profession = profession;
    }
}