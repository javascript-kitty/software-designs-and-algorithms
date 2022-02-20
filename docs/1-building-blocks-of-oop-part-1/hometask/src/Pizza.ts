import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    numberOfSlices: number;
    slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('pizza')
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0
    }
}