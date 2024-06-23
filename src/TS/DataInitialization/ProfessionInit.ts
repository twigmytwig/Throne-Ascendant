import { Profession } from "../Profession";

export class ProfessionInitData{
    professions: Profession [];
    constructor(){
        this.professions = [
            new Profession("Hunter", [4], 1),
            new Profession("Ironsmith", [6, 5], 2),
        ];
    }
}
