import Base from '../../base/base';

export class Circle extends Base {
	constructor() {
		super();
	}

	set color(color) {
		if (this.chosenColor !== color) {
			this.chosenColor = color;
			this.updateCurrentColor()
		}
	}

	updateCurrentColor() {
		if (!this.currentColor) {
			this.currentColor = document.querySelector('.currentColor');
		}

		this.currentColor.style.backgroundColor = this.chosenColor
	}

	show() {
		const circle = this.createElement('div', {class: 'circle'});
		const colorElem = this.createElement('div', {class: 'currentColor'});


		for (let i = 0; i < 360; i++) {
			let color = document.createElement("span")
			color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)"
			color.style.transform = "rotate(" + i + "deg)"

			circle.appendChild(color)
		}
		const trash = (qwe) => {
			qwe.stopImmediatePropagation()
			this.color = qwe.target.style.backgroundColor;
		}
		const ololo = (evt) => {
			evt.stopImmediatePropagation()
			circle.addEventListener('mousemove', trash)
		}
		circle.addEventListener('mousedown', ololo)
		document.addEventListener('mouseup', () => {
			circle.removeEventListener('mousemove', trash)
		})
		this.container.appendChild(circle)
		this.container.appendChild(colorElem)
	}
}
