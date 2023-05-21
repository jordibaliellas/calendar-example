import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { remindersName, remindersReducer } from './state/reminders.reducer';

import { CommonModule } from '@angular/common';
import { EditReminderComponent } from './components/edit-reminder/edit-reminder.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '../ui/ui.module';

@NgModule({
    declarations: [ReminderListComponent, EditReminderComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(remindersName, remindersReducer),
        UiModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
        NgxMatNativeDateModule,
    ],
    exports: [ReminderListComponent],
})
export class ReminderModule {}
