import GameState from '../state/GameState';
import BeginRoundController from './GameControllers/BeginRoundController';
import Hero from '../data/hero';
import { MagicPunch } from '../data/magics';
import Hand from '../entities/Hand';

export default class GameController {
  constructor() {
    this.gameState = new GameState(
      Hero,
      [
        MagicPunch,
      ],
      new Hand(3),
      new BeginRoundController()
    );

    this.currentStage = this.gameState.getInitialStateController();
  }

  getGameState() {
    return this.gameState;
  }

  update(input) {
    this.gameState.setCurrentStage(this.currentStage);
    const nextStage = this.currentStage.update(this.gameState, input);
    if (nextStage) {
      this.currentStage = nextStage;
    }
  }
}
