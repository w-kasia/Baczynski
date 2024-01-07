import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from '../app-routing.module';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [FooterComponent, routingComponents]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct email address', () => {
    const emailLink = fixture.debugElement.query(By.css('.emailLink')).nativeElement;

    expect(emailLink.href).toContain('mailto:kontakt@baczynski.com');
    expect(emailLink.textContent).toBe('kontakt@baczynski.com');
  });

  it('should navigate to the contact page when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.contactBtn')).nativeElement;
    spyOn(component, 'goToContact');
    button.click();

    expect(component.goToContact).toHaveBeenCalled();
  });

  it('should have the correct router links', () => {
    const routerLinks = fixture.debugElement.queryAll(By.css('.footerListItem'));
    const expectedLinks = ['/aktualnosci', '/biografia', '/utwory', '/galeria'];

    expect(routerLinks.length).toBe(expectedLinks.length);

    routerLinks.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('routerLink')).toBe(expectedLinks[index]);
    });
    });

    it('should display the correct copyright information', () => {
      const copyrightText = fixture.debugElement.query(By.css('.copyright p')).nativeElement;

      expect(copyrightText.textContent).toContain('© Baczyński 2023');
    });
  });
