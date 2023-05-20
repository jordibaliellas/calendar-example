import { MetaReducer } from '@ngrx/store';
import { localStorageMetaReducer } from './local-storage.reducer';

export const metaReducers: MetaReducer<any>[] = [localStorageMetaReducer];
