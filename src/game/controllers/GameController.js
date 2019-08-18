import Hero from '../data/hero';
import {
  MagicPunch,
} from '../data/magics';
import Hand from '../entities/Hand';
import GameState from '../state/GameState';
import * as StageControllers from './StageControllers';

const BEGIN_ROUND = 'Begin Round';
const DRAW = 'Draw';
const SELECT = 'Select';
const APPLY_EFFECTS = 'Apply Effects';
const FLIP_CARD = 'Flip Card';
const APPLY_CONSEQUENCES = 'Apply Consequences';
const CLEANUP = 'End Round';

const ROUND_STAGES = [
  { name: BEGIN_ROUND, stageController: StageControllers.beginRound },
  { name: DRAW, stageController: StageControllers.draw },
  { name: SELECT, stageController: StageControllers.select },
  { name: APPLY_EFFECTS, stageController: StageControllers.applyEffects },
  { name: FLIP_CARD, stageController: StageControllers.flipCard },
  { name: APPLY_CONSEQUENCES, stageController: StageControllers.applyConsequences },
  { name: CLEANUP, stageController: StageControllers.cleanup },
];

class GameController {
  constructor() {
    this.gameState = new GameState(
      Hero,
      [
        MagicPunch,
      ],
      new Hand(3),
    );

    [this.currentPhase] = ROUND_STAGES;
  }

  getGameState() {
    return this.gameState;
  }

  update() {
    this.gameState.setCurrentPhase(this.currentPhase.name);

    if (this.currentPhase.stageController(this.gameState)) {
      this.goToNextPhase();
    }
  }

  goToNextPhase() {
    const current = ROUND_STAGES.findIndex((stage) => stage === this.currentPhase);
    if (current >= ROUND_STAGES.length - 1) {
      [this.currentPhase] = ROUND_STAGES;
    } else {
      this.currentPhase = ROUND_STAGES[current + 1];
    }
  }
}

export default GameController;
