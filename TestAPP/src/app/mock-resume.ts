import { from } from "rxjs";
import {Resume} from './resume';
import {Exp} from './exp';

export const EXPS : Exp[] =  [{Company : "ITinvest",stYear : 1518213600000, endYear : 1578607200000 , position : "Уборщик"},{Company : "КА ШАГ",stYear : 1583791200000, endYear : 2072034000000 , position : "Убийца комаров"}];
export const RESUME : Resume = {
    FirstName : "Михаил", MiddlleName : "Петрович", LastName : "Зубенко",
    email : "daiterabotupliz@gmail.com" , number : "+8805553535" , city : "Кривой Рог" ,
    exps : EXPS, skills : ["снайпер","програмест",",бизнес-коуч","клоун","уборщик"],links : ["https://github.com/SHEP4RDOSS?tab=repositories"],sallary : 20000, img : "./assets/imam/JUpVq_ijVA8.jpg.bb4fdad5f64c833db8b7c6442fcd7cf4.jpg"
}; 