import * as React from 'react';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router';
import {AppStore} from 'app/store/state';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';

export interface AppProp extends RouteComponentProps<any, any> {
	store: AppStore;
}

class App extends React.Component<AppProp, any> {
	public render(): JSX.Element {
		return (
			<div>
				<Header/>
				<SideBar/>
			</div>
		);
	}
}

function mapStateToProps(state: AppStore): AppProp {
	return {
		store: _.assign<AppStore>({}, state)
	};
}

export default connect(mapStateToProps)(App);