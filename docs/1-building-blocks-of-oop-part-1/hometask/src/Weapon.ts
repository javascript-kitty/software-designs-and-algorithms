import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected MODIFIER_CHANGE_RATE: number = 0.05
  private currentDurability:number; 

  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  durabilityModifier: number;
  name:string;
  value:number;
  weight:number;


    constructor(name,value,weight,baseDamage, baseDurability) {
      super(name,value,weight)
      this.baseDamage = baseDamage;
      this.baseDurability= baseDurability;
      this.damageModifier = this.MODIFIER_CHANGE_RATE;
      this.durabilityModifier = this.MODIFIER_CHANGE_RATE;
      this.currentDurability = this.baseDurability + this.durabilityModifier;
    }
  
    getDamage():number{
        return this.baseDamage + this.damageModifier; //effective damage that this Weapon can do on a single use.
    }
    getDurability():number{
        return this.baseDurability + this.durabilityModifier; // effective durability of the Weapon
    }
    toString():string{
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight.toFixed(2)}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(this.getDurability()*100).toFixed(2)}%`
    }
    use():string{
       let message;
        if(this.currentDurability <=0){
         message = `You can't use the ${this.name}, it is broken.`;
        }else{
         message = `You use the ${this.name}, dealing ${this.getDamage().toFixed(2)} points of damage.` 
         const newValue = this.currentDurability - this.MODIFIER_CHANGE_RATE
         this.setCurrentDurability(newValue) 
         message = newValue > 0? message: `${message} \n The ${this.name} breaks.`
       
      }
      return message
    }

    setCurrentDurability(value:number):void{
      this.currentDurability = value
    }

    setDamageModifier (value:number):void{
      this.damageModifier = value
    }

    setDurabilityModifier (value:number):void{
        this.durabilityModifier = value
      }

   abstract polish(): void;
}
