import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { appLayoutFeatureKey } from './+state/app-layout.feature-key';
import { IAppLayoutState } from './+state/app-layout.reducer';
import { AppLayoutSelectors } from './+state/app-layout.selectors';

@Injectable({
  providedIn: 'root'
})
export class AppLayoutFacadeService {

  constructor(private store: Store<{ [appLayoutFeatureKey]: IAppLayoutState }>) {}

  isLoadingSpinnerShown$  = this.store.select(AppLayoutSelectors.selectIsLoadingSpinnerShown);
}
 