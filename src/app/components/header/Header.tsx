import './media/css/header.less';

import * as React from 'react';
import {Link} from 'react-router';

const logo_svg = require('!!svg-sprite!./media/img/logo.svg');
const back_svg = require('!!svg-sprite!./media/img/back.svg');
const next_svg = require('!!svg-sprite!./media/img/next.svg');
const search_svg = require('!!svg-sprite!./media/img/search.svg');
const skin_svg = require('!!svg-sprite!./media/img/skin.svg');

export default class Header extends React.Component<any, any> {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<div className="m-header">
				<div className="m-logo">
					<Link to="/inbox">
						<svg><use xlinkHref={logo_svg}/></svg>
					</Link>
				</div>
				<div className="m-topbox j-topbox">
					<div className="m-hst">
						<span title="后退" className="btn btn-prv j-flag">
							<svg><use xlinkHref={back_svg}/></svg>
						</span>
						<span title="前进" className="btn btn-nxt z-dis j-flag">
							<svg><use xlinkHref={next_svg}/></svg>
						</span>
					</div>
					<div className="m-sch">
						<input type="text" className="j-flag j-search-input" placeholder="搜索音乐，歌手，歌词，用户">
						</input>
						<span className="sch-btn j-flxg">
							<svg><use xlinkHref={search_svg}/></svg>
						</span>
						<div className="u-arrlay m-schlist j-flag j-search-body f-dn">
						</div>
					</div>
				</div>
				<div className="m-tool">
					<div className="user j-flag">
						<div className="j-pl-click"></div>
						<i className="u-tip u-tip-sml j-top-fow f-dn"></i>
					</div>
					<div className="itm skin j-flag">
						<svg className="btn"><use xlinkHref={skin_svg}/></svg>
					</div>
				</div>
			</div>
		);
	}
}

