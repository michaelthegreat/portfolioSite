import { Injectable } from "@angular/core";
import { GqlServerInteractionService } from "@core/services/gql-server-interaction.service";
import { Store } from "@ngrx/store";
import { REQUEST_STATE } from "@shared/components/modal/perform-request-modal/perform-request-modal.constants";
import { throwError } from "rxjs";
import { catchError, first } from "rxjs/operators";
import { ContactAction } from "./+state/contact.actions";
import { contactFeatureKey } from "./+state/contact.feature-key";
import { IContactState } from "./+state/contact.reducer";
import { CONTACT_QUERIES } from "./contact.queries";

@Injectable({
  providedIn: "root",
})
export class ContactResourceService {
  constructor(
    private gqlServerInteractionService: GqlServerInteractionService,
    private store: Store<{ [contactFeatureKey]: IContactState }>
  ) {}

  sendContactRequestForm(name: string, email: string, message: string) {
    const query$ = this.gqlServerInteractionService.client
      .mutate({
        mutation: CONTACT_QUERIES.SEND_CONTACT_REQUEST,
        variables: {
          name,
          email,
          message,
        },
      })
      .pipe(
        first(),
        catchError((error) => {
          this.store.dispatch(
            ContactAction.setContactRequestState({
              contactRequestState: REQUEST_STATE.ERROR,
            })
          );
          return throwError(error);
        })
      )
      .subscribe((res) =>
        this.store.dispatch(
          ContactAction.setContactRequestState({
            contactRequestState: REQUEST_STATE.REQUEST_COMPLETED,
          })
        )
      );
  }
}
