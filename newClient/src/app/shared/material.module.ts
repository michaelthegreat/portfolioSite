import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatDatepickerModule,MatNativeDateModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatSelectModule} from '@angular/material/select';
// import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatSelectModule,
    // MatRadioModule,
    MatCardModule,
    // MatInputModule,
    MatIconModule,
    LayoutModule,
    MatStepperModule
  ],
  exports :[
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatSelectModule,
    // MatRadioModule,
    MatCardModule,
    // MatInputModule,
    MatIconModule,
    LayoutModule,
    MatStepperModule
  ],
  declarations: []
})
export class MaterialModule { }
