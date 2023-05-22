import { mergeRight, pick } from 'ramda';

import { ActionReducer } from '@ngrx/store';

/**
 *
 * @param str The string to check if it has the ISO date format
 * @returns true if the string has the ISO date format, false otherwise
 */
function isIsoDate(str: string) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d instanceof Date && d.toISOString() === str;
}

/**
 *
 * @param key The key of the object
 * @param value The value of the object
 * @returns The value or a Date object if the value is a string with the ISO date format
 */
function dateTimeReviver(key: string, value: unknown) {
    const valueIsString = typeof value === 'string';
    if (!valueIsString) return value;

    return isIsoDate(value) ? new Date(value) : value;
}

function saveState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getState(localStorageKey: string): any {
    return JSON.parse(
        localStorage.getItem(localStorageKey) || '{}',
        dateTimeReviver,
    );
}

const stateKeys = ['reminders'];
const localStorageKey = 'calendar-storage';

export function localStorageMetaReducer(
    reducer: ActionReducer<any>,
): ActionReducer<any> {
    let initializing = true;
    return function (state, action) {
        const nextState = reducer(state, action);

        if (initializing) {
            initializing = false;
            return mergeRight(nextState, getState(localStorageKey));
        }

        const stateToSave = pick(stateKeys, nextState);
        saveState(stateToSave, localStorageKey);

        return nextState;
    };
}
