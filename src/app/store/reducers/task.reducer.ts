import {AppTaskState} from '../../model/state/task.state';
import {Action, createReducer, on} from '@ngrx/store';
import {completeTask, insertTask} from '../actions/task.actions';
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
  }),
  on(completeTask, (state, {payload}) => {
    let newState = {
      ...state
    }
    let newTasks: { [k: string]: any } = {};
    for (let [k, v] of Object.entries(state.tasks)) {
      if (k !== payload.date)
        newTasks[k] = [...v];
    }
    newTasks[payload.date] = state.tasks[payload.date].filter(v => v.id !== payload.taskId);
    const editTask = state.tasks[payload.date].find(v => v.id == payload.taskId);
    newTasks[payload.date].push({...editTask, finished: new Date()})
    newState.tasks = newTasks;
    return newState;
  })
);

export function taskReducer(state: AppTaskState = defaultState, action: Action) {
  return _reduce(state, action)
}
