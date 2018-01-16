import './media/css/btmbar.less';
import * as React from 'react';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite-loader!./media/img/' + name + '.svg');
}

const svg = {
	prev: requireSVG('prev'),
	play: requireSVG('play'),
	next: requireSVG('next'),
	voice: requireSVG('voice'),
	order: requireSVG('order'),
	lrc: requireSVG('lrc'),
	state_playlist: requireSVG('state_playlist')
};

export default class Btmbar extends React.Component<any, any> {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<div id="main-player" className="m-player f-os">
				<div title="上一首" className="btnc btnc-prv f-vc f-cp">
					<SVGButton href={svg.prev}/>
				</div>
				<div title="播放" className="btnp btnp-play f-vc f-cp">
					<SVGButton href={svg.play}/>
				</div>
				<div title="上一首" className="btnc btnc-nxt f-vc f-cp">
					<SVGButton href={svg.next}/>
				</div>
				<time className="now">00: 00</time>
				<div className="prg prg-ply f-vc">
					<span className="track"></span>
					<span className="download" style={{ width: "0%" }}></span>
					<span className="has" style={{ width: "0%" }}>
						<span className="ctrl"></span>
					</span>
				</div>
				<time className="all">00:00</time>
				<div className="spk f-vc f-cp" title="静音">
					<SVGButton href={svg.voice}/>
				</div>
				<div title="音量调节" className="prg prg-spk f-vc">
					<span className="track"></span>
					<div className="hastrack">
						<span className="has" style={{ width: "0%" }}></span>
					</div>
					<div className="ctrlctrak" style={{ width: "0%" }}>
						<span className="ctrl"></span>
					</div>
				</div>
				<div className="type f-vc f-cp">
					<SVGButton href={svg.order}/>
				</div>
				<div className="word f-vc f-cp" title="打开歌词">
					<SVGButton href={svg.lrc}/>
				</div>
				<div className="list f-vc f-cp" title="打开播放列表">
					<span className="icon f-fl">
						<SVGButton href={svg.state_playlist}/>
					</span>
					<span className="num f-fl f-ff1">500</span>
					<div className="u-arrlay u-arrlay-dn m-queuenotify u-arrlay-opacity f-dn">已添加到播放列表</div>
				</div>
			</div>
		);
	}
}