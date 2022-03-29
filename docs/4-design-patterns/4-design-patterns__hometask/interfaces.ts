export interface IShipment {
  getShimpentID(): number;
  ship(state: State): string;
}
export enum Marks {
  FRAGILE = "Fragile",
  DO_NOT_LEAVE = "Do Not Leave",
  RETURN_RECEIPT_REQUESTED = "Return Receipt Requested",
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
  marks?: Marks[];
}

export enum ShipmentTypes {
  Letter = "letter",
  Package = "package",
  Oversized = "oversized",
}
