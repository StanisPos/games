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
			const value = evt.target.getAttribute('value');

			this.clean();
			if (value !== 'clean') {
				this[value].show();
			}
		})
	}

	clean() {
		this.container.innerHTML = ''
	}

	init() {
		document.body.insertBefore(this.buttons, this.container)
	}

}

