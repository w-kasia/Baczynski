import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { WorksComponent } from './works/works.component';
import { NewsComponent } from './news/news.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'biografia', component: BiographyComponent},
  { path: 'works', component: WorksComponent},
  { path: 'aktualnosci', component: NewsComponent},
  { path: 'work', component: WorkComponent},

  //dodać error component na końcu!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BiographyComponent, WorksComponent, NewsComponent, WorkComponent]
