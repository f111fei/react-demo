export interface Track {
	id: string;
	title: string;
	length: string;
}

export interface User {
	name: string;
}

export interface PlayList {
	currentTrack: number;
	tracks: Track[];
}

export interface AppStore {
	user: User;
	playlist: PlayList;
};