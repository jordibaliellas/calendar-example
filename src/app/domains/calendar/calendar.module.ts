import { calendarName, calendarReducer } from './state/calendar.reducer';

import { CalendarComponent } from './components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { DayInformationComponent } from './components/day-information/day-information.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [CalendarComponent, DayInformationComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(calendarName, calendarReducer),
        MatIconModule,
    ],
    exports: [CalendarComponent, DayInformationComponent],
})
export class CalendarModule {}
