import './media/css/localhome.less';
import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {SVGButton} from 'base/browser/ui/button/SVGButton';
import {Nav, NavItem} from 'base/browser/ui/nav/Nav';

function requireSVG(name: string): string {
	return require('!!svg-sprite!./media/img/' + name + '.svg');
}

const svg = {
	local_list: requireSVG('local_list'),
	local_artist: requireSVG('local_artist'),
	local_album: requireSVG('local_album'),
	local_folder: requireSVG('local_folder')
};

export default class LocalHome extends React.Component<RouteComponentProps<any, any>, any> {

	public static contextTypes: React.ValidationMap<any> = {
		router: React.PropTypes.object.isRequired
	};

	public context: { router: ReactRouter.RouterOnContext };

	private handleNavSelect(eventKey: string): void {
		this.context.router.push(eventKey);
	}

	public render(): JSX.Element {
		const {
			location, children
		} = this.props;

		return (
			<div className="n-local">
				<div className="preload f-dn"></div>
				<div className="u-header header">
					<h2 className="f-ff2">本地音乐</h2>
					<div className="lstinfo s-fc3">
						<span>0</span>首音乐<span className="z-osx-hide">，</span>
						<div className="folderSlt">
							<a href="javascript:;" className="s-fc2 z-osx-hide">选择目录</a>
						</div>
					</div>
					<Nav className="tab" activeKey={location.pathname} onSelect={this.handleNavSelect.bind(this) }>
						<NavItem title="列表" eventKey="/m/local/track">
							<SVGButton href={svg.local_list}/>
						</NavItem>
						<NavItem title="歌手" eventKey="/m/local/artist">
							<SVGButton href={svg.local_artist}/>
						</NavItem>
						<NavItem title="专辑" eventKey="/m/local/album">
							<SVGButton href={svg.local_album}/>
						</NavItem>
						<NavItem className="z-osx-hide" title="文件夹" eventKey="/m/local/folder">
							<SVGButton href={svg.local_folder}/>
						</NavItem>
					</Nav>
					<div className="scan">
						<div className="itm a-ani a-dr6"></div>
					</div>
				</div>
				{children}
				<div className="n-lmadd">
					<h2 className="s-fc1">请添加本地音乐</h2>
					<p className="s-fc4">升级本地音乐为高品质音乐并和朋友分享！</p>
					<button className="u-ibtn1 u-ibtn1-xl f-ff2">选择本地音乐文件夹</button>
				</div>
			</div>
		);
	}
}