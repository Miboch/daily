import {createAction, props} from '@ngrx/store';
import {CompleteTaskPayload, StringPayload, TaskPayload, TasksPayload} from '../../model/state/payloads';

export enum TaskActions {
  REPLACE_TASKS = '[Tasks] replace task items',
  INSERT_TASK = '[Tasks] Insert task item',
  DELETE_TASK = '[Tasks] Delete task item',
  COMPLETE_TASK = '[Tasks] Complete Task item'
}

export const replaceTasks = createAction(
  TaskActions.REPLACE_TASKS,
  props<TasksPayload>()
);

export const insertTask = createAction(
  TaskActions.INSERT_TASK,
  props<TaskPayload>()
);

export const deleteTask = createAction(
  TaskActions.DELETE_TASK,
  props<TaskPayload>()
);

export const completeTask = createAction(
  TaskActions.COMPLETE_TASK,
  props<CompleteTaskPayload>()
);
