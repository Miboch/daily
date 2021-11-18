import {AppTaskState} from './task.state';
import {UiState} from './ui-state';

export interface StateMap {
  tasks: AppTaskState,
  ui: UiState
}
