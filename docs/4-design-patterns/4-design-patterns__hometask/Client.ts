import { DoNotLeaveDecorator } from "./Decorators/DoNotLeave";
import { FragileDecorator } from "./Decorators/Fragile";
import { ReturnReceiptDecorator } from "./Decorators/ReturnReceipt";
import { IShipment, Marks, State } from "./interfaces";
import { Letter } from "./Shipments/Letter";
import { Oversized } from "./Shipments/Oversized";
import { Package } from "./Shipments/Package";

export default class Client {
  shipment: IShipment;

  shipItem(shipmentInfo: State) {
    let shipment: IShipment = this.createShipment(shipmentInfo);
    const marks = shipmentInfo.marks;
    if (marks.length > 0) {
      if (marks.includes(Marks.FRAGILE)) {
        shipment = new FragileDecorator(shipment);
      }
      if (marks.includes(Marks.DO_NOT_LEAVE)) {
        shipment = new DoNotLeaveDecorator(shipment);
      }
      if (marks.includes(Marks.RETURN_RECEIPT_REQUESTED)) {
        shipment = new ReturnReceiptDecorator(shipment);
      }
    }

    shipment.ship(shipmentInfo);
  }

  private createShipment(state): IShipment {
    if (state.weight <= 15) {
      return Letter.getInstance();
    } else if (state.weight <= 160) {
      return Package.getInstance();
    } else {
      return Oversized.getInstance();
    }
  }
}
