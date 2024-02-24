import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticlesComponent } from './articles/articles.component';
import { PoemsComponent } from './poems/poems.component';
import { SearchComponent } from './search/search.component';
import { MemoriesComponent } from './memories/memories.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { DialogAnimationsComponent } from './dialog-animations/dialog-animations.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { MenuService } from './menu.service';
import { NewsService } from './news.service';
import { WorksService } from './works.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgxSpinnerModule } from 'ngx-spinner';

const firebaseConfig = {
  apiKey: "AIzaSyAR6Rqxxo7lvgHkL1ldNEturX8ZgJySKAg",
  authDomain: "baczynski-f11fc.firebaseapp.com",
  databaseURL: "https://baczynski-f11fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baczynski-f11fc",
  storageBucket: "baczynski-f11fc.appspot.com",
  messagingSenderId: "628278115373",
  appId: "1:628278115373:web:5606ce928c74c4e6000ca4"
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationComponent,
    ArticlesComponent,
    PoemsComponent,
    SearchComponent,
    MemoriesComponent,
    FooterComponent,
    ErrorComponent,
    DialogAnimationsComponent,
    ScrollToTopComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MenuService, WorksService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
