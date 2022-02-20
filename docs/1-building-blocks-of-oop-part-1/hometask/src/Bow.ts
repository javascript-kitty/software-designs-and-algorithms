import { Weapon } from "./Weapon";

export abstract class Bow extends Weapon {
 
    constructor(value,weight,baseDamage, baseDurability) {
        super('bow',value,weight, baseDamage, baseDurability)
        this.name = 'bow';
        this.baseDamage = baseDamage;
        this.baseDurability= baseDurability;
        this.damageModifier = this.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = this.MODIFIER_CHANGE_RATE;
      }
    polish(){
        const newValue =  this.durabilityModifier +this.MODIFIER_CHANGE_RATE
        this.setDurabilityModifier(newValue>=1 ? 1:newValue)
    }
}