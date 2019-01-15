import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ResumeComponent} from './resume/resume.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'about',component:AboutComponent},
  {path : 'resume',component: ResumeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ,BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
