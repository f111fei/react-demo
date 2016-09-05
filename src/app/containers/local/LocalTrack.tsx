import './media/css/localtrack.less';
import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite!./media/img/' + name + '.svg');
}

const svg = {
	btn_play_sml: requireSVG('btn_play_sml'),
	btn_addto_list: requireSVG('btn_addto_list'),
	btn_scan: requireSVG('btn_scan'),
	search2: requireSVG('search2'),
	sort_hvr: requireSVG('sort_hvr'),
	sort: requireSVG('sort'),
};

export default class LocalTrack extends React.Component<RouteComponentProps<any, any>, any> {

	public render(): JSX.Element {
		return (
			<div className="p-localtrack g-wrap1 q-lrc">
				<div className="oper f-cb">
					<div className="buttons">
						<div className="u-ibtn5b">
							<span className="u-ibtn5 u-ibtn5-ply">
								<SVGButton href={svg.btn_play_sml}/>播放全部
							</span>
							<span title="添加全部到播放列表" className="u-ibtn5 u-ibtn5-only u-ibtn5-addto">
								<SVGButton href={svg.btn_addto_list}/>
							</span>
						</div>
						<button className="u-ibtn5 u-ibtn5-scan z-off">
							<SVGButton href={svg.btn_scan}/>匹配音乐
						</button>
					</div>
					<div className="u-lcsch">
						<input type="text" placeholder="搜索本地音乐"/>
						<a className="sch-btn">
							<SVGButton href={svg.search2}/>
						</a>
					</div>
				</div>
				<div className="m-plylist m-plylist-local m-plylist-sort m-plylist_local-track" tabindex="1000">
					<div className="head f-cb">
						<div className="fix">
							<div className="th col"></div>
						</div>
						<div className="flow">
							<div className="th col" data-res-action="sort">音乐标题
								<SVGButton className="u-icn u-icn-sort-hvr" href={svg.sort_hvr}/>
								<SVGButton className="u-icn u-icn-sort" href={svg.sort}/>
							</div>
							<span className="js-resize">&nbsp; </span>
							<div className="th col" data-res-action="sort">歌手
								<SVGButton className="u-icn u-icn-sort-hvr" href={svg.sort_hvr}/>
								<SVGButton className="u-icn u-icn-sort" href={svg.sort}/>
							</div>
							<span className="js-resize">&nbsp; </span>
							<div className="th col" data-res-action="sort">专辑
								<SVGButton className="u-icn u-icn-sort-hvr" href={svg.sort_hvr}/>
								<SVGButton className="u-icn u-icn-sort" href={svg.sort}/>
							</div>
							<span className="js-resize">&nbsp; </span>
							<div className="th col" data-res-action="sort">时长
								<SVGButton className="u-icn u-icn-sort-hvr" href={svg.sort_hvr}/>
								<SVGButton className="u-icn u-icn-sort" href={svg.sort}/>
							</div>
							<span className="js-resize">&nbsp; </span>
							<div className="th col" data-res-action="sort">大小
								<SVGButton className="u-icn u-icn-sort-hvr" href={svg.sort_hvr}/>
								<SVGButton className="u-icn u-icn-sort" href={svg.sort}/>
							</div>
						</div>
					</div>
					<ul></ul>
				</div>
			</div>
		);
	}
}