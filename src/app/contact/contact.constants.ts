import { IPerformRequestModalMessageConfig } from "@shared/components/modal/perform-request-modal/perform-request-modal.interfaces";

export const CONTACT_MODAL_CONFIGS = {
  CONTACT_REQUEST: {
    load: {
      header: 'Sending Contact Form',
      // body: 'Contact request is being sent to the server.'
    },
    resolved: {
      header: 'Success',
      body: 'Contact Request has been sent.',
      confirm: 'Ok'
    },
    rejected: {
      header: 'Error Sending Contact Request',
      // retry: 'Retry',
      cancel: 'Cancel'
    }
  } as IPerformRequestModalMessageConfig
}