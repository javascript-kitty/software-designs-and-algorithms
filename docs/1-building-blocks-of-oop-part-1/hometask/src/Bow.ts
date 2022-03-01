import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage, baseDurability, value, weight) {
    super("bow", baseDamage, baseDurability, value, weight);
  }
  polish() {
    const newValue = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
    this.setDurabilityModifier(newValue >= 1 ? 1 : newValue);
  }
}
