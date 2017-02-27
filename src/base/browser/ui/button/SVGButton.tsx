import * as React from 'react';
import {withoutProperties} from 'base/common/objects';

export interface SVGButtonProps extends React.SVGAttributes<any> {
	href: string;
}

export class SVGButton extends React.Component<SVGButtonProps, any> {
	public render(): JSX.Element {
		const elementProps = withoutProperties(this.props, ['href']);
		return (
			<svg {...elementProps}><use xlinkHref={this.props.href}></use></svg>
		);
	}
}