import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { remindersReducer, remindersName } from './state/reminders.reducer';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';

@NgModule({
  declarations: [
    ReminderListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(remindersName, remindersReducer)
  ],
  exports: [
    ReminderListComponent
  ],
})
export class ReminderModule { }
