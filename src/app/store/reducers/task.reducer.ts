import {AppTaskState} from '../../model/state/task.state';
import {Action, createReducer} from '@ngrx/store';

const defaultState: AppTaskState = {
  tasks: {}
}

const _reduce = createReducer(
  defaultState
);

export function taskReducer(state: AppTaskState = defaultState, action: Action) {
  return _reduce(state, action)
}
