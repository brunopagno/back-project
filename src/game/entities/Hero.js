import Grimoire from './Grimoire';

export default class Hero {
  constructor(health, healthRegenRate, mana, manaRegenRate) {
    this.health = health;
    this.currentHealth = health;
    this.healthRegenRate = healthRegenRate;
    this.mana = mana;
    this.currentMana = mana;
    this.manaRegenRate = manaRegenRate;
    this.experience = 0;
    this.grimoire = new Grimoire();
  }

  addMagicToGrimoire(magic) {
    this.grimoire.addMagic(magic);
  }

  getMagicFromGrimoire(index) {
    this.grimoire.getMagic(index);
  }
}
