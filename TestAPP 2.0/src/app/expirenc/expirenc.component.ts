import { Component, OnInit } from '@angular/core';
import { Exp } from './exp';
import { ExpService } from './exp-service';
@Component({
  selector: 'app-expirenc',
  templateUrl: './expirenc.component.html',
  styleUrls: ['./expirenc.component.css']
})
export class ExpirencComponent implements OnInit {

  obj : ExpService = new ExpService();

  exps : Exp[] = this.obj.GetExp();
  constructor() { }

  ngOnInit(): void {
  }
}
