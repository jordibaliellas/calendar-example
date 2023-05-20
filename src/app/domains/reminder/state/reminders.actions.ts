import { createActionGroup, props } from '@ngrx/store';
import { Reminder } from '../interfaces/reminder.interface';

export const RemindersActions = createActionGroup({
  source: 'Reminders',
  events: {
    'Create Reminder': props<{ reminder: Omit<Reminder, 'id'> }>(),
    'Edit Reminder': props<{ reminder: Pick<Reminder, 'id'> & Partial<Reminder> }>(),
    'Remove Reminder': props<{ reminderId: string }>(),
  },
});
