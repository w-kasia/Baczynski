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
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should create the memories component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from memories.json using GET method', fakeAsync(() => {
    const mockData = [{author: 'Author name', quote: 'Sample quote'}];

    component.ngOnInit();
    component.getData();
    tick();
    const req = httpMock.expectOne('assets/memories.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
    expect(component.memories).toEqual(mockData);
  }));
});
