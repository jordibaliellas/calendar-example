import { Component } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/domains/ui/components/confirm-dialog/confirm-dialog.component';
import { EditReminderComponent } from '../edit-reminder/edit-reminder.component';
import { MatDialog } from '@angular/material/dialog';
import { Reminder } from '../../interfaces/reminder.interface';
import { RemindersActions } from '../../state/reminders.actions';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { selectReminders } from '../../state/reminders.selectors';

@Component({
    selector: 'app-reminder-list',
    templateUrl: './reminder-list.component.html',
    styleUrls: ['./reminder-list.component.scss'],
})
export class ReminderListComponent {
    public reminders$ = this.store.select(selectReminders);

    constructor(private store: Store, public dialog: MatDialog) {}

    /**
     *
     * @param index The index of the reminder
     * @param reminder The reminder
     * @returns The key to identify the reminder in the list
     */
    public identifyReminder(index: number, reminder: Reminder) {
        return reminder.id;
    }

    /**
     *
     * It opens the dialog to create a new reminder and dispatches the action to create it
     */
    public async add(): Promise<void> {
        const reminder: Omit<Reminder, 'id'> = {
            title: '',
            date: new Date(),
            description: '',
        };

        const reminderEdited: Reminder = await firstValueFrom(
            this.dialog
                .open(EditReminderComponent, {
                    data: reminder,
                    width: '50%',
                    minWidth: '300px',
                })
                .afterClosed(),
        );
        if (!reminderEdited) return;

        this.store.dispatch(RemindersActions.createReminder(reminderEdited));
    }

    /**
     *
     * It opens the dialog to edit a reminder and dispatches the action to edit it
     */
    public async edit(reminder: Reminder): Promise<void> {
        const reminderEdited: Reminder = await firstValueFrom(
            this.dialog
                .open(EditReminderComponent, {
                    data: reminder,
                    width: '50%',
                    minWidth: '300px',
                })
                .afterClosed(),
        );

        if (!reminderEdited) return;

        this.store.dispatch(RemindersActions.editReminder(reminderEdited));
    }

    /**
     *
     * It opens the dialog to confirm that the user wants to remove the reminder
     */
    public async remove(reminder: Reminder): Promise<void> {
        const deleteItem = await firstValueFrom(
            this.dialog
                .open(ConfirmDialogComponent, {
                    data: 'Are you sure you want to delete this reminder?',
                })
                .afterClosed(),
        );

        if (!deleteItem) return;

        this.store.dispatch(
            RemindersActions.removeReminder({ reminderId: reminder.id }),
        );
    }
}
