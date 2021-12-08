import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from '@contact/contact-page/contact-page.component';
import { APP_PATHS_ENUM } from './app.constants';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   component: MainLayoutComponent,
  //   // TODO: Add page not found component`
  //   // children: [
  //   //   {
  //   //     path: '',
  //   //     component: PageNotFoundComponent
  //   //   }
  //   // ]
  // },
  {
    path: APP_PATHS_ENUM.HOME,
    component: HomePageComponent
  },
  {
    path: APP_PATHS_ENUM.CONTACT,
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
