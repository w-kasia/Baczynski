import { TestBed } from '@angular/core/testing';

import { BlogDataService } from './blog-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BlogDataService', () => {
  let service: BlogDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogDataService]
    });
    service = TestBed.inject(BlogDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created the blog-data service', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive blog data', () => {
    const testData = [
      { title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego', content: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego Katarzyny Zyskowskiej to książka rzucająca nowe światło na życie jednego z najważniejszych poetów polskich XX wieku, który zginął w powstaniu warszawskim, pozostawiając po sobie twórczość porównywaną do dzieł Słowackiego.'},
      { title: 'Damian Ukeje śpiewa Baczyńskiego. Oto pierwszy singiel z projektu Poeci+', content: 'Pomysł na projekt zrodził się podczas gdy Damian przygotowywał materiał na specjalny koncert organizowany przez wytwórnię yMusic. Wtedy to sięgnął po twórczość K.K. Baczyńskiego i po przeczytani utworu Bez imienia uznał, że jest to tekst, do którego chce napisać muzykę.'},
      { title: 'Spacer Literacki z Rozdroża za rogatki mokotowskie', content: 'Już 10 marca odbędzie się spacer literacki w Warszawie, który poprowadzi poetka i animatorska kultury, Dorota Ryst. Podczas spaceru będzie czytania m.in. poezja Krzysztofa Kamila Baczyńskiego...'}
];


    service.getData().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('assets/blog.json');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  })
});


// [
//   { "date": "17 czerwca, 2022",
//   "title": "Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego",
//   "content": "'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego' Katarzyny Zyskowskiej to książka rzucająca nowe światło na życie jednego z najważniejszych poetów polskich XX wieku, który zginął w powstaniu warszawskim, pozostawiając po sobie twórczość porównywaną do dzieł Słowackiego.",
//   "text": "Krzysztof Kamil Baczyński to jeden z najważniejszych współczesnych polskich poetów. Jego wiersze są czytane w szkołach i cytowane przez zakochanych. Katarzyna Zyskowska przedstawia jego wyjątkowy portret, w którym poznajemy autora z nieznanej dotąd strony. Szklane ptaki to historia wielu miłości Baczyńskiego. Choć mężczyzna kochał swoją żonę Basię nad życie, miał również inne namiętności. W Barbarze zakochał się od pierwszego wejrzenia i już po czterech dniach się oświadczył. Jednak w jego sercu było miejsce jeszcze dla jednej kobiety – jego zaborczej matki, z którą wraz z żoną mieszkał na trzydziestu metrach warszawskiego mieszkania. Poeta utrzymywał także bliskie stosunki z Jerzym Andrzejewskim i Jarosławem Iwaszkiewiczem. Co tak naprawdę łączyło go z tymi mężczyznami? Zyskowska z niezwykłą szczegółowością przyjrzała się miłosnym uniesieniom Baczyńskiego. Przewertowała tysiące stron materiałów archiwalnych, aby dotrzeć do najbardziej sensacyjnych ciekawostek na temat prywatnego życia poety. Jak kochał Krzysztof? Czy jego uczucie było tragiczne, czy romantyczne?",
//   "image": "assets/images/zyskowska.jpg"
//   },
//    { "date": "4 lipca, 2022",
//   "title": "Damian Ukeje śpiewa Baczyńskiego. Oto pierwszy singiel z projektu Poeci+",
//   "content": "Pomysł na projekt zrodził się podczas gdy Damian przygotowywał materiał na specjalny koncert organizowany przez wytwórnię yMusic. Wtedy to sięgnął po twórczość K.K. Baczyńskiego i po przeczytani utworu 'Bez imienia' uznał, że jest to tekst, do którego chce napisać muzykę.",
//     "text": "Damian Ukeje, który w 2016 roku wygrał pierwszą edycję The Voice Of Poland, debiutuje w nowym projekcie - Poeci+, który powstał w wyniku twórczego wykorzystania okresu pandemii. Tym razem wokalista wziął na warsztat wiersze Krzysztofa Kamila Baczyńskiego. Damian Ukeje jest jednym z pomysłodawców projektu i autorem muzyki. Pierwszym utworem, jaki zaprezentował, jest 'Bez imienia', który został zarejestrowany w większym składzie instrumentalnym. Pomysł na projekt zrodził się podczas gdy Damian przygotowywał materiał na specjalny koncert organizowany przez wytwórnię yMusic. Wtedy to sięgnął po twórczość K.K. Baczyńskiego i po przeczytani utworu 'Bez imienia' uznał, że jest to tekst, do którego chce napisać muzykę. Zawsze miałem słabość do mrocznych tekstów, nasyconych mocnymi wyrazistymi metaforami. Taki właśnie jest wiersz 'Bez imienia'. Poezję Baczyńskiego bardzo cenię. Jego pióro jest mi bliskie a fraza oraz styl są niezwykle wdzięczne i inspirujące do pisania kompozycji - mówi Damian.",
//     "image": "assets/images/ukeje.jpg"
//   },
//   { "date": "26 lutego, 2022",
//   "title": "Spacer Literacki z Rozdroża za rogatki mokotowskie",
//   "content": "Już 10 marca odbędzie się spacer literacki w Warszawie, który poprowadzi poetka i animatorska kultury, Dorota Ryst. Podczas spaceru będzie czytania m.in. poezja Krzysztofa Kamila Baczyńskiego...",
//     "text": "Drodzy Miłośnicy Baczyńskiego, kontynuujemy poznawanie Śródmieścia Południowego. Z placu Na Rozdrożu powędrujemy za rogatki mokotowskie, a po drodze opowiemy między innymi o ostatnich chwilach Bogusława Leśmiana oraz o „pierwszej damie” polskiej literatury i jej salonie. Będzie o szewcu, który naprawiał pantofle poetki i w ten sposób trafił do wiersza, o tym, co łączy Jacka Kaczmarskiego z Marią Czubaszek i kto mieszkał w budynku rogatki. Pojawią się utwory takich autorów jak: Marek Hłasko, Krzysztof Kamil Baczyński, Sylwia Chutnik, Tadeusz Dołęga-Mostowicz, Witold Gombrowicz, Tadeusz Cegielski i inni.Zapraszamy 10 marca 2022 r., początek o godzinie 12.00. na placu Na Rozdrożu, u wylotu Alei Szucha (pod pomnikiem R. Dmowskiego). Spacer potrwa mniej więcej 1,5 do 2 godzin. Spacer poprowadzi Dorota Ryst – poetka, animatorka kultury, zajmująca się od wielu lat tropami literackimi w Warszawie (i nie tylko). Spacer nie jest biletowany, ale jeśli ktoś uzna, że przewodnik zasłużył na napiwek, będzie bardzo miło.",
//     "image": "assets/images/spacer.png"
//   }
// ]
