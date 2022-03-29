import { Shipment } from "../Shipment";
import { IShipment, ShipmentTypes } from "../interfaces";

export class Package extends Shipment {
  private static shipment: IShipment;

  getShipmentType(): ShipmentTypes {
    return ShipmentTypes.Package;
  }

  static getInstance(): IShipment {
    if (!Package.shipment) {
      Package.shipment = new Package();
    }
    return Package.shipment;
  }
}
