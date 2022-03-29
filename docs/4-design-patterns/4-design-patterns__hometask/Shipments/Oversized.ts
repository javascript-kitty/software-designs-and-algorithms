import { Shipment } from "../Shipment";
import { IShipment, ShipmentTypes } from "../interfaces";

export class Oversized extends Shipment {
  private static shipment: IShipment;

  getShipmentType(): ShipmentTypes {
    return ShipmentTypes.Oversized;
  }

  static getInstance(): IShipment {
    if (!Oversized.shipment) {
      Oversized.shipment = new Oversized();
    }
    return Oversized.shipment;
  }
}
