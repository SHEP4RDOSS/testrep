import { Component, OnInit } from '@angular/core';
import { Paintings } from '../painting';
import { PaintingService } from '../PaintingService';
@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  obj:PaintingService = new PaintingService();

  paints = this.obj.obj;
  constructor() { }
  info = new Paintings();
  isopen:boolean = false;
  ngOnInit(): void {
  }
                about(id:number)
                {
                  this.isopen = true;
                  this.info = this.obj.obj[1];
                }
}

