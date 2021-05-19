import { Certificate } from "./certificates";
import { Skills } from "./skills";
export class SkillService
{
    obj : Certificate[] = [{title : "диплом убийцы комаров",place : "хз",date : 1356386400000},{title : "диплом уборщика",place : "тоже хз",date : 1423087200000},{title : "диплом крутого програместа",place : "тут тоже хз",date : 1598043600000}];
    SKILLS : Skills[] = [{title : "убийца комаров",certfs : this.obj[0]},{title : "уборщик",certfs : this.obj[1]},{title : "крутой програмест",certfs : this.obj[2]}];

    getSkills()
    {
        return this.SKILLS;
    }
}