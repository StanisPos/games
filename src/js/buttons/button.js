import Base from '../base/base';
import Chess from '../chess/chess';

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
		console.log(name)
		console.dir(this)
	}

	get buttons() {
		const btnContainer = this.fragment;
		Object.keys(Buttons).map((b) => this._createButton(b, btnContainer))
		return btnContainer
	}

	_createButton(b, container) {
		const btn = this.getNewElement({elem: 'button', type: 'button', class: b, value: b, textContent: Buttons[b].text});
		this._addHandler(btn);
		container.appendChild(btn)
	}

	_addHandler(btn) {
		const value = btn.getAttribute('value');
		btn.addEventListener('click', () => {
			if (value === 'clean') {
				this[value]();
			} else {
				this[value].show();
			}
		})
	}

	clean() {
		console.log(this.container)
		this.container.innerHTML = ''
	}

	init() {
		document.body.insertBefore(this.buttons, this.container)
	}

}

