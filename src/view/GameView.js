import GameState from '../game/state/GameState';
import StageIndicator from './components/StageIndicator';
import DebugAdvanceRound from './components/DebugAdvanceRound';

const DEBUG = true;

class GameView {
  initialize(id) {
    this.rootElement = document.getElementById(id);

    if (DEBUG) {
      this.debugAdvanceRound = new DebugAdvanceRound(this.rootElement);
    }

    this.stageIndicator = new StageIndicator(this.rootElement);
  }

  draw() {
    this.stageIndicator.draw(GameState);
  }
}

const instance = new GameView();
export default instance;
