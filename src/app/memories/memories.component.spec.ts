import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MemoriesComponent } from './memories.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('MemoriesComponent', () => {
  let component: MemoriesComponent;
  let fixture: ComponentFixture<MemoriesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MemoriesComponent]
    });
    fixture = TestBed.createComponent(MemoriesComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    // fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should create the memories component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from memories.json using GET method', fakeAsync(() => {
    const mockData =   [
      { author: 'Jacek Karpiński', quote: 'Byliśmy razem w plutonie „Alek”. To był wspaniały chłopak. Sądzę, że przeczuwał, że nie przeżyje tej wojny. Podchodził do wszystkiego z dystansem, był bardzo melancholijny. Melancholijny – to dobre określenie. Komenda Główna proponowała mu pracę w sztabie, ale on chciał do Grup Szturmowych. Powiedział, że chce być w prawdziwym wojsku. Czasem jak siedzieliśmy na dyżurze dwanaście albo dwadzieścia cztery godziny i nudziliśmy się, pisaliśmy razem głupie wierszyki, on zwrotkę, ja zwrotkę.'},
      { author: 'Czesław Miłosz', quote: 'Krzysztofa Baczyńskiego odwiedzałem w ich, to jest jego i matki, bo ojciec już nie żył, warszawskim mieszkaniu za niemieckiej okupacji. Dał mi wiersze do mojej antologii. Pamiętam go w pozycji leżącej, bo ciągle chorował na astmę. Jego delikatność i bladość narzucały mi obraz Marcela Prousta w wykładanym korkiem pokoju. (…) Przemiana Baczyńskiego, z chronionego przez matkę astmatyka w żołnierza, jest zdumiewającym triumfem woli: „kochanka moja zwie się wola”. Chyba pomogły tej woli tradycje rodzinne ojca legionisty, który walczył w bitwach nad Stochodem. O tej przemianie pisali krytycy, składając hołd bohaterskiemu poecie-żołnierzowi.'},
      { author: 'Kazimierz Wyka', quote: 'W lirykach Pana współistnieją, to się przeplatają, to sąsiadują ze sobą w jednym złożonym obrazie, to wreszcie dzielą między siebie całe utwory, dwie dążności, których w tym układzie nie spotykam u żadnego z poetów dwudziestolecia: z jednej strony – bardzo swobodna, kapryśna, ale całkowicie plastyczna i wizualna wizyjność, z drugiej – do skrótów myślowych, do kontrastów, niespodzianek znaczeniowych dążący intelektualizm.'},
     ];


    component.ngOnInit();
    component.getData();
    tick();
    const req = httpMock.expectOne('assets/memories.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);

    expect(component.memories).toEqual(mockData);
  }));
});
