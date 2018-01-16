import './media/css/winctrl.less';
import * as electron from 'electron';
import * as React from 'react';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite-loader!./media/img/' + name + '.svg');
}

const svg = {
	mini: requireSVG('mini'),
	zoomout: requireSVG('zoomout'),
	zoomin: requireSVG('zoomin'),
	close: requireSVG('close')
};

const currentWindow = electron.remote.getCurrentWindow();

interface WinCtrlState {
	maximized: boolean;
}

export default class WinCtrl extends React.Component<any, WinCtrlState> {

	constructor() {
		super();
		this.state = {
			maximized: currentWindow.isMaximized()
		};
		window.addEventListener('resize', () => {
			this.calcMaximize();
		});
	}

	private calcMaximize(): void {
		this.setState({ maximized: currentWindow.isMaximized() });
	}

	// TODO: move to actions
	private minimize(): void {
		currentWindow.minimize();
		this.setState({ maximized: false });
	}

	private maximize(): void {
		if (this.state.maximized) {
			currentWindow.restore();
		} else {
			currentWindow.maximize();
		}
		this.setState({ maximized: !this.state.maximized });
	}

	private close(): void {
		currentWindow.close();
	}

	public render(): JSX.Element {
		return (
			<div className="m-winctrl no-drag">
				<span className="bar"></span>
				<span className="icn fix" title="mini模式">
					<SVGButton className="svg" href={svg.mini}/>
				</span>
				<span className="icn min" title="最小化" onClick={this.minimize.bind(this)}>
					<SVGButton className="svg" href={svg.zoomout}/>
				</span>
				<span className="icn revert" title={this.state.maximized ? "向下还原" : "最大化"} onClick={this.maximize.bind(this)}>
					<SVGButton className="svg" href={svg.zoomin}/>
				</span>
				<span className="icn cls" title="关闭" onClick={this.close.bind(this)}>
					<SVGButton className="svg" href={svg.close}/>
				</span>
			</div>
		);
	}
}