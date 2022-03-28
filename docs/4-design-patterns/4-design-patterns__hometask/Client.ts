import { IShipment, State } from "./interfaces";
import { Shipment } from "./Shipment";
import { Letter } from "./Shipments/Letter";
import { Oversized } from "./Shipments/Oversized";
import { Package } from "./Shipments/Package";

export class Client {
  shipment: IShipment;

  shipItem(shipmentInfo: State) {
    const shipment: IShipment = this.createShipment(shipmentInfo);
    shipment.ship();
  }

  private createShipment(state): IShipment {
    if (state.weight <= 15) {
      return new Letter(state).getInstance();
    } else if (state.weight <= 160) {
      return new Package(state).getInstance();
    } else {
      return new Oversized(state).getInstance();
    }
  }
}
