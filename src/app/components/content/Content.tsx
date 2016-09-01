import './media/css/content.less';
import * as React from 'react';

export interface ContentProps {
	children?: React.ReactElement<any>;
}

export default class Content extends React.Component<ContentProps, any> {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<section className="g-mn">
				{this.props.children}
			</section>
		);
	}
}