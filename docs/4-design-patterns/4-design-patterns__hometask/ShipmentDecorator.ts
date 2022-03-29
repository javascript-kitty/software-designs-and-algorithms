import { IShipment, State } from "./interfaces";

export class ShipmentDecorator implements IShipment {
  protected shipment: IShipment;

  constructor(shipment: IShipment) {
    this.shipment = shipment;
  }

  getShimpentID() {
    return this.shipment.getShimpentID();
  }

  ship(state: State): string {
    return this.shipment.ship(state);
  }
}
