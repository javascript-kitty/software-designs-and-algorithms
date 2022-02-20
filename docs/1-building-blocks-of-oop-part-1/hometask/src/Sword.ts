import { Weapon } from "./Weapon";

export abstract class Sword extends Weapon {
 
    constructor(value,weight,baseDamage, baseDurability) {
        super('sword',value,weight, baseDamage, baseDurability)
        this.name = 'sword';
        this.baseDamage = baseDamage;
        this.baseDurability= baseDurability;
        this.damageModifier = this.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = this.MODIFIER_CHANGE_RATE;
      }
    polish(){
        const maxDamage = this.baseDamage * 0.25;
        const newValue =  this.damageModifier +this.MODIFIER_CHANGE_RATE
        this.setDamageModifier(newValue<maxDamage? newValue:maxDamage)
    }
}