import { ShipmentDecorator } from "../ShipmentDecorator";

export class ReturnReceiptDecorator extends ShipmentDecorator {
  ship(): string {
    return `${this.shipment.ship()} \n **MARK RETURN RECEIPT REQUESTED**`;
  }
}
