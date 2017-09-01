import * as React from 'react';
import * as _ from 'lodash';
import {connect, MapStateToProps} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {AppStore} from 'app/store/state';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';
import Content from '../components/content/Content';
import BtmBar from '../components/btmBar/BtmBar';


export interface AppProp {
	store: AppStore;
}

class App extends React.Component<AppProp & RouteComponentProps<any, any>, any> {
	public render(): JSX.Element {
		return (
			<div>
				<Header/>
				<div>
					<SideBar/>
					<Content>
						{this.props.children}
					</Content>
				</div>
				<BtmBar/>
			</div>
		);
	}
}

const mapStateToProps: MapStateToProps<AppProp, any> = (state: AppStore): AppProp => {
	return {
		store: _.assign({}, state)
	};
};

export default connect(mapStateToProps)(App);