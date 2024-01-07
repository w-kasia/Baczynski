import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService]
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created the news service', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive news data', () => {
    const testData = [
      { title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego', content: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego Katarzyny Zyskowskiej to książka rzucająca nowe światło na życie jednego z najważniejszych poetów polskich XX wieku, który zginął w powstaniu warszawskim, pozostawiając po sobie twórczość porównywaną do dzieł Słowackiego.'}
    ];

    service.getData().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('assets/news.json');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  })
});

