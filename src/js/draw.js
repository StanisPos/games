import { BLOCKS, COLOR_SYMBOLS, container } from './constants';

const getRandomColor = () => {
	let color = ''
	for (let i = 0; i < 6; i++) {
		color = `${color}${COLOR_SYMBOLS[Math.round(Math.random() * COLOR_SYMBOLS.length)]}`
	}

	return `#${color}`;
}

const getCreatedBlock = () => {
	const element = document.createElement('div')
	element.setAttribute('class', 'block');
	element.style.transitionProperty = 'background-color';
	element.style.transitionDuration = '300ms';
	return element;
}

const setChangeColorHandler = (evt) => {
	evt.target.style.backgroundColor = getRandomColor()
}

const removeChangeColorHandler = (evt) => {
	setTimeout(() => {
		evt.target.style.backgroundColor = 'black'
	}, 500)
}

export const drawInit = () => {
	const template = document.createDocumentFragment();

	for (let key = 0; key < BLOCKS; key++) {
		const block = getCreatedBlock();
		block.addEventListener('mouseenter', setChangeColorHandler);
		block.addEventListener('mouseout', removeChangeColorHandler);
		template.appendChild(block);
	}

	container.append(template)
}


