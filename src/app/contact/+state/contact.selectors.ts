import { createSelector } from '@ngrx/store';
import { contactFeatureKey } from './contact.feature-key';
import { IContactState } from './contact.reducer';

export const contactSelector = (state: any) => state[contactFeatureKey];

export const ContactSelectors = {
  selectContactRequestState: createSelector(
    contactSelector,
    (state: IContactState) => state.contactRequestState
  ),
};
