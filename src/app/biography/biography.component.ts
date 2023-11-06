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
    {id: 2, text: 'Jakim uczniem był Krzyś?'},
    {id: 3, text: 'Co studiował?'},
    {id: 4, text: 'Jak poznał Basie?'}
  ];

  answers: any[] = [
    {id: 1, text: 'Krzysztof urodził się dziewięć lat po ślubie rodziców -  22 stycznia 1921 roku w Warszawie. Był dawno oczekiwanym dzieckiem. Stefania Baczyńska długo nie mogła wydać na świat dziecka. Kilka razy poroniła. Pierwsza jej córeczka, która urodziła się przed Krzysiem, wkrótce zmarła. Miała na imię Kamila, co moze tłumaczyć drugie imię poety.'},
    {id: 2, text: 'Kazimierz Wyka pisał: „Baczyński uczniem był miernym. Maturę otrzymał w czerwcu 1939 roku. Marzył o karierze ilustratora-grafika, posiadał w tym kierunku widoczne uzdolnienia”. Miał kłopoty na lekcjach polskiego — wspomina Jerzy Madziar, szkolny kolega Baczyńskiego. — Nikt nie podejrzewał, że w nim kryje się taki talent; był dla nas przede wszystkim dobrym rysownikiem. Profesor Olszewski zawsze stawiał mu dobre stopnie. — „W tym chłopcu coś drzemie, ma śmiałą linię i subtelne poczucie koloru, ale kpi sobie z perspektywy” — przytacza słowa nauczyciela rysunków Edmund Semil.'},

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
