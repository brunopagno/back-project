import Living from './Living';

export default class Monster extends Living {
  constructor(name, description, health, mana, grimoire) {
    super(health, mana, grimoire);
    this.name = name;
    this.description = description;
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
}
