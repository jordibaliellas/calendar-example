import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from './domains/calendar/calendar.module';
import { NgModule } from '@angular/core';
import { ReminderModule } from './domains/reminder/reminder.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './state/meta.reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}, { metaReducers }),
        ReminderModule,
        CalendarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
