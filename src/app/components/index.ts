import {TasksComponent} from './@routed/tasks/tasks.component';
import {TaskPanelComponent} from './task-panel/task-panel.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskCreatorComponent} from './task-creator/task-creator.component';

export const routedComponents = [
  TasksComponent
];

export const components = [
  TaskPanelComponent,
  TaskItemComponent,
  TaskCreatorComponent
];

export * from './@routed/tasks/tasks.component';
export * from './task-panel/task-panel.component';
export * from './task-item/task-item.component';
export * from './task-creator/task-creator.component';
