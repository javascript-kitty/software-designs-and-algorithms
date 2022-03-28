export interface IShipment {
  // shimpent: IShipment;
  shipper: IShipper;
  ship(): string;
  // getShipmentID(): string;
}

export interface IShipper {
  getCost(weight: number, type: ShipmentTypes): number;
}

export interface State {
  shipmentID: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
}

export enum ShipmentTypes {
  Letter = "letter",
  Package = "package",
  Oversized = "oversized",
}
