import RoundIndicator from './components/RoundIndicator';
import DebugAdvanceRound from './components/DebugAdvanceRound';
import DebugGameStateInfo from './components/DebugGameStateInfo';

const DEBUG = true;

export default class GameView {
  constructor(id) {
    this.rootElement = document.getElementById(id);

    if (DEBUG) {
      this.debugAdvanceRound = new DebugAdvanceRound(this.rootElement);
    }

    this.roundIndicator = new RoundIndicator(this.rootElement);

    if (DEBUG) {
      this.debugGameStateInfo = new DebugGameStateInfo(this.rootElement);
    }
  }

  draw(gameState) {
    if (DEBUG) {
      this.debugGameStateInfo.draw(gameState);
    }

    this.roundIndicator.draw(gameState);
  }
}
