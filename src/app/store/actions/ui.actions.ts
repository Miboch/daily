import {createAction, props} from '@ngrx/store';
import {DatePayload} from '../../model/state/payloads';

export enum UiActions {
  SET_DATE = '[UI] Set date',
  NEXT_DATE = '[UI] Next date',
  PREVIOUS_DATE = '[UI] Previous date',
}

export const setDate = createAction(
  UiActions.SET_DATE,
  props<DatePayload>()
);

export const nextDate = createAction(
  UiActions.NEXT_DATE
);

export const previousDate = createAction(
  UiActions.PREVIOUS_DATE
);
