import Hero from '../data/hero';
import {
  MagicPunch,
} from '../data/magics';
import Hand from '../entities/Hand';
import GameState from '../state/GameState';
import BeginRoundController from './StageControllers/BeginRoundController';
import DrawController from './StageControllers/DrawController';
import SelectController from './StageControllers/SelectController';
import ApplyEffectsController from './StageControllers/ApplyEffectsController';
import FlipCardController from './StageControllers/FlipCardController';
import CleanupController from './StageControllers/CleanupController';

const BEGIN_ROUND = 'Begin Round';
const DRAW = 'Draw';
const SELECT = 'Select';
const APPLY_EFFECTS = 'Apply Effects';
const FLIP_CARD = 'Flip Card';
const APPLY_CONSEQUENCES = 'Apply Consequences';
const CLEANUP = 'End Round';

const ROUND_STAGES = [
  { name: BEGIN_ROUND, stageController: new BeginRoundController() },
  { name: DRAW, stageController: new DrawController() },
  { name: SELECT, stageController: new SelectController() },
  { name: APPLY_EFFECTS, stageController: new ApplyEffectsController() },
  { name: FLIP_CARD, stageController: new FlipCardController() },
  { name: APPLY_CONSEQUENCES, stageController: new ApplyEffectsController() },
  { name: CLEANUP, stageController: new CleanupController() },
];

export default class GameController {
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

  update(input) {
    this.gameState.setCurrentPhase(this.currentPhase.name);

    this.currentPhase.stageController.update(this.gameState, input);
    if (this.currentPhase.stageController.hasFinished(this.gameState)) {
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
