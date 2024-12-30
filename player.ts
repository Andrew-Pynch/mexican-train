import { Domino } from "./domino";
import { MexicanTrainGame } from "./game";
import { GenericHelpers } from "./genericHelpers";

export class Player {
	private _playerDominos: Domino[] = [];

	getPlayerDominos(): Domino[] {
		return this._playerDominos
	}

	drawDominos({ amount, drawFrom }: { amount: number, drawFrom: Domino[] }): void {
		for (let i = 0; i <= amount; i++) {
			const randomDomino = GenericHelpers.removeRandomElement(drawFrom)
			this._playerDominos.push(randomDomino);
		}
	}
}
