import {TaskDonePipe} from './task-done.pipe';
import {TaskNotDonePipe} from './task-not-done.pipe';

export const dailyPipes = [
  TaskDonePipe,
  TaskNotDonePipe
];

export * from './task-done.pipe';
export * from './task-not-done.pipe';
