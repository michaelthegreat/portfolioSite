import { createAction, props } from "@ngrx/store";
import { REQUEST_STATE } from "@shared/components/modal/perform-request-modal/perform-request-modal.constants";
import { contactFeatureKey } from "./contact.feature-key";

export const ContactAction = {
  sendContactRequestForm: createAction(
    `[${contactFeatureKey}] send contact request form`,
    props<{ name: string; email: string; message: string }>()
  ),
  setContactRequestState: createAction(
    `[${contactFeatureKey}] set contact request state`,
    props<{ contactRequestState: REQUEST_STATE }>()
  )
};
