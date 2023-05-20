import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Reminder } from '../interfaces/reminder.interface';
import { remindersName } from './reminders.reducer';

export const selectRemindersMap = createFeatureSelector<ReadonlyMap<string, Reminder>>(remindersName);

export const selectReminders = createSelector(
    selectRemindersMap,
    (reminders) => [...reminders.values()],
)
