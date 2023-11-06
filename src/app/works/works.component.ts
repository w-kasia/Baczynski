import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  Baczynski_portrait_2 = 'assets/images/Baczynski_works.png';

  getPortraitStyles() {
    return `
      width: 350px;
    `
  }
}
