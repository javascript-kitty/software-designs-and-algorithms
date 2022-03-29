import { State } from "../interfaces";
import { ShipmentDecorator } from "../ShipmentDecorator";

export class FragileDecorator extends ShipmentDecorator {
  ship(state: State): string {
    return `${this.shipment.ship(state)} \n **MARK FRAGILE**`;
  }
}
