import { createAction, props } from "@ngrx/store";
import { appLayoutFeatureKey } from "./app-layout.feature-key";

export const AppLayoutAction = {
  setIsLoadingSpinnerShown: createAction(
    `[${appLayoutFeatureKey}] set is loading spinner shown`,
    props<{ isSpinnerShown: boolean }>()
  ),
  openSnackBar: createAction(
    `[${appLayoutFeatureKey}] open snackbar`,
    props<{ message: string }>()
  ),
};
