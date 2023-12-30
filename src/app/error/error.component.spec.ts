import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [ErrorComponent, routingComponents]
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the error component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the error message', () => {
    const errorMessageContainer = fixture.debugElement.query(By.css('.error_container'));
    const h1 = errorMessageContainer.query(By.css('h1')).nativeElement;
    const h2 = errorMessageContainer.query(By.css('h2')).nativeElement;
    const p = errorMessageContainer.query(By.css('p')).nativeElement;

    expect(h1.textContent).toContain('404');
    expect(h2.textContent).toContain('Ooooops!');
    expect(p.textContent).toContain('Szukana strona nie istnieje.');
  });

  it('should call goHome method when the home button is clicked', () => {
    spyOn(component, 'goHome');
    const homeButton = fixture.debugElement.query(By.css('button')).nativeElement;
    homeButton.click();

    expect(component.goHome).toHaveBeenCalled();
  });
});
