import {Action} from 'redux';
import {PlayLists} from '../store/state';

const initialState: PlayLists = {
	currentTrack: null,
	tracks: []
};


export default function playlist(state = initialState, action: Action): PlayLists {
	return state;
}