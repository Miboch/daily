import {TaskModel} from '../task.model';

export type Payload<T> = { payload: T };

export type TasksPayload = Payload<TaskModel[]>
export type TaskPayload = Payload<TaskModel>
export type StringPayload = Payload<string>;
export type DatePayload = Payload<Date>;
export type CompleteTaskPayload = Payload<{ date: string, taskId: string }>;
