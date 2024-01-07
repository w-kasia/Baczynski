
import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import { BiographyComponent } from './biography.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { MemoriesComponent } from '../memories/memories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('BiographyComponent', () => {
  let component: BiographyComponent;
  let fixture: ComponentFixture<BiographyComponent>;
  // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [BiographyComponent, NavigationComponent, FooterComponent, MemoriesComponent]
    });
    fixture = TestBed.createComponent(BiographyComponent);
    component = fixture.componentInstance;
    // httpMock = TestBed.inject(HttpTestingController);
  });

// afterEach(() => {
//   httpMock.verify();
// })


  
  it('should create the biography component', () => {
    expect(component).toBeTruthy();
  });

  // it('should fetch questions successfully', fakeAsync(() => {
  //   const mockData = [
  //     {question: "Kiedy zmarł Krzysztof?", answer: "Krzysztof zmarł 4 sierpnia 1944 roku"}
  //   ];

  //   component.fetchQuestions();
  //   tick();
  //   const req = httpMock.match('assets/faq.json')[0];
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockData);

  //   expect(component.questions.length).toBeGreaterThan(0);
  //   expect(component.selectedQuestion).toEqual(mockData[0]);
  // }));

  // it('should select a question and display its answer', () => {
  //   const question = {question: "Kiedy zmarł Krzysztof?", answer: "Krzysztof zmarł 4 sierpnia 1944 roku"};

  //   component.selectQuestion(question);

  //   expect(component.selectedQuestion).toEqual(question);
  // });

  // it('should select the first question and display its asnwer when the page is loaded', () => {
  //   const firstQuestion = component.questions[0];

  //   expect(component.selectedQuestion).toEqual(firstQuestion);

  //   expect(fixture.nativeElement.querySelector('answer').textContent).toContain(firstQuestion.answer);
  // });


  })