import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UiState} from '../../model/state/ui-state';

export const selectUiState = createFeatureSelector<UiState>('ui');

export const selectDate = createSelector(
  selectUiState,
  state => state.date
);
