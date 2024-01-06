
import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import { BiographyComponent } from './biography.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { MemoriesComponent } from '../memories/memories.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('BiographyComponent', () => {
  let component: BiographyComponent;
  let fixture: ComponentFixture<BiographyComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [BiographyComponent, NavigationComponent, FooterComponent, MemoriesComponent]
    });
    fixture = TestBed.createComponent(BiographyComponent);
    component = fixture.componentInstance;
    // httpClient = TestBed.inject(HttpClient);
    // httpTestingController = TestBed.inject(HttpTestingController);
    httpMock = TestBed.inject(HttpTestingController);
  });

afterEach(() => {
  httpMock.verify();
})


    // [
      //   {
      //     question: 'Kiedy i gdzie urodził się Krzysztof?',
      //     answer: 'Krzysztof urodził się dziewięć lat po ślubie rodziców -  22 stycznia 1921 roku w Warszawie. Był dawno oczekiwanym dzieckiem. Stefania Baczyńska długo nie mogła wydać na świat dziecka. Kilka razy poroniła. Pierwsza jej córeczka - Kamila, która urodziła się przed Krzysiem, wkrótce zmarła. Krzysztof Kamil prawdopodobnie zawdzięczał swoje drugie imię Norwidowi, którego twórczość bliska była jego ojcu. Imię Krzysztof wybrała matka. Przyjaciel domu i nauczyciel poety z gimnazjum Batorego, Emil Semil, wspominał, iż miała do siebie żal za ten wybór. Ojciec Krzysztofa, Stanisław był krytykiem literackim, matka zaś, nauczycielką. Obydwoje rodzice wpajali młodemu Krzysztofowi miłość do ojczyzny i uczyli go patriotyzmu od najmłodszych lat. Stefania długo samotnie wychowywała syna, dla podreperowania jego wątłego zdrowia wyjeżdżała z nim często – do „Kmitówki” w Bukowinie Tatrzańskiej, do Jastarni.'
      //   },
      //   {
      //     question: 'Jakim uczniem był Krzyś?',
      //     answer: 'Kazimierz Wyka pisał: „Baczyński uczniem był miernym. Maturę otrzymał w czerwcu 1939 roku. Marzył o karierze ilustratora-grafika, posiadał w tym kierunku widoczne uzdolnienia”. Miał kłopoty na lekcjach polskiego — wspomina Jerzy Madziar, szkolny kolega Baczyńskiego. — Nikt nie podejrzewał, że w nim kryje się taki talent; był dla nas przede wszystkim dobrym rysownikiem. Profesor Olszewski zawsze stawiał mu dobre stopnie. — „W tym chłopcu coś drzemie, ma śmiałą linię i subtelne poczucie koloru, ale kpi sobie z perspektywy” — przytacza słowa nauczyciela rysunków Edmund Semil. W zachowanych i publikowanych wspomnieniach kolegów szkolnych Baczyńskiego, obrazki z życia szkoły i portrety pedagogów nie wydają się być bardzo odległe od komicznych sytuacji i przerysowanych, karykaturalnych postaci w groteskowym obrazie szkoły, jaki poeta stworzył – prawdopodobnie nie bez wpływu Ferdydurke Witolda Gombrowicza. Bliski szkolny kolega Krzysztofa, Andrzej Józef Kamiński, wspominał jego ogromne poczucie humoru i satyryczny temperament (był redaktorem działu satyrycznego klasowego pisemka), wyczucie dowcipu sytuacyjnego i upodobanie do „kawałów”. Baczyński fantastycznie naśladował profesorów, często bezbronnych wobec „rozwydrzonej zgrai dryblasów”, jak wspominany przez A. J. Kamińskiego młody fizyk: „Mawiało się o nim, iż zrobił się taki zuchwały, że kiedy uczniowie przewrócą go na korytarzu, nawet nie powie <przepraszam>. Oddaje to doskonale jeśli nie fakty, to postać”.'
      //   },

      //   {
      //     question: 'Jakim Krzysztof był chłopakiem?',
      //     answer: 'Krzysztof uchodził za bardzo miłego. Miał duże poczucie humoru, był lubiany i cieszył się dużym autorytetem. Nie miał kontaktu z otoczeniem, był typem samotnika. Jak każdy miał swoje problemy, ale się nie zwierzał. Krzyś z natury był szalenie uczuciowy, nerwowy, kapryśny. Rozstanie rodziców bardzo przeżył i jeszcze bardziej stał się nerwowy. W szkole często zapadał na zdrowiu, gorączkował, musiał leżeć w łóżku. Krzysztof miał pełne poczucie swojej wartości, ale nie był zarozumiały.'
      //   },
      //   {
      //     'question': 'Jaki udział miał Krzysztof w walce o Ojczyznę?',
      //     answer: 'W czasie II wojny światowej Baczyński był aktywnym uczestnikiem polskiego ruchu oporu. Był też uczestnikiem tajnych kompletów, Harcerskich Grup Szturmowych i konspiracyjnej Szkoły Podchorążych Rezerwy. Mocno angażował się w konspirację, brał udział w wielu szkoleniach, nierzadko ryzykując aresztowaniem. Uczestniczył w szeregu akcji bojowych organizowanych przez Polskie Podziemie. 27 kwietnia 1944 roku został członkiem zespołu odpowiedzialnego za wysadzenie niemieckiego pociągu pospiesznego. Następnie brał udział w szkoleniu w plutonie „Alek”. W lipcu 1944 roku wstąpił do batalionu „Parasol” i został zastępcą dowódcy III plutonu 3. kompanii, w której zastał go wybuch Powstania Warszawskiego, 1 sierpnia 1944 roku. W decyzji o wstąpieniu do podziemnej Armii Krajowej Krzysztofa wspierała Basia. Zbigniew Wasilewski tak zapamiętał swoją rozmowę z żoną poety: „…spytałem ją wręcz, czy zgadza się, aby Krzysztof tak się narażał […]. Odrzekła, że nie ja pierwszy ją o to pytam, że nawet kilka osób […] namawiało ją i Krzysia, aby się z tego wycofał. – On nie może tego zrobić – powiedziała. – Przeczytaj jego wiersze, a zrozumiesz, że nie może”. Kiedy podchorąży „Krzyś” poszedł do Powstania Warszawskiego, słowa epilogu w Elegii o… [chłopcu polskim] wybrzmiały szczególnie dramatycznie w pierwszych dniach walki: „Boże, zabiłem człowieka”, mówił, choć nie wiedział, czy to jego kula trafiła wroga. Do końca walczyły w nim wola życia, tworzenia – z rozpaczą, niezgodą na zadawanie śmierci. '
      //   },
      //   {
      //     question: 'Jak poeta poznał Basię, swoją żonę?',
      //     answer: 'Basię poznał Krzysztof u koleżanki i od razu widać było, że jest zakochany. Do matki powiedział, że znalazł dziewczynę swego życia. Podobnie swojej matce powiedziała Basia. Z miejsca chcieli się pobrać, ale ślub odbył się dopiero w pół roku później. Na oświadczyny Krzysztof przyszedł z matką. Matka Basi — Feliksa Drapczyńska — powiedziała: „Może by tak ślub odłożyć po wojnie... Są jeszcze młodzi”. I wówczas Krzysztof odezwał się: „A kto nam zaręczy, że tę wojnę przeżyjemy?”. Barbara pochodziła z rodziny drukarzy. Drukarzem był ojciec, drukarzami byli też jego trzej starsi bracia. Koledzy żartowali, że Krzysztof dobrze się w życiu urządził, bo po wojnie teść wyda mu wszystkie książki. Ojciec Basi miał drukarnię przy ulicy Pięknej (wówczas Piusa XI) w Warszawie. To na jego maszynach wydzierżawionych po wojnie „Wiedzy” drukowano w roku 1947 tom wierszy Krzysztoła pod tytułem „Śpiew z pożogi”. Basia wszystko podporządkowała poecie. „Żyła jak bezcenny cień męża, jednocześnie tak fascynująco umieszczana na pierwszym planie” – podkreślała jej koleżanka z tajnych kompletów, Hanna Zaniewska, przywołując słowa Krzysztofa: „Dopiero jak na nią patrzę, wszystko zaczynam rozumieć”. Do sporządzonego własnoręcznie w prezencie ślubnym dla Basi, ozdobnego tomiku W żalu najczystszym, Krzysztof wpisał osiemnaście wierszy, ilustrowanych akwarelkami, z dedykacją: „Mojej ukochanej Basieńce w dniu naszego ślubu…”. Poeta podarował ukochanej, wrażliwej czytelniczce poezji, idealnej partnerce intelektualnej i duchowej – wybór swoich najlepszych utworów tego czasu; pośród nich, między innymi: Wyroki, Rycerz, Bohater, Wielkanoc, Rorate coeli, Młot, Ojczyzna (Prolog), czy wiersz tytułowy, W żalu najczystszym.'
      //   },
      //   {
      //     question: 'Jak zginął Krzysztof?',
      //     answer: 'Rano, 4 sierpnia 1944 roku wezwano patrol sanitarny do rannego w pałacu Blanka. „Poszedłem z tym patrolem — pisał Czajkowski — bo nie miałem nic do roboty. Na stanowisku w narożnym pokoju pierwszego piętra zastaliśmy Krzysztofa leżącego na dywanie z wielką raną głowy. Był martwy. Sanitariuszki przeniosły ciało do Ratusza. Pogrzeb odbył się tego samego dnia wieczorem”. Krzysztof został w 2018 roku pośmiertnie odznaczony Krzyżem Komandorskim Orderu Odrodzenia Polski. Wśród pozostałych odznaczeń znajdują się Krzyż Armii Krajowej oraz Medal za Warszawę 1939–1945. Ciało poety spoczywa na Cmentarzu Wojskowym na Powązkach.'
      //   },
      //   {
      //     question: 'Jak zginęła Barbara?',
      //   answer: 'Basia  została 24 sierpnia 1944 roku trafiona w głowę odłamkiem szkła podczas Powstania Warszawskiego, prawdopodobnie pod gmachem Teatru Wielkiego. Miała uszkodzony mózg. W chwilach świadomości mówiła: „Ja wiem, że Krzysztof nie żyje, to i ja nie chcę żyć”.Operacja odbyła się w okropnych warunkach, w piwnicy. W nocy przed śmiercią Basi, Feliksa Drapczyńska miała sen: przyszedł Krzysztof, nakrył Basię szerokim płaszczem i zabrał ją. Umierając, ściskała w ręku tomik wierszy męża. Zmarła 1 września 1944 roku. Matka, stojąc parę lat później nad grobem córki, miała powiedzieć: „Basia tę śmierć na siebie sprowadziła. Brak wieści o Krzyszwofe był dla niej tą złą wiadomością”.Krążyła potwierdzona później przez matkę pogłoska, że Basia, gdy zginęła, spodziewała się dziecka.'
      //   }
      // ]
  it('should create the biography component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch questions successfully', fakeAsync(() => {
    const mockData = [
      {question: "Kiedy zmarł Krzysztof?", answer: "Krzysztof zmarł 4 sierpnia 1944 roku"}
    ];

    component.fetchQuestions();
    tick();
    const req = httpMock.match('assets/faq.json')[0];
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    expect(component.questions.length).toBeGreaterThan(0);
    expect(component.selectedQuestion).toEqual(mockData[0]);
  }));

  it('should select a question and display its answer', () => {
    const question = {question: "Kiedy zmarł Krzysztof?", answer: "Krzysztof zmarł 4 sierpnia 1944 roku"};

    component.selectQuestion(question);

    expect(component.selectedQuestion).toEqual(question);
  });

  it('should select the first question and display its asnwer when the page is loaded', () => {
    const firstQuestion = component.questions[0];

    expect(component.selectedQuestion).toEqual(firstQuestion);

    expect(fixture.nativeElement.querySelector('answer').textContent).toContain(firstQuestion.answer);
  });


  // it('should display the first question and its answer when the page is loaded', () => {
  //   const questionElements = fixture.nativeElement.querySelectorAll('.question');
  //   const answerElement = fixture.nativeElement.querySelectorAll('.answer');

  //   expect(questionElements[0].textContent.trim()).toBe('Kiedy i gdzie urodził się Krzysztof?');
  //   expect(answerElement.textContent.trim()).toBe('Krzysztof urodził się dziewięć lat po ślubie rodziców -  22 stycznia 1921 roku w Warszawie. Był dawno oczekiwanym dzieckiem. Stefania Baczyńska długo nie mogła wydać na świat dziecka. Kilka razy poroniła. Pierwsza jej córeczka - Kamila, która urodziła się przed Krzysiem, wkrótce zmarła. Krzysztof Kamil prawdopodobnie zawdzięczał swoje drugie imię Norwidowi, którego twórczość bliska była jego ojcu. Imię Krzysztof wybrała matka. Przyjaciel domu i nauczyciel poety z gimnazjum Batorego, Emil Semil, wspominał, iż miała do siebie żal za ten wybór. Ojciec Krzysztofa, Stanisław był krytykiem literackim, matka zaś, nauczycielką. Obydwoje rodzice wpajali młodemu Krzysztofowi miłość do ojczyzny i uczyli go patriotyzmu od najmłodszych lat. Stefania długo samotnie wychowywała syna, dla podreperowania jego wątłego zdrowia wyjeżdżała z nim często – do „Kmitówki” w Bukowinie Tatrzańskiej, do Jastarni.');
  // })

  // it('should fetch questions and answers from data.json using GET method ang open the first answer', () => {
  // component.fetchQuestions();
  // const req = httpTestingController.expectOne('assets/data.json');
  // expect(req.request.method).toBe('GET');
  //   const mockResponse= [
  //       {
  //         question: 'Question',
  //         answer: 'answer'
  //       }
  //      ];
  //      req.flush(mockResponse);

  //      expect(component.questions).toEqual(mockResponse);
  //      expect(component.selectedQuestion).toEqual(mockResponse[0]);
  //      expect(component.selectedQuestion.open).toBe(true);
  // })
  })