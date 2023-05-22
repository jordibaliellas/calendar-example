import { ComponentFixture, TestBed } from '@angular/core/testing';
import { calendarName, calendarReducer } from '../../state/calendar.reducer';
import {
    remindersName,
    remindersReducer,
} from 'src/app/domains/reminder/state/reminders.reducer';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { StoreModule } from '@ngrx/store';

describe('CalendarComponent', () => {
    let component: CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarComponent],
            imports: [
                StoreModule.forRoot({
                    [remindersName]: remindersReducer,
                    [calendarName]: calendarReducer,
                }),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
