import { sample } from '../util';

export default class Card {
  constructor(name, description, image, front, back) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.front = front;
    this.back = back;
  }

  executeFrontAction(gameState) {
    console.log(`EXECUTE FRONT OF ${this.name}`);
    const action = this.getAction(this.front);
    return action.script(gameState);
  }

  executeBackAction(gameState) {
    console.log(`EXECUTE BACK OF ${this.name}`);
    const action = this.getAction(this.back);
    return action.script(gameState);
  }

  getAction(side) {
    if (Array.isArray(side)) {
      return sample(side);
    }
    return side;
  }
}
