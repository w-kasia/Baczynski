import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponent } from './works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { PoemsComponent } from '../poems/poems.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule, FormsModule], 
      declarations: [WorksComponent, NavigationComponent, PoemsComponent, FooterComponent, SearchComponent]
    });
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the works component', () => {
    expect(component).toBeTruthy();
  });

  it('should render image and heading', () => {
    const imageWorks = fixture.nativeElement.querySelector('img');
    const headingWorks = fixture.nativeElement.querySelector('h1');

    expect(imageWorks).toBeTruthy();
    expect(headingWorks).toBeTruthy();
    });

  it('should render navigation, poems, search and footer components', () => {
      const navigation = fixture.nativeElement.querySelector('app-navigation');
      const poems = fixture.nativeElement.querySelector('app-poems');
      const search = fixture.nativeElement.querySelector('app-search');
      const footer = fixture.nativeElement.querySelector('app-footer');
  
      expect(navigation).toBeTruthy();
      expect(poems).toBeTruthy();
      expect(search).toBeTruthy();
      expect(footer).toBeTruthy();
    });
})