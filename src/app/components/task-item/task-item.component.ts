import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../model/task.model';
import {Store} from '@ngrx/store';
import {completeTask} from '../../store';

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
    this.store.dispatch(completeTask({payload: this.task.id}))
  }


}
