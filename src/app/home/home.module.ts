import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { UiMaterialModule } from '@ui-material/ui-material.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule.forRoot({
      color: 'primary',
    }),
  ]
})
export class HomeModule { }
