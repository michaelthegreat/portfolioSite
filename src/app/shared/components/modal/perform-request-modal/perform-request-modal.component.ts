import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMeErrorResponse } from '@core/interfaces/me-error.interface';
import { getNetworkErrorMessage } from '@utils/utils';
import { forkJoin, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GRAPHQL_ERROR_NOTIFICATION, REQUEST_STATE } from './perform-request-modal.constants';
import { IPerformRequestModalMessageConfig, IPerformRequestModalMessageConfigInput } from './perform-request-modal.interfaces';

@Component({
  selector: 'me-perform-request-modal',
  templateUrl: './perform-request-modal.component.html',
  styleUrls: ['./perform-request-modal.component.scss']
})
export class PerformRequestModalComponent<T = any>  implements OnInit {
  // @Input()
  // requestState$!: Observable<T> | Observable<T>[];
  // @Input()
  // messageConfig!: IPerformRequestModalMessageConfig;

  @Input()
  closeOnResolve = false;

  public result: T | T[] | undefined;
  public error: string = '';
  public requestInProgress: boolean = true;
  public REQUEST_STATE = REQUEST_STATE;
  // public requestInProgress: boolean = false;

  constructor(protected cd: ChangeDetectorRef, protected dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: IPerformRequestModalMessageConfigInput,) { }


  ngOnInit(): void {
    this.performRequest();
  }

  submit() {
    // this.activeModal.close(this.result);
  }

  close() {
    // this.activeModal.dismiss();
  }

  performRequest() {
  //   this.requestInProgress = true;
  //   this.result = undefined;
  //   if (Array.isArray(this.request$)) {
  //     forkJoin(this.request$)
  //       ?.pipe(
  //         finalize(() => {
  //           this.requestInProgress = false;
  //           this.cd.markForCheck();
  //         })
  //       )
  //       .subscribe(
  //         res => this.onResolve(res),
  //         err => this.onError(err)
  //       );
  //   } else {
  //     this.request$
  //       ?.pipe(
  //         finalize(() => {
  //           this.requestInProgress = false;
  //           this.cd.markForCheck();
  //         })
  //       )
  //       .subscribe(
  //         res => this.onResolve(res),
  //         err => this.onError(err)
  //       );
  //   }
  }

  private onResolve(res: T | T[]): void {
    this.result = res;
    if (this.closeOnResolve) {
      this.submit();
    }
  }

  private onError(err: IMeErrorResponse): void {
    this.error = getNetworkErrorMessage(err).replace(GRAPHQL_ERROR_NOTIFICATION, '');
  }

}
