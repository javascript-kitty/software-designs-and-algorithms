import { compareHelper, Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    return first.weight !== second.weight
      ? compareHelper(first.weight, second.weight)
      : first.compareTo(second);
  }
}
