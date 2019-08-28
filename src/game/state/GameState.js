import Hero, { HandSize } from '../data/hero';
import Hand from '../entities/Hand';

class GameState {
  initialize() {
    this.hero = Hero;
    this.hand = new Hand(HandSize);
    this.frontAction = undefined;
    this.battle = undefined;
  }

  hasFrontAction() {
    return !!this.frontAction;
  }

  setFrontAction(frontAction) {
    this.frontAction = frontAction;
  }

  hasBackAction() {
    return !!this.backAction;
  }

  setBackAction(backAction) {
    this.backAction = backAction;
  }
}

const instance = new GameState();
export default instance;
