import { Shipment } from "../Shipment";
import { IShipment } from "../interfaces";

export class Oversized extends Shipment {
  private static shipment: IShipment;

  constructor(state) {
    super(state);
  }

  getInstance(): IShipment {
    if (!Oversized.shipment) {
      Oversized.shipment = new Oversized(this.state);
    }
    return Oversized.shipment;
  }
}
