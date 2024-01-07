// import { BlogDataService } from './../blog-data.service';
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BlogPostComponent } from './blog-post.component';
// import { NavigationComponent } from '../navigation/navigation.component';
// import { FooterComponent } from '../footer/footer.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MaterialModule } from '../material/material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';

// interface Post {
//   title: string;
//   date: string;
//   content: string;
//   text: string;
//   image: string;
// }

// describe('BlogPostComponent', () => {
//   let component: BlogPostComponent;
//   let fixture: ComponentFixture<BlogPostComponent>;
//   let blogDataServiceSpy: jasmine.SpyObj<BlogDataService>;
//   let activatedRouteStub:Partial<ActivatedRoute>;

//   beforeEach(() => {
//     const blogDataServiceSpyObj = jasmine.createSpyObj('BlogDataService', ['getData']);
//     const activatedRouteStubObj = { snapshot: { paramMap: { get: () => 'sample-title'}}};


//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule, RouterTestingModule],
//       declarations: [BlogPostComponent, NavigationComponent, FooterComponent],
//       providers: [
//         { provide: BlogDataService, useValue: blogDataServiceSpyObj},
//         { provide: ActivatedRoute, useValue: activatedRouteStubObj},
//       ]
//     });
//     fixture = TestBed.createComponent(BlogPostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the blog-post component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch blog post data on initialization', () => {
//     const samplePost: Post = {
//       date: '17 czerwca, 2022', title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego', text: 'Krzysztof Kamil Baczyński to jeden z najważniejszych współczesnych polskich poetów. Jego wiersze są czytane w szkołach i cytowane przez zakochanych. Katarzyna Zyskowska przedstawia jego wyjątkowy portret, w którym poznajemy autora z nieznanej dotąd strony. Szklane ptaki to historia wielu miłości Baczyńskiego. Choć mężczyzna kochał swoją żonę Basię nad życie, miał również inne namiętności. W Barbarze zakochał się od pierwszego wejrzenia i już po czterech dniach się oświadczył. Jednak w jego sercu było miejsce jeszcze dla jednej kobiety – jego zaborczej matki, z którą wraz z żoną mieszkał na trzydziestu metrach warszawskiego mieszkania. Poeta utrzymywał także bliskie stosunki z Jerzym Andrzejewskim i Jarosławem Iwaszkiewiczem. Co tak naprawdę łączyło go z tymi mężczyznami? Zyskowska z niezwykłą szczegółowością przyjrzała się miłosnym uniesieniom Baczyńskiego. Przewertowała tysiące stron materiałów archiwalnych, aby dotrzeć do najbardziej sensacyjnych ciekawostek na temat prywatnego życia poety. Jak kochał Krzysztof? Czy jego uczucie było tragiczne, czy romantyczne?', image: 'assets/images/zyskowska.jpg',
//       content: ''
//     };


//     blogDataServiceSpy.getData.and.returnValue(of([samplePost]));

//     fixture.detectChanges();

//     expect(blogDataServiceSpy.getData).toHaveBeenCalled();

//     expect(component.post).toEqual(samplePost);
//   })

// });
