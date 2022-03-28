import { IShipper, ShipmentTypes } from "../interfaces";
import { Shipper } from "../Shipper";

export class PacificParcelShipper implements IShipper {
  getCost(weight: number, type: ShipmentTypes): number {
    return type === ShipmentTypes.Letter
      ? 0.51 * weight
      : ShipmentTypes.Package
      ? 0.19 * weight
      : 0.19 * weight + weight * 0.02;
  }
}
