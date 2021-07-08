import Base from '../base/base';
import { Circle } from './circle';

export default class Draw extends Base {
	constructor() {
		super();
		this.circle = new Circle()
		this.maxBlocks = 600;
		this.colorItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		this.animTime = 1000;
		this.baseColor = 'black'
	}

	get _randomColor() {
		let color = ''
		for (let i = 0; i < 6; i++) {
			color = `${color}${this.colorItems[Math.round(Math.random() * this.colorItems.length)]}`
		}

		return `#${color}`;
	}

	get _createdBlock() {
		return this.createElement('div', {class: 'block'})
	}

	_setChangeColorHandler(evt) {
		evt.target.style.backgroundColor = this._randomColor
	}

	_removeChangeColorHandler(evt) {
		setTimeout(() => {
			evt.target.style.backgroundColor = this.baseColor
		}, this.animTime)
	}

	show() {
		this.circle.show()
		const template = this.fragment;

		// for (let key = 0; key < this.maxBlocks; key++) {
		// 	const block = this._createdBlock;
		//
		// 	block.addEventListener('mouseenter', this._setChangeColorHandler.bind(this));
		// 	block.addEventListener('mouseout', this._removeChangeColorHandler.bind(this));
		//
		// 	template.appendChild(block);
		// }

		this.container.appendChild(template)
	}
}


