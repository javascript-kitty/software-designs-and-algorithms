import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("pizza", 10, 100, spoiled);
    this.numberOfSlices = numberOfSlices;
  }
  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten = this.slicesEaten - 1;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
    } else {
      return this.use();
    }
  }
}
