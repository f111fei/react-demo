import * as redux from 'redux';

import {createReducers} from '../reducers/index';
import {AppStore} from './state';

export default function configureStore(): redux.Store<AppStore> {
	const reducers = createReducers();
	const store = redux.createStore<AppStore>(reducers);
	return store;
}