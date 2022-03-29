import { ShipmentTypes } from "./interfaces";
import { AirEastShipper } from "./Shippers/AirEastShipper";
import { ChicagoSprintShipper } from "./Shippers/ChicagoSprintShipper";
import { PacificParcelShipper } from "./Shippers/PacificParcelShipper";

/* ShipperFactory */
export class Shipper {
  static getShipper(fromAddress: string) {
    const startsWith = fromAddress.charAt(0);
    switch (startsWith) {
      case "4":
      case "5":
      case "6":
        return ChicagoSprintShipper.getInstance();

      case "7":
      case "8":
      case "9":
        return PacificParcelShipper.getInstance();
      default:
        return AirEastShipper.getInstance();
    }
  }
}
