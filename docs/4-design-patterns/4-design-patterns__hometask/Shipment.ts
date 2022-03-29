import { IShipment, IShipper, ShipmentTypes, State } from "./interfaces";
import { Shipper } from "./Shipper";

let idCounter = 0;

export abstract class Shipment implements IShipment {
  shipper: IShipper;

  id = idCounter++;

  getShimpentID() {
    return this.id;
  }

  private getShipper(fromZipCode: string): IShipper {
    return Shipper.getShipper(fromZipCode);
  }

  abstract getShipmentType(): ShipmentTypes;

  ship(state: State): string {
    const id = state.shipmentID != null ? state.shipmentID : idCounter++;
    const cost = this.getShipper(state.fromZipCode).getCost(
      state.weight,
      this.getShipmentType()
    );
    const text = `Shipment with the ID ${this.id} will be picked up from ${state.fromZipCode} ${state.fromAddress} and shipped to ${state.toZipCode} ${state.toAddress} COST: ${cost}`;
    return text;
  }
}
