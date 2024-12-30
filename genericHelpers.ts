
const removeRandomElement = <T>(array: T[]): T => {
	if (array.length === 0) {
		throw new Error("No elements to remove")
	}

	const randomIndex = Math.floor(Math.random() * array.length);
	return array.splice(randomIndex, 1)[0];
}

export const GenericHelpers = {
	removeRandomElement,
}
