import './media/css/localhome.less';
import * as React from 'react';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite!./media/img/' + name + '.svg');
}

const svg = {
	local_list: requireSVG('local_list'),
	local_artist: requireSVG('local_artist'),
	local_album: requireSVG('local_album'),
	local_folder: requireSVG('local_folder')
};


export default class LocalHome extends React.Component<any, any> {
	public render(): JSX.Element {
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
					<ul className="tab u-stab u-stab-local">
						<li title="列表">
							<SVGButton href={svg.local_list}/>
						</li>
						<li title="歌手">
							<SVGButton href={svg.local_artist}/>
						</li>
						<li title="专辑">
							<SVGButton href={svg.local_album}/>
						</li>
						<li className="z-osx-hide" title="文件夹">
							<SVGButton href={svg.local_folder}/>
						</li>
					</ul>
					<div className="scan">
						<div className="itm a-ani a-dr6"></div>
					</div>
				</div>
				<div></div>
				<div className="n-lmadd">
					<h2 className="s-fc1">请添加本地音乐</h2>
					<p className="s-fc4">升级本地音乐为高品质音乐并和朋友分享！</p>
					<button className="u-ibtn1 u-ibtn1-xl f-ff2">选择本地音乐文件夹</button>
				</div>
			</div>
		);
	}
}