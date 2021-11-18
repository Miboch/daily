import {Component, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {TaskModel} from '../../../model/task.model';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  addCircle = faPlusCircle;
  testTask = [
    {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    }, {
      description: "lorem ipsum dolor set amet"
    },

  ] as TaskModel[];


  constructor() {
  }

  ngOnInit(): void {
  }
}
