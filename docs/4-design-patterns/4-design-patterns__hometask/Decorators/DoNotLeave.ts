import { State } from "../interfaces";
import { ShipmentDecorator } from "../ShipmentDecorator";

export class DoNotLeaveDecorator extends ShipmentDecorator {
  ship(state: State): string {
    return `${this.shipment.ship(
      state
    )} \n **DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}
