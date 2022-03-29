import { IShipper, ShipmentTypes } from "../interfaces";

export class AirEastShipper implements IShipper {
  static instance;

  getCost(weight: number, type: ShipmentTypes): number {
    return type === ShipmentTypes.Letter
      ? 0.39 * weight
      : ShipmentTypes.Package
      ? 0.25 * weight
      : 0.25 * weight + 10;
  }

  static getInstance() {
    return AirEastShipper.instance || new AirEastShipper();
  }
}
