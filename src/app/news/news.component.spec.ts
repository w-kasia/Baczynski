import { NewsService } from './../news.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationComponent } from '../navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newsService: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [NewsComponent, NavigationComponent],
      providers: [NewsService]
    });
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    newsService = TestBed.inject(NewsService);
    fixture.detectChanges();
  });

  it('should create the news component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch news on component initialization', () => {
   spyOn(newsService, 'getData').and.returnValue(of([]));
   component.ngOnInit();

   expect(newsService.getData).toHaveBeenCalled();
   expect(component.articles).toEqual([]);
  });
});
