import { ComponentFixture, TestBed } from '@angular/core/testing';
import { calendarName, calendarReducer } from '../../state/calendar.reducer';
import {
    remindersName,
    remindersReducer,
} from 'src/app/domains/reminder/state/reminders.reducer';

import { DateInformationService } from '../../services/date-information/date-information.service';
import { DayInformationComponent } from './day-information.component';
import { StoreModule } from '@ngrx/store';

describe('DayInformationComponent', () => {
    let component: DayInformationComponent;
    let fixture: ComponentFixture<DayInformationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DayInformationComponent],
            imports: [
                StoreModule.forRoot({
                    [remindersName]: remindersReducer,
                    [calendarName]: calendarReducer,
                }),
            ],
            providers: [
                {
                    provide: DateInformationService,
                    useValue: { getRandomDateInfo: () => Promise.resolve('') },
                },
            ],
        });
        fixture = TestBed.createComponent(DayInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
