import Base from '../base/base';
import Chess from '../chess/chess';
import Draw from '../draw/draw';

const Buttons = {
	clean: {
		text: 'Очистить'
	},
	chess: {
		text: 'Шахматы',
	},
	draw: {
		text: 'Рисовалка'
	},
}

export default class Button extends Base {
	constructor(name) {
		super();

		this.chess = new Chess();
		this.draw = new Draw();
		console.log(name)
		console.dir(this)
	}

	get buttons() {
		const btnContainer = this.fragment;
		Object.keys(Buttons).map((b) => this._createButton(b, btnContainer))
		return btnContainer
	}

	_createButton(b, container) {
		const btn = this.createElement('button', {type: 'button', class: b, value: b, textContent: Buttons[b].text});
		this._addHandler(btn);
		container.appendChild(btn)
	}

	_addHandler(btn) {
		btn.addEventListener('click', (evt) => {
			this.clean();
			const value = evt.target.getAttribute('value');
			this[value].show ? this[value].show() : this[value];

			if (value !== 'clean') {
				evt.target.classList.add('active')
				this.activeBtn = evt.target
			}
		})
	}

	clean() {
		this.container.innerHTML = ''
		this.activeBtn?.classList.remove('active');
	}

	init() {
		document.body.insertBefore(this.buttons, this.container)
	}

}

