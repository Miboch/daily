import {AppTaskState} from '../../model/state/task.state';
import {Action, createReducer, on} from '@ngrx/store';
import {insertTask} from '../actions/task.actions';
import {DateTime} from 'luxon';

const defaultState: AppTaskState = {
  tasks: {}
}

const _reduce = createReducer(
  defaultState,
  on(insertTask, (state, {payload}) => {
    let newState = {
      ...state,
      tasks: {
        ...state.tasks,
      },
    };
    const insertStr = DateTime.fromJSDate(payload.created).toFormat('yyyy-MM-dd');
    newState.tasks[insertStr] ? newState.tasks[insertStr] = [...newState.tasks[insertStr], payload] : newState.tasks[insertStr] = [payload];
    return newState
  })
);

export function taskReducer(state: AppTaskState = defaultState, action: Action) {
  return _reduce(state, action)
}
