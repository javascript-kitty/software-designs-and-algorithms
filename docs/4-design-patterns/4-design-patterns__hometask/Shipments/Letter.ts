import { IShipment, ShipmentTypes } from "../interfaces";
import { Shipment } from "../Shipment";

export class Letter extends Shipment {
  private static shipment: IShipment;

  static getInstance(): IShipment {
    if (!Letter.shipment) {
      Letter.shipment = new Letter();
    }
    return Letter.shipment;
  }

  getShipmentType(): ShipmentTypes {
    return ShipmentTypes.Letter;
  }
}
