export const cleanAll = (parent) => {
	if (!parent) {
		throw new Error('there is no elemet!')
	}

	parent.innerHTML = ''
}
