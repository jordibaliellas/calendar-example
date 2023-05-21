import { createFeatureSelector, createSelector } from '@ngrx/store';

import { calendarName } from './calendar.reducer';
import { getMonth } from 'date-fns';

export const selectDay = createFeatureSelector<Date>(calendarName);
export const selectMonth = createSelector(selectDay, (day) => getMonth(day));
