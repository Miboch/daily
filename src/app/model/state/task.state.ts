import {TaskModel} from '../task.model';

export interface AppTaskState {
  tasks: { [date: string]: TaskModel[] }
}
