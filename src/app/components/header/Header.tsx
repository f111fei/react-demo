import './media/css/header.less';

import * as React from 'react';
import {Link} from 'react-router';
import WinCtrl from './WinCtrl';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite!./media/img/' + name + '.svg');
}

const svg = {
	logo: requireSVG('logo'),
	back: requireSVG('back'),
	next: requireSVG('next'),
	search: requireSVG('search'),
	skin: requireSVG('skin'),
	msg: requireSVG('msg'),
	set: requireSVG('set'),
	head_arr: requireSVG('head_arr')
};

const defaultFace = require('./media/img/face_24.png');

export default class Header extends React.Component<any, any> {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<div className="g-hd">
				<div className="m-logo no-drag">
					<Link to="/inbox">
						<SVGButton href={svg.logo}/>
					</Link>
				</div>
				<div className="m-topbox j-topbox">
					<div className="m-hst no-drag">
						<span title="后退" className="btn btn-prv j-flag">
							<SVGButton href={svg.back}/>
						</span>
						<span title="前进" className="btn btn-nxt z-dis j-flag">
							<SVGButton href={svg.next}/>
						</span>
					</div>
					<div className="m-sch no-drag">
						<input type="text" className="j-flag j-search-input" placeholder="搜索音乐，歌手，歌词，用户">
						</input>
						<span className="sch-btn j-flxg">
							<SVGButton href={svg.search}/>
						</span>
						<div className="u-arrlay m-schlist j-flag j-search-body f-dn">
						</div>
					</div>
				</div>
				<div className="m-tool">
					<div className="user j-flag no-drag">
						<div className="j-pl-click"></div>
						<i className="u-tip u-tip-sml j-top-fow f-dn"></i>
						<Link className="face u-face" to="#/m/personal/?uid=0">
							<div className="wrap">
								<img src={defaultFace}/>
							</div>
						</Link>
						<div className="name">
							<p className="f-thide">未登录</p>
							<span className="arr">
								<SVGButton className="svg" href={svg.head_arr}/>
							</span>
						</div>
					</div>
					<div className="itm skin j-flag no-drag">
						<SVGButton className="btn" href={svg.skin}/>
					</div>
					<div className="itm msg j-flag no-drag">
						<SVGButton className="btn" href={svg.msg}/>
						<span className="u-tip" style={{ display: "none" }}>0</span>
					</div>
					<Link to="#/m3/setting/" className="itm set no-drag" title="设置">
						<SVGButton className="btn" href={svg.set}/>
					</Link>
				</div>
				<WinCtrl/>
			</div>
		);
	}
}