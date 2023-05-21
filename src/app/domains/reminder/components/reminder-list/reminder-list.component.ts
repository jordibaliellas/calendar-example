import { Component } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/domains/ui/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Reminder } from '../../interfaces/reminder.interface';
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

    public edit(reminder: Reminder) {
        console.log('edit', reminder);
    }

    public async remove(reminder: Reminder) {
        const deleteItem = await firstValueFrom(
            this.dialog
                .open(ConfirmDialogComponent, {
                    data: 'Are you sure you want to delete this reminder?',
                })
                .afterClosed(),
        );

        if (!deleteItem) return;
        console.log('delete', reminder);
    }
}
