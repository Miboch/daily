import {Component} from '@angular/core';
import {faCalendarDay, faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {nextDate, previousDate, selectDate, setDate} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faLeft = faChevronCircleLeft;
  faRight = faChevronCircleRight
  faToday = faCalendarDay;
  currentlySelectedDate$: Observable<Date>;

  constructor(private store: Store) {
    this.currentlySelectedDate$ = this.store.select(selectDate);
  }

  navNext() {
    this.store.dispatch(nextDate());
  }

  navToday() {
    this.store.dispatch(setDate({payload: new Date()}));
  }

  navPrevious() {
    this.store.dispatch(previousDate());
  }

}
