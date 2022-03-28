import { IShipment, ShipmentTypes } from "../interfaces";
import { Shipment } from "../Shipment";

export class Letter extends Shipment {
  private static shipment: IShipment;

  constructor(state) {
    super(state);
  }

  getInstance(): IShipment {
    if (!Letter.shipment) {
      Letter.shipment = new Letter(this.state);
    }
    return Letter.shipment;
  }
  ship(): string {
    return `${Letter.shipment.ship()} Cost = ${this.shipper.getCost(
      this.state.weight,
      ShipmentTypes.Letter
    )}`;
  }
}
