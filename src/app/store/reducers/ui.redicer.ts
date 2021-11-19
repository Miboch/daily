import {UiState} from '../../model/state/ui-state';
import {DateTime} from 'luxon';
import {Action, createReducer, on} from '@ngrx/store';
import {nextDate, previousDate, setDate} from '../actions/ui.actions';

const defaultState: UiState = {
  date: DateTime.now().toJSDate()
}

export const _reduce = createReducer(
  defaultState,
  on(previousDate, (state) => ({
    ...state,
    date: DateTime.fromJSDate(state.date).minus({day: 1}).toJSDate()
  })),
  on(nextDate, (state) => ({
    ...state,
    date: DateTime.fromJSDate(state.date).plus({day: 1}).toJSDate()
  })),
  on(setDate, (state, {payload}) => ({
    ...state,
    date: payload
  }))
);

export function uiReducer(state: UiState = defaultState, action: Action) {
  return _reduce(state, action);
}
