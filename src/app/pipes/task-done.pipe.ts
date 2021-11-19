import {Pipe, PipeTransform} from '@angular/core';
import {TaskModel} from '../model/task.model';

@Pipe({name: 'taskDone'})
export class TaskDonePipe implements PipeTransform {
  transform(value: TaskModel[]): TaskModel[] {
    return value.filter(task => Boolean(task.finished));
  }

}
