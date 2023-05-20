import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectReminders } from './domains/reminder/state/reminders.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public reminders$ = this.store.select(selectReminders);
 
  constructor(private store: Store) { }
}
