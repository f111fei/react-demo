import './media/css/header.less';

import * as React from 'react';
import {Link} from 'react-router';
import WinCtrl from './WinCtrl';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite-loader!./media/img/' + name + '.svg');
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
			<header className="g-hd">
				<div className="m-logo no-drag">
					<Link to="/m/disc/rec">
						<SVGButton href={svg.logo}/>
					</Link>
				</div>
				<div className="m-topbox">
					<div className="m-hst no-drag">
						<span title="后退" className="btn btn-prv">
							<SVGButton href={svg.back}/>
						</span>
						<span title="前进" className="btn btn-nxt z-dis">
							<SVGButton href={svg.next}/>
						</span>
					</div>
					<div className="m-sch no-drag">
						<input type="text" placeholder="搜索音乐，歌手，歌词，用户">
						</input>
						<span className="sch-btn">
							<SVGButton href={svg.search}/>
						</span>
						<div className="u-arrlay m-schlist f-dn">
						</div>
					</div>
				</div>
				<div className="m-tool">
					<div className="user no-drag">
						<div className="j-pl-click"></div>
						<i className="u-tip u-tip-sml f-dn"></i>
						<Link className="face u-face" to="/m/personal/?uid=0">
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
					<div className="itm skin no-drag">
						<SVGButton className="btn" href={svg.skin}/>
					</div>
					<div className="itm msg no-drag">
						<SVGButton className="btn" href={svg.msg}/>
						<span className="u-tip" style={{ display: "none" }}>0</span>
					</div>
					<Link to="/m3/setting/" className="itm set no-drag" title="设置">
						<SVGButton className="btn" href={svg.set}/>
					</Link>
				</div>
				<WinCtrl/>
			</header>
		);
	}
}