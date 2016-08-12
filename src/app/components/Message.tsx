import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export default class Message extends React.Component<RouteComponentProps<any, any>, any> {

	public render(): JSX.Element {
		return (
			<h3>Message {this.props.params.id}</h3>
		);
	}

}