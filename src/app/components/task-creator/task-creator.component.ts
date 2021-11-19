import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {buffer, debounceTime, take, throttleTime} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {insertTask, selectDate} from '../../store';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})

export class TaskCreatorComponent implements OnInit {
  currentDate: Date;
  creatingTask = false;
  ignoreBufferedInput = false;
  bufferedInput: Subject<any> = new Subject<any>();


  @ViewChild('taskInput', {static: false}) taskInputElement!: ElementRef<HTMLInputElement>;

  @HostListener("window:keydown", ['$event']) keyPressed(event: KeyboardEvent) {
    this.bufferedInput.next(event.key);
    // reset element
    if (event.key === 'Escape' && this.creatingTask) {
      this.closeTaskEditor();
    } else if (event.key === 'Enter' && this.creatingTask) {
      this.submitTask()
    } else
      this.openEditorIfNotEditing();
  }

  constructor(private store: Store) {
    this.store.select(selectDate).subscribe(date => this.currentDate = date);
  }

  ngOnInit(): void {
    this.bufferedInput.pipe(
      buffer(this.bufferedInput.pipe(
        debounceTime(120)
      )),
    ).subscribe(buffered => {
      if (buffered.includes('Escape') || buffered.includes('Enter'))
        return;
      if (!this.ignoreBufferedInput) {
        this.ignoreBufferedInput = true;
        this.taskInputElement.nativeElement.value = buffered
          .filter(expectAChar => expectAChar.match(/^[a-z\W]$/ig)).join('');
        this.taskInputElement.nativeElement.focus();
      }
    });

  }

  private openEditorIfNotEditing() {
    if (!this.creatingTask) {
      this.creatingTask = true;
    }

  }

  private submitTask() {
    const description = this.taskInputElement.nativeElement.value;
    this.closeTaskEditor();
    if (description.length > 0)
      this.store.dispatch(insertTask({
        payload: {
          description,
          id: '',
          created: this.currentDate,
          finished: undefined
        }
      }));
  }

  private closeTaskEditor() {
    this.taskInputElement.nativeElement.value = "";
    this.ignoreBufferedInput = false;
    this.creatingTask = false;
  }


}
