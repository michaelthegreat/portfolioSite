import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { HomeModule } from '@home/home.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { NgrxStoreModule } from './ngrx-store.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppLayoutModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ContactModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    NgrxStoreModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
