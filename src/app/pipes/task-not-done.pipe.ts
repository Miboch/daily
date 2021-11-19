import {Pipe, PipeTransform} from '@angular/core';
import {TaskModel} from '../model/task.model';

@Pipe({name: 'taskNotDone'})
export class TaskNotDonePipe implements PipeTransform {

  transform(value: TaskModel[]): TaskModel[] {
    return value.filter(task => !Boolean(task.finished));
  }

}
