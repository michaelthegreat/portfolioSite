import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { HeaderComponent } from "./main-layout/header/header.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { appLayoutFeatureKey } from "./+state/app-layout.feature-key";
import { wrappedAppLayoutReducer } from "./+state/app-layout.reducer";
import { StoreModule } from "@ngrx/store";
import { AppLayoutEffects } from "./+state/app-layout.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent],
  imports: [
    SharedModule,
    RouterModule,
    StoreModule.forFeature(appLayoutFeatureKey, wrappedAppLayoutReducer),
    EffectsModule.forFeature([AppLayoutEffects]),
  ],
  exports: [HeaderComponent, MainLayoutComponent],
})
export class AppLayoutModule {}
