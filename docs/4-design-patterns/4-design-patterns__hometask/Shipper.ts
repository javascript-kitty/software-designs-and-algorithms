import { ShipmentTypes } from "./interfaces";
import { AirEastShipper } from "./Shippers/AirEastShipper";
import { ChicagoSprintShipper } from "./Shippers/ChicagoSprintShipper";
import { PacificParcelShipper } from "./Shippers/PacificParcelShipper";

export class Shipper {
  getCost(fromAddress: string, weight: number, type: ShipmentTypes) {
    const startsWith = fromAddress.charAt(0);
    switch (startsWith) {
      case "4":
      case "5":
      case "6":
        return new ChicagoSprintShipper().getCost(weight, type);

      case "7":
      case "8":
      case "9":
        return new PacificParcelShipper().getCost(weight, type);
      default:
        return new AirEastShipper().getCost(weight, type);
    }
  }
}
