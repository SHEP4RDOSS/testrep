import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill-service';
import { Skills } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  obj1 : SkillService = new SkillService();
  obj : Skills[] = this.obj1.getSkills();
  constructor() { }

  ngOnInit(): void {
  }

}
