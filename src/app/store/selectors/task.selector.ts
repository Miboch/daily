import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppTaskState} from '../../model/state/task.state';

export const selectTaskState = createFeatureSelector<AppTaskState>('tasks')

export const selectTasksArray = createSelector(
  selectTaskState,
  (state: AppTaskState) => state.tasks,
  tasks => Object.values(tasks)
);
