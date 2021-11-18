import {UiState} from '../../model/state/ui-state';
import {DateTime} from 'luxon';
import {Action, createReducer} from '@ngrx/store';

const defaultState: UiState = {
  date: DateTime.now().toJSDate()
}

export const _reduce = createReducer(
  defaultState
);

export function uiReducer(state: UiState = defaultState, action: Action) {
  return _reduce(state, action);
}
