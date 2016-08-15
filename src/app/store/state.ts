export interface Track {
	id: string;
	title: string;
	length: string;
}

export interface User {
	name: string;
}

export interface PlayLists {
	currentTrack: number;
	tracks: Track[];
}

export interface AppStore {
	user: User;
	playlists: PlayLists;
};