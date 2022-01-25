import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../model/task.model';
import {Store} from '@ngrx/store';
import {completeTask, selectDate} from '../../store';
import {take} from "rxjs/operators";
import {DateTime} from "luxon";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})

export class TaskItemComponent implements OnInit {
  @Input() task!: TaskModel

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  completeTask() {
    this.store.select(selectDate).pipe(take(1)).subscribe(date => {
      this.store.dispatch(completeTask({
        payload: {
          date: DateTime.fromJSDate(date).toFormat('yyyy-MM-dd'),
          taskId: this.task.id
        }
      }))
    })
  }


}
