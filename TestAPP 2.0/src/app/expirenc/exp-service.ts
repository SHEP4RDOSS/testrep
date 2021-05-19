import {Exp} from './exp'

export class ExpService {
    private EXPS : Exp [] =  [{company : "ITinvest",stYear : 1518213600000, endYear : 1578607200000 , position : "Уборщик"},{company : "КА ШАГ",stYear : 1583791200000, endYear : 2072034000000 , position : "Убийца комаров"}];

    
    public GetExp() {
        return this.EXPS;
    }

    
    public AddExp(exp : Exp) {
        this.EXPS.push(exp);
    }
}
