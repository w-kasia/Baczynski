import { Component, Input,} from '@angular/core';

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