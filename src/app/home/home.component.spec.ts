import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { NewsComponent } from '../news/news.component';
import { BlogDataService } from '../blog-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [BlogDataService],
      declarations: [HomeComponent, NavigationComponent, NewsComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all images, paragraphs and heading', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    const heading = fixture.nativeElement.querySelector('h1');

    expect(images.length).toBeGreaterThan(0);
    for(const image of images) {
      expect(image.complete).toBe(false);
    }
    expect(paragraphs.length).toBeGreaterThan(0);
      for(const paragraph of paragraphs) {
        expect(paragraph.textContent).toBeTruthy();
      }
    expect(heading).toBeTruthy();
  });

  it('should render navigation, news and footer components', () => {
    const navigation = fixture.nativeElement.querySelector('app-navigation');
    const news = fixture.nativeElement.querySelector('app-news');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navigation).toBeTruthy();
    expect(news).toBeTruthy();
    expect(footer).toBeTruthy();
  });
})
