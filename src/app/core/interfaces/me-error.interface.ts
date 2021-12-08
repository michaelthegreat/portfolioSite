import { HttpErrorResponse } from '@angular/common/http';

export interface IMeErrorResponse extends HttpErrorResponse {
  errors: IMeError[] | any | null;
}

export interface IMeError {
    type?: 'INTERNAL_SERVER_ERROR' | 'GRAPHQL_ERROR' | 'VALIDATION_ERROR';
    code?: string;
    message?: string;
    details?: string;
  }