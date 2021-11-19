import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {components, routedComponents, TasksComponent} from './components';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {applicationEffects, applicationReducer} from './store';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {dailyPipes, TaskDonePipe} from './pipes';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ...routedComponents,
    ...components,
    ...dailyPipes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(applicationReducer),
    EffectsModule.forRoot(applicationEffects),
    HttpClientModule
  ],
  providers: [
    ...dailyPipes
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
