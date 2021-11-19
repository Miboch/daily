import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TaskModel} from '../../../model/task.model';
import {Store} from '@ngrx/store';
import {selectDate, selectTasks} from '../../../store';
import {map, switchMap} from 'rxjs/operators';
import {DateTime} from 'luxon';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  tasksFromYesterday: Observable<TaskModel[]>;
  tasksFromToday: Observable<TaskModel[]>;


  constructor(private store: Store) {
    this.tasksFromYesterday = this.store.select(selectDate).pipe(
      switchMap(date => this.store.select(selectTasks).pipe(
        map(tasks => tasks[DateTime.fromJSDate(date).minus({day: 1}).toFormat('yyyy-MM-dd')] ?? [])
      )));
    this.tasksFromToday = this.store.select(selectDate).pipe(
      switchMap(date => this.store.select(selectTasks).pipe(
        map(tasks => tasks[DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')] ?? [])
      )));
  }

  ngOnInit(): void {
  }
}
