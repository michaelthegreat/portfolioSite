import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap, withLatestFrom } from "rxjs/operators";
import { AppLayoutFacadeService } from "../app-layout-facade.service";
import { AppLayoutAction } from "./app-layout.actions";
import { appLayoutFeatureKey } from "./app-layout.feature-key";
import { IAppLayoutState } from "./app-layout.reducer";

@Injectable()
export class AppLayoutEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{ [appLayoutFeatureKey]: IAppLayoutState }>,
    private facade: AppLayoutFacadeService,
    private snackBar: MatSnackBar
  ) {}

  openSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppLayoutAction.openSnackBar),
        tap(({ message }) => {
          this.snackBar.open(message, "", { duration: 3000 });
        })
      ),
    { dispatch: false }
  );
}
