import { Comparable } from './Comparable';

let id = 0;

export const compareHelper=(x, y):number=> x > y? 1: -1

export abstract class Item implements Comparable<Item> {
    private static numberOfItems:number;
    
    id: number;
    name:string;
    value:number;
    weight:number;

    constructor(name,value,weight) {
      this.name = name;
      this.value = value;
      this.weight = weight;
      this.id = Item.numberOfItems;
      Item.numberOfItems += 1;
    }
    public compareTo(other: Item): number {
       return this.value !== other.value ? compareHelper(this.value, other.value) 
       :compareHelper( this.name.toLocaleLowerCase(),  other.name.toLocaleLowerCase())

    }

    public toString():string{
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`
    }

    static reset():void{
        id=0
    }
    private increaseId():void{
        id = id+1
    }
}
