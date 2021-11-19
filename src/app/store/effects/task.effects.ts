import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect} from '@ngrx/effects';

@Injectable()
export class TaskEffects {
  constructor(private store: Store, private actions: Actions) {
  }

  // TODO: Network part.
  // createTask$ = createEffect(() => this.actions.pipe());
  // removeTask$ = createEffect(() => this.actions.pipe());
  // updateTask$ = createEffect(() => this.actions.pipe());

}

