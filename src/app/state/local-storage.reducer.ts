import { ActionReducer } from '@ngrx/store';
import { pick } from 'ramda';

function saveState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey) || '{}')
}

const stateKeys = ['reminders'];
const localStorageKey = 'calendar-storage';

export function localStorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  let initializing = true;
  return function(state, action) {
    const nextState = reducer(state, action);

    if (initializing) {
      initializing = false;
      return getState(localStorageKey);
    }

    const stateToSave = pick(stateKeys, nextState);
    saveState(stateToSave, localStorageKey);
 
    return nextState
  };
}
