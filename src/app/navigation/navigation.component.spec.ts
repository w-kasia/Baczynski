import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../menu.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, AppRoutingModule, RouterTestingModule],
      declarations: [NavigationComponent, routingComponents],
      providers: [MenuService]})
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(NavigationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
 
  it('should create the navigation component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the menu closed', () => {
    expect(component.opened).toBeFalse();
  });

  it('should toggle the menu when the button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.menuBtn');
    button.click();
    expect(component.opened).toBeTrue();
    button.click();
    expect(component.opened).toBeFalse();
  });

  it('should close the menu when the close button is clicked', () => {
    const closeButton = fixture.nativeElement.querySelector('.closeBtn');
    component.opened = true;
    fixture.detectChanges();
    closeButton.click();
    expect(component.opened).toBeFalse();
   });

   it('should have the correct router links', () => {
    const navigationLinks = fixture.debugElement.queryAll(By.css('.listItem'));
    const expectedLinks = ['/home', '/aktualnosci', '/works', '/galeria', '/biografia', '/kontakt'];
    expect(navigationLinks.length).toBe(expectedLinks.length);
    navigationLinks.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('routerLink')).toBe(expectedLinks[index]);
    });
    });
  })