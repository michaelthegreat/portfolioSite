import { createSelector } from '@ngrx/store';
import { appLayoutFeatureKey } from './app-layout.feature-key';
import { IAppLayoutState } from './app-layout.reducer';

export const appLayoutSelector = (state: any) => state[appLayoutFeatureKey];

export const AppLayoutSelectors = {
  selectIsLoadingSpinnerShown: createSelector(
    appLayoutSelector,
    (state: IAppLayoutState) => state.isLoadingSpinnerShown
  ),
};
