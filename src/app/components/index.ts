import {TasksComponent} from './@routed/tasks/tasks.component';
import {TaskPanelComponent} from './task-panel/task-panel.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {FloatingTextboxComponent} from './floating-textbox/floating-textbox.component';

export const routedComponents = [
  TasksComponent
];

export const components = [
  TaskPanelComponent,
  TaskItemComponent,
  FloatingTextboxComponent
];

export * from './@routed/tasks/tasks.component';
export * from './task-panel/task-panel.component';
export * from './task-item/task-item.component';
