import { Action, createReducer, on } from "@ngrx/store";
import { REQUEST_STATE } from "@shared/components/modal/perform-request-modal/perform-request-modal.constants";
import { ContactAction } from "./contact.actions";

export interface IContactState {
  contactRequestState: REQUEST_STATE;
}

export const contactInitialState: IContactState = {
  contactRequestState: REQUEST_STATE.NO_REQUEST_INITIATED,
};

const contactReducer = createReducer(
  contactInitialState,
  on(
    ContactAction.setContactRequestState,
    (state, { contactRequestState }) => ({
      ...state,
      contactRequestState,
    })
  )
);

export function wrappedContactReducer(state: IContactState, action: Action) {
  return contactReducer(state, action);
}
