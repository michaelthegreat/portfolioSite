import { Action, createReducer, on } from "@ngrx/store";
import { AppLayoutAction } from "./app-layout.actions";

export interface IAppLayoutState {
  isLoadingSpinnerShown: boolean;
}

export const appLayoutInitialState: IAppLayoutState = {
  isLoadingSpinnerShown: false,
};

const appLayoutReducer = createReducer(
  appLayoutInitialState,
  on(AppLayoutAction.setIsLoadingSpinnerShown, (state, { isSpinnerShown }) => ({
    ...state,
    isLoadingSpinnerShown: isSpinnerShown,
  }))
);

export function wrappedAppLayoutReducer(
  state: IAppLayoutState,
  action: Action
) {
  return appLayoutReducer(state, action);
}
