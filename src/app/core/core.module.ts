import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from '@app-layout/app-layout.module';

const modules = [CommonModule, AppLayoutModule, HttpClientModule]

@NgModule({
  declarations: [],
  imports: [
    ...modules
    
  ],
  exports: modules
})
export class CoreModule { }
