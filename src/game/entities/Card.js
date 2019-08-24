import { sample } from '../util';

export default class Card {
  constructor(name, description, front, back) {
    this.name = name;
    this.description = description;
    this.front = front;
    this.back = back;
  }

  executeFrontAction(gameState) {
    const action = this.getAction(this.front);
    return action(gameState);
  }

  executeBackAction(gameState) {
    const action = this.getAction(this.back);
    return action(gameState);
  }

  getAction(side) {
    if (Array.isArray(side)) {
      return sample(side);
    }
    return side;
  }
}
