import { remindersName, remindersReducer } from './state/reminders.reducer';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '../ui/ui.module';

@NgModule({
    declarations: [ReminderListComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(remindersName, remindersReducer),
        MatListModule,
        MatIconModule,
        MatDialogModule,
        UiModule,
    ],
    exports: [ReminderListComponent],
})
export class ReminderModule {}
