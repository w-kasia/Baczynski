import { Component } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent {

  motherImage = 'assets/images/mother.png';
  butterfly = 'assets/images/butterfly.png';

  getPortraitStyles() {
    return `
      width: 750px;
    `
  }

  getButterflyStyles() {
    return `
    width: 280px;
    `
  }

  questions: any[] = [
    {id: 1, text: 'Kiedy i gdzie urodził się Krzysztof?'},
    {id: 2, text: 'Kiedy zmarł Krzysztof?'},
    {id: 3, text: 'Co studiował?'},
    {id: 4, text: 'Jak poznał Basie?'}
  ];

  answers: any[] = [
    {text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, magni exercitationem eos iusto iste'}
  ]
}
