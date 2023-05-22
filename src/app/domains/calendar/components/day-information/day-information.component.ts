import { map, switchMap } from 'rxjs';

import { Component } from '@angular/core';
import { DateInformationService } from '../../services/date-information/date-information.service';
import { Reminder } from 'src/app/domains/reminder/interfaces/reminder.interface';
import { Store } from '@ngrx/store';
import { isSameDay } from 'date-fns';
import { selectDay } from '../../state/calendar.selectors';
import { selectReminders } from 'src/app/domains/reminder/state/reminders.selectors';

@Component({
    selector: 'app-day-information',
    templateUrl: './day-information.component.html',
    styleUrls: ['./day-information.component.scss'],
})
export class DayInformationComponent {
    public day$ = this.store.select(selectDay);
    public dayReminders$ = this.day$.pipe(
        switchMap((day) =>
            this.store
                .select(selectReminders)
                .pipe(
                    map((reminders) =>
                        reminders.filter(({ date }) => isSameDay(date, day)),
                    ),
                ),
        ),
    );

    public randomDayInformation$ = this.day$.pipe(
        switchMap((day) => this.dateInformationService.getRandomDateInfo(day)),
    );

    constructor(
        private store: Store,
        private dateInformationService: DateInformationService,
    ) {
        this.dateInformationService
            .getRandomDateInfo(new Date())
            .then((data) => {
                console.log('finisshhh');
            });
    }

    public identifyReminder(index: number, reminder: Reminder): string {
        return reminder.id;
    }
}
