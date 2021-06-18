import { container, LETTERS } from './constants';

const createLetter = (parent, rowNumber, colNumber) => {
	console.log(colNumber, 'col')
	console.log(rowNumber, 'row')
	// if (rowNumber === 0 && colNumber === 0) {
	// 	console.log(`рисуем цифру ${LETTERS[rowNumber]}`)
	// }

	if (colNumber === 0) {
		console.log(`рисуем цифру ${LETTERS[rowNumber]}`)
		parent.textContent = LETTERS.length - rowNumber

	} else if (colNumber === LETTERS.length - 1) {
		parent.textContent = rowNumber + 1


	}
	// parent.appendChild()
}

const createTableCol = (parent, rowNumber, index) => {
	const tableCol = document.createElement('td')
	tableCol.style.backgroundColor = `${(rowNumber + index) % 2 === 0 ? 'white' : 'brown'}`
	createLetter(tableCol, rowNumber, index)
	parent.appendChild(tableCol)
}


const createTableRow = (parent, rowNumber) => {
	const tableRow = document.createElement('tr');

	for (let i = 0; i < LETTERS.length; i++) {
		createTableCol(tableRow, rowNumber, i)
	}
	parent.appendChild(tableRow);
}

const createTable = () => {
	const table = document.createElement('table');
	table.classList.add('table')
	for (let i = 0; i < LETTERS.length; i++) {
		createTableRow(table, i);
	}

	container.appendChild(document.createDocumentFragment().appendChild(table))
}

export const chessInit = () => createTable();
