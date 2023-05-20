import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayInformationComponent } from './components/day-information/day-information.component';


@NgModule({
  declarations: [
    CalendarComponent,
    DayInformationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalendarComponent,
    DayInformationComponent,
  ]
})
export class CalendarModule { }
