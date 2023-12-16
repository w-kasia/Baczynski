import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { BiographyComponent } from './biography/biography.component';
import { WorksComponent } from './works/works.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { WorksService } from './works/works.service';
import { WorkComponent } from './work/work.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MemoriesComponent } from './memories/memories.component';
import { PoemsComponent } from './poems/poems.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAR6Rqxxo7lvgHkL1ldNEturX8ZgJySKAg",

  authDomain: "baczynski-f11fc.firebaseapp.com",

  databaseURL: "https://baczynski-f11fc-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "baczynski-f11fc",

  storageBucket: "baczynski-f11fc.appspot.com",

  messagingSenderId: "628278115373",

  appId: "1:628278115373:web:5606ce928c74c4e6000ca4"

};



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routingComponents,
    BlogPostComponent,
    FooterComponent,
    SearchComponent,
    GalleryComponent,
    MemoriesComponent,
    PoemsComponent,
    ErrorComponent,
    ContactComponent

  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
