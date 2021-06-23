import Base from '../base/base';

export default class Chess extends Base {
	constructor() {
		super()
		this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	}

	createTableCol(parent, rowNumber, index) {
		const tableCol = this.createElement('td');
		tableCol.style.backgroundColor = `${(rowNumber + index) % 2 === 0 ? 'white' : 'brown'}`
		this.createLetter(tableCol, rowNumber, index)
		parent.appendChild(tableCol)
	}

	createLetter(parent, rowNumber, colNumber) {
		console.log(colNumber, 'col')
		console.log(rowNumber, 'row')
		// if (rowNumber === 0 && colNumber === 0) {
		// 	console.log(`рисуем цифру ${LETTERS[rowNumber]}`)
		// }

		if (colNumber === 0) {
			console.log(`рисуем цифру ${this.letters[rowNumber]}`)
			parent.textContent = this.letters.length - rowNumber

		} else if (colNumber === this.letters.length - 1) {
			parent.textContent = rowNumber + 1


		}
		// parent.appendChild()
	}

	createTableRow(parent, rowNumber) {
		const tableRow = this.createElement('tr');

		for (let i = 0; i < this.letters.length; i++) {
			this.createTableCol(tableRow, rowNumber, i)
		}
		parent.appendChild(tableRow);
	}

	show() {
		const table = this.createElement('table', {class: 'table'});

		for (let i = 0; i < this.letters.length; i++) {
			this.createTableRow(table, i);
		}
		this.container.appendChild(table)
	}
}

