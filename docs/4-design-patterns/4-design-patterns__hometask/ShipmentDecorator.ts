import { IShipment, State } from "./interfaces";
import { Shipment } from "./Shipment";

export class ShipmentDecorator extends Shipment {
  protected shipment: Shipment;

  constructor(state: State) {
    super(state);
    this.state = state;
  }
  
  getInstance(): IShipment {
    return this.shipment.getInstance();
  }

  getShimpentID() {
    return this.shipment.getShimpentID();
  }

  ship(): string {
    return this.shipment.ship();
  }
}
