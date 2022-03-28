import { ShipmentDecorator } from "../ShipmentDecorator";

export class FragileDecorator extends ShipmentDecorator {

    ship(): string {
        return `${this.shipment.ship()} \n **MARK FRAGILE**`;
      }
}
