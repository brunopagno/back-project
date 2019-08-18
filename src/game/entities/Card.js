export default class Card {
  constructor(name, description, effect, consequences) {
    this.name = name;
    this.description = description;
    this.effect = effect;
    this.consequences = consequences;
  }

  getEffect() {
    return this.effect;
  }

  getConsequences() {
    return this.consequences;
  }
}
