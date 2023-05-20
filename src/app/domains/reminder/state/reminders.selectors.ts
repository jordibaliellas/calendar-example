import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Reminder, Reminders } from '../interfaces/reminder.interface';
import { remindersName } from './reminders.reducer';

export const selectRemindersMap = createFeatureSelector<Reminders>(remindersName);

export const selectReminders = createSelector(
    selectRemindersMap,
    (reminders) => ([...Object.values(reminders)])
)
