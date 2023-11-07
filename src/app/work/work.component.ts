import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

 picture_books = 'assets/images/books.png';
 picture_flowers = 'assets/images/flowers.png';

 getPictureStyles() {
  return `
  width: 300px;
  `
 }
}
