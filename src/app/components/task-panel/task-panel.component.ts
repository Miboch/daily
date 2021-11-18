import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../model/task.model';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})

export class TaskPanelComponent implements OnInit {
  @Input() heading: string = "";
  @Input() tasks: TaskModel[] = [];
  
  constructor() {
  }

  ngOnInit(): void {
  }
}
