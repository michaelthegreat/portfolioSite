import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactAction } from './+state/contact.actions';
import { contactFeatureKey } from './+state/contact.feature-key';
import { IContactState } from './+state/contact.reducer';
import { ContactSelectors } from './+state/contact.selectors';

@Injectable({
  providedIn: 'root',
})
export class ContactFacadeService {
  constructor(private store: Store<{ [contactFeatureKey]: IContactState }>) {}

  public contactRequestState$ = this.store.select(ContactSelectors.selectContactRequestState);
  public sendContactRequestForm(name: string, email: string, message: string) {
    this.store.dispatch(
      ContactAction.sendContactRequestForm({
        name,
        email,
        message,
      })
    );
  }
}
