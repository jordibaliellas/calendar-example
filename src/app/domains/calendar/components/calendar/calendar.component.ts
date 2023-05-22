import {
    addDays,
    differenceInDays,
    endOfMonth,
    endOfWeek,
    isSameDay,
    isSameMonth,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

import { CalendarActions } from '../../state/calendar.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectDay } from '../../state/calendar.selectors';

interface Day {
    dayNumber: number;
    day: Date;
    outOfMonth?: boolean;
    selected: boolean;
}

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
    public day$ = this.store.select(selectDay);
    public monthDays$ = this.day$.pipe(
        map((selectedDay) => {
            const startMonth = startOfMonth(selectedDay);
            const startWeek = startOfWeek(startMonth, { weekStartsOn: 1 });
            const endMonth = endOfMonth(selectedDay);
            const endWeek = endOfWeek(endMonth, { weekStartsOn: 1 });

            const days: Day[] = [];
            const diffDays = differenceInDays(endWeek, startWeek);
            for (let i = 0; i <= diffDays; i++) {
                const day = addDays(startWeek, i);
                days.push({
                    day,
                    dayNumber: day.getDate(),
                    outOfMonth: !isSameMonth(day, selectedDay),
                    selected: isSameDay(day, selectedDay),
                });
            }
            return days;
        }),
    );

    constructor(private store: Store) {
        this.monthDays$.subscribe((days) => console.log('daysss:', days));
    }

    public previousMonth(): void {
        this.store.dispatch(CalendarActions.previousMonth());
    }

    public nextMonth(): void {
        this.store.dispatch(CalendarActions.nextMonth());
    }

    public selectDay({ day }: Day): void {
        this.store.dispatch(CalendarActions.selectDay({ day }));
    }
}
