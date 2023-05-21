import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CalendarActions = createActionGroup({
    source: 'Calendar',
    events: {
        'Next Month': emptyProps(),
        'Previous Month': emptyProps(),
        'Select day': props<{ day: Date }>(),
    },
});
