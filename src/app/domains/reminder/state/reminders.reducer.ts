import { createReducer, on } from '@ngrx/store';
import { RemindersActions } from './reminders.actions';
import { Reminder } from '../interfaces/reminder.interface';
import { v4 as uuidv4 } from 'uuid';

export const remindersName = 'reminders';

export const initialState: Map<string, Reminder> = new Map();

export const remindersReducer = createReducer(
  initialState,
  on(RemindersActions.createReminder, (state, { reminder }) => {
    const newReminder = {...reminder, id: uuidv4()};
    return state.set(newReminder.id, newReminder);
  }),
  on(RemindersActions.editReminder, (state, { reminder }) => {
    const currentReminder = state.get(reminder.id);
    if (! currentReminder) return state;

    return state.set(currentReminder.id, {...currentReminder, ...reminder});
  }),
  on(RemindersActions.removeReminder, (state, { reminderId }) => {
    state.delete(reminderId);
    return state;
  }),
);