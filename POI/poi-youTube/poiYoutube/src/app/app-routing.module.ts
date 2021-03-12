import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { YoutubeListComponent } from './youtube-list/youtube-list.component';
import { YoutubeDetailComponent } from './youtube-detail/youtube-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'ytList',component: YoutubeListComponent},
  {path:'ytDetail/:id',component: YoutubeDetailComponent},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
