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
import { SearchComponent } from './works/search/search.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MemoriesComponent } from './memories/memories.component';
import { PoemsComponent } from './poems/poems.component';
import { ErrorComponent } from './error/error.component';



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
    ErrorComponent
  ],
  imports: [
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
