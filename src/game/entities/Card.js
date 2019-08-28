import SlimeImage from '../../img/slime.png';

import { sample } from '../util';

export default class Card {
  constructor(name, description, front, back) {
    this.name = name;
    this.description = description;
    this.image = SlimeImage;
    this.front = front;
    this.back = back;
  }

  executeFrontAction(gameState) {
    console.log(`EXECUTE FRONT OF ${this.name}`);
    const action = this.getAction(this.front);
    return action(gameState);
  }

  executeBackAction(gameState) {
    console.log(`EXECUTE BACK OF ${this.name}`);
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
