import {ActionReducerMap} from '@ngrx/store';
import {StateMap} from '../model/state/state-map';
import {taskReducer} from './reducers/task.reducer';
import {uiReducer} from './reducers/ui.redicer';

export * from './actions/ui.actions';
export * from './actions/task.actions';

export * from './reducers/task.reducer';
export * from './reducers/ui.redicer';

export * from './selectors/task.selector';
export * from './selectors/ui.selector';


export const applicationReducer: ActionReducerMap<StateMap> = {
  tasks: taskReducer,
  ui: uiReducer
}
