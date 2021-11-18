import {TaskModel} from '../task.model';

export interface AppTaskState {
  tasks: { [id: string]: TaskModel }
}
