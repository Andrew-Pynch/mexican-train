export type Domino = {
	firstValue: number,
	secondValue: number
}

const getDoubleTwelveDominoSet = (): Domino[] => {
	let dominos: Domino[] = [];

	for (let i = 0; i <= 12; i++) {
		for (let j = i; j <= 12; j++) {
			let domino: Domino = {
				firstValue: i,
				secondValue: j
			}

			console.log("\n\n=====PUSHING DOMINO=====")
			console.log(domino)
			console.log("==========\n\n")

			dominos.push(domino);
		}
	}

	return dominos;
}

const verifyDominoSet = (dominos: Domino[]): boolean => {
	// Check total count
	const expectedCount = 91; // (12+1)(12+2)/2
	if (dominos.length !== expectedCount) {
		console.error(`Invalid domino count. Expected ${expectedCount}, got ${dominos.length}`);
		return false;
	}

	// Check for duplicates
	const dominoStrings = dominos.map(d => `${d.firstValue},${d.secondValue}`);
	const uniqueDominos = new Set(dominoStrings);
	if (uniqueDominos.size !== dominos.length) {
		console.error('Found duplicate dominoes in set');
		return false;
	}

	// Check value ranges
	const hasInvalidValues = dominos.some(d =>
		d.firstValue < 0 || d.firstValue > 12 ||
		d.secondValue < 0 || d.secondValue > 12
	);
	if (hasInvalidValues) {
		console.error('Found domino with values outside valid range (0-12)');
		return false;
	}

	return true;
}

export const DominoHelpers = {
	getDoubleTwelveDominoSet,
	verifyDominoSet
}

