export default class Magic {
  constructor(name, description, damage, duration = 0, effect = null) {
    this.name = name;
    this.description = description;
    this.damage = damage;
    this.duration = duration;
    this.effect = effect;
  }
}
