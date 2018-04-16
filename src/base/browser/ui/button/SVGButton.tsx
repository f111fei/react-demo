import * as React from 'react';

export interface SVGButtonProps extends React.SVGAttributes<any> {
	href: string;
}

export class SVGButton extends React.Component<SVGButtonProps, any> {
	public render(): JSX.Element {
		const { href, ...props } = this.props;
		return (
			<svg {...props}><use xlinkHref={href}></use></svg>
		);
	}
}