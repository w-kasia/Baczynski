import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  menuIcon = 'menu';

  backgroundImage = 'assets/images/portrait.png';

  // getContainerStyles() {
  //   return `
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //   `;
  // }

  getBackgroundImageStyles() {
    return `
     width: 652px;
    `;
  }



}
