import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { WorksComponent } from './works/works.component';
import { NewsComponent } from './news/news.component';

import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'biografia', component: ArticlesComponent},
  { path: 'works', component: WorksComponent},
  { path: 'aktualnosci', component: NewsComponent},
  { path: 'aktualnosci/:title', component: ArticlesComponent},
  { path: '', redirectTo: '/aktualnosci', pathMatch: 'full'},
  { path: 'galeria', component: GalleryComponent},
  { path: 'kontakt', component: ContactComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BiographyComponent, WorksComponent, NewsComponent, GalleryComponent, ContactComponent]
