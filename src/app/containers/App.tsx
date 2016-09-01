import * as React from 'react';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {AppStore} from 'app/store/state';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';
import Content from '../components/content/Content';
import BtmBar from '../components/btmBar/BtmBar';


export interface AppProp extends RouteComponentProps<any, any> {
	store: AppStore;
}

class App extends React.Component<AppProp, any> {
	public render(): JSX.Element {
		return (
			<div>
				<Header/>
				<div>
					<SideBar/>
					<Content children={this.props.children}/>
				</div>
				<BtmBar/>
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