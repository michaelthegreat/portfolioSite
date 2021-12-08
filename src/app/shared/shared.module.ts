import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiMaterialModule } from '@ui-material/ui-material.module';
import { PerformRequestModalComponent } from './components/modal/perform-request-modal/perform-request-modal.component';

const sharedModules = [
  CommonModule,
  UiMaterialModule,
  FormsModule,
  ReactiveFormsModule,
];


@NgModule({
  declarations: [
    PerformRequestModalComponent
  ],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule { }
