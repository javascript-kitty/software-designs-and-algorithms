import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    items: Item[] = [];

    addItem(item:Item):void{
     this.items.push(item)
    }
    sort():void
    sort(comparator: ItemComparator){}
    
    toString():string{
        return this.items.join(', ');
    }
}