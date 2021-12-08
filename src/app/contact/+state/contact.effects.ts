import { Injectable } from "@angular/core";
import { ContactResourceService } from "@contact/contact-resource.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { contactFeatureKey } from "./contact.feature-key";
import { IContactState } from "./contact.reducer";
import { ContactAction } from "./contact.actions";
import { map, tap } from "rxjs/operators";
import { PerformRequestModalComponent } from "@shared/components/modal/perform-request-modal/perform-request-modal.component";
import { IPerformRequestModalMessageConfig } from "@shared/components/modal/perform-request-modal/perform-request-modal.interfaces";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { CONTACT_MODAL_CONFIGS } from "@contact/contact.constants";
import { REQUEST_STATE } from "@shared/components/modal/perform-request-modal/perform-request-modal.constants";
import { ContactFacadeService } from "@contact/contact-facade.service";

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{ [contactFeatureKey]: IContactState }>,
    private contactResourceService: ContactResourceService,
    private facade: ContactFacadeService,
    private dialog: MatDialog
  ) {}

  sendContactRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ContactAction.sendContactRequestForm),
        tap((e) =>
          this.contactResourceService.sendContactRequestForm(
            e.name,
            e.email,
            e.message
          )
        )
      ),
    { dispatch: false }
  );

  setContactRequestStateOnSend$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactAction.sendContactRequestForm),
      map(() => {
        return ContactAction.setContactRequestState({
          contactRequestState: REQUEST_STATE.REQUEST_STARTED,
        });
      }),
      tap(() =>
        this.openPerformRequestModal(CONTACT_MODAL_CONFIGS.CONTACT_REQUEST)
      )
    )
  );

  private openPerformRequestModal<T = any>(
    messageConfig: IPerformRequestModalMessageConfig
  ) {
    const dialogRef = this.dialog.open(PerformRequestModalComponent, {
      width: "500px",
      data: {
        messageConfig,
        requestState$: this.facade.contactRequestState$,
      },
    });
  }
}
