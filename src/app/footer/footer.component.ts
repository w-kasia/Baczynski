import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/kontakt']);
  }
}
