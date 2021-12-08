import { Observable } from "rxjs";
import { REQUEST_STATE } from "./perform-request-modal.constants";

export interface IPerformRequestModalMessageConfig {
  load: {
    body: string;
    header: string;
  };
  resolved?: {
    header: string;
    confirm: string;
    body: string;
  };
  rejected: {
    header: string;
    cancel: string;
    retry: string;
  };
}

export interface IPerformRequestModalMessageConfigInput  {
  messageConfig: IPerformRequestModalMessageConfig;
  requestState$: Observable<REQUEST_STATE>
}