import {combineReducers, Reducer} from 'redux';
import {AppStore} from '../store/state';

import playlists from './playlists';
import user from './user';

export function createReducers(): Reducer<AppStore> {
	const reducers = combineReducers<AppStore>({
		user,
		playlists
	});
	return reducers;
}