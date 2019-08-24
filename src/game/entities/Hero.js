import Grimoire from './Grimoire';
import Living from './Living';

export default class Hero extends Living {
  constructor(health, healthRegenRate, mana, manaRegenRate, initialMagics) {
    super(health, mana, new Grimoire());
    this.healthRegenRate = healthRegenRate;
    this.manaRegenRate = manaRegenRate;
    this.experience = 0;
    initialMagics.forEach((magic) => {
      this.addMagicToGrimoire(magic);
    });
  }

  addMagicToGrimoire(magic) {
    this.grimoire.addMagic(magic);
  }

  getMagicFromGrimoire(index) {
    this.grimoire.getMagic(index);
  }

  takeDamage(damage) {
    this.currentHealth -= damage;
  }
}
