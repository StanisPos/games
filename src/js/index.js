import '../styles.css'
import buttons from './buttons/button';
import { drawInit } from './draw/draw';

import { cleanAll } from './services';
import Chess, { chessInit } from './chess/chess';
import Buttons from './buttons/button';

new Buttons().init()
//
// cleanBtn.addEventListener('click', () => {
// 	cleanAll(container);
// })
//
// drawBtn.addEventListener('click', drawInit);
// chessBtn.addEventListener('click', chessInit);
