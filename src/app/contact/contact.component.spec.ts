import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyAR6Rqxxo7lvgHkL1ldNEturX8ZgJySKAg",
  authDomain: "baczynski-f11fc.firebaseapp.com",
  databaseURL: "https://baczynski-f11fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baczynski-f11fc",
  storageBucket: "baczynski-f11fc.appspot.com",
  messagingSenderId: "628278115373",
  appId: "1:628278115373:web:5606ce928c74c4e6000ca4"
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule,  provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())],
      declarations: [ContactComponent, NavigationComponent, FooterComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation and footer components', () => {
    const navigation = fixture.nativeElement.querySelector('app-navigation');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navigation).toBeTruthy();
    expect(footer).toBeTruthy();
  });
})