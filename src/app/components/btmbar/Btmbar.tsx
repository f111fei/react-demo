import './media/css/btmbar.less';
import * as React from 'react';
import {SVGButton} from 'base/browser/ui/button/SVGButton';

function requireSVG(name: string): string {
	return require('!!svg-sprite!./media/img/' + name + '.svg');
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
			<div id="main-player" className="m-player">
				<div title="上一首" className="btnc btnc-prv">
					<SVGButton href={svg.prev}/>
				</div>
				<div title="播放" className="btnp btnp-play">
					<SVGButton href={svg.play}/>
				</div>
				<div title="上一首" className="btnc btnc-nxt">
					<SVGButton href={svg.next}/>
				</div>
				<time className="now">00: 00</time>
				<div className="prg prg-ply">
					<span className="track"></span>
					<span className="download" style={{ width: "0%" }}></span>
					<span className="has" style={{ width: "0%" }}>
						<span className="ctrl"></span>
					</span>
				</div>
				<time className="all">00:00</time>
				<div className="spk" title="静音">
					<SVGButton href={svg.voice}/>
				</div>
				<div title="音量调节" className="prg prg-spk">
					<span className="track"></span>
					<div className="hastrack">
						<span className="has" style={{ width: "0%" }}></span>
					</div>
					<div className="ctrlctrak" style={{ width: "0%" }}>
						<span className="ctrl"></span>
					</div>
				</div>
				<div className="type">
					<SVGButton href={svg.order}/>
				</div>
				<div className="word" title="打开歌词">
					<SVGButton href={svg.lrc}/>
				</div>
				<div className="list" title="打开播放列表">
					<span className="icon">
						<SVGButton href={svg.state_playlist}/>
					</span>
					<span className="num">500</span>
					<div className="u-arrlay-dn m-queuenotify u-arrlay-opacity"></div>
				</div>
			</div>
		);
	}
}