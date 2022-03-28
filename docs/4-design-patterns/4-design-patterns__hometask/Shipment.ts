import { IShipment, IShipper, State } from "./interfaces";

export abstract class Shipment {
  shipper: IShipper;
  state: State;
  id: number = 0;

  constructor(state: State) {
    this.state = state;
  }

  getShimpentID() {
    return this.id + 1;
  }

  ship(): string {
    const text = `Shipment with the ID ${this.id} will be picked up from ${this.state.fromZipCode} ${this.state.fromAddress} and shipped to ${this.state.toZipCode} ${this.state.toAddress}`;
    return text;
  }
  abstract getInstance(): IShipment;
}
