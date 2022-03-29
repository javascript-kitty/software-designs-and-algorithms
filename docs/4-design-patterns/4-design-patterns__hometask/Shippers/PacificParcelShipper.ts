import { IShipper, ShipmentTypes } from "../interfaces";

export class PacificParcelShipper implements IShipper {
  static instance;

  getCost(weight: number, type: ShipmentTypes): number {
    return type === ShipmentTypes.Letter
      ? 0.51 * weight
      : ShipmentTypes.Package
      ? 0.19 * weight
      : 0.19 * weight + weight * 0.02;
  }

  static getInstance() {
    return PacificParcelShipper.instance || new PacificParcelShipper();
  }
}
