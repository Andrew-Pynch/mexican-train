import { Train } from "./train"

export enum StationType {
	North,
	NorthEast,
	East,
	SouthEast,
	South,
	SouthWest,
	West,
	NorthWest,
	Central
}

export type Station = {
	id: StationType,
	isPublic: boolean
	train: Train
}
