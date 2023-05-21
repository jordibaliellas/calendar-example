import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Reminders } from '../interfaces/reminder.interface';
import { remindersName } from './reminders.reducer';

export const selectRemindersMap =
    createFeatureSelector<Reminders>(remindersName);

export const selectReminders = createSelector(selectRemindersMap, (reminders) =>
    Object.values(reminders).sort(
        (a, b) => a.date.valueOf() - b.date.valueOf(),
    ),
);
