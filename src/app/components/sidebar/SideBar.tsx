import './media/css/sidebar.less';
import * as React from 'react';
import {Link} from 'react-router';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite!./media/img/' + name + '.svg');
}

const svg = {
	discover: requireSVG('discover'),
	fm: requireSVG('fm'),
	mv: requireSVG('mv'),
	friend: requireSVG('friend'),
	local: requireSVG('local'),
	list_pause: requireSVG('list_pause'),
	dld: requireSVG('dld'),
	cloud: requireSVG('cloud'),
	artist: requireSVG('artist'),
	radio: requireSVG('radio'),
	down: requireSVG('down')
};

export default class SideBar extends React.Component<any, any> {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<nav className="m-nav">
				<div className="nav">
					<h2 className="z-first">推荐</h2>
					<ul className="sys">
						<li className="fx">
							<Link to="#/m/disc/rec">
								<SVGButton className="svg" href={svg.discover}/>发现音乐
							</Link>
						</li>
						<li className="fm">
							<Link to="#/m/fm">
								<SVGButton className="svg" href={svg.fm}/>私人FM
							</Link>
						</li>
						<li className="mv">
							<Link to="#/m/mv/jingxuan">
								<SVGButton className="svg" href={svg.mv}/>MV
							</Link>
						</li>
						<li className="py">
							<Link to="#/m/friend/home">
								<SVGButton className="svg" href={svg.friend}/><span>朋友<i className="u-dot"></i></span>
							</Link>
						</li>
					</ul>
					<h2>我的音乐</h2>
					<ul className="sys" id="my-music-list">
						<li className="bd">
							<Link to="#/m/local/track">
								<SVGButton className="svg" href={svg.local}/>本地音乐
							</Link>
							<span className="state f-vc">
								<SVGButton href={svg.list_pause}/>
							</span>
							<span className="icn u-icn u-icn-scan"></span>
						</li>
						<li className="xz">
							<Link to="#/m/offline/complete">
								<SVGButton className="svg" href={svg.dld}/>下载管理
							</Link>
							<span className="state f-vc">
								<SVGButton href={svg.list_pause}/>
							</span>
						</li>
						<li className="cloud">
							<Link to="#/m/cloud">
								<SVGButton classname="svg" href={svg.cloud}/>我的音乐云盘
							</Link>
							<span className="state f-vc">
								<SVGButton href={svg.list_pause}/>
							</span>
						</li>
						<li className="art">
							<Link to="#/m/fav/artist">
								<SVGButton classname="svg" href={svg.artist}/>我的歌手
							</Link>
						</li>
						<li className="mv">
							<Link to="#/m/fav/mv">
								<SVGButton classname="svg" href={svg.mv}/>我的MV
							</Link>
						</li>
						<li className="rdi">
							<Link to="#/m/fav/djradio">
								<SVGButton classname="svg" href={svg.radio}/><span>我的电台<i className="u-dot"></i></span>
							</Link>
						</li>
					</ul>
					<div>
						<h2>创建的歌单
							<span className="newlist f-cp" title="新建歌单">新建</span>
							<span className="ctrl f-pa f-cp" title="收起">
								<SVGButton href={svg.down}/>
							</span>
						</h2>
						<ul className="my" tabindex="1001"></ul>
						<h2>收藏的歌单
							<span className="ctrl f-pa f-cp" title="收起">
								<SVGButton href={svg.down}/>
							</span>
						</h2>
						<ul className="my" tabindex="1001"></ul>
					</div>
					<div className="import" style={{ display: "none" }}>
						<Link to="#/m/import" className="btn u-ibtn5" title="从虾米音乐/豆瓣FM导入歌单">导入歌单
						</Link>
						<p className="s-fc4">从虾米音乐/豆瓣FM导入歌单</p>
					</div>
				</div>
			</nav >
		);
	}
}