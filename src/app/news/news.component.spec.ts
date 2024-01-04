// import { BlogDataService } from './../blog-data.service';
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NewsComponent } from './news.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { NavigationComponent } from '../navigation/navigation.component';
// import { MaterialModule } from '../material/material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';

// describe('NewsComponent', () => {
//   let component: NewsComponent;
//   let fixture: ComponentFixture<NewsComponent>;
//   let router: Router;
//   let blogDataService: BlogDataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule, RouterTestingModule],
//       declarations: [NewsComponent, NavigationComponent],
//       providers: [BlogDataService]
//     });
//     fixture = TestBed.createComponent(NewsComponent);
//     component = fixture.componentInstance;
//     router = TestBed.inject(Router);
//     blogDataService = TestBed.inject(BlogDataService);
//     spyOn(router, 'navigate');
//     spyOn(window, 'open');
//     fixture.detectChanges();
//   });

//   it('should create the news component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to the article when navigateToArticle is called', () => {
//     const post = {title: 'example title'};

//     component.navigateToArticle(post);
//     expect(window.open).toHaveBeenCalledWith(`/aktualnosci/example-title`);
//   });


// });
