import { Item } from "./Item";

export abstract class Consumable extends Item {
  consumed: boolean = false;
  spoiled: boolean;

  constructor(name, value, weight, spoiled) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }
  isConsumed(): boolean {
    return this.consumed;
  }

  isSpoiled(): boolean {
    return this.spoiled;
  }
  setConsumed(value: boolean): void {
    this.consumed = value;
  }

  setSpoiled(value: boolean): void {
    this.spoiled = value;
  }

  eat(): string {
    const text = `You eat the ${this.name}.`;
    return !this.spoiled ? text : `${text} \n You feel sick.`;
  }
  use(): string {
    if (this.consumed) {
      return `There is nothing left of the  ${this.name} to consume.`;
    } else {
      return this.eat();
    }
  }
}
