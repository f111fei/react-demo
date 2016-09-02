import './media/css/nav.less';
import * as React from 'react';
import * as classnames from 'classnames';

export interface NavProps {

	className?: string;

	/**
	 * Marks the NavItem with a matching `eventKey` as active. Has a
	 * higher precedence over `activeHref`.
	 */
	activeKey?: any;

	/**
	 * Marks the child NavItem with a matching `href` prop as active.
	 */
	activeHref?: string;

	/**
	 * A callback fired when a NavItem is selected.
	 */
	onSelect?: (eventKey?: any, e?: Event) => void;
}

interface BaseNavItemProps {
	active?: boolean;
	eventKey?: any;
	href?: string;
	onSelect?: (eventKey?: any, e?: Event) => void;
}

export class Nav extends React.Component<NavProps, any> {

	public static defaultProps: NavProps = {
    };

	constructor() {
		super();
	}

	private isActive(props: BaseNavItemProps, activeKey: any, activeHref: string): boolean {
		if (props.active ||
			activeKey !== null && activeKey !== undefined && props.eventKey === activeKey ||
			activeHref && props.href === activeHref
		) {
			return true;
		}

		return props.active;
	}

	public render(): JSX.Element {
		const {
			children, activeKey, activeHref, onSelect
		} = this.props;
		const className = classnames(this.props.className, 'u-stab');

		const childrenElemets = React.Children.map(children, (child: React.ReactElement<BaseNavItemProps>) => {
			const active = this.isActive(child.props, activeKey, activeHref);
			const childOnSelect = (eventKey?: any, e?: Event) => {
				if (child.props.onSelect) {
					child.props.onSelect(eventKey, e);
				}
				if (onSelect) {
					onSelect(eventKey, e);
				}
			};

			return React.cloneElement<BaseNavItemProps, BaseNavItemProps>(child, {
				active,
				onSelect: childOnSelect
			});
		});

		return (
			<ul className={className}>
				{childrenElemets}
			</ul>
		);
	}
}

export interface NavItemProps extends BaseNavItemProps {
	className?: string;
	title?: string;
}

export class NavItem extends React.Component<NavItemProps, any> {

	public static defaultProps: NavItemProps = {
		active: false
    };

	constructor() {
		super();
	}

	private handleClick(e: MouseEvent): void {
		if (this.props.onSelect) {
			e.preventDefault();
			this.props.onSelect(this.props.eventKey, e);
		}
	}

	public render(): JSX.Element {
		const {children, title, active} = this.props;
		const className = classnames(this.props.className, active ? 'z-sel' : '');

		return (
			<li title={title} className={className} onClick={this.handleClick.bind(this) }>
				{children}
			</li>
		);
	}
}