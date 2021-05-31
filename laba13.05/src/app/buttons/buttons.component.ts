import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `<form action="">
  <input type="button" (click) = "bc()" value="biggest car">
  <input type="button" (click) = "bp()" value="biggest plane">
  <input type="button" (click) = "bs()" value="biggest ship">
  <p>{{about}}</p>
  <br>
  <img [attr.src]="photopath">
</form>`,
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  about : string = "";
  photopath:string = "";
  constructor() { }
  bs():void{
    this.about = "Originally smaller, jumboisation made Seawise Giant the largest ship ever by length, displacement (657,019 tonnes), and deadweight tonnage.";
    this.photopath= "/assets/images/bs.jfif";
  }
  bc():void{
    this.about = "You could also consider “biggest” dimensionally. The longest car is a van, the Iveco Daily. The widest car is a truck, the Dodge Ram 3500 DRW. And the tallest is the Mercedes-Benz Sprinter, another van.";
    this.photopath= "/assets/images/bc.jfif";
  }
  bp():void{
    this.about  = "World's Biggest Plane Antonov An-225 Mriya Landing. The wide body Antonov An-225 is powered by six turbofan engines and is the longest and heaviest airplane ever built, with a maximum takeoff weight of 640 tonnes.";
    this.photopath= "/assets/images/bp.jfif";
  }
  ngOnInit(): void {
  }

}
