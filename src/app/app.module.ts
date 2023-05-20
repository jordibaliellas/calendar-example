import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './state/meta.reducers';
import { CalendarComponent } from './domains/calendar/components/calendar/calendar.component';
import { CalendarModule } from './domains/calendar/calendar.module';
import { ReminderModule } from './domains/reminder/reminder.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ }, { metaReducers }),
    ReminderModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
