export class IngameDisplay {
	initialize() {
		const timer = this.timer = document.createElement('h1');
		timer.style.position = 'fixed';
		timer.style.left = '10px';
		timer.style.bottom = '10px';
		timer.style.color = 'white';
		timer.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
		timer.style.zIndex = '2147483647';
		timer.style.pointerEvents = 'none';
		document.body.appendChild(timer);
	}

	run() {
		simplify.registerUpdate(() => this._update());
	}

	_update() {
		const t = sc.stats.getMap('player', 'playtime');
		if(!t) {
			return this.timer.innerHTML  = '';
		}
		const hour =  parseInt(t / 60 / 60);
		const min = parseInt(t / 60) - hour * 60;
		const sec = Math.floor((t - (min + hour * 60) * 60 ) * 1000) / 1000;
		if(hour <= 0) {
			this.timer.innerHTML = min + ((sec < 10) ? ':0': ':') + sec;
		} else {
			this.timer.innerHTML = hour + ((min < 9) ? ':0': ':') + min + ((sec < 10) ? ':0': ':') + sec;
		}
	}
}