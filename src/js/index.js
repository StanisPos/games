import '../styles.css'
import { drawInit } from './draw';
import { chessBtn, cleanBtn, container, drawBtn } from './constants';
import { cleanAll } from './services';
import { chessInit } from './chess';


cleanBtn.addEventListener('click', () => {
	cleanAll(container);
})

drawBtn.addEventListener('click', drawInit);
chessBtn.addEventListener('click', chessInit);
