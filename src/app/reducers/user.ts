import {Action} from 'redux';
import {User} from '../store/state';

const initialState: User = {
	name: ''
};


export default function user(state = initialState, action: Action): User {
	return state;
}