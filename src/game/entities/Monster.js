import Living from './Living';
import { sampleFromRange } from '../util';

export default class Monster extends Living {
  constructor(name, description, image, health, mana, grimoire) {
    super(health, mana, grimoire);
    this.name = name;
    this.description = description;
    this.image = image;
  }

  getCurrentHealth() {
    return this.currentHealth;
  }

  takeDamage(damage) {
    this.currentHealth -= damage;
  }

  getGrimoire() {
    return this.grimoire;
  }

  randomMagicIndex() {
    return sampleFromRange(0, this.grimoire.magics.length - 1);
  }
}
