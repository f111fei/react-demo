import {combineReducers, Reducer, Action} from 'redux';
import {AppStore, User, PlayList} from './state';

function user(state: User, action: Action): User {
	if (!state) {
		state = { name: '' };
	}
	return state;
}

function playlist(state: PlayList, action: Action): PlayList {
	if (!state) {
		state = { currentTrack: null, tracks: [] };
	}
	return state;
}

export function createReducers(): Reducer<AppStore> {
	const reducers = combineReducers<AppStore>({
		user,
		playlist
	});
	return reducers;
}