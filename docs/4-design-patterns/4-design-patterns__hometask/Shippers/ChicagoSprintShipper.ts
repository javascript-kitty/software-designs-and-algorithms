import { IShipper, ShipmentTypes } from "../interfaces";

export class ChicagoSprintShipper implements IShipper {
  getCost(weight: number, type: ShipmentTypes): number {
    return type === ShipmentTypes.Letter
      ? 0.42 * weight
      : ShipmentTypes.Package
      ? 0.2 * weight
      : 0;
  }
}
