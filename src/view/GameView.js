import RoundIndicator from './components/RoundIndicator';
import DebugAdvanceRound from './components/DebugAdvanceRound';

export default class GameView {
  constructor(id) {
    this.rootElement = document.getElementById(id);

    this.debugAdvanceRound = new DebugAdvanceRound(this.rootElement);
    this.roundIndicator = new RoundIndicator(this.rootElement);
  }

  draw(gameState) {
    this.roundIndicator.draw(gameState);
  }
}
