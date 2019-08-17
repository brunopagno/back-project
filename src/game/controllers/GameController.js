import Hero from '../data/hero';
import {
  MagicPunch,
} from '../data/magics';
import Hand from '../entities/Hand';
import GameState from '../state/GameState';
import DeckService from '../services/DeckService';
import GameInputService from '../services/GameInputService';

const BEGIN_TURN = 'Begin Turn';
const DRAW = 'Draw';
const SELECT = 'Select';
const APPLY_EFFECTS = 'Apply Effects';
const FLIP_CARD = 'Flip Card';
const APPLY_CONSEQUENCES = 'Apply Consequences';
const CLEANUP = 'End Turn';

const GAME_PHASES = [
  BEGIN_TURN,
  DRAW,
  SELECT,
  APPLY_EFFECTS,
  FLIP_CARD,
  APPLY_CONSEQUENCES,
  CLEANUP,
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

    this.currentPhase = BEGIN_TURN;
  }

  update() {
    this.gameState.setCurrentPhase(this.currentPhase);
    switch (this.currentPhase) {
      case BEGIN_TURN:
        this.beginTurn(); break;
      case DRAW:
        this.draw(); break;
      case SELECT:
        this.select(); break;
      case APPLY_EFFECTS:
        this.applyEffects(); break;
      case FLIP_CARD:
        this.flipCard(); break;
      case APPLY_CONSEQUENCES:
        this.applyConsequences(); break;
      case CLEANUP:
        this.cleanup(); break;
      default:
        this.goToNextPhase();
        break;
    }
  }

  getGameState() {
    return this.gameState;
  }

  beginTurn() {
    this.gameState.hand.discardAll();
    this.goToNextPhase();
  }

  draw() {
    let count = 0;
    while (count < this.gameState.hand.size) {
      const card = DeckService.getNewCard();
      this.gameState.hand.addCard(card);
      count += 1;
    }
    this.goToNextPhase();
  }

  select() {
    const selectedIndex = GameInputService.selectedCard();

    this.gameState.selectCard(selectedIndex);
    if (this.gameState.getSelectedCard()) {
      this.goToNextPhase();
    }
  }

  applyEffects() {
    const effect = this.gameState.getSelectedCard().getEffect();
    if (effect.scriptedAction) {
      effect.scriptedAction(this.gameState);
    }

    this.goToNextPhase();
  }

  flipCard() {
    this.goToNextPhase();
  }

  applyConsequences() {
    const effect = this.gameState.getSelectedCard().getEffect();
    if (effect.scriptedAction) {
      effect.scriptedAction(this.gameState);
    }

    this.goToNextPhase();
  }

  cleanup() {
    this.gameState.clearHand();
    this.gameState.clearSelectedCard();
    this.goToNextPhase();
  }

  goToNextPhase() {
    const current = GAME_PHASES.indexOf(this.currentPhase);
    if (current >= GAME_PHASES.length - 1) {
      [this.currentPhase] = GAME_PHASES;
    } else {
      this.currentPhase = GAME_PHASES[current + 1];
    }
  }
}

export default GameController;
