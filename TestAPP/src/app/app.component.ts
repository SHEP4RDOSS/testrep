import { Component } from '@angular/core';
import {StrangeHobbby} from './strange-hobbby';
import {RESUME} from './mock-resume';
import {Resume} from './resume';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : '<h1><img class= "clearfix"src={{obj.img}}/> {{obj.FirstName}} {{obj.MiddlleName}} {{obj.LastName}}</h1><div><div class="clearfix" id="exp"><h2>Опыт работы:</h2><div  *ngFor="let item of obj.exps"><h5>Место работы : {{item.Company}}</h5><h5>время работы : {{item.stYear | date}} - {{item.endYear | date}} </h5><h5>Должность : {{item.position}}</h5></div></div><div class ="clearfix" id="about"><h2>ИНФО: </h2><p>Город : {{obj.city}}</p><p>Желаемая зарплата : {{obj.sallary}}</p><p>Навыки : </p><li *ngFor="let i of obj.skills">{{i}}</li></div><div id="contact"><h2>МОИ КОНТАКТЫ:</h2><p>Номер телефона: {{obj.number}}</p><p>Email: {{obj.email}}</p><p>Полезные ссылки: </p><a *ngFor="let i of obj.links">{{i}}</a></div></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';
//   obj:StrangeHobbby[]=[{ title: "Прыжки через детей", descr : "Взрослые мужчины переодеваются красно-желтые костюмы и перепрыгивают через младенцев. Неизвестный ритуал проходит автономной области Кастилия и Леон на северо-западе Испании с 1620 года. Идея El Colacho состоит в том, что прыгуны, наряженные в дьявольские костюмы с кнутами и дубинками, олицетворяют сатанинское зло. Когда они прыгают, зло следует за ними, и души младенцев очищаются. Главное условие — чтобы младенцы были рождены именно в этом году.",
//   img : "./assets/imam/прыжки-через-детей-min-1024x577.jpg",img_pers:"./assets/imam/1l053cyhht5w4c480skkc8gg4 (1).jpg" , pers_desc : "Чел в прикольном костюме"},
//   { title: "Поедание кирпичей", descr : "Паккираппа Хунаганди (Pakkirappa Hunagundi) раньше работал строителем, сейчас ему 35 лет, а поеданием несъедобного он увлекся в возрасте 10 лет. Впрочем, в случае Хунаганди речь идет, конечно же, не об увлечении, а о пищевом расстройстве, которое называется Пика (Pica). Согласно словарю, Пика – пищевое расстройство, характеризующееся поеданием веществ, лишенных питательной ценности. Чаще всего проявляется оно у детей раннего возраста, реже проявляется у взрослых, причем обоих полов.",
//   img : "./assets/imam/bricks_0.jpg",img_pers:"./assets/imam/hunagundi_9.jpg", pers_desc:"Паккираппа Хунаганди"}
// ];
obj: Resume = RESUME;

}