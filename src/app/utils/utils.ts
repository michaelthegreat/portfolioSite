import { IMeError, IMeErrorResponse } from "@core/interfaces/me-error.interface";
import { pipe } from "rxjs";
import { map, filter } from "rxjs/operators";
import { NETWORK_ERROR_DEFAULT_MESSAGE } from "../app.constants";

export function hasValue(value: any) {
  return value !== undefined && value !== null;
}
export function isRequestNotCancelled(response: any): boolean {
  return !(typeof response === "undefined");
}
export function extractDataFromObject(props: string[]) {
  return map((data) => {
    let res:any = data;
    props.forEach((prop) => {
      if (hasValue(res)) {
        res = res[prop];
      }
    });
    return res;
  });
}

export function extractDataIfRequestNotCancelled(props: string[]) {
  return pipe(filter(isRequestNotCancelled), extractDataFromObject(props));
}

export function upsert(array: Array<any>, element: any, fieldName: string): Array<any> { // (1)
  let result = [...array];
  const i = result.findIndex(_element => _element[fieldName] === element[fieldName]);

  if (i > -1) result[i] = element; // (2)
  else result.push(element);
  console.log('array', result)
  return result;
}

export function getNetworkErrorMessage(response: IMeErrorResponse): string {
  if (response && response.error) {
    const errorObject: IMeError = Array.isArray(response.error.errors) ? response.error.errors[0] : {};

    return errorObject.message || response.message || NETWORK_ERROR_DEFAULT_MESSAGE;
  }

  return response?.message || NETWORK_ERROR_DEFAULT_MESSAGE;
}