import { ShipmentDecorator } from "../ShipmentDecorator";

export class DoNotLeaveDecorator extends ShipmentDecorator {
  ship(): string {
    return `${this.shipment.ship()} \n **DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}
