import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiographyComponent } from './biography.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { MemoriesComponent } from '../memories/memories.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BiographyComponent', () => {
  let component: BiographyComponent;
  let fixture: ComponentFixture<BiographyComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [BiographyComponent, NavigationComponent, FooterComponent, MemoriesComponent]
    });
    fixture = TestBed.createComponent(BiographyComponent);
    component = fixture.componentInstance;
  });

it('should create the biography component', () => {
  expect(component).toBeTruthy();
});
})
