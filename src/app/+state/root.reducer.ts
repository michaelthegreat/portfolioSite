import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environment';
import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';

export interface IRootState {
  router: fromRouter.RouterReducerState<any>;
  [featureKey: string]: any;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<IRootState, Action>>('Root +state token', {
  factory: () => ({
    router: fromRouter.routerReducer
  })
});

export function logger(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
  return (previousState, action) => {
    const nextState = reducer(previousState, action);
    console.groupCollapsed(action.type);
    console.log({ previousState, action, nextState });
    console.groupEnd();

    return nextState;
  };
}

export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];
