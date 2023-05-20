import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { remindersReducer, remindersName } from './state/reminders.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(remindersName, remindersReducer)
  ]
})
export class ReminderModule { }
