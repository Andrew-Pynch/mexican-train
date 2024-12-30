import { Domino, DominoHelpers } from "./domino";

const main = () => {
	let dominos = DominoHelpers.getDoubleTwelveDominoSet();
	const isValid = DominoHelpers.verifyDominoSet(dominos);

	console.log("IS VALID")
}

main();
