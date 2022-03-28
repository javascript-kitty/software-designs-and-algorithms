import { Shipment } from "../Shipment";
import { IShipment } from "../interfaces";

export class Package extends Shipment {
  private static shipment: IShipment;

  constructor(state) {
    super(state);
  }

  getInstance(): IShipment {
    if (!Package.shipment) {
      Package.shipment = new Package(this.state);
    }
    return Package.shipment;
  }
}
