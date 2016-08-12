import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export default class About extends React.Component<RouteComponentProps<any, any>, any> {

	public render(): JSX.Element {
		return (
			<h3>About</h3>
		);
	}

}