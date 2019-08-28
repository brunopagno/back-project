import Hero, { HandSize } from '../data/hero';
import Hand from '../entities/Hand';

class GameState {
  initialize() {
    this.hero = Hero;
    this.hand = new Hand(HandSize);
    this.action = undefined;
    this.battle = undefined;
  }
}

const instance = new GameState();
export default instance;
