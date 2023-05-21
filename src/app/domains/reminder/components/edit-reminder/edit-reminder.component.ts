import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reminder } from '../../interfaces/reminder.interface';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

interface ReminderForm {
    title: FormControl<string>;
    date: FormControl<Date>;
    description: FormControl<string | null | undefined>;
}

@Component({
    selector: 'app-edit-reminder',
    templateUrl: './edit-reminder.component.html',
    styleUrls: ['./edit-reminder.component.scss'],
})
export class EditReminderComponent {
    public reminderForm: FormGroup<ReminderForm>;
    public minDate = new Date();

    constructor(
        public fb: FormBuilder,
        public dialog: MatDialogRef<EditReminderComponent>,
        @Inject(MAT_DIALOG_DATA) public reminder: Reminder,
    ) {
        this.reminderForm = this.fb.group({
            title: this.fb.control(reminder.title, {
                validators: [Validators.required],
                nonNullable: true,
            }),
            date: this.fb.control(reminder.date, {
                validators: [Validators.required],
                nonNullable: true,
            }),
            description: [reminder.description],
        });
    }

    /**
     * Close the dialog with no value
     */
    public close(): void {
        this.dialog.close();
    }

    /**
     * Emits the reminder to save and close the dialog
     */
    public save(): void {
        if (this.reminderForm.invalid) return;
        const newReminder = { ...this.reminder, ...this.reminderForm.value };
        this.dialog.close(newReminder);
    }
}
