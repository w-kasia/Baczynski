import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { WorksComponent } from './works/works.component';
import { NewsComponent } from './news/news.component';
import { WorkComponent } from './work/work.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'biografia', component: BiographyComponent},
  { path: 'works', component: WorksComponent},
  { path: 'work', component: WorkComponent},
  { path: 'aktualnosci', component: NewsComponent},
  { path: 'aktualnosci/:id', component: BlogPostComponent},
  { path: 'galeria', component: GalleryComponent},
  { path: 'kontakt', component: ContactComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BiographyComponent, WorksComponent, NewsComponent, WorkComponent, GalleryComponent, ContactComponent]
