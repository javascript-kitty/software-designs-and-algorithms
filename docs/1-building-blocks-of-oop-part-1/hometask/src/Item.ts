import { Comparable } from "./Comparable";

let id = 0;

export const compareHelper = (x, y): number => (x > y ? 1 : -1);

export abstract class Item implements Comparable<Item> {
  private static numberOfItems: number;

  id: number;
  name: string;
  value: number;
  weight: number;

  constructor(name, value, weight) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.id = Item.numberOfItems;
    Item.numberOfItems += 1;
  }
  public compareTo(other: Item): number {
    if (this.value !== other.value) {
      return compareHelper(this.value, other.value);
    } else {
      return compareHelper(
        this.name.toLocaleLowerCase(),
        other.name.toLocaleLowerCase()
      );
    }
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(
      2
    )}`;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getValue(): number {
    return this.value;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setId(value: number): void {
    this.id = value;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public setWeight(value: number): void {
    this.weight = value;
  }

  abstract use(): string;

  static reset(): void {
    id = 0;
  }
}
