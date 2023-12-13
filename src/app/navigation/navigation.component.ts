import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']


})
export class NavigationComponent {

  @Input() menuIcon: string | undefined;
//  @Input() opened: string | undefined;

  opened: boolean = false;

}



