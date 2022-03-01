import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage, baseDurability, value, weight) {
    super("sword", baseDamage, baseDurability, value, weight);
  }
  polish() {
    const maxDamage = this.baseDamage * 0.25;
    const newValue = this.damageModifier + this.MODIFIER_CHANGE_RATE;
    this.setDamageModifier(newValue < maxDamage ? newValue : maxDamage);
  }
}
