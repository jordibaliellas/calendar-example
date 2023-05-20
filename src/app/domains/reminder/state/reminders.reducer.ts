import { createReducer, on } from '@ngrx/store';
import { RemindersActions } from './reminders.actions';
import { Reminders } from '../interfaces/reminder.interface';
import { v4 as uuidv4 } from 'uuid';

export const remindersName = 'reminders';

export const initialState: Reminders = {}

export const remindersReducer = createReducer(
  initialState,
  on(RemindersActions.createReminder, (state, reminder) => {
    const newReminder = {...reminder, id: uuidv4()};
    return {...state, [newReminder.id]: newReminder}
  }),
  on(RemindersActions.editReminder, (state, reminder) => {
    const currentReminder = state[reminder.id];
    if (! currentReminder) return state;

    return {...state, [reminder.id]: {...currentReminder, ...reminder}};
  }),
  on(RemindersActions.removeReminder, (state, { reminderId }) => {
    const newState = {...state}
    delete newState[reminderId]
    return newState;
  }),
);