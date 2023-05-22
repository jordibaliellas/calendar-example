import { addMonths, subMonths } from 'date-fns';
import { createReducer, on } from '@ngrx/store';

import { CalendarActions } from './calendar.actions';

export const calendarName = 'calendar';
export const calendarReducer = createReducer(
    new Date(),
    on(CalendarActions.nextMonth, (state) => addMonths(state, 1)),
    on(CalendarActions.previousMonth, (state) => subMonths(state, 1)),
    on(CalendarActions.selectDay, (state, { day }) => new Date(day)),
);
