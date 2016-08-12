import * as redux from 'redux';

import {createReducers} from './reducers';
import {AppStore} from './state';

export function createStore(): redux.Store<AppStore> {
	const reducers = createReducers();
	const store = redux.createStore<AppStore>(reducers);
	return store;
}