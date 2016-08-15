import * as React from 'react';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router';
import {AppStore} from 'app/store/state';

export interface AppProp extends RouteComponentProps<any, any> {
	store: AppStore;
}

class App extends React.Component<AppProp, any> {
	public render(): JSX.Element {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>
				{this.props.children}
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