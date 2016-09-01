import * as React from 'react';
import {Route, IndexRedirect} from 'react-router';

import App from '../containers/App';

import LocalHome from '../containers/local/LocalHome';

export function createRoutes(): React.ReactElement<any> {
	return (
		<Route component= {App} path='/'>
			<IndexRedirect to="m"/>
			<Route path="m">
				<IndexRedirect to="local"/>
				<Route path="local" component={LocalHome}>
				</Route>
			</Route>
		</Route>
	);
}