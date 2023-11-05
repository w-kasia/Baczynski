import { Component } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent {

  motherImage = 'assets/images/mother.png';
  butterfly = 'assets/images/butterfly.png';
  teenage = 'assets/images/teenage.png';

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
  ];

  poems: any[] = [
    {id: 1, text: `W oczach psów można unieść nieba biały tulipan.
    Kogo kochasz kochając przydrożne psy,
    chodząc w ulicach wiatrem spalonych,
    na szybach zastygając oczami szklanymi jak łzy?
    Kogo kochasz kochając w ich oczach maleńkie
    kobiety orientalnych snów,
    kiedy boisz się twarz ich jak kwiat wziąć do ręki
    i ostrożnie układasz mozaiki słów?
    Kogo kochasz? w tych oczach zastygł czas
    dyluwialnych, zwierzęcych epok
    i żółte, fosforyczne talerze gwiazd
    wprawione w oczy jak w niebo.
    Jakże spokojne ich twarze obrosłe
    sierścią - osadem - miłością lat,
    kiedy bijesz na oślep rękami jak wiosłem
    we wrogi obraz nieba i ziemi, w świat.
    Rzuć, rzuć magię wirujących kół,
    podnieś ręce do potęgi łap,
    wtul się w sierść przyjacielską i płyń
    przez zarosłe czaszkami wybrzeża lat.`}
  ]

}
