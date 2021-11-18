import {Component} from '@angular/core';
import {faCalendarDay, faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faLeft = faChevronCircleLeft;
  faRight = faChevronCircleRight
  faToday = faCalendarDay;


  navNext() {

  }

  navToday() {

  }

  navPrevious() {

  }

}
