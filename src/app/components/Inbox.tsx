import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export default class Inbox extends React.Component<RouteComponentProps<any, any>, any> {

	public render(): JSX.Element {
		return (
			<div>
				<h2>Inbox</h2>
				{this.props.children || "Welcome to your Inbox"}
			</div>
		);
	}

}