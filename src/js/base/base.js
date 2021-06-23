export default class Base {
	constructor() {
		if (new.target === Base) {
			throw new Error(`Can't instantiate Abstract`);
		} else {
			Base.init();
		}
	}

	get container() {
		return document.querySelector('.container');
	}

	get fragment() {
		return document.createDocumentFragment()
	}

	createElement(elem, options = {}) {
		const {textContent, ...attr} = options;
		const element = document.createElement(elem);


		Object.keys(attr).forEach((key) =>
			element.setAttribute(key, attr[key])
		)

		if (textContent) {
			element.textContent = textContent;
		}

		return element;
	}

	static init() {
		if (!document.querySelector('.container')) {
			const container = document.createElement('div');
			container.classList.add('container');

			document.body.appendChild(container)
		}
	}
}
