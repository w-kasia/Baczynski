import { WorksService } from './works.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WorksService', () => {
  let service: WorksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorksService]
    });
    service = TestBed.inject(WorksService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the works service', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive works titles from the API', () => {
    const mockResponse = [{title: '1942, 1943, 1944'}];

    service.getWorksTitles().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://wolnelektury.pl/api/authors/krzysztof-kamil-baczynski/books/?format=json')
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should retrive a specific work form the API', () => {
    const mockTitle = '1942, 1943, 1944';
    const mockResponse = { title: '1942, 1943, 1944'};

    service.getWork(mockTitle).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const expectedUrl = 'https://wolnelektury.pl/media/book/pdf/baczynski-1942-1943-1944.pdf';
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
})
