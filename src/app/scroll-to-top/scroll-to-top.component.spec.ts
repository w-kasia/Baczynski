import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollToTopComponent } from './scroll-to-top.component';

describe('ScrollToTopComponent', () => {
  let component: ScrollToTopComponent;
  let fixture: ComponentFixture<ScrollToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollToTopComponent]
    });
    fixture = TestBed.createComponent(ScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the scroll-to-top component', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to top when scrollToTop is called', () => {
    spyOn(window, 'scrollTo');
    component.scrollToTop();
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
