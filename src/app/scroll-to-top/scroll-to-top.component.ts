import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}